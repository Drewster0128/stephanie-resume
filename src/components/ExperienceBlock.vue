<script setup lang="js">
  import ExperienceObject from '../types/ExperienceObject';

  defineProps({
    experience : ExperienceObject
  })
</script>

<template>
  <article>
    <h3 class="text-2xl">{{ experience.title }}</h3>
    <ul class="py-2 list-disc">
      <li class="py-1" v-for="bullet in experience.bullet">{{ bullet }}</li>
    </ul>
  </article>
</template>
