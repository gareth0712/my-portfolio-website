<template>
  <div id="main-page">
    <particles-bg id="particles" color="#ffffff" type="cobweb" :bg="true" />
    <div class="container">
      <section class="introduction">
        <h1 class="title">Gareth Lau</h1>
        <h2 class="subtitle">
          Full stack developer that helps clients build applications
        </h2>
      </section>
      <contact />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
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
#main-page {
  margin: 0 auto;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#particles {
  background-image: url('/background_cosmic_darkorchid.jpg');
  position: absolute;
  top: 0;
  left: 0;
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
