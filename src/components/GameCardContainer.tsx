import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const GameCardContainer: React.FC<Props> = ({ children }) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      width="100%"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in-out",
      }}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
