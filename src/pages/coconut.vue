<template>
    <div class="wrap">
        <div v-show="!preview">
            <p>点击文字进行编辑</p>
            <div ref="ys" id="yeshu" style="width: 300px;">
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
        </div>
        <div v-show="preview">
            <p style="color: orangered">长按/右键保存至本地</p>
            <img style="width: 300px;margin: auto;" class="block" :src="dataUrl" />
        </div>
        <button @click="createPost">{{preview?'返回编辑':'预览'}}</button>

    </div>
</template>
<script>
    import html2canvas from 'html2canvas';
    export default {
        name: 'Coconut',
        data(){
            return{
                preview:false,
                dataUrl:'',
            }
        },
        methods:{
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
        padding-bottom: 24px;
        .block{
            display: block;
        }
        text-align: center;
        #panel-preview {
            display: none;
            text-align: center;
            margin: 0 auto;
            background-color: #ffffff;
        }

        #panel-edit {
            font-family: Arial, sans-serif;
            /* width: 300px;
            height: 630px;
            font-size: 30px; */
            margin: 0 auto;
        }

        #yeshu {
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
        }

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
</style>