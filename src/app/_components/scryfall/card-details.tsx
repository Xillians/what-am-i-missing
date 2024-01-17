import { ScryfallAPI } from "@/api/scryfall";
import { CardData } from "@/models/card-data";
import {
  Box,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

interface Props {
  card: CardData;
  isOpen: boolean;
  onClose: () => void;
}

// card details is a modal that will display the card details
// when a card is clicked on
export const CardDetails = ({ card, isOpen, onClose }: Props) => {
  const [cardDetails, setCardDetails] = React.useState<CardData[]>([]);

  useEffect(() => {
    const api: ScryfallAPI = new ScryfallAPI();

    if (isOpen && card.reprint) {
      api.getReprints(card.prints_search_uri).then((data) => {
        setCardDetails([...data]);
      });
    }
  }, [isOpen, card.id]);

  return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          sx={{
            backdropFilter: "blur(10px)",
            background: "rgba(255, 255, 255, 0.5)",
          }}
        />
        <ModalContent overflow={"scroll"}>
          <ModalCloseButton alignSelf={"flex-end"} padding={"2rem"} />
          <ModalBody>
            <Flex
              flexDir={{ base: "column", md: "row" }}
              flexFlow={"wrap"}
              justifyContent={"center"}
              alignItems={"space-between"}
              overflow={"auto"}
            >
                <img src={card.image_uris.normal} alt={card.name} />
              <Box
                bg={"white"}
                margin={"2rem"}
                padding={"2rem"}
                borderRadius={"1rem"}
                maxH={"60vh"}
                overflow={"auto"}
                maxW={"50em"}
              >
                <Flex
                  flexDir={"column"}
                  justifyContent={"top"}
                  alignItems={"center"}
                  textAlign={"left"}
                >
                  <Heading as={"h2"} fontWeight={"bold"} fontSize={"2em"} margin={"2rem"}>
                    {card.name}
                  </Heading>
                  <Flex flexDir={"column"}>
                    <p>{card.oracle_text}</p>
                    <p>{card.flavor_text}</p>
                    {cardDetails.length > 0 && (
                      <div><br/>
                        <b>Reprints:</b>
                        {cardDetails.map((card) => (
                          <p>{card.set_name}</p>
                        ))}
                      </div>
                    )}
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
  );
};
