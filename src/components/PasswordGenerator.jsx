import React, { useCallback, useState } from "react";
import { Box, Text, Heading } from "grommet";
import { PasswordDisplay } from "../components/PasswordDisplay";
import { Options } from "../components/Options";
import { generatePW } from "../utils/generatePW";

export const PasswordGenerator = () => {
  const [updateConditions, setUpdateConditions] = useState({
    passwordLength: 11,
    upper: true,
    lower: true,
    numbers: true,
    symbols: true,
  });
  const [password, setPassword] = useState(generatePW(updateConditions));

  const onOptionChange = useCallback((change) => {
    setUpdateConditions(change);
    setPassword(generatePW(change));
  }, []);
  //pink B "#FEAFA6"
  //"#6AAEB5"
  return (
    <Box fill justify="center" align="center" background="transparent">
      <Box
        background="kashmirBlue"
        elevation="xlarge"
        direction="column"
        gap="medium"
        align="center"
        justify="between"
        pad="medium"
        margin={{ top: "-10vh" }}
        round="10px"
        border={{ size: "small" }}
      >
        <Heading color="white">Password Generator</Heading>
        <PasswordDisplay
          password={password}
          refreshHandle={() => {
            console.log("refresh");
            setPassword(generatePW(updateConditions));
          }}
        />
        <Options onChange={onOptionChange} />
      </Box>
    </Box>
  );
};
