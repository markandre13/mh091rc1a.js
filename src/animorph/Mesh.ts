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

class TargetMap extends Map<string, TargetEntry> {}
class PoseMap extends Map<string, PoseEntry> {}

// animorph-0.3/src/Mesh.cpp
export class Mesh {
    // faces
    facevector = new FaceVector()

    // vertices TODO: replace with Float32Array
    vertexvector_morph = new VertexVector() // morphed mesh
    // vertexvector_morph_copy: VertexVector // copy of vertexvector_morph to reset vertexvector_morph and vertexvector_morph_only, used when animating/posing)
    // vertexvector_morph_only: VertexVector
    // vertexvector_orginal: vec3[]; // orginal mesh
    facegroup = new FaceGroup()
    targetmap = new TargetMap()
    posemap = new PoseMap()

    // user settings for posing
    poses = new BodySettings()

    loadMeshFactory(meshFilename: string, facesFilename: string) {
        this.vertexvector_morph.load(meshFilename)
        this.facevector.loadGeometry(facesFilename)
    }
    loadGroupsFactory(groups_filename: string) {
        return this.facegroup.load(groups_filename)
    }
    loadTargetsFactory(targetRootPath: string, recursiveLevel = 1, preload = false, clearmap = true) {
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
    loadPoseTargetsFactory(targetRootPath: string, recursiveLevel = 1) {
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
        console.log(`loaded ${counter} pose entries from ${targetRootPath}/`)
    }
    // loadCharactersFactory(charactersRootPath: string, recursiveLevel = 1) {
    //     throw Error("not implemented yet")
    // }
    initPoses() {
        // console.log(`Mesh.initPoses() not implemented`)
        // return
        const vertexvector_morph_copy = this.vertexvector_morph
        this.posemap.forEach((poseEntry) => {
            const tmp = poseEntry.getTarget()!
            tmp.calcRotationsCenteroids(vertexvector_morph_copy)
            tmp.calcTranslationsFormFactors(vertexvector_morph_copy)
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
        if (!this.posemap.has(target_name)) {
            throw new Error(`a target with name "${target_name}" wasn't found in posemap`)
        }

        if (morph_value === 0) {
            this.poses.delete(target_name)
        } else {
            this.poses.set(target_name, morph_value)
        }

        this.poses.forEach((morph_value, target_name) => {
            const poseTarget = this.getPoseTargetForName(target_name)
            this.doPose(target_name, morph_value, poseTarget!.getModVertex())
        })

        // applySkin();
        // applySmooth(2);
    }

    getPoseTargetForName(target_name: string): PoseTarget | undefined {
        return this.posemap.get(target_name)?.getTarget()
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
            vec3.add(
                this.vertexvector_morph[td.vertex_number].co,
                this.vertexvector_morph[td.vertex_number].co,
                vec3.fromValues(
                    formFactor[0] * td.morph_vector[0] * real_value,
                    formFactor[1] * td.morph_vector[1] * real_value,
                    formFactor[2] * td.morph_vector[2] * real_value
                )
            )
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
            const theta = real_value * td.rotation
            mat4.identity(rotMatrix)
            switch (axis) {
                case RotateAxis.X_AXIS:
                    mat4.rotateX(rotMatrix, rotMatrix, theta * M_PI_180)
                    break
                case RotateAxis.Y_AXIS:
                    mat4.rotateY(rotMatrix, rotMatrix, theta * M_PI_180)
                    break
                case RotateAxis.Z_AXIS:
                    mat4.rotateZ(rotMatrix, rotMatrix, theta * M_PI_180)
                    break
            }
            // vertexvector_morph[td.vertex_number].co = ((vertexvector_morph[td.vertex_number].co - pr.getCenter()) * rotMatrix) + pr.getCenter();
            const co = this.vertexvector_morph[td.vertex_number].co
            if (co === undefined) {
                throw Error()
            }
            vec3.sub(co, co, pr.getCenter())
            vec3.transformMat4(co, co, rotMatrix)
            vec3.add(co, co, pr.getCenter())
        }
    }
}

class BodySettings extends Map<string, number> {}
