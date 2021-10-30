<template>
  <section id="section-contact">
    <v-icon x-large :color="iconColor" @click="openLink(instagramLink)"
      >mdi-instagram</v-icon
    >
    <v-icon x-large :color="iconColor" @click="openLink(linkedinLink)"
      >mdi-linkedin</v-icon
    >
    <v-icon x-large :color="iconColor" @click="openLink(email)">mdi-email</v-icon>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      iconColor: '#fff',
      instagramLink: 'https://www.instagram.com/garetpark/',
      linkedinLink: 'https://www.linkedin.com/in/gareth-lau-8b091b9b/',
      email: 'mailto:gareth07120712@gmail.com'
    };
  },
  methods: {
    openLink(url: string) {
      let target: string = '_blank';
      if (url.startsWith('mailto:')) target = '_parent';
      window.open(url, target);
    }
  }
});
</script>

<style lang="scss">
#section-contact {
  flex: 1;
}
</style>
