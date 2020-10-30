<template>
  <topBar></topBar>
  <sectionSelector :sections="['zip', 'unzip']"></sectionSelector>
  <component :is="currentSection"></component>
  <errorMessage></errorMessage>
  <softwareKeys></softwareKeys>
</template>
<script>
import softwareKeys from "./components/softwareKeys.vue";
import sectionSelector from "./components/sectionSelector.vue";
import errorMessage from "./components/errorMessage.vue";
import topBar from "./components/topBar.vue";
import zip from "./sections/zip.vue";
import unzip from "./sections/unzip.vue";
import("./utils/navigation.js");

export default {
  name: "App",
  components: {
    softwareKeys,
    errorMessage,
    sectionSelector,
    topBar,
    zip,
    unzip
  },
  computed:{
    currentSection(){
      return this.$store.state.activeSection
    }
  }
};
</script>

<style lang="sass">
@import "./styles/style.sass"
</style>
