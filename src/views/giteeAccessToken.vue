<template>
  <el-container class="container">
    <el-header class="header"
      ><el-page-header content="Gitee Access Token" @back="goBack"
    /></el-header>
    <el-main>
      <label for="">Gitee Access Token</label>
      <el-input v-model="inputToken" class="token-input" :disabled="disabled" />
      <el-button :type="buttonInfo.type" @click="handleChange">{{
        buttonInfo.text
      }}</el-button>
      <el-button type="info" @click="handleCancelChange" v-show="!disabled"
        >取消</el-button
      >
    </el-main>
  </el-container>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from "vue";
import { useGiteeAccessTokenStore } from "../stores/accessToken";
import { useRouter } from "vue-router";
const giteeStore = useGiteeAccessTokenStore();
const token = ref("");

const inputToken = ref("");

const disabled = ref(true);

onMounted(() => {
  token.value = giteeStore.data;
  inputToken.value = token.value;
});

const handleChange = () => {
  disabled.value = !disabled.value;
  token.value = inputToken.value;

  giteeStore.set(token.value);
};

const router = useRouter();
const goBack = () => {
  router.back();
};

const handleCancelChange = () => {
  disabled.value = true;
  inputToken.value = token.value;
};

const buttonInfo = computed(() => {
  if (disabled.value) {
    return { type: "primary", text: "编辑" };
  }
  return { type: "success", text: "保存" };
});
</script>

<style>
.container {
  width: 1200px;
  margin: auto;
}
.token-input {
  width: 600px;
  margin: 0 10px;
}
.el-page-header {
  padding-top: 18px;
}
</style>
