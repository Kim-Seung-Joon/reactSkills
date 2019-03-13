import React from 'react';
// import styles from './CSSModule.module.css';
import styles from './CSSModule.module.scss';
import classNames from 'classnames/bind';

/*
ex)
import classNames from 'classnames;

classNames('one','two') -> 1,2
classNames('one', {two: true}) -> 1,2
classNames('one', ['two','three']); -> 1,2,3

const myClass = 'hello';
classNames('one', myClass, {myCondition:true}); => 1 hello myCondition
*/ 

const cx = classNames.bind(styles);

// const CSSModule = () =>{
//   return(
//     <div className={`${styles.wrapper} ${styles.inverted}`}>
//       안녕하세요,저는 <span className="something">CSS Module!!!</span>
//     </div>
//   );
// };

const CSSModule = () =>{
  return(
    <div className={cx('wrapper','inverted')}>
      여기에다가 적용합니다. 저는 <span className="something">CSS Module!</span>
    </div>
  )
}

export default CSSModule;


