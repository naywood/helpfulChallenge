import React from 'react';
import PropTypes from 'prop-types';
import FilteredColor from '../filtered-color/FilteredColor';
import './ColorDetail.css';
import colorList from '../../masterColorList.jsx'

function ColorDetail(props) {
  const filteredColors = colorList.filter(color => color.category === props.selectedCategory || color.hex !== props.selectedColor).slice(0, 5);
  
  return (
    <div id="detailWrap">
      <div id='detailPalette' style={{backgroundColor: props.selectedColor}}></div>
      <div id="detailLabel"><p>{props.selectedColor}</p></div>
      <div id='filterWrap'>
        {filteredColors.map((color) =>
          <FilteredColor category={color.category}
              hex={color.hex}
              style={color.style}
              colorSelect={props.colorSelect}
              categorySelect={props.categorySelect}/>
        )}
      </div>
    </div>
  );
}



ColorDetail.propTypes = {
  colorSelect: PropTypes.func.isRequired,
  categorySelect: PropTypes.func.isRequired,
  selectedColor: PropTypes.string.isRequired,
  selectedCategory: PropTypes.string.isRequired
}

export default ColorDetail;