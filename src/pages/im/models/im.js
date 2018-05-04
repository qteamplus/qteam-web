import * as imService from '../services/im';

export default {
    namespace: 'im',
     
    state: {
        notifications : null,
        messages:null,
        _targetId:null,     //存储选中左侧成员列表
        selectedNotyIndex: null,
        teamid : 1,
    },

    reducers: {
        load(state, {payload} ){
            return {...state,...payload};
        },
        loadMessages(state, {payload} ){
            return {...state,...payload};
        },
    },

    effects:{
        *fetch({ payload }, { call, put }){
            const {data} = yield call(imService.fetch);
            yield put({
                type: 'load',
                payload: {
                  notifications: data,
                },
              });
        } ,
        *fetchMessages({ payload }, { call, put }){
            let {notification} = payload;
            const {data} = yield call(imService.fetchMessages,notification);
            console.log(data);
            yield put({
                type: 'loadMessages',
                payload: {
                    _targetId:notification._targetId,
                    messages: data,
                },
              });
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

