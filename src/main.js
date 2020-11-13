import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import mgr from './security/security'
import axios from 'axios'
import AxiosInterceptors from './AxiosInterceptors'

Vue.use(Vuelidate)
Vue.use(BootstrapVue) 
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const globalData = {
  isAuthenticated: false,
  user: null,
  mgr: mgr,
  access_token:null
}

const globalMethods = {
  async authenticate(returnPath) {
    const user = await this.$root.getUser(); //see if the user details are in local storage
    if (user) {
      this.isAuthenticated = true;
      this.user = user;
    } else {
      await this.$root.signIn(returnPath);
    }
  },
  async getUser () {
    try {
      let user = await this.mgr.getUser();
      return user;
    } catch (err) {
      console.log(err);
    }
  },
  signIn (returnPath) {
    returnPath ? this.mgr.signinRedirect({ state: returnPath })
        : this.mgr.signinRedirect();
  }
}
AxiosInterceptors();

switch(process.env.NODE_ENV)
{
  case "development":
    var vProd = new Vue({
      router,
      store,
      data: globalData,
      methods: globalMethods,
      render: h => h(App),
    });
    vProd.$mount("#app");
    break;
    default:
      axios.get('/Account/Token?clientId='+process.env.VUE_APP_AppId).then(resp=>{ 
        let v = new Vue({
          router,
          store,
          data: globalData,
          methods: globalMethods,
          render: h => h(App),
          created(){
            this.access_token =resp.data;
            this.$store.commit("updateSession",resp.data);
          }
        });
        v.$mount("#app");
      });
        break;
}


