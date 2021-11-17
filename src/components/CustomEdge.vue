<script lang="ts" setup>
import { ArrowHeadType, ElementId, getBezierPath, getMarkerEnd, Position, EdgeProps } from '@braks/vue-flow'

interface CustomEdgeProps extends EdgeProps {
  source: ElementId
  target: ElementId
  sourceHandleId?: ElementId
  targetHandleId?: ElementId
  id: ElementId
  sourceX: number
  sourceY: number
  targetX: number
  targetY: number
  sourcePosition: Position
  targetPosition: Position
  arrowHeadType?: ArrowHeadType
  markerEndId?: string
  data?: {
    text?: string
    color?: 'red' | 'green' | 'blue'
  }
}

const props = defineProps<CustomEdgeProps>()
const edgePath = computed(() =>
  getBezierPath({
    sourceX: props.sourceX,
    sourceY: props.sourceY,
    sourcePosition: props.sourcePosition,
    targetX: props.targetX,
    targetY: props.targetY,
    targetPosition: props.targetPosition,
  }),
)
const markerEnd = computed(() => getMarkerEnd(props.arrowHeadType, props.markerEndId))
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
<template>
  <path :id="props.id" class="vue-flow__edge-path" :style="{ stroke: props.data?.color }" :d="edgePath" :marker-end="markerEnd" />
  <text>
    <textPath
      :href="`#${props.id}`"
      :style="{ fontSize: '12px', fill: props.data?.color }"
      startOffset="50%"
      text-anchor="middle"
    >
      {{ props.data?.text }}
    </textPath>
  </text>
</template>
