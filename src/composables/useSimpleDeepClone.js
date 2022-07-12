export default function useDeepClone(array) {
  const res = []
  for (let obj of array) {
    const newObj = {}
    for (let k in obj) {
      newObj[k] = obj[k]
    }
    res.push(newObj)
  }
  return res
}
