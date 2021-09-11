<script lang="ts" setup>
import { useDraggable } from '@braks/revue-draggable'
import { isDark, toggleDark } from '~/logic'

const colorTypes = computed(() => ({
  blue: isDark.value ? 'bg-gradient-to-br from-sky-400 to-indigo-900' : 'bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500',
  green: isDark.value ? 'bg-gradient-to-br from-green-600 to-green-700' : 'bg-gradient-to-r from-green-300 via-green-200 to-cerise-300',
  yellow: isDark.value ? 'bg-gradient-to-tr from-red-900 via-yellow-600 to-yellow-600' : 'bg-gradient-to-tl from-orange-500 to-yellow-300',
  purple: isDark.value ? 'bg-gradient-to-br from-purple-800 via-violet-900 to-purple-800' : 'bg-gradient-to-r from-violet-300 to-violet-400',
  red: isDark.value ? 'bg-gradient-to-r from-rose-700 to-pink-800' : 'bg-gradient-to-r from-orange-300 to-rose-300',
}))

const props = defineProps<{ draggable?: boolean; color?: string }>()
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

const card = templateRef('card', null)
const header = templateRef('header', null)

if (props.draggable) {
  useDraggable(card, {
    handle: '.drag-handle',
  })
}
</script>
<template>
  <div
    ref="card"
    class="card shadow-lg rounded-3xl transform border-b-1 border-r-1 border-light-400"
    :class="{
      'text-white': isDark,
      'text-gray-900': !isDark,
      [colorTypes[color]]: true
    }"
  >
    <!-- header -->
    <slot name="header">
      <div ref="header" class="flex items-center justify-start pt-6 pl-6 drag-handle" :class="draggable ? 'cursor-move' : ''">
        <span class="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
        <span class="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
        <span class="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
        <div class="w-full hidden md:flex items-center justify-end pr-4">
          <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click.prevent="() => toggleDark()">
            <carbon-moon v-if="isDark" />
            <carbon-sun v-else />
          </button>

          <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click.prevent="toggleLocales">
            <carbon-language />
          </a>

          <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/bcakmakoglu/bcakmakoglu" target="_blank" title="GitHub">
            <carbon-logo-github />
          </a>
        </div>
      </div>
    </slot>
    <!-- /header -->

    <div class="px-20 pb-6">
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
