import * as types from '../actions/ActionTypes';

const initialState = {
  color: 'black'
}

// color에 관한 서브 리듀서!!!!

const color = (state=initialState, action) =>{
  switch(action.type) {
    case types.SET_COLOR:
    return {
      color: action.color
    }
    default:
    return state;
  }
}

export default color;