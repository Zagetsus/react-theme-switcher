import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

import userPersistedState from "./utils/usePersistedState";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import Header from "./components/Header";

import GlobalStyles from "./styles/global";

function App() {
  const [theme, setTheme] = userPersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
