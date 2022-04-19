import "./App.css";
import React from "react";
import { Box, Grommet, Anchor, grommet } from "grommet";
import { Github } from "grommet-icons";
import { acme } from "./acme-theme";
import { deepMerge } from "grommet/utils";
import { PasswordGenerator } from "../src/components/PasswordGenerator";

const theme = deepMerge(grommet, acme);
function App() {
  const phrase = (
    <p align="center">
      Handcrafted in Denver, CO <br /> by Jijicodes{" "}
    </p>
  );
  return (
    <Grommet className="grommet" full theme={theme}>
      <PasswordGenerator />
      <Box justify="center" margin={{ top: "-8vh" }}>
        <Anchor
          size="xlarge"
          weight="bold"
          alignSelf="center"
          target="_blank"
          referrerPolicy="no-referrer"
          href="https://github.com/jijicodes"
          label={phrase}
          icon={<Github />}
        />
      </Box>
    </Grommet>
  );
}

export default App;
