import React, { Component } from "react";
import SearchField from "./components/SearchField";
import GifCard from "./components/GifCard";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.handleTrendySearch();
  }

  handleTrendySearch = (e) => {
    const url = `http://api.giphy.com/v1/gifs/trending`;
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    axios
      .get(url, { params: { api_key: API_KEY } })
      .then((response) => {
        const data = response.data.data;
        this.setState({ gifs: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleSearch = (value) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${value}`;
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    axios.get(url, { params: { api_key: API_KEY } })
      .then((response) => {
        const data = response.data.data;
        this.setState({ gifs: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const gifs = () => 
      this.state.gifs.map((gif) => {
        const url = gif.images.original.webp;
        const title = gif.title;
        return (
        <GifCard
         url={url}
         title={title}
         />
        );
      });
    
    return (
      <div className="App">
        <header className="App-header">
          <SearchField onSubmit={this.handleSearch} />
          <div>{gifs()}</div>
        </header>
      </div>
    );
  }
}

export default App;
