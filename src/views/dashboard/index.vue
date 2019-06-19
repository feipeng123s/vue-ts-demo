<template>
  <div>
    <grid-layout
      :layout="layout"
      :col-num="12"
      :margin="[30, 30]"
      :row-height="100"
      :is-draggable="isDraggable"
      :is-resizable="isResizable"
      :is-mirrored="false"
      :auto-size="true"
      :use-css-transforms="true"
    >
      <grid-item>

      </grid-item>
    </grid-layout>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import VueGridLayout from 'vue-grid-layout'

@Component({
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  }
})
export default class Dashboard extends Vue {
  layout = []
  isDraggable = true
  isResizable = true
}
</script>
