import React, {Fragment} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styles from '../themes/dark.css'

const options = [
    'Listify',
    'Share',
    'Delete All'
];


class Header extends React.Component{
    state = {
        anchorEl: null,
      };
    
      handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleClose = () => {
        this.setState({ anchorEl: null });
      };

      handleActionAndClose = (e) => {

        if(e.target.id==='Delete All'){
            alert('All todos deleted. Reload to Clear.')
            localStorage.removeItem('allTodos')
        }
        
        this.setState({ anchorEl: null });
      };

    render(){

        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <Fragment>
                <AppBar position="static" style={styles.AppBar}>
                    <Toolbar>
                        
                        <Typography style={{flex:1}} variant="h6" align="center" color="inherit">
                            ReacTodos
                        </Typography>

                        <IconButton
                            color="inherit"
                            onClick={this.handleClick}
                            >
                        <MoreVertIcon />
                        </IconButton >
                            <Menu
                            id="long-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={this.handleClose}
                            PaperProps={{
                                style: {
                                width: 180,
                                },
                            }}
                            >
                            {options.map(option => (
                                <MenuItem key={option} id={option} onClick={this.handleActionAndClose}>
                                {option}
                                </MenuItem>
                            ))}
                            </Menu>

                    </Toolbar>

                </AppBar>
            </Fragment>
        )
    }
    
}

export default Header