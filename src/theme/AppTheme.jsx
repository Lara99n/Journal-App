import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import { purpleTheme } from "./";

/* 1 paso para unsar MAI */
/* cuando ponemos children damos a entender que todos los hijos de mi componente van a tener acceso a el codigo */

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
