import React, {Component, Fragment } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import AddTodoForm from './containers/AddTodoForm'
import AllTodos from "./containers/AllTodos";




class App extends Component {

    constructor(props){
        super(props)

        function constructAllFromLocalStore(string){
            let allTodosWithoutConstructedDates=JSON.parse(string)

            allTodosWithoutConstructedDates.forEach(i=>i.createdAt=new Date(i.createdAt))// now dates constructed

            return allTodosWithoutConstructedDates // actually it should now be withConstructedDates..:)

        }
        function constructDoneFromLocalStore(string){
            let allTodosWithoutConstructedDates=JSON.parse(string)

            allTodosWithoutConstructedDates.forEach(i=>i.createdAt=new Date(i.createdAt))

            allTodosWithoutConstructedDates= allTodosWithoutConstructedDates.filter((i)=>{
                return i.done === true
            })

            return allTodosWithoutConstructedDates 

        }
        function constructUrgentFromLocalStore(string){
            let allTodosWithoutConstructedDates=JSON.parse(string)

            allTodosWithoutConstructedDates.forEach(i=>i.createdAt=new Date(i.createdAt))

            allTodosWithoutConstructedDates= allTodosWithoutConstructedDates.filter((i)=>{
                return i.urgent === true
            })

            return allTodosWithoutConstructedDates 

        }


        localStorage.allTodos===undefined?
            this.state={allTodos:[],doneTodos:[],leftTodos:[],trashedTodos:[]}:
            this.state={
                allTodos:constructAllFromLocalStore(localStorage.allTodos),
                doneTodos:constructDoneFromLocalStore(localStorage.allTodos),
                urgentTodos:constructUrgentFromLocalStore(localStorage.allTodos),
                showing:'allTodos'
            }
    }

    markUrgent=(id)=>{
        let temp=[...this.state.allTodos]
        temp.forEach(x=> {
            // mutate the urgent and set it...
            if(x.id===id){
                x.urgent=!x.urgent
            }
        })
        this.setState({allTodos:temp},this.updateLocalStorage)

        let urgentTodos=temp.filter((i)=>{ //adding to urgentTodos in state
            return i.urgent===true
        })
        this.setState({urgentTodos:urgentTodos})
    }

    editTodo=(id,todo)=>{
        let temp=[...this.state.allTodos]
        temp.forEach(x=> {
            if(x.id===id){
                x.todo=todo
            }
        })
        this.setState({allTodos:temp},this.updateLocalStorage)

        let doneTodos=temp.filter((i)=>{ //deleting from doneTodos in state - X1
            return i.done===true
        })

        let urgentTodos=temp.filter((i)=>{ //deleting from urgentTodos in state - X2
            return i.urgent===true
        })

        this.setState({// and now setting the state after - X1 - X2
            urgentTodos:urgentTodos,
            doneTodos:doneTodos
        })

    }

    markDone=(id)=>{
        let temp=[...this.state.allTodos]
        temp.forEach(x=> {
            if(x.id===id){
                x.done=!x.done
                x.urgent=false
            }
        })
        this.setState({allTodos:temp},this.updateLocalStorage)
        
        let doneTodos=temp.filter((i)=>{ //adding to doneTodos in state
            return i.done===true
        })
        this.setState({doneTodos:doneTodos})

        let urgentTodos=temp.filter((i)=>{ //removing the doneTodo from state->urgentTodo 
            return i.urgent===true
        })
        this.setState({urgentTodos:urgentTodos})
    }

    updateLocalStorage=()=>{
        localStorage.allTodos=JSON.stringify(this.state.allTodos)
    }

    addNewTodo=(d)=>{
        let prevTodos=[...this.state.allTodos]
        prevTodos.unshift(d)//inserting it at top of list
        this.setState({
            allTodos:prevTodos,
            showing:'allTodos'
        },this.updateLocalStorage)

    }

    deleteTodo=(id)=>{
        let temp=[...this.state.allTodos]
        temp=temp.filter(x=>x.id!==id)
        this.setState({allTodos:temp},this.updateLocalStorage)

        let doneTodos=temp.filter((i)=>{ //deleting from doneTodos in state - X1
            return i.done===true
        })

        let urgentTodos=temp.filter((i)=>{ //deleting from urgentTodos in state - X2
            return i.urgent===true
        })

        this.setState({// and now setting the state after - X1 - X2
            urgentTodos:urgentTodos,
            doneTodos:doneTodos
        })

    }

    setShowing=(status)=>{
        this.setState({showing:status})
    }

    render() {


        return (
            <Fragment>

                <Header/>

                <AddTodoForm addNewTodo={this.addNewTodo} length={this.state.allTodos.length}/>

{/* show items depending on bottom menu selection */}

                {this.state.showing==='allTodos'?
                <AllTodos editTodo={this.editTodo} allTodos={this.state.allTodos} deleteTodo={this.deleteTodo} markUrgent={this.markUrgent} markDone={this.markDone}/>:null}
                {this.state.showing==='doneTodos'?
                <AllTodos editTodo={this.editTodo} allTodos={this.state.doneTodos} deleteTodo={this.deleteTodo} markUrgent={this.markUrgent} markDone={this.markDone}/>:null}
                {this.state.showing==='urgentTodos'?
                <AllTodos editTodo={this.editTodo} allTodos={this.state.urgentTodos} deleteTodo={this.deleteTodo} markUrgent={this.markUrgent} markDone={this.markDone}/>:null}
                           

                <Footer setShowing={this.setShowing}/>

                {/*<PushNotifier/>*/}

            </Fragment>
        )
  }
}

export default App;
