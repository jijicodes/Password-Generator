import React, { useContext } from "react";
import { Box, Anchor, ResponsiveContext } from "grommet";
import { Github } from "grommet-icons";

export const Footer = () => {
  const size = useContext(ResponsiveContext);
  const phrase = (
    <p align="center">
      Handcrafted in Denver, CO <br /> by Jijicodes{" "}
      <Github color="white" size="medium" />
    </p>
  );
  console.log(size, "sixe");
  return (
    <Box align="center" fill="horizontal">
      <Box
        align="center"
        justify="center"
        background="#C9BDD3"
        width={size === "small" ? "100%" : "50vw"}
        gap="medium"
        margin={{ top: "-20vh" }}
      >
        <Anchor
          size="medium"
          weight="bold"
          target="_blank"
          referrerPolicy="no-referrer"
          href="https://github.com/jijicodes"
          label={phrase}
        />
      </Box>
    </Box>
  );
};
