<template>
<div>

  Hello VitePress W
</div>
</template>

<script setup>
import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({
  auth: 'secret_nvWqCSZIz47YY2ig6Uw3MyeKyNv8TMOs6ZnDyim0SZa',
});

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });

(async () => {
  // notice second argument, totalPage.
  const x = await n2m.pageToMarkdown('71e464117a774d8c8e2d03384172173f', 1);
  console.log(x);
})();
</script>