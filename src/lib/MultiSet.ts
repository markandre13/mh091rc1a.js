export class MultiSet<T> {
    private array: T[] = []
    private order: (a: T, b: T) => boolean
    constructor(order: (a: T, b: T) => boolean = (a: T, b: T) => a < b) {
        this.order = order
    }
    get size() {
        return this.array.length
    }
    entries() {
        return this.array
    }
    [Symbol.iterator](): IterableIterator<[number, T]> {
        return this.array.entries()
    }
    last() {
        return this.array[this.array.length-1]
    }
    eraseLast() {
        this.array.length = this.array.length - 1
    }
    first() {
        return this.array[0]
    }
    eraseFirst() {
        this.array.splice(0, 1)
    }
    insert(k: T) {
        let firstIndex = 0,
            lastIndex = this.array.length,
            middleIndex = Math.floor((lastIndex + firstIndex) / 2)
        while (firstIndex < lastIndex) {
            if (this.order(k, this.array[middleIndex])) {
                lastIndex = middleIndex - 1
            } else {
                if (this.order(this.array[middleIndex], k)) {
                    firstIndex = middleIndex + 1
                } else {
                    break
                }
            }
            middleIndex = Math.floor((lastIndex + firstIndex) / 2)
        }

        if (middleIndex >= this.array.length) {
            this.array.push(k)
        } else {
            if (middleIndex < 0) {
                this.array.splice(0, 0, k)
            } else {
                if (this.order(k, this.array[middleIndex])) {
                    this.array.splice(middleIndex, 0, k)
                } else {
                    this.array.splice(middleIndex + 1, 0, k)
                }
            }
        }
    }
}
