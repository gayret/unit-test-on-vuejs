<script setup>
import useCounter from './useCounter'
const { count, increment, decrement } = useCounter()
</script>

<template>
  <h1>Counter</h1>
  <h2 class="count">{{ count }}</h2>
  <section class="actions">
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </section>
</template>

<style scoped>
.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
</style>