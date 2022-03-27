import { Container,Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from '../../utils/styles'

export default function Layout1({children}) {
  const classes = useStyles();
    return (
    <div>
        <Container className={classes.main}>
            {children}
        </Container>
    </div>
  )
}
