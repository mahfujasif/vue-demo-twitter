<template>
  <div id="app">

    <nav>
      <div class="navigation_logo">
        Twitter
      </div>
      <div class="navigation_user">
        asif
      </div>
    </nav>

    <UserProfile/>
  </div>
</template>

<script>
import UserProfile from "./components/UserProfile"

export default {
  name: "App",
  components: {
    UserProfile
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
