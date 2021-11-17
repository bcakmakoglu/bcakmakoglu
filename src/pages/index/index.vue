<script lang="ts" setup>
const { t } = useI18n()
const show = ref(true)
</script>
<template>
  <div class="w-full h-full flex flex-col justify-center items-center rounded-b-xl">
    <div class="screen-content text-center w-3/4 lg:w-1/2 flex flex-col justify-center items-center gap-6">
      <div class="font-semibold" text="text-4xl md:text-6xl">
        Burak Cakmakoglu
      </div>
      <div class="text-xl">
        {{ t('intro.desc') }}
      </div>
      <router-link to="/about">
        <button
          class="px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out"
        >
          {{ t('intro.more') }}
        </button>
      </router-link>
      <!--

      <div class="mt-12">
        <button
          type="button"
          class="flex items-center justify-center w-12 h-12 rounded-full bg-cool-gray-100 text-gray-800 animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 transition duration-300 ease-in-out cursor-pointer"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>

       -->
    </div>
    <div class="absolute right-10">
      <router-link class="transition-opacity" :class="show ? 'opacity-100' : 'opacity-0'" to="/projects/flow" @click="show = false">
        <div class="arrow-right cursor-pointer transition-all ease transform hover:scale-110">
          <div id="cta">
            <span class="arrow first next "></span>
            <span class="arrow second next "></span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
