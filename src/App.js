import React, { Component } from 'react';
import SearchField from './components/SearchField';
import axios from "axios";
import './App.css';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    gifs: [],

  }
  this.handleSearch = this.handleSearch.bind(this);
}


  componentDidMount() {
    this.handleTrendySearch();
  }

  handleTrendySearch = (e) => {
    const url = `http://api.giphy.com/v1/gifs/trending`;
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    axios.get(url, {params : {api_key: API_KEY}})
      .then((response) => {
        const data = response.data;
        this.setState({gifs: data});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSearch = (e) => {
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

  render() {

  return (
    <div className="App">
      <header className="App-header">
       <SearchField onSubmit={this.handleSearch}/>
      </header>
    </div>
  );
  }
}

export default App;
