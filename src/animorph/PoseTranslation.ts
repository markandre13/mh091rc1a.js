import { vec3 } from "gl-matrix"
import { FileSystemAdapter } from "../filesystem/FileSystemAdapter"
import { Target } from "./Target"
import { VertexVector } from "./VertexVector"
import { MultiSet } from "lib/MultiSet"

const FF_VERTEX_N = 10

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
        // these are meant to be c++ multiset, meaning they can have duplicate values and are sorted
        // prettier-ignore
        let minXSet = new MultiSet<number>(), maxXSet = new MultiSet<number>(),
            minYSet = new MultiSet<number>(), maxYSet = new MultiSet<number>(),
            minZSet = new MultiSet<number>(), maxZSet = new MultiSet<number>()

        let counter = 0
        let n_vertex = FF_VERTEX_N
        //         pair< set<float>::iterator, bool > pr;

        const tmpTarget = this.getTarget()

        if (tmpTarget.length < FF_VERTEX_N * 2) {
            n_vertex = Math.floor(tmpTarget.length / 2)
        }

        for (const td of tmpTarget) {
            if (counter < n_vertex) {
                minXSet.insert(vertexvector[td.vertex_number].co[0])
                maxXSet.insert(vertexvector[td.vertex_number].co[0])
                minYSet.insert(vertexvector[td.vertex_number].co[1])
                maxYSet.insert(vertexvector[td.vertex_number].co[1])
                minZSet.insert(vertexvector[td.vertex_number].co[2])
                maxZSet.insert(vertexvector[td.vertex_number].co[2])
                ++counter
            } else {
                if (vertexvector[td.vertex_number].co[0] < minXSet.last()) {
                    minXSet.insert(vertexvector[td.vertex_number].co[0])
                    minXSet.eraseLast()
                }
                if (vertexvector[td.vertex_number].co[0] > maxXSet.first()) {
                    maxXSet.insert(vertexvector[td.vertex_number].co[0])
                    maxXSet.eraseFirst()
                }
                if (vertexvector[td.vertex_number].co[1] < minYSet.last()) {
                    minYSet.insert(vertexvector[td.vertex_number].co[1])
                    minYSet.eraseLast()
                }
                if (vertexvector[td.vertex_number].co[1] > maxYSet.first()) {
                    maxYSet.insert(vertexvector[td.vertex_number].co[1])
                    maxYSet.eraseFirst()
                }
                if (vertexvector[td.vertex_number].co[2] < minZSet.last()) {
                    minZSet.insert(vertexvector[td.vertex_number].co[2])
                    minZSet.eraseLast()
                }
                if (vertexvector[td.vertex_number].co[2] > maxZSet.first()) {
                    maxZSet.insert(vertexvector[td.vertex_number].co[2])
                    maxZSet.eraseFirst()
                }
            }
        }

        // prettier-ignore
        let minX = 0, maxX = 0, minY = 0, maxY = 0, minZ = 0, maxZ = 0
        for (const [it] of minXSet) {
            minX += it
        }
        for (const [it] of maxXSet) {
            maxX += it
        }
        for (const [it] of minYSet) {
            minY += it
        }
        for (const [it] of maxYSet) {
            maxY += it
        }
        for (const [it] of minZSet) {
            minZ += it
        }
        for (const [it] of maxZSet) {
            maxZ += it
        }

        let xsize = maxXSet.size,
            ysize = maxYSet.size,
            zsize = maxZSet.size

        this.formFactor = vec3.fromValues(
            (maxX / xsize - minX / xsize) / this.originalSize[0],
            (maxY / ysize - minY / ysize) / this.originalSize[1],
            (maxZ / zsize - minZ / zsize) / this.originalSize[2]
        )
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
