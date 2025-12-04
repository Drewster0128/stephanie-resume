<script setup lang="js">
  import ExperienceBlock from '../components/ExperienceBlock.vue';
  import ExperienceObject from '../types/ExperienceObject'

  const researchList = [
    new ExperienceObject(
      "Genetic Counseling",
      ["Shadow Genetic Counselors in a diverse range of specialty clinics, including, neurogenetics, cancer, prenatal, cardiogenetics, and pediatric genetics",
        "Accumulate ~150 hours of clinical experience, working directly with patients by illustrating pedigrees, discussing family history, educating on genetic testing options, interpreting risk factors, and addressing questions and concerns",
        "Design patient education material on variants of uncertain significance for use at the Holden Comprehensive Cancer Center"
      ]
    ),
    new ExperienceObject(
      "Research Assistant at Molecular Otolaryngology and Renal Laboratories",
      ["Perform labortory methods such as Western blotting, PCR, and gel electrophoresis, ELISA, and IgG affinity purification to detect protein/gene level abnormalities in utlra rare-mediated kidney disease patients",
        "Discuss in a large group setting once a month genetic test results for renal patients",
        "Validate novel antibody assays to improve diagnostic accuracy and enhance understanding of complement dysregulation in patients"
      ]
    ),
    new ExperienceObject(
      "Research Assistant at Molecular Otolaryngology and Renal Laboratories",
      ["Perform labortory methods such as Western blotting, PCR, and gel electrophoresis, ELISA, and IgG affinity purification to detect protein/gene level abnormalities in utlra rare-mediated kidney disease patients",
        "Discuss in a large group setting once a month genetic test results for renal patients",
        "Validate novel antibody assays to improve diagnostic accuracy and enhance understanding of complement dysregulation in patients"
      ]
    ),
    new ExperienceObject(
      "Department of Cell Biology and Anatomy",
      ["Facilitate Cystic Fibrosis research in ferret models to develop a strong understanding of Cystic Fibrosis with a goal to develop future treatment options",
        "Perform general laboratory maintenance such as preparing bacterial growth media, photographing cell tissue, and running Polymerase chain reaction gels on extracted sampels"
      ]
    ),
    new ExperienceObject(
      "Laboratory of Biological Anthropology",
      ["Organize and analyze data tracking SARS-CoV2 gamma across the globe",
        "Utilize BEAST and ARGON data analysis software within the context of molecular biology research"
      ]
    )
  ]

  const volunteerList = [
    new ExperienceObject(
      "Domestic Violence and Intervention Program",
      ["Answer crisis calls and providing resources to clients over the phone",
        "Provide emotional support, guidance, information, and housing to clients",
        "Assist with typical everyday operation of shelter, including but not limited to inventorying donations, organizing client data collection, cleaning client housing, and organizing supplies and resources to ensure easy access for our clients"
      ]
    ),
    new ExperienceObject(
      "Shelter House",
      ["Participate in fundraising events to raise awareness for individuals experiencing homelessness",
        "Organize and distribute clothes for clients staying in the shelter"
      ]
    ),
    new ExperienceObject(
      "Crowded Closet",
      ["Provide customer service and support as a volunteer cashier by assisting low-income clients in accessing affordable goods",
        "Provide friendly service by assisting customers with product information, purchases, and resolving concerns"
      ]
    ),
    new ExperienceObject(
      "Crisis Counselor",
      ["Provide immediate emotional support intervention to texters in active state of stres through anonymous text messaging, such as domestic abuse, suicidal thoughts, and resources for housing",
        "Listen to texters, offered empathy, understanding, and guidance to help navigate their crisis and to find a cooler calm"
      ]
    ),
    new ExperienceObject(
      "Upstream Initiative",
      ["Discuss resources for food options with eligible patients at University of Iowa Hospitals and Clinics",
        "Provide food boxes for patients at University of Iowa Hospitals and Clinics",
        "Facilitate data collection on causes of food insecurity in expecting mothers"
      ]
    ),
    new ExperienceObject(
      "CommUnity Food Bank",
      ["Serve as a first-point of contact for individuals and families experiencing food insecurity and connecting them with available resources",
        "Support the food bank by organizing, sorting, and managing food donation supplies to support efficient distribution of resources"
      ]
    )
  ]
</script>

<template>
  <section class="py-4">
    <h2 class="text-4xl py-3">Research</h2>
    <ExperienceBlock
      v-for="experience in researchList"
      :experience="experience"
    ></ExperienceBlock>
  </section>
  <section>
    <h2 class="text-4xl py-3">Volunteer Work</h2>
    <ExperienceBlock
      v-for="experience in volunteerList"
      :experience="experience"
    ></ExperienceBlock>
  </section>
</template>
