import { Flex, Heading, Textarea } from "@chakra-ui/react";
import React from "react";

interface OutputBoxProps {
    cards: Map<string, number>;
    title: string;
}
function OutputBox({cards, title}: OutputBoxProps) {
  return (
    <Flex
      flexDir={"column"}
      width={"100%"}
      alignItems={"center"}
      padding={"1rem"}
    >
      <Heading 
        as="h3" 
        size="lg" 
        marginBottom={"1rem"}
        alignSelf={"flex-start"}
      >
        {title}
      </Heading>
      <Textarea
        width={"100%"}
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
    </Flex>
  );
}

export default OutputBox;
