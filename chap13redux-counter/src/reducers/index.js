import * as types from "../actions/ActionTypes";

// 초리듀서의 초기상태를 정의한 함수
const initialState = {
  color: "black",
  number: 0
};

// 리듀서 함수 정의하기
// state와 action을 파라미터로 받고 state값이 정의 되어 있지 않으면 initialState를 기본값으로 사용
// aciton type의 상태는 3개가 있는데 증가,감소, SET_COLOR 3개로 볼 수 있다.
function counter(state = initialState, action)  {
  switch(action.type) {
    case types.INCREMENT:
    return {
      ...state,
      number: state.number+1
    };
    case types.DECREMENT:
    return {
      ...state,
      number: state.number+1
    }
    case types.SET_COLOR:
    return {
      ...state,
      color: action.color
    };
    default:
      return state;
  }
}

export default counter;