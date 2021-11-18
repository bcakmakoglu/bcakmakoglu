<route lang="yaml">
meta:
  layout: projects
</route>
<template>
  <div class="w-full h-full flex flex-col justify-center items-center rounded-b-xl">
    <div class="screen-content text-center h-full w-full flex flex-col gap-6">
      <div class="w-full m-auto min-h-[75vh] flex flex-col lg:flex-row justify-center gap-12 p-12">
        <Card class="w-full lg:w-1/2">
          <div class="p-12 flex flex-col gap-4 justify-center items-center">
            <h1 class="text-3xl">
              Visualize your ideas with Vue Flow
            </h1>
            <h2 class="text-lg lg:text-2xl text-gray-400 font-normal">
              A customizable Vue.js library for building node-based editors and diagrams.
            </h2>
            <div class="transform scale-75 lg:scale-100 flex flex-row justify-center items-center gap-4 mt-6">
              <a
                class="p-4 bg-green-500 hover:bg-black border border-light-400 rounded-full !text-white font-semibold text-lg"
                href="https://vueflow.dev/docs"
              >
                Documentation
              </a>
              <a
                class="p-4 bg-white hover:bg-black border border-light-400 rounded-full bg-blue-500 !text-white font-semibold text-lg"
                href="https://vueflow.dev/examples"
              >
                Examples
              </a>
            </div>
          </div>
        </Card>
        <Card class="h-[650px] w-full m-auto mt-12">
          <div class="flex-1 h-full w-full">
            <RGBFlow />
          </div>
        </Card>
      </div>
      <Card class="w-2/3 m-auto text-left">
        <div class="flex-1 h-full w-full flex justify-center items-center flex-col p-12">
          <h1 text="text-4xl md:text-6xl" class="my-6 font-semibold leading-none">
            Introduction
          </h1>
          <p>
            Vue Flow is a library for building node-based applications. These can be simple static diagrams or
            complex node-based editors. You can implement custom node types and edge types and it comes with components like a mini-map
            and graph controls. Feel free to check out the
            <a href="https://vueflow.dev/examples">
              examples
            </a>.
          </p>

          <h1 text="text-4xl md:text-6xl" class="my-6 font-semibold leading-none">
            Key Features
          </h1>
          <ul>
            <li>
              <span class="font-semibold">👶 Easy to use</span>: Seamless zooming & panning behaviour and single and multi-selections of
              elements
            </li>
            <li>
              <span class="font-semibold">🎨 Customizable</span>: Different
              <a href="https://vueflow.dev/docs/api/nodes/node-types">
                node
              </a>
              and
              <a href="https://vueflow.dev/docs/api/edges/edge-types">
                edge types
              </a>
              and support for custom nodes with multiple handles and custom edges
            </li>
            <li>
              <span class="font-semibold">🚀 Fast rendering</span>: Only nodes that have changed are re-rendered and only those that are
              in the viewport are displayed (optionally)
            </li>
            <li>
              <span class="font-semibold">🧲 Utils</span>: Snap-to-grid and graph
              <a href="https://vueflow.dev/docs/api/helper-functions">
                helper functions
              </a>
            </li>
            <li>
              <span class="font-semibold">📦 Components</span>:
              <a href="https://vueflow.dev/docs/api/components/background">
                Background
              </a>
              ,
              <a href="https://vueflow.dev/docs/api/components/minimap">
                Minimap
              </a>
              and
              <a thref="https://vueflow.dev/docs/api/components/controls">
                Controls
              </a>
            </li>
            <li>
              <span class="font-semibold">🦾 Reliable</span>: Fully written in <a href="https://www.typescriptlang.org/">TypeScript</a>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  </div>
</template>
<style>
@import "../../../../node_modules/@braks/vue-flow/dist/style.css";
@import "../../../../node_modules/@braks/vue-flow/dist/theme-default.css";
</style>
