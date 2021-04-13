import React, { Component } from 'react'
import propTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle=()=>{
            return  {
                textDecoration: this.props.todo.completed===true?'line-through':'none',
                backgroundColor:"blue",
                padding: "9px",
                color:"white"
            }
    }
    render() {
      const {id,title,completed}=this.props.todo;    
    return (
      <div style={this.getStyle()}>
   
        <p >
        <input type="checkbox"  checked={completed} onChange={this.props.markComplete.bind(this,id)}/>
        {title}
        <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>X</button>
        </p>
        {/* <p >{this.props.todo.id}</p> */}

      </div>
    )
  }
}
TodoItem.propTypes={
    todo:propTypes.object.isRequired
}

const btnStyle={
    background:"#ff0000",
    color:'#fff',
    border:'none',
    padding:'5px 9px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}
export default TodoItem
// {backgroundColor:'#112',color:'rgb(251, 246, 246)'}