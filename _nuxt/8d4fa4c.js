(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{414:function(t,e,l){var content=l(426);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(18).default)("3e3c1b99",content,!0,{sourceMap:!1})},418:function(t,e,l){var content=l(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(18).default)("306d1489",content,!0,{sourceMap:!1})},425:function(t,e,l){"use strict";l(414)},426:function(t,e,l){var r=l(17),n=l(21),o=l(22),c=l(23),m=r(!1),d=n(o),v=n(c);m.push([t.i,'@font-face{font-family:"Gunplay";src:local("Gunplay"),url('+d+') format("truetype")}@font-face{font-family:"Impact";src:local("Impact"),url('+v+') format("truetype")}.title_text[data-v-b484d294]{font-family:"Gunplay",sans-serif;font-size:8vmin;text-align:center;margin-bottom:-5vmin}.container[data-v-b484d294]{min-width:100vmin;min-height:100vmin;max-width:100vmin;max-height:100vmin;margin:0;padding:3vmin}.card_text[data-v-b484d294]{height:10vmin;font-size:1.5vmin;padding:0}.tabele_style[data-v-b484d294]{max-width:90vmin}',""]),t.exports=m},427:function(t,e,l){"use strict";l.r(e);var r={name:"SkillCard",props:{source:String,skill:Object},data:function(){return{headers:[{text:"技術",align:"end",sortable:!1,value:"name"},{text:"経験年数",value:"years",align:"end",sortable:!1},{text:"level",value:"level",align:"end",sortable:!1}]}}},n=l(73),o=l(122),c=l.n(o),m=l(410),d=l(415),v=l(412),f=l(539),h=l(406),_=l(193),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-card",{staticClass:"ma-3",attrs:{light:"","min-height":"60vmin"}},[l("v-app-bar",{attrs:{dark:"",color:t.skill.bar_color}},[l("v-toolbar-title",[t._v(t._s(t.skill.title))])],1),l("div",{attrs:{id:"content"}},[l("v-data-table",{attrs:{light:"",headers:t.headers,items:t.skill.tools,"hide-default-footer":""}}),l("v-footer",{attrs:{absolute:""}},[l("v-card-text",{staticClass:"card_text"},[t._v(t._s(t.skill.comment))])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAppBar:m.a,VCard:d.a,VCardText:v.b,VDataTable:f.a,VFooter:h.a,VToolbarTitle:_.a})},428:function(t,e,l){"use strict";l.r(e);l(44);var r={name:"TabSkillCard",props:{source:String,skills:Array},data:function(){return{tab:null,bar_color:null,title:"",headers:[{text:"技術",align:"end",sortable:!1,value:"name"},{text:"経験年数",value:"years",align:"end",sortable:!1},{text:"level",value:"level",align:"end",sortable:!1}]}},methods:{change_bar_color:function(t){return this.bar_color=t.bar_color,this.title=t.title,!1}},mounted:function(){var t=this.skills.slice(0,1)[0];this.bar_color=t.bar_color,this.title=t.title}},n=(l(425),l(73)),o=l(122),c=l.n(o),m=l(410),d=l(415),v=l(412),f=l(539),h=l(538),_=l(546),y=l(545),x=l(534),k=l(531),C=l(193),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-card",{staticClass:"ma-3",attrs:{light:"",height:"60vmin"}},[l("v-app-bar",{staticClass:"ma-0 pa-0",attrs:{dark:"",color:t.bar_color,flat:""},scopedSlots:t._u([{key:"extension",fn:function(){return[l("v-tabs",{staticClass:"ma-0 fill-width",attrs:{color:"white",grow:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[l("v-tabs-slider",{attrs:{color:"black"}}),t._l(t.skills,(function(e){return l("v-tab",{key:e.title,attrs:{color:e.bar_color},on:{click:function(l){return t.change_bar_color(e)}}},[t._v(t._s(e.lang))])}))],2)]},proxy:!0}])},[l("v-toolbar-title",[t._v(t._s(t.title))])],1),l("div",{staticClass:"content"},[l("v-tabs-items",{attrs:{light:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.skills,(function(e){return l("v-tab-item",{key:e.title,staticClass:"tabele_style",attrs:{"calculate-widths":"",light:""}},[l("v-data-table",{attrs:{light:"",headers:t.headers,items:e.tools,"hide-default-footer":"","mobile-breakpoint":"0"}}),l("v-card-text",[t._v(t._s(e.comment))])],1)})),1)],1)],1)}),[],!1,null,"b484d294",null);e.default=component.exports;c()(component,{VAppBar:m.a,VCard:d.a,VCardText:v.b,VDataTable:f.a,VTab:h.a,VTabItem:_.a,VTabs:y.a,VTabsItems:x.a,VTabsSlider:k.a,VToolbarTitle:C.a})},450:function(t,e,l){"use strict";l(418)},451:function(t,e,l){var r=l(17),n=l(21),o=l(22),c=l(23),m=r(!1),d=n(o),v=n(c);m.push([t.i,'@font-face{font-family:"Gunplay";src:local("Gunplay"),url('+d+') format("truetype")}@font-face{font-family:"Impact";src:local("Impact"),url('+v+') format("truetype")}.title_text[data-v-f6689e96]{text-align:center;margin-bottom:-5vmin}.container[data-v-f6689e96]{min-width:100vmin;min-height:100vmin;max-width:100vmin;max-height:100vmin;margin:0;padding:3vmin}.title_text[data-v-f6689e96]{font-family:"Gunplay",sans-serif;font-size:8vmin;margin-bottom:-1vmin}#Skills[data-v-f6689e96]{width:100%;background-color:#000;color:#fff}',""]),t.exports=m},464:function(t,e,l){"use strict";l.r(e);l(24),l(51),l(52);var r={name:"Skills",Component:function(){return Promise.resolve().then(l.bind(null,427))},data:function(){return{skills:[{title:"AI・データサイエンス",lang:"Python",bar_color:"blue",tools:[{name:"Python",years:9,level:"★★★★★"},{name:"tensorflow",years:4,level:"★★"},{name:"pandas",years:4,level:"★★"},{name:"scikit-learn",years:4,level:"★★★★"},{name:"scrapy",years:4,level:"★★★"},{name:"fastapi",years:4,level:"★★★"}],comment:"Pythonは…"},{title:"コーディング",lang:"Web",bar_color:"red",tools:[{name:"html/css",years:4,level:"★★★★★"},{name:"javascript",years:4,level:"★★"},{name:"Vue",years:4,level:"★★★★"},{name:"Nuxt",years:4,level:"★★★"}],comment:"Webは…"},{title:"インフラ",lang:"AWS",bar_color:"amber",tools:[{name:"AWS",years:4,level:"★★★★★"},{name:"EC2",years:4,level:"★★"},{name:"RDS",years:4,level:"★★★★"},{name:"S3",years:4,level:"★★★"}],comment:"インフラは…"}]}}},n=(l(450),l(73)),o=l(122),c=l.n(o),m=l(536),d=l(405),v=l(537),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{id:"Skills"}},[l("v-container",{staticClass:"mx-auto fluid"},[l("v-row",{staticClass:"titles",attrs:{"no-gutters":"",dense:""}},[l("v-col",{attrs:{cols:"12"}},[l("div",{staticClass:"title_text"},[l("h2",{staticClass:"text-center"},[t._v("Skills")])]),l("h3",{staticClass:"dispaly-3 text-center amber--text"},[t._v("技術")])])],1),"lg"===t.$mq||"xl"===t.$mq?l("v-row",{staticClass:"ma-0"},t._l(t.skills,(function(t){return l("v-col",{key:t.title,staticClass:"pa-0",attrs:{cols:"4"}},[l("SkillCard",{attrs:{skill:t}})],1)})),1):t._e(),"md"===t.$mq||"xs"===t.$mq||"sm"===t.$mq?l("v-row",[l("v-col",{attrs:{cols:"12"}},[l("TabSkillCards",{attrs:{skills:t.skills}})],1)],1):t._e()],1)],1)}),[],!1,null,"f6689e96",null);e.default=component.exports;c()(component,{SkillCard:l(427).default,TabSkillCards:l(428).default}),c()(component,{VCol:m.a,VContainer:d.a,VRow:v.a})}}]);