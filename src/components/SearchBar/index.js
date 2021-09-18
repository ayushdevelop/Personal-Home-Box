import React, { useState, useEffect, useRef, Component } from "react";

import searchIcon from "../../images/search-icon.svg";

import { Wrapper, Content } from "./SearchStyles";

class SearchBar extends Component {
  state = { value: "" };
  timeout = null;

  componentDidUpdate = (_prevProps, prevState) => {
    if (this.state.value !== prevState.value) {
      const { setSearchTerm } = this.props;

      clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        const { value } = this.state;
        setSearchTerm(value);
      }, 500);
    }
  };

  // useEffect(() => {
  //   if (initital.current) {
  //     initital.current = false;
  //     return;
  //   }

  //   const timer = setInterval(() => {
  //     setSearchTerm(state);
  //   }, 500);

  //   return () => clearTimeout(timer);
  // }, [setSearchTerm, state]);
  render() {
    return (
      <Wrapper>
        <Content>
          <img src={searchIcon} alt="search-icon"></img>
          <input
            type="text"
            placeholder="Search Movie"
            onChange={(e) => this.setState({ value: e.currentTarget.value })}
            value={this.state.value}></input>
        </Content>
      </Wrapper>
    );
  }
}

export default SearchBar;
