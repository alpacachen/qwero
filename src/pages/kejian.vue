<template>
  <div class="bg">
    <!-- 女朋友面试去主讲需要课件，但是我俩都不会做ppt，所以用代码帮写了一个，时间很仓促，此代码不代表我真实水平，懒得优化了😓 -->
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
      <div class="tags-containter-bottom">
        <el-tag
          type="danger"
          style="margin: 4px; font-size: 20px"
          @close="removeLine(idx, 'bottom')"
          closable
          v-for="(item, idx) in bottomLines"
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
              borderColor: points.borderColor,
            }"
            :key="`${idx}-line`"
            class="lines"
          ></div>
        </transition-group>
      </div>
      <div class="zz-bottom">
        <transition-group name="list" tag="p">
          <div
            v-for="(points, idx) in bottomLinesTran"
            :style="{
              left: points.left,
              width: points.width,
              height: points.height,
              borderColor: points.borderColor,
            }"
            :key="`${idx}-bottomLine`"
            class="lines-bottom"
          ></div>
        </transition-group>
      </div>
      <span class="fruit" v-for="(item, idx) in imgList" :key="idx">
        <i class="text-i">{{idx + 1}}</i>
        <span
          :ref="`fruit${idx}`"
          :class="{ selected: currentIdxs.includes(idx) }"
          @click="select(idx, item.name)"
          >{{ item.name }}</span
        >
      </span>
      <div class="arrow" style="left: 20px">--------></div>
      <div class="arrow" style="transform: rotate(180deg);right: 20px; bottom: 0">--------></div>
      <div class="tag-bottom">
        <el-button @click="dialogVisible = true">查看提示</el-button>
      </div>
      <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          @close="dialogVisible = false"
      >
        <el-tag>1-2</el-tag>
        <el-tag>1-3</el-tag>
        <el-tag>1-4</el-tag>
        <br />
        <br />
        <el-tag>2-3</el-tag>
        <el-tag>2-4</el-tag>
        <br />
        <br />
        <el-tag>3-4</el-tag>
      </el-dialog>
    </div>

  </div>
</template>
<script>
export default {
  name: "kejian",
  data() {
    return {
      dialogVisible: false,
      currentIdxs: [],
      lines: [],
      bottomLines: [],
      imgList: [
        {
          name: "🍎",
          color: "red",
          url:
            "https://qnyedu-qd.cdn.ipalfish.com/edu/courseware/undefined/4402df5ddd94d1da2e0757366d67888a.png",
        },
        {
          name: "🍌",
          color: "lightyellow",
          url:
            "https://qnyedu-qd.cdn.ipalfish.com/edu/courseware/undefined/06d02b693c0d503e76a79bd8d10be4fb.png",
        },
        {
          name: "🍐",
          color: "lightgreen",
          url:
            "https://qnyedu-qd.cdn.ipalfish.com/edu/courseware/undefined/4f2843372d3b7285037ed7076d56f85f.png",
        },
        {
          name: "🍉",
          color: "green",
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
          borderColor: this.imgList[points[0]].color,
        };
      });
    },
    bottomLinesTran() {
      return this.bottomLines.map((points) => {
        const first = this.$refs[`fruit${points[0]}`][0].offsetLeft;
        const second = this.$refs[`fruit${points[1]}`][0].offsetLeft;
        return {
          left: Math.min(first, second) + 50 + "px",
          width: Math.abs(first - second) + "px",
          height: Math.abs(points[1] - points[0]) * 100 + "px",
          borderColor: this.imgList[points[0]].color,
        };
      });
    },
  },
  mounted() {},
  methods: {
    removeLine(idx, type) {
      if (type === "bottom") {
        const temp = [...this.bottomLines];
        temp.splice(idx, 1);
        this.bottomLines = [...temp];
      } else {
        const temp = [...this.lines];
        temp.splice(idx, 1);
        this.lines = [...temp];
      }
    },
    select(idx) {
      if (this.currentIdxs.includes(idx)) {
        return;
      }
      this.currentIdxs = [...this.currentIdxs, idx];
      if (this.currentIdxs.length === 2) {
        if (this.currentIdxs[0] < this.currentIdxs[1]) {
          // 上面
          const hasLine = this.lines.some(
            (item) => JSON.stringify(item) === JSON.stringify(this.currentIdxs)
          );
          setTimeout(() => {
            !hasLine && this.lines.push([...this.currentIdxs]);
            this.currentIdxs = [];
          }, 200);
        } else {
          // 下面
          const hasLine = this.bottomLines.some(
            (item) => JSON.stringify(item) === JSON.stringify(this.currentIdxs)
          );
          setTimeout(() => {
            !hasLine && this.bottomLines.push([...this.currentIdxs]);
            this.currentIdxs = [];
          }, 200);
        }
      }
    },
  },
};
</script>
<style scoped>
.tag-bottom{
  position: absolute;
  bottom: -56px;
}
.text-i{
  font-size: 20px;
  position: absolute;
}
.arrow{
  position: absolute;
  font-size: 38px;
  letter-spacing: -4px;
}
.tags-containter {
  position: absolute;
  top: -90px;
  font-size: 36px;
}
.tags-containter-bottom {
  position: absolute;
  top: -50px;
  font-size: 36px;
}
.zz {
  position: absolute;
  width: 100%;
  height: 45%;
  overflow: hidden;
  pointer-events: none;
}
.zz-bottom {
  position: absolute;
  width: 100%;
  height: 45%;
  overflow: hidden;
  pointer-events: none;
  bottom: 0;
}
.bg {
  height: 100vh;
  background: darkgrey;
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
.lines-bottom {
  position: absolute;
  border-radius: 100%;
  border-color: red;
  border-style: dashed;
  top: 0%;
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
