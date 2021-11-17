<script lang="ts" setup>
import { useDraggable } from '@braks/revue-draggable'
import { isDark } from '~/logic'

interface CardProps {
  draggable?: boolean
  color?: string
  title?: string
}

const dark = ref(isDark.value)
const toggleDark = () => (dark.value = !dark.value)

const props = defineProps<CardProps>()

const card = templateRef('card', null)

useDraggable(card, {
  handle: '.drag-handle',
})
</script>
<template>
  <div
    ref="card"
    :class="[`border-light-800`,{ 'bg-black': dark, 'bg-white': !dark }, { 'text-black': !dark, 'text-white': dark }]"
    class="relative card overflow-hidden shadow-xl rounded-3xl transform border-1 flex flex-col z-1 focus:z-99"
  >
    <!-- header -->
    <slot name="header">
      <div ref="header" class="flex items-center justify-start shadow-sm  pl-6 drag-handle border-b-1 border-solid border-light-800 cursor-move">
        <span class="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
        <span class="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
        <span class="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
        <div class="w-full hidden md:flex items-center justify-end pr-4 mb-4 pt-6">
          <div class="mx-auto">
            {{ props.title }}
          </div>
          <button class="icon-btn mx-2 !outline-none" @click.prevent="toggleDark">
            <carbon-moon v-if="dark" />
            <carbon-sun v-else />
          </button>
        </div>
      </div>
    </slot>
    <!-- /header -->

    <div class="flex-1 flex flex-col justify-center items-center w-full overflow-x-hidden overflow-y-scroll h-full">
      <!-- mobile nav -->
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-center">
          <div v-if="false" id="mobile-menu" class="sm:hidden flex flex-col">
            <div display="flex" flex="col" p="x-2 t-2 b-3" space="y-1">
              <router-link class="bg-gray-900 text-white nav-link" to="/">
                Home
              </router-link>

              <router-link class="nav-link" to="/about">
                About me
              </router-link>

              <router-link class="nav-link" to="projects">
                Projects
              </router-link>

              <router-link class="nav-link" to="contact">
                Contact
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- /mobile- nav -->

      <!-- hero section -->
      <slot></slot>
      <!-- /hero section -->

      <!-- footer -->
      <slot name="footer"></slot>
      <!-- /footer -->
    </div>
  </div>
</template>
