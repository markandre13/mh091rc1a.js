import { PoseTarget } from "./PoseTarget"

export class PoseEntry {
    private mFilename: string
    private mFullPath: string
    private mTarget?: PoseTarget
    private mTargetLoadTry: boolean = false;
    constructor(filename: string, fullPath: string, preload = false) {
        this.mFilename = filename
        this.mFullPath = fullPath
        if (preload) {
            this.loadFromFile()
        }
    }
    loadFromFile(): boolean {
        if (this.mTargetLoadTry === false) {
            this.mTargetLoadTry = true
            this.mTarget = new PoseTarget(this.mFilename, this.mFullPath)
            this.mTarget.load()
        }
        return this.mTarget !== undefined
    }
    getTarget() {
        if (!this.mTargetLoadTry) {
            this.loadFromFile()
        }
        return this.mTarget
    }
}
