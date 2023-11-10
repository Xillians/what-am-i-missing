import React from 'react';
import { CardInputType } from '@/models/card-input';

interface Props {
  cards: Map<string, number>;
}

export const ScryfallOutput: React.FC<Props> = ({ cards }) => {
  const cardList: CardInputType[] = [];
    cards.forEach((quantity: number, name: string) => {
        const card: CardInputType = {
        name: name,
        quantity: quantity,
        };
        cardList.push(card);
    });

  return  (
    <div>
      {cardList.map((card: CardInputType) => (
        <div key={card.name}>
          {card.quantity} {card.name}
        </div>
      ))}
    </div>
  )
};