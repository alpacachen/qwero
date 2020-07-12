<template>
    <div class="wrap">
        <div v-show="!preview">
            <p>点击文字进行编辑</p>
            <p>
                <button @click="selectModel(1)">模板1</button>
                <button @click="selectModel(2)">模板2</button>
            </p>
            <div v-if="model === 1" ref="ys" class="yeshu" style="width: 300px;">
                <div class="yeshu-center">
                    <div class="yeshu-title" contenteditable="true">
                        椰子特产在海南
                    </div>
                    <div class="yeshu-inner">
                        <div class="yeshu-zhengzong" contenteditable="true">
                            正宗
                        </div>
                        <div class="yeshu-brand" contenteditable="true">
                            椰树
                        </div>
                        <div class="yeshu-year" contenteditable="true">
                            29年
                        </div>
                        <div class="yeshu-island" contenteditable="true">
                            坚持在海南岛
                        </div>
                        <div class="yeshu-fresh" contenteditable="true">
                            用新鲜椰子肉
                        </div>
                        <div class="yeshu-xianzha" contenteditable="true">
                            鲜榨
                        </div>
                    </div>
                </div>
                <div class="yeshu-no-addon">
                    <p contenteditable="true">不用椰浆</p>
                    <p contenteditable="true">不加香精当生榨</p>
                </div>
            </div>
            <div v-if="model === 2" ref="ys" class="yeshu2" style="width: 300px;">
                <div class="yeshu-center">
                    <div class="yeshu-title" contenteditable="true">
                        正宗椰树牌椰汁
                    </div>
                    <div class="yeshu-image">
                        <div class="top">
                            <div class="text1" contenteditable="true">正宗椰汁 椰树牌</div>
                            <div class="text2" contenteditable="true">我是 徐冬冬</div>
                        </div>
                        <div class="bottom">
                            <div class="text" contenteditable="true">
                                我从小喝到大
                            </div>
                        </div>
                        <img :src="img"/>
                    </div>
                    <div class="yeshu-inner">
                        <div class="yeshu-jianchi" contenteditable="true">
                            31年坚持
                        </div>
                        <div class="yeshu-brand" contenteditable="true">
                            在海南岛用新鲜椰肉
                        </div>
                        <div class="yeshu-xianzha" contenteditable="true">
                            鲜榨
                        </div>
                        <div class="yeshu-no-addon">
                            <p contenteditable="true">不用椰浆不加香精</p>
                            <p contenteditable="true">当生榨骗人</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="preview">
            <p style="color: orangered">长按/右键保存至本地</p>
            <img style="width: 300px;margin: auto;" class="block" :src="dataUrl" />
        </div>
        <br />
        <div v-if="model === 2 && preview === false">
            更换图片：<input type="file" @change="changeImage">
        </div>
        <br />
        <button @click="createPost">{{preview?'返回编辑':'预览'}}</button>
    </div>
</template>
<script>
    import img from './2.png'
    import html2canvas from 'html2canvas';
    export default {
        name: 'Coconut',
        data(){
            return{
                preview:false,
                dataUrl:'',
                model:2,
                // style:{
                //     'background-image': `url(${img})`
                // },
                img:img,
            }
        },
        computed:{
            style(){
                return `background-image: url(${this.img})`
            }
        },
        methods:{
            changeImage(event){
                const file = event.target.files[0];
                let reader = new FileReader()
                reader.addEventListener("load", () => {
                    console.log(reader,11122)
                    this.img = reader.result;
                }, false);
                reader.readAsDataURL(file)
            },
            selectModel(number){
                this.model = number;
            },
             async createPost(){
                 window.pageYoffset = 0;
                 document.documentElement.scrollTop = 0;
                 document.body.scrollTop = 0;
                 if(!this.preview){
                     let canvas = await html2canvas(this.$refs.ys);
                     this.dataUrl = canvas.toDataURL("image/png",1);
                     this.preview = true;
                 }else {
                     this.preview = false
                 }
            }
        }
    }
</script>
<style lang="less">
    .wrap{
        padding-bottom: 48px;
        .block{
            display: block;
        }
        text-align: center;
        .yeshu2{
            background: #000000;
            margin: 0 auto;
            .yeshu-center {
                margin: 0 10px;
                background-color: #FEEF50;
                padding: 0 10px;
                .yeshu-title {
                    background: #FD0000;
                    color: #ffffff;
                    height: 5%;
                    font-size: 33px;
                }
                .yeshu-image {
                    background-color: #0021FC;
                    position: relative;
                    overflow: hidden;
                    img{
                        position: absolute;
                        max-width: 90%;
                        max-height: 90%;
                        top: 0;
                        left: 24px;
                        margin: auto;
                        bottom: 0;
                        right: 0;
                        z-index: 0;
                        pointer-events: none;
                    }
                    .bottom{
                        text-align: left;
                        margin-bottom: 8px;
                        position: relative;
                        z-index: 1;
                        .text{
                            font-size: 30px;
                            width: 30px;
                            line-height: 1;
                            color: #FEEF50;
                            background: #FD0000;
                            border: 2px solid #ffffff;
                            border-radius: 4px;
                            margin: 0 4px;
                            padding: 2px;
                        }
                    }
                    .top{
                        display: flex;
                        padding: 4px 0;
                        position: relative;
                        z-index: 1;
                        .text1{
                            color: #ffffff;
                            font-size: 14px;
                            width: 20px;
                            line-height: 1;
                        }
                        .text2{
                            color: #FEEF50;
                            font-size: 16px;
                            width: 20px;
                            line-height: 1.3;
                            font-weight: 600;
                        }
                    }
                }
                .yeshu-inner{
                    div{
                        line-height: 1;
                    }
                    .yeshu-jianchi{
                        background: red;
                        color: #fff;
                        font-size: 60px;
                        font-weight: 600;
                        margin: 2.2px -2.2px;
                        text-shadow: -1.2px -1.2px 0 #000,
                            1.2px -1.2px 0 #000,
                        -1.2px 1.2px 0 #000,
                        1.2px 1.2px 0 #000;
                    }
                    .yeshu-brand{
                        color: #FD0000;
                        font-size: 29px;
                        width: calc(100% + 4.4px);
                        margin: auto;
                        position: relative;
                        left: -4.4px;
                    }
                    .yeshu-xianzha {
                        background: #0021FC;
                        color: #FEEF50;
                        font-size: 120px;
                        text-shadow: -1.2px -1.2px 0 #000,
                            1.2px -1.2px 0 #000,
                        -1.2px 1.2px 0 #000,
                        1.2px 1.2px 0 #000;
                    }
                }
                .yeshu-no-addon {
                    background-color: #FD0000;
                    padding: 3px 0 10px 0;
                    color: #ffffff;
                }
                .yeshu-no-addon > p {
                    line-height: 1;
                    margin: 0;
                    font-size: 40px;
                }
                .yeshu-no-addon > p:first-child {
                    font-size: 30px;
                }
            }
        }
        .yeshu {
            width: 100%;
            height: 100%;
            /* width: auto;
            height: 0; */
            margin: 0 auto;
            background-color: #000;
            border: 2px solid #FEEF50;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            padding: 6px 0;

            font-weight: bold;
            text-align: center;
            line-height: 1;
            .yeshu-center {
                margin: 0 12px;
                background-color: #FEEF50;
                padding: 3px;
            }

            .yeshu-title {
                color: #000;
                height: 5%;
                font-size: 33px;
            }
            .yeshu-inner {
                background-color: #0021FC;
                border: 1.2px solid #000000;
                color: #ffffff;
                padding: 1.2px 1.2px 12px;
            }
            .yeshu-zhengzong {
                font-size: 33px;
                vertical-align: baseline;
                margin: 3px 0;
            }
            .yeshu-brand {
                border: 1.2px solid #FEEF50;
                border-radius: 15px;
                background-color: #FD0000;
                padding: 3px;

                font-size: 108px;
            }
            .yeshu-year {
                margin: 3px 0;
                text-shadow: -1.2px -1.2px 0 #000,
                    1.2px -1.2px 0 #000,
                -1.2px 1.2px 0 #000,
                1.2px 1.2px 0 #000;
                font-size: 3.3rem;
            }
            .yeshu-island {
                color: #FEEF50;
                font-size: 36px;
            }
            .yeshu-fresh {
                border: 2.4px solid #FD0000;
                border-radius: 3px;
                background-color: #FEEF50;
                color: #FD0000;
                margin: 3px -3px;
                padding: 3px;

                font-size: 36px;
            }
            .yeshu-xianzha {
                color: #FEEF50;
                font-size: 120px;
                text-shadow: -1.2px -1.2px 0 #000,
                    1.2px -1.2px 0 #000,
                -1.2px 1.2px 0 #000,
                1.2px 1.2px 0 #000;
            }
            .yeshu-no-addon {
                border: 1.8px solid #FEEF50;
                border-radius: 9px;
                background-color: #FD0000;
                padding: 3px;
                margin: -3px 3px;
                color: #ffffff;
            }
            .yeshu-no-addon > p {
                line-height: 1;
                margin: 0;
                font-size: 36px;
            }
            .yeshu-no-addon > p:first-child {
                font-size: 45px;
            }
        }
    }
</style>