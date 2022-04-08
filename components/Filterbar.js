import {Slider, Card, CardActions, CardContent, Grid,Typography, Box} from '@material-ui/core'
import React from 'react'
import useStyles from 'utils/styles'
import CheckBoxList from '@components/CheckBoxFilters'

function valuetext(value) {
    return `${value}$`;
  }

export default function Filterbar() {
    const classes = useStyles();
  return (
    <div >
        <Grid container  className={classes.filterbar}>
            <Grid item >
            <Card >
                    <CardContent>
                        
                    <CardActions>
                    
                    </CardActions>
                    <CheckBoxList />
                    </CardContent>
            </Card>
            </Grid>
        </Grid>
    </div>
  )
}
