<template>
  <Card>
    <div class="lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-16 text-left">
      <div text="text-4xl md:text-6xl" class="font-semibold text-gray-900 leading-none">
        About me
      </div>
      <div class="mt-6 text-xl font-light text-true-gray-500 antialiased">
        There's going to be more info on me soon!
      </div>
      <button class="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out">
        <a class="flex flex-row justify-center items-center" target="_blank" rel="noreferrer" href="https://github.com/bcakmakoglu">
          <carbon-logo-github class="mr-2" />Github
        </a>
      </button>
    </div>
    <slot name="footer">
      <div class="mt-12 lg:mt-32 lg:ml-20 text-left">
      </div>
    </slot>
  </Card>
</template>
