<script setup lang="js">
  import { SeminarsObject } from '../types';
  import SeminarsBlock from '../components/SeminarsBlock.vue';

  const seminarsList = [
      new SeminarsObject(
          "International Complement Workshop (ICW2025): Brisbane Australia",
          "Present a poster on novel detection methods for Anti-FH Immune Complexes in MGRS patients to complement professionals and received feedback and peer reviews"
      ),
      new SeminarsObject(
          "C3 Glomerulopathy 19th and 20th Family Conference",
          "Meet and interact with patients participating in the Natural History Study at the Molecular Otalaryngology and Renal Laboratories. Help navigate the lab and the itinerary for patients, offer tours around the clinic, run patient samples to and from the clinic, and help answer questions or concerns any patients have during their visit to create a welcoming environment"
      ),
      new SeminarsObject(
          "Applying to Genetic Counseling Graduate Programs and Information Event",
          "Genetic Counselors discuss their experience when applying to genetic counseling programs and provide tips and feeback for students who are pursuing genetic counseling in a small group setting"
      ),
      new SeminarsObject(
          "NSGC Prospective Genetic Counselor Student Fair",
          "Interact with each GC program and their representatives to ask specific questions and learn more about each individual program to learn what they offer and understand the expectations in a Genetic Counseling program"
      ),
      new SeminarsObject(
          "Iowa Institute of Human Genetics Topics in Genetic Counseling Webinar Series",
          "Provide different perspectives in the genetic counseling field by watching seminars covering multiple specialties in the genetic counseling, and live discussion with genetic counselors who discuss real world clinicla examples relevant to the seminar"
      )
  ]
</script>

<template>
  <section>
    <SeminarsBlock
      v-for="seminar in seminarsList"
      :seminar="seminar"
    ></SeminarsBlock>
  </section>
</template>
