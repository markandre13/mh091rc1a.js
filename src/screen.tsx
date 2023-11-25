import { Mesh } from "animorph/Mesh"
import { Fragment, Reference } from "toad.jsx/lib/jsx-runtime"

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

interface RefTypes {
    details: HTMLElement
}
const refs: RefTypes = {} as any

interface Tile {
    // title: string
    targetName?: string
    img?: HTMLImageElement
}
let tiles: Tile[]

let selectedJoint: number | undefined = undefined

function posesBodyPanel(mesh: Mesh) {
    const panel: HTMLElement[] = []
    tiles = new Array<Tile>(poseTargets.length)
    for (let jointIdx = 1; jointIdx < poseTargets.length; ++jointIdx) {
        panel.push(createTile(mesh, jointIdx))
    }
    return panel
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
                    // value changes on: drag left & right / wheel
                    // white: default, red: changed
                    // const detailImg = <img width="64" height="64" title={key} src={`images/rot/${key}.png`} /> as HTMLImageElement
                    details.push(createDetail(mesh, name))
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
function createDetail(mesh: Mesh, name: string) {
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
        mesh.setPose(name, value)
        txt.innerText = Math.round(value).toString()
        if (value !== 0) {
            txt.style.color = "#f00"
        } else {
            txt.style.color = ""
        }
    }
    setValue(mesh.getPose(name))

    // TODO
    // * grab on click
    // * disable browser menu on right click
    // * update and redraw mesh

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
        // setValue(0)
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
    }

    return detail
}

export default (mesh: Mesh) =>
    (
        <>
            <div
                style={{
                    position: "absolute",
                    display: "block",
                    left: "0",
                    top: "0",
                    bottom: "0",
                    width: "192px",
                }}
            >
                <div id="toolbar" style={{ lineHeight: "0" }}>
                    <img src="images/ui/toolbar_load.png" title="Load body setting" />
                    <img src="images/ui/toolbar_save.png" title="Save body setting" />
                    <img
                        src="images/ui/toolbar_charac_sett.png"
                        title="Character setting (somatypes, shapes, age, etc...)"
                    />
                    <img src="images/ui/toolbar_body_det_real.png" title="Body details (realistic morphings)" />
                    <img src="images/ui/toolbar_poses_over.png" title="Poses" />
                    <img src="images/ui/toolbar_reset.png" title="Reset mesh" 
                    onpointerdown={ () => mesh.clearPose() }/>
                </div>
                <div style={{ padding: "5px", fontWeight: "bold" }}>Poses</div>
                <div id="panel" style={{ lineHeight: "0" }}>
                    {...posesBodyPanel(mesh)}
                </div>
                <div id="details" set={new Reference(refs, "details")}></div>
                {/*

            Body details (realistic morphings)

            <img src="images/ui/body_01.png" />
            <img src="images/ui/body_02.png" />
            <img src="images/ui/face_01.png" />
            <img src="images/ui/face_02.png" />
            <img src="images/ui/face_03.png" />
            <img src="images/ui/face_04.png" />
               <br />
            <img src="images/ui/body_03.png" />
            <img src="images/ui/body_04.png" />
            <img src="images/ui/face_05.png" />
            <img src="images/ui/face_06.png" />
            <img src="images/ui/face_07.png" />
            <img src="images/ui/face_08.png" />
            <br />
            <img src="images/ui/body_05.png" />
            <img src="images/ui/body_06.png" />
            <img src="images/ui/face_09.png"/>
            <img src="images/ui/face_10.png"/>
            <img src="images/ui/face_11.png"/>
            <img src="images/ui/face_12.png"/>
            <br />
            <img src="images/ui/body_07.png" />
            <img src="images/ui/body_08.png" />
            <img src="images/ui/face_13.png"/>
            <img src="images/ui/face_14.png"/>
            <img src="images/ui/face_15.png"/>
            <img src="images/ui/face_16.png"/>
            <br />
            <img src="images/ui/body_09.png" />
            <img src="images/ui/body_10.png" />
            <img src="images/ui/face_17.png"/>
            <img src="images/ui/face_18.png"/>
            <img src="images/ui/face_19.png"/>
            <img src="images/ui/face_20.png"/>
            <br />
            <img src="images/ui/body_11.png" />
            <img src="images/ui/body_12.png" />
            <img src="images/ui/face_21.png"/>
            <img src="images/ui/face_22.png"/>
            <img src="images/ui/face_23.png"/>
            <img src="images/ui/face_24.png"/>
            <br />
            <img src="images/ui/body_13.png" />
            <img src="images/ui/body_14.png" />
            <img src="images/ui/hands_01.png"/>
            <img src="images/ui/hands_02.png"/>
            <img src="images/ui/hands_03.png"/>
            <img src="images/ui/hands_04.png"/>
            <br />
            <img src="images/ui/body_15.png" />
            <img src="images/ui/body_16.png" />
            <img src="images/ui/hands_05.png"/>
            <img src="images/ui/hands_06.png"/>
            <img src="images/ui/hands_07.png"/>
            <img src="images/ui/hands_08.png"/>
            <br />
            <img src="images/ui/body_17.png" />
            <img src="images/ui/body_18.png" />
            <img src="images/ui/hands_09.png"/>
            <img src="images/ui/hands_10.png"/>
            <img src="images/ui/hands_11.png"/>
            <img src="images/ui/hands_12.png"/>
            <br /> */}
            </div>
            <div
                style={{
                    position: "absolute",
                    left: "192px",
                    top: "0px",
                    bottom: "0px",
                    right: "0px",
                }}
            >
                <canvas
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                />
            </div>
        </>
    ) as Fragment
