<template>
    <filter-input :options="nameListStore.data"></filter-input>
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
import { useRoute } from 'vue-router';
import { useNameListStore } from '@/stores/nameList'
import RouterLinkList from './RouterLinkList.vue';
import FilterInput from './FilterInput.vue';

const nameListStore = useNameListStore();

const route = useRoute();

const activeName = computed(() => route.params.path);

onMounted(() => {
    nameListStore.fetchNameList();
});
</script>
<style scoped>
.el-tabs__nav-wrap {
    padding: 0 2rem 0 1.5rem;
}
</style>