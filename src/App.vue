<template>
  <nav>
    <!-- The router-link has a built in behaviour that allows Vue to intercept the request and handle it client side, instead of sending a fresh request to the server -->
    <router-link to="/">Home</router-link>
    <!-- Data binding the to attribute and passing in the object with the name property is more scalable because if in the future we change the path name to something else we won't have to change the hard coded path throughtout the rest of the website -->
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'jobs' }">Jobs</router-link>
  </nav>
  <button @click="redirect">Redirect</button>
  <button @click="back">Go Back</button>
  <button @click="forward">Go Forward</button>

  <!-- This is where Vue Router will inject the component based on its route -->
  <router-view />
</template>

<script>
export default {
  // How to Programmatically move the user around the website
  methods: {
    redirect() {
      this.$router.push({ name: "home" });
    },
    back() {
      // This methos let us walk through the history of navigation, basically like the browers buttons back and forward
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: white;
  background: crimson;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}
</style>
