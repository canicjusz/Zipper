<template>
  <div class="section-selector">
      <ul class="section-selector__list">
          <li :class="['section-selector__item', {'section-selector__item--active': section === activeSection}]" v-for="section in sections" :key="section">
              {{section.replace(/^\w/, fstLet=>fstLet.toUpperCase())}}
          </li>
      </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    props: {
        sections: Object
    },
    computed: mapState(['activeSection'])
}
</script>

<style>

</style>