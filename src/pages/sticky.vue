<template>
  <div>
    <el-card class="card" shadow="hover">
      <div slot="header">
        <span>例子1</span>
      </div>
      <div ref="container1" class="container">
        <div class="content"></div>
        <div class="content"></div>
        <p class="sticky">这里是标题</p>
        <div class="content"></div>
        <div class="content"></div>
        <div class="content"></div>
        <div class="content"></div>
      </div>
    </el-card>
    <el-card class="card" shadow="hover">
      <div slot="header">
        <span>例子2</span>
      </div>
      <div ref="container2" class="container">
        <div class="m-2">
          <p class="sticky">标题1</p>
          <div class="content"></div>
          <div class="content"></div>
        </div>
        <div class="m-2">
          <p class="sticky">标题2</p>
          <div class="content"></div>
          <div class="content"></div>
        </div>
        <div class="m-2">
          <p class="sticky">标题3</p>
          <div class="content"></div>
          <div class="content"></div>
        </div>
        <div class="m-2">
          <p class="sticky">标题4</p>
          <div class="content"></div>
          <div class="content"></div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import { watchSticky } from "../utils/stickyEvent";
export default {
  mounted() {
    document.addEventListener("sticky-change", function (e) {
      const { detail } = e;
      const { target, status } = detail;

      target.classList.toggle("shadow", status);
    });
    watchSticky(this.$refs["container1"].querySelector(".sticky"));

    Array.from(
      this.$refs["container2"].querySelectorAll(".sticky")
    ).forEach((dom) => watchSticky(dom, this.$refs["container2"]));
  },
};
</script>
<style scoped>
.shadow {
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12),
    0 3px 5px -1px rgba(0, 0, 0, 0.4);
}
.m-2 {
  margin: 2em;
  background: #ffffff;
}
.sticky {
  position: sticky;
  margin: 0;
  padding: 0;
  top: 40px;
}
.card {
  max-width: 375px;
  margin: 2em auto;
}
.container {
  height: 25vh;
  background-color: lightblue;
  overflow-y: scroll;
}
.content {
  height: 20vh;
}
</style>