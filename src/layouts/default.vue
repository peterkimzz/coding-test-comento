<template>
  <div id="default__layout">
    <div id="default__layout-content">
      <b-container>
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
      </b-container>
    </div>
  </div>
</template>

<style lang="less" scoped>
#default__layout-content {
  margin-top: 60px;
  margin-bottom: 100px;
}
</style>