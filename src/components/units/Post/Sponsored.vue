<template>
  <b-link 
    v-if="title"
    class="d-block border rounded sponsored-post text-decoration-none">
    <b-container>
      <div class="py-2">
        <div class="text-uppercase text-secondary">Sponsored</div>
        <div class="contents-container justify-content-between py-2">
          <div
            class="mr-4"
            style="flex: 1;">
            <img
              :src="src"
              :alt="title"
              class="d-block w-100 image">
          </div>
          <div style="flex: 1;">
            <h3>
              <v-clamp autoresize :max-lines="2">{{ title }}</v-clamp>
            </h3>
            <p class="text-justify">
              <v-clamp autoresize :max-lines="4">{{ contents }}</v-clamp>
            </p>
          </div>
        </div>
      </div>
    </b-container>
  </b-link>
</template>

<script>
import VClamp from 'vue-clamp'
export default {
  components: {
    VClamp
  },
  props: {
    img: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    contents: {
      type: String,
      default: ''
    }
  },
  computed: {
    src() {
      return `http://comento.cafe24.com/public/images/${this.img}`
    }
  }
}
</script>

<style lang="less" scoped>
.contents-container {
  display: block;

  @media (min-width: 480px) {
    display: flex;
  }
}
</style>