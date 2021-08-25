<script setup lang="ts">
import { useFetch } from '@vueuse/core'

interface BlogPostProps {
  id: string
}

const props = defineProps<BlogPostProps>()
const text = `Blog Post: ${props.id}`
const { t } = useI18n()

// get a shiba as blog post placeholder
const shibaAPI = ' https://dog.ceo/api/breed/shiba/images/random'
const { isFetching, data: shiba } = useFetch<Record<string, string>>(shibaAPI).json()
</script>
<template>
  <div class="blog-post flex flex-col justify-center items-center">
    <Headline type="heading1" :text="isFetching ? t('loading') : text" />
    <template v-if="!isFetching">
      <img v-if="shiba" :src="shiba.message" alt="Shiba" />
    </template>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
