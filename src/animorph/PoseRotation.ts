import { vec3 } from "gl-matrix"
import { FileSystemAdapter } from "../filesystem/FileSystemAdapter"
import { StringToLine } from "../lib/StringToLine"
import { UnsortedUsedVertex } from "./PoseTarget"

export interface PoseTargetData {
    vertex_number: number
    rotation: number
}

export enum RotateAxis {
    X_AXIS,
    Y_AXIS,
    Z_AXIS,
}

export class PoseRotation extends Array<PoseTargetData> {
    /// Used to calculate center
    private centerVertexNumbers: number[]
    /// Will be used as parameter for Matrix::setRoation()
    private axis: RotateAxis
    /// Set of all indices in the ".rot" file
    private modVertex: UnsortedUsedVertex = [];
    /// Currently unused
    private hasCenter: boolean
    /// Minimum angle in radians
    private minAngle: number
    /// Maximum angle in radians
    private maxAngle: number
    /// will be set to true by PoseTarget::calcNormalizations() if our (min|max)Angle != PoseTarget::(min|max)Angle
    private normalize: boolean
    //string inFilename;
    /* \brief "Category"? Currently always "00"
     * First two characters of the filename, eg . "00" for "00_Z_LIMB_SPINE1.rot"
     */
    private cat: string

    /* \brief Centroid of centerVertexNumbers
     * Is initialized by PoseTarget::calcRotationsCenteroids()
     */
    private center: vec3
    ///Limb rotation Type
    private mbLimb: boolean

    clear() {
        this.length = 0
    }

    load(filename: string): boolean {
        this.clear()

        const info = FileSystemAdapter.readFile(`${filename}.info`)
            .split("\n")
            .map((it) => it.trim())
        if (info.length < 3) {
            return false
        }
        const str = info[0]
        const ax = info[1].charAt(0) // axis X,Y,Z
        const minMax = info[2].split(",")
        this.minAngle = parseFloat(minMax[0])
        this.maxAngle = parseFloat(minMax[1])

        const data = FileSystemAdapter.readFile(filename)
        const reader = new StringToLine(data)
        let lineNumber = 0
        for (let line of reader) {
            ++lineNumber
            line = line.trim()
            const tokens = line.split(/,+/)
            if (tokens.length === 2) {
                const td: PoseTargetData = {
                    vertex_number: parseInt(tokens[0]),
                    rotation: parseFloat(tokens[1]),
                }
                this.modVertex.push(td.vertex_number)
                this.push(td)
            }
        }

        switch (ax) {
            case "X":
                this.axis = RotateAxis.X_AXIS
                break
            case "Y":
                this.axis = RotateAxis.Y_AXIS
                break
            case "Z":
                this.axis = RotateAxis.Z_AXIS
                break
        }
        this.centerVertexNumbers = str.split(",").map((it) => parseInt(it))
        return true
    }
    getCenterVertexNumbers() {
        return this.centerVertexNumbers
    }
    getModVertex() {
        return this.modVertex
    }
    getCenter() {
        return this.center
    }
    setCenter(c: vec3) {
        this.center = c
    }

    getAxis() {
        return this.axis
    }
    getHasCenter() {
        return this.hasCenter
    }
    setHasCenter(c: boolean) {
        this.hasCenter = c
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
