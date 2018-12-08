import React, {Fragment, Component} from 'react'
import Grid from '@material-ui/core/Grid';
import TodoCards from '../components/TodoCards'

class AllTodos extends Component {
    render() {
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={11} md={4} s={8}>
                <TodoCards/>
                </Grid>
                <Grid item xs={11} md={4} s={8}>
                    <TodoCards/>
                </Grid>
                <Grid item xs={11} md={4} s={8}>
                    <TodoCards/>
                </Grid>
                <Grid item xs={11} md={4} s={8}>
                    <TodoCards/>
                </Grid>
                <Grid item xs={11} md={4} s={8}>
                    <TodoCards/>
                </Grid>
                <Grid item xs={11} md={4} s={8}>
                    <TodoCards/>
                </Grid>
                <Grid item xs={11} md={4} s={8}>
                    <TodoCards/>
                </Grid>
                <Grid item xs={11} md={4} s={8}>
                    <TodoCards/>
                </Grid>



            </Grid>
        )
    }
}

export default AllTodos