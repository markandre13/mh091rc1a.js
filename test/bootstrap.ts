import { FileSystemAdapter } from "../src/filesystem/FileSystemAdapter"
import { HTTPFSAdapter } from "../src/filesystem/HTTPFSAdapter"

import { use } from '@esm-bundle/chai'
import { chaiString } from './chai/chaiString'
import { chaiAlmost } from "./chai/chaiAlmost"

use(chaiString)
use(chaiAlmost(0.00001))

FileSystemAdapter.setInstance(
    new HTTPFSAdapter()
)
