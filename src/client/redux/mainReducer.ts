import { combineReducers } from 'redux';
import { generalReducer, GeneralState } from './general/reducer';

export interface RootState {
    main: GeneralState;
}

export const mainReducer = combineReducers<RootState>({
    main: generalReducer,
});
