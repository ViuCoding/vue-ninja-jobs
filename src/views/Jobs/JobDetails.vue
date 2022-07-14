<template>
  <h1>Job Details Page</h1>
  <!-- In this case we called the route param "id" in the index.js file routes array -->
  <!-- We use the v-if here because the job object is null at first hence we will get an error since we are trying to access job.title (that populates only after the API call) -->
  <div v-if="job">
    <h2>The job title is: {{ job.title }}</h2>
    <p>The job id is: {{ id }}</p>
  </div>
  <div v-else>
    <p>Loading Job details..</p>
  </div>
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
