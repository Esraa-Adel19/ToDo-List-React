import React, { Component } from 'react';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      newItem:'',
      list:[]
    }
  }
  
  updateInput (key, value) {
    this.setState ({
      [key]: value
    });
  }

  addItem () {
    const newItem = {
      id: 1+ Math.random(),
      value: this.state.newItem.slice()
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem:""
    });
  }
  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);

    this.setState({
      list: updatedList
    });
  }
  render() {
    return (
      <div className="App">
        <div>
          <h1 className="header">MY LIST</h1>
          <div className="border">
            <div className="add-item">Add An Item...</div>
            <br/>
            <input 
              className="input-item"
              type="text"
              placeholder="Type Item here..."
              value={this.state.newItem}
              onChange={e => this.updateInput("newItem", e.target.value)}
            />
            <button
              className="add-button"
              onClick={() => this.addItem()}
            >
              Add
            </button>
            <br/>
            <ol className="my-list">
              {this.state.list.map(item => {
                return(
                  <li className="todo" key={item.id}>
                    {item.value}
                    <button
                      className="delete-button" 
                      onClick={() => {
                        this.deleteItem(item.id)
                    }}>
                      X
                    </button>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default App
