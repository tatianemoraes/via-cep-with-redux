import { TYPES } from './types';
import api from '../../../services/api';

const { SET_CEP, GET_ADDRESS } = TYPES;

export function getCep(cep) { 
  return async (dispatch) => {
    const { data : { 
      logradouro, 
      complemento, 
      bairro, 
      localidade, 
      uf 
    } } = await api.get(`/${cep}/json`);
    const info = { logradouro, complemento, bairro, localidade, uf }
    await dispatch(infoCep(info));
  }
}

export function infoCep(values) {
  return {
    type: SET_CEP, 
    payload: values
  }
}

export function returnData() {
  return {
    type: GET_ADDRESS
  }
}