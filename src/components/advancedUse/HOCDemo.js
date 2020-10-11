import React from 'react';

const withMouse = Component => {
  class withMouseComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        x: 0,
        y: 0,
      };
    }

    handleMouseMove = event => {
      this.setState({
        x: event.clientX,
        y: event.clientY,
      });
    };

    render() {
      return (
        <div onMouseMove={this.handleMouseMove}>
          {/* 1. 透传props; 2. 新增 mouse 属性 */}
          <Component {...this.props} mouse={this.state} />
        </div>
      );
    }
  }
  return withMouseComponent;
};

const HOCDemo = props => {
  const { x, y } = props.mouse;
  return (
    <div>
      <span>
        mouse position: ({x}, {y})
      </span>
    </div>
  );
};

export default withMouse(HOCDemo);
