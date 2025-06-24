import "./App.css";
import { ColorModeContext, useMode, tokens } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Typography, Box, useTheme } from "@mui/material";
import MainView from "./main_view";

function App() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainView />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
