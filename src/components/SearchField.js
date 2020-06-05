import React, { Component } from "react";
import '../styles/SearchField.css';


class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  render() {
    return (
      <>
        <form className="search-form" onSubmit={this.handleSearch}>
          <div className="input-group" onSubmit={this.handleSearch}>
            <input
              type="text"
              className="form-control"
              placeholder="Search gif"
              aria-label="Search gif"
              aria-describedby="perform search"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <div className="input-group-append">
              <input
                className="btn btn-outline-secondary"
                type="submit"
                id="button-search"
              />     
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default SearchField;
