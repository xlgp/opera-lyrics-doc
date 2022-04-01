<template>
    <el-select
        v-model="value"
        v-on:change="change"
        filterable
        placeholder="查询唱段"
        class="el-select"
    >
        <el-option-group v-for="(group, key) in options" :key="key" :label="key">
            <el-option v-for="item in group" :key="item" :label="item" :value="getPath(key, item)" />
        </el-option-group>
    </el-select>
</template>
<script setup lang="ts">
import { toRefs } from '@vue/reactivity';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

interface PropsType {
    [key: string]: Array<string>
}

const props = defineProps<{
    options: PropsType
}>();

const router = useRouter();
const value = ref('')
const { options } = toRefs(props);

const getPath = (path: string | number, name: string) => '/' + path + '/' + name

const change = (value: string) => router.push(value);
</script>

<style scoped>
.el-select {
    width: 100%;
}
.link {
    border-radius: 8px;
    color: #606266;
    display: flex;
    text-decoration: none;
}
.link.active {
    background-color: #409eff1a;
    color: #409eff;
}
</style>