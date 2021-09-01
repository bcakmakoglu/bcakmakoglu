<script lang="ts" setup>
import { useRoute } from 'vue-router'

const navigation = [
  {
    pos: 1,
    name: 'Home',
    path: '/',
    theme: 'from-indigo-200 to-gold-200',
  },
  {
    pos: 2,
    name: 'About me',
    path: '/about',
    theme: 'from-cerise-200 to-submarine-200',
  },
  {
    pos: 3,
    name: 'Projects',
    path: '/projects',
    theme: 'from-lemon-100 to-blue-200',
  },
  {
    pos: 4,
    name: 'Contact',
    path: '/contact',
    theme: 'from-green-100 to-navy-200',
  },
]
const route = useRoute()
const currentBg = computed(() => navigation.find(nav => nav.path === route.path)?.theme)
const cards = computed(() => navigation.filter(nav => nav.path !== route.path).sort((a, b) => a.pos < b.pos ? a.pos : b.pos))
</script>
<template>
  <div p="y-12">
    <div class="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-xl mx-auto">
      <template v-for="(nav, i) of cards" :key="`card-nav-${i}`">
        <div class="py-2 px-2 text-left hover:translate-y-[-20px] transition ease absolute inset-0 -mr-3.5 bg-gradient-to-r shadow-lg transform skew-y-0 rounded-3xl" :class="[nav.theme, `rotate-${10 - (i+i+3)}`, `z-2${9 - nav.pos+1}`]">
          <router-link class="nav-link" :to="nav.path">
            {{ nav.name }}
          </router-link>
        </div>
      </template>
      <transition name="fade" mode="out-in">
        <router-view :key="route.fullPath" :class="[currentBg, 'z-30']" />
      </transition>
    </div>
  </div>
</template>

<style>
.nav-link {
  @apply bg-blue-400 hover:bg-blue-600 text-gray-200 text-sm px-3 py-2 rounded-3xl font-medium;
}
.nav-link.active {
  @apply bg-blue-700 text-white;
}
</style>

<route lang="yaml">
meta:
  layout: default
</route>
