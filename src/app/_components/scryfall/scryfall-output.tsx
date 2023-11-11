import React, { useEffect } from "react";
import { CardInputType } from "@/models/card-input";
import { ScryfallAPI } from "@/api/scryfall";
import { CardData } from "@/models/card-data";
import { makeLogger } from "@/utils/logger";

interface Props {
    cards: Map<string, number>;
  }
  
export const ScryfallOutput = ({ cards }: Props) => {
    const [cardList, setCardList] = React.useState<CardData[]>([]);
    const logger = makeLogger();
    useEffect(() => {
        const fetchData = async () => {
            const api = new ScryfallAPI();
            const logger = makeLogger();
            logger.debug("cards", cards);
            const cardInput: CardInputType[] = [];
            cards.forEach((count, name) => {
                const newCard: CardInputType = {
                        name: name,
                        quantity: count,
                }
                cardInput.push(newCard);
            });
            const cardData = await api.fetchBulkData(cardInput);
            setCardList(cardData);
        };
        fetchData();
    }, [cards]);

    return (
        <div>
            {cardList.map((card: CardData) => (
                <div key={card.name}>
                    {card.name}
                </div>
            ))}
        </div>
    );};

