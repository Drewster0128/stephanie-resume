<script setup lang="js">

  const props = defineProps({
      title : String,
      list: Array<String>[]
  })
</script>

<template>
  <article>
    <h3 class="text-center text-3xl pb-4">{{ props.title }}</h3>
    <ul class="flex flex-col gap-y-5 w-3/4 m-auto">
      <li v-for="item in props.list">{{ item }}</li>
    </ul>
  </article>
</template>
