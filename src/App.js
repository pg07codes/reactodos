import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import AddTodoForm from './containers/AddTodoForm'
import AllTodos from "./containers/AllTodos";

class App extends Component {
    state={
        allTodos:[],
    }

    markUrgent=(id)=>{
        let temp=[...this.state.allTodos]
        temp.forEach(x=> {
            // mutate the urgent and set it...
            if(x.id===id){
                x.urgent=!x.urgent
                return 0
            }
        })
        this.setState({allTodos:temp})
    }

    editTodo=(id,todo)=>{
        let temp=[...this.state.allTodos]
        temp.forEach(x=> {
            // mutate the urgent and set it...
            if(x.id===id){
                x.todo=todo
                return 0
            }
        })
        this.setState({allTodos:temp})
    }

    markDone=(id)=>{
        let temp=[...this.state.allTodos]
        temp.forEach(x=> {
            // mutate the urgent and set it...
            if(x.id===id){
                x.done=!x.done
                x.urgent=false
                return 0
            }
        })
        this.setState({allTodos:temp})
    }

    addNewTodo=(d)=>{
        let prevTodos=[...this.state.allTodos]
        prevTodos.unshift(d)//inserting it at top of list
        this.setState({allTodos:prevTodos})
    }

    deleteTodo=(id)=>{
        let temp=[...this.state.allTodos]
        temp=temp.filter(x=>x.id!==id)
        this.setState({allTodos:temp})
    }

    render() {
        return (
            <Fragment>

                <Header/>

                <AddTodoForm addNewTodo={this.addNewTodo} length={this.state.allTodos.length}/>

                <AllTodos editTodo={this.editTodo} allTodos={this.state.allTodos} deleteTodo={this.deleteTodo} markUrgent={this.markUrgent} markDone={this.markDone}/>

                <Footer/>

            </Fragment>
        )
  }
}

export default App;
