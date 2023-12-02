import { Mesh } from "./animorph/Mesh"
import { FileSystemAdapter } from "./filesystem/FileSystemAdapter"
import { HTTPFSAdapter } from "./filesystem/HTTPFSAdapter"
import screen from "./screen"
import { SelectorListener } from "SelectorListener"
import { renderMesh } from "renderMesh"

export function main() {
    console.log(`mh091rc1a (Makehuman 0.9.1-rc1a clone)`)
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

    const mgr = new SelectorListener(mesh)
    mgr.calcWidgetTargets()

    // console.log("init poses")
    // mesh.initPoses()

    // console.log(mesh)

    // console.log("set pose")
    // mesh.setPose("020_right_foot/ROT1", 60)
    // mesh.setPose("040_left_foot/ROT1", 60)
    // mesh.setPose("180_right_upper_leg/ROT_BASE1", 70)
    // mesh.doMorph("pelvis/genital_male_foreskin.target", 1)
    // mesh.setPose("180_right_upper_leg/ROT_BASE2", 145);
    // mesh.update()

    // console.log("render")
    document.body.style.overflow = "hidden"
    document.body.style.margin = "0"
    document.body.style.padding = "0"
    document.body.replaceChildren(...screen(mesh, mgr))

    mesh.update()

    const canvas = document.body.querySelector("canvas") as HTMLCanvasElement
    renderMesh(canvas, mesh)
}

try {
    main()
} catch (e) {
    console.log(e)
}
