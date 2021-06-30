import { TYPES } from './types';
import { INITIAL_STATE } from './state'; 

const { SET_CEP, GET_ADDRESS } = TYPES;

const ceps = (state = INITIAL_STATE, action) => {

  switch(action.type) {

    case SET_CEP: {
      return { response: action.payload }
    }

    case GET_ADDRESS: {
      return { ...state.response }
    }

    default: {
      return state; 
    }
  }
}

export default ceps;