import { posesBodyPanel } from "./PosePanel"
import { bodyDetailsPanel } from "./DetailPanel"
import { characterPanel } from "./CharacterPanel"
import { Mesh } from "../animorph/Mesh"
import { Fragment, Reference } from "toad.jsx/lib/jsx-runtime"
import { loadPanel, savePanel } from "./FilePanels"

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
    icon: string
    desc: string
    img?: HTMLImageElement
    render?: (mesh: Mesh) => Fragment
}

const toolbarDefinition: ToolDef[] = [
    { id: TAB.LOAD, icon: "load", desc: "Load body setting", render: (mesh: Mesh) => loadPanel(mesh) },
    { id: TAB.SAVE, icon: "save", desc: "Save body setting", render: (mesh: Mesh) => savePanel(mesh) },
    {
        id: TAB.CHARACTER,
        icon: "charac_sett",
        desc: "Character setting (somatypes, shapes, age, etc...)",
        render: (mesh: Mesh) => characterPanel(mesh),
    },
    {
        id: TAB.DETAILS,
        icon: "body_det_real",
        desc: "Body details (realistic morphings)",
        render: (mesh: Mesh) => bodyDetailsPanel(mesh),
    },
    { id: TAB.POSE, icon: "poses", desc: "Reset mesh", render: (mesh: Mesh) => posesBodyPanel(mesh) },
]

let activeTab: ToolDef | undefined
function setTab(mesh: Mesh, tab: ToolDef) {
    if (activeTab) {
        activeTab.img!.src = `images/ui/toolbar_${activeTab.icon}.png`
    }
    activeTab = tab
    activeTab.img!.src = `images/ui/toolbar_${activeTab.icon}_over.png`
    if (tab.render !== undefined) {
        refs.panel.replaceChildren(...tab.render(mesh))
    } else {
        refs.panel.replaceChildren()
    }
}

function toolbarPanel(mesh: Mesh): HTMLElement[] {
    return toolbarDefinition.map((it) => {
        const img = (<img src={`images/ui/toolbar_${it.icon}.png`} title={it.desc} />) as HTMLImageElement
        it.img = img
        img.onpointerenter = () => {
            img.src = `images/ui/toolbar_${it.icon}_over.png`
        }
        img.onpointerleave = () => {
            if (it !== activeTab) {
                img.src = `images/ui/toolbar_${it.icon}.png`
            }
        }
        img.onpointerdown = () => {
            setTab(mesh, it)
        }
        return img
    })
}

export default (mesh: Mesh) => {
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
                    {...toolbarPanel(mesh)}
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

    setTab(mesh, toolbarDefinition[2])

    return page
}
