<template>
  <div class="w-full h-full flex flex-col justify-center items-center rounded-b-xl">
    <div class="screen-content text-center w-3/4 lg:w-1/2 flex flex-col justify-center items-center gap-6">
      <div text="text-4xl md:text-6xl" class="font-semibold leading-none">
        About me
      </div>
      <div class="mt-6 text-xl antialiased">
        Hi! 🦾
        My name is Burak Cakmakoglu and I am a Fullstack Developer from Hamburg, Germany.
        I'm currently 30 years old and spend my free time mostly developing something or skateboarding.
      </div>
      <div>
        <button
          class="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out"
        >
          <a
            class="flex flex-row justify-center items-center"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/bcakmakoglu"
          >
            <carbon-logo-github class="mr-2" />
            Github
          </a>
        </button>
      </div>
    </div>
  </div>
</template>
