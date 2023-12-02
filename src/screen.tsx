import { posesBodyPanel } from "PosePanel"
import { Mesh } from "animorph/Mesh"
import { bodyDetailsPanel } from "DetailPanel"
import { Fragment, Reference } from "toad.jsx/lib/jsx-runtime"
import { characterPanel } from "CharacterPanel"
import { SelectorListener } from "SelectorListener"

interface RefTypes {
    panel: HTMLDivElement
}
const refs: RefTypes = {} as any

enum TAB {
    LOAD,
    SAVE,
    CHARACTER,
    DETAILS,
    POSE,
}

interface ToolDef {
    id: TAB
    file: string
    desc: string
    img?: HTMLImageElement
    render?: (mesh: Mesh, mgr: SelectorListener) => Fragment
}

const toolbarDefinition: ToolDef[] = [
    { id: TAB.LOAD, file: "load", desc: "Load body setting" },
    { id: TAB.SAVE, file: "save", desc: "Save body setting" },
    {
        id: TAB.CHARACTER,
        file: "charac_sett",
        desc: "Character setting (somatypes, shapes, age, etc...)",
        render: (mesh: Mesh, mgr: SelectorListener) => characterPanel(mgr),
    },
    {
        id: TAB.DETAILS,
        file: "body_det_real",
        desc: "Body details (realistic morphings)",
        render: (mesh: Mesh) => bodyDetailsPanel(mesh),
    },
    { id: TAB.POSE, file: "poses", desc: "Reset mesh", render: (mesh: Mesh) => posesBodyPanel(mesh) },
]

let activeTab: ToolDef | undefined
function setTab(mesh: Mesh, mgr: SelectorListener, tab: ToolDef) {
    if (activeTab) {
        activeTab.img!.src = `images/ui/toolbar_${activeTab.file}.png`
    }
    activeTab = tab
    activeTab.img!.src = `images/ui/toolbar_${activeTab.file}_over.png`
    if (tab.render !== undefined) {
        refs.panel.replaceChildren(...tab.render(mesh, mgr))
    } else {
        refs.panel.replaceChildren()
    }
}

function toolbarPanel(mesh: Mesh, mgr: SelectorListener): HTMLElement[] {
    return toolbarDefinition.map((it) => {
        const img = (<img src={`images/ui/toolbar_${it.file}.png`} title={it.desc} />) as HTMLImageElement
        it.img = img
        img.onpointerenter = () => {
            img.src = `images/ui/toolbar_${it.file}_over.png`
        }
        img.onpointerleave = () => {
            if (it !== activeTab) {
                img.src = `images/ui/toolbar_${it.file}.png`
            }
        }
        img.onpointerdown = () => {
            setTab(mesh, mgr, it)
        }
        return img
    })
}

export default (mesh: Mesh, mgr: SelectorListener) => {
    const page = (
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
                    {...toolbarPanel(mesh, mgr)}
                    <img src="images/ui/toolbar_reset.png" title="Reset mesh" onpointerdown={() => mesh.clear()} />
                </div>
                <div set={new Reference(refs, "panel")}></div>
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

    setTab(mesh, mgr, toolbarDefinition[2])

    return page
}
