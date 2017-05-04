import pathToRegexp from 'path-to-regexp';
import * as weixinService from '../services/weixin';

export default {
  namespace: 'weixinpayment',
  state: {
    price: 0,
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        const match = pathToRegexp('/WeixinPayment/:laundryId').exec(pathname);
        if (match) {
          const laundryId = match[1];
          dispatch({ type: 'startPayment', payload: { laundryId } });
        }
      });
    },
  },
  reducers: {
    startPayment(state, { payload: { laundryId } }) {
      const result = weixinService.fetchPrice(laundryId);
      return { ...state, ...result };
    },
  },
};
