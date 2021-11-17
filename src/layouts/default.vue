<template>
  <div class="flex-1 flex flex-col h-full w-full">
    <main p="24" class="flex flex-col justify-center items-center">
      <Card class="w-3/4">
        <router-view v-slot="{ Component, route }">
          <transition name="fade" mode="out-in">
            <component :is="Component" :key="route" />
          </transition>
        </router-view>
      </Card>
    </main>
  </div>
</template>
