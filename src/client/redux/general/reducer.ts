import { generalTypes } from './constants';
import {Garden} from '../types'

export interface GeneralState {
    fetching: boolean;
    error: boolean;
    gardens: Garden[]
}

const initialState: GeneralState = {
    fetching: true,
    error: false,
    gardens: []
};

export const generalReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case generalTypes.GET_DATA:
            return {
                ...state,
                fetching: true,
                error: false
            };
        case generalTypes.GET_DATA_SUCCESS:
            return {
                ...state,
                fetching: false,
                error: false,
                gardens: action.payload
            };
        case generalTypes.GET_DATA_FAILURE:
            return {
                ...state,
                fetching: false,
                error: true
            };
        default:
            return state;
    }
};
