import Home from '../page/home'
import Detail from '../page/detail'
import Login from '../page/login'
import Actions from '../page/actions'
import Organization from '../page/organization'
import Notfind from '../page/notfind'

export default [
    {
        path:'/',
        component:Home,
        auth:true,
    },
    {
        path:'/detail',
        component:Detail,
        auth:true,
    },
    {
        path:'/login',
        component:Login,
    },
    {
        path:'/actions',
        component:Actions,
    },
    {
        path:'/organization',
        component:Organization,
    },
    {
        path:'/404',
        component:Notfind,
    },
];