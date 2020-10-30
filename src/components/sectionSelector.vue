<template>
  <div class="section-selector">
      <ul class="section-selector__list">
          <li :class="['section-selector__item', {'section-selector__item--active': section === currentSection}]" v-for="section in sections" :key="section">
              {{section.replace(/^\w/, fstLet=>fstLet.toUpperCase())}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props: {
        sections: Object
    },
    computed:{
        currentSection(){
            return this.$store.state.activeSection
        }
    }
}
</script>

<style>

</style>