import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import Routes from 'Routes';
import Config from 'Config';
import CssBaseline from '@material-ui/core/CssBaseline';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

export const App = () => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={createMuiTheme(Config.theme)}>
      <CssBaseline>
        <Switch>
          {Routes.map(route => <Route key={route.name} {...route} />)}
        </Switch>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default memo(App);
