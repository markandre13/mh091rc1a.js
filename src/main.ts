import { FileSystemAdapter } from "./filesystem/FileSystemAdapter"
import { HTTPFSAdapter } from "./filesystem/HTTPFSAdapter"
import { Mesh } from "./animorph/Mesh"
import { renderMesh } from "renderMesh"
import screen from "./ui/screen"

export function main() {
    console.log(`mh091rc1a (Makehuman 0.9.1-rc1a clone)`)
    FileSystemAdapter.setInstance(new HTTPFSAdapter())
    const mesh = new Mesh()
    document.body.replaceChildren(...screen(mesh))
    const canvas = document.body.querySelector("canvas") as HTMLCanvasElement
    renderMesh(canvas, mesh)
}

try {
    main()
} catch (e) {
    console.log(e)
}
