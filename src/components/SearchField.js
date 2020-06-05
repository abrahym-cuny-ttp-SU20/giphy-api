import React, { Component } from "react";

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSearch = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  }

  render() {
    return (
    <form onSubmit={this.handleSearch}>
      <input type="text" value={this.state.value} onChange={this.handleChange}/>
      <input type="submit" value="Submit"/>
    </form>
    );
  }
}

export default SearchField;
