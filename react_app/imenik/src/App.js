import React from 'react';
import './App.css';
import Body from './components/body/body';
import Header from './components/header/header';

import ToDoItem from './model/ToDoItem';
import ToDo from './model/ToDo';


class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.toDo = new ToDo();

    this.state = { activeTab: -1,
      items: this.toDo.items
    }

    this.changeTab = this.changeTab.bind(this);
    this.examinePath = this.examinePath.bind(this);
    this.createItem = this.createItem.bind(this);
    this.createItem2 = this.createItem2.bind(this);

    this.deleteItem = this.deleteItem.bind(this);




  };
  

  componentDidMount() {
    this.examinePath();
    window.onpopstate = this.examinePath;
    
  }


  examinePath() {

    switch (window.location.pathname) {
      case "/add-contact":
      case "":
      default:
        this.setState({ activeTab: 1 });
        break;
      case "/contact-list":
      case 2:
        this.setState({ activeTab: 2 });
        break;
    }

  }


  changeTab(tab) {
  
    if (this.state.activeTab === tab)
      return
  
    switch (tab) {
      case 1:
      default:
        this.setState({ activeTab: 1 });
        window.history.pushState(null, "Tab1", "/add-contact");
        break;
      case 2:
        this.setState({ activeTab: 2 });
        window.history.pushState(null, "Tab2", "/contact-list");
        break;
      
    }
  
  }

  createItem(content) {
    let item = new ToDoItem(content);
    let items = this.toDo.add(item);

    this.setState({items: items});
  }

  createItem2(content2) {
    let item = new ToDoItem(content2);
    let items = this.toDo.add(item);

    this.setState({items: items});

  }




  deleteItem(item) {
    let items = this.toDo.delete(item);
    this.setState({ items: items });
  }

  render() {
    return <div id="app-container">
    <Header changeTab={this.changeTab} tab={this.state.activeTab}></Header>
    <Body tab={this.state.activeTab} items={this.state.items} createItem={this.createItem} createItem2={this.createItem2} onDeleteItem={this.deleteItem}></Body>
   
  </div>
  }
}

export default App;
