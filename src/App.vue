<script setup>
  import HelloWorld from "./components/HelloWorld.vue";
  import { ref } from "vue";

  const page = ref("education");
</script>

<template>
  <header class="w-full py-4">
    <h1 class="text-5xl text-center py-4">Stephanie Cook</h1>
    <nav class="text-xl flex flex-row justify-around">
      <RouterLink
        to="/"
        :class="{ 'text-yellow-400': page === 'education' }"
        @click="page = 'education'"
        >Education</RouterLink
      >
      <RouterLink
        to="/experience"
        :class="{ 'text-yellow-400': page === 'experience' }"
        @click="page = 'experience'"
        >Experience</RouterLink
      >
      <RouterLink
        to="/seminars"
        :class="{ 'text-yellow-400': page === 'seminars' }"
        @click="page = 'seminars'"
        >Seminars</RouterLink
      >
      <RouterLink
        to="/presentations"
        :class="{ 'text-yellow-400': page === 'presentations' }"
        @click="page = 'presentations'"
        >Presentations
      </RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>
