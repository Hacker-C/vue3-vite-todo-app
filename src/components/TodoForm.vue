<script setup>
import { ref, onMounted } from 'vue'

const inputRef = ref(null)
const text = ref('')
const emit = defineEmits(['add'])

onMounted(() => {
  inputRef.value.focus()
})

const addTodo = () => {
  if (text.value.trim()) {
    void emit('add', { id: Date.now(), text: text.value, isComplete: false }) || (text.value = '')
  }
}
</script>

<template>
  <form class="mt-6 text-center" @submit.native.prevent>
    <input
      placeholder="Press enter or click to confirm"
      class="h-10 w-[60%] sm:w-[20rem] md:w-[20rem] p-3 border-2 border-green-600 rounded-sm outline-none placeholder-white bg-[#35495e] text-white"
      ref="inputRef"
      v-model="text"
      maxlength="20"
      @keyup.enter="addTodo"
    />
    <input
      type="button"
      value="Add"
      class="bg-[#16a34a] ml-1 rounded-sm h-10 w-[5rem] sm:w-[5rem] md:w-[5rem] pr-1 pl-1 text-white text-lg cursor-pointer"
      @click="addTodo"
    />
  </form>
</template>
