import { createTheme } from "theme-in-css"
import Color from "color"

const PINK_TENSET = {
  900: "#69014E",
  800: "#870567",
  700: "#A3067C",
  600: "#BC0A8F",
  500: "#DA12A8",
  400: "#E736BA",
  300: "#FD62D5",
  200: "#FF8CE2",
  100: "#FFB8ED",
  50: "#FFE3F8",
}

const GRAY_TENSET = {
  900: "#141316",
  800: "#28262B",
  700: "#4C4851",
  600: "#5D5964",
  500: "#6C6774",
  400: "#86818D",
  300: "#A5A1AA",
  200: "#D3CED9",
  100: "#E7E4EC",
  50: "#F7F6F9",
}

const VIOLET_TENSET = {
  900: "#2F0387",
  800: "#3E0BA2",
  700: "#4B12BF",
  600: "#5619D2",
  500: "#6A21FD",
  400: "#7D40F7",
  300: "#905CFA",
  200: "#AB81FD",
  100: "#CCB3FF",
  50: "#EEE5FF",
}

const GREEN = {
  900: "#012900",
  800: "#054E04",
  700: "#0F680D",
  600: "#198717",
  500: "#19AC16",
  400: "#4DC34B",
  300: "#69D567",
  200: "#91EF8F",
  100: "#C6F7C5",
  50: "#F0FFF0",
}

function generateHsl(rgbString: string) {
  const color = new Color(rgbString)
  return [
    color.hue(),
    color.saturationl() + "%",
    color.lightness() + "%",
  ].join()
}

function addHslVariants(colorPalette: Record<number, string>) {
  return Object.fromEntries(
    Object.entries(colorPalette).flatMap(([shade, value]) => [
      [shade, value],
      [`${shade}-hsl`, generateHsl(value)],
    ])
  )
}

export function buildColors() {
  const colors = {
    color: {
      primary: PINK_TENSET,
      secondary: VIOLET_TENSET,
      gray: addHslVariants(GRAY_TENSET),
      green: GREEN,
    },
  }

  const {
    css: { string: cssVariablesString },
  } = createTheme(colors)

  return `/* THIS IS AUTOGENERATED FILE. DO NOT EDIT IT DIRECTLY */
:root {${cssVariablesString}}`
}
