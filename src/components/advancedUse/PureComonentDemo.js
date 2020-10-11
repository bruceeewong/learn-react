import React from 'react';

class PureComponentDemo extends React.PureComponent {
  render() {
    return <h1>Hello</h1>;
  }

  // shouldComponentUpdate() {
  //   /* 默认加上浅比较 */
  // }
}

export default PureComponentDemo;
