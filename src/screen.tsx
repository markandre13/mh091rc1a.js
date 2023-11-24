// document.body.style.overflow = "hidden"
// document.body.replaceChildren(canvas)

import { Mesh } from "animorph/Mesh"
import { Fragment } from "toad.jsx/lib/jsx-runtime"

// body = new Image(kComponentID_PosesImageBody_RightCollarParams,
//     searchPixmapFile ("ui/rotations_01.png"),
//     Rect (0,0,32,32));
// body->setListener(&imgListener);
// body->setTooltip(Tooltip("Right collar parameters", kTooltipPos, color_red, tooltipPanel));

// kComponentID_PosesImageBody_RightCollarParams -> target = 260_right_collar (ROT1-3)

// mesh.targetmap 260_right_collar/ROT1

// targetPanel = new PoseTargetPanel (target, Rect(x,40,210,517));

interface PP {
    title: string,
    target: string
}

const d: PP[] = [
    {title: "", target: ""},

    {title: "Right collar", target: "260_right_collar"},
    {title: "Head", target: "300_head"},
    {title: "Left collar", target: "280_left_collar"},
    {title: "Left ringfinger", target: "070_left_ringfinger_3"},
    {title: "Left middlefinger", target: "067_left_middlefinger_3"},
    {title: "Left forefinger", target: "064_left_forefinger_3"},
    
    {title: "Right upper arm", target: "220_right_upper_arm"},
    {title: "Neck", target: "320_neck"},
    {title: "Left upper arm", target: "240_left_upper_arm"},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
    {title: "", target: ""},
]

let activeRotations = -1

function posesBodyPanel(mesh: Mesh) {
    const a = []
    for (let i = 1; i <= 84; ++i) {
        const img = <img 
            src={`images/ui/rotations_${i.toString().padStart(2, "0")}.png`} 
            title={d[i].title}
            /> as HTMLImageElement
        img.onpointerenter = () => {
            img.src = `images/ui/rotations_${i.toString().padStart(2, "0")}_over.png`
        }
        img.onpointerleave = () => {
            img.src = `images/ui/rotations_${i.toString().padStart(2, "0")}.png`
        }
        img.onpointerdown = () => {
            if (i<d.length) {
                mesh.posemap.forEach((x, key) => {
                    if (key.startsWith(`${d[i].target}/`)) {
                        console.log(key)
                    }
                })
            }
        }
        img.onpointerup = () => {
            
        }

        a.push(img)
    }
    return a
}

export default (mesh: Mesh) => (
    <>
        <div
            style={{
                position: "absolute",
                display: "block",
                left: "0",
                top: "0",
                bottom: "0",
                width: "192px",
                lineHeight: "0",
            }}
        >
            <img src="images/ui/toolbar_load.png" title="Load body setting"/>
            <img src="images/ui/toolbar_save.png"  title="Save body setting"/>
            <img src="images/ui/toolbar_charac_sett.png" title="Character setting (somatypes, shapes, age, etc...)"/>
            <img src="images/ui/toolbar_body_det_real.png" title="Body details (realistic morphings)"/>
            <img src="images/ui/toolbar_poses_over.png" title="Poses"/>
            <img src="images/ui/toolbar_reset.png" title="Reset mesh"/>
            
            <br/>

            {...posesBodyPanel(mesh)}

            <img src="images/rot/260_right_collar/ROT1.png" />
            <img src="images/rot/260_right_collar/ROT2.png" />
            <img src="images/rot/260_right_collar/ROT3.png" />

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
