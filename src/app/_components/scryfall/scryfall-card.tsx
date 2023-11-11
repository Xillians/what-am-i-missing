import { CardData } from "@/models/card-data";
import React from "react";

interface Props {
  cards: CardData;
}

export const ScryfallCard = ({ cards }: Props) => {
  return (
    <div key={cards.id}>
      <img src={cards.image_uris.small} alt={cards.name} />
      <p>{cards.name}</p>
    </div>
  );
};