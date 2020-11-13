import Vue from 'vue'
import VueRouter from 'vue-router'
import localRouteArray from './localRoutes'
import allRoutes from './allRoutes'

Vue.use(VueRouter)

const routes =[];

allRoutes.forEach(entry => {
    var isLocalRoute = localRouteArray.indexOf(entry.name)!=-1;
    if(isLocalRoute || entry.url!="") //create routes only if it is local route or external route
    {
        var route = {
            path:entry.path,
            name:entry.name,
            beforeEnter(to, from, next){
                //var isLocalRoute = localRouteArray.indexOf(entry.name)!=-1;
                if(localRouteArray.indexOf(entry.name)!=-1)
                {
                    next();
                }
                else if(entry.url!=""){
                    location.href = entry.component!=""? entry.url + to.path: entry.url;
                }
            },
            component: () => import('../views/' + entry.component + '.vue'),
            props:true,
            meta: {
                requiresAuth: entry.name!='Home' && entry.name!='Callback' && process.env.NODE_ENV === "development"}
        }
        routes.push(route);
    }
});

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach(async(to, from, next) => {
    let app = router.app.$data || { isAuthenticated: false };
    if (app.isAuthenticated) {
        //already signed in, we can navigate anywhere
        next()
    } else if (to.matched.some(record => record.meta.requiresAuth)) {
        //authentication is required. Trigger the sign in process, including the return URI
        router.app.authenticate(to.path).then(() => {
            next();
        });
    } else {
        //No auth required. We can navigate
        next()
    }
});

export default router