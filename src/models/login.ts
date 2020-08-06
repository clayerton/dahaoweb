import { stringify } from 'querystring';
import { history, Reducer, Effect } from 'umi';
import { authNameByCompany, COMPANY_TYPE, jumpToNextScreen, setAuthority } from '@/utils/authority';

import { fakeAccountLogin } from '@/services/login';
import { getPageQuery } from '@/utils/utils';
import {unit} from '@/services/user';
export interface StateType {
  status?: 'ok' | 'error';
  type?: string;
  currentAuthority?: 'user' | 'guest' | 'admin';
}

export interface LoginModelType {
  namespace: string;
  state: StateType;
  effects: {
    login: Effect;
    logout: Effect;
    unit: Effect;
  };
  reducers: {
    changeLoginStatus: Reducer<StateType>;
  };
}

const Model: LoginModelType = {
  namespace: 'login',

  state: {
    status: undefined,
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);
      console.log(response)
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
      // Login successfully
      if (response) {
        localStorage.setItem('userId', response.user.id); // 页面显示判断的值
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user)); // 存用户   localstorage存对象需要把对象转成字符串
        localStorage.setItem('role', JSON.stringify(response.user.role)); // 存角色
        localStorage.setItem('company', JSON.stringify(response.company)); // 工厂
        const unitResponse = yield call(unit, {});
        try {
          localStorage.setItem('unit', JSON.stringify(unitResponse.items)); // 页面显示判断的值
        } catch (e) {}
        yield put({ type: 'authHandle', payload: authNameByCompany(response.company) });
        yield put({ type: 'accountHandle', payload: response.user });

        jumpToNextScreen(authNameByCompany(response.company));
      }
    },

    *logout({}, {put}) {
     
      yield put({ type: 'authHandle', payload: COMPANY_TYPE.none });
      yield put({ type: 'accountHandle', payload: null });
      localStorage.clear();
      history.push('/user/login');
    },
    *unit({}, { call, put }) {
      const response = yield call(unit, {});
      if (response) {
        localStorage.setItem('unit', JSON.stringify(response.items)); // 页面显示判断的值
      }
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      setAuthority(payload);
      return {
        ...state,
        status: payload.status,
        type: payload.type,
      };
    },
  },
};

export default Model;
