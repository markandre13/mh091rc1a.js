import { RenderMesh } from "gl/RenderMesh"
import { Mesh } from "./animorph/Mesh"
import { FileSystemAdapter } from "./filesystem/FileSystemAdapter"
import { HTTPFSAdapter } from "./filesystem/HTTPFSAdapter"
import { RGBAShader } from "gl/shader/RGBAShader"
import {
    createModelViewMatrix,
    createNormalMatrix,
    createProjectionMatrix,
    adjustCanvasSize,
    prepareViewport,
} from "gl/util"
import screen from "./screen"
import { SelectorListener } from "SelectorListener"

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
    mesh.update()

    // console.log("render")
    document.body.style.overflow = "hidden"
    document.body.style.margin = "0"
    document.body.style.padding = "0"
    document.body.replaceChildren(...screen(mesh, mgr))

    const canvas = document.body.querySelector("canvas") as HTMLCanvasElement
    renderMesh(canvas, mesh)
}

interface FG {
    offset: number
    length: number
}

// makehuman-0.9.1-rc1a/src/makehuman.cpp, line 923
function renderMesh(canvas: HTMLCanvasElement, mesh: Mesh) {
    // STEP 1: convert mesh.vertexvector_morph to Float32Array
    const vertex: number[] = []
    for (const v of mesh.vertexvector_morph) {
        vertex.push(v.co[0], v.co[1], v.co[2])
    }

    // STEP 2: created faces and as they are a mix of triangles and quads, convert them to triangles
    const fvertex: number[] = []
    const faceGroups = new Map<string, FG>()
    mesh.facegroup.forEach((group, name) => {
        const offset = fvertex.length
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
        const length = fvertex.length - offset
        faceGroups.set(name, { offset: offset, length: length })
    })

    const gl = (canvas.getContext("webgl2") || canvas.getContext("experimental-webgl")) as WebGL2RenderingContext
    if (gl == null) {
        throw Error("Unable to initialize WebGL. Your browser or machine may not support it.")
    }

    const renderMesh = new RenderMesh(gl, new Float32Array(vertex), fvertex, undefined, undefined, false)

    const programRGBA = new RGBAShader(gl)
    programRGBA.initProgram()

    renderMesh.bind(programRGBA)

    // flip image pixels into the bottom-to-top order that WebGL expects.
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
    gl.enable(gl.CULL_FACE)
    gl.cullFace(gl.BACK)

    let lastX = 0,
        lastY = 0

    const paint = () => {
        adjustCanvasSize(canvas)
        const projectionMatrix = createProjectionMatrix(canvas)
        const modelViewMatrix = createModelViewMatrix(lastX, lastY)
        const normalMatrix = createNormalMatrix(modelViewMatrix)
        programRGBA.initModelViewMatrix(modelViewMatrix)
        programRGBA.initNormalMatrix(normalMatrix)
        programRGBA.initProjectionMatrix(projectionMatrix)
        prepareViewport(gl, canvas)

        faceGroups.forEach((group, name) => {
            switch (name) {
                case "body":
                case "head":
                    programRGBA.setColor([1, 0.8, 0.7, 1])
                    break
                case "teeth":
                    programRGBA.setColor([1, 1, 1, 1])
                    break
                case "tongue":
                case "gums":
                    programRGBA.setColor([1, 0, 0, 1])
                    break
                case "eyes": // the white in the eyes
                    programRGBA.setColor([1, 1, 1, 1])
                    break
                case "zcornea": // the cornea in the eyes
                    programRGBA.setColor([0, 0, 0, 1])
                    break
                case "zeyebrows":
                case "zeyelashes":
                    programRGBA.setColor([0, 0, 0, 1])
                    break
                default:
                    console.log(name)
                    programRGBA.setColor([1, 0, 0, 1])
            }
            renderMesh.drawSubset(gl.TRIANGLES, group.offset, group.length)
        })
    }
    paint()

    mesh.changed.add(() => {
        requestAnimationFrame(() => {
            mesh.update()
            const vertex: number[] = []
            for (const v of mesh.vertexvector_morph) {
                vertex.push(v.co[0], v.co[1], v.co[2])
            }
            renderMesh.update(new Float32Array(vertex))
            paint()
        })
    })

    new ResizeObserver(paint).observe(canvas)
    let downX = 0,
        downY = 0,
        buttonDown = false
    canvas.onpointerdown = (ev: PointerEvent) => {
        canvas.setPointerCapture(ev.pointerId)
        buttonDown = true
        // console.log(ev)
        lastX = downX = ev.x
        lastY = downY = ev.y
    }
    canvas.onpointerup = (ev: PointerEvent) => {
        buttonDown = false
    }
    canvas.onpointermove = (ev: PointerEvent) => {
        if (buttonDown) {
            const x = ev.x - downX
            const y = ev.y - downY
            if (x !== lastX || y !== lastY) {
                lastX = x
                lastY = y
                requestAnimationFrame(() => paint())
            }
        }
    }
}

try {
    main()
} catch (e) {
    console.log(e)
}
