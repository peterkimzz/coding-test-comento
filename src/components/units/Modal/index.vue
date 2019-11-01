<template>
  <transition name="fade">
    <div 
      v-if="isOpened"
      class="modal-container">
      <div class="modal-contents">
        <b-container style="max-width: 600px">
          <div class="box-container">
            <div class="d-flex justify-content-between">
              <h2>{{ title }}</h2>
              <span 
                aria-hidden="true"
                class="close-icon"
                @click="$emit('close')">&times;</span>
            </div>
            <div class="mt-4">
              <slot/>
            </div>
          </div>
        </b-container>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isOpened: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  watch: {
    isOpened(v) {}
  }
}
</script>

<style lang="less" scoped>
.modal-container {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9990;
}
.modal-contents {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.box-container {
  background-color: @--color-white;
  padding: 20px;
  border-radius: @--border-radius-default;
}

.close-icon {
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
}
</style>

