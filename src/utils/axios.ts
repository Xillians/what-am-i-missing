import axios from 'axios';

export const ScryfallAPI = axios.create({
    baseURL: 'https://api.scryfall.com',
    timeout: 1000,
});