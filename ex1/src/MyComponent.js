import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      안녕하세요. 제 이름은 {name}입니다. <br />
      children 값은 {children}
      입니다. <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '보미썽',
};

MyComponent.propTypes = { //크롬 개발자 도구에서 ERROR 뜸
  name: PropTypes.string, //name에는 string이 와야한다
  favoriteNumber: PropTypes.number.isRequired, //number는 필수로 정보가 입력되어야 한다
};

export default MyComponent;
