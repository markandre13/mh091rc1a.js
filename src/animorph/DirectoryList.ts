import { FileSystemAdapter } from "../filesystem/FileSystemAdapter"

enum RecursiveLevel {
    NO_LIMIT = -1, // read directories recursive without limit
    NO_RECURSIVE = 0, // read only the base directory without recursion
}

export enum FileType {
    REGULAR_FILE, // only regular files
    DIRECTORY, // only directories
}

export class DirectoryList {
    private file_list: string[] = []
    private file_filter: string = ""
    private path: string = ""
    private recursive_level: number = -1
    private recursive_counter: number = 0
    private file_type: FileType = FileType.REGULAR_FILE

    setFileFilter(file_filter: string) {
        this.file_filter = file_filter
    }
    setRecursive(recursive_level: number): void {
        this.recursive_level = recursive_level
    }
    setRootPath(path: string): void {
        this.path = path
    }
    setFileType(file_type: FileType) {
        this.file_type = file_type
    }
    getDirectoryList(): string[] {
        this.readDirRecursive(this.path)
        this.recursive_counter = 0
        return this.file_list
    }
    private readDirRecursive(dir_str: string) {
        for (const dname of FileSystemAdapter.listDir(dir_str)) {
            if (dir_str.charAt(0) === ".") {
                continue
            }
            const dir_file = `${dir_str}/${dname}`
            if (FileSystemAdapter.isDir(dir_file)) {
                if (this.file_type === FileType.DIRECTORY) {
                    this.file_list.push(dir_file)
                }
                if (this.recursive_counter < this.recursive_level || this.recursive_level == RecursiveLevel.NO_LIMIT) {
                    ++this.recursive_counter
                    this.readDirRecursive(dir_file)
                    --this.recursive_counter
                }
            } else {
                if (this.hasFileFilterEnding(dir_file)) {
                    this.file_list.push(dir_file)
                }
            }
        }
    }
    private hasFileFilterEnding(file: string): boolean {
        if (this.file_filter.length > file.length) {
            return false
        }
        return file.endsWith(this.file_filter)
    }
}
