<template>
  <div ref="target">
    <RouterLink to="/">home</RouterLink>
    <RouterLink to="/about">about</RouterLink>
    about 页面
    <div>{{ msg }}</div>
    <div>x:{{ x }},y:{{ y }},isOutside:{{ isOutside }}</div>
  </div>
</template>

<script setup lang="ts">
const msg = ref('测试 unplugin-auto-import 插件'); // 此处可以看到,我们无需在script标签里引入ref但使用不会报错

const target = ref(null);

const { x, y, isOutside } = useMouseInElement(target);
</script>

<style scoped></style>
