
<script setup lang="ts">
import { reactive, ref } from 'vue'


const items = reactive([{ tougou: 1, id: 1 }])


</script>


<template>
  <div>
    <div>
      header
      <div v-for="{ id } in items" :key="id">
        {{ id }}
      </div>

      <input @keyup.ctrl.space="(e) => {
        console.log(e)
      }" />
    </div>
    <router-view />
  </div>
</template>


<style lang="less" scoped></style>


