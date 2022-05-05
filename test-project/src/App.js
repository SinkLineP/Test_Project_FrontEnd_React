import React, { Component } from 'react';
import './App.css';
import TableData from './components/Table/TableData';
import axios from "axios";
import { connect } from "react-redux";

class App extends Component {

  async componentWillMount() {
    const responseData = await axios.get("https://jsonplaceholder.typicode.com/posts");
    responseData.data.map((item) => {
      this.props.onAddRedux(item);
    })
  }

  render() {
    return (
      <div className="App">
        <TableData/>
      </div>
    );
  }
}

export default connect(
  state => ({
    posts: state.posts,
  }),
  dispatch => ({
    onAddRedux: (item) => {
      dispatch({ type: 'ADD_TO_REDUX', data: item })
    },
  })
)(App);
