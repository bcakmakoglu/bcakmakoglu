<script lang="ts" setup>
import { useRoute } from 'vue-router'
import about from './index/about.vue'
import home from './index/index.vue'
import projects from './index/projects.vue'
import contact from './index/contact.vue'

const navigation = [
  {
    pos: 1,
    cmp: home,
    name: 'Home',
    path: '/',
    theme: 'blue',
  },
  {
    pos: 2,
    cmp: about,
    name: 'About me',
    path: '/about',
    theme: 'green',
  },
  {
    pos: 3,
    cmp: projects,
    name: 'Projects',
    path: '/projects',
    theme: 'purple',
  },
  {
    pos: 4,
    cmp: contact,
    name: 'Contact',
    path: '/contact',
    theme: 'yellow',
  },
]

const transitioning = ref(false)
const route = useRoute()
const current = computed(() => navigation.find(nav => nav.path === route.path)!)
const filter = () => navigation.filter(nav => nav.path !== route.path).sort((a, b) => a.pos < b.pos ? a.pos : b.pos)
const cards = ref(filter())
</script>
<template>
  <div p="y-12" box="border" h="full">
    <div class="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-xl mx-auto">
      <template v-for="(nav, i) of cards" :key="`card-nav-${i}`">
        <div v-show="!transitioning || nav.pos !== current.pos - 1" class="transition duration-400 ease absolute inset-0 bg-gradient-to-r shadow-lg transform skew-y-0 rounded-3xl" :class="[nav.theme, transitioning ? 'rotate-0' : `rotate-${10 - (i+i+3)}`, `z-2${9 - nav.pos+1}`, transitioning ? '' : 'hover:translate-y-[-20px]']">
          <router-link :to="nav.path">
            <component :is="nav.cmp" :color="nav.theme" />
          </router-link>
        </div>
      </template>
      <router-view v-slot="{ Component }" :class="['z-40']">
        <transition
          name="fade"
          mode="out-in"
          @after-enter="(el) => {
            transitioning = false;
            cards = filter();
          }"
          @leave="() => transitioning = true"
        >
          <component :is="Component" :key="route.fullPath" class="relative" :draggable="true" :color="current.theme" />
        </transition>
      </router-view>
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
