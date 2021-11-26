<script setup lang="ts">
import { useHead } from '@vueuse/head'

const meta = {
  title: 'Braks - Burak Cakmakoglu | Full Stack Developer',
  description: 'Welcome to my Homepage. You can check out some of my projects, find out some details about or contact me.',
  img: 'https://images.prismic.io/bcakmakoglu/060055af-3503-4efb-98c8-c338c4a638fa_braks.png',
  url: 'https://braks.vueflow.dev',
}
useHead({
  title: meta.title,
  meta: [
    {
      name: 'description',
      content: meta.description,
    },
    { hid: 'og:title', name: 'og:title', content: meta.title },
    {
      hid: 'og:description',
      property: 'og:description',
      content: meta.description,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: `http://${meta.img}`,
    },
    {
      hid: 'og:image:secure_url',
      property: 'og:image:secure_url',
      content: `https://${meta.img}`,
    },
    {
      hid: 'og:image:type',
      property: 'og:image:type',
      content: 'image/png',
    },
    {
      hid: 'og:image:width',
      property: 'og:image:width',
      content: '672',
    },
    {
      hid: 'og:image:height',
      property: 'og:image:height',
      content: '546',
    },
    { hid: 'og:url', property: 'og:url', content: meta.url },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: meta.url,
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: meta.title,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: meta.description,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: meta.img,
    },
  ],
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: meta.url,
    },
    {
      hid: 'image_src',
      rel: 'image_src',
      href: meta.img,
    },
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
