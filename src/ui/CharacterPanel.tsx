import { Mesh } from "animorph/Mesh"
import { SelectorManager } from "animorph/SelectorManager"
import { Selector } from "animorph/Selector"

function createSelectorView(listener: SelectorManager, selector: Selector, name: string) {
    const view = (
        <div style={{ position: "relative" }}>
            <div
                style={{
                    pointerEvents: "none",
                    position: "absolute",
                    left: `${selector.cursorPos.x - 3}px`,
                    top: `${104 - selector.cursorPos.y - 3}px`,
                    width: "6px",
                    height: "6px",
                    border: "0",
                    background: "#f00",
                }}
            ></div>
            <img src={`images/ui/${name}_selector.png`} />
        </div>
    ) as HTMLDivElement
    const caret = view.children[0] as HTMLDivElement
    const set = (ev: PointerEvent) => {
        selector.setCursorPos(ev.offsetX, 104 - ev.offsetY)
        caret.style.left = `${selector.cursorPos.x - 3}px`
        caret.style.top = `${104 - selector.cursorPos.y - 3}px`
        listener.calcWidgetTargets()
    }
    view.onpointerdown = (ev: PointerEvent) => {
        ev.preventDefault()
        view.setPointerCapture(ev.pointerId)
        set(ev)
    }
    view.onpointermove = (ev: PointerEvent) => {
        if (ev.buttons !== 0) {
            set(ev)
        }
    }
    return view
}

export function characterPanel(mesh: Mesh) {
    const mgr = mesh.mgr
    mesh.morphMode()
    return (
        <>
            <div style={{ padding: "5px", fontWeight: "bold" }}>Character</div>
            {createSelectorView(mgr, mgr.age, "age")}
            {createSelectorView(mgr, mgr.muscleSize, "muscle_size")}
            {createSelectorView(mgr, mgr.breast, "breast")}
            {createSelectorView(mgr, mgr.shape, "shape")}
        </>
    )
}
