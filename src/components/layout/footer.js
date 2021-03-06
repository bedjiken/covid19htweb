import React from "react";
import { Box } from "@chakra-ui/core";
import { maxWidth } from "./common";

export default () => (
  <Box>
    <Box marginX="auto" maxWidth={maxWidth} mt="8" paddingX="16px" paddingY="4">
      <Box fontSize="sm">Santepam. Une initiatice citoyenne.</Box>
      <Box fontSize="xs">© 2020 Santepam. All rights reserved.</Box>
    </Box>
  </Box>
);
