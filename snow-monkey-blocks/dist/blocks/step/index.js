(()=>{var e,t={465:(e,t,s)=>{"use strict";const i=window.wp.blocks,r=JSON.parse('{"UU":"snow-monkey-blocks/step"}'),a=window.ReactJSXRuntime,l=(0,a.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,a.jsx)("rect",{x:"7.68",y:"6.14",width:"13",height:"1"}),(0,a.jsx)("rect",{x:"7.68",y:"11.14",width:"13",height:"1"}),(0,a.jsx)("rect",{x:"7.68",y:"16.14",width:"13",height:"1"}),(0,a.jsx)("path",{d:"M5.29,8.44H4.6V5.86a2.55,2.55,0,0,1-.89.52V5.75a1.87,1.87,0,0,0,.59-.33,1.24,1.24,0,0,0,.43-.57h.56Z"}),(0,a.jsx)("path",{d:"M5.85,12.8v.64H3.44a1.68,1.68,0,0,1,.24-.68,4.3,4.3,0,0,1,.77-.86A4.38,4.38,0,0,0,5,11.31a.78.78,0,0,0,.14-.42A.48.48,0,0,0,5,10.54a.49.49,0,0,0-.34-.12.46.46,0,0,0-.35.13.66.66,0,0,0-.14.43l-.69-.07a1.13,1.13,0,0,1,.39-.82,1.29,1.29,0,0,1,.8-.24,1.14,1.14,0,0,1,.83.28.92.92,0,0,1,.31.71,1.14,1.14,0,0,1-.09.46,2,2,0,0,1-.27.46,5.87,5.87,0,0,1-.45.46c-.22.2-.36.33-.41.39a1,1,0,0,0-.14.19Z"}),(0,a.jsx)("path",{d:"M3.51,17.46l.66-.08a.64.64,0,0,0,.17.39.5.5,0,0,0,.7,0,.65.65,0,0,0,.14-.43A.6.6,0,0,0,5,16.9a.43.43,0,0,0-.34-.15,1,1,0,0,0-.31.05l.07-.56a.67.67,0,0,0,.43-.12A.42.42,0,0,0,5,15.78a.39.39,0,0,0-.1-.29.4.4,0,0,0-.29-.11.41.41,0,0,0-.3.12.6.6,0,0,0-.15.36l-.63-.11a1.38,1.38,0,0,1,.2-.52.85.85,0,0,1,.37-.3,1.14,1.14,0,0,1,.53-.11,1,1,0,0,1,.81.32.83.83,0,0,1,.25.6.85.85,0,0,1-.51.75.82.82,0,0,1,.49.29.89.89,0,0,1,.18.56,1.07,1.07,0,0,1-.34.8,1.2,1.2,0,0,1-.86.33,1.15,1.15,0,0,1-.8-.28A1,1,0,0,1,3.51,17.46Z"})]});var n=s(6942),m=s.n(n);const o=window.wp.blockEditor,c=window.wp.data,_=["snow-monkey-blocks/step-item-free"],u=[["snow-monkey-blocks/step-item-free"]],b=window.lodash,d=[{save:()=>(0,a.jsx)("div",{className:"smb-step",children:(0,a.jsx)("div",{className:"smb-step__body",children:(0,a.jsx)(o.InnerBlocks.Content,{})})})},{attributes:{content:{type:"array",source:"query",selector:".smb-step__item",default:[],query:{title:{source:"html",selector:".smb-step__item__title > span"},summary:{source:"html",selector:".smb-step__item__summary"},numberColor:{type:"string",source:"attribute",selector:".smb-step__item__number",attribute:"data-number-color"},imagePosition:{type:"string",source:"attribute",attribute:"data-image-position",default:"center"},imageID:{type:"number",source:"attribute",selector:".smb-step__item__figure > img",attribute:"data-image-id",default:0},imageURL:{type:"string",source:"attribute",selector:".smb-step__item__figure > img",attribute:"src",default:""},linkLabel:{source:"html",selector:".smb-step__item__link__label"},linkURL:{type:"string",source:"attribute",selector:".smb-step__item__link",attribute:"href",default:""},linkTarget:{type:"string",source:"attribute",selector:".smb-step__item__link",attribute:"target",default:"_self"},linkColor:{type:"string",source:"attribute",selector:".smb-step__item__link",attribute:"data-color"}}},rows:{type:"number",default:1}},migrate:e=>[{},(()=>{const t=void 0===e.content?0:e.content.length;return(0,b.times)(t,(t=>{const s=(0,b.get)(e.content,[t,"title"],""),r=(0,b.get)(e.content,[t,"summary"],""),a=(0,b.get)(e.content,[t,"numberColor"],null),l=(0,b.get)(e.content,[t,"imagePosition"],"left"),n=(0,b.get)(e.content,[t,"imageID"],0),m=(0,b.get)(e.content,[t,"imageURL"],""),o=(0,b.get)(e.content,[t,"linkURL"],""),c=(0,b.get)(e.content,[t,"linkTarget"],"_self"),_=(0,b.get)(e.content,[t,"linkLabel"],""),u=(0,b.get)(e.content,[t,"linkColor"],"");return(0,i.createBlock)("snow-monkey-blocks/step--item",{title:s,summary:r,numberColor:a,imagePosition:l,imageID:Number(n),imageURL:m,linkURL:o,linkTarget:c,linkLabel:_,linkColor:u})}))})()],save({attributes:e}){const{content:t}=e,s=void 0===e.content?0:e.content.length;return(0,a.jsx)("div",{className:"smb-step",children:(0,a.jsx)("div",{className:"smb-step__body",children:(0,b.times)(s,(e=>{const s=(0,b.get)(t,[e,"title"],""),i=(0,b.get)(t,[e,"summary"],""),r=(0,b.get)(t,[e,"numberColor"],null),l=(0,b.get)(t,[e,"imagePosition"],"left"),n=(0,b.get)(t,[e,"imageID"],0),m=(0,b.get)(t,[e,"imageURL"],""),c=(0,b.get)(t,[e,"linkURL"],""),_=(0,b.get)(t,[e,"linkTarget"],"_self"),u=(0,b.get)(t,[e,"linkLabel"],""),d=(0,b.get)(t,[e,"linkColor"],"");return(0,a.jsxs)("div",{className:`smb-step__item smb-step__item--image-${l}`,"data-image-position":l,children:[(0,a.jsxs)("div",{className:"smb-step__item__title",children:[(0,a.jsx)("div",{className:"smb-step__item__number","data-number-color":r,style:{backgroundColor:r},children:e+1}),(0,a.jsx)("span",{children:(0,a.jsx)(o.RichText.Content,{value:s})})]}),!!n&&(0,a.jsx)("div",{className:"smb-step__item__figure",children:(0,a.jsx)("img",{src:m,alt:"",className:`wp-image-${n}`,"data-image-id":n})}),(0,a.jsxs)("div",{className:"smb-step__item__body",children:[(0,a.jsx)("div",{className:"smb-step__item__summary",children:(0,a.jsx)(o.RichText.Content,{value:i})}),!o.RichText.isEmpty(u)&&(0,a.jsxs)("a",{className:"smb-step__item__link",href:c,target:_,"data-color":d,style:{color:d},children:[(0,a.jsx)("i",{className:"fas fa-arrow-circle-right"}),(0,a.jsx)("span",{className:"smb-step__item__link__label",children:(0,a.jsx)(o.RichText.Content,{value:u})})]})]})]})}))})})}},{attributes:{content:{type:"array",source:"query",selector:".smb-step__item",default:[],query:{title:{source:"html",selector:".smb-step__item__title > span"},summary:{source:"html",selector:".smb-step__item__summary"},numberColor:{type:"string",source:"attribute",selector:".smb-step__item__number",attribute:"data-number-color"},imagePosition:{type:"string",source:"attribute",attribute:"data-image-position",default:"center"},imageID:{type:"number",source:"attribute",selector:".smb-step__item__figure > img",attribute:"data-image-id",default:0},imageURL:{type:"string",source:"attribute",selector:".smb-step__item__figure > img",attribute:"src",default:""},linkLabel:{source:"html",selector:".smb-step__item__link__label"},linkURL:{type:"string",source:"attribute",selector:".smb-step__item__link",attribute:"href",default:""},linkTarget:{type:"string",source:"attribute",selector:".smb-step__item__link",attribute:"target",default:"_self"}}},rows:{type:"number",default:1}},save({attributes:e}){const{rows:t,content:s}=e;return(0,a.jsx)("div",{className:"smb-step",children:(0,a.jsx)("div",{className:"smb-step__body",children:(0,b.times)(t,(e=>{const t=(0,b.get)(s,[e,"title"],""),i=(0,b.get)(s,[e,"summary"],""),r=(0,b.get)(s,[e,"numberColor"],null),l=(0,b.get)(s,[e,"imagePosition"],"left"),n=(0,b.get)(s,[e,"imageID"],0),m=(0,b.get)(s,[e,"imageURL"],""),c=(0,b.get)(s,[e,"linkURL"],""),_=(0,b.get)(s,[e,"linkTarget"],"_self"),u=(0,b.get)(s,[e,"linkLabel"],"");return(0,a.jsxs)("div",{className:`smb-step__item smb-step__item--image-${l}`,"data-image-position":l,children:[(0,a.jsxs)("div",{className:"smb-step__item__title",children:[(0,a.jsx)("div",{className:"smb-step__item__number","data-number-color":r,style:{backgroundColor:r},children:e+1}),(0,a.jsx)("span",{children:(0,a.jsx)(o.RichText.Content,{value:t})})]}),!!n&&(0,a.jsx)("div",{className:"smb-step__item__figure",children:(0,a.jsx)("img",{src:m,alt:"",className:`wp-image-${n}`,"data-image-id":n})}),(0,a.jsxs)("div",{className:"smb-step__item__body",children:[(0,a.jsx)("div",{className:"smb-step__item__summary",children:(0,a.jsx)(o.RichText.Content,{value:i})}),!o.RichText.isEmpty(u)&&!!c&&(0,a.jsxs)("a",{className:"smb-step__item__link",href:c,target:_,children:[(0,a.jsx)("i",{className:"fas fa-arrow-circle-right"}),(0,a.jsx)("span",{className:"smb-step__item__link__label",children:(0,a.jsx)(o.RichText.Content,{value:u})})]})]})]})}))})})}},{attributes:{content:{type:"array",source:"query",selector:".smb-step__item",default:[],query:{title:{source:"html",selector:".smb-step__item__title > span"},summary:{source:"html",selector:".smb-step__item__summary"},numberColor:{type:"string",source:"attribute",selector:".smb-step__item__number",attribute:"data-number-color"},imagePosition:{type:"string",source:"attribute",attribute:"data-image-position",default:"center"},imageID:{type:"number",source:"attribute",selector:".smb-step__item__figure > img",attribute:"data-image-id",default:0},imageURL:{type:"string",source:"attribute",selector:".smb-step__item__figure > img",attribute:"src",default:""},linkLabel:{source:"html",selector:".smb-step__item__link__label"},linkURL:{type:"string",source:"attribute",selector:".smb-step__item__link",attribute:"href",default:""},linkTarget:{type:"string",source:"attribute",selector:".smb-step__item__link",attribute:"target",default:"_self"}}},rows:{type:"number",default:1}},save({attributes:e}){const{rows:t,content:s}=e;return(0,a.jsx)("div",{className:"smb-step",children:(0,a.jsx)("div",{className:"smb-step__body",children:(0,b.times)(t,(e=>{const t=(0,b.get)(s,[e,"title"],""),i=(0,b.get)(s,[e,"summary"],""),r=(0,b.get)(s,[e,"numberColor"],null),l=(0,b.get)(s,[e,"imagePosition"],"left"),n=(0,b.get)(s,[e,"imageID"],0),m=(0,b.get)(s,[e,"imageURL"],""),c=(0,b.get)(s,[e,"linkURL"],""),_=(0,b.get)(s,[e,"linkTarget"],"_self"),u=(0,b.get)(s,[e,"linkLabel"],"");return(0,a.jsxs)("div",{className:`smb-step__item smb-step__item--image-${l}`,"data-image-position":l,children:[(0,a.jsxs)("div",{className:"smb-step__item__title",children:[(0,a.jsx)("div",{className:"smb-step__item__number","data-number-color":r,style:{backgroundColor:r},children:e+1}),(0,a.jsx)("span",{children:(0,a.jsx)(o.RichText.Content,{value:t})})]}),!!n&&(0,a.jsx)("div",{className:"smb-step__item__figure",children:(0,a.jsx)("img",{src:m,alt:"","data-image-id":n})}),(0,a.jsxs)("div",{className:"smb-step__item__body",children:[(0,a.jsx)("div",{className:"smb-step__item__summary",children:(0,a.jsx)(o.RichText.Content,{value:i})}),!o.RichText.isEmpty(u)&&!!c&&(0,a.jsxs)("a",{className:"smb-step__item__link",href:c,target:_,children:[(0,a.jsx)("i",{className:"fas fa-arrow-circle-right"}),(0,a.jsx)("span",{className:"smb-step__item__link__label",children:(0,a.jsx)(o.RichText.Content,{value:u})})]})]})]})}))})})}}];(0,i.registerBlockType)(r.UU,{icon:{foreground:"#cd162c",src:l},edit:function({attributes:e,className:t,clientId:s}){const{templateLock:i}=e,r=(0,c.useSelect)((e=>!!e("core/block-editor").getBlock(s)?.innerBlocks?.length),[s]),l=m()("smb-step",t),n=(0,o.useBlockProps)({className:l}),b=(0,o.useInnerBlocksProps)({className:"smb-step__body"},{allowedBlocks:_,template:u,templateLock:i,renderAppender:r?void 0:o.InnerBlocks.ButtonBlockAppender});return(0,a.jsx)("div",{...n,children:(0,a.jsx)("div",{...b})})},save:function({className:e}){const t=m()("smb-step",e);return(0,a.jsx)("div",{...o.useBlockProps.save({className:t}),children:(0,a.jsx)("div",{...o.useInnerBlocksProps.save({className:"smb-step__body"})})})},deprecated:d})},6942:(e,t)=>{var s;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(e=l(e,a(s)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var s in e)i.call(e,s)&&e[s]&&(t=l(t,s));return t}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(s=function(){return r}.apply(t,[]))||(e.exports=s)}()}},s={};function i(e){var r=s[e];if(void 0!==r)return r.exports;var a=s[e]={exports:{}};return t[e](a,a.exports,i),a.exports}i.m=t,e=[],i.O=(t,s,r,a)=>{if(!s){var l=1/0;for(c=0;c<e.length;c++){for(var[s,r,a]=e[c],n=!0,m=0;m<s.length;m++)(!1&a||l>=a)&&Object.keys(i.O).every((e=>i.O[e](s[m])))?s.splice(m--,1):(n=!1,a<l&&(l=a));if(n){e.splice(c--,1);var o=r();void 0!==o&&(t=o)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[s,r,a]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={3844:0,5212:0};i.O.j=t=>0===e[t];var t=(t,s)=>{var r,a,[l,n,m]=s,o=0;if(l.some((t=>0!==e[t]))){for(r in n)i.o(n,r)&&(i.m[r]=n[r]);if(m)var c=m(i)}for(t&&t(s);o<l.length;o++)a=l[o],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(c)},s=globalThis.webpackChunk=globalThis.webpackChunk||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var r=i.O(void 0,[5212],(()=>i(465)));r=i.O(r)})();