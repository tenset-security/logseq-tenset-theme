import sass from "sass"

import { buildPath } from "./build-path";

export function compileScss() {
  const { css } = sass.compile(buildPath("src/tenset-theme.scss"), {
    style: "compressed",
  })
  return css;
}
