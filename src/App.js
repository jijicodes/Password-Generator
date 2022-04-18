import "./App.css";
import React from "react";
import { Grommet, grommet } from "grommet";
import { acme } from "./acme-theme";
import { deepMerge } from "grommet/utils";
import { PasswordGenerator } from "../src/components/PasswordGenerator";

const theme = deepMerge(grommet, acme);

function App() {
  return (
    <Grommet className="grommet" full theme={theme}>
      <PasswordGenerator />
    </Grommet>
  );
}

export default App;
