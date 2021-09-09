import {Switch, Route} from 'react-router-dom';

import { PageLayout } from './components/common/PageLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import DarkTheme from './themes/dark';
import LightTheme from './themes/light';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${p => p.theme.bodyColor};
    min-height: 100vh;
    margin: 0;
    color: ${p => p.theme.bodyFontColor};
    
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Kaushan Script';
      text-align: center;
    }
  }
`;

function App() {
  const [theme, setTheme] = useState(LightTheme);

  return (
    <ThemeProvider theme={{...theme, setTheme: () => {
      setTheme(s => s.id === 'light' ? DarkTheme : LightTheme)
    }}}>
      <GlobalStyle />
      <PageLayout />
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
