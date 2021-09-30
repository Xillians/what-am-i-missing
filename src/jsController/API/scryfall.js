import scryfallBase from "./scryfallBase";

export class Scryfall {
     async getNamedCard(cardName) {
         return scryfallBase.get(`/cards/named?exact=${cardName}`)
    }
    async getAllSets(searchUri) {
        const url = this.removeBaseUrl(searchUri)
        return scryfallBase.get(url);
    }
    removeBaseUrl(fullUrl) {
        const base = scryfallBase.defaults.baseURL;
        return fullUrl.replace(base, '');
    }
    collectMultipleCards(cards = []) {
        const jsonBody = {
            "identifiers": []
        }
        cards.forEach(card => {
            if(card.name)
                jsonBody.identifiers.push({ name: card.name})
        });
        return scryfallBase.post('/cards/collection', jsonBody)
    }
}