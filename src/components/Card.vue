<script lang="ts" setup>
import { isDark, toggleDark } from '~/logic'

const { t, availableLocales, locale } = useI18n()
const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>
<template>
  <div class="bg-gradient-to-r relative shadow-lg rounded-3xl">
    <!-- header -->
    <slot name="header">
      <div class="flex items-center justify-start pt-6 pl-6">
        <span class="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
        <span class="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
        <span class="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
        <div class="w-full hidden md:flex items-center justify-end pr-4">
          <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="() => toggleDark()">
            <carbon-moon v-if="isDark" />
            <carbon-sun v-else />
          </button>

          <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales">
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
              <router-link class="bg-gray-900 text-white nav-link" aria-current="page" to="/">
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
      <slot name="content"></slot>
      <!-- /hero section -->
    </div>
  </div>
</template>
