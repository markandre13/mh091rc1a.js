import { DirectoryList } from "./DirectoryList"
import { Vertex } from "./Vertex"
import { PoseRotation } from "./PoseRotation"
import { PoseTranslation } from "./PoseTranslation"
import { vec3 } from "gl-matrix"

export class UnsortedUsedVertex extends Array<number> {}

export function calcCenteroid(vertexNumbers: number[], vertexvector: Vertex[]): vec3
{
  let center = vec3.create()
  for(const vn of vertexNumbers) {
    vec3.add(center, center, vertexvector[vn].co)
  }
  vec3.scale(center, center, 1/vertexNumbers.length)
  return center;
}


export class PoseTarget {
    // normally these vectors contain only one element
    /// Translations to be applied on Mesh::doPose()
    private positiveTranslations: PoseTranslation[] = []
    /// Translations to be applied on Mesh::doPose() with morph_value < 0
    private negativeTranslations: PoseTranslation[] = []
    /// Rotations to be applied on Mesh::doPose()
    private positiveRotations: PoseRotation[] = []
    /// Rotations to be applied on Mesh::doPose() with morph_value < 0
    private negativeRotations: PoseRotation[] = []

    private targetName: string
    /// flags whether wehave special transformations for Mesh::doPose() with morph_value < 0
    private negative: boolean = false
    private positive: boolean = false
    /// flag for calcNormalizations()
    private normalizationInited: boolean = false
    private fullPath: string
    private modVertex = new Set<number>()
    private minAngle: number = 0.0
    private maxAngle: number = 0.0

    /// Initializes the center of all rotations with the controid of their centerVertexNumbers
    private calcRotationsCenteroids(vertexvector: Vertex[], rotations: PoseRotation[]): void {
        for(const rotations_it of rotations) {
            rotations_it.setCenter(calcCenteroid(rotations_it.getCenterVertexNumbers(), vertexvector))
        }
    }
    
    private calcTranslationsFormFactors(vertexvector: Vertex[], translations: PoseTranslation[]): void {
        throw Error("not implemented yet")
    }

    constructor(targetName: string, fullpath: string) {
        this.targetName = targetName
        this.fullPath = fullpath
    }
    load() {
        const positive_rotation_type = ".rot"
        const negative_rotation_type = "-.rot"
        const positive_translation_type = ".target"
        const negative_translation_type = "-.target"

        const dir_list = new DirectoryList()
        dir_list.setRootPath(this.fullPath)
        dir_list.setRecursive(0)

        const files = dir_list.getDirectoryList()
        for (const file of files) {
            const target_name = file.substring(this.fullPath.length + 1)
            if (target_name.endsWith(negative_rotation_type)) {
                const tmpRotation = new PoseRotation()
                if (tmpRotation.load(file)) {
                    tmpRotation.setCat(target_name.substring(0, 2))
                    tmpRotation.setLimb(target_name.indexOf("LIMB") !== -1)
                    this.negativeRotations.push(tmpRotation)
                    tmpRotation.getModVertex().forEach((idx) => this.modVertex.add(idx))
                    this.negative = true
                    this.minAngle = Math.min(this.minAngle, tmpRotation.getMinAngle())
                }
            }
            if (target_name.endsWith(positive_rotation_type)) {
                const tmpRotation = new PoseRotation()
                if (tmpRotation.load(file)) {
                    tmpRotation.setCat(target_name.substring(0, 2))
                    tmpRotation.setLimb(target_name.indexOf("LIMB") !== -1)
                    this.positiveRotations.push(tmpRotation)
                    tmpRotation.getModVertex().forEach((idx) => this.modVertex.add(idx))
                    this.positive = true
                    this.maxAngle = Math.min(this.maxAngle, tmpRotation.getMaxAngle())
                }
            }
            if (target_name.endsWith(negative_translation_type)) {
                const tmpTranslation = new PoseTranslation()
                if (tmpTranslation.load(file)) {
                    tmpTranslation.setCat(target_name.substring(0, 2))
                    this.negativeTranslations.push(tmpTranslation)
                    tmpTranslation.getModVertex().forEach((idx) => this.modVertex.add(idx))
                    this.minAngle = Math.min(this.minAngle, tmpTranslation.getMinAngle())
                }
            }
            if (target_name.endsWith(positive_translation_type)) {
                const tmpTranslation = new PoseTranslation()
                if (tmpTranslation.load(file)) {
                    tmpTranslation.setCat(target_name.substring(0, 2))
                    this.positiveTranslations.push(tmpTranslation)
                    tmpTranslation.getModVertex().forEach((idx) => this.modVertex.add(idx))
                    this.maxAngle = Math.min(this.maxAngle, tmpTranslation.getMaxAngle())
                }
            }
        }
    }
    hasNegative() {
        return this.negative
    }
    hasPositive() {
        return this.positive
    }
    getPositiveTranslations() {
        return this.positiveTranslations
    }
    getNegativeTranslations() {
        return this.negativeTranslations
    }
    getPositiveRotations() {
        return this.positiveRotations
    }
    getNegativeRotations() {
        return this.negativeRotations
    }
    getModVertex() {
        return this.modVertex
    }
    //void showCenters();
    getMinAngle() {
        return this.minAngle
    }
    getMaxAngle() {
        return this.maxAngle
    }
}
