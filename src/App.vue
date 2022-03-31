<template>
  <el-container class="fixed">
    <el-aside width="400px">
      <el-scrollbar>
        <name-tab></name-tab>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header><el-page-header content="唱词信息"/></el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import NameTab from './views/NameTab.vue';
</script>
<style scoped>
.fixed {
  position: fixed;
  width: 100%;
  height: 100%;
}
</style>
