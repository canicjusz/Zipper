<template>
  <div class="top-bar">
    <p class="top-bar__text">Zipper</p>
  </div>
  <sectionSelector :sections="['zip', 'unzip']"></sectionSelector>
  <component :is="activeSection"></component>
  <errorMessage></errorMessage>
  <softwareKeys></softwareKeys>
</template>
<script>
import softwareKeys from "./components/softwareKeys.vue";
import sectionSelector from "./components/sectionSelector.vue";
import errorMessage from "./components/errorMessage.vue";
import zip from "./sections/zip.vue";
import unzip from "./sections/unzip.vue";
import("./utils/navigation.js");
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    softwareKeys,
    errorMessage,
    sectionSelector,
    zip,
    unzip
  },
  computed: mapState(['activeSection'])
};
</script>

<style lang="sass">
@import "./styles/style.sass"
</style>
