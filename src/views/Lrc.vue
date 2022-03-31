<template>
    <el-scrollbar>
        <el-card shadow="never" v-loading="loading">
            <template #header>
                <div class="card-header">
                    <span>{{ lrcStore.data[0] }}</span>
                    <el-button class="button" type="text">复制</el-button>
                </div>
            </template>
            <name-list :data="lrcStore.data"></name-list>
        </el-card>
    </el-scrollbar>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useLrcStore } from '../stores/lrc';
import NameList from './NameList.vue';

const lrcStore = useLrcStore();
const route = useRoute()
const loading = ref(true);

function fetchLrc(path: string) {
    loading.value = true;
    lrcStore.fetchLrc(path).finally(() => loading.value = false);
}

watch(
    () => route.path,
    async path => fetchLrc(path)
)

onMounted(() => fetchLrc(route.path));
</script>

<style scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}
</style>