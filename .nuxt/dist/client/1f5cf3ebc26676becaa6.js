(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{175:function(t,r,e){var content=e(204);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(24).default)("a6ab77b2",content,!0,{sourceMap:!1})},176:function(t,r,e){"use strict";var n=[function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticStyle:{display:"none"}},[n("img",{attrs:{src:e(177)}}),t._v(" "),n("img",{attrs:{src:e(178)}}),t._v(" "),n("img",{attrs:{src:e(179)}}),t._v(" "),n("img",{attrs:{src:e(180)}}),t._v(" "),n("img",{attrs:{src:e(181)}}),t._v(" "),n("img",{attrs:{src:e(182)}}),t._v(" "),n("img",{attrs:{src:e(183)}}),t._v(" "),n("img",{attrs:{src:e(184)}}),t._v(" "),n("img",{attrs:{src:e(185)}}),t._v(" "),n("img",{attrs:{src:e(186)}}),t._v(" "),n("img",{attrs:{src:e(187)}}),t._v(" "),n("img",{attrs:{src:e(188)}}),t._v(" "),n("img",{attrs:{src:e(189)}}),t._v(" "),n("img",{attrs:{src:e(190)}}),t._v(" "),n("img",{attrs:{src:e(191)}}),t._v(" "),n("img",{attrs:{src:e(192)}}),t._v(" "),n("img",{attrs:{src:e(193)}}),t._v(" "),n("img",{attrs:{src:e(194)}}),t._v(" "),n("img",{attrs:{src:e(195)}}),t._v(" "),n("img",{attrs:{src:e(196)}}),t._v(" "),n("img",{attrs:{src:e(197)}})])}],c={name:"cars"},o=e(4),component=Object(o.a)(c,function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);r.a=component.exports},177:function(t,r,e){t.exports=e.p+"img/0e5685f.jpg"},178:function(t,r,e){t.exports=e.p+"img/b3ceb5a.jpg"},179:function(t,r,e){t.exports=e.p+"img/4fdc709.jpg"},180:function(t,r,e){t.exports=e.p+"img/8157268.jpg"},181:function(t,r,e){t.exports=e.p+"img/1c2e99b.jpg"},182:function(t,r,e){t.exports=e.p+"img/0feb1a7.jpg"},183:function(t,r,e){t.exports=e.p+"img/0c6ece8.jpg"},184:function(t,r,e){t.exports=e.p+"img/1e4a741.jpg"},185:function(t,r,e){t.exports=e.p+"img/ba14928.jpg"},186:function(t,r,e){t.exports=e.p+"img/2609660.jpg"},187:function(t,r,e){t.exports=e.p+"img/915f0f7.jpg"},188:function(t,r,e){t.exports=e.p+"img/6e0e58b.jpg"},189:function(t,r,e){t.exports=e.p+"img/cdcc6ef.jpg"},190:function(t,r,e){t.exports=e.p+"img/d801afa.jpg"},191:function(t,r,e){t.exports=e.p+"img/253b143.jpg"},192:function(t,r,e){t.exports=e.p+"img/1d4288c.jpg"},193:function(t,r,e){t.exports=e.p+"img/abadba5.jpg"},194:function(t,r,e){t.exports=e.p+"img/bba24ef.jpg"},195:function(t,r,e){t.exports=e.p+"img/a299631.jpg"},196:function(t,r,e){t.exports=e.p+"img/0772479.jpg"},197:function(t,r,e){t.exports=e.p+"img/882713d.jpg"},203:function(t,r,e){"use strict";var n=e(175);e.n(n).a},204:function(t,r,e){(t.exports=e(23)(!1)).push([t.i,".card{position:relative;box-shadow:0 10px 36px 0 rgba(186,194,195,.47);margin:25px;padding:20px;min-width:400px;max-width:400px;transition:all .15s ease-in-out}.card:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}.card__image img{width:100%;height:auto}.unavailable .card__image img{opacity:.5}.unavailable .card__available{color:red}",""])},206:function(t,r,e){var content=e(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(24).default)("e0a7a734",content,!0,{sourceMap:!1})},209:function(t,r,e){"use strict";e(176);var n={props:["brand","carbrand","model","version","reference","image","colorname","color","available","price"]},c=(e(203),e(4)),component=Object(c.a)(n,function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card",class:{unavailable:!t.available},attrs:{id:"e3"}},[e("cars"),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"layout"},[e("h3",{staticClass:"card__title"},[e("span",{staticClass:"uppercase"},[t._v(t._s(t.brand))]),t._v(" "+t._s(t.carbrand)+" "+t._s(t.model)+" "),e("span",[t._v(t._s(t.version))])]),t._v(" "),e("div",{staticClass:"card__image"},[e("img",{attrs:{src:t.image,alt:t.brand}})]),t._v(" "),e("div",{staticClass:"color"},[e("span",{staticClass:"bold"},[t._v("Couleur:")]),t._v(" "),e("span",{staticClass:"squareColor",style:{background:t.color}}),t._v("\n        "+t._s(t.colorname)+"\n      ")]),t._v(" "),e("div",{staticClass:"card__reference"},[e("span",{staticClass:"bold"},[t._v("Référence:")]),t._v(" "+t._s(t.reference)+"\n      ")]),t._v(" "),e("div",{staticClass:"card__available"},[e("span",{staticClass:"bold"},[t._v("Disponibilité:")]),t._v(" "),t.available?e("span",[t._v("Oui")]):e("span",[t._v("Non")])]),t._v(" "),e("div",{staticClass:"card__price"},[e("span",{staticClass:"bold"},[t._v("Prix:")]),t._v(" "+t._s(t.price)+"\n      ")]),t._v(" "),e("nuxt-link",{staticClass:"button-like",attrs:{to:"/cars/"+t.reference}},[t._v(t._s(t.model)+" Profil")])],1)])],1)},[],!1,null,null,null);r.a=component.exports},218:function(t,r,e){"use strict";var n=e(206);e.n(n).a},219:function(t,r,e){(t.exports=e(23)(!1)).push([t.i,".cardContainer{display:flex;justify-content:center;flex-wrap:wrap}.center{text-align:center}",""])},227:function(t,r,e){"use strict";e.r(r);var n=e(96),c=e.n(n),o=e(209),l={data:function(){return{title:"Miniatauto",noResults:"Désolé pas de résultats concernant votre demande"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Miniatauto - modèle"}]}},transition:"bounce",components:{cars:e(176).a,Card:o.a},asyncData:function(t){return c.a.get("http://localhost:3001/cars?q=".concat(t.params.id)).then(function(t){return{carsData:t.data}})},middleware:"search",methods:{odd:function(t){return t%2==0?"odd":"even"}},computed:{carExists:function(){return this.carsData.length>0},resultLength:function(){return this.carsData.length}}},d=(e(218),e(4)),component=Object(d.a)(l,function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("h1",{staticClass:"center"},[t._v("Les modèles recherchés: "+t._s(t.$route.params.id))]),t._v(" "),e("h2",{staticClass:"center"},[t._v("Voir les résulats: ("+t._s(this.resultLength)+")")]),t._v(" "),t.carExists?e("div",{staticClass:"cardContainer"},t._l(t.carsData,function(r,n){return e("div",{key:n},[e("card",{class:{odd:t.odd(n)},attrs:{brand:r.brandshop,carbrand:r.brand,model:r.model,version:r.version,reference:r.reference,image:r.image,colorname:r.colorname,color:r.color,available:r.available,price:r.price}})],1)}),0):e("div",{staticClass:"center"},[t._v("\n    "+t._s(this.noResults)+": "+t._s(t.$route.params.id)+"\n  ")])])},[],!1,null,null,null);r.default=component.exports}}]);