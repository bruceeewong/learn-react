import React from 'react';

class EventDemo extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler1 = this.clickHandler1.bind(this);
  }

  // 成员方法：this 为 undefined
  clickHandler1(e) {
    e.preventDefault();
    console.log(this);
  }

  // 静态方法：this指向当前实例
  clickHandler2 = e => {
    e.preventDefault();
    console.log(this);
  };

  // 获取 event
  clickHandle3 = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log('target: ', e.target);
    console.log('currentTarget: ', e.currentTarget);
    console.log('event: ', e);
    console.log('event constructor: ', e.__proto__.constructor); // MouseEvent
    // 原生事件
    console.log('event nativeEvent: ', e.nativeEvent);
    console.log('event nativeEvent: ', e.nativeEvent.target);
    console.log('event nativeEvent: ', e.nativeEvent.currentTarget);
  };

  clickHandler4(id, title, e) {
    console.log('id: ', id);
    console.log('title: ', title);
    console.log('event: ', e);
  }

  clickHandler5 = (id, title, e) => {
    console.log('id: ', id);
    console.log('title: ', title);
    console.log('event: ', e);
  };

  render() {
    return (
      <>
        <a href="#" onClick={this.clickHandler3}>
          click me
        </a>
        <p onClick={this.clickHandler4.bind(this, 1, 'title')}>get id & title</p>
        <p onClick={e => this.clickHandler5(1, 'title', e)}>get id & title</p>
      </>
    );
  }
}

export default EventDemo;
