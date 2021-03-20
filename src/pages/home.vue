<template>
  <div id="app">
    <div id="svg"></div>
    <div style="overflow: hidden;">
      <p>
        <router-link to="http://www.qwero.cn/react/index.html">可达鸭</router-link>
      </p>
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
      <p>
        <router-link to="/sticky">sticky</router-link>
      </p>
      <p>
        <router-link to="/kejian">kejian</router-link>
      </p>
      <!--      <p>-->
      <!--        <router-link to="/404">text</router-link>-->
      <!--      </p>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    let s = window.Snap().attr({
      viewBox: "0 0 100 100",
    });
    document.getElementById("svg").appendChild(s.node);
    let pathData = [];
    for (let i = 0; i <= 20; i++) {
      if (i < 4 || i > 16) {
        pathData.push(5 * i, 50);
      } else {
        let y = 50 + (i % 2 ? 1 : -1) * Math.random() * 25;
        pathData.push(5 * i, y);
      }
    }
    let pathString = "";
    for (let index = 0; index < pathData.length; index += 2) {
      pathString += `${index ? "L" : "M"} ${pathData[index]} ${
        pathData[index + 1]
      }`;
    }
    let p = s.path(pathString).attr({
      stroke: "pink",
      fill: "white",
    });

    let circle = s.circle(0, 50, 1).attr({ fill: "white" });
    var length = window.Snap.path.getTotalLength(p);
    function loop() {
      window.Snap.animate(
        0,
        length,
        function (val) {
          var point = window.Snap.path.getPointAtLength(p, val);
          circle.attr({
            cx: point.x,
            cy: point.y,
          });
        },
        3000,
        window.mina.ease,
        loop
      );
    }
    loop()
  },
};
</script>

<style scoped>
#svg {
  width: 400px;
  height: 400px;
  border: 1px solid;
  margin: auto;
}
.link {
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
