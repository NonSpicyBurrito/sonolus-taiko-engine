import { copyFileSync, rmSync } from 'node:fs'

rmSync('./dist/LevelData')
copyFileSync('./lib/res/thumbnail.png', './dist/thumbnail.png')
copyFileSync('./lib/src/tja/parse.js', './dist/tja/parse.js')
