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
    if(value==="")
      return;
    const url = `http://api.giphy.com/v1/gifs/search?q=${value}`;
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

  render() {
    const gifs = () =>
      this.state.gifs.map((gif) => {
        const url = gif.images.fixed_width.webp;
        const title = gif.title;
        return <GifCard key={gif.id} url={url} title={title} />;
      });

    return (
      <>
        <div className="jumbotron">
          <h1 className="display-4 text-center">Gif Search React App</h1>
          <hr className="my-4" />
        </div>
        <div className="App">
          <header className="App-header">
            <SearchField onSubmit={this.handleSearch} />
            <div className="gifs-container">{gifs()}</div>
          </header>
        </div>
      </>
    );
  }
}

export default App;
