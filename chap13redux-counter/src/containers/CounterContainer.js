import Counter from '../components/Counter';
import * as actions from '../actions';
import {connect} from 'react-redux';

export function getRandomColor()  {
  //13가지 색깔에 대한 정의
  //배열이니까
  const colors = [
    '#495057',
    '#f03e3e',
    '#d6336c',
    '#ae3ec9',
    '#7048e8',
    '#4263eb',
    '#1c7cd6',
    '#1098ad',
    '#0ca678',
    '#37b24d',
    '#74b816',
    '#f59f00',
    '#f76707',
  ];
  // 0~12(총 13개)중에서 임의의 숫자 선정
  const random = Math.floor(Math.random() *13);

  return colors[random];
}

const mapStateToProps = (state) =>({
  color: state.color,
  number: state.number
});

// 액션 생성 함수를 사용하여 액션을 생성하고, 해당 액션을 dispatch하는 함수를 만든 후 이를 props로 연결해준다.

const mapDispatchToProps = (dispatch) =>({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor : () => {
    const color = getRandomColor();
    dispatch(actions.setColor(color));
  }
});

//Counter컴포넌트의 container 컴포넌트

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;

