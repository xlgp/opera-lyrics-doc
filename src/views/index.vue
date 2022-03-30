<template>
<el-tabs class="demo-tabs">
    <el-tab-pane v-for="item in nameListStore.juZhongList" :label="item" :name="item">{{item}}</el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useNameListStore } from '../stores/nameList'

const nameListStore = useNameListStore();

onMounted(() => {
    nameListStore.fetchNameList();
});
</script>