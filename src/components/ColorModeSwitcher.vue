<script lang="ts" setup>
import { isDark, toggleDark } from '~/logic'
</script>
<template>
  <button class="icon-btn mx-2 !outline-none" @click.prevent="toggleDark">
    <carbon-moon v-if="isDark" />
    <carbon-sun v-else />
  </button>
</template>
