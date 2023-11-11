import { CardData } from "./card-data";

export interface CardReprintResponse {
    object: string;
    total_cards: number;
    has_more: boolean;
    data: CardData[]
}