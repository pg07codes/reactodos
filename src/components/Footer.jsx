import React, {Fragment} from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import styles from '../themes/dark.css'
import DoneAll from '@material-ui/icons/DoneAll'
import Star from '@material-ui/icons/Star'
import Home from '@material-ui/icons/Home'

export default props => {
    return (
        <Fragment>
            <BottomNavigation
                style={styles.BottomNavigation}
                showLabels
            >
                <BottomNavigationAction onClick={()=>{props.setShowing('allTodos')}} style={styles.BottomNavigationAction} icon={<Home/>} label="All Todos"/>
                <BottomNavigationAction onClick={()=>{props.setShowing('doneTodos')}} style={styles.BottomNavigationAction} icon={<DoneAll/>} label="Done Todos"/>
                <BottomNavigationAction onClick={()=>{props.setShowing('urgentTodos')}} style={styles.BottomNavigationAction} icon={<Star/>} label="Urgent Todos"/>
            </BottomNavigation>
        </Fragment>
    )
}