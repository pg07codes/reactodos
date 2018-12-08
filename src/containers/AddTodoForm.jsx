import React, {Fragment} from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import styles from '../themes/dark.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default class FormDialog extends React.Component {
    state = {
        open: false,
        title:'',
        todo:'',
        urgent:false,

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

    addTodo=()=>{
        this.setState({ open: false });
        localStorage[Math.random()*10000]=JSON.stringify(this.state)
    }

    render() {
        return (
            <div>
                <Fab color="primary" onClick={this.handleClickOpen} aria-label="Add" style={styles.Fab}>
                    <AddIcon />
                </Fab>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Add New Todo</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Todos will be stored only for 24 hrs. Do not procrastinate !
                        </DialogContentText>
                        <TextField
                            style={styles.TextField}
                            autoFocus
                            margin="dense"
                            id="title"
                            label="Title"
                            type="text"
                            onChange={this.onChangeHandler}
                        />
                        <TextField
                            style={styles.TextField}
                            autoFocus
                            id="todo"
                            placeholder='i have to...'
                            type="text"
                            fullWidth
                            onChange={this.onChangeHandler}

                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.addTodo} color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}