import React from 'react';

class FormDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      remark: '',
      city: '',
      gender: 'male',
      mood: false,
    };
  }

  handleInputChange = e => {
    console.log(e.target.value);
    if (!this.state.hasOwnProperty(e.target.name)) {
      return;
    }
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCheckboxChange = e => {
    console.log(e.target.checked);
    if (!this.state.hasOwnProperty(e.target.name)) {
      return;
    }
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };

  render() {
    return (
      <>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="remark">Remark</label>
            <textarea
              id="remark"
              name="remark"
              value={this.state.remark}
              onChange={this.handleInputChange}
            ></textarea>
          </div>

          <div>
            <label htmlFor="remark">Remark</label>
            <select id="city" name="city" value={this.state.city} onChange={this.handleInputChange}>
              <option value="" disabled>
                请选择
              </option>
              <option value="beijing">北京</option>
              <option value="shanghai">上海</option>
              <option value="shenzhen">深圳</option>
            </select>
          </div>

          <div>
            <label htmlFor="mood">is Happy?</label>
            <input
              id="mood"
              name="mood"
              type="checkbox"
              checked={this.state.mood}
              onChange={this.handleCheckboxChange}
            ></input>
          </div>

          <div>
            <label htmlFor="gender-male">男</label>
            <input
              id="gender-male"
              name="gender"
              type="radio"
              checked={this.state.gender === 'male'}
              value="male"
              onChange={this.handleInputChange}
            ></input>

            <label htmlFor="gender-female">女</label>
            <input
              id="gender-female"
              name="gender"
              type="radio"
              checked={this.state.gender === 'female'}
              value="female"
              onChange={this.handleInputChange}
            ></input>
          </div>
        </form>
      </>
    );
  }
}

export default FormDemo;
