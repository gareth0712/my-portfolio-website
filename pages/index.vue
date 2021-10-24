<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">my-portfolio-website</h1>
      <h2 class="subtitle">Built using Nuxt</h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import type { MetaInfo } from "vue-meta";
import { mapActions, mapState } from "vuex";
import type { RootState } from "~/store";
import {
  actionType,
  namespace as settingStoreNamespace,
  SettingState,
} from "~/store/setting";
interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export default Vue.extend({
  fetchOnServer: false,
  middleware: "user-agent",
  asyncData(context) {
    return {
      asyncMessage: "I'm defined on asyncData()",
      userAgent: context.userAgent,
    };
  },
  data() {
    return {
      message: "I'm defined on data()",
      fetchedTodos: [] as ToDo[],
      asyncMessage: "I will be overwritten by asyncData",
      userAgent: "I will be overwritten by asyncData",
    };
  },
  fetch() {
    return fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data: ToDo[]) => {
        this.fetchedTodos = data;
      });
  },
  head(): MetaInfo {
    return {
      meta: [
        {
          name: "message",
          content: this.computedMessage,
        },
      ],
    };
  },
  computed: {
    computedMessage(): string {
      return this.message.replace("data()", "computed()");
    },
    ...mapState({
      descriptionOnStore: (state) => (state as RootState).description,
    }),
    ...mapState(settingStoreNamespace, {
      isDarkMode: (state) => (state as SettingState).darkMode,
    }),
  },
  methods: {
    ...mapActions(settingStoreNamespace, {
      toggleDarkMode: actionType.TOGGLE_DARK_MODE,
    }),
  },
});
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
