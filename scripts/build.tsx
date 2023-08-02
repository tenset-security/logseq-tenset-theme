import fs from "fs-extra"

import { buildColors } from "./build-colors"
import { compileScss } from "./compile-scss"
import { buildPath } from "./build-path";

const colorsString = buildColors()
fs.writeFileSync(buildPath("src/colors.scss"), colorsString)

const cssString = compileScss()
fs.writeFileSync(buildPath("build/tenset-theme.css"), cssString)
