import React from 'react';
import ColorList from '../color-list/ColorList';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import colorList from '../../masterColorList.jsx'

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      selectedColor: null,
      selectedCategory: null,
      currentPage: 1
    }
    this.changeSelectedColor = this.changeSelectedColor.bind(this);
    this.changeSelectedCategory = this.changeSelectedCategory.bind(this);
    this.changePage = this.changePage.bind(this);
    this.getRandom = this.getRandom.bind(this);
    this.getCategoryExample = this.getCategoryExample.bind(this);
  }
  
  changeSelectedColor(hex){
    this.setState({selectedColor: hex});
  }
  
  changeSelectedCategory(category){
    this.setState({selectedCategory: category});
  }
  
  changePage(newPage){
    this.setState({currentPage: newPage});
  }
  
  getRandom(){
    let num = Math.floor(Math.random() * colorList.length);
    this.changeSelectedColor(colorList[num].hex);
    this.changeSelectedCategory(colorList[num].category);
  }
  
  getCategoryExample(category){
    let firstExample = colorList.find(color => color.category === category);
    this.changeSelectedColor(firstExample.hex);
  }
  
  render() {  
    return (
      <div>
        <Router>
          <Header/>
          <Sidebar colorSelect={this.changeSelectedColor}
            categorySelect={this.changeSelectedCategory} 
            colorList={colorList}
            getRandom={this.getRandom}
            getCategoryExample={this.getCategoryExample}/>
          <Route path='/' render={(props)=><ColorList colorList={colorList}
            currentRouterpath={props.location.pathname}
            selectedColor={this.state.selectedColor}
            selectedCategory={this.state.selectedCategory}
            colorSelect={this.changeSelectedColor}
            categorySelect={this.changeSelectedCategory}
            currentPage={this.state.currentPage}
            changePage={this.changePage}/>} />
        </Router>
      </div>
    );
  }
}

export default App;
