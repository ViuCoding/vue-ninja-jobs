<template>
  <h1>Job Details Page</h1>
  <!-- In this case we called the route param "id" in the index.js file routes array -->
  <p>The job id is: {{ id }}</p>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style></style>
