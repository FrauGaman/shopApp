(function(t){function e(e){for(var n,s,o=e[0],u=e[1],c=e[2],p=0,d=[];p<o.length;p++)s=o[p],r[s]&&d.push(r[s][0]),r[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,o=1;o<i.length;o++){var u=i[o];0!==r[u]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},r={app:0},a=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"161a":function(t,e,i){t.exports=i.p+"img/11.2fbd8cdd.png"},"19ca":function(t,e,i){t.exports=i.p+"img/9.21343c8f.png"},"2b97":function(t,e,i){"use strict";var n=i("eab9"),r=i.n(n);r.a},"2e88":function(t,e,i){},3022:function(t,e,i){t.exports=i.p+"img/5.0e05845d.png"},4915:function(t,e,i){t.exports=i.p+"img/2.ca30c023.png"},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("header",[i("div",{staticClass:"navbar"},[i("div",{staticClass:"container"},[i("div",{staticClass:"navbar-content"},[i("div",{staticClass:"logo"},[t._v("VUE-CLI")]),i("ul",{staticClass:"navbar-list"},t._l(t.links,function(e){return i("li",{key:e.title,staticClass:"navbar-item"},[i("router-link",{staticClass:"navbar-link",attrs:{title:e.title,to:e.url}},[t._v(t._s(e.title))])],1)}),0)])])])]),i("router-view"),i("footer")],1)},a=[],s={data:function(){return{links:[{title:"Home",url:"/"},{title:"Shop",url:"/shop"}]}}},o=s,u=(i("5c0b"),i("2877")),c=Object(u["a"])(o,r,a,!1,null,null,null),l=c.exports,p=i("8c4f"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper-content wrapper-content--fixed"},[i("section",[i("div",{staticClass:"container"},[i("h1",[t._v("Home Page")]),i("p",[t._v(t._s(t.getMessage))])])])])},m=[],f={computed:{getMessage:function(){return this.$store.getters.getMessage}}},g=f,v=Object(u["a"])(g,d,m,!1,null,null,null),b=v.exports,h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper-content wrapper-content--fixed"},[i("section",[i("div",{staticClass:"container"},[i("h1",{staticClass:"title"},[t._v("PAGE NOT FOUND!")]),i("p",[t._v("Go to "),i("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v("main page")])],1)])])])},_=[],x=(i("d6ea"),{}),k=Object(u["a"])(x,h,_,!1,null,"1999e36a",null),C=k.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper-content wrapper-content--fixed"},[i("section",[i("div",{staticClass:"container"},[i("h1",[t._v("Shop Page")]),i("div",{staticClass:"item__wrapper"},t._l(t.shopList,function(t){return i("shopItem",{key:t.id,attrs:{product:t}})}),1)])])])},y=[],N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item"},[i("img",{attrs:{src:t.product.img,alt:t.product.title}}),i("router-link",{staticClass:"link",attrs:{to:/shop/+t.product.id}},[t._v(t._s(t.product.title))])],1)},O=[],j={props:{product:{type:Object,required:!0}}},q=j,F=(i("2b97"),Object(u["a"])(q,N,O,!1,null,null,null)),L=F.exports,P={components:{shopItem:L},data:function(){return{shopList:null}},created:function(){this.shopList=this.$store.getters.getShopList}},B=P,S=Object(u["a"])(B,w,y,!1,null,null,null),$=S.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper-content wrapper-content--fixed"},[i("section",[i("div",{staticClass:"container"},[i("div",{staticClass:"product__wrapper"},[i("div",{staticClass:"product-slider"},[i("carousel",{attrs:{perPage:1,paginationEnable:!0,paginationColor:"#b3b3b3",paginationActiveColor:"#494ce8"}},t._l(t.product.gallery,function(t,e){return i("slide",{key:e},[i("img",{attrs:{src:t.img,alt:t.name}})])}),1)],1),i("div",{staticClass:"product-content"},[i("h1",{staticClass:"title"},[t._v(t._s(t.product.title))]),i("p",[t._v(t._s(t.product.descr))])])])])])])},M=[],D={data:function(){return{product:null}},created:function(){var t=this.$route.params.id;this.product=this.$store.getters.getProduct(t)}},T=D,G=(i("5923"),Object(u["a"])(T,E,M,!1,null,null,null)),I=G.exports;n["a"].use(p["a"]);var A=new p["a"]({routes:[{path:"/",name:"home",component:b},{path:"/shop",name:"shop",component:$},{path:"/shop/:id",name:"product",component:I},{path:"*",name:"notFound",component:C}]}),H=i("2f62"),J=(i("7514"),{state:{shopList:[{id:1,title:"Nike Red",descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sint facilis earum nulla quasi aliquam fuga placeat id voluptas soluta, veritatis blanditiis, et, maxime sequi quibusdam dignissimos? Voluptas nisi, neque repellat, illo quisquam quasi? Non inventore numquam quidem voluptatem est, sed corrupti! Pariatur nam, aut blanditiis, repellat voluptates iusto sapiente?",img:i("8843"),gallery:[{name:"Nike Boots First",img:i("8843")},{name:"Nike Boots First",img:i("4915")},{name:"Nike Boots First",img:i("8963")}]},{id:2,title:"Nike Default",descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, hic, veniam rem quidem blanditiis tenetur. Quibusdam animi ex, numquam aspernatur odio, eos delectus. Quibusdam aperiam dolores fugit a facere iure.",img:i("7240"),gallery:[{name:"Nike Boots First",img:i("7240")},{name:"Nike Boots First",img:i("3022")},{name:"Nike Boots First",img:i("dea4")}]},{id:3,title:"Nike Green",descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum beatae ea aut neque, sit soluta!",img:i("7cf9"),gallery:[{name:"Nike Boots First",img:i("7cf9")},{name:"Nike Boots First",img:i("d22e")},{name:"Nike Boots First",img:i("19ca")}]},{id:4,title:"Nike Street",descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum beatae ea aut neque, sit soluta!",img:i("784f"),gallery:[{name:"Nike Boots First",img:i("161a")},{name:"Nike Boots First",img:i("f3b1")}]}]},mutations:{},actions:{},getters:{getShopList:function(t){return t.shopList},getProduct:function(t){return function(e){return t.shopList.find(function(t){return t.id===+e})}}}});n["a"].use(H["a"]);var Q=new H["a"].Store({modules:{shop:J}}),U=i("0a63"),V=i.n(U);i("c1c3");n["a"].use(V.a),n["a"].config.productionTip=!1,new n["a"]({router:A,store:Q,render:function(t){return t(l)}}).$mount("#app")},5923:function(t,e,i){"use strict";var n=i("ebb3"),r=i.n(n);r.a},"5c0b":function(t,e,i){"use strict";var n=i("5e27"),r=i.n(n);r.a},"5e27":function(t,e,i){},7240:function(t,e,i){t.exports=i.p+"img/4.29f29cb4.png"},"784f":function(t,e,i){t.exports=i.p+"img/10.2fbd8cdd.png"},"7cf9":function(t,e,i){t.exports=i.p+"img/7.495b1fa0.png"},8843:function(t,e,i){t.exports=i.p+"img/1.05c06ec6.png"},8963:function(t,e,i){t.exports=i.p+"img/3.b67f085a.png"},c1c3:function(t,e,i){},d22e:function(t,e,i){t.exports=i.p+"img/8.c5bfd1a1.png"},d6ea:function(t,e,i){"use strict";var n=i("2e88"),r=i.n(n);r.a},dea4:function(t,e,i){t.exports=i.p+"img/6.272a3e75.png"},eab9:function(t,e,i){},ebb3:function(t,e,i){},f3b1:function(t,e,i){t.exports=i.p+"img/12.ed605a23.png"}});