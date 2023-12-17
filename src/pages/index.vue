<template>
  <div>
    <RouterLink to="/">home</RouterLink>
    <RouterLink to="/about">about</RouterLink>
    首页
    <HelloWorld msg="'hello world'"></HelloWorld>
    <UserLogin />
  </div>
</template>

<script setup lang="ts"></script>

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
