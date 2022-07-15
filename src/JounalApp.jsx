import React from "react";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";

/* 3. Emvuelvo toda la app con el theme */
export const JounalApp = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
};
