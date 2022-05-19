import React, { useContext } from "react";
import { ThemeContext } from "../../hook/themeContext";
import themes from "../../constanta/themes";

import { ToggleButton, ContainerIcon } from "./style";

const ToggleButtonComp = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const hendleChangeTheme = (e) => {
    e.target.checked ? setTheme(themes.light) : setTheme(themes.dark);
  };
  return (
    <ToggleButton>
      <input type="checkbox" onChange={(e) => hendleChangeTheme(e)} />
      <ContainerIcon bg={theme.secondary} ballbg={theme.thirdcolor}>
        <box-icon color="white" type="solid" name="sun"></box-icon>
        <box-icon color="black" type="solid" name="moon"></box-icon>
        <div className="ball"></div>
      </ContainerIcon>
    </ToggleButton>
  );
};

export default ToggleButtonComp;
