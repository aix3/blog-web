<template>
  <div v-if="!loading">
    <div v-for="item in items">
      <mu-card>
        <mu-card-header :title="item.created_at">
        </mu-card-header>
        <mu-card-media :title="item.title">
          <img :src="item.poster_url" />  
        </mu-card-media>
        <!-- <mu-card-title title="Content Title" subTitle="Content Title"/> -->
        <mu-card-text>
          {{item.summary}}
        </mu-card-text>
        <mu-card-actions>
          <button v-on:click="delete(123)">删除</button>
          <mu-flat-button v-on:click="delete(123)" label="删除" />
          <router-link :to="'/article/'+item.id">更多</router-link>
        </mu-card-actions>
      </mu-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    this.$http.post('/api/article/list').then((data) => {
        this.items = data.body.articles
        // 处理一下时间的显示
        this.items.forEach(function (item) {
          item.created_at = new Date(item.created_at).toLocaleString();
        })
        this.loading = false
      }, (err) => { })
  },
  methods: {
    delete (id) {
      alert(id)
      this.$http.post('/api/article/delete', {'id': id}).then((resp) => {
        alert('OK')
      }, (err) => {
        alert('ERR')
      })
    }
  } 
}
</script>
