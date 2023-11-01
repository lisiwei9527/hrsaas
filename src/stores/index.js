import { defineStore } from 'pinia'
import { ref } from 'vue'

//通过defineStore建立公共仓库
const userToken = defineStore(
  'token',
  () => {
    const token = ref(null)
    const setToken = (value) => {
      token.value = value
    }
    const getToken = () => token.value
    const removeToken = () => {
      token.value = null
    }
    return { token, getToken, setToken, removeToken }
  },
  {
    persist: true
  }
)

export default userToken
