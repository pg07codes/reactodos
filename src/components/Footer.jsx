import React, {Fragment} from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import styles from '../themes/dark.css'

export default props => {
    return (
        <Fragment>
            <BottomNavigation
                style={styles.BottomNavigation}
                showLabels
            >
                <BottomNavigationAction style={styles.BottomNavigationAction} label="All Tasks"/>
            </BottomNavigation>
        </Fragment>
    )
}