import React from 'react';

class TestSetState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  componentDidMount() {
    this.setState({ count: this.state.count + 1 });
    console.log('1st: ', this.state.count); // 0
    this.setState({ count: this.state.count + 1 });
    console.log('2nd: ', this.state.count); // 0
    setTimeout(() => {
      this.setState({ count: this.state.count + 1 });
      console.log('3rd: ', this.state.count); // 2
    }, 0);
    setTimeout(() => {
      this.setState({ count: this.state.count + 1 });
      console.log('4th: ', this.state.count); // 3
    }, 0);
  }
  render() {
    return <h1>{this.state.count}</h1>;
  }
}

export default TestSetState;
