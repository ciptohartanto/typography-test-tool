(function(t){function e(e){for(var a,r,s=e[0],l=e[1],p=e[2],c=0,f=[];c<s.length;c++)r=s[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,p||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="pcipto-hartanto/typography-test-tool/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},t._l(t.texts,(function(e){return n("div",{staticClass:"block"},[n("h3",{staticClass:"title"},[t._v(t._s(e.title))]),n("typo-test",{attrs:{"typography-lang":e.lang,text:e.text}})],1)})),0)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"typoTest"},[n("div",{staticClass:"testme"},[n("div",{staticClass:"testme--line",style:{top:t.pos+"px"}}),n("typography",{style:{fontSize:t.fontsize+"px",lineHeight:t.lineheight+"em",fontWeight:t.weight},attrs:{text:t.text,tag:"h3"}})],1),n("div",{staticClass:"options"},[n("span",{staticClass:"bold options-title"},[t._v("Text Size")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontsize,expression:"fontsize"}],attrs:{type:"text"},domProps:{value:t.fontsize},on:{input:function(e){e.target.composing||(t.fontsize=e.target.value)}}}),n("span",{staticClass:"italic"},[t._v("px")])]),n("div",{staticClass:"options"},[n("span",{staticClass:"bold options-title"},[t._v("Line Height")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.lineheight,expression:"lineheight"}],attrs:{type:"text"},domProps:{value:t.lineheight},on:{input:function(e){e.target.composing||(t.lineheight=e.target.value)}}}),n("span",{staticClass:"italic"},[t._v("em")])]),n("div",{staticClass:"options"},[n("span",{staticClass:"bold options-title"},[t._v("Ruler Pos")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pos,expression:"pos"}],attrs:{type:"text"},domProps:{value:t.pos},on:{input:function(e){e.target.composing||(t.pos=e.target.value)}}}),n("span",{staticClass:"italic"},[t._v("px from top")])]),n("div",{staticClass:"options"},[n("span",{staticClass:"bold options-title"},[t._v("Weight")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.weight,expression:"weight"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.weight=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"normal"}},[t._v("Normal (default)")]),n("option",{attrs:{value:"bold"}},[t._v("Bold")])])])])},s=[],l=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",class:[t._typographyStyleClass]},[t._v(t._s(t.text))])}),p=[],u={name:"Typography",props:{tag:{type:String,default:function(){return""}},text:{type:String,default:function(){return""}},typographyStyle:{type:String,default:function(){return""}}},computed:{_typographyStyleClass:function(){var t="",e="typography";return this.typographyStyle?(t="".concat(e,"-").concat(this.typographyStyle),t):Error}}},c=u,f=(n("8fd1"),n("2877")),d=Object(f["a"])(c,l,p,!1,null,"cb7164dc",null),v=d.exports,g={name:"TypoTest",components:{Typography:v},props:{text:{type:String,default:""},fontsize:{type:Number,default:18},lineheight:{type:Number,default:1.4},pos:{type:Number,default:24}},data:function(){return{weight:"normal"}}},h=g,y=(n("f42e"),Object(f["a"])(h,r,s,!1,null,"0e592645",null)),m=y.exports,x={name:"app",components:{TypoTest:m},data:function(){return{texts:[{text:"God Save the Queen God save our gracious Queen, Long live our noble Queen,",lang:"en",title:"Text in English"},{text:"신은 여왕을 구한다 하나님께서는 우리의 은혜로운 여왕을 구원해 주시고 우리의 고귀한 여왕을 오래 사세요",lang:"kr",title:"Text in Korean"},{text:"上帝保佑女王 上帝保佑我們親切的女王， 我們高貴的女王萬歲，",lang:"zh",title:"Text in Mandarin"},{text:"พระเจ้าคุ้มครองราชินี พระเจ้าช่วยราชินีที่สง่างามของเรา ลองใช้ราชินีผู้สูงศักดิ์ของเรา",lang:"th",title:"Text in Thai"},{text:"女王陛下万歳神は私たちの優雅な女王を救い、私たちの高貴な女王を長く生き、",lang:"jp",title:"Text in Japanese"}]}}},b=x,_=(n("cf25"),Object(f["a"])(b,o,i,!1,null,null,null)),w=_.exports;n("9a2a"),n("da01");a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(w)}}).$mount("#app")},"8e2c":function(t,e,n){},"8fd1":function(t,e,n){"use strict";var a=n("9932"),o=n.n(a);o.a},9932:function(t,e,n){},cf25:function(t,e,n){"use strict";var a=n("fea6"),o=n.n(a);o.a},da01:function(t,e,n){},f42e:function(t,e,n){"use strict";var a=n("8e2c"),o=n.n(a);o.a},fea6:function(t,e,n){}});
//# sourceMappingURL=app.7f1d0618.js.map