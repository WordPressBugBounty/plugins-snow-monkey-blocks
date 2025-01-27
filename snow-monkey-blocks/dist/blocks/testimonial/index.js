(()=>{var e,t={3208:(e,t,a)=>{"use strict";const s=window.wp.blocks,n=JSON.parse('{"UU":"snow-monkey-blocks/testimonial","uK":{"md":{"type":"number","default":2},"lg":{"type":"number","default":2},"gap":{"type":"string","default":""},"templateLock":{"type":["string","boolean"],"enum":["all","insert","contentOnly",false]}}}'),i=window.ReactJSXRuntime,o=(0,i.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,i.jsx)("path",{d:"M22,1.5H6a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H9l1.12,3,3.29-3H22a1,1,0,0,0,1-1v-8A1,1,0,0,0,22,1.5ZM22,10a.5.5,0,0,1-.5.5H13.31l-1.1,1h0l-1.12,1-.5.46-.11-.31L10,11.42h0l-.35-.92H6.5A.5.5,0,0,1,6,10V3a.5.5,0,0,1,.5-.5h15A.5.5,0,0,1,22,3Z"}),(0,i.jsx)("path",{d:"M10,7.45a1,1,0,1,1,1-1A1,1,0,0,1,10,7.45Z"}),(0,i.jsx)("path",{d:"M14,7.45a1,1,0,1,1,1-1A1,1,0,0,1,14,7.45Z"}),(0,i.jsx)("path",{d:"M18,7.45a1,1,0,1,1,1-1A1,1,0,0,1,18,7.45Z"}),(0,i.jsx)("path",{d:"M3.41,18.69a3.36,3.36,0,0,1,.83-.64,2.51,2.51,0,1,1,2.51,0,3.6,3.6,0,0,1,.84.64,3.5,3.5,0,1,0-4.18,0Z"}),(0,i.jsx)("path",{d:"M9,22.5h1a6.88,6.88,0,0,0-2.32-5.39,2.47,2.47,0,0,1-.93.94A5,5,0,0,1,9,22.5Z"}),(0,i.jsx)("path",{d:"M2,22.5a5,5,0,0,1,2.25-4.45,2.47,2.47,0,0,1-.93-.94A6.88,6.88,0,0,0,1,22.5Z"})]});var l=a(6942),r=a.n(l);const m=window.wp.blockEditor,c=window.wp.components,d=window.wp.data,u=window.wp.i18n,_=window.lodash,b=(e,t=0,a=null)=>(e=Number(e),(isNaN(e)||e<t)&&(e=t),null!==a&&e>a&&(e=a),e);function p(e){const{desktop:t,tablet:a,mobile:s}=e,n=[];return t&&n.push({name:"desktop",title:(0,i.jsx)(c.Dashicon,{icon:"desktop"})}),a&&n.push({name:"tablet",title:(0,i.jsx)(c.Dashicon,{icon:"tablet"})}),s&&n.push({name:"mobile",title:(0,i.jsx)(c.Dashicon,{icon:"smartphone"})}),(0,i.jsx)(c.TabPanel,{className:"smb-inspector-tabs",tabs:n,children:e=>{if(e.name){if("desktop"===e.name)return t();if("tablet"===e.name)return a();if("mobile"===e.name)return s()}}})}const g=["snow-monkey-blocks/testimonial-item"],v=[["snow-monkey-blocks/testimonial-item"]],h=[{attributes:{...n.uK},save({className:e}){const t=r()("smb-testimonial",e);return(0,i.jsx)("div",{className:t,children:(0,i.jsx)("div",{className:"smb-testimonial__body",children:(0,i.jsx)("div",{className:"c-row c-row--margin","data-columns":"1","data-md-columns":"2",children:(0,i.jsx)(m.InnerBlocks.Content,{})})})})}},{save:()=>(0,i.jsx)("div",{className:"smb-testimonial",children:(0,i.jsx)("div",{className:"smb-testimonial__body",children:(0,i.jsx)("div",{className:"c-row c-row--margin","data-columns":"1","data-md-columns":"2",children:(0,i.jsx)(m.InnerBlocks.Content,{})})})})},{attributes:{items:{type:"array",default:[],selector:".smb-testimonial__item",source:"query",query:{avatarID:{type:"number",source:"attribute",selector:".smb-testimonial__item__figure > img",attribute:"data-image-id",default:0},avatarURL:{type:"string",source:"attribute",selector:".smb-testimonial__item__figure > img",attribute:"src",default:"https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g"},name:{source:"html",selector:".smb-testimonial__item__name"},lede:{source:"html",selector:".smb-testimonial__item__lede"},content:{source:"html",selector:".smb-testimonial__item__content"}}},columns:{type:"number",default:1}},migrate:e=>[{},(()=>{const t=void 0===e.items?0:e.items.length;return(0,_.times)(t,(t=>{const a=(0,_.get)(e.items,[t,"avatarID"],0),n=(0,_.get)(e.items,[t,"avatarURL"],"https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g"),i=(0,_.get)(e.items,[t,"name"],""),o=(0,_.get)(e.items,[t,"lede"],""),l=(0,_.get)(e.items,[t,"content"],"");return(0,s.createBlock)("snow-monkey-blocks/testimonial-item",{avatarID:Number(a),avatarURL:n,name:i,lede:o,content:l})}))})()],save({attributes:e}){const{items:t}=e,a=void 0===e.items?0:e.items.length;return(0,i.jsx)("div",{className:"smb-testimonial",children:(0,i.jsx)("div",{className:"smb-testimonial__body",children:(0,i.jsx)("div",{className:"c-row c-row--margin",children:(0,_.times)(a,(e=>{const a=(0,_.get)(t,[e,"avatarID"],0),s=(0,_.get)(t,[e,"avatarURL"],"https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g"),n=(0,_.get)(t,[e,"name"],""),o=(0,_.get)(t,[e,"lede"],""),l=(0,_.get)(t,[e,"content"],"");return(0,i.jsx)("div",{className:"c-row__col c-row__col--1-1 c-row__col--md-1-2",children:(0,i.jsxs)("div",{className:"smb-testimonial__item",children:[(0,i.jsx)("div",{className:"smb-testimonial__item__figure",children:(0,i.jsx)("img",{src:s,alt:"",className:`wp-image-${a}`,"data-image-id":a})}),(0,i.jsxs)("div",{className:"smb-testimonial__item__body",children:[(0,i.jsx)("div",{className:"smb-testimonial__item__content",children:(0,i.jsx)(m.RichText.Content,{value:l})}),(0,i.jsx)("div",{className:"smb-testimonial__item__name",children:(0,i.jsx)(m.RichText.Content,{value:n})}),!m.RichText.isEmpty(o)&&(0,i.jsx)("div",{className:"smb-testimonial__item__lede",children:(0,i.jsx)(m.RichText.Content,{value:o})})]})]})})}))})})})}},{attributes:{items:{type:"array",default:[],selector:".smb-testimonial__item",source:"query",query:{avatarID:{type:"number",source:"attribute",selector:".smb-testimonial__item__figure > img",attribute:"data-image-id",default:0},avatarURL:{type:"string",source:"attribute",selector:".smb-testimonial__item__figure > img",attribute:"src",default:"https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g"},name:{source:"html",selector:".smb-testimonial__item__name"},lede:{source:"html",selector:".smb-testimonial__item__lede"},content:{source:"html",selector:".smb-testimonial__item__content"}}},columns:{type:"number",default:1}},save({attributes:e}){const{items:t,columns:a}=e;return(0,i.jsx)("div",{className:"smb-testimonial",children:(0,i.jsx)("div",{className:"smb-testimonial__body",children:(0,i.jsx)("div",{className:"c-row c-row--margin",children:(0,_.times)(a,(e=>{const a=(0,_.get)(t,[e,"avatarID"],0),s=(0,_.get)(t,[e,"avatarURL"],"https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g"),n=(0,_.get)(t,[e,"name"],""),o=(0,_.get)(t,[e,"lede"],""),l=(0,_.get)(t,[e,"content"],"");return(0,i.jsx)("div",{className:"c-row__col c-row__col--1-1 c-row__col--md-1-2",children:(0,i.jsxs)("div",{className:"smb-testimonial__item",children:[(0,i.jsx)("div",{className:"smb-testimonial__item__figure",children:(0,i.jsx)("img",{src:s,alt:"","data-image-id":a})}),(0,i.jsxs)("div",{className:"smb-testimonial__item__body",children:[(0,i.jsx)("div",{className:"smb-testimonial__item__content",children:(0,i.jsx)(m.RichText.Content,{value:l})}),(0,i.jsx)("div",{className:"smb-testimonial__item__name",children:(0,i.jsx)(m.RichText.Content,{value:n})}),!m.RichText.isEmpty(o)&&(0,i.jsx)("div",{className:"smb-testimonial__item__lede",children:(0,i.jsx)(m.RichText.Content,{value:o})})]})]})})}))})})})}}];(0,s.registerBlockType)(n.UU,{icon:{foreground:"#cd162c",src:o},edit:function({attributes:e,setAttributes:t,className:a,clientId:s}){const{md:o,lg:l,gap:_,templateLock:h}=e,x=(0,d.useSelect)((e=>!!e("core/block-editor").getBlock(s)?.innerBlocks?.length),[s]),j=r()("smb-testimonial",a),w=r()("c-row","c-row--margin",{[`c-row--margin-${_}`]:!!_}),f=(0,m.useBlockProps)({className:j}),y=(0,m.useInnerBlocksProps)({className:w},{allowedBlocks:g,template:v,templateLock:h,renderAppender:x?void 0:m.InnerBlocks.ButtonBlockAppender,orientation:"horizontal"}),k=[{label:"S",value:1},{label:"M",value:2},{label:"L",value:3}];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.InspectorControls,{children:(0,i.jsx)(c.__experimentalToolsPanel,{label:(0,u.__)("Block settings","snow-monkey-blocks"),children:(0,i.jsx)(c.__experimentalToolsPanelItem,{hasValue:()=>l!==n.uK.lg.default||o!==n.uK.md.default,isShownByDefault:!0,label:(0,u.__)("Columns per row","snow-monkey-blocks"),onDeselect:()=>t({lg:n.uK.lg.default,md:n.uK.md.default}),children:(0,i.jsx)(p,{desktop:()=>(0,i.jsx)(c.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,u.__)("Columns per row (Large window)","snow-monkey-blocks"),value:l,onChange:e=>t({lg:b(e,1,4)}),min:"1",max:"4"}),tablet:()=>(0,i.jsx)(c.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,u.__)("Columns per row (Medium window)","snow-monkey-blocks"),value:o,onChange:e=>t({md:b(e,1,2)}),min:"1",max:"2"})})})})}),(0,i.jsx)(m.InspectorControls,{group:"dimensions",children:(0,i.jsx)(c.__experimentalToolsPanelItem,{hasValue:()=>_!==n.uK.gap.default,isShownByDefault:!0,label:(0,u.__)("The gap between each item","snow-monkey-blocks"),onDeselect:()=>t({gap:n.uK.gap.default}),panelId:s,children:(0,i.jsx)(c.BaseControl,{__nextHasNoMarginBottom:!0,id:"snow-monkey-blocks/testimonials/gap",label:(0,u.__)("The gap between each item","snow-monkey-blocks"),className:"spacing-sizes-control",children:(0,i.jsx)(c.RangeControl,{__nextHasNoMarginBottom:!0,className:"spacing-sizes-control__range-control",value:k.filter((e=>e.label?.toLowerCase()===_))?.[0]?.value,resetFallbackValue:void 0,onChange:e=>t({gap:k.filter((t=>t.value===e))?.[0]?.label?.toLowerCase()}),withInputField:!1,min:1,max:3,marks:!0,renderTooltipContent:e=>k.filter((t=>t.value===e))?.[0]?.label?.toUpperCase(),hideLabelFromVision:!0})})})}),(0,i.jsx)("div",{...f,children:(0,i.jsx)("div",{className:"smb-testimonial__body",children:(0,i.jsx)("div",{...y,"data-columns":"1","data-md-columns":o,"data-lg-columns":l})})})]})},save:function({attributes:e,className:t}){const{md:a,lg:s,gap:n}=e,o=r()("smb-testimonial",t),l=r()("c-row","c-row--margin",{[`c-row--margin-${n}`]:!!n});return(0,i.jsx)("div",{...m.useBlockProps.save({className:o}),children:(0,i.jsx)("div",{className:"smb-testimonial__body",children:(0,i.jsx)("div",{...m.useInnerBlocksProps.save({className:l}),"data-columns":"1","data-md-columns":a,"data-lg-columns":s})})})},deprecated:h})},6942:(e,t)=>{var a;!function(){"use strict";var s={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var a=arguments[t];a&&(e=o(e,i(a)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var a in e)s.call(e,a)&&e[a]&&(t=o(t,a));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()}},a={};function s(e){var n=a[e];if(void 0!==n)return n.exports;var i=a[e]={exports:{}};return t[e](i,i.exports,s),i.exports}s.m=t,e=[],s.O=(t,a,n,i)=>{if(!a){var o=1/0;for(c=0;c<e.length;c++){for(var[a,n,i]=e[c],l=!0,r=0;r<a.length;r++)(!1&i||o>=i)&&Object.keys(s.O).every((e=>s.O[e](a[r])))?a.splice(r--,1):(l=!1,i<o&&(o=i));if(l){e.splice(c--,1);var m=n();void 0!==m&&(t=m)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[a,n,i]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={2440:0,2192:0};s.O.j=t=>0===e[t];var t=(t,a)=>{var n,i,[o,l,r]=a,m=0;if(o.some((t=>0!==e[t]))){for(n in l)s.o(l,n)&&(s.m[n]=l[n]);if(r)var c=r(s)}for(t&&t(a);m<o.length;m++)i=o[m],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(c)},a=globalThis.webpackChunk=globalThis.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=s.O(void 0,[2192],(()=>s(3208)));n=s.O(n)})();