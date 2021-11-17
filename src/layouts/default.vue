<template>
  <div class="flex-1 flex flex-col h-full w-full">
    <main p="24" class="flex flex-col justify-center items-center">
      <router-view v-slot="{ Component, route }">
        <Card class="w-3/4">
          <transition name="fade" mode="out-in">
            <component :is="Component" :key="route.name" :title="route.name" />
          </transition>
        </Card>
      </router-view>
    </main>
  </div>
</template>
