<template>
  <div class="banner">
    <mu-row gutter>
      <mu-col width="10" tablet="10" desktop="20"/>
      <mu-col width="80" tablet="80" desktop="60">
        <div class="menu">
          <mu-card-actions>
            <mu-flat-button label="菜单 1"/>
            <mu-flat-button label="菜单 2"/>
          </mu-card-actions>
        </div>
        <div class="title">
          <span class="mainTitle"><b>App Title</b></span><br>
          <span>App Sub Title</span>
        </div>
      </mu-col>
      <mu-col width="10" tablet="10" desktop="20"/>
    </mu-row>

    <!-- <mu-flexbox class="mt8" orient="vertical">
      <mu-flexbox-item order="0" class="flex-demo">
      </mu-flexbox-item>
      <mu-flexbox-item order="2" class="flex-demo">
        <mu-card>
          <mu-card-media title="App Title" subTitle="App Sub Title" titleClass="titleClass">
            
        </mu-card>
      </mu-flexbox-item>
    </mu-flexbox> -->
  </div>
</template>

<script>
import img from './assets/images/a.jpg'
import myron from './assets/images/a.jpg'

export default {
  data () {
    return {
      img,
      myron
    }
  }
}
</script>

<style lang="css">
.banner {
  height: 200px;
  background-color: #4183c4;
  text-align: left;
  position: relative;
}
.menu {
  float:right;
}
.menu span {
  color: white;
}
.title {
  position:absolute; 
  bottom:0;
  color: white;
  margin-bottom: 20px;
}
.mainTitle {
  font-size: 45px;
}
</style>
