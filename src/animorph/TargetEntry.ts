import { Target } from "./Target"

export class TargetEntry {
    mFilename: string
    mTarget?: Target = undefined;
    mTargetLoadTry: boolean = false;

    constructor(filename: string, preload = false) {
        this.mFilename = filename
        if (preload) {
            this.loadFromFile()
        }
    }

    loadFromFile(): boolean {
        if (this.mTargetLoadTry === false) {
            this.mTargetLoadTry = true
            this.mTarget = new Target()
            if (!this.mTarget.load(this.mFilename)) {
                this.mTarget = undefined
            }
        }
        return this.mTarget !== undefined
    }
}
