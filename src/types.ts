export interface LogFile {
  path: string
  content: string
}

export interface Options {
  /**
   * Override previous result, only work went `key` is set
   * @default true
   */
  override?: boolean
  /**
   * File extension, default to `txt` or `json` based on the type of content provided
   */
  extension?: string
}

declare global {
  interface Console {
    logEditor(content: any, key?: string, options?: Options): Promise<void>
  }
}

export {}
