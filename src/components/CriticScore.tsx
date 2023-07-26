import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore: React.FC<Props> = ({ score }) => {
  let color = score > 75 ? "green" : score > 60 ? "yello" : "";
  return (
    <Badge colorScheme={color} fontSize={14} paddingX={2} borderRadius={4}>
      {score}
    </Badge>
  );
};

export default CriticScore;
