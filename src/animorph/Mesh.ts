import { FaceVector } from "./FaceVector"
import { VertexVector } from "./VertexVector"
import { DirectoryList, FileType } from "./DirectoryList"
import { TargetEntry } from "./TargetEntry"
import { PoseEntry } from "./PoseEntry"
import { FaceGroup } from "./FaceGroup"
import { PoseTarget } from "./PoseTarget"
import { PoseTranslation } from "./PoseTranslation"
import { PoseRotation, RotateAxis } from "./PoseRotation"
import { mat4, vec3 } from "gl-matrix"
import { Signal } from "toad.js"
import { Target } from "./Target"
import { SelectorManager } from "animorph/SelectorManager"
import { VectorArray } from "./VectorArray"

class TargetMap extends Map<string, TargetEntry> {}
class PoseMap extends Map<string, PoseEntry> {}

enum Mode {
    MORPH,
    POSE,
}

// animorph-0.3/src/Mesh.cpp
export class Mesh {
    mgr: SelectorManager

    changed = new Signal()
    private dirty = false
    private poseChanged = false
    private mode = Mode.MORPH

    private vertexBase!: VectorArray // vertices as loaded from file
    private vertexMorphed!: VectorArray // morphed vertices
    private vertexPosed!: VectorArray // morphed and posed vertices

    // user settings for posing
    private poses = new BodySettings()
    private bodyset = new BodySettings()

    // faces
    facevector = new FaceVector()
    facegroup = new FaceGroup()
    targetmap = new TargetMap()
    posemap = new PoseMap()

    constructor() {
        this.loadMeshFactory("base.vertices", "base.faces")
        this.loadGroupsFactory("base.parts")
        this.loadTargetsFactory("targets")
        this.loadTargetsFactory("selectors", 1, true, false)
        this.loadPoseTargetsFactory("rotations")
        this.mgr = new SelectorManager(this)
        this.mgr.calcWidgetTargets()
        this.update()
    }

    morphMode() {
        this.mode = Mode.MORPH
        this.markDirty()
    }
    poseMode() {
        this.initPoses()
        this.mode = Mode.POSE
        this.poseChanged = true
        this.markDirty()
    }
    getVertexes(): VectorArray {
        switch (this.mode) {
            case Mode.MORPH:
                return this.vertexMorphed
            case Mode.POSE:
                return this.vertexPosed
        }
    }
    clear() {
        switch (this.mode) {
            case Mode.MORPH:
                this.clearMorph()
                break
            case Mode.POSE:
                this.clearPose()
                break
        }
    }
    clearMorph() {
        if (this.bodyset.size === 0) {
            return
        }
        this.vertexMorphed.set(this.vertexBase)
        this.bodyset.clear()
        this.markDirty()
    }
    clearPose() {
        if (this.poses.size === 0) {
            return
        }
        this.poses.clear()
        this.poseChanged = true
        this.markDirty()
    }
    private markDirty() {
        if (this.dirty === false) {
            this.dirty = true
            this.changed.trigger()
        }
    }
    update() {
        this.updatePose()
        this.dirty = false
    }

    //
    // LOAD
    //
    private loadMeshFactory(meshFilename: string, facesFilename: string) {
        const vertex = new VertexVector()
        vertex.load(meshFilename)
        this.vertexBase = new VectorArray(vertex.length * 3)
        let o = 0
        for(let i=0; i<vertex.length; ++i) {
            const co = vertex[i].co
            this.vertexBase[o++] = co[0]
            this.vertexBase[o++] = co[1]
            this.vertexBase[o++] = co[2]
        }
        this.facevector.loadGeometry(facesFilename)
        this.vertexMorphed = new VectorArray(this.vertexBase)
        this.vertexPosed = new VectorArray(this.vertexBase)
    }
    private loadGroupsFactory(groups_filename: string) {
        return this.facegroup.load(groups_filename)
    }
    private loadTargetsFactory(targetRootPath: string, recursiveLevel = 1, preload = false, clearmap = true) {
        if (clearmap) {
            this.targetmap.clear()
        }

        // reading all the targets recursively
        const dir_list = new DirectoryList()
        dir_list.setRootPath(targetRootPath)
        dir_list.setRecursive(recursiveLevel)
        dir_list.setFileFilter(".target")

        const files = dir_list.getDirectoryList()
        for (const file of files) {
            const target_name = file.substring(targetRootPath.length + 1)
            const targetEntry = new TargetEntry(file, preload)
            this.targetmap.set(target_name, targetEntry)
        }
        console.log(`${preload ? "loaded" : "referenced"} ${files.length} morph targets from ${targetRootPath}/`)
    }
    private loadPoseTargetsFactory(targetRootPath: string, recursiveLevel = 1) {
        this.posemap.clear()

        // reading all the targets recursively
        const dir_list = new DirectoryList()
        dir_list.setRootPath(targetRootPath)
        dir_list.setRecursive(recursiveLevel)
        dir_list.setFileType(FileType.DIRECTORY)

        const files = dir_list.getDirectoryList()
        let counter = 0
        for (const file of files) {
            const target_name = file.substring(targetRootPath.length + 1)
            if (target_name.indexOf("/") === -1) {
                continue
            }
            this.posemap.set(target_name, new PoseEntry(target_name, file, false))
            ++counter
        }
        console.log(`referenced ${counter} pose targets from ${targetRootPath}/`)
    }

    //
    // POSE
    //
    private initPoses() {
        this.vertexPosed.set(this.vertexMorphed)
        this.posemap.forEach((poseEntry) => {
            if (!poseEntry.isLoaded()) {
                return
            }
            const tmp = poseEntry.getTarget()!
            tmp.calcRotationsCenteroids(this.vertexMorphed)
            tmp.calcTranslationsFormFactors(this.vertexMorphed)
            tmp.calcNormalizations()
        })

        // for (std::vector <SkinVertex>::iterator skin_it = skin.begin ();
        //     skin_it != skin.end ();
        //     skin_it++)
        // {
        //     SkinVertex &skinVertex = (*skin_it);

        //     Vector3f centeroid(calcCenteroid(skinVertex.getLinkedMuscles(), vertexvector_morph));

        //     Vector3f oriDist = vertexvector_morph[skinVertex.getSkinVertex()].co - centeroid;
        //     skinVertex.setOriginalDist(oriDist.getMagnitude());
        // }
    }

    setPose(target_name: string, morph_value: number) {
        const poseTarget = this.getPoseTargetForName(target_name)
        if (poseTarget === undefined) {
            throw Error(`unknown pose target ${target_name}`)
        }
        if (morph_value < poseTarget.getMinAngle()) {
            morph_value = poseTarget.getMinAngle()
        }
        if (morph_value > poseTarget.getMaxAngle()) {
            morph_value = poseTarget.getMaxAngle()
        }
        if (!this.posemap.has(target_name)) {
            throw new Error(`a pose target with name "${target_name}" wasn't found in posemap`)
        }

        if (morph_value === 0) {
            if (!this.poses.has(target_name)) {
                return morph_value
            }
            this.poses.delete(target_name)
        } else {
            if (this.poses.get(target_name) === morph_value) {
                return morph_value
            }
            this.poses.set(target_name, morph_value)
        }

        if (this.poseChanged === false) {
            this.poseChanged = true
            this.markDirty()
        }
        return morph_value
    }
    getPose(target_name: string): number {
        const p = this.poses.get(target_name)
        return p === undefined ? 0 : p
    }
    updatePose() {
        if (this.poseChanged === false) {
            return
        }
        this.poseChanged = false

        this.vertexPosed.set(this.vertexMorphed)

        // Map is not sorted but poses must be applied sorted by target_name
        ;[...this.poses.keys()].sort().forEach((target_name) => {
            const poseTarget = this.getPoseTargetForName(target_name)
            const morph_value = this.poses.get(target_name)!
            this.doPose(target_name, morph_value, poseTarget!.getModVertex())
        })
        // applySkin();
        // applySmooth(2);
    }

    getTargetForName(target_name: string): Target | undefined {
        return this.targetmap.get(target_name)?.getTarget()
    }
    getPoseTargetForName(target_name: string): PoseTarget | undefined {
        const poseEntry = this.posemap.get(target_name)!
        if (poseEntry === undefined) {
            return undefined
        }
        let target
        if (!poseEntry.isLoaded()) {
            target = poseEntry.getTarget()!
            target.calcRotationsCenteroids(this.vertexMorphed)
            target.calcTranslationsFormFactors(this.vertexMorphed)
            target.calcNormalizations()
        } else {
            target = poseEntry.getTarget()!
        }
        return target
    }

    doPose(target_name: string, morph_value: number, modVertex: Set<number>) {
        const cat = "00"
        const poseTarget = this.getPoseTargetForName(target_name)!
        const rotations = morph_value < 0 ? poseTarget.getNegativeRotations() : poseTarget.getPositiveRotations()
        const translations =
            morph_value < 0 ? poseTarget.getNegativeTranslations() : poseTarget.getPositiveTranslations()
        for (const pt of translations) {
            if (cat !== pt.getCat()) {
                throw Error(`not implemented yet`)
            }
            this.doPoseTranslation(pt, morph_value, modVertex)
        }
        for (const pr of rotations) {
            this.doPoseRotation(pr, morph_value, modVertex)
        }
    }
    doPoseTranslation(pt: PoseTranslation, morph_value: number, modVertex: Set<number>) {
        const tmpTarget = pt.getTarget()
        const formFactor = pt.getFormFactor()
        let real_value = 0.0

        if (pt.getNormalize()) {
            if (morph_value < 0) {
                if (morph_value < pt.getMaxAngle()) {
                    real_value = Math.max(morph_value, pt.getMinAngle()) - pt.getMaxAngle()
                }
            } else {
                if (morph_value > pt.getMinAngle()) {
                    real_value = Math.min(morph_value, pt.getMaxAngle()) - pt.getMinAngle()
                }
            }
        } else {
            real_value = morph_value
        }

        for (const td of tmpTarget) {
            if (!modVertex.has(td.vertex_number)) {
                continue
            }
            const co = this.vertexPosed.getVec3(td.vertex_number)
            vec3.add(
                co,
                co,
                vec3.fromValues(
                    formFactor[0] * td.morph_vector[0] * real_value,
                    formFactor[1] * td.morph_vector[1] * real_value,
                    formFactor[2] * td.morph_vector[2] * real_value
                )
            )
            this.vertexPosed.setVec3(td.vertex_number, co)
        }
    }
    doPoseRotation(pr: PoseRotation, morph_value: number, modVertex: Set<number>) {
        let real_value = 0
        let rotMatrix = mat4.create()

        if (pr.getNormalize()) {
            if (morph_value < 0) {
                if (morph_value < pr.getMaxAngle()) {
                    real_value = Math.max(morph_value, pr.getMinAngle()) - pr.getMaxAngle()
                }
            } else {
                if (morph_value > pr.getMinAngle()) {
                    real_value = Math.min(morph_value, pr.getMaxAngle()) - pr.getMinAngle()
                }
            }
        } else {
            real_value = morph_value
        }

        const axis = pr.getAxis()
        const M_PI_180 = Math.PI / 180.0

        for (const td of pr) {
            if (!modVertex.has(td.vertex_number)) {
                continue
            }
            const theta = real_value * td.rotation * M_PI_180
            mat4.identity(rotMatrix)
            switch (axis) {
                case RotateAxis.X_AXIS:
                    mat4.rotateX(rotMatrix, rotMatrix, theta)
                    break
                case RotateAxis.Y_AXIS:
                    mat4.rotateY(rotMatrix, rotMatrix, theta)
                    break
                case RotateAxis.Z_AXIS:
                    mat4.rotateZ(rotMatrix, rotMatrix, theta)
                    break
            }
            const co = this.vertexPosed.getVec3(td.vertex_number)
            if (co === undefined) {
                throw Error()
            }
            vec3.sub(co, co, pr.getCenter())
            vec3.transformMat4(co, co, rotMatrix)
            vec3.add(co, co, pr.getCenter())
            this.vertexPosed.setVec3(td.vertex_number, co)
        }
    }

    //
    // MORPH
    //

    doMorph(target_name: string, morph_value: number) {
        if (morph_value < 0) {
            morph_value = 0
        }
        if (morph_value > 1) {
            morph_value = 1
        }

        if (!this.targetmap.has(target_name)) {
            throw new Error(`a morph target with name "${target_name}" wasn't found in targetmap`)
        }

        let real_morph_value
        let bs_morph_value = this.getMorph(target_name)
        if (morph_value === 0) {
            real_morph_value = -bs_morph_value
        } else {
            real_morph_value = morph_value - bs_morph_value
        }

        const target = this.getTargetForName(target_name)!

        for (const td of target) {
            const co = this.vertexMorphed.getVec3(td.vertex_number)
            const mv = vec3.scale(vec3.create(), td.morph_vector, real_morph_value)
            vec3.add(co, co, mv)
            this.vertexMorphed.setVec3(td.vertex_number, co)
        }

        if (morph_value === 0) {
            if (!this.bodyset.has(target_name)) {
                return morph_value
            }
            this.bodyset.delete(target_name)
        } else {
            if (this.bodyset.get(target_name) === morph_value) {
                return morph_value
            }
            this.bodyset.set(target_name, morph_value)
        }

        this.markDirty()
        return morph_value
    }
    getMorph(target_name: string): number {
        const p = this.bodyset.get(target_name)
        return p === undefined ? 0 : p
    }
}

class BodySettings extends Map<string, number> {}
