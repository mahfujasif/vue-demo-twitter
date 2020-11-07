<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <div class="navigation_logo">Twitter</div>
      </router-link>
      <div class="navigation_user" v-if="user">{{ user.username }}</div>
    </nav>

    <router-view />
  </div>
</template>

<script>

import {useStore} from 'vuex';
import {computed} from 'vue';

export default {
  name: "App",

  setup() {
    const store = useStore();
    const user = computed(()=> store.state.User.user);

    return {
      user
    }

  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #1b2d5c;

  nav {
    display: flex;
    align-items: contre;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: rgb(77, 52, 219);

    .navigation_logo {
      font-weight: bold;
      color: white;
      font-size: 25px;
    }

    .navigation_user {
      color: white;
      font-weight: bold;
    }
  }
}
</style>
