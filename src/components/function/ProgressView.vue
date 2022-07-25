<template>
  <div>
    <div class="text-center">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
      <v-progress-circular indeterminate color="red"></v-progress-circular>
      <v-progress-circular indeterminate color="purple"></v-progress-circular>
      <v-progress-circular indeterminate color="green"></v-progress-circular>
      <v-progress-circular indeterminate color="amber"></v-progress-circular>
    </div>
    <div>
      <v-progress-linear indeterminate color="yellow darken-2"></v-progress-linear>
      <br>
      <v-progress-linear indeterminate color="green"></v-progress-linear>
      <br>
      <v-progress-linear indeterminate color="teal"></v-progress-linear>
      <br>
      <v-progress-linear indeterminate color="cyan"></v-progress-linear>
    </div>
  </div>
</template>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>