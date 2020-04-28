import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page from '@/components/page'
import Work from '@/components/work'
import frist from '@/components/frist'
const User = {
    template: `<div>
    <h3><font color="green">我是父组件 {{$route.params.id}} </font></h3>
    <router-view/>
    </div>`
}
const Profile = {
    template: `<div><h3><font color="red">我是Profile子组件 </font></h3></div>`
}
const Posts = {
    template: `<div><h3><font color="green">我是posts组件 </font></h3></div>`
}
Vue.use(Router)

export default new Router({
    mode: 'history',
    linkExactActiveClass: 'nav',
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: "/page",
            name: "Page",
            component: Page
        },
        {
            path: "/work",
            name: "Work",
            component: Work
        },
        {
            path: "/frist/:id",
            name: "frist",
            component: frist
        },
        {
            path: '/user/:id',
            name: "User",
            component: User,
            children: [
                //  {
                //    path: 'profile',
                //    name: "Profile",
                //    component: Profile,
                //  },
                {
                    path: '',
                    name: "Profile",
                    component: Profile,
                }, {
                    path: '/posts',
                    name: "Posts",
                    component: Posts,
                }
            ]
        }
    ]
})