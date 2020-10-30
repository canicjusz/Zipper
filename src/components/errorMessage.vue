<template>
  <div :class="['error', {'error--on': showError}]">
    <p class="error__message">{{error}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(['showError', 'error'])
  }
}
</script>

<style>

</style>