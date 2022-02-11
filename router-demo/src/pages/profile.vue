<template>
  <div>
      profile
  </div>
</template>

<script setup>
import { toRaw } from "@vue/reactivity";
import { useRoute } from "vue-router";

const router = useRoute()
console.log(toRaw(router))

</script>

<style>

</style>