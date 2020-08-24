import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
//http://123.207.32.32:8000/home/multidata

createApp(App).use(store).use(router).mount('#app')

axios({
    url:"http://123.207.32.32:8000/home/multidata"
    }).then(function(res){
        console.log(res)
    })

// axios.all([axios({}

// ),axios({

// })]).then(
//     function (res){
//         return res
//     }
// )