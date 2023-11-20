import { RenderMesh } from "gl/RenderMesh"
import { Mesh } from "./animorph/Mesh"
import { FileSystemAdapter } from "./filesystem/FileSystemAdapter"
import { HTTPFSAdapter } from "./filesystem/HTTPFSAdapter"
import { RGBAShader } from "gl/shader/RGBAShader"
import {
    createModelViewMatrix,
    createNormalMatrix,
    createProjectionMatrix,
    prepareCanvas,
    prepareViewport,
} from "gl/util"
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
    mesh.loadTargetsFactory("selectors", 1, true, false)
    mesh.loadPoseTargetsFactory("rotations")
    // mesh.loadCharactersFactory("bs_data")

    // okay... this should be enough to render something...
    const canvas = document.createElement("canvas")
    canvas.style.width = "100vw"
    canvas.style.height = "100vh"
    document.body.style.overflow = "hidden"
    document.body.replaceChildren(canvas)

    // mesh.facegroup.forEach((group, name) => {
    //     if (isNaN(group.facesIndexes[0])) {
    //         console.log(`facegroup '${name}' wasn't properly loaded`)
    //         return
    //     }
    //     const quads = mesh.facevector[group.facesIndexes[0]].vertices.length === 4
    //     console.log(`${name} ${quads ? "quads" : "triangles"}`)
    // })

    renderMesh(canvas, mesh)
}

// makehuman-0.9.1-rc1a/src/makehuman.cpp, line 923
function renderMesh(canvas: HTMLCanvasElement, mesh: Mesh) {
    const gl = (canvas.getContext("webgl2") || canvas.getContext("experimental-webgl")) as WebGL2RenderingContext
    if (gl == null) {
        throw Error("Unable to initialize WebGL. Your browser or machine may not support it.")
    }
    // flip image pixels into the bottom-to-top order that WebGL expects.
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)

    const programRGBA = new RGBAShader(gl)
    prepareCanvas(canvas)
    prepareViewport(gl, canvas)
    const projectionMatrix = createProjectionMatrix(canvas)
    const modelViewMatrix = createModelViewMatrix()
    const normalMatrix = createNormalMatrix(modelViewMatrix)

    programRGBA.init(projectionMatrix, modelViewMatrix, normalMatrix)
    gl.enable(gl.CULL_FACE)
    gl.cullFace(gl.BACK)
    gl.depthMask(true)

    // STEP 1: convert mesh.vertexvector_morph to Float32Array
    const vertex: number[] = []
    for (const v of mesh.vertexvector_morph) {
        vertex.push(v.co[0], v.co[1], v.co[2])
    }

    // STEP 2: created faces and as they are a mix for triangles and quads, convert them to triangles
    const fvertex: number[] = []

    mesh.facegroup.forEach((group, name) => {
        for (const faceIdx of group.facesIndexes) {
            const foo = mesh.facevector[faceIdx]
            if (foo === undefined) {
                // FIXME: load creates bogus last entry
                continue
            }
            const face = mesh.facevector[faceIdx].vertices
            switch (face.length) {
                case 3:
                    fvertex.push(...face)
                    break
                case 4:
                    fvertex.push(face[0], face[1], face[2], face[0], face[2], face[3])
                    break
                default:
                    console.log(`skipping face with ${face.length} edges`)
            }
        }
    })

    const renderMesh = new RenderMesh(gl, new Float32Array(vertex), fvertex, undefined, undefined, false)

    programRGBA.setColor([1, 1, 1, 1])
    renderMesh.draw(programRGBA, gl.TRIANGLES)
}

main()
