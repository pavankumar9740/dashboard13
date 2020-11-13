import allRoutes from './allRoutes';

const isRouteAllowed = (routeName, role) =>
{
    var route = allRoutes.find(x=>x.name==routeName)
    return route.allowedRoles.indexOf(role)!=-1;
}

const getAllowedRoutes = (role)=>
{
    var allowedRoutes =[];
    allRoutes.forEach(route => {
        if(route.allowedRoles!=null && route.allowedRoles.indexOf(role)!=-1)
        {
            allowedRoutes.push(route.name);
        }
    });

    return allowedRoutes;
}

export {isRouteAllowed, getAllowedRoutes};