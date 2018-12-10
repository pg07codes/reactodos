import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import TodoCards from '../components/TodoCards'
//import _ from 'lodash'

class AllTodos extends Component {

    // does not work here let todocards=.. wali line. why and localstorage problem fix .

    render() {

        let todoCards=this.props.allTodos.map(todo=>{
            return(
                <Grid key={todo.id} item xs={11} md={4} s={8}>
                    <TodoCards markUrgent={this.props.markUrgent} deleteTodo={this.props.deleteTodo} markDone={this.props.markDone} todo={todo}/>
                </Grid>
            )
        })

        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {todoCards}

            </Grid>
        )
    }
}

export default AllTodos