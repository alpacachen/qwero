<template>
    <div class="wrap">
        <div>
            <div class="dev" ref="3-7">3.7</div>
            <div class="dev" ref="3-8">3.8</div>
        </div>
        <div v-if="body1Loaded && body2Loaded">
            <button class="button" @click="changeStatus">{{playStatus?'pause':'resume'}}</button>
        </div>
    </div>
</template>
<script>
    import Spineplayer3_7 from 'spineplayer/build/SpinePlayer3_7'
    import Spineplayer3_8 from 'spineplayer/build/SpinePlayer3_8'
    let body1 = null
    let body2 = null
    export default {
        name: 'spinePlayer',
        data(){
            return{
                // true play  false pause
                body1Loaded: false,
                body2Loaded: false,
                playStatus:true,
            }
        },
        mounted() {
            let spine3_7 = {"png":"https://qnyedu-hz.cdn.ipalfish.com/edu/c/spine/4edfacc16e591766e6823c93e2cdcfe1.png","json":"https://qnyedu-hz.cdn.ipalfish.com/edu/c/spine/c364f15d96e3e865a40948f14530a10e.json","atlas":"https://qnyedu-hz.cdn.ipalfish.com/edu/c/spine/b8e08876829123eed516465db61c4bdc.atlas"}
            let spine3_8 = {"png":"https://qnyedu-hz.cdn.ipalfish.com/edu/test/5ebe2ed8a166ad042e6534461667af47.png","json":"https://qnyedu-hz.cdn.ipalfish.com/edu/test/33e018e05e9a801a21af35f1be887a00.json","atlas":"https://qnyedu-hz.cdn.ipalfish.com/edu/test/bb870c027a9b45d4e7171312937615d4.atlas"}
            body1 = new Spineplayer3_7({
                parent: this.$refs['3-7'],
                pngUrl:spine3_7.png,
                atlasUrl:spine3_7.atlas,
                jsonUrl:spine3_7.json
            })
            body1.on('loaded',()=>{
                this.body1Loaded = true
                console.log(body1.getAnimationList())
                body1.play('2')
            })
            body2 = new Spineplayer3_8({
                parent: this.$refs['3-8'],
                pngUrl:spine3_8.png,
                atlasUrl:spine3_8.atlas,
                jsonUrl:spine3_8.json
            })
            body2.on('loaded',()=>{
                this.body2Loaded = true
                console.log(body2.getAnimationList())
                body2.play('1')
            })
        },
        methods:{
            changeStatus(){
                if(this.playStatus){
                    body1.pause()
                    body2.pause()
                }else {
                    body1.resume()
                    body2.resume()
                }
                this.playStatus = !this.playStatus;
            }
        }
    }
</script>
<style scoped>
    .button{
        width: 5rem;
    }
    .wrap{
        display: flex;
        justify-content: space-around;
    }
    .dev{
        border: 1px dashed;
        position: relative;
        width: 300px;
        height: 300px;
    }
</style>