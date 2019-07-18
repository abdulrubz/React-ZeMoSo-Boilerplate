import React, {Fragment} from "react";
import { ThemeProvider } from '@material-ui/styles';
import theme from './utils/theme';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = props => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Fragment>
          ZeMoSo React Starter
        </Fragment>
      </ThemeProvider>
    </React.StrictMode>

  );
};

export default App;