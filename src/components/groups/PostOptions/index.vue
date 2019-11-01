<template>
  <div class="post-options">
    <!-- Modal -->
    <vue-modal
      :is-opened="filterModalOpened"
      title="카테고리 필터"
      @close="filterModalOpened = false">
      <vue-category-checkbox v-model="categories"/>
      <div class="text-right">
        <b-button 
          variant="primary"
          @click="assignFilter">확인</b-button>
      </div>
    </vue-modal>

    <!-- Options -->
    <b-row>
      <b-col>
        <b-button 
          variant="outline-primary"
          @click="openFilterModal">필터</b-button>
      </b-col>
      <b-col 
        cols="auto" 
        align-self="center">
        <b-link
          :active="$route.query.ord === 'asc' || !$route.query.ord"
          to="?ord=asc"
          class="post-options__link">오름차 순</b-link>
        <b-link
          :active="$route.query.ord === 'desc'"
          to="?ord=desc"
          class="post-options__link">내림차 순</b-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import VueModal from '@/components/units/Modal'
import VueCategoryCheckbox from '@/components/units/Checkbox/Category'
export default {
  components: {
    VueModal,
    VueCategoryCheckbox
  },
  data() {
    return {
      filterModalOpened: false,
      categories: []
    }
  },
  mounted() {
    this.mappingQuery()
  },
  methods: {
    mappingQuery() {
      const { categories } = this.$route.query

      if (categories) {
        this.categories = categories.split(',')
      } else {
        this.categories = this.$store.getters['comento/CATEGORIES'].map(
          cat => cat.no
        )
      }
    },
    openFilterModal() {
      this.filterModalOpened = !this.filterModalOpened
    },
    assignFilter() {
      const query = {
        ...this.$route.query,
        categories: this.categories.join()
      }
      this.$router.push({ query })
      this.filterModalOpened = false
    }
  }
}
</script>

<style lang="less" scoped>
.active {
  font-weight: bold;
  color: @--color-primary;
}

.post-options__link {
  display: inline-block;
  margin-left: 8px;
}
</style>