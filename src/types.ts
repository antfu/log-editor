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
   * File extension, default to `log` or `json` based on the type of content provided
   */
  extension?: string
}
