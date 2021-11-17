<template>
  <header class="h-[60px] lg:h-[92px] shadow-lg flex border-b-1 border-light-600 border-solid items-center py-4 px-8 font-semibold dark:(text-white bg-black border-b-2 border-solid border-white)">
    <div class="flex-1 flex justify-evenly gap-2 transform scale-85 md:scale-100">
      <router-link class="link" to="/">
        Home
      </router-link>
      <router-link class="link" to="/about">
        About
      </router-link>
      <router-link class="link" to="/projects">
        Projects
      </router-link>
      <router-link class="link" to="/projects">
        Contact
      </router-link>
    </div>
  </header>
</template>
<style scoped>
.link {
  @apply px-8 py-4 tracking-wide outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out;
  @apply text-xl shadow-xl dark:(border border-light-400 bg-gradient-to-br hover:(from-gray-500 to-gray-700) from-gray-700 to-gray-800) bg-gradient-to-b from-blue-600 to-blue-700 uppercase cursor-pointer bg-black rounded-lg px-4 py-2 text-white;
}
</style>
