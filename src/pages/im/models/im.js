import * as imService from '../services/im';

export default {
    namespace: 'im',
     
    state: {
        notifications : null,
        selectedNotyIndex: null,
        teamid : 1,
    },

    reducers: {
        load(state, {payload} ){
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

