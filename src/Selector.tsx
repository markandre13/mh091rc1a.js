import { Point } from "Point"

export class Selector {
    height = 192;
    width = 104;
    cursorPos: Point = { x: 96, y: 52 };
    rows: number
    cols: number
    maxValue: number
    cellRatio: number
    points: Point[] = [];
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
                ret.push(0)
            }
        }
        return ret
    }
}
