<template>
  <main class="flex flex-col h-full w-full justify-center items-center">
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route" />
      </transition>
    </router-view>
    <div class="absolute left-5 lg:left-15 z-99">
      <router-link class="transition-opacity" to="/">
        <div class="transform rotate-180 bg-black arrow-right border-2 border-light-900 border-solid dark:(border-white) cursor-pointer transition-all ease transform hover:scale-110">
          <div class="cta">
            <span class="arrow first next rounded-xl"></span>
            <span class="arrow second next rounded-xl"></span>
          </div>
        </div>
      </router-link>
    </div>
  </main>
</template>
