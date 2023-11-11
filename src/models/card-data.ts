export interface CardData {
    object: `card`,
    id: string,
    oracle_id: string,
    multiverse_ids: number[],
    mtgo_id: number,
    mtgo_foil_id: number,
    name: string,
    lang: languages,
    released_at: string,
    uri: string,
    scryfall_uri: string,
    layout: string,
    highres_image: boolean,
    image_status: string,
    image_uris: imageUris,
    mana_cost: string | '{0}',
    cmc: number,
    type_line: string,
    oracle_text: string,
    flavor_text: string,
    colors: Array<`W` | `U` | `B` | `R` | `G`>,
    color_identity: Array<`W` | `U` | `B` | `R` | `G`>,
    keywords: Array<string>,
    produced_mana: Array<`W` | `U` | `B` | `R` | `G`>,
    legalities: Array<legalities>,
    games: Array<games>,
    reserved: boolean,
    foil: boolean,
    nonfoil: boolean,
    finishes: finishes,
    oversized: boolean,
    promo: boolean,
    reprint: boolean,
    variation: boolean,
    set_id: string,
    set: string,
    set_name: string,
    set_type: string,
    set_uri: string,
    set_search_uri: string,
    scryfall_set_uri: string,
    rulings_uri: string,
    prints_search_uri: string,
    collector_number: number,
    digital: boolean,
    rarity: rarity,
    card_back_id: string,
    artist: string,
    artist_ids: Array<string>,
    illustration_id: string,
    border_color: string,
    frame: string,
    security_stamp: string,
    full_art: boolean,
    textless: boolean,
    booster: boolean,
    story_spotlight: boolean,
    prices: prices,
    related_uris: relatedUris,
    purchase_uris: purchaseUris
}

interface legalities {
    standard: legality,
    future: legality,
    historic: legality,
    gladiator: legality,
    pioneer: legality,
    explorer: legality,
    modern: legality,
    legacy: legality,
    pauper: legality,
    vintage: legality,
    penny: legality,
    commander: legality,
    oathbreaker: legality,
    brawl: legality,
    historicbrawl: legality,
    alchemy: legality,
    paupercommander: legality,
    duel: legality,
    oldschool: legality,
    premodern: legality,
    predh: legality
}
interface imageUris  {
    small: string,
    normal: string,
    large: string,
    png: string,
    art_crop: string,
    border_crop: string,
}
interface relatedUris {
    gatherer: string,
    tcgplayer_infinite_articles: string,
    tcgplayer_infinite_decks: string,
    edhrec: string
}
interface purchaseUris {
    tcgplayer: string,
    cardmarket: string,
    cardhoarder: string
}
interface prices {
    usd?: number,
    usd_foil?: number,
    usd_etched?: number,
    eur?: number,
    eur_foil?: number,
    tix?: number
}
interface finishes {
    foil: boolean,
    nonfoil: boolean,
    borderless: boolean,
    showcase: boolean,
    extendedart: boolean,
    fullart: boolean,
    textless: boolean,
    gilding: boolean
}

enum legality {
    legal,
    not_legal,
    restricted,
    banned
}
enum games {
    paper,
    arena,
    mtgo,
    freeform,
    frontier,
    future,
    historic,
    legacy,
    modern,
    pauper,
    penny,
    pioneer,
    standard,
    vintage
}
enum languages {
    en,
    es,
    fr,
    de,
    it,
    pt,
    ja,
    ko,
    ru,
    zhs,
}
enum rarity {
    common,
    uncommon,
    rare,
    mythic,
    bonus
}

