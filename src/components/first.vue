<template>
  <div id="bobo">
    <div id="vv">
    <mt-header fixed title="反馈问题" id="mm">
    </mt-header>
    </div>
    <div class="ee">
    <router-link to="/record" slot="right" id="rr">
    <mt-cell class="one" title="反馈记录" href="/record" is-link>{{n}}条记录</mt-cell>
    </router-link>
    </div>
    <mt-cell title="问题类型">
    </mt-cell>
    <div id="ha">
      <button @click="handleClick" :class="{'class-a':white,'class-b':blue}">疑似缺陷</button>
      <button @click="handleClick1" :class="{'class-a':white1,'class-b':blue1}">功能咨询</button>
      <button @click="handleClick2" :class="{'class-a':white2,'class-b':blue2}">体验不佳</button>
      <button @click="handleClick3" :class="{'class-a':white3,'class-b':blue3}">账号问题</button>
      <br>
      <button @click="handleClick4" :class="{'class-a':white4,'class-b':blue4}">我要建议</button>
      <button @click="handleClick5" :class="{'class-a':white5,'class-b':blue5}">其他</button>
    </div>
    <mt-cell title="具体描述"></mt-cell>
    <textarea id="aa" placeholder="请输入您想要反馈的内容..." rows="2" maxlength="500" @input="handleCount"></textarea>
    <div id="haq">{{num}}/500字</div>
    <div id="ii">
    <mt-cell title="添加截图(最多5张)" id="bo">
    </mt-cell> 
    <mt-cell id="yy">
        <!--<img src="../img/1.jpg">-->
        <img :src="imgUrl" alt="" id="hh" v-if="show">
        <button  id="jj" @click="chooseFile"><img  id="fir" src="../img/2.jpg"></button>
    </mt-cell>
    <input type="submit" id="bottom" @click="btnClickHandel" value="提交">
  </div>
  </div>
</template>
<script>
import {
    getList,
    postData
} from '../apitest/http.js'
export default {
    props:{
    data:{
      type:Array,
      default(){
        return [];
      }
    },
    problemTypeId:{
      type:Number,
      default(){
        return 0;
      }
    },      
    problemDesc:{
      type:String,
      default(){
        return '问题描述';
      }
    },   
    images:{
      type:Array,
      default(){
        return ['../img/1.jpg'];
      }
    }   
},
  data(){
    return {
      n:0,
      page:1,
      list:[],
      limit:15,
      white:true,
      blue:false,
      white1:true,
      blue1:false,
      white2:true,
      blue2:false,
      white3:true,
      blue3:false,
      white4:true,
      blue4:false,
      white5:true,
      blue5:false,
      num:0,
      show:false,
      res: '拍照返回的内容会显示在这里',
                imgUrl: []
    }
  },
  created(){
        const vm = this;
        vm.getListFn(vm.page,vm.limit);
    },
  methods:{
    chooseFile(count) {
                const vm = this;
                MXCommon.chooseFile(
                    5, // count为要预览的图片数量
                    ['camera', 'album'], // camera表示调用的是拍照接口
                    function(res) {
                      vm.show=true;
                        vm.res = res;
                        console.log(res)
                        vm.imgUrl.push(JSON.parse(res).localRes[0].url);
                    },
                    function(err) {
                        alert('走的错误回调' + err)
                    }
                );
            },
            handleCount(){
              let text=document.getElementById('aa').value;
              this.num=text.length;
            },
            handleClick(){
              this.blue=this.blue==true?false:true;
            },
            handleClick1(){
              this.blue1=this.blue1==true?false:true;
            },
            handleClick2(){
              this.blue2=this.blue2==true?false:true;
            },
            handleClick3(){
              this.blue3=this.blue3==true?false:true;
            },
            handleClick4(){
              this.blue4=this.blue4==true?false:true;
            },
            handleClick5(){
              this.blue5=this.blue5==true?false:true;
            },
            getListFn(page,limit){
            const vm = this;
            getList(page,limit).then(res=>{
                vm.list = vm.list.concat(res.data);
            }).catch(err =>{
              console.log('错误',err)
            })
        },
        btnClickHandel() {       
            let _params = {
                problemTypeId:0,
                problemDesc:'问题描述',
                images:['../img/1.jpg']
            }
            
            postData(_params).then(res=>{
              JSON.stringify(res)
              alert('(⊙o⊙)')

            }).catch(err=>{
              alert('辣鸡！')
              console.log('辣鸡'+JSON.stringify(err))
            })
        }
            },
  name: "first"
}
</script>
<style>
.class-a{
  background-color: white;
}
.class-b{
  background-color: skyblue;
}
#haq{
  text-align: right;
  background-color: white;
  margin-top: 0px;
  width:412px;
}
textarea{
  background-color: white;
}
.mint-field-other{
  margin-top: 80px;
  margin-right:15px;
} 
button {    
  border-radius: 25px;
  background-color: white;
  width:80px;
  border-style:solid;
  border-width:1px;
  margin-top:10px;
}

#jj{
  margin-top:3px;
  margin-bottom: 0px;
  width:100px;
  height:100px;
  border-style: none;
}

#hh{
  margin-top:35px;
}

img{
  margin-top:25px;
  width:80px;
  height:80px;
}
#bottom{
    border-style:solid;
    border-width:1px;
    position: fixed;
    bottom: 0;
    left:0;
    margin-bottom: 0px;
    margin-top:10px;
    width:415px;
    height:35px;
    border-radius: 0px;
    background-color: white;
    color:aqua;
    height:50px;
}
div{
  text-align: left;
}
*{
  margin-bottom:10px;
  margin-left:0px;
  margin-right:0px;
}
#app{
  background-color: #ededed;
  overflow: hidden;
  height:100vmax;
}
a{
  height:80px;
}
.one{
  height:60px;
  margin-bottom:15px;
}
#ha{
  background-color: white;
  margin-top:0px;
  height:85px;
}
.mint-cell{
  margin-bottom:0px;
  height:35px;
}
#aa{
  margin-top:0px;
  margin-right: 0px;
  height:180px;
  width:420px;
  margin-bottom: 0px;
}
#pp{
  margin-top:0px;
}
#qq{
  margin-top:0px;
  height:100px;
}
#ii{
  margin-bottom: 0px;
}
#mm{
  margin-top:0px;
  margin-bottom:10px;
}
#but{
  text-align: left;
  margin-top:25px;
}
span.mint-cell-text{
  margin-top:0px;
  margin-bottom:35px;
  float: left;
  color:black;
}
div.mint-cell-value{
  float:right;
  margin-bottom:40px;
}
.mint-cell-value.is-link{
  margin-top:0px;
  margin-bottom: 45px;
}
#bo{
  margin-bottom:0px;
  margin-top:10px;
}
#yy{
  margin-top:0px;
  margin-bottom: 10px;
  height:230px;
}
.hh{
  border-radius: 0px;
  height:80px;
}
div.mint-cell-wrapper{
  margin-top:0px;
  height:95px;
}
header{
  margin-bottom:5px;
}
#vv{
  margin-bottom:5px;
}
.mint-header.is-fixed{
  margin-bottom:5px;
}
.ee{
  margin-top:50px;
}
h1{
  margin-top:5px;
}
#kk{
  margin-top:0px;
  margin-bottom:5px;
}
img{
  margin-left:0px;
  margin-bottom:4px;
}
#ff{
  margin-top:25px;
}
</style>




