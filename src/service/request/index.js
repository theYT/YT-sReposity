import axios from 'axios'
import {BASE_URL,TIMEOUT}from "./config"
import useHomeStore from '../../stores/modules/home'
import { storeToRefs } from 'pinia'

const HomeStore=useHomeStore()
const { isLoading }=storeToRefs(HomeStore)

class HYRequest {
  constructor(BASE_URL, TIMEOUT) {
    this.instance = axios.create({
      BASE_URL,
      TIMEOUT
    })
  }

  request(config) {
    isLoading.value=true
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
        isLoading.value=false
      }).catch(err => {
        reject(err)
        isLoading.value=false
      })
    })
  }

  get(config) {
    return this.request({ ...config, method: "get" })
  }

  post(config) {
    return this.request({ ...config, method: "post" })
  }
}

export default new HYRequest(BASE_URL,TIMEOUT)

