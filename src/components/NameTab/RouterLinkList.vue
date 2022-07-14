<template>
    <el-row v-for="(item, j) in data" :key="j">
        <el-col>
            <router-link :to="path + item" class="link" active-class="active" exact>{{ item }}</router-link>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';

const props = defineProps({
    data: Array,
    parent: String
})

const { data, parent } = props;

const path = computed(() => '/' + parent + '/');

</script>

<style scoped>
.link {
    padding: 0.5rem 2rem 0.5rem 1.5rem;
    line-height: 1.5;
    font-size: 0.9rem;
    margin: 0 8px;
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