import React from "react";
import { ThemeProvider } from '@material-ui/styles';
import theme from './utils/theme';

const App = props => {
  return (
    <ThemeProvider theme={theme}>
    <div>
      ZeMoSo React Starter
    </div>
    </ThemeProvider>
  );
};

export default App;