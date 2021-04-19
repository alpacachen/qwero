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
          <div class="content"></div>
          <div class="content"></div>
          <p class="sticky">标题1</p>
          <div class="content"></div>
          <div class="content"></div>
        </div>
        <div class="m-2">
          <div class="content"></div>
          <div class="content"></div>
          <p class="sticky">标题2</p>
          <div class="content"></div>
          <div class="content"></div>
        </div>
        <div class="m-2">
          <div class="content"></div>
          <div class="content"></div>
          <p class="sticky">标题3</p>
          <div class="content"></div>
          <div class="content"></div>
        </div>
        <div class="m-2">
          <div class="content"></div>
          <div class="content"></div>
          <p class="sticky">标题4</p>
          <div class="content"></div>
          <div class="content"></div>
        </div>
      </div>
    </el-card>
    <el-card class="card" shadow="hover">
      <div slot="header">
        <span>例子3</span>
      </div>
      <div ref="container3" class="container">
        <div class="content"></div>
        <div class="content"></div>
        <p style="bottom: 10px" class="sticky">bottom</p>
        <div class="content"></div>
        <div class="content"></div>
        <div class="content"></div>
        <div class="content"></div>
      </div>
    </el-card>
  </div>
</template>
<script>
import { watchSticky } from "@/utils/stickyEvent";
export default {
  mounted() {
    const cb = function (target, status) {
      target.classList.toggle("shadow", status);
    }

    watchSticky(this.$refs["container1"].querySelector(".sticky")).on('sticky-change', cb);
    watchSticky(this.$refs["container3"].querySelector(".sticky")).on('sticky-change', cb);

    Array.from(
      this.$refs["container2"].querySelectorAll(".sticky")
    ).forEach((dom) => watchSticky(dom, this.$refs["container2"]).on('sticky-change', cb));
  },
};
</script>
<style scoped>
.shadow {
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14); /*firefox*/
  -webkit-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14); /*safari或chrome*/
}
.m-2 {
  margin: 2em;
  background: #ffffff;
}
.sticky {
  position: sticky;
  margin: 0;
  padding: 0;
  top: 10px;
  bottom: 10px;
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
