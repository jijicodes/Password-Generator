import React from "react";
import { Box, Button, Text } from "grommet";
import { Copy, Refresh } from "grommet-icons";
import { useCopyToClipboard } from "./hooks/useCopyToClipboard.js";

export const PasswordDisplay = ({ password, refreshHandle }) => {
  const [a, b] = useCopyToClipboard();
  return (
    //color:  "#6AAEB5", "#B6C9F5",
    <Box background="plainWhite" round="small" direction="row" border>
      <Box pad="medium">
        <Text
          style={{ fontFamily: "monospace" }}
          weight="bold"
          size="large"
          alignSelf="stretch"
        >
          {password}
        </Text>
      </Box>
      <Box direction="row" size="small">
        <Button icon={<Copy />} hoverIndicator onClick={() => b(password)} />
        <Button icon={<Refresh />} onClick={refreshHandle} hoverIndicator />
      </Box>
    </Box>
  );
};
