<script setup>
import { inject, ref, watch, nextTick } from 'vue'
import { Icon } from '@iconify/vue'
import useClickOutside from 'composables/useClickOutside'

const props = defineProps({
  todo: Object
})
const isInput = ref(false)

const remove = inject('delete')
const update = inject('update')
const finish = inject('finish')

const removeTodo = () => {
  remove(props.todo.id)
}

const updateTodo = async () => {
  if (isInput.value) {
    isInput.value = false
  } else {
    isInput.value = true
    await nextTick()
    itemInputRef.value.focus()
    itemInputRef.value.click()
  }
}
const itemInputRef = ref(null)
const isInputClickOutside = useClickOutside(itemInputRef)
watch(isInputClickOutside, () => {
  if (isInputClickOutside.value) {
    isInput.value = false
    const { id, text } = props.todo
    update({ id, text })
  } else {
    isInput.value = true
  }
})

const finishTodo = () => {
  finish(props.todo.id)
}
</script>

<template>
  <div
    class="p-2 h-12 mt-2 rounded-sm flex justify-end items-center"
    :class="todo.isComplete ? 'bg-gray-500' : 'odd:bg-[#ffa800] even:bg-[#8e6ffe]'"
  >
    <input
      v-if="isInput"
      type="text"
      class="w-[70%] text-white text-lg mr-auto outline-none bg-[#35495e] rounded-sm p-0.5 pl-3 leading-2"
      maxlength="20"
      ref="itemInputRef"
      v-model="todo.text"
    />
    <span
      v-else
      class="text-white text-lg mr-auto"
      @click="finishTodo"
      :class="todo.isComplete ? ['line-through', 'text-gray-300'] : ''"
    >
      {{ todo.text }}
    </span>
    <Icon
      class="mr-2 cursor-pointer"
      icon="iconoir:delete-circled-outline"
      color="white"
      width="28"
      @click="removeTodo"
    />
    <Icon
      class="cursor-pointer"
      icon="fa:edit"
      color="white"
      width="28"
      height="28"
      @click.stop="updateTodo"
    />
  </div>
</template>
