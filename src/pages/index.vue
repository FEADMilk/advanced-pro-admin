<template>
  <div>
    <RouterLink to="/">home</RouterLink>
    <RouterLink to="/about">about</RouterLink>
    首页
    <HelloWorld msg="'hello world'"></HelloWorld>
    <UserLogin />
    <Child @click-count="clickCount"></Child>
  </div>
</template>

<script setup lang="ts">
// import Child from '@/components/Child.vue';
// defineOptions({
//   name:"HomeIndex1"
// })
const clickCount = (v: number) => {
  console.log('父组件打印', v);
};
</script>

<style scoped></style>
<!-- <route lang="yaml">
meta:
  layout: home
</route> -->
<route lang="json">
{
  "meta": {
    "layout": "home"
  }
}
</route>
<!-- 设置组件名称(官方传统方式) -->
<!-- <script lang="ts">
export default defineComponent({
  name:"HomeIndex"
})
</script> -->

<!-- 使用tsx编写 -->
<!-- <script setup lang="tsx">
defineRender(() => <div>hello world</div>);
</script> -->
