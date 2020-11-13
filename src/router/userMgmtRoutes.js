import roles from './roles';
const userMgmtRouteArray=[
    {"name":"UserManagement","path":"/UserManagement","component":"","url":process.env.VUE_APP_UserMgmtAppUrl, "allowedRoles":[roles.MfAdmin, roles.MfAccountManager, roles.TaxAuthAdmin,roles.TaxAuthRevenueOfficer,roles.TpsafAdmin,roles.TpsafFacilityAdmin,roles.TsspAdmin,roles.TsspIntermediate]},
    {"name":"UserMgmtHome","path":"/UserMgmtHome","component":"UserMgmtHome","url":"","allowedRoles":[roles.MfAdmin, roles.MfAccountManager,roles.TaxAuthAdmin, roles.TaxAuthRevenueOfficer,roles.TsspAdmin, roles.TsspIntermediate, roles.TpsafAdmin, roles.TpsafFacilityAdmin]},
    {"name":"Users","path":"/Users","component":"Users","url":process.env.VUE_APP_UserMgmtAppUrl,"allowedRoles":[roles.MfAdmin, roles.MfAccountManager,roles.TaxAuthAdmin, roles.TaxAuthRevenueOfficer,roles.TsspAdmin, roles.TsspIntermediate, roles.TpsafAdmin, roles.TpsafFacilityAdmin]},
]

export default userMgmtRouteArray;