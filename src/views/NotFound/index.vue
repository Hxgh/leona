<template>
  <el-empty>
    <el-button type="primary" @click="goHome()">跳转到主页</el-button>
  </el-empty>
</template>


<script setup lang="ts" >
import { useRouter } from 'vue-router'
const router = useRouter()
const goHome = () => {
  router.replace({ path: '/home' })
}
</script>