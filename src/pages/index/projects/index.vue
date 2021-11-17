<template>
  <div class="w-full h-full flex flex-col justify-center items-center rounded-b-xl">
    <div class="screen-content text-center w-3/4 lg:w-1/2 flex flex-col justify-center items-center gap-6">
      <div text="text-4xl md:text-6xl" class="font-semibold leading-none">
        Projects
      </div>
      <div class="mt-6 text-xl antialiased">
        Here's a list of projects I either worked on or created myself.
        Feel free to check them out, anything I do is open source.
      </div>

      <div class="flex gap-6 justify-center items-center">
        <button
          class="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out"
        >
          <a
            class="flex flex-row justify-center items-center"
            target="_blank"
            rel="noreferrer"
            href="https://draggable-docs.vueflow.dev"
          >
            <carbon-logo-github class="mr-2" />
            Revue Draggable
          </a>
        </button>

        <button
          class="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out"
        >
          <a
            class="flex flex-row justify-center items-center"
            target="_blank"
            rel="noreferrer"
            href="https://vueflow.dev"
          >
            <carbon-logo-github class="mr-2" />
            Vue Flow
          </a>
        </button>
      </div>
    </div>
  </div>
</template>
