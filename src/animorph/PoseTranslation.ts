import { vec3 } from "gl-matrix"
import { FileSystemAdapter } from "../filesystem/FileSystemAdapter"
import { Target } from "./Target"
import { VertexVector } from "./VertexVector"

export class PoseTranslation {
    private target = new Target()
    private originalSize!: number[]
    private formFactor = vec3.fromValues(1, 1, 1)
    private minAngle: number = 0
    private maxAngle: number = 0
    /// flag
    private normalize: boolean = false
    //string inFilename;
    /// Can be used to influence the order of application of rotations and translations
    private cat: string = ""

    private mbLimb: boolean = false

    load(filename: string): boolean {
        const info = FileSystemAdapter.readFile(`${filename}.info`)
            .split("\n")
            .map((it) => it.trim())
        if (info.length < 3) {
            return false
        }
        this.originalSize = info[0].split(",").map((it) => parseFloat(it))
        const minMax = info[1].split(",")
        this.minAngle = parseFloat(minMax[0])
        this.maxAngle = parseFloat(minMax[1])
        this.target.load(filename)
        return true
    }

    getModVertex() {
        return this.target.getModVertex()
    }
    calcFormFactor(vertexvector: VertexVector) {
        throw Error()
    }
    getTarget() {
        return this.target
    }
    getFormFactor() {
        return this.formFactor
    }
    getMinAngle() {
        return this.minAngle
    }
    getMaxAngle() {
        return this.maxAngle
    }
    getNormalize() {
        return this.normalize
    }
    setNormalize(inNormalize: boolean) {
        this.normalize = inNormalize
    }
    //const string &getFilename() const {return inFilename;}
    getCat() {
        return this.cat
    }
    setCat(inCat: string) {
        this.cat = inCat
    }

    setLimb(limb: boolean) {
        this.mbLimb = limb
    }
    getLimb() {
        return this.mbLimb
    }
}
