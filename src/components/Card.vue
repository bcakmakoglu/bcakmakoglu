<script lang="ts" setup>
import { useDraggable } from '@braks/revue-draggable'
import { isDark } from '~/logic'

interface CardProps {
  draggable?: boolean
  color?: string
  title?: string
}
const props = defineProps<CardProps>()

const card = templateRef('card', null)
const dark = ref(isDark.value)
const hide = ref(false)
const mini = ref(false)
const maxi = ref(false)
watch(isDark, (val) => {
  if (maxi.value) dark.value = val
})

useDraggable(card, {
  handle: '.drag-handle',
})
const toggleDark = () => (dark.value = !dark.value)
const toggleHide = () => (hide.value = !hide.value)
const toggleMini = () => (mini.value = !mini.value)
const toggleMaxi = () => (maxi.value = !maxi.value)
</script>
<template>
  <div
    ref="card"
    :class="[
      `border-light-800`,
      { 'bg-black': dark, 'bg-white': !dark },
      { 'text-black': !dark, 'text-white': dark },
      {
        'shadow-xl': maxi,
        'rounded-3xl': !maxi,
        'rounded-none': maxi,
        'min-w-100vw': maxi,
        'min-h-[110vh]': maxi
      },
      hide ? 'hidden' : '', mini ? 'border-2' : 'border-1',
    ]
    "
    class="card overflow-hidden transform flex flex-col"
    :style="{ transform: mini ? 'scale(25%)' : ''}"
  >
    <!-- header -->
    <slot name="header">
      <div ref="header" class="flex items-center justify-start shadow-sm  pl-6 drag-handle border-b-1 border-solid border-light-800 cursor-move">
        <span class="text-black w-3 h-3 flex justify-center items-center p-[0.5px] bg-red-400 rounded-full mr-2 cursor-pointer" @click.self="toggleHide">
          <carbon-close />
        </span>
        <span class="text-black w-3 h-3 flex justify-center items-center p-[0.5px] bg-yellow-400 rounded-full mr-2 cursor-pointer" @click.self="toggleMini">
          -
        </span>
        <span class="text-black w-3 h-3 flex justify-center items-center p-[0.5px] w-3 h-3 bg-green-400 rounded-full mr-2 cursor-pointer" @click.self="toggleMaxi">
          +
        </span>
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
      <template v-if="!mini">
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
      </template>
      <div v-else class="w-full h-full flex justify-center items-center">
        <carbon-blockchain class="text-navy-300 w-1/2 h-1/2" @click="toggleMini" />
      </div>
    </div>
  </div>
</template>
<style>
.revue-draggable-dragging {
  z-index: 99 !important;
}
</style>
