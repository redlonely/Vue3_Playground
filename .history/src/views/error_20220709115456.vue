<template>
  <div class="not_found mb-15 flex flex-col items-center justify-center">
    <img src="https://cdn.redlonely.com/img/404.png" alt="404" />
    <div class="font">
      <div class="statusStyle">404</div>
      <div class="smallStyle">抱歉，你访问的页面不存在</div>
    </div>
    <button class='btn' @click="goHome"> 回首页</button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const { push } = useRouter()

const goHome = () => {
  push("/");
};

</script>

<style lang="scss" scoped>
.not_found {
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
