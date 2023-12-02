import { use, expect } from "@esm-bundle/chai"
import { chaiAlmost } from "./chai/chaiAlmost"
use(chaiAlmost(0.1))

import { FileSystemAdapter } from "../src/filesystem/FileSystemAdapter"
import { HTTPFSAdapter } from "../src/filesystem/HTTPFSAdapter"
import { Mesh } from "../src/animorph/Mesh"
import { meshRotatedLeftFootRot1_60 } from "./meshRotatedLeftFootRot1_60"
import { vec3 } from "gl-matrix"

describe("rotate_foot", function() {
    it("040_left_foot/ROT1 60", function() {
        this.timeout(360000)
        FileSystemAdapter.setInstance(new HTTPFSAdapter())
        const mesh = new Mesh()
        mesh.loadMeshFactory("base.vertices", "base.faces")
        // mesh.loadMaterialFactory("base.materials", "base.colors")
        // TextureVector texturevector = mesh.getTextureVectorRef()
        // texturevector.load("base.uv")
        mesh.loadGroupsFactory("base.parts")
        // mesh.loadSubdGroupsFactory("subd.parts")
        // mesh.loadSkinFactory("base.skin") // muscles? file is empty
        // mesh.loadClothesFactory("base.clothes")
        // mesh.loadEdgeStripFactory("base.strips")
        // mesh.loadSmoothVertexFactory("base.smooth")
        // mesh.loadSubdFactory("base.subde", "base.subdo", "base.subdf")

        mesh.loadTargetsFactory("targets")
        mesh.loadTargetsFactory("selectors", 1, true, false)
        mesh.loadPoseTargetsFactory("rotations")
        // mesh.loadCharactersFactory("bs_data")

        console.log("init poses")
        mesh.poseMode()

        // compare with C++ version
        expect(mesh.getVertexes()[4643].co).to.deep.almost.equal(vec3.fromValues(1.55093, -4.87655, -0.823161))

        console.log("set pose")
        mesh.setPose("040_left_foot/ROT1", 60)

        // compare with C++ version
        // since this fails: where the heck does it change this vector in the C++ code?
        expect(mesh.getVertexes()[4643].co).to.deep.almost.equal(vec3.fromValues(1.55093, -4.76291, -0.886281))

        // compare everything with the C++ version
        let i = 0
        for(const e of mesh.getVertexes()) {
            const co = vec3.fromValues(meshRotatedLeftFootRot1_60[i], meshRotatedLeftFootRot1_60[i+1], meshRotatedLeftFootRot1_60[i+2])
            const no = vec3.fromValues(meshRotatedLeftFootRot1_60[i+3], meshRotatedLeftFootRot1_60[i+4], meshRotatedLeftFootRot1_60[i+5])
            expect(co, `mesh[${i/6}].co`).to.deep.almost.equal(e.co)
            // expect(no, `mesh[${i/6}].no`).to.deep.almost.equal(e.no)
            i+=6
        }
    })
})


