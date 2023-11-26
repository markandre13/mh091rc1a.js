import { Mesh } from "animorph/Mesh"
import { Reference } from "toad.jsx/lib/jsx-runtime"
import { refs } from "DetailPanel"

export function characterPanel(mesh: Mesh) {
    return (
        <>
            <div style={{ padding: "5px", fontWeight: "bold" }}>Character</div>
            <img src="images/ui/age_selector.png" />
            <img src="images/ui/muscle_size_selector.png" />
            <img src="images/ui/breast_selector.png" />
            <img src="images/ui/shape_selector.png" />
        </>
    )
}


