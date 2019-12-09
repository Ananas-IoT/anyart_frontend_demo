import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from "./components/LoginPage";
import Registration from "./components/Registration";
import Home from "./components/Home";
import AvailableOrders from "./components/AvailableOrders";
import Profile from "./components/Profile";

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
        },
        {
            path: '/available_orders',
            name: 'available-orders',
            component: AvailableOrders
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
    ]
})