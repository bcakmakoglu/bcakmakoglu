<template>
  <div style="height: calc(100% - 92px)" class="flex-1 flex flex-col w-full">
    <main class="flex flex-col w-full h-full justify-center items-center">
      <div class="flex w-2/2 h-2/3 justify-center items-center">
        <router-view v-slot="{ Component, route }">
          <Card class="w-3/4">
            <transition name="fade" mode="out-in">
              <component :is="Component" :key="route.name" :title="route.name" />
            </transition>
          </Card>
        </router-view>
      </div>
      <div class="absolute right-5 lg:right-15 z-99">
        <router-link class="transition-opacity" to="/projects/flow">
          <div class="bg-black arrow-right border-2 border-light-900 border-solid dark:(border-white) cursor-pointer transition-all ease transform hover:scale-110">
            <div class="cta">
              <span class="arrow first next rounded-xl"></span>
              <span class="arrow second next rounded-xl"></span>
            </div>
          </div>
        </router-link>
      </div>
    </main>
  </div>
</template>
