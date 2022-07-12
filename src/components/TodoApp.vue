<script setup>
import { ref, unref, provide } from 'vue'
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'

const todos = ref([])

provide('delete', id => {
  todos.value = unref(todos).filter(todo => todo.id !== id)
})

provide('update', ({ id, text }) => {
  todos.value = unref(todos).map(todo => (todo.id === id ? { ...todo, text } : todo))
})

provide('finish', id => {
  todos.value = todos.value.map(todo =>
    todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
  )
})

const addTodo = todo => todos.value.unshift(todo)
</script>

<template>
  <div
    class="min-w-min rounded-md p-6 w-[90%] sm:w-[30rem] bg-[#35495e] ml-[50%] translate-x-[-50%] mt-20"
  >
    <h1 class="text-3xl text-white text-center">Todo App</h1>
    <TodoForm @add="addTodo" />
    <TodoList :todos="todos" />
    <footer class="text-center mt-5 text-[16px] text-gray-300">
      Code with Vue3 & Vite by MurphyChen
    </footer>
  </div>
</template>

<style>
body,
html {
  background: #42b883;
}
</style>
