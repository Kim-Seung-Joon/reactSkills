import * as types from '../actions/ActionTypes';

const initialState = {
  number: 0
}


// number state에 관한 내용(액션 타입이 증가면 1증가, 감소면 1감소, 아니면 초기 number상태(0))
const number = (state=initialState, action) =>{
  switch(action.type){
    case types.INCREMENT:
    return {
      number: state.number+1
    }
    case types.DECREMENT:
    return {
      number: state.number-1
    }
    default:
    return state;
  }
}

export default number;