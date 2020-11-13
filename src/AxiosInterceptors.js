import axios from 'axios';
import toast from './toast'
import store from './store'

export default function setup() {
    axios.interceptors.request.use(function(config) {
        document.getElementsByTagName("body")[0].style.cursor="wait";
        config.headers['Content-Type'] = 'application/json';
        config.headers.Authorization = "Bearer " + store.state.clientAppToken;
        return config;}, function(err) {
        return err;
    });
    axios.interceptors.response.use(function(response){
        document.getElementsByTagName("body")[0].style.cursor="default";
        return response},function(error){
        var objErrors=JSON.stringify(error.response.data.errors);
        switch(error.response.status){
            case 400:{toast.error(objErrors);break;} //Bad request
            case 401:{toast.error(objErrors);break;} //Unauthorized
            case 404:{toast.error(objErrors);break;} //Not Found
            case 422:{
                var errMsgs="";
                error.response.data.errors.forEach(msg => {
                    var res=JSON.stringify(msg.message);
                    errMsgs+=res+"\n";
                });
                toast.error(errMsgs);
                break;
            } //UnprocessableEntity
            case 500:{toast.error(objErrors);break;} //Internal Server Error
        }
    })
}
