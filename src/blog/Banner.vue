<template>
  <div class="banner">
    <mu-row gutter>
      <mu-col width="10" tablet="10" desktop="20"/>
      <mu-col width="80" tablet="80" desktop="60">
        <div class="menu">
          <mu-card-actions>
            <router-link :to="'/admin/edit-article'">新增</router-link>
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
  </div>
</template>

<script>

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
