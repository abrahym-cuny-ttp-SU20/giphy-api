import React, { Component } from "react";
import axios from "axios";

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "dog",
      gifs: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) => {
      const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.value}`;
      const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    axios.get(url,{params: {api_key: API_KEY}})
      .then( response => {
        const data = response.data;
        this.setState({gifs: data});
      })
      .catch((err) => {
        console.log(err);
      });
      e.preventDefault();
  };

  fetch

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  componentDidMount() {
    this
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.value} onChange={this.handleChange}/>
      <input type="submit" value="Submit"/>
    </form>
    );
  }
}

export default SearchField;
