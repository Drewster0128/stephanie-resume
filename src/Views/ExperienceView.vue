<script setup lang="js">
  import ExperienceObject from '../types/ExperienceObject'

  const geneticCounseling = new ExperienceObject(
    "Genetic Counseling",
    ["Shadow Genetic Counselors in a diverse range of specialty clinics, including, neurogenetics, cancer, prenatal, cardiogenetics, and pediatric genetics",
      "Accumulate ~150 hours of clinical experience, working directly with patients by illustrating pedigrees, discussing family history, educating on genetic testing options, interpreting risk factors, and addressing questions and concerns",
      "Design patient education material on variants of uncertain significance for use at the Holden Comprehensive Cancer Center"
    ]
  )

  const research = new ExperienceObject(
    "Research",
    ["Perform labortory methods such as Western blotting, PCR, and gel electrophoresis, ELISA, and IgG affinity purification to detect protein/gene level abnormalities in utlra rare-mediated kidney disease patients",
      "Discuss in a large group setting once a month genetic test results for renal patients",
      "Validate novel antibody assays to improve diagnostic accuracy and enhance understanding of complement dysregulation in patients"
    ]
  )

  const departmentOfCellBiology = new ExperienceObject(
    "Department of Cell Biology and Anatomy",
    ["Facilitate Cystic Fibrosis research in ferret models to develop a strong understanding of Cystic Fibrosis with a goal to develop future treatment options",
      "Perform general laboratory maintenance such as preparing bacterial growth media, photographing cell tissue, and running Polymerase chain reaction gels on extracted sampels"
    ]
  )

  const laboratoryOfBiologicalAnthropology = new ExperienceObject(
    "Laboratory of Biological Anthropology",
    ["Organize and analyze data tracking SARS-CoV2 gamma across the globe",
      "Utilize BEAST and ARGON data analysis software within the context of molecular biology research"
    ]
  )

  
</script>

<template>
    <section class="py-4">
        <ExperienceBlock :title="geneticCounseling.title" :bullets="geneticCounseling.bullet"></ExperienceBlock>
        <!-- <ExperienceBlock></ExperienceBlock>
        <ExperienceBlock></ExperienceBlock> -->
    </section>
</template>