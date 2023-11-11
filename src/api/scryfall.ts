import { CardData } from "@/models/card-data";
import { CardInputType } from "@/models/card-input";
import { makeLogger } from "@/utils/logger";
import fetch from 'node-fetch';

/**
 * This is the scryfall API.
 * It is used to get card data from scryfall.
 *
 * This class is a wrapper to abstract the API communication
 * from the rest of the application.
 *
 * for information about the scryfall API, see:
 * https://scryfall.com/docs/api
 *
 */
export class ScryfallAPI {
  private static base_url = "https://api.scryfall.com";
  private static logger = makeLogger();

  /**
   *
   * This function gets a specific card from scryfall.
   *
   * @param card_name This is the exact name of the card
   * @returns CardData object containing the card data
   */
  public async getCard(card_name: string): Promise<CardData> {
    const response = await fetch(
      `${ScryfallAPI.base_url}/cards/named?exact=${card_name}`
    );
    return await response.json();
  }

  /**
   *
   * This function gets a specific card image uri from scryfall.
   *
   * @param card_name This is the exact name of the card
   * @returns string containing the image uri
   */
  public async getCardImageUri(card_name: string): Promise<string> {
    const card = await this.getCard(card_name);
    return card.image_uris.normal;
  }

  /**
   *
   * This function gets a bulk of cards from scryfall.
   * The limit is 75 cards per request.
   *
   * @param card_names This is an array of card names
   * @returns Array of CardData objects containing the card data
   */
  private async getcardBulk(card_names: string[]): Promise<Array<CardData>> {
    const requestBody = JSON.stringify({
      identifiers: card_names.map((card_name) => {
        return { name: card_name };
      }),
    });
    ScryfallAPI.logger.info(`Fetching ${card_names.length} cards from Scryfall`);
     ScryfallAPI.logger.info(requestBody);
     const headers = {
      'Content-Type': 'application/json',
    };
    const response = await fetch(`${ScryfallAPI.base_url}/cards/collection`, {
      method: "POST",
      body: requestBody,
      headers,
    });
    return await response.json();
  }

  public async fetchBulkData(cardList: CardInputType[], ): Promise<CardData[]> {
    ScryfallAPI.logger.info(`Fetching ${cardList.length} cards from Scryfall`);
    const completeList: CardData[] = [];
    if (cardList.length > 75) {
        // we need to split the list into chunks of 75
        const chunkSize = 75;
        const chunkedArray = [];
        for (let i = 0; i < cardList.length; i += chunkSize) {
          chunkedArray.push(cardList.slice(i, i + chunkSize));
        }
        chunkedArray.forEach( async (chunk: CardInputType[]) => {
            const input: string[] = [];
            chunk.forEach((card: CardInputType) => {
                input.push(card.name);
            });
            console.log(input);
            const cardList: CardData[] = await this.getcardBulk(input);
            completeList.push(...cardList);
        });
    }
    return completeList;
  }

  /**
   *
   * This function gets a bulk of reprints from scryfall.
   *
   * @param print_search_uri This is the uri of the print search
   * @returns Array of CardData objects containing the card data
   */
  public async getReprints(print_search_uri: string): Promise<Array<CardData>> {
    const response = await fetch(print_search_uri);
    return await response.json();
  }
}
