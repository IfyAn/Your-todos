import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state={
    todos:[
      {id: 1, content: 'Go and play'},
      {id: 2, content: 'Food is ready'}
    ]
  }
  deleteTodo=(id)=>{
      const dont=this.state.todos.filter((todo)=>{
        return todo.id!==id
      })
      this.setState({
        todos:dont
      })
  }
  addTodo=(tofo)=>{
    tofo.id=Math.random();
    const tofos=[...this.state.todos, tofo]
    this.setState({
      todos: tofos
    })
}
  render(){
    return (
      <div className="todo-app container">
          <h1 className="center blue-text">Todo's</h1>
          <Todos tiro={ this.state.todos } deleteTodo={ this.deleteTodo }  />
          <AddTodo prop={ this.addTodo} />
      </div>
    );
  }
}

export default App;
