import React, {Fragment, Component} from 'react'
import Grid from '@material-ui/core/Grid';
import TodoCards from '../components/TodoCards'
//import _ from 'lodash'

class AllTodos extends Component {
    // does not work here let todocards=.. wali line. why and localstorage problem fix .

    render() {

        let todoCards=this.props.allTodos.map(todo=>{
            console.log(todo,'single todo')

            return(
                <Fragment>
                    <Grid item xs={11} md={4} s={8}>
                        <TodoCards todo={todo}/>
                    </Grid>
                </Fragment>
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