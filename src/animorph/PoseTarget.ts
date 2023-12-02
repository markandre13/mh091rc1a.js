import { DirectoryList } from "./DirectoryList"
import { PoseRotation } from "./PoseRotation"
import { PoseTranslation } from "./PoseTranslation"
import { vec3 } from "gl-matrix"
import { VertexVector } from "./VertexVector"
import { VectorArray } from "./VectorArray"

export class UnsortedUsedVertex extends Array<number> {}

export function calcCenteroid(vertexNumbers: number[], vertexvector: VectorArray): vec3 {
    let center = vec3.create()
    for (const vn of vertexNumbers) {
        vec3.add(center, center, vertexvector.getVec3(vn))
    }
    vec3.scale(center, center, 1 / vertexNumbers.length)
    return center
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
                continue
            }
            if (target_name.endsWith(positive_rotation_type)) {
                const tmpRotation = new PoseRotation()
                if (tmpRotation.load(file)) {
                    tmpRotation.setCat(target_name.substring(0, 2))
                    tmpRotation.setLimb(target_name.indexOf("LIMB") !== -1)
                    this.positiveRotations.push(tmpRotation)
                    tmpRotation.getModVertex().forEach((idx) => this.modVertex.add(idx))
                    this.positive = true
                    this.maxAngle = Math.max(this.maxAngle, tmpRotation.getMaxAngle())
                }
                continue
            }
            if (target_name.endsWith(negative_translation_type)) {
                const tmpTranslation = new PoseTranslation()
                if (tmpTranslation.load(file)) {
                    tmpTranslation.setCat(target_name.substring(0, 2))
                    this.negativeTranslations.push(tmpTranslation)
                    tmpTranslation.getModVertex().forEach((idx) => this.modVertex.add(idx))
                    this.minAngle = Math.min(this.minAngle, tmpTranslation.getMinAngle())
                }
                continue
            }
            if (target_name.endsWith(positive_translation_type)) {
                const tmpTranslation = new PoseTranslation()
                if (tmpTranslation.load(file)) {
                    tmpTranslation.setCat(target_name.substring(0, 2))
                    this.positiveTranslations.push(tmpTranslation)
                    tmpTranslation.getModVertex().forEach((idx) => this.modVertex.add(idx))
                    this.maxAngle = Math.max(this.maxAngle, tmpTranslation.getMaxAngle())
                }
                continue
            }
        }
    }
    /// Initializes the center of all rotations with the controid of their centerVertexNumbers
    calcRotationsCenteroids(vertexvector: VectorArray, rotations?: PoseRotation[]): void {
        if (rotations === undefined) {
            if (this.positive) {
                this.calcRotationsCenteroids(vertexvector, this.positiveRotations)
            }
            if (this.negative) {
                this.calcRotationsCenteroids(vertexvector, this.negativeRotations)
            }
        } else {
            for (const rotations_it of rotations) {
                rotations_it.setCenter(calcCenteroid(rotations_it.getCenterVertexNumbers(), vertexvector))
            }
        }
    }

    calcTranslationsFormFactors(vertexvector: VectorArray, translations?: PoseTranslation[]): void {
        if (translations === undefined) {
            if (this.positive) {
                this.calcTranslationsFormFactors(vertexvector, this.positiveTranslations)
            }
            if (this.negative) {
                this.calcTranslationsFormFactors(vertexvector, this.negativeTranslations)
            }
        } else {
            for (const translations_it of translations) {
                translations_it.calcFormFactor(vertexvector)
            }
        }
    }
    calcNormalizations() {
        if (this.normalizationInited) {
            return
        }
        for (const rotations_it of this.positiveRotations) {
            if (rotations_it.getMinAngle() !== this.minAngle || rotations_it.getMaxAngle() !== this.maxAngle) {
                rotations_it.setNormalize(true)
            }
        }
        for (const rotations_it of this.negativeRotations) {
            if (rotations_it.getMinAngle() !== this.minAngle || rotations_it.getMaxAngle() !== this.maxAngle) {
                rotations_it.setNormalize(true)
            }
        }
        for (const translations_it of this.positiveTranslations) {
            if (translations_it.getMinAngle() !== this.minAngle || translations_it.getMaxAngle() !== this.maxAngle) {
                translations_it.setNormalize(true)
            }
        }
        for (const translations_it of this.negativeTranslations) {
            if (translations_it.getMinAngle() !== this.minAngle || translations_it.getMaxAngle() !== this.maxAngle) {
                translations_it.setNormalize(true)
            }
        }
        this.normalizationInited = true
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
