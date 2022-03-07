import {createRouter, createWebHistory } from "vue-router";
import App from '../App.vue'
import FirstQuestion from '../components/FirstQuestion.vue'
import Main from '../page/Main.vue'


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/question1',
        component: FirstQuestion,
    }
    
]
const router = createRouter( {
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router