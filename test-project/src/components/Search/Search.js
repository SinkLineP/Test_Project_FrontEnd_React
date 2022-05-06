import React, {Component} from "react";
import {connect} from "react-redux";
import "./Search.css";
import searchImg from "./Image/search.svg";

class Search extends Component {


  render() {


    return (
      <>
        <div>
          <form>
            <input
              type={"text"}
              className={"search-input mb-3"}
              placeholder={"Поиск"}
              onChange={(event => {this.props.onSaveValueSearch(event.target.value)})}
            />
            <button className={"search-btn"}>
              <img className={"search-img"} src={searchImg}  alt={"search"}/>
            </button>
          </form>
        </div>
      </>
    )
  }
}

export default connect(
  state => ({
    posts: state.posts,
    Search: state.Search,
  }),
  dispatch => ({
    onSaveValueSearch: (item) => {
      dispatch({type: 'ADD_VALUE_SEARCH', data: item})
    }
  })
)(Search);