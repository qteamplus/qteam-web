import * as imService from '../services/im';

export default {
    namespace: 'im',
     
    state: {
        notifications: null,
        target2messages: new Map(),
        // [{
        //     _targetId:'',
        //     messages:[
        //         {

        //         },
        //         {

        //         }
        //     ]
        // }]
        _targetId: null,   
        selectedNotyIndex: null,
        teamid : 1,
    },

    reducers: {
        load(state, { payload} ){
            return { ...state,...payload };
        },
        loadMessages(state, { payload } ){
           // let target2messages = Object.assign({},state.target2messages);
            let newState = {target2messages: state.target2messages.set(payload._targetId, payload.messages), _targetId: payload._targetId};
            return { ...state,  ...newState };
        },
        updateNotification(state,{ payload}){
            let {notification} = payload;
            let notys = state.notifications.filter(item=>{
                return item._id != notification._id;
            });
            return {...state, notifications: notys};
        },
        targetSelected(state, { payload }){
            return { ...state, ...{ _targetId: payload._targetId}}
        }
    },

    effects:{
        *fetch({ payload }, { call, put }){
            const {data} = yield call(imService.fetch);
            data.sort((a,b) => {
                if(b.createdAt > a.createdAt) return 1;
                if(b.createdAt === a.createdAt) return 0;
                if(b.createdAt < a.createdAt) return -1;
            })
            yield put({
                type: 'load',
                payload: {
                  notifications: data,
                },
              });
        } ,
        *fetchMessages({ payload }, { call, put ,select}){
            let { notification } = payload;
            const _target2messages =yield select( state => state.im.target2messages);
            let _users = _target2messages.get(notification._targetId);
           
            if(_users != null && _users.length > 0){
                yield put({
                    type: 'targetSelected',
                    payload: {
                        _targetId: notification._targetId
                    },
                });
            }else{
                const { data } = yield call(imService.fetchMessages, notification);
                data.sort((a,b) => {
                    if(b.createdAt < a.createdAt) return 1;
                    if(b.createdAt === a.createdAt) return 0;
                    if(b.createdAt > a.createdAt) return -1;
                })
                yield put({
                    type: 'loadMessages',
                    payload: {
                        _targetId: notification._targetId,
                        messages: data,
                    },
                });
            }
        } ,
    },

    subscriptions: {
        setup({ dispatch, history }) {
          return history.listen(({ pathname, query }) => {
            if (pathname === '/im') {
              dispatch({ type: 'fetch', payload: query });
            }
          });
        },
      },
}

