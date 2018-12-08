import React, {Fragment} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import styles from '../themes/dark.css'


export default props => {
    return (
        <Fragment>
            <AppBar position="static" style={styles.AppBar}>
                <Toolbar style={styles.Toolbar}>
                    <Typography variant="h6" align="center" color="inherit">
                        ReacTodos
                    </Typography>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}