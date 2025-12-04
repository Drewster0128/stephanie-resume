<script setup lang="js">
  import { ExperienceObject } from '../types';

  defineProps({
    experience : ExperienceObject
  })
</script>

<template>
  <article>
    <h3 class="text-2xl">{{ experience.title }}</h3>
    <ul class="py-2 list-disc ml-4 text-base">
      <li class="py-1" v-for="bullet in experience.bullet">{{ bullet }}</li>
    </ul>
  </article>
</template>
