"use client";
import React from "react";
import InputBox from "./input-box";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { CardInput } from "@/utils/card-input-formatting";
import { CardInputType } from "@/models/card-input";

/**
 *
 * This contains the input boxes for the decklist and collection,
 * along with submit button.
 *
 * When user clicks submit, the decklist and collection are sent to the backend.
 */
function CardInputs(props: any) {
  let [decklist, setDecklist] = React.useState("");
  let [collection, setCollection] = React.useState("");

  function onDecklistChange(event: any) {
    setDecklist(event.target.value);
  }
  function onCollectionChange(event: any) {
    setCollection(event.target.value);
  }
  /**
   *
   * This function compares the decklist and collection and outputs the missing cards.
   * it splits the decklist and collection into a map of card names and quantities.
   *
   * It then iterates through the decklist and checks if the card is in the collection.
   * If it is, it checks if the quantity in the collection is less than the quantity in the decklist.
   * If it is, it adds the card to the missing cards list.
   *
   * @param decklist the input from the decklist input box
   * @param collection the input from the collection input box
   */
  function analyze() {
    const missing_cards = new Map<string, number>();
    const deckList = split_cards(decklist);
    const collectionList = split_cards(collection);

    deckList.forEach((quantity: number, name: string) => {
      if (collectionList.has(name)) {
        const collection_quantity = collectionList.get(name);
        if (collection_quantity && collection_quantity < quantity) {
          const card: CardInputType = {
            name: name,
            quantity: quantity - collection_quantity,
          };
          missing_cards.set(card.name, card.quantity);
        }
      } else {
        missing_cards.set(name, quantity);
      }
    });
    props.setMissingCards(missing_cards);
  }
  function split_cards(cardlist: string) {
    const cards = cardlist.split("\n");
    const card_inputs = new Map<string, number>();
    cards.forEach((card) => {
      const card_input = new CardInput(card);
      card_inputs.set(card_input.name, card_input.quantity);
    });
    return card_inputs;
  }

  return (
    <Flex
      flexDir="column"
      alignItems={"center"}
      width={{ base: "100%", md: "50%" }}
    >
      <Flex
        flexDir="row"
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
      >
        <InputBox placeholder="Decklist" onChange={onDecklistChange} />
        <InputBox placeholder="Collection" onChange={onCollectionChange} />
      </Flex>
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
          maxWidth: "50%",
        }}
        onClick={analyze}
      >
        Submit
      </Button>
    </Flex>
  );
}

export default CardInputs;
