import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onChange && this.props.onChange(this.state.value);
    this.setState({
      value: '',
    });
  };

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label htmlFor="value">Todo</label>
        <input id="value" value={this.state.value} onChange={this.handleChange}></input>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const List = props => (
  <ul>
    {props.items.map(item => {
      return <li key={item.id}>{item.value}</li>;
    })}
  </ul>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

class Footer extends React.Component {
  componentDidUpdate() {
    console.log('footer did update');
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.text === this.props.text) {
      return false; // 不重新渲染
    }
    return true; // 重新渲染
  }

  render() {
    return <p>{this.props.text}</p>;
  }
}

Footer.propTypes = {
  text: PropTypes.string.isRequired,
};

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: [],
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 如果setState使用了可变值，此处逻辑会因前后一致而不触发渲染
    console.log('next: ', nextState.items);
    console.log('current: ', this.state.items);
    if (_.isEqual(nextState.items, this.state.items)) {
      return false; // 不重新渲染
    }
    return true; // 重新渲染
  }

  onChange = value => {
    const newItem = {
      id: new Date().getTime().toString(),
      value,
    };

    // 数组更新方法：使用不可变值
    this.setState({
      items: this.state.items.concat(newItem),
    });
    // this.setState({
    //   items: [...this.state.items, newItem],
    // });

    // FIXME: 演示使用可变值导致SCU出bug
    // this.state.items.push(newItem);
    // this.setState({
    //   items: this.state.items,
    // });
  };

  render() {
    return (
      <div>
        <Input value={this.state.value} onChange={this.onChange}></Input>
        <List items={this.state.items}></List>
        <Footer text="底部文字" />
      </div>
    );
  }
}

export default TodoList;
