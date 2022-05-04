<script setup>
import { NotionRenderer, getPageBlocks } from "vue3-notion"
import { ref, onMounted } from "vue"

const data = ref()

onMounted(async () => {
  //data.value = await getPageBlocks("71e464117a774d8c8e2d03384172173f")
  //data.value = await getPageBlocks(import.meta.env.NOTION_PAGE)
  data.value = await getPageBlocks(import.meta.env.VITE_NOTION_PAGE)

})
</script>

<template>
  <NotionRenderer v-if="data" :blockMap="data" fullPage />
</template>

<style>
@import "vue3-notion/dist/style.css"; /* optional Notion-like styles */
</style>