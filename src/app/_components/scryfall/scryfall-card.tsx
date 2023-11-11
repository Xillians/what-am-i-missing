import { CardData } from "@/models/card-data";
import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { CardDetails } from "./card-details";

interface Props {
  cards: CardData;
}

export const ScryfallCard = ({ cards }: Props) => {
  const [isOpen, toggleOpen] = React.useState(false);
  const onClose = () => toggleOpen(false);
  const onOpen = () => toggleOpen(true);
  return (
    <Flex 
      key={cards.id}
      id={cards.id}
      flexDir={"column"}
      alignItems={"left"}
      margin={"0 0 0 10px"}
      onClick={onOpen}
    >
      <CardDetails card={cards} />
      <p>{cards.name}</p>
      <Image
        src={cards.image_uris.small} 
        alt={cards.name} 
        width="200"
        height="280"
        margin={"0 auto"}
        border={"1px solid #ccc"}
        borderRadius={"5px"}
        />
    </Flex>
  );
};