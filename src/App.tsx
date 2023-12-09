import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { UserProvider } from './contexts/UserContext'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <UserProvider>
        <BrowserRouter>
          <Router></Router>
        </BrowserRouter>

      </UserProvider>
    </ThemeProvider>
  )
}

export default App
