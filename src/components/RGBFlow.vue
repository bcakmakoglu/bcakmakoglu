<script lang="ts" setup>
import { Elements, FlowInstance, VueFlow, Background, Controls, MiniMap } from '@braks/vue-flow'
import { templateRef } from '@vueuse/core'

type Colors = {
  red: number
  green: number
  blue: number
}
const elements = ref<Elements>([
  {
    id: '1',
    type: 'rgb',
    data: { color: 'r' },
    position: {
      x: -25,
      y: 50,
    },
  },
  {
    id: '2',
    type: 'rgb',
    data: { color: 'g' },
    position: {
      x: 50,
      y: -100,
    },
  },
  {
    id: '3',
    type: 'rgb',
    data: { color: 'b' },
    position: {
      x: 0,
      y: 200,
    },
  },
  {
    id: '4',
    type: 'rgb-output',
    data: { label: 'RGB' },
    position: {
      x: 400,
      y: 50,
    },
  },
  {
    id: 'e1-4',
    data: { color: 'red' },
    source: '1',
    target: '4',
    animated: true,
  },
  {
    id: 'e2-4',
    data: { color: 'green' },
    source: '2',
    target: '4',
    animated: true,
  },
  {
    id: 'e3-4',
    data: { color: 'blue' },
    source: '3',
    target: '4',
    animated: true,
  },
])

const el = templateRef<HTMLDivElement>('page', null)

const onLoad = (flowInstance: FlowInstance) => {
  flowInstance.setTransform({
    x: el.value?.clientWidth / 2.2,
    y: el.value?.clientHeight / 3,
    zoom: 1.25,
  })
}
const color = ref<Colors>({
  red: 100,
  green: 150,
  blue: 100,
})
const onChange = ({
  color: c,
  val,
}: { color: keyof Colors; val: number }) => (color.value[c] = Number(val))
</script>
<template>
  <div ref="page" class="flex-1 h-full w-full">
    <VueFlow
      :elements="elements"
      :node-types="['rgb', 'rgb-output']"
      :edge-types="['rgb-line', 'pathfinding']"
      :zoom-on-scroll="false"
      @load="onLoad"
    >
      <template #node-rgb="props">
        <RGBNode v-bind="props" :amount="color" @change="onChange" />
      </template>
      <template #node-rgb-output="props">
        <RGBOutputNode :v-bind="props" :rgb="`rgb(${color.red}, ${color.green}, ${color.blue})`" />
      </template>
      <Controls />
      <Background variant="lines" color="#aaa" :gap="120" :size="0.7" />
      <MiniMap class="border-2 border-light-800 dark:border-indigo-400" />
      <div class="z-99 flex flex-col gap-4 w-1/3 absolute top-40 left-15">
        <h1 class="text-2xl lg:text-5xl" :style="{ color: `rgb(${color.red}, ${color.green}, ${color.blue})` }">
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
    </VueFlow>
  </div>
</template>
