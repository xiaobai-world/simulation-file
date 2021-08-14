<template>
 <form
  name="download"
  :action="`${appRootPath}/api/create-file-by-size?size=${size}`"
  method="post"
 >
  <div v-if="pending">
   <p>Loading.....</p>
  </div>
  <div v-else>
   <div>
    <input type="range" step="1" min="0" max="300" v-model.number="size" />
    <span>{{ size }}Mb</span>
   </div>
   <div>
    <input type="submit" value="download file" />
   </div>
  </div>
 </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { appRootPath } from "./app-info";

export default defineComponent({
 name: "SimulationFile",
 setup() {
  return {
   size: ref(10),
   pending: ref(true),
   errorMessage: ref(""),
   appRootPath,
  };
 },
 mounted() {
  navigator.serviceWorker
   .register(
    `${this.appRootPath}/sw.js?appRootPath=${encodeURIComponent(
     appRootPath.value
    )}`
   )
   .then(() => {
    this.pending = false;
   })
   .catch((e) => {
    console.error(e);
    this.pending = false;
    this.errorMessage = e.message;
   });
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
