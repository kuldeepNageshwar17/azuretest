import React, { Component } from 'react'



export class AddTodo extends Component {

state={
    title:''
}

    onChange=(e)=>{
        // console.log(e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        });
     }
     onSubmit=(e)=>{
         e.preventDefault();
         this.props.addTodo(this.state.title)
         this.setState({
            title:''
        });
        // console.log(e.target.value)
        // this.setState({
        //     [e.target.name]:e.target.value
        // });
     }
  render() {
    return (
      <div>
          <form style={{display:'flex'}} onSubmit={this.onSubmit}>        
              <input 
              type='text'
              name='title'
              placeholder="Add Todo...."
              style={{flex:'10',padding:'5px'}}
              onChange={this.onChange}
              />
              <input type="submit" value="submit"  className="btn btn-primary" style={{flex:'1'}}/>

          </form>
        
      </div>
    )
  }
}

export default AddTodo
