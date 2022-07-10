import { put, takeLatest, call } from 'redux-saga/effects';
import { generalTypes } from './general/constants';
import {
} from './general/actions';
import axios from 'axios';

export interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}


export function* fetchDataSaga() {
    try {
        // fetch data from server
    } catch (e) {
        // handle error
    }
}

function* mainSaga() {
    yield takeLatest(generalTypes.GET_DATA, fetchDataSaga);
}

export default mainSaga;
