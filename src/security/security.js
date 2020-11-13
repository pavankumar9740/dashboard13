import Oidc from 'oidc-client';

var mgr = new Oidc.UserManager({
    authority:process.env.VUE_APP_Authority,
    client_id: process.env.VUE_APP_AppId,
    redirect_uri: process.env.VUE_APP_RedirectUri,
    response_type: 'id_token token',
    scope: 'openid profile ProductManagementApi VendorManagementApi',
    post_logout_redirect_uri: process.env.VUE_APP_PostLogoutUri,

    userStore: new Oidc.WebStorageStateStore({ store: window.localStorage }),
})

export default mgr;