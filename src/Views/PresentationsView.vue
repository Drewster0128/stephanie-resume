<script setup lang="js">
  import { PresentationObject } from '../types';
  import PresentationBlock from '../components/PresentationBlock.vue';
  import Poster from '../assets/LFA POSTER FHAA_FH-v10.jpg'

  const presentationList = [
    new PresentationObject(
      "Psychosocial Aspects of Down Syndrome",
      "Iowa Institute of Human Genetics Genetic Counseling Internship",
      "https://iowa-my.sharepoint.com/:p:/r/personal/scook8_uiowa_edu/Documents/Genetic%20counselor/Project%202/Final%20presentation.pptx?d=w1c2a4a0dd647424bbae53768a493094c&csf=1&web=1&e=dH2TFc"
    ),
    new PresentationObject(
      "Anti-FH Immune Complexes in MGRS-C3G",
      "International Complement Society Conference",
      "https://iowa-my.sharepoint.com/:p:/g/personal/scook8_uiowa_edu/EfFcv6evfFFNqUsa9SraAg0BsUZfd71-dYL_Q0tYXGF6Kw?e=qKBuDF&xsdata=MDV8MDJ8c3RlcGhhbmllLWNvb2tAdWlvd2EuZWR1fGNiMjkwZmZmZThmZDRhNzk5ZTc4MDhkZTE0ZDZkYjU5fDFiYzQ0NTk1OWFiYTRmYzNiOGVjN2I5NGE1NTg2ZmRjfDF8MHw2Mzg5NzExMTAxODk1ODk0MDd8VW5rbm93bnxUV0ZwYkdac2IzZDhleUpGYlhCMGVVMWhjR2tpT25SeWRXVXNJbFlpT2lJd0xqQXVNREF3TUNJc0lsQWlPaUpYYVc0ek1pSXNJa0ZPSWpvaVRXRnBiQ0lzSWxkVUlqb3lmUT09fDB8fHw%3d&sdata=dzRiOTQ1R3pYQVNjR1BwWkNxeTJGbHFwakM5UHE2T2JlUmJIcWxHeWdiZz0%3d",
      Poster
    )
  ]
</script>

<template>
  <section>
    <PresentationBlock
      class="p-4"
      v-for="presentation in presentationList"
      :presentation="presentation"
    ></PresentationBlock>
  </section>
</template>
