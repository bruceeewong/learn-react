import React from 'react';
import PropsType from 'prop-types';

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  handleMosue = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    return <div onMouseMove={this.handleMosue}>{this.props.render(this.state)}</div>;
  }
}

Mouse.propTypes = {
  render: PropsType.func.isRequired,
};

const RenderPropsDemo = props => {
  return (
    <div style={{ height: '500px' }}>
      <span>{props.a}</span>
      <Mouse
        render={({ x, y }) => (
          <h1>
            The mouse position: ({x}, {y})
          </h1>
        )}
      />
    </div>
  );
};

RenderPropsDemo.propTypes = {
  a: PropsType.string.isRequired,
};

export default RenderPropsDemo;
