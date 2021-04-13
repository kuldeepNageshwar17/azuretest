import React from 'react';
import './App.css';
import Todos from './Components/Todo'
import Header from './Components/Header'
import AddTodo from './Components/AddTodo';
import About from './Components/About';
// import { BrowserRouter as Router , Route} from 'react-router-dom';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import axios from 'axios'
// import uuid from 'uuid'
class App extends React.Component {
  state={
    Todos:[]
  };
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(res=>{
       this.setState({ Todos:res.data   })
    })
  }
  markComplete =(id)=>{

        // console.log(id);
        this.setState({
          Todos:this.state.Todos.map(todo=>{

            if(todo.id===id)
            {
              todo.completed=!todo.completed;
            }
            return todo;
          })
        })
    }
 delTodo=(id)=>
 {
   //this.setState({
//                   Todos:[...this.state.Todos.filter(todo=>todo.id!==id)]
//                 })
//   console.log(id);
axios.delete (`https://jsonplaceholder.typicode.com/posts/${id}`).then(res =>{
  this.setState({
                      Todos:[...this.state.Todos.filter(todo=>todo.id!==id)]
                    })
})
}
addTodo=(value)=>{
  // const newTodo={
  //   id:uuid.v4(),
  //   title:value,
  //   completed:false,
  // }
  axios.post("https://jsonplaceholder.typicode.com/posts",{title:value,completed:false})
  .then(res=>{
    this.setState({Todos:[...this.state.Todos,res.data]})
  })

}
  render() {
    return (
      <Router>
                <div>
                  <div className="Container">
                  <Header />
                  <Route exact path="/" render={props=>(
                    <React.Fragment>
                        <AddTodo addTodo={this.addTodo}> </AddTodo>
                          <div className="">
                            <h1>Hello React</h1>
                            <Todos todos={this.state.Todos} markComplete={this.markComplete} delTodo={this.delTodo}></Todos>
                          </div>
                    </React.Fragment>
                  )}/>
                    <Route  path="/About" component={About}/>
                      
                    </div>

                </div>
       </Router>
    );
  }
}

export default App;
