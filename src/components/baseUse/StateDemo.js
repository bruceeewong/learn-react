import React from 'react';

class StateDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  add = () => {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log('count by callback', this.state.count); // after update
    //   }
    // );
    // console.log(this.state.count); // not update yet

    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      });
      console.log('count by setTimeout', this.state.count); // after update
    }, 0);
  };

  bodyClickHandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log('count in body event', this.state.count); // after update
  };

  componentDidMount() {
    // 在自定义事件中同步更新
    document.body.addEventListener('click', this.bodyClickHandler);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.bodyClickHandler);
  }

  render() {
    return (
      <>
        <p>{this.state.count}</p>
        <button onClick={this.add}>Add</button>
      </>
    );
  }
}

export default StateDemo;
