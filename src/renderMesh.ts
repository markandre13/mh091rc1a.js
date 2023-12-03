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

interface RenderContext {
    canvas: HTMLCanvasElement
    gl: WebGL2RenderingContext
    programRGBA: RGBAShader
    renderMesh: RenderMesh
    faceGroups: Map<string, FG>
    rotateX: number
    rotateY: number
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

    const ctx = {
        canvas, gl, programRGBA, renderMesh, faceGroups, rotateX: 0, rotateY: 0
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
                ctx.rotateX += x
                ctx.rotateY += y
                downX = ev.x
                downY = ev.y
                requestAnimationFrame(() => paint(ctx))
            }
        }
    }
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
    const projectionMatrix = createProjectionMatrix(ctx.canvas)
    const modelViewMatrix = createModelViewMatrix(ctx.rotateX, ctx.rotateY)
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
