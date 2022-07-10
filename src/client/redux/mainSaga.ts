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
        const data:ResponseGenerator = yield call(axios.get, '/api/garden');  
        yield put({ type: generalTypes.GET_DATA_SUCCESS, payload: data.data });
    } catch (e) {
        yield put({ type: generalTypes.GET_DATA_FAILURE, payload: e });
    }
}

function* mainSaga() {
    yield takeLatest(generalTypes.GET_DATA, fetchDataSaga);
}

export default mainSaga;
