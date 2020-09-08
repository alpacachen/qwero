<template>
  <div class="wrap">
    <div class="head">
      <el-avatar :size="64">{{user.name || '默认昵称'}}</el-avatar>
      总数：{{comments.length}}
    </div>
    <el-alert
      show-icon
      class="margin"
      v-for="comment in comments"
      :key="comment.id"
      :title="comment.content"
      type="info"
      @close="deleteComment(comment.id)"
    ></el-alert>
    <el-button type="primary" @click="addComment">添加评论</el-button>
    <el-button @click="changeName">随机昵称</el-button>
  </div>
</template>
<script>
import lowdb from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";
const adapter = new LocalStorage("db");
const db = lowdb(adapter);
export default {
  data() {
    return {
      comments: [],
      user: {},
    };
  },
  mounted() {
    db.defaults({ comments: [], user: {} }).write();
    this.refresh();
  },
  methods: {
    refresh() {
      const { comments, user } = db.value();
      this.comments = [...comments];
      this.user = user;
    },
    deleteComment(id) {
      db.get("comments").remove({ id }).write();
      this.refresh();
    },
    randomAccess(min, max) {
      return Math.floor(Math.random() * (min - max) + max);
    },
    decodeUnicode(str) {
      //Unicode显示方式是\u4e00
      str = "\\u" + str;
      str = str.replace(/\\/g, "%");
      //转换中文
      str = unescape(str);
      //将其他受影响的转换回原来
      str = str.replace(/%/g, "\\");
      return str;
    },
    getRandomName(NameLength) {
      let name = "";
      for (let i = 0; i < NameLength; i++) {
        let unicodeNum = "";
        unicodeNum = this.randomAccess(0x4e00, 0x9fa5).toString(16);
        name += this.decodeUnicode(unicodeNum);
      }
      return name;
    },
    changeName() {
      /*
       *@param Number NameLength 要获取的名字长度
       */
      let name = this.getRandomName(3);
      db.set("user.name", name).write();
      this.refresh();
    },
    addComment() {
      db.get("comments")
        .push({
          id: Math.floor(new Date().getTime() * Math.random()),
          content: "这是随机增加的评论" + this.getRandomName(5),
        })
        .write();
      this.refresh();
    },
  },
};
</script>
<style scoped>
.head {
  margin: 6px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.wrap {
  text-align: center;
}
.margin {
  margin: 6px 0;
}
</style>