"use client";
import React, { Suspense } from "react";
import CardInputs from "./_components/input-boxes/card-inputs";
import { Flex } from "@chakra-ui/react";
import Output from "./_components/output-data/output";
import { ScryfallOutput } from "./_components/scryfall/scryfall-output";

function Page() {
  const [cards, setMissingCards] = React.useState<Map<string, number>>(new Map<string, number>());
  
  return (
    <Flex 
      flexDir={"column"}
      width={{ base: "100%", md: "50%" }}
      >
      <CardInputs setMissingCards={setMissingCards} />
      {
        cards.size > 0 &&
        <Output cards={cards} />
      }
        <ScryfallOutput cards={cards} />
    </Flex>
  );
}

export default Page;