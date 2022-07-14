<template>
  <h1>Job Details Page</h1>
  <!-- In this case we called the route param "id" in the index.js file routes array -->
  <h2>The job title is: {{ job.title }}</h2>
  <p>The job id is: {{ id }}</p>
</template>

<script>
export default {
  props: ["id"],

  //  Instead of doing this we can pass the id as prop
  //   data() {
  //     return {
  //       id: this.$route.params.id,
  //     };
  //   },
  data() {
    return {
      job: null,
    };
  },

  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
