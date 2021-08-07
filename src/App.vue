<template>
 <form
  name="download"
  :action="`/api/create-file-by-size?size=${size}`"
  method="post"
 >
  <div>
   <input type="range" step="1" min="0" max="300" v-model.number="size" />
   <span>{{ size }}Mb</span>
  </div>
  <div>
   <input type="submit" value="download file" />
  </div>
 </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
 name: "SimulationFile",
 setup() {
  return {
   size: ref(10),
  };
 },
 mounted() {
  navigator.serviceWorker.register("sw.js");
 },
});
</script>

<style scoped>
form {
 margin: 2em auto;
 text-align: center;
 line-height: 180%;
}

input[type="range"] {
 width: 300px;
}
</style>
