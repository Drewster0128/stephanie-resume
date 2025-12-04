<script setup lang="js">
  import { EducationObject } from '../types'

  defineProps({
      education: EducationObject
  })
</script>

<template>
  <article>
    <h3 class="text-center text-3xl pb-4">{{ education.title }}</h3>
    <ul class="flex flex-col gap-y-5 w-3/4 m-auto">
      <li v-for="item in education.bullet">{{ item }}</li>
    </ul>
  </article>
</template>
