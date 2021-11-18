<script lang="ts" setup>
import { DraggableEvent, useDraggable } from '@braks/revue-draggable'
import { isDark } from '~/logic'

interface CardProps {
  draggable?: boolean
  color?: string
  title?: string
}

const props = defineProps<CardProps>()

const card = templateRef('card', null)
const dark = ref(isDark.value)
const hide = ref(false)
const mini = ref(false)
const maxi = ref(false)
const pos = ref([0, 0])
const route = useRouter()
route.beforeResolve(() => {
  (hide.value = false)
  return true
})
watch(isDark, (val) => {
  if (maxi.value) dark.value = val
})
const drag = ({ data }: DraggableEvent) => {
  pos.value[0] = data.x
  pos.value[1] = data.y
}
const toggleDark = () => (dark.value = !dark.value)
const toggleHide = () => (hide.value = !hide.value)

const {
  onDragStart,
  onDrag,
  state,
} = useDraggable(card, {
  handle: '.drag-handle',
})
onDragStart(e => drag(e))
onDrag(e => drag(e))
const reset = () => {
  state.value = {
    ...state.value,
    position: {
      x: 0,
      y: 0,
    },
  }
}
const toggleMini = () => {
  mini.value = !mini.value
  reset()
}
const toggleMaxi = () => {
  maxi.value = !maxi.value
  reset()
}
const expand = () => {
  if (mini.value) toggleMini()
}
</script>
<template>
  <div
    ref="card"
    :class="[
      `border-light-800`,
      { 'bg-black': dark, 'bg-white': !dark },
      { 'text-black': !dark, 'text-white': dark },
      {
        'shadow-xl': maxi,
        'rounded-3xl': !maxi,
        'min-w-100vw': maxi,
        'min-h-[110vh]': maxi
      },
      {
        'border-2': mini,
        'border-1': !mini,
        'cursor-pointer': mini
      },
      {
        'opacity-0': hide,
        'opacity-100': !hide,
      },
    ]
    "
    class="card overflow-hidden transition-opacity duration-750 transform flex flex-col"
    :style="mini ? `transform: scale(25%)` : null"
  >
    <!-- header -->
    <slot name="header">
      <div
        ref="header"
        class="flex min-h-12 items-center justify-start shadow-sm  pl-6 drag-handle border-b-1 border-solid border-light-800 cursor-move"
      >
        <span
          class="text-black w-3 h-3 flex justify-center items-center p-[0.5px] bg-red-400 rounded-full mr-2 cursor-pointer"
          @click.stop="toggleHide"
        >
          <carbon-close />
        </span>
        <span
          class="text-black w-3 h-3 flex justify-center items-center p-[0.5px] bg-yellow-400 rounded-full mr-2 cursor-pointer"
          @click.stop="toggleMini"
        >
          -
        </span>
        <span
          class="text-black w-3 h-3 flex justify-center items-center p-[0.5px] w-3 h-3 bg-green-400 rounded-full mr-2 cursor-pointer"
          @click.stop="toggleMaxi"
        >
          +
        </span>
        <div class="w-full hidden md:flex items-center justify-end pr-4 mb-4 pt-6">
          <div class="mx-auto">
            {{ props.title }}
          </div>
          <button class="icon-btn mx-2 !outline-none" @click.prevent="toggleDark">
            <carbon-moon v-if="dark" />
            <carbon-sun v-else />
          </button>
        </div>
      </div>
    </slot>
    <!-- /header -->

    <div
      class="relative flex-1 flex flex-col justify-center items-center w-full overflow-x-hidden overflow-y-scroll h-full"
      @click="expand"
    >
      <div v-if="maxi" class="z-99 absolute top-35 md:top-15 left-10 md:left-15">
        <ant-design-close-circle-filled
          class="text-2xl lg:text-4xl cursor-pointer transform hover:scale-110"
          @click="toggleMaxi"
        />
      </div>
      <!-- mobile nav -->
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-center">
          <div v-if="false" id="mobile-menu" class="sm:hidden flex flex-col">
            <div display="flex" flex="col" p="x-2 t-2 b-3" space="y-1">
              <router-link class="bg-gray-900 text-white nav-link" to="/">
                Home
              </router-link>

              <router-link class="nav-link" to="/about">
                About me
              </router-link>

              <router-link class="nav-link" to="projects">
                Projects
              </router-link>

              <router-link class="nav-link" to="contact">
                Contact
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- /mobile- nav -->

      <!-- hero section -->
      <slot></slot>
      <!-- /hero section -->

      <!-- footer -->
      <slot name="footer"></slot>
      <!-- /footer -->
    </div>
  </div>
</template>
<style>
.revue-draggable-dragging {
  z-index: 99 !important;
}
.revue-draggable-dragged {
  z-index: 97 !important;
}
</style>
