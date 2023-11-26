import { use, expect } from "@esm-bundle/chai"
import { chaiAlmost } from "./chai/chaiAlmost"
use(chaiAlmost())

describe("SelectorListener", () => {
    it("calcWidgetTargets()", () => {
        const sl = new SelectorListener()
        sl.calcWidgetTargets()
    })
})

interface Point {
    x: number
    y: number
}

class SelectorListener {
    age: Selector
    muscleSize: Selector
    breastSize: Selector
    shapeSize: Selector

    ageDists: number[]
    muscleSizeDists: number[]
    breastDists: number[]
    shapeDists: number[]

    constructor() {
        // prettier-ignore
        this.age = new Selector(2, 5, [
            "female_10", "female_30", "female_50", "female_70", "female_90", 
            "male_10", "male_30", "male_50", "male_70", "male_90"
        ])
        // prettier-ignore
        this.muscleSize = new Selector(2, 2, [
            "skinny_nomuscle", "big_nomuscle",
            "skinny_muscle", "big_muscle"
        ])
        // prettier-ignore
        this.breastSize = new Selector(2, 2, [
            "cone_little", "cone_big",
            "sphere_little", "sphere_big"
        ])
        // prettier-ignore
        this.shapeSize = new Selector(2, 2, [
            "brevilinear_vshape", "brevilinear_peershape",
            "longilinear_vshape", "longilinear_peershape"
        ])

        this.ageDists = this.age.getDists()
        this.muscleSizeDists = this.muscleSize.getDists()
        this.breastDists = this.breastSize.getDists()
        this.shapeDists = this.shapeSize.getDists()
    }

    doMorph(name: string, value: number) {
        if (value === 0) {
            return
        }
        console.log(`doMorph(${name}, ${value})`)
    }

    calcWidgetTargets() {
        let i: number, j: number, k: number

        i = 0
        for (const di_it of this.ageDists) {
            if (i < this.age.labels.length) {
                const tmpTargetName = `ages/${this.age.labels[i++]}.target`
                this.doMorph(tmpTargetName, di_it)
            }
        }

        j = 0
        for (const ms_it of this.muscleSizeDists) {
            i = 0
            for (const di_it of this.ageDists) {
                if (j < this.muscleSize.labels.length && i < this.age.labels.length) {
                    const tmpTargetName = `muscleSize/${this.age.labels[i]}_${this.muscleSize.labels[j]}.target`
                    const tmpTargetValue = di_it * ms_it
                    this.doMorph(tmpTargetName, tmpTargetValue)
                }
                k = 0
                if (i <= 4) {
                    for (const br_it of this.breastDists) {
                        if (k < this.breastSize.labels.length) {
                            const tmpTargetName = `breast/${this.age.labels[i]}_${this.muscleSize.labels[j]}_${this.breastSize.labels[k]}.target`
                            const tmpTargetValue = di_it * ms_it * br_it
                            this.doMorph(tmpTargetName, tmpTargetValue)
                        }
                    }
                    ++k
                }
                ++i
            }
            ++j
        }

        i = 0
        for (const sh_it of this.shapeDists) {
            if (i < this.shapeSize.labels.length) {
                const tmpTargetName = `shapes/${this.shapeSize.labels[i++]}.target`
                this.doMorph(tmpTargetName, sh_it)
            }
        }
    }
}

class Selector {
    height = 192
    width = 104
    cursorPos: Point = { x: 96, y: 52 }
    rows: number
    cols: number
    maxValue: number
    cellRatio: number
    points: Point[] = []
    labels: string[]

    constructor(rows: number, cols: number, labels: string[]) {
        this.rows = rows
        this.cols = cols
        this.labels = labels

        const cellWidth = this.width / (cols - 1)
        const cellHeight = this.height / (rows - 1)
        this.cellRatio = cellWidth / cellHeight
        this.maxValue = Math.min(cellWidth, cellHeight * this.cellRatio)

        for (let i = 0; i < rows; ++i) {
            for (let j = 0; j < cols; ++j) {
                this.points.push({
                    x: j * cellWidth,
                    y: i * cellHeight,
                })
            }
        }
    }
    setCursorPos(x: number, y: number) {
        this.cursorPos.x = x
        this.cursorPos.y = y
    }
    getDists() {
        const ret: number[] = []
        for (const tmp of this.points) {
            const dist = Math.sqrt(
                Math.pow(tmp.x - this.cursorPos.x, 2) + Math.pow((tmp.y - this.cursorPos.y) * this.cellRatio, 2)
            )
            const value = 1 - dist / this.maxValue
            if (value > 0) {
                ret.push(value)
            } else {
                ret.push(0.0)
            }
        }
        return ret
    }
}
