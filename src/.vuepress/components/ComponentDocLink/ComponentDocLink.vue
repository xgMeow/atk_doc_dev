<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
  ><slot /></a>
</template>

<script setup>
import { computed } from 'vue'
import { usePageData } from 'vuepress/client'
import { resolveComponentDocHref } from '../../shared/component-doc.js'

const props = defineProps({
  /** 组件文档内的相对路径，如 index.html、page_component_flow_cpp.html */
  path: {
    type: String,
    required: true,
  },
})

const page = usePageData()
const href = computed(() => resolveComponentDocHref(props.path, page.value.path))
</script>
