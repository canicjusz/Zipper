<template>
  <div class="top-bar">
    <p class="top-bar__text">{{activeSection.replace(/^\w/, fstLet=>fstLet.toUpperCase())}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(['activeSection'])
  }
}
</script>

<style>

</style>