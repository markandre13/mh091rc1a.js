import { Mesh } from "animorph/Mesh"
import { Reference } from "toad.jsx/lib/jsx-runtime"

interface RefTypes {
    details: HTMLElement
}
const refs: RefTypes = {} as any

export function bodyDetailsPanel(mesh: Mesh) {
    return (
        <>
            <div style={{ padding: "5px", fontWeight: "bold" }}>Body Details</div>
            <div id="panel" style={{ lineHeight: "0" }}>
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
                <img src="images/ui/face_09.png" />
                <img src="images/ui/face_10.png" />
                <img src="images/ui/face_11.png" />
                <img src="images/ui/face_12.png" />
                <br />
                <img src="images/ui/body_07.png" />
                <img src="images/ui/body_08.png" />
                <img src="images/ui/face_13.png" />
                <img src="images/ui/face_14.png" />
                <img src="images/ui/face_15.png" />
                <img src="images/ui/face_16.png" />
                <br />
                <img src="images/ui/body_09.png" />
                <img src="images/ui/body_10.png" />
                <img src="images/ui/face_17.png" />
                <img src="images/ui/face_18.png" />
                <img src="images/ui/face_19.png" />
                <img src="images/ui/face_20.png" />
                <br />
                <img src="images/ui/body_11.png" />
                <img src="images/ui/body_12.png" />
                <img src="images/ui/face_21.png" />
                <img src="images/ui/face_22.png" />
                <img src="images/ui/face_23.png" />
                <img src="images/ui/face_24.png" />
                <br />
                <img src="images/ui/body_13.png" />
                <img src="images/ui/body_14.png" />
                <img src="images/ui/hands_01.png" />
                <img src="images/ui/hands_02.png" />
                <img src="images/ui/hands_03.png" />
                <img src="images/ui/hands_04.png" />
                <br />
                <img src="images/ui/body_15.png" />
                <img src="images/ui/body_16.png" />
                <img src="images/ui/hands_05.png" />
                <img src="images/ui/hands_06.png" />
                <img src="images/ui/hands_07.png" />
                <img src="images/ui/hands_08.png" />
                <br />
                <img src="images/ui/body_17.png" />
                <img src="images/ui/body_18.png" />
                <img src="images/ui/hands_09.png" />
                <img src="images/ui/hands_10.png" />
                <img src="images/ui/hands_11.png" />
                <img src="images/ui/hands_12.png" />
            </div>
            <div set={new Reference(refs, "details")}></div>
        </>
    )
}
