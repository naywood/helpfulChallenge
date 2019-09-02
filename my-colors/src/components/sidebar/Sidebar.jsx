import React from 'react';
import './Sidebar.css'
import PropTypes from 'prop-types';

function Sidebar(props){
  return (
    <div id="sidebar">
      <button onClick={() => {props.getRandom();}}>Random Color</button>
      <div id="colors">
        <h4 onClick={() => {props.categorySelect('red'); props.getCategoryExample('red');}}>Red</h4>
        <h4 onClick={() => {props.categorySelect('orange'); props.getCategoryExample('orange');}}>Orange</h4>
        <h4 onClick={() => {props.categorySelect('yellow'); props.getCategoryExample('yellow');}}>Yellow</h4>
        <h4 onClick={() => {props.categorySelect('green'); props.getCategoryExample('green');}}>Green</h4>
        <h4 onClick={() => {props.categorySelect('blue'); props.getCategoryExample('blue');}}>Blue</h4>
        <h4 onClick={() => {props.categorySelect('purple'); props.getCategoryExample('purple');}}>Purple</h4>
        <h4 onClick={() => {props.categorySelect('brown'); props.getCategoryExample('brown');}}>Brown</h4>
        <h4 onClick={() => {props.categorySelect('gray'); props.getCategoryExample('gray');}}>Gray</h4>
      </div>
    </div>
    );
  }
  
  Sidebar.propTypes = {
    colorSelect: PropTypes.func.isRequired,
    categorySelect: PropTypes.func.isRequired,
    colorList: PropTypes.object.isRequired,
    getRandom: PropTypes.func.isRequired,
    getCategoryExample: PropTypes.func.isRequired
  }

export default Sidebar;