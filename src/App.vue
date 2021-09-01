<script setup lang="ts">
import { useHead } from '@vueuse/head'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Burak\'s Webseite',
  meta: [
    { name: 'description', content: 'Alles über mich.' },
  ],
})
const isMounted = ref(false)
nextTick(() => isMounted.value = true)
</script>

<template>
  <suspense>
    <router-view v-if="isMounted" id="app" />
  </suspense>
</template>
