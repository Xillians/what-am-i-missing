<template>
    <div>
        <base-button :id="getRarity" :text="`find rarities`" @click="getSpecificCard"/>
        {{rarity}} <br>
        <baseImage :source="image"/> <br>
        {{sets}}
    </div>    
</template>

<script>
import {Scryfall} from '../jsController/API/scryfall';
import baseButton from './basic components/btn.vue';
import baseImage from './basic components/image.vue';

export default {
    name: "scryfallData",
    data() {
        return {
            scryfall: new Scryfall(),
            rarity: "",
            image: "",
            sets: [],
        }
    },
    components: {
        baseButton,
        baseImage
    },
    methods: {
        async getSpecificCard() {
            const card = await this.scryfall.getNamedCard('Gray Merchant of Asphodel');
            const sets = await this.scryfall.getAllSets(card.data.prints_search_uri);
            sets.data.data.forEach(set => {
                this.sets.push(set.set_name);
            });
            this.rarity = card.data.rarity;
            this.image = card.data.image_uris.small
        }
    }
}
</script>

<style scoped>

</style>