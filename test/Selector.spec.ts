import { use, expect } from "@esm-bundle/chai"
import { chaiAlmost } from "./chai/chaiAlmost"
use(chaiAlmost())

describe("Selector", () => {
    it("1", () => {
        const sl = new SelectorListener()
        sl.calcWidgetTargets()
    })
})

interface Point {
    x: number
    y: number
}

class SelectorListener {
    constructor() {}

    doMorph(name: string, value: number) {
        if (value === 0) {
            return
        }
        console.log(`doMorph(${name}, ${value})`)
    }

    calcWidgetTargets() {
        // prettier-ignore
        const age = new Selector(2, 5, [
            "female_10", "female_30", "female_50", "female_70", "female_90", 
            "male_10", "male_30", "male_50", "male_70", "male_90"
        ])
        // prettier-ignore
        const muscleSize = new Selector(2, 2, [
            "skinny_nomuscle", "big_nomuscle",
            "skinny_muscle", "big_muscle"
        ])
        // prettier-ignore
        const breastSize = new Selector(2, 2, [
            "cone_little", "cone_big",
            "sphere_little", "sphere_big"
        ])
        // prettier-ignore
        const shapeSize = new Selector(2, 2, [
            "brevilinear_vshape", "brevilinear_peershape",
            "longilinear_vshape", "longilinear_peershape"
        ])

        const ageDists = age.getDists()
        const muscleSizeDists = muscleSize.getDists()
        const breastDists = breastSize.getDists()
        const shapeDists = shapeSize.getDists()

        let i: number, j: number, k: number

        i = 0
        for (const di_it of ageDists) {
            if (i < age.labels.length) {
                const tmpTargetName = `ages/${age.labels[i++]}.target`
                this.doMorph(tmpTargetName, di_it)
            }
        }

        j = 0
        for (const ms_it of muscleSizeDists) {
            i = 0
            for (const di_it of ageDists) {
                if (j < muscleSize.labels.length && i < age.labels.length) {
                    const tmpTargetName = `muscleSize/${age.labels[i]}_${muscleSize.labels[j]}.target`
                    const tmpTargetValue = di_it * ms_it
                    this.doMorph(tmpTargetName, tmpTargetValue)
                }
                k = 0
                if (i <= 4) {
                    for (const br_it of breastDists) {
                        if (k < breastSize.labels.length) {
                            const tmpTargetName = `breast/${age.labels[i]}_${muscleSize.labels[j]}_${breastSize.labels[k]}.target`
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
        for (const sh_it of shapeDists) {
            if (i < shapeSize.labels.length) {
                const tmpTargetName = `shapes/${shapeSize.labels[i++]}.target`
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
