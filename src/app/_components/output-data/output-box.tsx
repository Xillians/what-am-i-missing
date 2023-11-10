import { Textarea } from "@chakra-ui/react";
import React from "react";

interface OutputBoxProps {
    cards: Map<string, number>;
}
function OutputBox({cards}: OutputBoxProps) {
  return (
    <Textarea
      width={"50%"}
      margin={"1rem"}
      padding={"1rem"}
      border={"1px solid #ccc"}
      borderRadius={"0.5rem"}
      minHeight={"10rem"}
      size="lg"
        placeholder="Output"
        value={
            Array.from(cards).map(([key, value]) => `${value} ${key}`).join("\n")
        }
        readOnly
      resize="none"
    />
  );
}

export default OutputBox;
