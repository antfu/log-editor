import { Options } from './types'
import { logEditor } from './index'

declare global {
  interface Console {
    logEditor(content: any, key?: string, options?: Options): Promise<void>
  }
}

// side effects
console.logEditor = logEditor
