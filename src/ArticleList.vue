<template>
<div v-if="!loading">
  <div v-for="item in items">
    <mu-card>
      <mu-card-header title="2017-01-23">
      </mu-card-header>
      <mu-card-media :title="item.title">
        <img :src="img" />  
      </mu-card-media>
      <!-- <mu-card-title title="Content Title" subTitle="Content Title"/> -->
      <mu-card-text>
        {{item.summary}}
      </mu-card-text>
      <mu-card-actions>
         <router-link :to="'article/'+item.id">更多</router-link>
        <!-- <mu-flat-button label="阅读更多"/> -->
        <mu-flat-button label="删除"/>
      </mu-card-actions>
    </mu-card>
  </div>
  </div>
</template>

<script>
import img from './assets/images/a.jpg'
import myron from './assets/images/a.jpg'
export default {
  data () {
    return {
      loading: true
    }
  },
  mounted () {
  this.$http.post('/api/article/list')
    .then((data) => {
          this.items = data.body.articles
          this.img = img;
          this.myron=myron;
          this.loading=false
          console.debug(this.items)
        }, (err) => {

        }
      )
  } 
}
</script>
