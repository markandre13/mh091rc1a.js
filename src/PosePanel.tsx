import { Mesh } from "animorph/Mesh"
import { Reference } from "toad.jsx/lib/jsx-runtime"

interface RefTypes {
    details: HTMLElement
}
const refs: RefTypes = {} as any

interface Tile {
    targetName?: string
    img?: HTMLImageElement
}
let tiles: Tile[]

let selectedJoint: number | undefined = undefined

export function posesBodyPanel(mesh: Mesh) {
    mesh.poseMode()
    const panel: HTMLElement[] = []
    tiles = new Array<Tile>(poseTargets.length)
    for (let jointIdx = 1; jointIdx < poseTargets.length; ++jointIdx) {
        panel.push(createTile(mesh, jointIdx))
    }
    return (
        <>
            <div style={{ padding: "5px", fontWeight: "bold" }}>Poses</div>
            <div id="panel" style={{ lineHeight: "0" }}>
                {...panel}
            </div>
            <div id="details" set={new Reference(refs, "details")}></div>
        </>
    )
}

function createTile(mesh: Mesh, jointIdx: number): HTMLElement {
    const target = poseTargets[jointIdx]
    tiles[jointIdx] = { targetName: target }

    const tileImg = (
        <img src={`images/ui/rotations_${jointIdx.toString().padStart(2, "0")}.png`} />
    ) as HTMLImageElement
    tiles[jointIdx].img = tileImg

    if (target === undefined) {
        return tileImg
    }
    const title = target.at(4)!.toUpperCase() + target.substring(5).replaceAll("_", " ")
    tileImg.title = title
    tileImg.onpointerenter = () => {
        tileImg.src = `images/ui/rotations_${jointIdx.toString().padStart(2, "0")}_over.png`
    }
    tileImg.onpointerleave = () => {
        if (selectedJoint !== jointIdx) {
            tileImg.src = `images/ui/rotations_${jointIdx.toString().padStart(2, "0")}.png`
        }
    }
    tileImg.onpointerdown = () => {
        if (jointIdx < tiles.length) {
            const details = (
                <>
                    <div style={{ padding: "5px", fontWeight: "bold" }}>{title}</div>
                </>
            )
            mesh.posemap.forEach((poseEntry, name) => {
                if (name.startsWith(`${tiles[jointIdx].targetName}/`)) {
                    details.push(createKnob(mesh, name))
                }
            })
            refs.details.replaceChildren(...details)
            if (selectedJoint !== undefined && selectedJoint !== jointIdx) {
                tiles[selectedJoint].img!.src = `images/ui/rotations_${selectedJoint.toString().padStart(2, "0")}.png`
            }
            selectedJoint = jointIdx
        }
    }
    return tileImg
}

// value changes on: drag left & right / wheel
// white: default, red: changed
function createKnob(mesh: Mesh, name: string) {
    const img0 = `images/rot/${name}.png`
    const img1 = `images/rot/${name}_over.png`

    const detail = (
        <div style={{ display: "inline-block", textAlign: "center" }}>
            <img width="64" height="64" title={name} src={img0} />
            <div></div>
        </div>
    ) as HTMLElement

    let lastValue = 0,
        downX: number | undefined

    const img = detail.children[0] as HTMLImageElement
    const txt = detail.children[1] as HTMLDivElement
    const setValue = (value: number) => {
        const v = mesh.setPose(name, value)
        txt.innerText = Math.round(v).toString()
        if (value !== 0) {
            txt.style.color = "#f00"
        } else {
            txt.style.color = ""
        }
    }
    setValue(mesh.getPose(name))

    img.onpointerenter = (ev: PointerEvent) => {
        ev.preventDefault()
        img.src = img1
    }
    img.onpointerleave = (ev: PointerEvent) => {
        ev.preventDefault()
        img.src = img0
    }
    img.oncontextmenu = (ev: MouseEvent) => {
        ev.preventDefault()
    }
    img.onpointerdown = (ev: PointerEvent) => {
        ev.preventDefault()
        img.setPointerCapture(ev.pointerId)
        switch (ev.button) {
            case 0:
                downX = ev.x
                lastValue = mesh.getPose(name)
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

// the body pose panel consists of 6x14 tiles
const poseTargets: (string | undefined)[] = [
    undefined,
    "260_right_collar",
    "300_head",
    "280_left_collar",
    "070_left_ringfinger_3",
    "067_left_middlefinger_3",
    "064_left_forefinger_3",

    "220_right_upper_arm",
    "320_neck",
    "240_left_upper_arm",
    "071_left_ringfinger_2",
    "068_left_middlefinger_2",
    "065_left_forefinger_2",

    undefined,
    "360_torso",
    undefined,
    "073_left_littlefinger_3",
    "069_left_middlefinger_1",
    "066_left_forefinger_1",

    "140_right_lower_arm",
    "380_pivot",
    "160_left_lower_arm",
    "074_left_littlefinger_2",
    "072_left_ringfinger_1",
    "061_left_pollex_3",

    "060_right_hand",
    undefined,
    "080_left_hand",
    "075_left_littlefinger_1",
    "063_left_pollex_1",
    "062_left_pollex_2",

    "180_right_upper_leg",
    undefined,
    "200_left_upper_leg",
    "044_right_forefinger_3",
    "047_right_middlefinger_3",
    "050_right_ringfinger_3",

    "100_right_lower_leg",
    undefined,
    "120_left_lower_leg",
    "045_right_forefinger_2",
    "048_right_middlefinger_2",
    "051_right_ringfinger_2",

    undefined,
    undefined,
    undefined,
    "046_right_forefinger_1",
    "049_right_middlefinger_1",
    "053_right_littlefinger_3",

    "020_right_foot",
    undefined,
    "040_left_foot",
    "041_right_pollex_3",
    "052_right_ringfinger_1",
    "054_right_littlefinger_2",

    undefined,
    undefined,
    undefined,
    "042_right_pollex_2",
    "043_right_pollex_1",
    "055_right_littlefinger_1",

    "002_right_footfinger_4_2",
    "000_right_footfinger_5_2",
    "001_right_footfinger_5_1",
    "022_left_footfinger_5_1",
    "021_left_footfinger_5_2",
    "023_left_footfinger_4_2",

    "004_right_footfinger_3_2",
    "005_right_footfinger_3_1",
    "003_right_footfinger_4_1",
    "024_left_footfinger_4_1",
    "026_left_footfinger_3_1",
    "025_left_footfinger_3_2",

    "006_right_footfinger_2_2",
    "007_right_footfinger_2_1",
    "009_right_footfinger_1_1",
    "030_left_footfinger_1_1",
    "028_left_footfinger_2_1",
    "027_left_footfinger_2_2",

    "008_right_footfinger_1_2",
    undefined,
    undefined,
    undefined,
    undefined,
    "029_left_footfinger_1_2",
]
