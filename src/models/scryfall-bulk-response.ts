import { CardData } from "./card-data";

export interface scryfallBulkResponse {
    object: `list`,
    not_found: missingCards[],
    data: CardData[],
}

interface missingCards {
    name: string,
}