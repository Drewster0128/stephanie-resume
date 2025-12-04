<script setup lang="js">
  import EducationBlock from '../components/EducationBlock.vue';
  import { EducationObject } from "../types"

  const degrees = new EducationObject(
    "Degrees",
    ["B.S Anthropology",
      "Minor in Biology"
    ]
  )

  const awards = new EducationObject(
    "Awards",
    ["4x Deans list",
      "Anthropology Experimental Learning Scholarship",
      "Directors Award"
    ]
  )

  const classes = new EducationObject(
    "Coursework",
    ["Fundamental Genetics",
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
  )
</script>

<template>
  <section>
    <h2 class="text-6xl text-center">University of Iowa</h2>
    <div class="grid grid-flow-col grid-rows-2 grid-cols-2 py-4 px-4 gap-4">
      <EducationBlock
        class="p-4"
        v-for="education in [degrees, awards]"
        :education="education"
      ></EducationBlock>
      <EducationBlock
        class="p-4 row-span-2"
        :education="classes"
      ></EducationBlock>
    </div>
  </section>
</template>
