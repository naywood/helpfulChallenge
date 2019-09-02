import React from 'react';
import PropTypes from 'prop-types';
import './PageSelect.css';

function PageSelect(props){
  if (props.pageNumber === props.currentPage){
    return (
      <div id="pageNumbers">
        <h4 id="selectedPage" onClick={() => {props.changePage(props.pageNumber);}}>{props.pageNumber}</h4>
      </div>
      );
  } else {
    return (
      <div id="pageNumbers">
        <h4 onClick={() => {props.changePage(props.pageNumber);}}>{props.pageNumber}</h4>
      </div>
      );
    }
  }
  
  PageSelect.propTypes = {
    currentPage: PropTypes.number.isRequired,
    pageNumber: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired
  }

export default PageSelect;
