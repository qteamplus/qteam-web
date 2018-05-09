import * as imService from '../services/im';

export default {
    namespace: 'im',
     
    state: {
        notifications : null,
        messages:null,
        user2messages:[],
        // [{
        //     userId:'',
        //     messages:[
        //         {

        //         },
        //         {

        //         }
        //     ]
        // }]
        _targetId:null,     //存储选中左侧成员列表
        selectedNotyIndex: null,
        teamid : 1,
    },

    reducers: {
        load(state, { payload} ){
            return {...state,...payload};
        },
        loadMessages(state, { payload} ){
            let {_targetId,messages} = payload;

            let _users = state.user2messages.filter(item=>{
                return item.userId===_targetId;
            })

            if(_users==null || _users.length<1){
                state.user2messages.push({userId: _targetId,messages: messages});
            }
            return {...state,messages,_targetId};
        },
        updateNotification(state,{ payload}){
            let {notification} = payload;
            let notys = state.notifications.filter(item=>{
                return item._id!=notification._id;
            });
            return {...state,notifications: notys};
        },
    },

    effects:{
        *fetch({ payload }, { call, put }){
            const {data} = yield call(imService.fetch);
            data.sort((a,b)=>{
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
            let {notification} = payload;
            const _user2messages =yield select(state=>state.im.user2messages);
            let _users = _user2messages.filter(item=>{
                return item.userId===notification._targetId;
            })
            if(_users!=null && _users.length>0){
                //本地应存储当前用户的聊天记录；
                yield put({
                    type: 'loadMessages',
                    payload: {
                        _targetId:notification._targetId,
                        messages: _users[0].messages,
                    },
                });
            }else{
                const {data} = yield call(imService.fetchMessages,notification);
                data.sort((a,b)=>{
                    if(b.createdAt < a.createdAt) return 1;
                    if(b.createdAt === a.createdAt) return 0;
                    if(b.createdAt > a.createdAt) return -1;
                })
                yield put({
                    type: 'loadMessages',
                    payload: {
                        _targetId:notification._targetId,
                        messages: data,
                    },
                });
            }
        } ,
    },
    //发送消息；
    *sendMessage({ payload },{ call, put, select }){
        const { text } = payload;
        console.log("text=" + text);
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

