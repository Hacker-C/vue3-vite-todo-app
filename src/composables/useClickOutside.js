import { ref, onMounted, onUnmounted } from 'vue'

// 传入一个 Node/HTMLElement 不行，在 setup 中无法监控到，也就失去了响应式。
// 所以传入的参数应该是一个 Ref 的类型
export default function useClickOutside(elementRef) {
  const isClickOutside = ref(false)
  // 点击回调事件
  const handler = e => {
    if (elementRef.value) {
      if (!elementRef.value.contains(e.target)) {
        isClickOutside.value = true
      } else {
        isClickOutside.value = false
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  // 最后返回这个 ref<boolean>
  return isClickOutside
}
