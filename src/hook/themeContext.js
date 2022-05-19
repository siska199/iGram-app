import { createContext, useState } from "react";
import themes from "../constanta/themes";
export const ThemeContext = createContext();

export function ThemeContextProvider(props) {
  const [theme, setTheme] = useState(themes.dark);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
