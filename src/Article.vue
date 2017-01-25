<template>
  <div v-if="!loading">
    <mu-card>
      <mu-card-header :title="article.user_name" :subTitle="article.created_at.toString()">
        <mu-avatar :src="myron" slot="avatar"/>
      </mu-card-header>
      <mu-card-media>
        <img :src="img" />
      </mu-card-media>
      <mu-card-title :title="article.title" :subTitle="article.user_name"/>
      <mu-card-text>
        {{article.content}}
      </mu-card-text>
    </mu-card>
  </div>
</template>

<script>
import img from './assets/images/a.jpg'
import myron from './assets/images/a.jpg'
export default {
  mounted () {
    let id = this.$route.params.id;
    this.$http.post('/api/article/get/'+id).then((data) => {
      this.article = data.body;
      this.img=img;
      this.myron=myron;
      this.loading = false
    }, (err) => {

    })
  },
  data () {
    return {
      loading: true
    }
  }
}
</script>

<style lang="css">
</style>