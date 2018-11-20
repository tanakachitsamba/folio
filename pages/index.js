import React from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'

// the theme is inserted through a context Themeprovider
import WithTheme from '../styles/withtheme'

import Home from './home'

injectGlobal`
  @font-face {
    font-family: 'Didot';
    src: url('../static/fonts/Didot.ttf');
  }

  @font-face {
    font-family: 'Didot-Bold';
    src: url('../static/fonts/Didot-Bold.ttf');
  }

  @font-face {
    font-family: 'Didot-Italic';
    src: url('../static/fonts/Didot-Italic.ttf');
  }

  body {
    font-family: 'Didot', serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default () => (
    <WithTheme>
        <Home />
    </WithTheme>
)
