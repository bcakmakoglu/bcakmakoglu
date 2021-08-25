<script setup lang="ts">
import { useAttrs } from '@vue/runtime-core'

enum Headlines {
  heading1 = 'h1',
  heading2 = 'h2',
  heading3 = 'h3',
  heading4 = 'h4',
  heading5 = 'h5',
  heading6 = 'h6'
}

interface HeadlineProps {
  type: keyof typeof Headlines
  text: string
  spans?: string[]
}

// Minimal usage:
const props = defineProps<HeadlineProps>()

const headline = h(Headlines[props.type] ?? 'h1', { ...useAttrs() }, props.text)

// In order to have a visual reminder of which props are made available, a placeholder hint can be supplied:
// defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']))
</script>

<template>
  <component :is="headline"></component>
</template>
