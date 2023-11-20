import { Mesh } from "./animorph/Mesh"
import { FileSystemAdapter } from "./filesystem/FileSystemAdapter"
import { HTTPFSAdapter } from "./filesystem/HTTPFSAdapter"
// import { NodeJSFSAdapter } from "./filesystem/NodeJSFSAdapter"

// makehuman-0.9.1-rc1a/src/makehuman.cpp, line 499
export function main() {
    console.log(`mh091rc1a (Makehuman 0.9.1-rc1a clone)`)
    FileSystemAdapter.setInstance(new HTTPFSAdapter())
    // FileSystemAdapter.setInstance(new NodeJSFSAdapter())
    const mesh = new Mesh()
    mesh.loadMeshFactory("base.vertices", "base.faces")
    // mesh.loadMaterialFactory("base.materials", "base.colors")
    // TextureVector texturevector = mesh.getTextureVectorRef()
    // texturevector.load("base.uv")
    mesh.loadGroupsFactory("base.parts")
    // mesh.loadSubdGroupsFactory("subd.parts")
    // mesh.loadSkinFactory("base.skin")
    // mesh.loadClothesFactory("base.clothes")
    // mesh.loadEdgeStripFactory("base.strips")
    // mesh.loadSmoothVertexFactory("base.smooth")
    // mesh.loadSubdFactory("base.subde", "base.subdo", "base.subdf")

    mesh.loadTargetsFactory("targets")
    mesh.loadTargetsFactory("selectors", 1, true, false);
    mesh.loadPoseTargetsFactory("rotations")
    // mesh.loadCharactersFactory("bs_data")

    // okay... this should be enough to render something...
    document.body.replaceChildren(
        document.createTextNode("ready...")
    )
}

// makehuman-0.9.1-rc1a/src/makehuman.cpp, line 923
function renderMesh() {
    // get's FaceVector, VertexVector & FaceGroup
}

main()
