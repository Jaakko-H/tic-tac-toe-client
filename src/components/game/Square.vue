<template>
  <div class="square">X</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    mark: {
      type: String,
      default: "",
    },
  },
})
export default class Square extends Vue {
  mark?: String;
}
</script>

<style scoped>
.square {
  border-width: 1px;
  border-style: solid;
  height: 100px;
  width: 100px;
}
</style>