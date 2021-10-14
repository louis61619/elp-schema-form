<template>
  <div>
    <h2>demo</h2>
    <slot />
    <slot name="description" />

    <component :is="current"></component>
    <div ref="highlight">
      <!-- <slot name="highlight" /> -->
    </div>

    <div class="example-source language-vue" v-html="decoded"></div>
  </div>

  <!-- <p>{{ html }}</p> -->
</template>

<script lang="ts">
import { defineComponent, computed, getCurrentInstance } from 'vue'

export default defineComponent({
  props: {
    customClass: {
      type: String,
      default: ''
    },
    sourceCode: {
      type: String,
      default: ''
    },
    html: {
      type: String,
      default: ''
    },
    source: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const decoded = computed(() => {
      return decodeURIComponent(props.source)
    })

    const app = getCurrentInstance()

    return {
      decoded,
      current: app && app.appContext.config.globalProperties.$compsMap[props.path]
      // formatPathDemos
    }
  }
})
</script>

<style scoped></style>
