import React, { Component } from 'react';
import './App.css';
import TodoHeader from './TodoHeader'
import TodoMain from './TodoMain';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  // 添加todo事项的方法
  addTodo(item) {
    this.state.todos.push(item);
    this.setState({todos: this.state.todos});
  }

  render() {
    return (
      <div className="todo-wrapper">
        <TodoHeader addTodo={this.addTodo.bind(this)}/>
        <TodoMain todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;