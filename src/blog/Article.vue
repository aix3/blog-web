<template>
  <div v-if="!loading">
    <mu-card>
      <mu-card-header :title="article.user_name" :subTitle="article.created_at">
        <mu-avatar :src="article.user_avatar" slot="avatar"/>
      </mu-card-header>
      <mu-card-media>
        <img :src="article.poster_url" />
      </mu-card-media>
      <mu-card-title :title="article.title" :subTitle="article.user_name"/>
      <mu-card-text>
        {{article.content}}
      </mu-card-text>
    </mu-card>
  </div>
</template>

<script>
export default {
  mounted () {
    let id = this.$route.params.id;
    this.$http.post('/api/article/get/'+id).then((data) => {
      this.article = data.body;
      this.article.created_at = new Date(data.body.created_at).toLocaleString();
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