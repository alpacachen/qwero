<template>
  <div id="app">
    <div class="heart">
      <div class="topLeft"></div>
      <div class="topRight"></div>
      <div class="bottom"></div>
    </div>
    <div style="overflow: hidden;">
      <p>
        <router-link to="/animate4phaser">animate4phaser</router-link>
      </p>
      <p>
        <router-link to="/spinePlayerPage">spinePlayerPage</router-link>
      </p>
      <p>
        <router-link to="/coconut">coconut</router-link>
      </p>
      <p>
        <router-link to="/text">text</router-link>
      </p>
      <p>
        <router-link to="/formDemo">formDemo</router-link>
      </p>
<!--      <p>-->
<!--        <router-link to="/404">text</router-link>-->
<!--      </p>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
.link{
  font-size: 20px;
  font-weight: bolder;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}
.heart {
  margin: 100px auto;
  width: 200px;
  height: 200px;
  /* border: 1px solid #0094ff; */
  position: relative;
  animation-name: shake;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
}

.heart div {
  /* border: 1px solid #0094ff; */
  width: 100%;
  height: 100%;
  position: absolute;
  background: pink;
  animation-name: shadow;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
}

.topLeft,
.topRight {
  border-radius: 100px 100px 0 0;
}

.topLeft {
  transform: translate(-50px, 0) rotate(-45deg);
}

.topRight {
  transform: translate(50px, 0) rotate(45deg);
}

.bottom {
  transform: translate(0, 64px) rotate(45deg) scale(0.9, 0.9);
}
/* 定义动画 */

@keyframes shake {
  from {
    transform: scale(0.9, 0.9);
  }
  to {
    transform: scale(1.1, 1.1);
  }
}

@keyframes shadow {
  from {
  }
  to {
    box-shadow: 0px 0px 50px pink;
  }
}
</style>
