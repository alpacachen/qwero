<template>
  <div class="wrap">
      <div id="example"></div>
      <div class="list">
          <ul>
              <li style="cursor: pointer" :key="item" @click="select(item)" v-for="item in nameList">{{item}}</li>
          </ul>
      </div>
  </div>
</template>

<script>
import { animate, list } from 'animate4phaser';
import Phaser from 'phaser';
export default {
    data(){
        return{
            nameList:[],
            image: null,
        }
    },
    mounted(){
        const self = this;
        const config = {
            type: Phaser.WEBGL,
            width: 800,
            height: 600,
            backgroundColor: '#2d2d2d',
            parent: 'example',
            scene: {
                preload,
                create,
                update
            }
        };
        // const game = new Phaser.Game(config);
        new Phaser.Game(config);
        function preload() {
            this.load.image('img', 'https://b00.cdn.ipalfish.com/0/img/1c/64/85ff8cab1ec6c055f05bc51a2b1f');
        }

        function create() {
            self.image = this.add.image(400, 300, 'img');
        }

        function update() {}
        const animationList = list;
        this.nameList = Object.keys(animationList)

    },
    methods:{
        select(value){
            animate({
                targets:this.image,
                name:value,
            })
        }
    },
}
</script>

<style scoped>
    .list{
        height: 90vh;
        overflow: auto;
    }
    .wrap{
        display: flex;
        justify-content: space-around;
    }
</style>