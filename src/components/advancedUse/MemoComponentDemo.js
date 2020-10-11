import React from 'react';

const MyComponent = (props) {
  return <h1>{props.name}</h1>
}
const areEqual = (prevProps, nextProps) => {
  // 两者浅比较，一致返回true,否则返回false
}

export default React.memo(MyComponent, areEqual);
