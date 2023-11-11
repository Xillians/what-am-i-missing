import { ScryfallAPI } from "@/api/scryfall";
import { CardData } from "@/models/card-data";
import { makeLogger } from "@/utils/logger";
import {
  Box,
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

interface Props {
  card: CardData;
}

// card details is a modal that will display the card details
// when a card is clicked on
export const CardDetails = ({ card }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cardDetails, setCardDetails] = React.useState<CardData[]>([]);
  const logger = makeLogger();

  useEffect(() => {
    const api: ScryfallAPI = new ScryfallAPI();

    if (isOpen && card.reprint) {
      api.getReprints(card.prints_search_uri).then((data) => {
        setCardDetails([...data]);
      });
      logger.info("card details: ", cardDetails)
    }
  }, [isOpen, card.id]);

  return (
    <>
      <Button onClick={onOpen}>Details</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          sx={{
            backdropFilter: "blur(10px)",
            background: "rgba(255, 255, 255, 0.5)",
          }}
        />
        <ModalContent overflow={"scroll"}>
          <ModalCloseButton alignSelf={"flex-end"} margin={"2rem"} />
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
                bg={"rgba(150, 150, 150, 0.5)"}
                margin={"2rem"}
                padding={"2rem"}
                borderRadius={"1rem"}
                maxH={"50vh"}
                overflow={"auto"}
                maxW={"35vw"}
              >
                <Flex
                  flexDir={"column"}
                  justifyContent={"top"}
                  alignItems={"center"}
                  textAlign={"left"}
                >
                  <Heading as={"h3"} fontSize={"2rem"} margin={"2rem"}>
                    {card.name}
                  </Heading>
                  <Flex flexDir={"column"}>
                    <p>{card.oracle_text}</p>
                    <p>{card.flavor_text}</p>
                    {cardDetails.length > 0 && (
                      <div>
                        <p>Reprints:</p>
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
    </>
  );
};
