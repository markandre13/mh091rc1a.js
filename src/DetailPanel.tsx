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

let selectedTile: number | undefined = undefined

export function bodyDetailsPanel(mesh: Mesh) {
    const panel: HTMLElement[] = []
    tiles = new Array<Tile>(detailTargets.length)
    for (let tileIdx = 0; tileIdx < detailTargets.length; ++tileIdx) {
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
    const target = detailTargets[tileIdx]
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
    if (tileIdx < detailTargets.length) {
        const name = detailTargets[tileIdx]
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
                selectedTile = tileIdx
            }
        }
    }
    tiles[tileIdx].img = tileImg
    return tileImg
}

// prettier-ignore
const detailTargets: (string | undefined)[] = [
    "torso", "head", undefined, undefined, undefined, undefined, 
    "shoulders", "neck", undefined, "forehead", undefined, undefined,
    "upper_arms", undefined, undefined, "eyes", undefined, undefined,
    "lower_arms", "abdomen", "nose", "cheek", "ears", undefined,
    "hands", "pelvis", "mouth", undefined, undefined, undefined,
    "upper_legs", undefined, "chin_jaw", undefined, undefined, undefined,
    undefined, undefined, "forefinger", "middlefinger", "ringfinger", undefined,
    "lower_legs", undefined, "pollex", undefined, "littlefinger", undefined,
    "feet", undefined, undefined, undefined, undefined, undefined
]
