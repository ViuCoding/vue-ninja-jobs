<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
    <!-- Data binding :to so we can pass an object, name for the name of the page and params to pass the Route Parameter (:id) -->
    <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
      <h2>
        {{ job.title }}
      </h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // We gonna fetch the data using API calls and the populate the data array with it.
      jobs: [],
    };
  },

  // The mounted() life cycle hooks is where we usually make API calls
  mounted() {
    // fetch returns a promise, so we attach a .then, we pass in the request and turn it into a JS object with .json(). After that we simply set the empty array to be the result of the data request this.jobs (empty array) = data (which is the returned data array)
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
}
</style>
