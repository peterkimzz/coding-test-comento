<template>
  <router-link
    class="d-block border rounded text-decoration-none text-dark"
    :to="`/${no}`">
    <b-container>
      <div class="py-2">
        <b-row>
          <b-col>
            <span>{{ category }}</span>
          </b-col>
          <b-col cols="auto">
            <span class="text-black-50 font-weight-bold">{{ no }}번째 글</span>
          </b-col>
        </b-row>
      </div>
    </b-container>

    <vue-divider/>
    
    <b-container>
      <div class="py-2">
        <div class="post__info-container text-secondary">
          <span>{{ email }}</span>
          <span style="padding: 0 10px">|</span>
          <span>{{ updatedAt | moment('YYYY년 MM월 DD일') }}</span>
        </div>
        <h3 class="post__title">{{ title }}</h3>
        <p class="post__contents text-decoration-none text-justify">{{ contents }}</p>
      </div>
    </b-container>
  </router-link>
</template>
 
<script>
import VueDivider from '@/components/units/Divider'
export default {
  components: {
    VueDivider
  },
  props: {
    no: {
      type: String,
      default: ''
    },
    categoryNo: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    },
    contents: {
      type: String,
      default: ''
    },
    updatedAt: {
      type: String,
      default: ''
    }
  },
  computed: {
    category() {
      const categories = this.$store.getters['comento/CATEGORIES']
      const cat = categories.filter(category => category.no === this.categoryNo)
      return cat.length ? cat[0].name : 'CATEGORY_ERROR'
    }
  }
}
</script>

<style lang="less" scoped>
.post {
  border: 1px solid @--color-gray-3;
  border-radius: @--border-radius-default;
}
.post__title {
  margin: 10px 0;
}

.post__contents {
  margin-bottom: 0;
  text-decoration: none !important;
}
</style>