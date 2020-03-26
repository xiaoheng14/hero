import { queryHeroList, getHeroDetails } from '@/services/api';

export default {
  namespace: 'hero',
  state: {
      heros: [],
      filterKey: 0,
  },
  subscriptions: {
    setup({ dispatch, history }){
        return history.listen(({ pathname, query }) => {
            if (pathname === '/hero') {
                dispatch({
                    type: 'fetch',
            })
          }
        });
    }
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload};
    },
  },
  effects: {
    *fetch({ type, payload }, { put, call, select }) {
        const herolist = yield call(queryHeroList);
        // const herodetails = yield call(getHeroDetails, { ename: 110 });
        // console.log(herodetails);

        // const localData = [
        //     {
        //         ename: 105,
        //         cname: '廉颇',
        //         title: '正义爆表',
        //         new_type: 0,
        //         hero_type: 3,
        //         skin_name: '正义爆表|地狱岩魂',
        //     },
        //     {
        //         ename: 106,
        //         cname: '小乔',
        //         title: '恋之微风',
        //         new_type: 0,
        //         hero_type: 2,
        //         skin_name: '恋之微风|万圣前夜|天鹅之梦|纯白花嫁|缤纷独角兽',
        //     },
        // ];
        yield put({
            type: 'save',
            payload: {
                heros: herolist,
            },
        });
    },
  },
}
