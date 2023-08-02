import path from "node:path"
import process from "node:process"

export function buildPath(relativePath: string) {
  return path.resolve(process.cwd(), relativePath)
}
