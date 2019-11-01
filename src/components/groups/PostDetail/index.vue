<template>
  <div class="post-detail">
    <vue-post-detail
      :updated-at="article.updated_at"
      :title="article.title"
      :email="article.email"
      :contents="article.contents"/>
    <div 
      v-if="replies.length"
      class="mt-5">
      <h5>이 글에 대한 답글입니다.</h5>
      <vue-reply
        v-for="reply in replies"
        :key="reply.no + reply.title"
        :updated-at="reply.updated_at"
        :contents="reply.contents"
        :email="reply.email"
        class="mt-4"/>
    </div>
  </div>
</template>

<script>
import VuePostDetail from '@/components/units/PostDetail'
import VueReply from '@/components/units/Reply'
export default {
  components: {
    VuePostDetail,
    VueReply
  },
  data() {
    return {
      article: {},
      replies: []
    }
  },
  mounted() {
    this.post()
  },
  methods: {
    async post() {
      try {
        this.loading = false

        const { data } = await this.$store.dispatch('comento/GET_POST', {
          req_no: this.$route.params.req_no
        })

        if (data.code !== 200)
          return this.$bvToast.toast('Toast body content', {
            title: '죄송합니다. 현재 정보를 가져올 수 없습니다.',
            variant: 'warning',
            solid: true
          })

        this.article = data.detail.article
        this.replies = data.detail.replies

        this.loading = true
      } catch (err) {}
    }
  }
}
</script>