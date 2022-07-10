import { generalTypes } from "./constants";

export const getInitData = () => ({
    type: generalTypes.GET_DATA,
});

export const getDataSuccess = (data: any) => ({
    type: generalTypes.GET_DATA_SUCCESS,
    payload: data,
});

export const getDataFailure = (error: any) => ({
    type: generalTypes.GET_DATA_FAILURE,
    payload: error,
});