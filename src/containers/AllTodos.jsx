import React, {Component, Fragment} from 'react'
import Grid from '@material-ui/core/Grid';
import TodoCards from '../components/TodoCards'
import styles from '../themes/dark.css'
import Chip from '@material-ui/core/Chip'


class AllTodos extends Component {

    render() {

        let todoCards=null
        let alertChip=null

        if(this.props.allTodos.length!==0){
            todoCards=this.props.allTodos.map(todo=>{
                return(
                    <Grid key={todo.id} item xs={12} md={4} lg={3} s={11}>
                        <TodoCards editTodo={this.props.editTodo} markUrgent={this.props.markUrgent} deleteTodo={this.props.deleteTodo} markDone={this.props.markDone} todo={todo}/>
                    </Grid>
                )
            })
        }
        
        else{
            alertChip=(this.props.allTodos.length===0?
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
        }
        

        return (
            <Fragment>
                
                {alertChip}

                <Grid
                    container
                    direction="row"
                >
                    {todoCards}

                </Grid>

                <div style={styles.spacer}/>
            </Fragment>

        )
    }
}

export default AllTodos