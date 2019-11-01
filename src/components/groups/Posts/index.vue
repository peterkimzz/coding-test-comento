<template>
  <div class="posts">
    <vue-post-options class="mb-3"/>
    <ul 
      v-if="posts.length">
      <li
        v-for="(post, index) in posts"
        :key="post.no + post.title">
        <vue-post
          :no="post.no"
          :category-no="post.category_no"
          :email="post.email"
          :updated-at="post.updated_at"
          :title="post.title"
          :contents="post.contents"
          class="mb-3"/>
        <vue-sponsored-post
          v-if="
            index && 
            index % 4 === 3 && 
            !sponsoredLoading && Math.floor(index / 4) < sponsoredPosts.length
          "
          :img="sponsoredPost(index).img"
          :title="sponsoredPost(index).title"
          :contents="sponsoredPost(index).contents"
          class="mb-3"/>
      </li>
      <div class="text-center text-black-50 font-weight-bold">
        <p 
          v-if="loading"
          class="my-5">콘텐츠를 불러오는 중..</p>
        <p 
          v-if="notAnymore"
          class="my-5">마지막 콘텐츠입니다.</p>
      </div>
    </ul>
  </div>
</template>

<script>
import VuePostOptions from '@/components/groups/PostOptions'
import VuePost from '@/components/units/Post'
import VueSponsoredPost from '@/components/units/Post/Sponsored'
export default {
  components: {
    VuePostOptions,
    VuePost,
    VueSponsoredPost
  },
  data() {
    return {
      loading: false,
      sponsoredLoading: false,
      notAnymore: false,
      sponsoredNotAnymore: false,
      posts: [],
      sponsoredPosts: [],
      page: 1
    }
  },
  mounted() {
    this.infinityScroll()
    this.getSponsoredPosts()
    this.getPosts()
  },
  beforeDestroy() {
    window.onscroll = null
  },
  watch: {
    '$route.query'() {
      this.reset()
      this.getPosts()
    }
  },
  methods: {
    reset() {
      this.page = 1
      this.posts = []
    },
    infinityScroll() {
      window.onscroll = e => {
        let _windowHeight =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight
        let _scrollPos =
          window.scrollY ||
          window.pageYOffset ||
          document.documentElement.scrollTop

        if (_windowHeight + _scrollPos >= document.body.offsetHeight) {
          if (this.notAnymore) return
          if (this.loading) return

          this.getPosts()
        }
      }
    },
    async getPosts() {
      try {
        this.loading = true

        const options = {
          ...this.$route.query,
          page: this.page
        }
        const { data } = await this.$store.dispatch(
          'comento/GET_POSTS',
          options
        )

        if (data.per) {
          this.posts = this.posts.concat(data.list)
          this.page++
        } else {
          this.notAnymore = true
        }

        this.loading = false
      } catch (err) {
        console.error(err)
      }
    },
    async getSponsoredPosts() {
      try {
        this.sponsoredLoading = true

        const { data } = await this.$store.dispatch('comento/GET_ADS')

        this.sponsoredPosts = data.list
        this.sponsoredLoading = false
      } catch (err) {
        console.error(err)
      }
    },
    sponsoredPost(index) {
      const i = Math.floor(index / 4)
      const post = this.sponsoredPosts[i]
      return post
    }
  }
}
</script>

<style lang="less" scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>