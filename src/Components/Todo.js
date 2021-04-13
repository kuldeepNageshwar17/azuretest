import React, { Component } from 'react';
import TodoItem from './TodoItem'
import propTypes from 'prop-types'

class Todos extends Component {
    
  render() {
     
    //   console.log(this.props.todos)
    return  this.props.todos.map((todo)=>(

        // <div>
        //     <h3>{todo.title}</h3>
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
        // </div>
       
    ))
    //   <div className="App">
  
         
    //     <h1>Todos </h1>

    //   </div>
    // );
  }
}
Todos.propTypes={
    todos:propTypes.array.isRequired
}

export default Todos;
