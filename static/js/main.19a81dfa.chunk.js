(this.webpackJsonpamazon=this.webpackJsonpamazon||[]).push([[0],{31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),i=a(21),n=a.n(i),r=(a(31),a(32),a(11)),o=a(61),j=a(62),l=a(15),d=(a(33),a(1)),h=Object(s.createContext)(),m=function(e){var t=e.reducer,a=e.initialState,c=e.children;return Object(d.jsx)(h.Provider,{value:Object(s.useReducer)(t,a),children:c})},b=function(){return Object(s.useContext)(h)};var _=function(){var e=b(),t=Object(r.a)(e,2),a=t[0].basket;return t[1],Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)(l.b,{to:"/",children:Object(d.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})}),Object(d.jsxs)("div",{className:"header__search",children:[Object(d.jsx)("input",{className:"header__searchInput",type:"text"}),Object(d.jsx)(o.a,{className:"header__searchIcon"})]}),Object(d.jsxs)("div",{className:"header__nav",children:[Object(d.jsxs)("div",{className:"header__option",children:[Object(d.jsx)("span",{className:"header__optionLineOne",children:"Hello guest"}),Object(d.jsx)("span",{className:"header__optionLineTwo",children:"Sign in"})]}),Object(d.jsxs)("div",{className:"header__option",children:[Object(d.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(d.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]}),Object(d.jsxs)("div",{className:"header__option",children:[Object(d.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(d.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(d.jsx)(l.b,{to:"/checkout",children:Object(d.jsxs)("div",{className:"header__optionBasket",children:[Object(d.jsx)(j.a,{}),Object(d.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===a||void 0===a?void 0:a.length})]})})]})]})};a(43),a(44);var u=function(e){var t=e.id,a=e.title,s=e.image,c=e.price,i=e.rating,n=b(),o=Object(r.a)(n,2),j=(o[0].basket,o[1]);return Object(d.jsxs)("div",{className:"product",children:[Object(d.jsxs)("div",{className:"product__info",children:[Object(d.jsx)("p",{children:a}),Object(d.jsxs)("p",{className:"product__price",children:[Object(d.jsx)("small",{children:"$"}),Object(d.jsx)("strong",{children:c})]}),Object(d.jsx)("div",{className:"product__rating",children:Array(i).fill().map((function(e,t){return Object(d.jsx)("p",{children:"\u2b50"},t)}))})]}),Object(d.jsx)("img",{src:s,alt:""}),Object(d.jsx)("button",{onClick:function(){j({type:"ADD_TP_BASKET",item:{id:t,title:a,image:s,price:c,rating:i}})},children:"Add to Basket"})]})};var p=function(){return Object(d.jsx)("div",{className:"home",children:Object(d.jsxs)("div",{className:"home__container",children:[Object(d.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.png",alt:""}),Object(d.jsxs)("div",{className:"home__row",children:[Object(d.jsx)(u,{id:"1",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",price:11.96,rating:5}),Object(d.jsx)(u,{id:"2",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",image:"https://m.media-amazon.com/images/I/41hbQSkaNxL._AC_UL320_.jpg",price:239,rating:4})]}),Object(d.jsxs)("div",{className:"home__row",children:[Object(d.jsx)(u,{id:"3",title:"Samsung LG49RG90SSUXEN 49' Curved LED Gaming Monitor",image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",price:199.99,rating:3}),Object(d.jsx)(u,{id:"4",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",image:"https://m.media-amazon.com/images/I/61mhy8eQGEL._AC_UY218_.jpg",price:98.99,rating:5}),Object(d.jsx)(u,{id:"5",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",price:598.99,rating:4})]}),Object(d.jsx)("div",{className:"home__row",children:Object(d.jsx)(u,{id:"6",title:"Samsung LG49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",price:1094.98,rating:4})})]})})},O=a(3),x=(a(45),a(46),a(23)),g=a.n(x);var v=function(){var e=b(),t=Object(r.a)(e,2),a=t[0].basket;return t[1],Object(d.jsxs)("div",{className:"subtotal",children:[Object(d.jsx)(g.a,{renderText:function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("p",{children:["Subtotal (",a.length," items) :",Object(d.jsx)("strong",{children:"0"})]}),Object(d.jsxs)("small",{className:"subtotal__gift",children:[Object(d.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:0,displayType:"text",thousandSeperator:!0,prefix:"\xa3"}),Object(d.jsx)("button",{children:"Proceed to Checkout"})]})};var N=function(){return Object(d.jsxs)("div",{className:"checkout",children:[Object(d.jsxs)("div",{className:"checkout__left",children:[Object(d.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(d.jsx)("div",{children:Object(d.jsx)("h2",{className:"checkout__title",children:"Your shopping basket"})})]}),Object(d.jsx)("div",{className:"checkout__right",children:Object(d.jsx)(v,{})})]})};var f=function(){return Object(d.jsx)(l.a,{children:Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(_,{}),Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{path:"/checkout",children:Object(d.jsx)(N,{})}),Object(d.jsx)(O.a,{path:"/",children:Object(d.jsx)(p,{})})]})]})})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),s(e),c(e),i(e),n(e)}))},k=a(13),C=a(20);n.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(m,{initialState:{basket:[]},reducer:function(e,t){return"ADD_TP_BASKET"===t.type?Object(C.a)(Object(C.a)({},e),{},{basket:[].concat(Object(k.a)(e.basket),[t.item])}):e},children:Object(d.jsx)(f,{})})}),document.getElementById("root")),S()}},[[48,1,2]]]);
//# sourceMappingURL=main.19a81dfa.chunk.js.map