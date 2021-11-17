<template>
  <main class="flex flex-col justify-center items-center">
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route" />
      </transition>
    </router-view>
  </main>
</template>
