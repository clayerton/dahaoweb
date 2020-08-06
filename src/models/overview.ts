import { Effect, Reducer } from 'umi';
import {overview} from '@/services/overview';

export interface HomeModelState {
    overData?: {
        device?: object;
        notice?: object;
        order?: object;
        plan?: object;
        yield?: object;

    };
  }
export interface OverviewType {
    namespace: 'home';
    state: HomeModelState;
    effects: {
        fetch: Effect;
    };
    reducers: {
        saveFetch: Reducer<HomeModelState>;
    }
}
const HomeModal: OverviewType = {
    namespace: 'home',
    state: {
        overData: {},
    },
    effects: {
        *fetch({payload}, {call, put}) {
            const response  = yield call(overview, payload);
            yield put({
                type: 'saveFetch',
                payload: response,
            })
        }
    },
    reducers: {
        saveFetch(state, action) {
            return {
                ...state, 
                overData: action.payload,
            }
        }
    }

}
export default HomeModal;