import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from '../themes/dark.css'

export default props => {

    return (
        <Card style={styles.Card}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.todo.title}
                    </Typography>
                    <Typography component="p">
                        {props.todo.todo}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    DELETE
                </Button>
                <Button size="small" color="primary">
                    MARK URGENT
                </Button>
                <Button size="small" color="primary">
                    DONE
                </Button>
            </CardActions>
        </Card>
    )
}