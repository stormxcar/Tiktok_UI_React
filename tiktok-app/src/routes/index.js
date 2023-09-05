//layout
import {HeaderOnly} from '~/Component/Layout'

//pages
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
// public routes
const publicRoutes = [
    {
        path: '/', component: Home
    },
    {
        path: '/following', component: Following
    },
    {
        path: '/profile', component: Profile
    },
    // dung default layout
    {
        path: '/upload', component: Upload , Layout : HeaderOnly 
    },
    // layout chi co header
]

const privateRoutes = [
    
]

export { publicRoutes, privateRoutes }