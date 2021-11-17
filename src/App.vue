<script setup lang="ts">
import { useHead } from '@vueuse/head'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Braks | Burak Cakmakoglu',
  meta: [
    { name: 'description', content: 'Website of Burak Cakmakoglu.' },
  ],
})
</script>

<template>
  <Header />
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="`app-${route}`" />
    </transition>
  </router-view>
</template>
