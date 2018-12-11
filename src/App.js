import React, {Component, Fragment } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import AddTodoForm from './containers/AddTodoForm'
import AllTodos from "./containers/AllTodos";
import Chip from '@material-ui/core/Chip'
import styles from './themes/dark.css'
import Grid from '@material-ui/core/Grid';

class App extends Component {

    constructor(props){
        super(props)

        function constructFromLocalStore(string){
            let allTodosWithoutConstructedDates=JSON.parse(string)

            allTodosWithoutConstructedDates.forEach(i=>i.createdAt=new Date(i.createdAt))// now dates constructed

            return allTodosWithoutConstructedDates // actually it should now be withConstructedDates..:)

        }

        localStorage.allTodos===undefined?
            this.state={allTodos:[]}:
            this.state={allTodos:constructFromLocalStore(localStorage.allTodos)}
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
        this.setState({allTodos:temp},this.updateLocalStorage)
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
        this.setState({allTodos:temp},this.updateLocalStorage)
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
        this.setState({allTodos:temp},this.updateLocalStorage)
    }

    updateLocalStorage=()=>{
        localStorage.allTodos=JSON.stringify(this.state.allTodos)
    }

    addNewTodo=(d)=>{
        let prevTodos=[...this.state.allTodos]
        prevTodos.unshift(d)//inserting it at top of list
        this.setState({allTodos:prevTodos},this.updateLocalStorage)

    }

    deleteTodo=(id)=>{
        let temp=[...this.state.allTodos]
        temp=temp.filter(x=>x.id!==id)
        this.setState({allTodos:temp},this.updateLocalStorage)
    }

    render() {

        let alertChip=(this.state.allTodos.length===0?
            <Grid container
                    alignContent='center'
                    justify="center"
                    alignItems="center"
            >
                <Grid item >
                <Chip
                    style={styles.Chip}
                    label='No pending tasks available !! '
                    color='secondary'/>
                </Grid>
            </Grid>:null)




        return (
            <Fragment>

                <Header/>

                {alertChip}


                <AddTodoForm addNewTodo={this.addNewTodo} length={this.state.allTodos.length}/>

                <AllTodos editTodo={this.editTodo} allTodos={this.state.allTodos} deleteTodo={this.deleteTodo} markUrgent={this.markUrgent} markDone={this.markDone}/>

                <Footer/>

                {/*<PushNotifier/>*/}

            </Fragment>
        )
  }
}

export default App;
