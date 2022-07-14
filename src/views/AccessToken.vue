<template>
    <el-input
        v-model="input"
        @input="changeAccessToken"
        clearable
        show-password
        placeholder="请输入gitee access token"
    >
        <template #prepend>Gitee Access Token</template>
    </el-input>
    <el-descriptions title="信息">
        <el-descriptions-item label="Fullpath">{{ $route.fullPath }}</el-descriptions-item>
    </el-descriptions>
</template>

<script setup lang="ts">
import { onMounted, ref, } from 'vue';
import { useGiteeAccessTokenStore } from '../stores/accessToken'

const accessTokenStore = useGiteeAccessTokenStore();
const input = ref('');

const changeAccessToken = (e: Event) => {
    accessTokenStore.set(input.value);
}

onMounted(() => {
    accessTokenStore.get();
    input.value = accessTokenStore.data;
});

</script>