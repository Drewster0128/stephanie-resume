<script setup lang="js">

  const props = defineProps({
    title: String,
    bullets: Array<String>[]
  })
</script>

<template>
  <article>
    <h3 class="text-4xl">{{ props.title }}</h3>
    <ul>
      <li v-for="bullet in props.bullets">{{ bullet }}</li>
    </ul>
  </article>
</template>
