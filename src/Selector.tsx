import { Point } from "Point"

export class Selector {
    height = 104;
    width = 192;
    cursorPos: Point = { x: 96/2, y: 54 };
    rows: number
    cols: number
    maxValue: number
    cellRatio: number
    points: Point[] = [];
    labels: string[]
    private dists?: number[]

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
        this.dists = undefined
        x = Math.max(Math.min(x, this.width), 0)
        y = Math.max(Math.min(y, this.height), 0)
        this.cursorPos.x = x
        this.cursorPos.y = y
    }
    getDists() {
        if (this.dists !== undefined) {
            return this.dists
        }
        this.dists = []
        
        let x = this.cursorPos.x, y = this.cursorPos.y

        for (const tmp of this.points) {
            const dist = Math.sqrt(
                Math.pow(tmp.x - x, 2) + Math.pow((tmp.y - y) * this.cellRatio, 2)
            )
            const value = 1 - dist / this.maxValue
            if (value > 0) {
                this.dists.push(value)
            } else {
                this.dists.push(0)
            }
        }
        return this.dists
    }
}
