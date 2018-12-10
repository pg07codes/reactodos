import React, {Fragment, Component} from 'react'
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";

class DeleteConfirmDialog extends Component {
    state = {
        open: false
    };


    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleDelete=()=>{
        this.props.deleteTodo()
        this.handleClose()
    }

    render() {
        return (
            <Fragment>
                <Button size="small" onClick={this.handleClickOpen} color="primary">
                    DELETE
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Confirm Delete!</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Item once deleted, cannot be recovered! Are you sure ?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button size="small" onClick={this.handleDelete} color="primary">
                            Yes
                        </Button>
                        <Button size="small" onClick={this.handleClose} color="primary">
                            No
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        );
    }
}

export default DeleteConfirmDialog