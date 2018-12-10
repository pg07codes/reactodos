import React, {Fragment} from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from '../themes/dark.css'
import DeleteConfirmDialog from '../containers/DeleteConfirmDialog'
import EditTodoDialog from '../containers/EditTodoDialog'

let redAlert={
    backgroundColor:'red'
}
let greenAlert={
    backgroundColor:'green'
}


export default props => {

    let alert={...styles.Card,
        ...(props.todo.urgent?redAlert:null),
        ...(props.todo.done?greenAlert:null)
    }



    return (
        <Card style={alert} raised>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                        {props.todo.todo}
                    </Typography>
                    <Typography variant="caption" gutterBottom>
                        created at {''+props.todo.createdAt.getHours()+':'+props.todo.createdAt.getMinutes()} on {''+props.todo.createdAt.toDateString()}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>

                {/*it has delete button + confirm dialog box in it**/}
                <DeleteConfirmDialog deleteTodo={()=>props.deleteTodo(props.todo.id)}/>

                <EditTodoDialog editTodo={props.editTodo} id={props.todo.id}/>

                {props.todo.done?
                    <Button size="small" onClick={()=>props.markDone(props.todo.id)} color="primary">
                        UNDO
                    </Button> :
                    <Fragment>
                        <Button size="small" onClick={()=>props.markDone(props.todo.id)} color="primary">
                            DONE
                        </Button>

                        {props.todo.urgent&&!props.todo.done?
                            <Button size="small" onClick={()=>props.markUrgent(props.todo.id)} color="primary">
                                DELAY
                            </Button>:
                            <Button size="small" onClick={()=>props.markUrgent(props.todo.id)} color="primary">
                                MARK URGENT
                            </Button>

                        }
                    </Fragment>

                }




            </CardActions>
        </Card>
    )
}