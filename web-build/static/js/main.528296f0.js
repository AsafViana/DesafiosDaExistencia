(()=>{"use strict";var e={7020:(e,t,i)=>{i.r(t),i.d(t,{default:()=>we});var o=i(9526),n=i(5805),r=i(4152),c=i(5640),l=i(5693),a=i(3987),d=i(481),s=i(7754),f=i(3468),u=i(4942),m=i(885),x=i(8719),j=i(638),g=i(4352),I=i(6335),h=i(7557);function b(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function p(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?b(Object(i),!0).forEach((function(t){(0,u.default)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function w(e){var t=(0,o.useState)("#fff"),i=(0,m.default)(t,2),n=i[0],r=i[1];return(0,h.jsx)(x.default,p(p({},e),{},{space:5,w:"100%",maxW:"300px",children:(0,h.jsx)(x.default,{w:"100%",alignSelf:"center",children:(0,h.jsx)(j.Input,{onBlur:function(){r("#fff")},onFocus:function(){r("#e6e6e6")},backgroundColor:n,placeholder:"Search",variant:"filled",w:"100%",h:50,borderRadius:"10",py:"1",px:"2",InputLeftElement:(0,h.jsx)(g.default,{ml:"2",size:"4",color:"gray.400",as:(0,h.jsx)(I.default,{name:"ios-search"})})})})}))}var y=i(6890),v=i(3040),C=i(410),k=i(6602),V=i(8246),L=i(2535),P=i(7849),S=i(2727),O=i(1223),A=i(2450),z=i(3770),_=function(e){return e.Livro="book",e.Podcast="podcast",e.Video="play",e.Imagem="image",e.Artigo="article",e}(_||{});function G(e){var t=e.icon,i=(0,h.jsx)(O.default,{name:"book",size:40,color:"white"});(0,S.useNavigation)();switch(_[t]){case"book":i=(0,h.jsx)(O.default,{name:"book",style:{margin:5},size:35,color:"white"});break;case"podcast":i=(0,h.jsx)(O.default,{name:"podcast",style:{margin:5},size:35,color:"white"});break;case"play":i=(0,h.jsx)(A.default,{name:"controller-play",size:40,color:"white"});break;case"image":i=(0,h.jsx)(A.default,{name:"image-inverted",size:40,color:"white"});break;case"article":i=(0,h.jsx)(z.default,{name:"article",size:40,color:"white"})}return(0,h.jsx)(d.default,{alignItems:"center",m:5,py:10,children:(0,h.jsxs)(y.default,{maxW:"80",rounded:"lg",overflow:"hidden",borderColor:"coolGray.200",borderWidth:"1",_dark:{borderColor:"coolGray.600",backgroundColor:"gray.700"},_web:{shadow:2,borderWidth:0},_light:{backgroundColor:"gray.50"},children:[(0,h.jsxs)(d.default,{children:[(0,h.jsx)(v.default,{w:"100%",ratio:16/9,children:(0,h.jsx)(C.default,{source:{uri:"https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"},alt:"image"})}),(0,h.jsx)(s.default,{bg:"#007aff",_dark:{bg:"#007aff"},_text:{color:"warmGray.50",fontWeight:"700",fontSize:"xs"},position:"absolute",roundedTopRight:"3xl",bottom:"0",px:"3",py:"1.5",children:i})]}),(0,h.jsxs)(k.default,{p:"4",space:3,children:[(0,h.jsxs)(k.default,{space:2,children:[(0,h.jsx)(V.default,{size:"md",ml:"-1",children:"The Garden City"}),(0,h.jsx)(L.default,{fontSize:"xs",_light:{color:"#007aff"},_dark:{color:"violet.400"},fontWeight:"500",ml:"-0.5",mt:"-1",children:"The Silicon Valley of India."})]}),(0,h.jsx)(L.default,{fontWeight:"400",children:"Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city is also known for its parks and nightlife."}),(0,h.jsx)(P.default,{alignItems:"center",space:4,justifyContent:"space-between",children:(0,h.jsx)(P.default,{alignItems:"center",children:(0,h.jsx)(L.default,{color:"coolGray.600",_dark:{color:"warmGray.200"},fontWeight:"400",children:"6 mins ago"})})})]})]})})}function F(){return(0,h.jsxs)(d.default,{flex:1,backgroundColor:"#f1f1f1",children:[(0,h.jsx)(s.default,{style:{backgroundColor:"#212121"},pb:6,pt:6,shadow:"9",children:(0,h.jsx)(w,{})}),(0,h.jsxs)(f.ScrollView,{flex:1,children:[(0,h.jsx)(G,{icon:"Artigo"}),(0,h.jsx)(G,{icon:"Imagem"}),(0,h.jsx)(G,{icon:"Livro"}),(0,h.jsx)(G,{icon:"Podcast"}),(0,h.jsx)(G,{icon:"Video"})]})]})}var R=i(1236),T=i(4333);function W(){return(0,h.jsx)(d.default,{alignItems:"center",justifyContent:"center",flex:1,backgroundColor:"#f1f1f1",children:(0,h.jsxs)(f.ScrollView,{flex:1,children:[(0,h.jsx)(s.default,{style:{backgroundColor:"#212121"},pb:6,pt:6,shadow:"9",rounded:"3xl",children:(0,h.jsx)(w,{})}),(0,h.jsx)(R.FlatList,{data:[{id:1,title:"Item 1",icon:"Artigo"},{id:2,title:"Item 2",icon:"Imagem"},{id:3,title:"Item 3",icon:"Livro"},{id:4,title:"Item 4",icon:"Video"},{id:5,title:"Item 5",icon:"Podcast"},{id:6,title:"Item 6",icon:"Artigo"},{id:7,title:"Item 7",icon:"Imagem"},{id:8,title:"Item 8",icon:"Livro"},{id:9,title:"Item 9",icon:"Podcast"},{id:10,title:"Item 10",icon:"Video"},{id:11,title:"Item 11",icon:"Artigo"},{id:12,title:"Item 12",icon:"Video"}],renderItem:function(e){return(0,h.jsx)(G,{icon:e.item.icon})},numColumns:3,contentContainerStyle:B.container})]})})}var B=T.default.create({container:{flexGrow:1,justifyContent:"space-between",paddingVertical:10},item:{flex:1,backgroundColor:"#fff",margin:10,height:120,borderRadius:8,padding:10,alignItems:"center",justifyContent:"center",elevation:2}}),E=i(7132);function D(){return"web"==E.default.OS?(0,h.jsx)(W,{}):(0,h.jsx)(F,{})}var N=i(9566),M=[{id:1,title:"Item 1"},{id:2,title:"Item 2"},{id:3,title:"Item 3"},{id:4,title:"Item 4"},{id:5,title:"Item 5"},{id:6,title:"Item 6"},{id:7,title:"Item 7"},{id:8,title:"Item 8"},{id:9,title:"Item 9"},{id:10,title:"Item 10"},{id:11,title:"Item 11"},{id:12,title:"Item 12"}],H=function(e){var t=e.item;return(0,h.jsx)(d.default,{style:J.item,children:(0,h.jsx)(L.default,{children:t.title})})},q=function(e){return e.id.toString()},J=T.default.create({container:{flexGrow:1,justifyContent:"space-between",paddingVertical:10},item:{flex:1,backgroundColor:"#fff",margin:10,height:120,borderRadius:8,padding:10,alignItems:"center",justifyContent:"center",elevation:2}});const K=function(){return(0,h.jsx)(N.default,{data:M,renderItem:H,keyExtractor:q,numColumns:3,contentContainerStyle:J.container})};function Q(){return(0,h.jsxs)(d.default,{flex:1,backgroundColor:"#f1f1f1",children:[(0,h.jsx)(s.default,{style:{backgroundColor:"#212121"},pb:6,pt:6,shadow:"9",children:(0,h.jsx)(w,{})}),(0,h.jsxs)(f.ScrollView,{flex:1,children:[(0,h.jsx)(G,{icon:"Artigo"}),(0,h.jsx)(G,{icon:"Artigo"}),(0,h.jsx)(G,{icon:"Artigo"}),(0,h.jsx)(G,{icon:"Artigo"}),(0,h.jsx)(G,{icon:"Artigo"}),(0,h.jsx)(G,{icon:"Artigo"}),(0,h.jsx)(G,{icon:"Artigo"}),(0,h.jsx)(G,{icon:"Artigo"}),(0,h.jsx)(G,{icon:"Artigo"}),(0,h.jsx)(G,{icon:"Artigo"}),(0,h.jsx)(G,{icon:"Artigo"}),(0,h.jsx)(G,{icon:"Artigo"})]})]})}function U(){return(0,h.jsx)(d.default,{alignItems:"center",justifyContent:"center",flex:1,backgroundColor:"#f1f1f1",children:(0,h.jsxs)(f.ScrollView,{flex:1,children:[(0,h.jsx)(s.default,{style:{backgroundColor:"#212121"},pb:6,pt:6,shadow:"9",rounded:"3xl",children:(0,h.jsx)(w,{})}),(0,h.jsx)(R.FlatList,{data:[{id:1,title:"Item 1",icon:"Artigo"},{id:2,title:"Item 2",icon:"Artigo"},{id:3,title:"Item 3",icon:"Artigo"},{id:4,title:"Item 4",icon:"Artigo"},{id:5,title:"Item 5",icon:"Artigo"},{id:6,title:"Item 6",icon:"Artigo"},{id:7,title:"Item 7",icon:"Artigo"},{id:8,title:"Item 8",icon:"Artigo"},{id:9,title:"Item 9",icon:"Artigo"},{id:10,title:"Item 10",icon:"Artigo"},{id:11,title:"Item 11",icon:"Artigo"},{id:12,title:"Item 12",icon:"Artigo"}],renderItem:function(e){return(0,h.jsx)(G,{icon:e.item.icon})},numColumns:3,contentContainerStyle:X.container})]})})}var X=T.default.create({container:{flexGrow:1,justifyContent:"space-between",paddingVertical:10},item:{flex:1,backgroundColor:"#fff",margin:10,height:120,borderRadius:8,padding:10,alignItems:"center",justifyContent:"center",elevation:2}});function Y(){return"web"==E.default.OS?(0,h.jsx)(U,{}):(0,h.jsx)(Q,{})}function Z(){return(0,h.jsxs)(d.default,{flex:1,backgroundColor:"#f1f1f1",children:[(0,h.jsx)(s.default,{style:{backgroundColor:"#212121"},pb:6,pt:6,shadow:"9",children:(0,h.jsx)(w,{})}),(0,h.jsxs)(f.ScrollView,{flex:1,children:[(0,h.jsx)(G,{icon:"Video"}),(0,h.jsx)(G,{icon:"Video"}),(0,h.jsx)(G,{icon:"Video"}),(0,h.jsx)(G,{icon:"Video"}),(0,h.jsx)(G,{icon:"Video"}),(0,h.jsx)(G,{icon:"Video"}),(0,h.jsx)(G,{icon:"Video"}),(0,h.jsx)(G,{icon:"Video"}),(0,h.jsx)(G,{icon:"Video"}),(0,h.jsx)(G,{icon:"Video"}),(0,h.jsx)(G,{icon:"Video"}),(0,h.jsx)(G,{icon:"Video"})]})]})}function $(){return(0,h.jsx)(d.default,{alignItems:"center",justifyContent:"center",flex:1,backgroundColor:"#f1f1f1",children:(0,h.jsxs)(f.ScrollView,{flex:1,children:[(0,h.jsx)(s.default,{style:{backgroundColor:"#212121"},pb:6,pt:6,shadow:"9",rounded:"3xl",children:(0,h.jsx)(w,{})}),(0,h.jsx)(R.FlatList,{data:[{id:1,title:"Item 1",icon:"Video"},{id:2,title:"Item 2",icon:"Video"},{id:3,title:"Item 3",icon:"Video"},{id:4,title:"Item 4",icon:"Video"},{id:5,title:"Item 5",icon:"Video"},{id:6,title:"Item 6",icon:"Video"},{id:7,title:"Item 7",icon:"Video"},{id:8,title:"Item 8",icon:"Video"},{id:9,title:"Item 9",icon:"Video"},{id:10,title:"Item 10",icon:"Video"},{id:11,title:"Item 11",icon:"Video"},{id:12,title:"Item 12",icon:"Video"}],renderItem:function(e){return(0,h.jsx)(G,{icon:e.item.icon})},numColumns:3,contentContainerStyle:ee.container})]})})}var ee=T.default.create({container:{flexGrow:1,justifyContent:"space-between",paddingVertical:10},item:{flex:1,backgroundColor:"#fff",margin:10,height:120,borderRadius:8,padding:10,alignItems:"center",justifyContent:"center",elevation:2}});function te(){return"web"==E.default.OS?(0,h.jsx)($,{}):(0,h.jsx)(Z,{})}function ie(){return(0,h.jsxs)(d.default,{flex:1,backgroundColor:"#f1f1f1",children:[(0,h.jsx)(s.default,{style:{backgroundColor:"#212121"},pb:6,pt:6,shadow:"9",children:(0,h.jsx)(w,{})}),(0,h.jsxs)(f.ScrollView,{flex:1,children:[(0,h.jsx)(G,{icon:"Livro"}),(0,h.jsx)(G,{icon:"Livro"}),(0,h.jsx)(G,{icon:"Livro"}),(0,h.jsx)(G,{icon:"Livro"}),(0,h.jsx)(G,{icon:"Livro"}),(0,h.jsx)(G,{icon:"Livro"}),(0,h.jsx)(G,{icon:"Livro"}),(0,h.jsx)(G,{icon:"Livro"}),(0,h.jsx)(G,{icon:"Livro"}),(0,h.jsx)(G,{icon:"Livro"}),(0,h.jsx)(G,{icon:"Livro"}),(0,h.jsx)(G,{icon:"Livro"})]})]})}function oe(){return(0,h.jsx)(d.default,{alignItems:"center",justifyContent:"center",flex:1,backgroundColor:"#f1f1f1",children:(0,h.jsxs)(f.ScrollView,{flex:1,children:[(0,h.jsx)(s.default,{style:{backgroundColor:"#212121"},pb:6,pt:6,shadow:"9",rounded:"3xl",children:(0,h.jsx)(w,{})}),(0,h.jsx)(R.FlatList,{data:[{id:1,title:"Item 1",icon:"Livro"},{id:2,title:"Item 2",icon:"Livro"},{id:3,title:"Item 3",icon:"Livro"},{id:4,title:"Item 4",icon:"Livro"},{id:5,title:"Item 5",icon:"Livro"},{id:6,title:"Item 6",icon:"Livro"},{id:7,title:"Item 7",icon:"Livro"},{id:8,title:"Item 8",icon:"Livro"},{id:9,title:"Item 9",icon:"Livro"},{id:10,title:"Item 10",icon:"Livro"},{id:11,title:"Item 11",icon:"Livro"},{id:12,title:"Item 12",icon:"Livro"}],renderItem:function(e){return(0,h.jsx)(G,{icon:e.item.icon})},numColumns:3,contentContainerStyle:ne.container})]})})}var ne=T.default.create({container:{flexGrow:1,justifyContent:"space-between",paddingVertical:10},item:{flex:1,backgroundColor:"#fff",margin:10,height:120,borderRadius:8,padding:10,alignItems:"center",justifyContent:"center",elevation:2}});function re(){return"web"==E.default.OS?(0,h.jsx)(oe,{}):(0,h.jsx)(ie,{})}function ce(){return(0,h.jsxs)(d.default,{flex:1,backgroundColor:"#f1f1f1",children:[(0,h.jsx)(s.default,{style:{backgroundColor:"#212121"},pb:6,pt:6,shadow:"9",children:(0,h.jsx)(w,{})}),(0,h.jsxs)(f.ScrollView,{flex:1,children:[(0,h.jsx)(G,{icon:"Podcast"}),(0,h.jsx)(G,{icon:"Podcast"}),(0,h.jsx)(G,{icon:"Podcast"}),(0,h.jsx)(G,{icon:"Podcast"}),(0,h.jsx)(G,{icon:"Podcast"}),(0,h.jsx)(G,{icon:"Podcast"}),(0,h.jsx)(G,{icon:"Podcast"}),(0,h.jsx)(G,{icon:"Podcast"}),(0,h.jsx)(G,{icon:"Podcast"}),(0,h.jsx)(G,{icon:"Podcast"}),(0,h.jsx)(G,{icon:"Podcast"}),(0,h.jsx)(G,{icon:"Podcast"})]})]})}function le(){return(0,h.jsx)(d.default,{alignItems:"center",justifyContent:"center",flex:1,backgroundColor:"#f1f1f1",children:(0,h.jsxs)(f.ScrollView,{flex:1,children:[(0,h.jsx)(s.default,{style:{backgroundColor:"#212121"},pb:6,pt:6,shadow:"9",rounded:"3xl",children:(0,h.jsx)(w,{})}),(0,h.jsx)(R.FlatList,{data:[{id:1,title:"Item 1",icon:"Podcast"},{id:2,title:"Item 2",icon:"Podcast"},{id:3,title:"Item 3",icon:"Podcast"},{id:4,title:"Item 4",icon:"Podcast"},{id:5,title:"Item 5",icon:"Podcast"},{id:6,title:"Item 6",icon:"Podcast"},{id:7,title:"Item 7",icon:"Podcast"},{id:8,title:"Item 8",icon:"Podcast"},{id:9,title:"Item 9",icon:"Podcast"},{id:10,title:"Item 10",icon:"Podcast"},{id:11,title:"Item 11",icon:"Podcast"},{id:12,title:"Item 12",icon:"Podcast"}],renderItem:function(e){return(0,h.jsx)(G,{icon:e.item.icon})},numColumns:3,contentContainerStyle:ae.container})]})})}var ae=T.default.create({container:{flexGrow:1,justifyContent:"space-between",paddingVertical:10},item:{flex:1,backgroundColor:"#fff",margin:10,height:120,borderRadius:8,padding:10,alignItems:"center",justifyContent:"center",elevation:2}});function de(){return"web"==E.default.OS?(0,h.jsx)(le,{}):(0,h.jsx)(ce,{})}function se(){return(0,h.jsxs)(d.default,{flex:1,backgroundColor:"#f1f1f1",children:[(0,h.jsx)(s.default,{style:{backgroundColor:"#212121"},pb:6,pt:6,shadow:"9",children:(0,h.jsx)(w,{})}),(0,h.jsxs)(f.ScrollView,{flex:1,children:[(0,h.jsx)(G,{icon:"Imagem"}),(0,h.jsx)(G,{icon:"Imagem"}),(0,h.jsx)(G,{icon:"Imagem"}),(0,h.jsx)(G,{icon:"Imagem"}),(0,h.jsx)(G,{icon:"Imagem"}),(0,h.jsx)(G,{icon:"Imagem"}),(0,h.jsx)(G,{icon:"Imagem"}),(0,h.jsx)(G,{icon:"Imagem"}),(0,h.jsx)(G,{icon:"Imagem"}),(0,h.jsx)(G,{icon:"Imagem"}),(0,h.jsx)(G,{icon:"Imagem"}),(0,h.jsx)(G,{icon:"Imagem"})]})]})}function fe(){return(0,h.jsx)(d.default,{alignItems:"center",justifyContent:"center",flex:1,backgroundColor:"#f1f1f1",children:(0,h.jsxs)(f.ScrollView,{flex:1,children:[(0,h.jsx)(s.default,{style:{backgroundColor:"#212121"},pb:6,pt:6,shadow:"9",rounded:"3xl",children:(0,h.jsx)(w,{})}),(0,h.jsx)(R.FlatList,{data:[{id:1,title:"Item 1",icon:"Imagem"},{id:2,title:"Item 2",icon:"Imagem"},{id:3,title:"Item 3",icon:"Imagem"},{id:4,title:"Item 4",icon:"Imagem"},{id:5,title:"Item 5",icon:"Imagem"},{id:6,title:"Item 6",icon:"Imagem"},{id:7,title:"Item 7",icon:"Imagem"},{id:8,title:"Item 8",icon:"Imagem"},{id:9,title:"Item 9",icon:"Imagem"},{id:10,title:"Item 10",icon:"Imagem"},{id:11,title:"Item 11",icon:"Imagem"},{id:12,title:"Item 12",icon:"Imagem"}],renderItem:function(e){return(0,h.jsx)(G,{icon:e.item.icon})},numColumns:3,contentContainerStyle:ue.container})]})})}var ue=T.default.create({container:{flexGrow:1,justifyContent:"space-between",paddingVertical:10},item:{flex:1,backgroundColor:"#fff",margin:10,height:120,borderRadius:8,padding:10,alignItems:"center",justifyContent:"center",elevation:2}});function me(){return"web"==E.default.OS?(0,h.jsx)(fe,{}):(0,h.jsx)(se,{})}var xe=i(5738),je=(0,a.default)(),ge=je.Screen,Ie=je.Navigator;function he(){return(0,h.jsxs)(Ie,{initialRouteName:"Feed",screenOptions:{headerShown:!0,headerTitleAlign:"center"},children:[(0,h.jsx)(ge,{name:"Feed",component:D,options:{drawerLabel:"Home",drawerIcon:function(){return(0,h.jsx)(A.default,{name:"home",size:24,color:"#007aff"})}}}),(0,h.jsx)(ge,{name:"Teste",component:K,options:{drawerLabel:"Home",drawerIcon:function(){return(0,h.jsx)(xe.default,{name:"hammer",size:24,color:"#007aff"})}}}),(0,h.jsx)(ge,{name:"Artigos",component:Y,options:{drawerLabel:"Artigos",drawerIcon:function(){return(0,h.jsx)(z.default,{name:"article",size:24,color:"#007aff"})}}}),(0,h.jsx)(ge,{name:"Videos",component:te,options:{drawerLabel:"Videos",drawerIcon:function(){return(0,h.jsx)(A.default,{name:"controller-play",size:24,color:"#007aff"})}}}),(0,h.jsx)(ge,{name:"Imagens",component:re,options:{drawerLabel:"Imagens",drawerIcon:function(){return(0,h.jsx)(A.default,{name:"image",size:24,color:"#007aff"})}}}),(0,h.jsx)(ge,{name:"Podcast",component:de,options:{drawerLabel:"Podcast",drawerIcon:function(){return(0,h.jsx)(O.default,{name:"podcast",size:24,color:"#007aff"})}}}),(0,h.jsx)(ge,{name:"Livros",component:me,options:{drawerLabel:"Livros",drawerIcon:function(){return(0,h.jsx)(O.default,{name:"book",size:24,color:"#007aff"})}}})]})}function be(){return(0,h.jsx)(l.default,{children:(0,h.jsx)(he,{})})}i(3693);var pe=i(5648);function we(){return(0,h.jsx)(r.SafeAreaProvider,{children:(0,h.jsxs)(c.SafeAreaView,{style:{flex:1},children:[(0,h.jsx)(pe.default,{barStyle:"light-content"}),(0,h.jsx)(n.NativeBaseProvider,{children:(0,h.jsx)(be,{})})]})})}}},t={};function i(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=e,(()=>{var e=[];i.O=(t,o,n,r)=>{if(!o){var c=1/0;for(s=0;s<e.length;s++){for(var[o,n,r]=e[s],l=!0,a=0;a<o.length;a++)(!1&r||c>=r)&&Object.keys(i.O).every((e=>i.O[e](o[a])))?o.splice(a--,1):(l=!1,r<c&&(c=r));if(l){e.splice(s--,1);var d=n();void 0!==d&&(t=d)}}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[o,n,r]}})(),i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),i.p="/",(()=>{var e={179:0};i.O.j=t=>0===e[t];var t=(t,o)=>{var n,r,[c,l,a]=o,d=0;if(c.some((t=>0!==e[t]))){for(n in l)i.o(l,n)&&(i.m[n]=l[n]);if(a)var s=a(i)}for(t&&t(o);d<c.length;d++)r=c[d],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(s)},o=self.webpackChunkweb=self.webpackChunkweb||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=i.O(void 0,[922],(()=>i(9484)));o=i.O(o)})();
//# sourceMappingURL=main.528296f0.js.map