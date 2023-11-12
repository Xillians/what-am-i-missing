import React from "react";
import OutputBox from "./output-box";
import { Button, Flex } from "@chakra-ui/react";

interface OutputProps {
  cards: Map<string, number>;
}

function Output({ cards }: OutputProps) {
  return (
    <Flex
      style={{
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        color: "#2c3e50",
        margin: "1rem",
      }}
    >
      <OutputBox cards={cards} />
      <Flex>
        <Button
          colorScheme="blue"
          size="lg"
          style={{
            margin: "1rem",
            padding: "1rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            resize: "none",
            backgroundColor: "#b3d4fc",
            color: "#ffff",
          }}
          onClick={() => {
            navigator.clipboard.writeText(
              Array.from(cards)
                .map((card) => `${card[1]} ${card[0]}`)
                .join("\n")
            );
          }}
        >
          Copy to clipboard
        </Button>
        <Button
          colorScheme="blue"
          size="lg"
          style={{
            margin: "1rem",
            padding: "1rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            resize: "none",
            backgroundColor: "#b3d4fc",
            color: "#ffff",
          }}
          onClick={() => {
            navigator.clipboard.writeText(
              JSON.stringify(Object.fromEntries(cards), null, 2)
            );
          }}
        >
          copy JSON
        </Button>
      </Flex>
    </Flex>
  );
}

export default Output;
