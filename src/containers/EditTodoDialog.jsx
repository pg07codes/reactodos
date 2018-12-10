import React, {Fragment, Component} from 'react'
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import styles from "../themes/dark.css";
import TextField from "@material-ui/core/TextField/TextField";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";

class EditTodoDialog extends Component {
    state = {
        open: false,
        newTodo:''
    };

    onChangeHandler=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })

    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleEdit=(id)=>{
        if(this.state.newTodo===''){
            // give feedback
        }else{
            this.props.editTodo(id,this.state.newTodo)
            this.setState({newTodo:''})//force reverting the value of newTodo to ''
            this.handleClose()
        }

    }

    render() {
        return (
            <Fragment>
                <Button size="small" onClick={this.handleClickOpen} color="primary">
                    EDIT
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">EDIT</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Once edited, there is no way to recover the changed item.
                        </DialogContentText>

                        <TextField
                            style={styles.TextField}
                            autoFocus
                            label="edit your todo"
                            id='newTodo'
                            fullWidth
                            type="text"
                            onChange={this.onChangeHandler}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button size="small" onClick={()=>this.handleEdit(this.props.id)} color="primary">
                            Done
                        </Button>
                        <Button size="small" onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        );
    }
}

export default EditTodoDialog