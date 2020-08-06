<template>
  <div>
    <p>文案：<input @blur="blur" v-model="text" placeholder="请输入文字" /></p>
    <p>间隔：<input @blur="blur" v-model="gap" type="number" /></p>
    <canvas hidden="hidden" width="10000" ref="canvas"></canvas>
    <br />
    <canvas ref="canvas2" :width="width"></canvas>
  </div>
</template>
<script>
  class MoveArc{
    constructor(position,context2,duration=120) {
      this.position = position;
      this.context2 = context2;
      this.randomX = Math.random()*1000;
      this.randomY = Math.random()*1000;
      this.startX = this.position.x + this.randomX;
      this.startY = this.position.y + this.randomY;
      this.duration = duration;
      this.gapX = this.randomX/this.duration
      this.gapY = this.randomY/this.duration
      this.step = 0;
    }
    draw(){
      this.context2.beginPath();
      this.context2.arc(this.startX - this.gapX * this.step, this.startY - this.gapY * this.step, 2, 0,2*Math.PI)
      this.context2.fill();
      this.context2.closePath();
      if(this.step !== this.duration){
        this.step++
      }
    }
  }
export default {
  name: "MyText",
  data(){
      return{
        num:0,
          div:null,
          str:null,
          text:'',
          width:300,
        raf:null,
        gap:10,
      }
  },
  mounted() {
    this.context = this.$refs.canvas.getContext("2d");
    this.context.textBaseline = "top";
    this.context.fillStyle = "#fff";
    this.context.fillRect(0, 0, 300, 150);
    // 设置字体
    this.context.font = "150px Helvetica Neue, Helvetica, Arial, sans-serif";
    // 设置颜色
    this.context.fillStyle = "red";

    // 第二个canvas
    this.context2 = this.$refs.canvas2.getContext('2d')
  },
  methods:{
    blur(){
      if(this.text){
        window.cancelAnimationFrame(this.raf);
        this.context.clearRect(0,0,10000,150)
        this.context2.clearRect(0,0,10000,150)
        let width = Math.floor(this.context.measureText(this.text).width) + 1;
        this.width = width;
        this.context.fillText(this.text, 0, 0);
        let imgData = this.context.getImageData(0, 0, width, 150);
        let dotList = [];
        for (let x = 0; x < imgData.width; x += +this.gap) {
          for (let y = 0; y < imgData.height; y += +this.gap) {
            let i = (y * imgData.width + x) * 4;
            // 判断像素点是不是红色
            if (
                    imgData.data[i] === 255 &&
                    imgData.data[i + 1] === 0 &&
                    imgData.data[i + 2] === 0 &&
                    imgData.data[i + 3] === 255
            ) {
              dotList.push({x,y});
            }
          }
        }
        // 绘制
        setTimeout(()=>this.render(dotList),1);
      }
    },
    render(dotList){
      this.arcList = [];
      for(let i = 0; i<dotList.length; i++){
        let dot = dotList[i];
        this.arcList.push(new MoveArc(dot, this.context2, 30));
      }
      this.loop();
    },
    loop(){
      this.num = this.num + 1;
      if(this.num%2){
        this.context2.fillStyle = "#000";
        this.context2.fillRect(0, 0, this.width, 150);
        this.context2.fillStyle = '#fff';
        for (let i = 0; i<this.arcList.length; i++){
          let arc = this.arcList[i];
          arc.draw();
        }
      }
      this.raf = window.requestAnimationFrame(this.loop)
    }
  }
};
</script>
<style></style>