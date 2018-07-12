import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    keyword: "",
    locationName: ""
  };

  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => {
      console.log(this.state);
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { keyword, locationName } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <label htmlFor="search-term">What</label>
          <input
            type="text"
            id="search-term"
            onChange={this.onInputChange}
            value={keyword}
            name="keyword"
            placeholder={"e.g marketing manager"}
          />
        </div>
        <div>
          <label htmlFor="location">Where</label>
          <input
            type="text"
            id="location"
            onChange={this.onInputChange}
            value={locationName}
            name="locationName"
            placeholder={"e.g town or city"}
          />
        </div>
        <button>Search Jobs</button>
      </form>
    );
  }
}
