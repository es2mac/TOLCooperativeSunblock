<template>
  <section id="section1context">
    <h1>Before eveything begins, let’s learn some contexts about sunblocks.</h1>
    <button v-if="customData && customData.partner" v-on:click="$emit('proceed')">Let's start</button>
    <NamesDisplay v-if="customData" v-bind:names="customData" />
  </section>
</template>

<script>
import NamesDisplay from "./NamesDisplay.vue";

export default {
  name: "Section1Context",
  components: { NamesDisplay },
  props: ["customData"]
};
</script>

<style scoped></style> 