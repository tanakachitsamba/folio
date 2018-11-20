import React from 'react'
import { ThemeProvider } from 'styled-components'

// the theme is an object
import theme from './theme'

export default ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>
