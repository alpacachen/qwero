<template>
<div>
    111222
    <canvas ref="canvas"></canvas>
</div>
</template>

<script>
export default {
    mounted() {
        this.$nextTick(()=>{
            let ctx = this.$refs['canvas'].getContext('2d')
            let a = ctx.getImageData(0,0,1,2);
            console.log(a);
        })
    }
}
</script>

<style>

</style>