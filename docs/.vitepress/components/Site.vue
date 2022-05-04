<script setup>
import { NotionRenderer, getPageBlocks } from "vue3-notion"
import { ref, onMounted, onErrorCaptured } from "vue"

const error = ref(null);
onErrorCaptured(e => {
  error.value = e
  return true
})



const data = ref()

const content = async () =>  data.value = await getPageBlocks(import.meta.env.VITE_NOTION_PAGE)

onMounted(content)

</script>

<template>
<div v-if="error">
   {{ error }}
  </div>
  <Suspense v-else>
    <template #default>
      <NotionRenderer v-if="data" :blockMap="data" fullPage />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<style>
@import "vue3-notion/dist/style.css"; /* optional Notion-like styles */
</style>