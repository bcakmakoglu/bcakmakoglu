<script setup lang="ts">
const { push } = useRouter()
const blogpostID = Math.floor(Math.random() * 100)
</script>
<template>
  <div class="flex flex-col justify-center items-center gap-5">
    <h1>There will be a blog here at some point</h1>

    <button class="bg-blue-500 rounded p-2" @click="push(`/blog/${blogpostID}`)">
      Random shiba
    </button>
  </div>
</template>
