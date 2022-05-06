import React, {Component} from "react";
import {Table} from "react-bootstrap";
import "./TableData.css";
import {connect} from "react-redux";
import Pagination from "../Pagination/Pagination";
import {TemplateButton} from "../TemplateButton/TemplateButton";
import FilterData from "../FilterData/FilterData";


class TableData extends Component {

  render() {
    const postPerPage = 10;
    const currentPage = this.props.currentPageTable.index;
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = this.props.posts.slice(firstPostIndex, lastPostIndex);

    const paginate = (pageNumbers) => {
      this.props.onAddCurrentPageTable(pageNumbers);
    }

    const nextPage = () => {
      this.props.onAddCurrentPageTable(currentPage + 1 > 10 ? 1 : currentPage + 1);
    }

    const prevPage = () => {
      this.props.onAddCurrentPageTable(currentPage - 1 < 1 ? 10 : currentPage - 1);
    }

    return (
      <>
        <Table bordered>
          <thead className={"tbl-border"}>
          <tr className={"tbl-header"}>
            <FilterData />
          </tr>
          </thead>
          <tbody>
            {currentPosts.map((item, index) => {
              const {id, title, body} = item;
              return (
                <>
                  <tr className={"full-content"}>
                    <td className={"id-format"}>{id}</td>
                    <td className={"title-format"}>{title}</td>
                    <td className={"content-format"}>{body}</td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </Table>

        <Pagination
          postPerPage={postPerPage}
          totalPosts={this.props.posts.length}
          paginate={paginate}
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
        />

      </>
    );
  }



}

export default connect(
  state => ({
    posts: state.posts,
    currentPageTable: state.currentPageTable,
  }),
  dispatch => ({
    onAddRedux: (item) => {
      dispatch({type: 'ADD_TO_REDUX', data: item})
    },
    onAddCurrentPageTable: (item) => {
      dispatch({type: 'SAVE_CURRENT_PAGE', data: item})
    }
  })
)(TableData);