(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{177:function(t,r,e){var content=e(185);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(24).default)("265da9ba",content,!0,{sourceMap:!1})},184:function(t,r,e){"use strict";var n=e(177);e.n(n).a},185:function(t,r,e){(t.exports=e(23)(!1)).push([t.i,"@-webkit-keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes slideInRight{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInRight{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.panelIntro{position:relative;padding:7% 5% 4% 0;margin-bottom:70px}.panelIntro.reverse{padding:7% 0 4% 5%}.panelIntro__color{position:absolute;left:0;top:0;width:60%;height:100%;z-index:0;-webkit-animation-name:slideInLeft;animation-name:slideInLeft;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:1.5s;animation-duration:1.5s}.reverse .panelIntro__color{right:0;left:auto;-webkit-animation-name:slideInRight;animation-name:slideInRight}.panelIntro__container{position:relative;z-index:1;display:flex}.reverse .panelIntro__container{flex-direction:row-reverse}.panelIntro__text{flex:0 0 40%;max-width:40%;padding:4%;color:#fff}.panelIntro__text .shop,.panelIntro__text .title{font-size:34px}.panelIntro__text .description,.panelIntro__text .title{margin-bottom:20px}.panelIntro__image{flex:0 0 60%;max-width:60%}.panelIntro__image img{width:100%}",""])},188:function(t,r,e){"use strict";e.r(r);e(46);var n=e(7),o=e(96),l=e.n(o),c={layout:"default",data:function(){return{carNumber1:3,carNumber2:2,carOption:"Peugeot"}},computed:{allCars:function(){var t=this;return this.cars.filter(function(r){return r.brand===t.carOption})}},asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",l.a.get("http://localhost:3001/cars").then(function(t){return{cars:t.data}}));case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()},_=(e(184),e(3)),component=Object(_.a)(c,function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"container"},[e("h1",{staticClass:"center"},[t._v("Miniatotto")]),t._v(" "),e("p",[t._v("ALL "+t._s(t.carOption))]),t._v(" "),t._l(t.allCars,function(r){return e("div",[t._v("\n    "+t._s(r.brand)+" "+t._s(r.model)+" "+t._s(r.version)+"\n  ")])}),t._v(" "),e("div",{staticClass:"panelIntro"},[e("div",{staticClass:"panelIntro__color",style:{backgroundColor:t.cars[t.carNumber1].color}}),t._v(" "),e("div",{staticClass:"panelIntro__container"},[e("article",{staticClass:"panelIntro__text"},[e("div",{staticClass:"shop uppercase"},[t._v(t._s(t.cars[t.carNumber1].brandshop))]),t._v(" "),e("div",{staticClass:"title"},[t._v(t._s(t.cars[t.carNumber1].brand)+" "+t._s(t.cars[t.carNumber1].model)+" "+t._s(t.cars[t.carNumber1].version))]),t._v(" "),e("div",{staticClass:"description"},[t._v(t._s(t.cars[t.carNumber1].description))]),t._v(" "),e("div",[t._v("Couleur: "+t._s(t.cars[t.carNumber1].colorname))]),t._v(" "),e("div",[t._v("Prix: "+t._s(t.cars[t.carNumber1].price))]),t._v(" "),e("nuxt-link",{staticClass:"button reverse",attrs:{to:"/list"}},[t._v("Acheter")])],1),t._v(" "),e("section",{staticClass:"panelIntro__image"},[e("img",{attrs:{src:t.cars[t.carNumber1].image,alt:t.cars[t.carNumber1].model}})])])]),t._v(" "),e("div",{staticClass:"panelIntro reverse"},[e("div",{staticClass:"panelIntro__color",style:{backgroundColor:t.cars[t.carNumber2].color}}),t._v(" "),e("div",{staticClass:"panelIntro__container"},[e("article",{staticClass:"panelIntro__text"},[e("div",{staticClass:"shop uppercase"},[t._v(t._s(t.cars[t.carNumber2].brandshop))]),t._v(" "),e("div",{staticClass:"title"},[t._v(t._s(t.cars[t.carNumber2].brand)+" "+t._s(t.cars[t.carNumber2].model)+" "+t._s(t.cars[t.carNumber2].version))]),t._v(" "),e("div",{staticClass:"description"},[t._v(t._s(t.cars[t.carNumber2].description))]),t._v(" "),e("div",[t._v("Couleur: "+t._s(t.cars[t.carNumber2].colorname))]),t._v(" "),e("div",[t._v("Prix: "+t._s(t.cars[t.carNumber2].price))]),t._v(" "),e("nuxt-link",{staticClass:"button reverse",attrs:{to:"/list"}},[t._v("Acheter")])],1),t._v(" "),e("section",{staticClass:"panelIntro__image"},[e("img",{attrs:{src:t.cars[t.carNumber2].image,alt:t.cars[t.carNumber2].model}})])])])],2)},[],!1,null,null,null);r.default=component.exports}}]);