import { Effect, Reducer } from 'umi';
import {overview} from '@/services/overview';

export interface MenuModalState {
    breadcrumbNameMap? : [] 
  }
export interface menuType {
    namespace: 'menu';
    state: MenuModalState;
    effects: {
        fetch: Effect;
    };
    reducers: {
        saveFetch: Reducer<MenuModalState>;
    }
}
const MenuModal: menuType = {
    namespace: 'menu',
    state: {
        breadcrumbNameMap: [],
    },
    effects: {
        *fetch({payload}, {call, put}) {
            console.log(payload)
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
export default MenuModal;