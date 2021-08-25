import { defineConfig } from 'windicss/helpers'
import typographyPlugin from 'windicss/plugin/typography'
import typography from './theme/typography'
import colors from './theme/colors'

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
})
