<template>
  <div>
    <section class="wrap-absolute">
      <div class="left"></div>
      <div class="center"></div>
      <div class="right"></div>
    </section>
    <br />
    <section class="wrap-flex">
      <div class="left"></div>
      <div class="center"></div>
      <div class="right"></div>
    </section>
  </div>
</template>
<style lang='less'>
.wrap-flex {
  display: flex;
  div {
    height: 100px;
  }
  .left {
    width: 100px;
    background: black;
  }
  .right {
    width: 100px;
    background: black;
  }
  .center {
    flex-grow: 1;
    background: blue;
  }
}
.wrap-absolute {
  position: relative;
  overflow: hidden;
  div {
    height: 100px;
  }
  .left {
    width: 100px;
    background: black;
    float: left;
  }
  .right {
    width: 100px;
    background: black;
    float: right;
  }
  .center {
    position: absolute;
    background: blue;
    left: 100px;
    right: 100px;
  }
}
</style>
<script>
export default {
  mounted() {
    // guibing
    let arr = [3, 21, 4, 5, 67, 84, 2, 1, 3, 6, 3];
    function merge(a,b){
      // console.log(a,b)
      let al = a.length
      let bl = b.length
      let ai = 0
      let bi = 0
      let res= []
      while(ai < al && bi < bl){
        if(a[ai] < b[bi]){
          res.push(a[ai])
          ai++
        }else{
          res.push(b[bi])
          bi++
        }
      }
      while(ai<al){
        res.push(a[ai])
        ai++
      }
      while(bi<bl){
        res.push(b[bi])
        bi++
      }
      return res
    }
    function mergeSort(arr){
      if(arr.length <= 1){
        return arr
      }
      let mid = Math.floor(arr.length/2)
      let left = arr.slice(0,mid)
      let right = arr.slice(mid)
      return merge(mergeSort(left),mergeSort(right))
    }
    console.log(mergeSort(arr))
    // function f(cb,ms){
    //   let start = 0
    //   return function(){
    //     let now = new Date().getTime()
    //     if(now - start > ms){
    //       start = now
    //       cb()
    //     }
    //   }
    // }

    // 'fnghfnhf' => 'fnhfnhf'
    // function fn(str){
    //   let idx = 0
    //   let min = null
    //   let obj = {}
    //   while(idx< str.legth){
    //     let letter = str[idx]
    //     if(obj[letter]){
    //       obj[letter] = obj[letter] + 1
    //     }else{
    //       obj[letter] = 1
    //     }
    //     idx++
    //   }
    //   min = Math.min(...Object.values())
    //   let list = Object.keys().filter(key => obj[key] === min)

    // }

    // 订阅 发布
    // class Watch {
    //   constructor() {
    //     this.events = {};
    //   }
    //   // 订阅
    //   on(key, func) {
    //     if (!this.events[key]) {
    //       this.events[key] = [func];
    //     } else {
    //       this.events[key].push(func);
    //     }
    //   }
    //   // 发布
    //   emit(key, val) {
    //     if (this.events[key]) {
    //       this.events[key].forEach((fn) => {
    //         fn(val);
    //       });
    //     }
    //   }
    //   // 取消
    //   remove(key, func = null) {
    //     if (func) {
    //       this.events[key] = this.events[key].filter((f) => f !== func);
    //     } else {
    //       this.events[key] = null;
    //     }
    //   }
    //   //once
    //   once(key, func) {
    //     let self = this
    //     let _f = function(val){
    //       func(val)
    //       self.remove(key, _f)
    //     }
    //     this.on(key, _f)
    //     // this.on(key, (val) => {
    //     //   func(val);
    //     //   this.remove(key, func);
    //     // });
    //   }
    // }

    // function Promise2(fn){
    //   let _this = this
    //   _this.$$status = 'pending'
    //   _this.successcb = null
    //   _this.failcb = null
    //   function resolve(params){
    //     if(_this.$$status === 'pending'){
    //       _this.$$$$status = 'full'
    //       _this.successcb(params)
    //     }
    //   }
    //   function reject(params){
    //     if(_this.$$status === 'pending'){
    //       _this.$$status = 'fail'
    //       _this.failcb(params)
    //     }
    //   }
    //   fn(resolve.bind(this), reject.bind(this))
    // }
    // Promise2.prototype.then = function(full, fail){
    //   this.successcb = full
    //   this.failcb = fail
    // }
    // class Stack{
    //   constructor(){
    //     this.stack = []
    //   }
    //   push(i){
    //     this.stack.push(i)
    //   }
    //   pop(){
    //     return this.stack.pop()
    //   }
    // }

    // Function.prototype.bind2 = function(){
    //   let context = [...arguments][0]
    //   let args = [...arguments].slice(1)
    //   let fn = this
    //   return function(){
    //     fn.apply(context,[...args, ...arguments])
    //   }
    // }

    // '122333444333111322244' => '123431324‘
    // let str = "122333444333111322244";
    // function fn(arr1, arr2) {
    //   // return arr1.filter(item => arr2.indexOf(item) !== -1)
    //   // let letter = s[0];
    //   // let idx = 1
    //   // let res = s[0]
    //   // while(idx < s.length){
    //   //   let item = s[idx]
    //   //   if(item !== letter){
    //   //     res += item
    //   //     letter = item
    //   //   }
    //   //   idx++
    //   // }
    //   // return res;
    // }

    // let node = {id:1, parentid:2}
    // let arr = [
    //   { id: 2, parentid: null },
    //   { id: 3, parentid: 2 },
    //   { id: 4, parentid: 2 },
    //   { id: 5, parentid: 2 },
    // ];
    // function find(arr) {
    //   let map = {};
    //   let top = null;
    //   for (let index = 0; index < arr.length; index++) {
    //     const element = arr[index];
    //     map[element.id] = { ...element, children: [] };
    //     if (element.parentid === null) top = map[element.id];
    //   }
    //   for (let index = 0; index < array.length; index++) {
    //     let { parentid } = array[index];
    //     if(parentid){
    //       map[parentid].children.push(array[index]);
    //     }
    //   }
    // }

    // function find(arr, id=null) {
    //   let node = arr.filter((item) => item.parentid === id)[0];
    //   let list = []
    //   for (let i = 0; i < arr.length; i++) {
    //     if(arr[i].parentid === node.id){
    //       list.push(find(arr ,arr[i].id))
    //     }
    //   }
    //   return{
    //     id,
    //     children:list
    //   }
    // }

    // let cb = (data) => console.log(data);
    // function jsonp(url){
    //   let dom = document.createElement('script')
    //   let promise = new Promise((resolve)=>{
    //     dom.onload = ()=>{
    //       resolve(cb(dom.data))
    //     }
    //   })
    //   dom.src = url+'cb=cb'
    //   return promise
    // }

    // let num = 1234567881
    // function fn(num){
    //   let str = String(num)
    //   return str.split('').reverse().reduce((prev,curr,index)=>{
    //     return (index%3?curr:(curr+','))+prev;
    //   })
    // }
    // console.log(fn(num))

    // let Single = (function (){
    //   let instace = null
    //   class _S {
    //     constructor(){
    //       this.name = 'chen'
    //       if(!instace){
    //         instace = this
    //       }
    //       return instace
    //     }
    //     changeName(str){
    //       this.name = str
    //     }
    //   }
    //   return _S;
    // })()
    // let A = new Single()
    // let B = new Single()
    // A.changeName('hahah')
    // console.log(A)
    // console.log(B)
    // console.log(A===B)

    //代理模式 图片预加载  缓存
    // let addImage = (src) => {
    //   document.getElementById("XXX").src = src;
    // };
    // let imgProxy = (src) => {
    //   let img = new Image();
    //   img.onload = () => {
    //     addImage(src);
    //   };
    //   img.src = src;
    // };
    // let obj = { a: 1, b: 2 };
    // for (let i in obj) {
    //   console.log(i);
    // }
    // let arr = [1, 2, 4, 5];
    // for (let i of arr) {
    //   console.log(i);
    // }
    // // 定义一个深拷贝函数  接收目标target参数
    // function deepClone(target) {
    //   // 定义一个变量
    //   let result;
    //   // 如果当前需要深拷贝的是一个对象的话
    //   if (typeof target === "object") {
    //     // 如果是一个数组的话
    //     if (Array.isArray(target)) {
    //       result = []; // 将result赋值为一个数组，并且执行遍历
    //       for (let i in target) {
    //         // 递归克隆数组中的每一项
    //         result.push(deepClone(target[i]));
    //       }
    //       // 判断如果当前的值是null的话；直接赋值为null
    //     } else if (target === null) {
    //       result = null;
    //       // 判断如果当前的值是一个RegExp对象的话，直接赋值
    //     } else if (target.constructor === RegExp) {
    //       result = target;
    //     } else {
    //       // 否则是普通对象，直接for in循环，递归赋值对象的所有值
    //       result = {};
    //       for (let i in target) {
    //         result[i] = deepClone(target[i]);
    //       }
    //     }
    //     // 如果不是对象的话，就是基本数据类型，那么直接赋值
    //   } else {
    //     result = target;
    //   }
    //   // 返回最终结果
    //   return result;
    // }

    // var startTime = new Date().getTime();
    // var count = 0;
    // setInterval(function () {
    //   var i = 0;
    //   while (i++ < 100000000);
    // }, 10);
    // setInterval(function () {
    //   count++;
    //   console.log(new Date().getTime() - (startTime + count * 1000));
    // }, 1000);
    // function fixed() {
    //     count++;
    //     var offset = new Date().getTime() - (startTime + count * 1000);
    //     var nextTime = 1000 - offset;
    //     if (nextTime < 0) nextTime = 0;
    //     setTimeout(fixed, nextTime);

    //     console.log(new Date().getTime() - (startTime + count * 1000));
    // }
    // setTimeout(fixed, 1000);
    // let i = 0;
    // for (let index = 0; index < 5555; index++) {
    //   setInterval(() => {
    //     i++;
    //   }, 200);
    // }
    // interval
    // let sleep = (n) => new Promise(resolve => setTimeout(resolve,n))
    // let start = new Date();
    // setInterval(async() => {
    //   let end = new Date();
    //   await sleep(1500)
    //   console.log(end - start)
    //   start = end
    // }, 1000);

    // timeOut

    // let arr = [46, 4, 45, 1, 2, 0, 3];
    // 冒泡
    // for(let i = arr.length;i > 0; i--){
    //     for(let j = 0; j < i; j++){
    //         if(arr[j]>arr[j+1]){
    //             [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
    //         }
    //     }
    // }

    // 快速
    // function quickSort(arr){
    //     if(arr.length <= 1){
    //         return arr
    //     }
    //     let midIdx = Math.floor(arr.length/2)
    //     let mid = arr.splice(midIdx,1)[0]
    //     let left = []
    //     let right = []
    //     for (let index = 0; index < arr.length; index++) {
    //         const element = arr[index]
    //         if(element <= mid){
    //             left.push(element)
    //         }else{
    //             right.push(element)
    //         }
    //     }
    //     return [...quickSort(left),mid, ...quickSort(right)]
    // }

    // 插入排序
    // function insert(array){
    //     for (let index = 1; index < array.length; index++) {
    //         while(index-1 >= 0 && array[index] < array[index-1]){
    //             [array[index-1], array[index]] = [array[index], array[index-1]]
    //             index--
    //         }
    //     }
    //     return array;
    // }

    // 选择排序
    // function select(arr) {
    //   const indexEnd = arr.length - 1;
    //   for (let i = 0; i < indexEnd; i++) {
    //     for (let j = i + 1; j <= indexEnd; j++) {
    //       if (arr[i] > arr[j]) {
    //           [arr[j] ,arr[i]] = [arr[i], arr[j]]
    //       }
    //     }
    //   }
    //   return arr;
    // }

    //找出最长字串
    // let str = 'abcdacbdefff';
    // let subStr = '';
    // let num = 0;
    // let s = ''
    // for (let index = 0; index < str.length; index++) {
    //     let idx =subStr.indexOf(str[index]);
    //     if(idx === -1){
    //         subStr+=str[index]
    //         if(subStr.length>num){
    //             num = subStr.length
    //             s = subStr
    //         }
    //     }else{
    //         subStr = subStr.slice(idx+1)
    //         subStr += str[index]
    //     }
    // }
    // console.log(s)
    // console.log(num)

    //斐波那契数列
    // function fib(n){
    //     if(n >= 3){
    //         return fib(n-1) + fib(n-2);
    //     }else{
    //         return 1
    //     }
    // }
    // console.log(fib(7))

    //实现new 操作
    // let Per = function(){
    //   this.name = 'chen'
    // }
    // function _new(fn){
    //   return function(){
    //     let o = Object.create(fn.prototype)
    //     fn.call(o,...arguments)
    //     return o;
    //   }

    // }
    // let p2 = _new(Per)('xiang')
    // console.log(p2)

    //实现Object.create()
    // let a = { name: 'chenxiang' }
    // function createObject(obj){
    //   let fn = function(){}
    //   fn.prototype = obj
    //   return new fn()
    // }
    // let p = createObject(a)
    // // let p = Object.create(a)
    // p.age = 25
    // a.name = '2222'
    // console.log(p,11)
    // console.log(p.name,11)
    // console.log(p.age,11)

    //实现bind函数
    // Function.prototype.bind2 = function(){
    //   let self = this;
    //   let context = [...arguments][0];
    //   let args = [...arguments].slice(1);
    //   function f(){
    //     console.log(this instanceof f)
    //     self.apply(this instanceof f?this:context, [...args, ...arguments])
    //   }
    //   f.prototype = Object.create(this.prototype)
    //   return f
    // }
    // function a(age,word){
    //   console.log(this.name)
    //   console.log(age)
    //   console.log(word)
    // }
    // // let b = a.bind2({name:'chen'},25)
    // // b('say')
    // let c = a.bind2({name:'chen'},25)
    // console.log(new c('111'))

    //二叉树
    // let tree = {
    //   val: 1,
    //   left: {
    //     val: 2,
    //     left: {
    //       val: 3,
    //       left: null,
    //       right: null,
    //     },
    //     right: {
    //       val: 4,
    //       left: null,
    //       right: null,
    //     },
    //   },
    //   right: {
    //     val: 5,
    //     left: null,
    //     right: null,
    //   },
    // };
    // // 先序遍历
    // function pre(tree) {
    //   if (tree) {
    //     console.log(tree.val);
    //     pre(tree.left);
    //     pre(tree.right);
    //   } else {
    //     return;
    //   }
    // }
    // function pre2(tree) {
    //   let stack = [tree];
    //   while (stack.length) {
    //     let node = stack.pop();
    //     console.log(node);
    //     if (node.right) {
    //       stack.push(node.right);
    //     }
    //     if (node.left) {
    //       stack.push(node.left);
    //     }
    //   }
    // }
    // console.log(pre(tree));
    // console.log(pre2(tree));

    // // 中序遍历
    // function mid1(tree) {
    //   if (tree) {
    //     mid1(tree.left);
    //     console.log(tree.val);
    //     mid1(tree.right);
    //   } else {
    //     return;
    //   }
    // }
    // function mid2(tree) {
    //   let stack = [];
    //   let node = tree;
    //   while (node || stack.length) {
    //     if(node){
    //       stack.push(node)
    //       node = node.left
    //     }else{
    //       let p = stack.pop();
    //       console.log(p.val)
    //       node = p.right
    //     }
    //   }
    // }
    // mid1(tree)
    // console.log('=======')
    // mid2(tree)

    // // 后序遍历
    // function last1(tree) {
    //   if (tree) {
    //     last1(tree.left);
    //     last1(tree.right);
    //     console.log(tree.val);
    //   } else {
    //     return;
    //   }
    // }
    // function last2(tree) {
    //   let stack = [tree];
    //   while (stack.length) {
    //     let node = stack.pop();
    //     console.log(node);
    //     if (node.left) {
    //       stack.push(node.left);
    //     }
    //     if (node.right) {
    //       stack.push(node.right);
    //     }
    //   }
    // }
    // console.log(last1(tree))
    // console.log('=========')
    // console.log(last2(tree))
  },
};
</script>

