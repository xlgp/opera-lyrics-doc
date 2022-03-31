<template>
    <el-tabs v-model="activeName">
        <el-tab-pane v-for="(jz, i) in nameListStore.juZhongList" :label="jz" :name="jz">
                <router-link-list :data="nameListStore.list[i]" :parent="jz"></router-link-list>
        </el-tab-pane>
    </el-tabs>
    <el-backtop :right="100" :bottom="100" />
</template>
<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { useNameListStore } from '../stores/nameList'
import RouterLinkList from './RouterLinkList.vue';

const nameListStore = useNameListStore();

const activeName = computed(() => nameListStore.juZhongList[0]);

onMounted(() => {
    nameListStore.fetchNameList();
});
</script>