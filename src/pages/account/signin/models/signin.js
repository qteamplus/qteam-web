
import {routerRedux} from 'dva/router'
export default{
    namespace:"signin",
    state:{
        // userName:"",
        // password:"",
    },
    reducers:{
        // logon(state,{payload:{userName,password}}){
        //     return {...state,userName,password}
        // }
    },
    subscriptions:{
        connectWatcher({dispatch}){
            return window.ChatWatcher.connectionListen((status)=>{
                    
                if(status == window.Strophe.Status.CONNECTED){
                    console.log(`the status is ${status}`);   
                    dispatch(routerRedux.push('/im'));
                }
            });
        } 
    }
}