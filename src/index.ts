import { promises as fs } from 'fs'
import temp from 'tempy'
// @ts-expect-error
import launch from 'launch-editor'
import { LogFile } from './types'

const map = new Map<string, LogFile>()

console.logEditor = async(content, key, options = {}) => {
  const override = options.override ?? true
  const extension = options.extension ?? (typeof content === 'string' ? 'txt' : 'json')
  const stringified = typeof content === 'string' ? content : JSON.stringify(content, null, 2)

  let file: LogFile | undefined
  if (key) {
    file = map.get(key)

    if (!file) {
      file = {
        path: temp.file({ name: `${key}.${extension}` }),
        content: '',
      }
    }

    map.set(key, file)
  }

  if (!file) {
    file = {
      path: temp.file({ extension }),
      content: '',
    }
  }

  if (override || !file.content)
    file.content = stringified
  else
    file.content += `\n\n${stringified}`

  await fs.writeFile(file.path, file.content, 'utf-8')
  await launch(file.path)
}
