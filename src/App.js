import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import AddTodoForm from './containers/AddTodoForm'
import AllTodos from "./containers/AllTodos";

class App extends Component {
    state={
        allTodos:[],
    }

    addNewTodo=(d)=>{
        let prevTodos=[...this.state.allTodos]
        prevTodos.push(d)
        this.setState({allTodos:prevTodos})
    }

    render() {
        return (
            <Fragment>

                <Header/>

                <AddTodoForm addNewTodo={this.addNewTodo}/>

                <AllTodos allTodos={this.state.allTodos}/>

                <Footer/>

            </Fragment>
        )
  }
}

export default App;
