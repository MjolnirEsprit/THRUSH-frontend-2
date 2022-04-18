import { Container, CssBaseline, ThemeProvider, Typography } from '@material-ui/core'
import React from 'react'
import { createTheme} from '@material-ui/core'


export default function Layout1({children}) {
  const theme = createTheme({

    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      type : 'light',
      primary: {
        main: '#db550d',
      },
      secondary: {
        main: '#db550f',
      },
    },
  });
    return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Container >
              {children}
          </Container>
      </ThemeProvider>
    </div>
  )
}
