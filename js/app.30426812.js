(function(){"use strict";var t={1687:function(t,e,r){var n=r(9242),a=r(3396);function s(t,e,r,n,s,i){const c=(0,a.up)("Header"),o=(0,a.up)("card-list-inputs"),l=(0,a.up)("list-output"),d=(0,a.up)("scryfall-data");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c,{title:"Magic Deck Gap Analyzer"}),(0,a.Wm)(o,{onMissing_cards:e[0]||(e[0]=e=>t.missing_cards=e)}),t.missing_cards.size>0?((0,a.wg)(),(0,a.j4)(l,{key:0,missing_cards:t.missing_cards},null,8,["missing_cards"])):(0,a.kq)("",!0),t.missing_cards.size>0?((0,a.wg)(),(0,a.j4)(d,{key:1,missing_cards:t.missing_cards},null,8,["missing_cards"])):(0,a.kq)("",!0)],64)}var i=r(6520);const c={class:"container"};function o(t,e,r,s,i,o){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",c,[(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":e[0]||(e[0]=e=>t.decklist=e),placeholder:"Decklist"},null,512),[[n.nr,t.decklist]]),(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":e[1]||(e[1]=e=>t.collection=e),placeholder:"Collection"},null,512),[[n.nr,t.collection]])]),(0,a._)("button",{onClick:e[2]||(e[2]=(...e)=>t.analyze&&t.analyze(...e))},"Analyze")],64)}var l=r(7327);class d{constructor(t){(0,l.Z)(this,"quantity",void 0),(0,l.Z)(this,"name",void 0),this.quantity=this.set_quantity(t),this.name=this.set_card_name(t)}set_quantity(t){const e=t.split(" ")[0];return parseInt(e.replace(/[0-9]x /,""))}set_card_name(t){const e=t.split(" ")[0],r=t.replace(e,"");return this.trim_meta_data(r)}trim_meta_data(t){const e=/(\[.*\])|(\(.*\))/;return t.replace(e,"").trim()}}var u=function(t,e,r,n){var a,s=arguments.length,i=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(i=(s<3?a(i):s>3?a(e,r,i):a(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let p=class extends i.w3{};p=u([(0,i.Ei)({name:"CardListInputs",emits:["missing_cards"],data(){return{decklist:"",collection:"",missing_cards:new Map}},methods:{analyze(){this.missing_cards=new Map;const t=this.split_cards(this.decklist),e=this.split_cards(this.collection);t.forEach(((t,r)=>{this.set_missing_cards(r,t,e)})),this.$emit("missing_cards",this.missing_cards)},split_cards(t){const e=t.split("\n"),r=new Map;return e.forEach((t=>{const e=new d(t);r.set(e.name,e.quantity)})),r},set_missing_cards(t,e,r){if(r.has(t)){const n=r.get(t);if(n&&n<e){const r={name:t,quantity:e-n};this.missing_cards.set(r.name,r.quantity)}}else this.missing_cards.set(t,e)}}})],p);var f=p,_=r(89);const m=(0,_.Z)(f,[["render",o],["__scopeId","data-v-a2f61ed4"]]);var g=m,h=r(7139);const v={class:"header"},y={class:"nav-element"},w={class:"nav-element"},b=["src"];function k(t,e,r,n,s,i){return(0,a.wg)(),(0,a.iD)("div",v,[(0,a._)("div",y,[(0,a._)("h1",null,(0,h.zw)(t.title),1)]),(0,a._)("div",w,[(0,a._)("img",{src:t.question_mark},null,8,b)])])}var O=function(t,e,r,n){var a,s=arguments.length,i=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(i=(s<3?a(i):s>3?a(e,r,i):a(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let j=class extends i.w3{};j=O([(0,i.Ei)({name:"Header",props:{title:{type:String,required:!0}},data(){return{question_mark:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/2048px-Icon-round-Question_mark.svg.png"}}})],j);var D=j;const R=(0,_.Z)(D,[["render",k],["__scopeId","data-v-57a5e4e2"]]);var x=R;const q={class:"container"};function P(t,e,r,s,i,c){return(0,a.wg)(),(0,a.iD)("div",q,[(0,a.wy)((0,a._)("textarea",{disabled:"","onUpdate:modelValue":e[0]||(e[0]=e=>t.decklist=e),placeholder:"output"},null,512),[[n.nr,t.decklist]]),(0,a._)("button",{onClick:e[1]||(e[1]=(...e)=>t.copy_to_clipboard&&t.copy_to_clipboard(...e))},"Copy to clipboard")])}var z=function(t,e,r,n){var a,s=arguments.length,i=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(i=(s<3?a(i):s>3?a(e,r,i):a(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let E=class extends i.w3{};E=z([(0,i.Ei)({name:"ListOutput",props:{missing_cards:{type:Map,required:!0}},methods:{convert_map_to_string(t){let e="";return t.forEach(((t,r)=>{e+=`${t} ${r}\n`})),e},copy_to_clipboard(){const t=this.decklist;navigator.clipboard.writeText(t).then((()=>{console.log("copied to clipboard")}),(t=>{console.error("could not copy to clipboard",t)}))}},watch:{missing_cards:{immediate:!0,handler(){this.decklist=this.convert_map_to_string(this.missing_cards)}}}})],E);var I=E;const M=(0,_.Z)(I,[["render",P],["__scopeId","data-v-19288ed3"]]);var Z=M;const C={class:"container"};function H(t,e,r,n,s,i){const c=(0,a.up)("card-data");return(0,a.wg)(),(0,a.iD)("div",C,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.cards,(t=>((0,a.wg)(),(0,a.iD)("div",{class:"card-data",key:t.name},[(0,a.Wm)(c,{card:t},null,8,["card"])])))),128))])}const S={class:"card-data"},L=["src"];function T(t,e,r,n,s,i){return(0,a.wg)(),(0,a.iD)("div",S,[(0,a._)("b",null,(0,h.zw)(t.card.name),1),(0,a._)("img",{src:t.card.image_uris.normal},null,8,L)])}var U=function(t,e,r,n){var a,s=arguments.length,i=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(i=(s<3?a(i):s>3?a(e,r,i):a(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let $=class extends i.w3{};$=U([(0,i.Ei)({name:"cardData",props:{card:{type:Object,required:!0}}})],$);var A=$;const V=(0,_.Z)(A,[["render",T],["__scopeId","data-v-c8507c58"]]);var W=V,Y=r(4161);const Q=Y.Z.create({baseURL:"https://api.scryfall.com",timeout:1e3});class F{constructor(){(0,l.Z)(this,"api",void 0),this.api=Q}async get_card(t){const e=await this.api.get(`/cards/named?exact=${t}`);return await e.data}async get_card_image_uri(t){const e=await this.get_card(t);return e.image_uris.normal}async get_card_bulk(t){const e=await this.api.post("/cards/collection",{identifiers:t.map((t=>({name:t})))});return await e.data.data}}var G=function(t,e,r,n){var a,s=arguments.length,i=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(i=(s<3?a(i):s>3?a(e,r,i):a(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let K=class extends i.w3{};K=G([(0,i.Ei)({name:"ScryfallData",components:{cardData:W},data(){return{Scryfall:new F,cards:[]}},props:{missing_cards:{type:Map,required:!0}},methods:{async get_bulk_cards(t){const e=Array.from(t.keys());this.cards=await this.Scryfall.get_card_bulk(e)}},watch:{missing_cards:{immediate:!0,async handler(){this.missing_cards&&0===this.missing_cards.size||await this.get_bulk_cards(this.missing_cards)}}}})],K);var B=K;const J=(0,_.Z)(B,[["render",H],["__scopeId","data-v-1b4f744e"]]);var N=J,X=function(t,e,r,n){var a,s=arguments.length,i=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(i=(s<3?a(i):s>3?a(e,r,i):a(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let tt=class extends i.w3{};tt=X([(0,i.Ei)({components:{CardListInputs:g,Header:x,listOutput:Z,ScryfallData:N},data(){return{missing_cards:new Map}}})],tt);var et=tt;const rt=(0,_.Z)(et,[["render",s]]);var nt=rt,at=r(65),st=(0,at.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,n.ri)(nt).use(st).mount("#app")}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,r),s.exports}r.m=t,function(){var t=[];r.O=function(e,n,a,s){if(!n){var i=1/0;for(d=0;d<t.length;d++){n=t[d][0],a=t[d][1],s=t[d][2];for(var c=!0,o=0;o<n.length;o++)(!1&s||i>=s)&&Object.keys(r.O).every((function(t){return r.O[t](n[o])}))?n.splice(o--,1):(c=!1,s<i&&(i=s));if(c){t.splice(d--,1);var l=a();void 0!==l&&(e=l)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[n,a,s]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,s,i=n[0],c=n[1],o=n[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(a in c)r.o(c,a)&&(r.m[a]=c[a]);if(o)var d=o(r)}for(e&&e(n);l<i.length;l++)s=i[l],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(d)},n=self["webpackChunkwhat_am_i_missing"]=self["webpackChunkwhat_am_i_missing"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(1687)}));n=r.O(n)})();
//# sourceMappingURL=app.30426812.js.map