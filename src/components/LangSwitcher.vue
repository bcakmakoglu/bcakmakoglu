<script lang="ts" setup>
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>
<template>
  <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click.prevent="toggleLocales">
    <carbon-language />
  </a>
</template>
