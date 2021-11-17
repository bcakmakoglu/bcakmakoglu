<route lang="yaml">
meta:
  layout: projects
</route>
<template>
  <div class="w-full h-full flex flex-col justify-center items-center rounded-b-xl">
    <div class="screen-content text-center h-full w-full flex flex-col gap-6">
      <Card class="w-full m-auto mt-12">
        <div class="flex-1 h-full w-full">
          <RGBFlow />
        </div>
      </Card>
      <Card class="w-2/3 m-auto text-left">
        <div class="flex-1 h-full w-full flex justify-center items-center flex-col p-12">
          <h1 text="text-4xl md:text-6xl" class="my-6 font-semibold leading-none">
            Introduction
          </h1>
          <p>
            Vue Flow, just like React Flow, is a library for building node-based applications. These can be simple static diagrams or
            complex node-based editors. You can implement custom node types and edge types and it comes with components like a mini-map
            and graph controls. Feel free to check out the
            <a href="https://vueflow.dev/examples">
              examples
            </a>
            .
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
