import { use, expect } from "@esm-bundle/chai"
import { chaiAlmost } from "./chai/chaiAlmost"
use(chaiAlmost())

import { Selector } from "../src/Selector"
import { SelectorListener } from "../src/SelectorListener"

import { Expect, expect00, expect01 } from "./data/SelectorListener"

describe("SelectorListener", () => {
    describe("Selector", () => {
        it("0,0", () => {
            // prettier-ignore
            const age = new Selector(2, 5, [
                "female_10", "female_30", "female_50", "female_70", "female_90",
                "male_10", "male_30", "male_50", "male_70", "male_90"
            ])
            age.setCursorPos(0, 0)
            expect(age.getDists()).to.deep.almost.equal([1, 0, 0, 0, 0, 0, 0, 0, 0, 0])
        })
        it("7, 13", () => {
            // prettier-ignore
            const age = new Selector(2, 5, [
                "female_10", "female_30", "female_50", "female_70", "female_90",
                "male_10", "male_30", "male_50", "male_70", "male_90"
            ])
            age.setCursorPos(7, 13)
            expect(age.getDists()).to.deep.almost.equal([0.807926, 0.136735, 0, 0, 0, 0.11293, 0, 0, 0, 0])
        })
        it("96, 52", () => {
            // prettier-ignore
            const age = new Selector(2, 5, [
                "female_10", "female_30", "female_50", "female_70", "female_90",
                "male_10", "male_30", "male_50", "male_70", "male_90"
            ])
            age.setCursorPos(96, 52)
            expect(age.getDists()).to.deep.almost.equal([0, 0, 0.5, 0, 0, 0, 0, 0.5, 0, 0])
        })
        it("113, 72", () => {
            // prettier-ignore
            const age = new Selector(2, 5, [
                "female_10", "female_30", "female_50", "female_70", "female_90",
                "male_10", "male_30", "male_50", "male_70", "male_90"
            ])
            age.setCursorPos(113, 72)
            expect(age.getDists()).to.deep.almost.equal([0, 0, 0.22236, 0.0532209, 0, 0, 0, 0.530843, 0.284615, 0])
        })
    })

    describe("calcWidgetTargets()", () => {
        it("001", () => {
            const out: Expect[] = []
            const sl = new SelectorListener({
                doMorph: (name: string, value: number) => {
                    out.push({ name, value })
                    return value
                },
            } as any)
            sl.calcWidgetTargets()
            expect(out).to.deep.almost.equal(expect00)
        })
        it("002", () => {
            const out: Expect[] = []
            const sl = new SelectorListener({
                doMorph: (name: string, value: number) => {
                    out.push({ name, value })
                    return value
                },
            } as any)
            sl.age.setCursorPos(41, 59)
            sl.muscleSize.setCursorPos(31, 37)
            sl.breast.setCursorPos(149, 97)
            sl.shape.setCursorPos(163, 103)
            sl.calcWidgetTargets()
            expect(out).to.deep.almost.equal(expect01)
        })
    })
})
