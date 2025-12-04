<script setup lang="js">
  import { SeminarsObject } from '../types';

  defineProps({
    seminar: SeminarsObject
  })
</script>

<template>
  <article>
    <h3 class="text-3xl">{{ seminar.title }}</h3>
    <p class="text-base pt-2 pb-4">{{ seminar.description }}</p>
  </article>
</template>