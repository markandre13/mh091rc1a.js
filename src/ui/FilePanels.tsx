import { Mesh } from "animorph/Mesh"
import { Button } from "toad.js"

const download = makeDownloadElement()
const upload = makeUploadElement()

export function savePanel(mesh: Mesh) {
    return (
        <>
            <Button action={() => saveBS(mesh, download)}>Save Shape</Button>
            <Button action={() => savePose(mesh, download)}>Save Pose</Button>
        </>
    )
}

export function loadPanel(mesh: Mesh) {
    return (
        <>
            <Button action={() => loadBS(mesh, upload)}>Load Shape</Button>
            <Button action={() => loadPose(mesh, upload)}>Load Pose</Button>
        </>
    )
}

function saveBS(mesh: Mesh, download: HTMLAnchorElement) {
    let out = ""
    mesh.bodyset.forEach((value, key) => {
        out += `${key},${value}\n`
    })
    download.download = "makehuman.bs"
    download.href = URL.createObjectURL(new Blob([out], { type: "text/plain" }))
    download.dispatchEvent(new MouseEvent("click"))
}
function savePose(mesh: Mesh, download: HTMLAnchorElement) {
    let out = ""
    mesh.poses.forEach((value, key) => {
        out += `${key},${value}\n`
    })
    download.download = "makehuman.pose"
    download.href = URL.createObjectURL(new Blob([out], { type: "text/plain" }))
    download.dispatchEvent(new MouseEvent("click"))
}
function loadBS(mesh: Mesh, upload: HTMLInputElement) {
    upload.accept = ".bs"
    upload.onchange = async () => {
        if (upload.files?.length === 1) {
            const file = upload.files[0]
            const buffer = await file.arrayBuffer()
            const te = new TextDecoder()
            const content = te.decode(buffer)
            mesh.clearMorph()
            for (const line of content.split("\n")) {
                if (line.at(0) === "#") {
                    continue
                }
                const token = line.split(",")
                if (token.length === 2) {
                    mesh.doMorph(token[0], parseFloat(token[1]))
                }
            }
        }
    }
    upload.dispatchEvent(new MouseEvent("click"))
}
function loadPose(mesh: Mesh, upload: HTMLInputElement) {
    upload.accept = ".pose"
    upload.onchange = async () => {
        if (upload.files?.length === 1) {
            const file = upload.files[0]
            const buffer = await file.arrayBuffer()
            const te = new TextDecoder()
            const content = te.decode(buffer)
            mesh.clearPose()
            for (const line of content.split("\n")) {
                const token = line.split(",")
                if (token.length === 2) {
                    mesh.setPose(token[0], parseFloat(token[1]))
                }
            }
        }
    }
    upload.dispatchEvent(new MouseEvent("click"))
}

function makeDownloadElement() {
    const download = document.createElement("a")
    download.type = "text/plain"
    download.style.display = "hidden"
    download.download = "makehuman.dae"
    return download
}

function makeUploadElement() {
    const upload = document.createElement("input")
    upload.type = "file"
    upload.style.display = "none"
    return upload
}
