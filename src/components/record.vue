<template>
<div>
<mt-header fixed title="反馈记录" id="bb">
    <router-link to='/first' id="aa" slot="left">
    <mt-button icon="back" id="ff"></mt-button>
    </router-link>
</mt-header>
<div id="dd">
<mt-cell id="ee" title="疑似缺陷" value="2018-11-06"></mt-cell>
<mt-cell value="反馈的内容"></mt-cell>
<mt-cell title="疑似缺陷" value="2018-11-06"></mt-cell>
<mt-cell value="反馈的内容"></mt-cell>
<router-link to="/question" slot="right">
<mt-cell
  title="" id="cc"
  href="/question" is-link>您好，我们收到反馈内容......
</mt-cell>
</router-link>
<mt-cell title="疑似缺陷" value="2018-11-06"></mt-cell>
<mt-cell value="反馈的内容"></mt-cell>
<router-link to="/question" slot="right">
<mt-cell title href="/question" value="您好，我们收到反馈内容......" is-link></mt-cell>
</router-link>
</div>
</div>
</template>
<script>
export default {name: 'record'}
</script>
<style>
div{
  text-align: left;
  margin-top:0px;
}
#aa{
  margin-top:0px;
  text-align: left;
  margin-bottom: 10px;
}
#bb{
  margin-bottom: 25px;
}
.mint-cell-title{
  margin-top:0px;
}
#cc{
  margin-bottom:0px;
  margin-top:0px;
}
span.mint-button-icon{
  margin-top:0px;
}
#dd{
  margin-top:40px;
}
.ee{
  margin-top:25px;
}
.mint-button-icon{
  text-align: left;
  margin-top:0px;
}
.mintui.mintui-back{
  margin-top:0px;
  margin-bottom: 10px;
}
#ff{
  margin-top: 0px;
}
.mint-header-button{
  margin-top:0px;
}
.mint-cell-wrapper{
  margin-top:3px;
}
.mint-cell{
  height:50px;
}
</style>