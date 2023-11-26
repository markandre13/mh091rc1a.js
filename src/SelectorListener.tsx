import { Selector } from "Selector"
import { Mesh } from "animorph/Mesh"

export class SelectorListener {
    mesh: Mesh

    age: Selector
    muscleSize: Selector
    breast: Selector
    shape: Selector

    ageDists: number[]
    muscleSizeDists: number[]
    breastDists: number[]
    shapeDists: number[]

    constructor(mesh: Mesh) {
        this.mesh = mesh

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
        this.breast = new Selector(2, 2, [
            "cone_little", "cone_big",
            "sphere_little", "sphere_big"
        ])
        // prettier-ignore
        this.shape = new Selector(2, 2, [
            "brevilinear_vshape", "brevilinear_peershape",
            "longilinear_vshape", "longilinear_peershape"
        ])

        this.ageDists = this.age.getDists()
        this.muscleSizeDists = this.muscleSize.getDists()
        this.breastDists = this.breast.getDists()
        this.shapeDists = this.shape.getDists()
    }

    doMorph(target_name: string, morph_value: number) {
        this.mesh.doMorph(target_name, morph_value)
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
                        if (k < this.breast.labels.length) {
                            const tmpTargetName = `breast/${this.age.labels[i]}_${this.muscleSize.labels[j]}_${this.breast.labels[k]}.target`
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
            if (i < this.shape.labels.length) {
                const tmpTargetName = `shapes/${this.shape.labels[i++]}.target`
                this.doMorph(tmpTargetName, sh_it)
            }
        }
    }
}
