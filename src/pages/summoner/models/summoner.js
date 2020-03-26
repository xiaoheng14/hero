import { querySummoner } from '@/services/api';

export default {
    namespace: 'summoner',
    state: {
        summoners: [],
    },
    subscriptions: {
        setup({ dispatch, history }){
            return history.listen(({ pathname, query }) => {
                if(pathname === '/summoner') {
                    dispatch({
                        type: 'fetch',
                    })
                }
            });
        },
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
    effects: {
        *fetch({ type, payload }, { put, call, select }) {
            const summonerlist = yield call(querySummoner);
            console.log(summonerlist);
            yield put({
                type: 'save',
                payload: {
                    summoners: summonerlist,
                },
            });
        },
    },
}
