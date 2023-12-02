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
    imgSrc?: string
    imgSrcOver?: string
}
let tiles: Tile[]

let selectedTile: number | undefined = undefined

export function bodyDetailsPanel(mesh: Mesh) {
    mesh.morphMode()
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
    tiles[tileIdx].imgSrc = `images/ui/${src}.png`
    tiles[tileIdx].imgSrcOver = `images/ui/${src}_over.png`

    const tileImg = (<img src={tiles[tileIdx].imgSrc} />) as HTMLImageElement
    const name = detailTargets[tileIdx]
    if (name !== undefined) {
        const title = name.at(0)!.toUpperCase() + name.substring(1).replace("_", " ")
        tileImg.title = title
        tileImg.onpointerenter = () => {
            tileImg.src = tiles[tileIdx].imgSrcOver!
        }
        tileImg.onpointerleave = () => {
            if (selectedTile !== tileIdx) {
                tileImg.src = tiles[tileIdx].imgSrc!
            }
        }
        tileImg.onpointerdown = () => {
            const details = (
                <>
                    <div style={{ padding: "5px", fontWeight: "bold" }}>{title}</div>
                </>
            )
            mesh.targetmap.forEach((targetEntry, name) => {
                if (name.startsWith(`${tiles[tileIdx].targetName}/`)) {
                    details.push(createKnob(mesh, name))
                }
            })
            refs.details.replaceChildren(...details)

            if (selectedTile !== undefined && selectedTile !== tileIdx) {
                tiles[selectedTile].img!.src = tiles[selectedTile].imgSrc!
            }
            selectedTile = tileIdx
        }
    }
    tiles[tileIdx].img = tileImg
    return tileImg
}

function createKnob(mesh: Mesh, name: string) {
    const imgSrc = `images/target/${name.substring(0, name.length - 7)}.png`

    const detail = (
        <div style={{ display: "inline-block", textAlign: "center" }}>
            <img width="64" height="64" title={name} src={imgSrc} />
            <div></div>
        </div>
    ) as HTMLElement

    let lastValue = 0,
        downX: number | undefined

    const img = detail.children[0] as HTMLImageElement
    const txt = detail.children[1] as HTMLDivElement
    const setValue = (value: number) => {
        value /= 100.0
        const v = mesh.doMorph(name, value)
        txt.innerText = v.toPrecision(2)
        if (isZero(value)) {
            value = 0
        }
        if (isEqual(value, 1)) {
            value = 1
        }
        if (v !== 0) {
            txt.style.color = "#f00"
        } else {
            txt.style.color = ""
        }
    }
    setValue(mesh.getMorph(name) * 100)

    img.onpointerenter = (ev: PointerEvent) => {
        ev.preventDefault()
    }
    img.onpointerleave = (ev: PointerEvent) => {
        ev.preventDefault()
    }
    img.oncontextmenu = (ev: MouseEvent) => {
        ev.preventDefault()
    }
    img.onpointerdown = (ev: PointerEvent) => {
        ev.preventDefault()
        img.setPointerCapture(ev.pointerId)
        switch (ev.button) {
            case 0:
                lastValue = mesh.getMorph(name) * 100
                downX = ev.x
                break
            case 2:
                setValue(0)
                break
        }
    }
    img.onpointerup = (ev: PointerEvent) => {
        ev.preventDefault()
        downX = undefined
    }
    img.onpointermove = (ev: PointerEvent) => {
        ev.preventDefault()
        if (downX !== undefined) {
            setValue(lastValue! + ev.x - downX)
        }
    }

    return detail
}

const epsilon = 0.00001

function isZero(a: number): boolean {
    return Math.abs(a) <= epsilon
}
function isEqual(a: number, b: number) {
    return isZero(a - b)
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
