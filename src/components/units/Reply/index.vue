<template>
  <div class="reply">
    <b-row>
      <b-col>
        <div class="reply__email">{{ email }}</div>
      </b-col>
      <b-col cols="auto">
        <div clas="reply__date">{{ updatedAt | moment('YYYY년 MM월 DD일') }}</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p class="reply__contents text-justify">{{ contents }}</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    updatedAt: {
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
    }
  }
}
</script>

<style lang="less" scoped>
.reply {
  // padding-left: 20px;
}
</style>