<template>
  <div class="software-keys">
      <span class="software-keys__key software-keys__left">{{softwareKeys.left}}</span>
      <span class="software-keys__key software-keys__center">{{softwareKeys.center}}</span>
      <span class="software-keys__key software-keys__right">{{softwareKeys.right}}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: mapState(['softwareKeys'])
}
</script>

<style>

</style>