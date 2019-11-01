<template>
  <div id="post-detail-page">
    <div clas="detail__date text-secondary">{{ updatedAt | moment('YYYY년 MM월 DD일') }}</div>
    <h1 class="detail__title">{{ title }}</h1>
    <div class="detail__email mt-4">{{ email }}님이 작성했습니다.</div>
    <p class="detail__contents text-justify mt-4">{{ contents }}</p>
  </div>
</template>

<script>
export default {
  props: {
    updatedAt: {
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
    }
  }
}
</script>