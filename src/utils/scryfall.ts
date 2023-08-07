import { ScryfallAPI } from "./axios";
export class Scryfall {
    private api: typeof ScryfallAPI;

  constructor() {
    this.api = ScryfallAPI;
  }
  public async get_card(card_name: string) {
    const response = await this.api.get(`/cards/named?exact=${card_name}`);
    return await response.data;
  }
  public async get_card_image_uri(card_name: string) {
    const card = await this.get_card(card_name);
    return card.image_uris.normal;
}
  public async get_card_bulk(card_names: string[]) {
    const response = await this.api.post(`/cards/collection`, {
        identifiers: card_names.map((card_name) => {
            return { name: card_name };
        }
    )});
    return await response.data.data;
  }
}
