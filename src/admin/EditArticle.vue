<template>
  <div>
    <mu-text-field label="文章标题" v-model="article.title" labelFloat fullWidth/><br/>
    <mu-text-field label="封面图片" v-model="article.poster_url" labelFloat fullWidth/><br/>
    <mu-text-field hintText="文章摘要" v-model="article.summary" multiLine :rows="2" :rowsMax="5" fullWidth/><br/>
    <mu-text-field hintText="文章内容" v-model="article.content" multiLine :rows="10" :rowsMax="20" fullWidth/><br/>
    <mu-raised-button label="提交" @click="submit()"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      article: {}
    }
  },
  methods: {
    submit (){
      let article = {};
      // article.title = this.title;
      // article.poster = this.poster_url;
      // article.summary = this.summary;
      // article.content = this.content;

      article = this.article

      this.$http.post('/api/article/create', article).then((data) => {
        alert("OK")
      }, (err) => {
        alert("ERR")
      });
    }  
  }
}
</script>