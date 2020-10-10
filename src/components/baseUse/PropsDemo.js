import React from 'react';
import PropTypes from 'prop-types';

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

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: [],
    };
  }

  onChange = value => {
    this.setState({
      items: [
        ...this.state.items,
        {
          id: new Date().getTime().toString(),
          value,
        },
      ],
    });
  };

  render() {
    return (
      <div>
        <Input value={this.state.value} onChange={this.onChange}></Input>
        <List items={this.state.items}></List>
      </div>
    );
  }
}

export default TodoList;
