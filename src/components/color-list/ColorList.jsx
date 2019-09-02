import React from "react";
import Color from "../color/Color";
import ColorDetail from '../color-detail/ColorDetail';
import PageSelect from '../page-select/PageSelect';
import PropTypes from "prop-types";
import './ColorList.css'
import colorList from '../../masterColorList.jsx'

function ColorList(props) {
  if (props.selectedColor == null) {
    
    let pageArr = [];
    let totalPages = Math.ceil(colorList.length / 12);
    let start = 0;
    let end = 12;
    for (let i = 0; i < totalPages; i++){
      let pageContent = colorList.slice(start, end);
      pageArr.push(pageContent);
      start = end
      end += 12;
    }
    var pages = [];
    for (let i = 1; i < pageArr.length; i++){
      pages.push(<PageSelect pageNumber={i} changePage={props.changePage} currentPage={props.currentPage}/>);
    }
    
    return (
      <div>
        <div id='wrap'>
          {pageArr[props.currentPage].map((color) =>
            <Color category={color.category}
            hex={color.hex}
            style={color.style}
            colorSelect={props.colorSelect}
            categorySelect={props.categorySelect}/>
          )}
        </div>
        <div id="pages">
          {pages}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <ColorDetail selectedColor={props.selectedColor} 
        selectedCategory={props.selectedCategory}
        colorSelect={props.colorSelect}
        categorySelect={props.categorySelect}/>
      </div>
    )
  }
}

ColorList.propTypes = {
  colorSelect: PropTypes.func.isRequired,
  categorySelect: PropTypes.func.isRequired,
  selectedColor: PropTypes.string,
  selectedCategory: PropTypes.string,
  currentPage: PropTypes.number,
  changePage: PropTypes.func
};

export default ColorList;