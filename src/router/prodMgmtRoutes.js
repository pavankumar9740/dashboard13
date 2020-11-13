import roles from './roles';
const prodMgmtRouteArray=[
    {"name":"ProdMgmtHome","path":"/ProdMgmtHome","component":"ProdMgmtHome","url":"","allowedRoles":[roles.TsspAdmin, roles.TsspIntermediate]},
    {"name":"ReelSizeManagement","path":"/ReelSizeManagement","component":"ReelSizeManagement","url":process.env.VUE_APP_ProdMgmtAppUrl,"allowedRoles":[roles.TsspAdmin, roles.TsspIntermediate]},
    {"name":"ProductManagement","path":"/ProductManagement","component":"ProductManagement","url":process.env.VUE_APP_ProdMgmtAppUrl,"allowedRoles":[roles.TsspAdmin, roles.TsspIntermediate]},
    {"name":"MeasurementUnits","path":"/MeasurementUnits","component":"MeasurementUnits","url":process.env.VUE_APP_ProdMgmtAppUrl,"allowedRoles":[roles.TsspAdmin, roles.TsspIntermediate]},
]

export default prodMgmtRouteArray;