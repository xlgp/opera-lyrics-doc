<template>
    <el-row v-for="(item, j) in data" :key="j">
        <el-col>
            {{ item }}
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps({
    data: Array
})

const { data } = toRefs(props);

</script>