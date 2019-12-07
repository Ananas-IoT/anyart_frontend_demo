import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from "./components/LoginPage";
import Registration from "./components/Registration";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'log in',
            component: LoginPage
        },
        {
            path: '/registration',
            name: 'sign up',
            component: Registration
        }
    ]
})