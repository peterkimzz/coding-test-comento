<template>
  <div>
    <!-- 데이터를 컴포넌트 내에서만 사용하면 문제 없이 체크박스가 작동함 -->
    <div>{{ selected }}</div>
    <b-form-group>
      <b-form-checkbox-group 
        v-model="selected">
        <b-form-checkbox
          v-for="category in $store.getters['comento/CATEGORIES']"
          :key="category.no + category.name"
          :value="category.no">{{ category.name }}</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>

    <!-- 데이터 통신 과정에서 UI가 갱신이 안되는 문제가 있음 -->
    <div>{{ value }}</div>
    <b-form-group>
      <b-form-checkbox-group 
        :value="value"
        @input="v => $emit('input', v)">
        <b-form-checkbox
          v-for="category in $store.getters['comento/CATEGORIES']"
          :key="category.no + category.name"
          :value="category.no">{{ category.name }}</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      selected: []
    }
  }
}
</script>

<style lang="less">
.category-checkbox {
  .custom-control-label {
    line-height: 1.2;
  }
}
</style>