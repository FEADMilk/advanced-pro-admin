<template>
  <div>
    <button @click="handleClick">点击触发</button>
  </div>
</template>

<script setup lang="ts">
const num = ref(0);
const emits = defineEmits<{
  (e: 'clickCount', value: number): void;
}>();
const handleClick = () => {
  console.log('点击触发');
  emits('clickCount', ++num.value);
};
</script>

<style scoped></style>
