<template>
  <div class="bg">
    <div class="inner">
      <div class="tags-containter">
        <el-tag
          style="margin: 4px; font-size: 20px"
          @close="removeLine(idx)"
          closable
          v-for="(item, idx) in lines"
          :key="`${item[0]}${item[1]}`"
          >{{ imgList[item[0]].name }}-{{ imgList[item[1]].name }}</el-tag
        >
      </div>
      <div class="zz">
        <transition-group name="list" tag="p">
          <div
            v-for="(points, idx) in linesTran"
            :style="{
              left: points.left,
              width: points.width,
              height: points.height,
            }"
            :key="`${idx}-line`"
            class="lines"
          ></div>
        </transition-group>
      </div>
      <span class="fruit" v-for="(item, idx) in imgList" :key="idx">
        <span
          :ref="`fruit${idx}`"
          :class="{ selected: currentIdxs.includes(idx) }"
          @click="select(idx, item.name)"
          >{{ item.name }}</span
        >
        <!-- <img
          :ref="`fruit${idx}`"
          :class="{ fruit: true, selected: currentIdxs.includes(idx) }"
          :src="item.url"
          @click="select(idx, item.name)"
        /> -->
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "kejian",
  data() {
    return {
      currentIdxs: [],
      lines: [],
      imgList: [
        {
          name: "🍎",
          url:
            "https://qnyedu-qd.cdn.ipalfish.com/edu/courseware/undefined/4402df5ddd94d1da2e0757366d67888a.png",
        },
        {
          name: "🍌",
          url:
            "https://qnyedu-qd.cdn.ipalfish.com/edu/courseware/undefined/06d02b693c0d503e76a79bd8d10be4fb.png",
        },
        {
          name: "🍐",
          url:
            "https://qnyedu-qd.cdn.ipalfish.com/edu/courseware/undefined/4f2843372d3b7285037ed7076d56f85f.png",
        },
        {
          name: "🍉",
          url:
            "https://qnyedu-qd.cdn.ipalfish.com/edu/courseware/undefined/ff0224a93349192a7aa65d8a2292f089.png",
        },
      ],
    };
  },
  computed: {
    linesTran() {
      return this.lines.map((points) => {
        const first = this.$refs[`fruit${points[0]}`][0].offsetLeft;
        const second = this.$refs[`fruit${points[1]}`][0].offsetLeft;
        return {
          left: Math.min(first, second) + 50 + "px",
          width: Math.abs(first - second) + "px",
          height: Math.abs(points[1] - points[0]) * 100 + "px",
        };
      });
    },
  },
  mounted() {},
  methods: {
    removeLine(idx) {
      const temp = [...this.lines];
      temp.splice(idx, 1);
      this.lines = [...temp];
    },
    select(idx) {
      if (this.currentIdxs.includes(idx)) {
        return;
      }
      this.currentIdxs = [...this.currentIdxs, idx].sort();
      if (this.currentIdxs.length === 2) {
        const hasLine = this.lines.some(
          (item) => JSON.stringify(item) === JSON.stringify(this.currentIdxs)
        );
        setTimeout(() => {
          !hasLine && this.lines.push([...this.currentIdxs]);
          this.currentIdxs = [];
        }, 200);
      }
    },
  },
};
</script>
<style scoped>
.tags-containter {
  position: absolute;
  top: -70px;
  font-size: 36px;
}
.zz {
  position: absolute;
  width: 100%;
  height: 45%;
  overflow: hidden;
  pointer-events: none;
}
.bg {
  height: 100vh;
  background: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.inner {
  margin: auto;
  width: 800px;
  height: 500px;
  border: 2px dashed #000;
  border-radius: 4px;
  display: flex;
  justify-content: space-around;
  position: relative;
}
.fruit {
  width: 100px;
  margin: auto;
  font-size: 100px;
  cursor: pointer;
}
.selected {
  box-shadow: 0 0 1px red;
}
.lines {
  position: absolute;
  border-radius: 100%;
  border-color: red;
  border-style: dashed;
  top: 100%;
  margin: auto;
  pointer-events: none;
  transform: translateY(-50%);
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>