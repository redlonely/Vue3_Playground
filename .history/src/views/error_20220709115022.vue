<template>
  <div class="page404">
    <!-- <img src="../assets/image/404_error.svg" alt="404" /> -->
    <!-- <img src="../assets/image/404.svg" alt="404" /> -->
    <div class="font">
      <div class="statusStyle">404</div>
      <div class="smallStyle">抱歉，你访问的页面不存在</div>
    </div>
    <!-- <el-button @click="goHome" > 回首页</el-button> -->
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const goHome = () => {
  useRouter().push("/Home");
};
</script>

<style lang="scss" scoped>
.page404 {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 3rem;
    animation: rotate 30s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .font {
    margin: 0.6rem 0;

    .statusStyle {
      margin-bottom: 0.2rem;
      color: #434e59;
      font-weight: 600;
      font-size: 0.4rem;
    }

    .smallStyle {
      margin-bottom: 0.2rem;
      color: rgba(0, 0, 0, 0.45);
      font-size: 0.2rem;
    }
  }
}
</style>
