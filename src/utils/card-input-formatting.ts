/**
 * CardInput is a class that takes in a string from the user and formats it 
 * into a quantity and card name.
 * 
 * Examples:
 * 
 * 4x card-name
 * 
 * 1 card-name
 * 
 * 10x card-name (set)
 * 
 * 10x card-name (set) <more meta data>
 * 
 * This class automatically removes meta data from the card name.
 */
export class CardInput {
  public quantity: number;
  public name: string;
  constructor(input: string) {
    this.quantity = this.set_quantity(input);
    this.name = this.set_card_name(input);
  }
  /**
   * Sets the quantity of the card. The quantity is the number before the "x" in the input string.
   * 
   * @param input the input string from the user
   * @returns the quantity of the card
   */
  private set_quantity(input: string) {
    const quantity = input.split(" ")[0];
    return parseInt(quantity.replace(/[0-9]x /, ""));
  }
  /**
   * Sets the card name. The card name is the string after the quantity 
   * and "x" in the input string.
   * 
   * 
   * @param input full input string from the user
   * @returns the card name without the quantity
   */
  private set_card_name(input: string) {
    const quantity = input.split(" ")[0];
    const card = input.replace(quantity, "");
    return this.trim_meta_data(card);
  }
  /**
   * Removes meta data from card name. Meta data is anything in brackets or parenthesis
   * @param card card name with meta data
   * @returns formatted card name without meta data
   */
  private trim_meta_data(card: string) {
    if (card.includes("(")) {
      const card_name = card.split("(")[0];
      return card_name.trim();
    }
    if (card.includes("[")) {
      const card_name = card.split("[")[0];
      return card_name.trim();
    }
    return card.trim();
  }
}