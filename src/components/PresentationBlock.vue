<script setup lang="js">
  import { PresentationObject } from '../types';

  defineProps({
    presentation: PresentationObject
  })
</script>

<template>
  <article>
    <h3 class="text-3xl text-center pb-1">{{ presentation.title }}</h3>
    <h4 class="text-xl text-center pb-2">{{ presentation.location }}</h4>
    <a v-if="presentation.hasImg()" :href="presentation.link" target="_blank">
      <img class="max-w-3/4 m-auto" :src="presentation.imgSrc" />
    </a>
  </article>
</template>
