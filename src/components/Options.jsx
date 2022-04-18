import React, { useState, useEffect } from "react";
import { Box, CheckBox, RangeInput, Text } from "grommet";

export const Options = ({ onChange }) => {
  const [conditions, setConditions] = useState({
    passwordLength: 10,
    upper: true,
    lower: true,
    numbers: true,
    symbols: true,
  });

  useEffect(() => {
    onChange(conditions);
  }, [onChange, conditions]);

  return (
    <Box direction="column" gap="small">
      <Box>
        <Text weight="bold">Password length</Text>
        <Box direction="row" gap="medium">
          <RangeInput
            min="9"
            max="20"
            step={1}
            value={conditions.passwordLength}
            onChange={(event) => {
              setConditions((prev) => ({
                ...prev,
                passwordLength: Number(event.target.value),
              }));
            }}
          />
          <Text weight="bold">{conditions.passwordLength}</Text>
        </Box>
      </Box>

      <Box direction="row" justify="between" gap="large">
        <Text weight="bold" alignSelf="start">
          Add Uppercase Letters
        </Text>
        <Box>
          <CheckBox
            checked={conditions.upper}
            onChange={(event) => {
              setConditions((prev) => ({
                ...prev,
                upper: event.target.checked,
              }));
            }}
          ></CheckBox>
        </Box>
      </Box>

      <Box direction="row" justify="between">
        <Text weight="bold" alignSelf="start">
          Add Lowercase Letters
        </Text>
        <Box>
          <CheckBox
            disabled
            checked={conditions.lower}
            onChange={(event) =>
              setConditions((prev) => ({
                ...prev,
                lower: event.target.checked,
              }))
            }
          ></CheckBox>
        </Box>
      </Box>

      <Box direction="row" justify="between">
        <Text weight="bold" alignSelf="start">
          Include Numbers
        </Text>
        <Box>
          <CheckBox
            checked={conditions.numbers}
            onChange={(event) =>
              setConditions((prev) => ({
                ...prev,
                numbers: event.target.checked,
              }))
            }
          ></CheckBox>
        </Box>
      </Box>

      <Box direction="row" justify="between">
        <Text weight="bold" alignSelf="start">
          Include Symbols
        </Text>
        <Box alignSelf="end">
          <CheckBox
            checked={conditions.symbols}
            onChange={(event) =>
              setConditions((prev) => ({
                ...prev,
                symbols: event.target.checked,
              }))
            }
          ></CheckBox>
        </Box>
      </Box>
    </Box>
  );
};
