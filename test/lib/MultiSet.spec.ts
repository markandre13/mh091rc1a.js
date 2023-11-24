import { use, expect } from "@esm-bundle/chai"
import { chaiAlmost } from "../chai/chaiAlmost"
use(chaiAlmost(0.1))
import { MultiSet } from "../../src/lib/MultiSet"

describe("MultiSet", () => {
    describe("insert()", () => {
        it("1,2", () => {
            const set = new MultiSet()
            set.insert(1)
            set.insert(2)
            expect(set.entries()).to.deep.equal([1, 2])
        })
        it("2,1", () => {
            const set = new MultiSet()
            set.insert(2)
            set.insert(1)
            expect(set.entries()).to.deep.equal([1, 2])
        })
        it("2,4,1", () => {
            const set = new MultiSet()
            set.insert(2)
            set.insert(4)
            set.insert(1)
            expect(set.entries()).to.deep.equal([1, 2, 4])
        })
        it("2,4,3", () => {
            const set = new MultiSet()
            set.insert(2)
            set.insert(4)
            set.insert(3)
            expect(set.entries()).to.deep.equal([2, 3, 4])
        })
        it("2,4,5", () => {
            const set = new MultiSet()
            set.insert(2)
            set.insert(4)
            set.insert(5)
            expect(set.entries()).to.deep.equal([2, 4, 5])
        })
        it("2,4,1,1", () => {
            const set = new MultiSet()
            set.insert(2)
            set.insert(4)
            set.insert(1)
            set.insert(1)
            expect(set.entries()).to.deep.equal([1, 1, 2, 4])
        })
        it("2,4,1,1", () => {
            const set = new MultiSet()
            set.insert(2)
            set.insert(4)
            set.insert(1)
            set.insert(1)
            expect(set.entries()).to.deep.equal([1, 1, 2, 4])
        })
        it("2,4,3,3", () => {
            const set = new MultiSet()
            set.insert(2)
            set.insert(4)
            set.insert(3)
            set.insert(3)
            expect(set.entries()).to.deep.equal([2, 3, 3, 4])
        })
        it("2,4,5,5", () => {
            const set = new MultiSet()
            set.insert(2)
            set.insert(4)
            set.insert(5)
            set.insert(5)
            expect(set.entries()).to.deep.equal([2, 4, 5, 5])
        })
    })
    it("for(... of ...)", () => {
        const set = new MultiSet<number>()
        set.insert(2.7183)
        set.insert(41.9)
        set.insert(3.1425)
        const arr: number[] = []
        for (const it of set) {
            arr.push(it)
        }
        expect(arr).to.deep.almost.equal([2.7183, 3.1415, 41.9])
    })
})
