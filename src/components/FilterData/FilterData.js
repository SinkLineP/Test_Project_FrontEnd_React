import React, { Component } from "react";
import {connect} from "react-redux";
import "./FilterData.css";
import arrowDown from "./Image/arrow-white-btn.svg"

class FilterData extends Component {
  render() {
    const allPosts = this.props.posts;
    const isSortedTitle = this.props.isSortedTitle.index;
    const isSortedDesc = this.props.isSortedDesc.index;
    const isSortedId = this.props.isSortedId.index;

    const sortId = () => {
      let idPosts;

      if (isSortedId === false) {
        idPosts = allPosts.sort((a, b) => (a.id > b.id) ? 1 : -1);
        this.props.onUpdateSortId(true);
      } else {
        idPosts = allPosts.sort((a, b) => (a.id < b.id) ? 1 : -1);
        this.props.onUpdateSortId(false);
      }

      this.props.onDeletePosts();

      idPosts.map(item => {
        this.props.onUpdateAllPosts(item);
      })
    }

    const sortTitle = () => {
      let title;

      if (isSortedTitle === false) {
        title = allPosts.sort((a, b) => (a.title > b.title) ? 1 : -1);
        this.props.onUpdateSortTitle(true);
      } else {
        title = allPosts.sort((a, b) => (a.title < b.title) ? 1 : -1);
        this.props.onUpdateSortTitle(false);
      }

      this.props.onDeletePosts();

      title.map(item => {
        this.props.onUpdateAllPosts(item);
      })
    }

    const sortDesc = () => {
      let desc;

      if (isSortedDesc === false) {
        desc = allPosts.sort((a, b) => (a.body > b.body) ? 1 : -1);
        this.props.onUpdateSortDesc(true);
      } else {
        desc = allPosts.sort((a, b) => (a.body < b.body) ? 1 : -1);
        this.props.onUpdateSortDesc(false);
      }

      this.props.onDeletePosts();

      desc.map(item => {
        this.props.onUpdateAllPosts(item);
      })
    }



    return(
      <>
        <th><button id={"id"} className={"custom-thead-btn"} onClick={sortId}>ID <img src={arrowDown} className={"arrow-dropdown"} /></button></th>
        <th><button id={"title"} className={"custom-thead-btn"} onClick={sortTitle}>Заголовок <img src={arrowDown} className={"arrow-dropdown"} /></button></th>
        <th><button id={"desc"} className={"custom-thead-btn"} onClick={sortDesc}>Описание <img src={arrowDown} className={"arrow-dropdown"} /></button></th>
      </>
    );
  }
}

export default connect(
  state => ({
    posts: state.posts,
    currentPageTable: state.currentPageTable,
    isSortedTitle: state.isSortedTitle,
    isSortedDesc: state.isSortedDesc,
    isSortedId: state.isSortedId,
  }),
  dispatch => ({
    onAddCurrentPageTable: (item) => {
      dispatch({type: 'SAVE_CURRENT_PAGE', data: item})
    },
    onUpdateAllPosts: (item) => {
      dispatch({type: 'UPDATE_ALL_POSTS', data: item})
    },
    onDeletePosts: () => {
      dispatch({type: 'DELETE_ALL_POSTS'})
    },
    onUpdateSortTitle: (item) => {
      dispatch({type: 'UPDATE_SORT_TITLE', data: item})
    },
    onUpdateSortDesc: (item) => {
      dispatch({type: 'UPDATE_SORT_DESC', data: item})
    },
    onUpdateSortId: (item) => {
      dispatch({type: 'UPDATE_SORT_ID', data: item})
    }
  })
)(FilterData);
