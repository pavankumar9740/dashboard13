import 'izitoast/dist/css/iziToast.min.css'
import iZtoast from 'izitoast'

const toast = {
    settings: () => {
        iZtoast.settings({
            timeout: 5000,
            icon: 'material-icons',
            transitionIn: 'flipInX',
            transitionOut: 'flipOutX',
            onOpening: function(){
                console.log('callback abriu!');
            },
            onClosing: function(){
                console.log("callback fechou!");
            }
        });
    },
    info: (message, title = 'Info') => {
        return iZtoast.info({
            title: title,
            message: message,
            position: 'TopLeft'
        });
    },
    error: (message, title = 'Error') => {
        return iZtoast.error({
            title: title,
            message: message,
            position: 'bottomCenter'
        });
    },
    success: (message, title = 'Success') => {
        return iZtoast.success({
            title: title,
            message: message,
            position: 'bottomRight'
        });
    },
    confirm: (message, title = 'Confirm') => {
        iZtoast.question({timeout: 20000,close: false,overlay: true,
            displayMode: 'once',id: 'question',zindex: 999,
            title: title,message: message,position: 'center',
            buttons: [
                ['<button><b>YES</b></button>', function (instance, toast) {
                    instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                }, true],
                ['<button>NO</button>', function (instance, toast) {
         
                    instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');

                },false],
            ],
            onClosing: function(instance, toast, closedBy){
                console.info('Closing | closedBy: ' + closedBy);
            },
            onClosed: function(instance, toast, closedBy){
                console.info('Closed | closedBy: ' + closedBy);
            }
        });
    },
    warning: (message, title = 'Warning') => {
        return iZtoast.warning({
            title: title,
            message: message,
            position: 'bottomCenter'
        });
    }
};

export default toast;