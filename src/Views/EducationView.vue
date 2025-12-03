<script setup lang="js">
  import EducationBlock from '../components/EducationBlock.vue';

  const degrees = ["B.S Antropology",
    "Minor in Biology"
  ]

  const awards = ["4x Deans list",
    "Anthropology Experimental Learning Scholarship",
    "Directors Award"
  ]

  const classes = ["Fundamental Genetics",
    "Geonomics",
    "Evolution",
    "Molecular Genetics of Human Disease",
    "Foundations of Biology",
    "Diversity of Form and Function",
    "Cell Biology",
    "Principles of Chemistry I and II",
    "Mathematics for Biological Sciences",
    "Biostatistics",
    "Psychology",
    "Antropology of Caregiving and Health",
    "Human Organs"
  ]
</script>

<template>
  <section class="py-4">
    <h2 class="text-6xl text-center">University of Iowa</h2>
    <div class="grid grid-flow-col grid-rows-2 grid-cols-2 py-4 px-4 gap-4">
      <EducationBlock
        class="p-4"
        :title="'Degrees'"
        :list="degrees"
      ></EducationBlock>
      <EducationBlock
        class="p-4"
        :title="'Awards'"
        :list="awards"
      ></EducationBlock>
      <EducationBlock
        class="p-4 row-span-2"
        :title="'Coursework'"
        :list="classes"
      ></EducationBlock>
    </div>
  </section>
</template>