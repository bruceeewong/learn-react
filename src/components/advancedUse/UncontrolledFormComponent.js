import React from 'react';

class UncontrolledFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'default',
      checked: true,
    };

    this.nameInputRef = React.createRef();
    this.fileInputRef = React.createRef();
  }

  alertName = () => {
    const inputRef = this.nameInputRef.current;
    console.log(inputRef); // dom instance
    alert(inputRef.value);
  };

  showFile = e => {
    console.log({ ...e.target });
    const fileInputRef = this.fileInputRef.current;
    console.log(fileInputRef);
    console.log(fileInputRef.files);
  };

  fileFormSubmit = e => {
    e.preventDefault();

    const fileInputRef = this.fileInputRef.current;
    console.log(fileInputRef.files);
    const data = new FormData();
    data.append(fileInputRef.name, fileInputRef.files[0]);
    console.log(data);
  };

  render() {
    const { name, checked } = this.state;
    return (
      <>
        <div>
          <input defaultValue={name} ref={this.nameInputRef}></input>
          <span>state.name: {name}</span>
          <br></br>
          <button onClick={this.alertName}>Alert Name</button>
        </div>

        <div>
          <input type="checkbox" defaultChecked={checked}></input>
          <span>state.checked: {checked}</span>
        </div>

        <div>
          <form encType="multipart/form-data" onSubmit={e => this.fileFormSubmit(e)}>
            <input
              type="file"
              accept="image/jpeg"
              ref={this.fileInputRef}
              name="file1"
              onChange={e => this.showFile(e)}
            ></input>
            <button type="submit">submit</button>
          </form>
        </div>
      </>
    );
  }
}

export default UncontrolledFormComponent;
