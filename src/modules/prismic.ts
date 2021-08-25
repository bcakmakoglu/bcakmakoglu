import { createPrismic } from '@prismicio/vue'
import { UserModule } from '~/types'

// Setup Prismic
// https://github.com/prismicio/prismic-vue/issues/46
export const install: UserModule = ({ app }) => {
  const prismic = createPrismic({ endpoint: 'https://bcakmakoglu.prismic.io/api/v2', clientConfig: { accessToken: import.meta.env.VITE_PRISMIC_TOKEN as string } })
  app.use(prismic)
}
