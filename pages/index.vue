<template>
  <div id="page-container">
    <section class="introduction">
      <Logo />
      <h1 class="title">Gareth Lau</h1>
      <h2 class="subtitle">Full stack developer that helps clients build applications</h2>
    </section>
    <contact />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Contact from '~/components/Contact.vue';
import { mapActions, mapState } from 'vuex';
import type { RootState } from '~/store';
import {
  actionType,
  namespace as settingStoreNamespace,
  SettingState
} from '~/store/setting';

export default Vue.extend({
  fetchOnServer: false,
  data() {
    return {
      message: "I'm defined on data()",
      asyncMessage: 'I will be overwritten by asyncData',
      userAgent: 'I will be overwritten by asyncData'
    };
  },
  components: {
    Contact
  },
  mounted() {},
  computed: {
    computedMessage(): string {
      return this.message.replace('data()', 'computed()');
    },
    ...mapState({
      descriptionOnStore: (state) => (state as RootState).description
    }),
    ...mapState(settingStoreNamespace, {
      isDarkMode: (state) => (state as SettingState).darkMode
    })
  },
  methods: {
    ...mapActions(settingStoreNamespace, {
      toggleDarkMode: actionType.TOGGLE_DARK_MODE
    })
  }
});
</script>

<style lang="scss">
#page-container {
  margin: 0 auto;
  min-height: 100vh;
  background-image: url('/background_cosmic_darkorchid.jpg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.introduction {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #f2f2f2;
  letter-spacing: 1px;
}

.subtitle {
  font-family: 'Quicksand', sans-serif;
  font-weight: 300;
  font-size: 42px;
  color: #f2f2f2;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
