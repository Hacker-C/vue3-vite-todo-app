<script setup>
import { computed } from 'vue'
import TodoItem from './TodoItem.vue'
import useSimpleDeepClone from 'composables/useSimpleDeepClone.js'

const props = defineProps({
  todos: Object
})
const finalTodos = computed(() => {
  const copy = useSimpleDeepClone(props.todos)
  return copy.sort((a, b) => a.isComplete - b.isComplete)
})
</script>

<template>
  <TodoItem v-for="todo of finalTodos" :key="todo.id" :todo="todo"></TodoItem>
</template>
