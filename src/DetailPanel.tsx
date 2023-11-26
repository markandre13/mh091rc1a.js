import { Mesh } from "animorph/Mesh"
import { Reference } from "toad.jsx/lib/jsx-runtime"

interface RefTypes {
    details: HTMLElement
}
export const refs: RefTypes = {} as any

interface Tile {
    // title: string
    targetName?: string
    img?: HTMLImageElement
}
let tiles: Tile[]

let selectedJoint: number | undefined = undefined

// TargetSelectionListener.cpp

// Torso / torso_width_min_target
// Head / head001 ... head_frontal_vertex

// ./makehuman-0.9.1-rc1a/pixmaps/tgimg/head/head_frontal_vertex.png
// ./makehuman-0.9.1-rc1a/data/targets/head/head_frontal_vertex.target

export function bodyDetailsPanel(mesh: Mesh) {
    const panel: HTMLElement[] = []
    tiles = new Array<Tile>(poseTargets.length)
    // for (let jointIdx = 1; jointIdx < poseTargets.length; ++jointIdx) {
    for (let tileIdx = 0; tileIdx < 6 * 9; ++tileIdx) {
        panel.push(createTile(mesh, tileIdx))
    }
    return (
        <>
            <div style={{ padding: "5px", fontWeight: "bold" }}>Body Details</div>
            <div id="panel" style={{ lineHeight: "0" }}>
                {...panel}
            </div>
            <div id="details" set={new Reference(refs, "details")}></div>
        </>
    )
}

function createTile(mesh: Mesh, tileIdx: number): HTMLElement {
    const target = poseTargets[tileIdx]
    tiles[tileIdx] = { targetName: target }
    const row = Math.floor(tileIdx / 6)
    const col = tileIdx % 6
    let src: string
    let num
    if (col < 2) {
        src = "body"
        num = 1 + col + row * 2
    } else {
        if (row < 6) {
            src = "face"
            num = 1 + col - 2 + row * 4
        } else {
            src = "hands"
            num = 1 + col - 2 + (row - 6) * 4
        }
    }
    src = `${src}_${num.toString().padStart(2, "0")}`
    const tileImg = (<img src={`images/ui/${src}.png`} />) as HTMLImageElement
    if (tileIdx < poseTargets.length) {
        const name = poseTargets[tileIdx]
        if (name !== undefined) {
            const title = name.at(0)!.toUpperCase() + name.substring(1)
            tileImg.title = title
            tileImg.onpointerenter = () => {
                tileImg.src = `images/ui/${src}_over.png`
            }
            tileImg.onpointerleave = () => {
                tileImg.src = `images/ui/${src}.png`
            }
            tileImg.onpointerdown = () => {
                const details = (
                    <>
                        <div style={{ padding: "5px", fontWeight: "bold" }}>{title}</div>
                    </>
                )
                mesh.targetmap.forEach((targetEntry, name) => {

                    if (name.startsWith(`${tiles[tileIdx].targetName}/`)) {
                        const detailImg = <img width="64" height="64" title={name} src={`images/target/${name.substring(0, name.length-7)}.png`} /> as HTMLImageElement
                        details.push(detailImg)
                        // details.push(createDetail(mesh, name))
                    }
                })
                refs.details.replaceChildren(...details)
                // if (selectedJoint !== undefined && selectedJoint !== jointIdx) {
                //     tiles[selectedJoint].img!.src = `images/ui/rotations_${selectedJoint.toString().padStart(2, "0")}.png`
                // }
                // selectedJoint = jointIdx
            }
        }
    }
    // tiles[jointIdx].img = tileImg
    return tileImg
}

// prettier-ignore
const poseTargets: (string | undefined)[] = [
    "torso", "head", undefined, undefined, undefined, undefined, 
    "shoulders", "neck", undefined, "forehead", undefined, undefined,
]

