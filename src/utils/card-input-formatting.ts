export class CardInput {
  public quantity: number;
  public name: string;
  constructor(input: string) {
    this.quantity = this.set_quantity(input);
    this.name = this.set_card_name(input);
  }
  private set_quantity(input: string) {
    const quantity = input.split(" ")[0];
    return parseInt(quantity.replace(/[0-9]x /, ""));
  }
  private set_card_name(input: string) {
    const quantity = input.split(" ")[0];
    const card = input.replace(quantity, "");
    return this.trim_meta_data(card);
  }
  private trim_meta_data(card: string) {
    // Card may have meta data card-name [set] or card-name (set)
    // This function removes the meta data
    const regex = /(\[.*\])|(\(.*\))/;
    return card.replace(regex, "").trim();
  }
}