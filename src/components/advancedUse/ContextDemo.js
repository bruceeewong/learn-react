import React from 'react';

const ThemeContext = React.createContext('light');

const ThemeLink = () => {
  return (
    <ThemeContext.Consumer>
      {value => {
        return <p>link's theme is {value}</p>;
      }}
    </ThemeContext.Consumer>
  );
};

class ThemeButton extends React.Component {
  render() {
    const theme = this.context;
    return <p>button's theme is {theme}</p>;
  }
}
ThemeButton.contextType = ThemeContext;

const ToolBar = () => {
  return (
    <section>
      <ThemeLink />
      <ThemeButton />
    </section>
  );
};

class ContextDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
    };
  }

  changeTheme = () => {
    this.setState({
      theme: this.toggleTheme(),
    });
  };

  toggleTheme = () => {
    return this.state.theme === 'light' ? 'black' : 'light';
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <ToolBar />
        <div>
          <button onClick={this.changeTheme}>change theme</button>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default ContextDemo;
