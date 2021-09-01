import { defineConfig } from 'windicss/helpers'
import typographyPlugin from 'windicss/plugin/typography'
import typography from './theme/typography'
import colors from './theme/colors'

function range(size: number, startAt = 1) {
  return Array.from(Array(size).keys()).map(i => i + startAt)
}

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,

  plugins: [
    typographyPlugin(),
  ],
  theme: {
    extend: {
      typography,
      colors,
    },
  },
  safelist: [
    range(10).map(i => `rotate-${i}`),
    range(100).map(i => `z-${i}`),
  ],
})
