import { RenderMesh } from "gl/RenderMesh"
import { Mesh } from "./animorph/Mesh"
import { RGBAShader } from "gl/shader/RGBAShader"
import {
    createModelViewMatrix,
    createNormalMatrix,
    createProjectionMatrix,
    adjustCanvasSize,
    prepareViewport,
} from "gl/util"

interface FG {
    offset: number
    length: number
}

enum Projection {
    PERSPECTIVE,
    ORTHOGONAL,
}

interface RenderContext {
    canvas: HTMLCanvasElement
    gl: WebGL2RenderingContext
    programRGBA: RGBAShader
    renderMesh: RenderMesh
    faceGroups: Map<string, FG>
    rotateY: number
    rotateX: number
    projection: Projection
}

export function renderMesh(canvas: HTMLCanvasElement, mesh: Mesh) {
    const gl = (canvas.getContext("webgl2") || canvas.getContext("experimental-webgl")) as WebGL2RenderingContext
    if (gl == null) {
        throw Error("Unable to initialize WebGL. Your browser or machine may not support it.")
    }
    // flip image pixels into the bottom-to-top order that WebGL expects.
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
    gl.enable(gl.CULL_FACE)
    gl.cullFace(gl.BACK)

    const programRGBA = new RGBAShader(gl)
    programRGBA.initProgram()

    mesh.update()
    const { fvertex, faceGroups } = triangles(mesh)
    const vertex = mesh.getVertexes()
    const renderMesh = new RenderMesh(gl, new Float32Array(vertex), fvertex, undefined, undefined, false)
    renderMesh.bind(programRGBA)

    const ctx: RenderContext = {
        canvas,
        gl,
        programRGBA,
        renderMesh,
        faceGroups,
        rotateY: 0,
        rotateX: 0,
        projection: Projection.PERSPECTIVE,
    }

    mesh.changed.add(() => {
        requestAnimationFrame(() => {
            mesh.update()
            renderMesh.update(mesh.getVertexes())
            paint(ctx)
        })
    })
    new ResizeObserver(() => paint(ctx)).observe(canvas)
    paint(ctx)

    let downX = 0,
        downY = 0,
        buttonDown = false
    canvas.onpointerdown = (ev: PointerEvent) => {
        canvas.setPointerCapture(ev.pointerId)
        buttonDown = true
        downX = ev.x
        downY = ev.y
    }
    canvas.onpointerup = (ev: PointerEvent) => {
        buttonDown = false
    }
    canvas.onpointermove = (ev: PointerEvent) => {
        if (buttonDown) {
            const x = ev.x - downX
            const y = ev.y - downY
            if (x !== 0 || y !== 0) {
                ctx.rotateY += x
                ctx.rotateX += y
                downX = ev.x
                downY = ev.y
                requestAnimationFrame(() => paint(ctx))
            }
        }
    }
    window.onkeydown = (ev: KeyboardEvent) => {
        switch (ev.code) {
            case "Numpad1": // front orthographic
                if (ev.ctrlKey) {
                    // back
                    ctx.rotateX = 0
                    ctx.rotateY = 180
                } else {
                    // front
                    ctx.rotateY = 0
                    ctx.rotateX = 0
                }
                ctx.projection = Projection.ORTHOGONAL
                requestAnimationFrame(() => paint(ctx))
                break
            case "Numpad7": // top orthographic
                if (ev.ctrlKey) {
                    // bottom
                    ctx.rotateX = -90
                    ctx.rotateY = 0
                } else {
                    // top
                    ctx.rotateX = 90
                    ctx.rotateY = 0
                }
                ctx.projection = Projection.ORTHOGONAL
                requestAnimationFrame(() => paint(ctx))
                break
            case "Numpad3": // right orthographic
                if (ev.ctrlKey) {
                    // left
                    ctx.rotateX = 0
                    ctx.rotateY = -90
                } else {
                    // right
                    ctx.rotateX = 0
                    ctx.rotateY = 90
                }
                ctx.projection = Projection.ORTHOGONAL
                requestAnimationFrame(() => paint(ctx))
                break
            case "Numpad4":
                ctx.rotateY -= 11.25
                requestAnimationFrame(() => paint(ctx))
                break
            case "Numpad6":
                ctx.rotateY += 11.25
                requestAnimationFrame(() => paint(ctx))
                break
            case "Numpad8":
                ctx.rotateX -= 11.25
                requestAnimationFrame(() => paint(ctx))
                break
            case "Numpad2":
                ctx.rotateX += 11.25
                requestAnimationFrame(() => paint(ctx))
                break
            case "Numpad5": // toggle orthographic/perspective
                if (ctx.projection === Projection.ORTHOGONAL) {
                    ctx.projection = Projection.PERSPECTIVE
                } else {
                    ctx.projection = Projection.ORTHOGONAL
                }
                requestAnimationFrame(() => paint(ctx))
                break
        }
    }
    canvas.tabIndex = 0
}

function triangles(mesh: Mesh) {
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
    return { fvertex, faceGroups }
}

function paint(ctx: RenderContext) {
    adjustCanvasSize(ctx.canvas)
    const projectionMatrix = createProjectionMatrix(ctx.canvas, ctx.projection === Projection.PERSPECTIVE)
    const modelViewMatrix = createModelViewMatrix(ctx.rotateY, ctx.rotateX)
    const normalMatrix = createNormalMatrix(modelViewMatrix)
    ctx.programRGBA.initModelViewMatrix(modelViewMatrix)
    ctx.programRGBA.initNormalMatrix(normalMatrix)
    ctx.programRGBA.initProjectionMatrix(projectionMatrix)
    prepareViewport(ctx.gl, ctx.canvas)

    ctx.faceGroups.forEach((group, name) => {
        switch (name) {
            case "body":
            case "head":
                ctx.programRGBA.setColor([1, 0.8, 0.7, 1])
                break
            case "teeth":
                ctx.programRGBA.setColor([1, 1, 1, 1])
                break
            case "tongue":
            case "gums":
                ctx.programRGBA.setColor([1, 0, 0, 1])
                break
            case "eyes": // the white in the eyes
                ctx.programRGBA.setColor([1, 1, 1, 1])
                break
            case "zcornea": // the cornea in the eyes
                ctx.programRGBA.setColor([0, 0, 0, 1])
                break
            case "zeyebrows":
            case "zeyelashes":
                ctx.programRGBA.setColor([0, 0, 0, 1])
                break
            default:
                console.log(name)
                ctx.programRGBA.setColor([1, 0, 0, 1])
        }
        ctx.renderMesh.drawSubset(ctx.gl.TRIANGLES, group.offset, group.length)
    })
}
