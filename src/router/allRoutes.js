import vendorMgmtRouteArray  from './vendorMgmtRoutes'
import dashboardRouteArray  from './dashboardRoutes'
import orderMgmtRouteArray  from './orderMgmtRoutes'
import prodMgmtRouteArray  from './prodMgmtRoutes'
import userMgmtRouteArray  from './userMgmtRoutes'

var commonRoutes=[
    {"name":"Home","path":"/","component":"Home","url":""},
    {"name":"Callback","path":"/Callback","component":"Callback","url":""},
];

var allRoutes = commonRoutes
.concat(orderMgmtRouteArray)
.concat(vendorMgmtRouteArray)
.concat(dashboardRouteArray)
.concat(prodMgmtRouteArray)
.concat(userMgmtRouteArray)

export default allRoutes;