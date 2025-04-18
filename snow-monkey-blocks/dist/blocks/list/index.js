(()=>{var e,t={3675:(e,t,o)=>{"use strict";const n=window.wp.blocks,r=window.wp.hooks,l=JSON.parse('{"UU":"snow-monkey-blocks/list","uK":{"icon":{"type":"string","default":"angle-right"},"iconColor":{"type":"string"},"templateLock":{"type":["string","boolean"],"enum":["all","insert","contentOnly",false]}},"xY":{"html":false,"spacing":{"margin":true}}}'),s=window.ReactJSXRuntime,i=(0,s.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,s.jsx)("rect",{x:"7",y:"7",width:"13",height:"1"}),(0,s.jsx)("rect",{x:"3.5",y:"6.5",width:"2",height:"2",rx:"1"}),(0,s.jsx)("rect",{x:"7",y:"11.5",width:"13",height:"1"}),(0,s.jsx)("rect",{x:"3.5",y:"11",width:"2",height:"2",rx:"1"}),(0,s.jsx)("rect",{x:"7",y:"16",width:"13",height:"1"}),(0,s.jsx)("rect",{x:"3.5",y:"15.5",width:"2",height:"2",rx:"1"})]});var c=o(6942),a=o.n(c);const u=window.lodash,d=window.wp.blockEditor,h=window.wp.components,p=window.wp.i18n,b=["core/list-item"],m=[["core/list-item"]],k=l.uK,g=l.xY,v=[{attributes:{...k,content:{type:"string",source:"html",selector:"ul",multiline:"li",default:""}},supports:{...g},migrate(e){const{content:t}=e,o=document.createElement("ul");o.innerHTML=t;const[r]=(0,n.rawHandler)({HTML:o.outerHTML});return[{...e},[...r.innerBlocks]]},save({attributes:e,className:t}){const{content:o,icon:n,iconColor:r}=e,l=a()("smb-list",t);return(0,s.jsx)("div",{...d.useBlockProps.save({className:l}),"data-icon":n,"data-icon-color":r,children:(0,s.jsx)("ul",{children:(0,s.jsx)(d.RichText.Content,{value:o})})})}},{attributes:{...k,content:{type:"string",source:"html",selector:"ul",multiline:"li",default:""}},supports:{...g},migrate(e){const{content:t}=e,o=document.createElement("ul");o.innerHTML=t;const[r]=(0,n.rawHandler)({HTML:o.outerHTML});return[{...e},[...r.innerBlocks]]},save({attributes:e}){const{content:t,icon:o,iconColor:n}=e;return(0,s.jsx)("div",{className:"smb-list","data-icon":o,"data-icon-color":n,children:(0,s.jsx)("ul",{children:(0,s.jsx)(d.RichText.Content,{value:t})})})}}];(0,n.registerBlockType)(l.UU,{icon:{foreground:"#cd162c",src:i},edit:function({attributes:e,setAttributes:t,className:o,clientId:n}){const{icon:r,iconColor:i,templateLock:c}=e,k=[{value:"angle-right",label:(0,p.__)("angle-right","snow-monkey-blocks")},{value:"angles-right",label:(0,p.__)("angles-right","snow-monkey-blocks")},{value:"circle-right",label:(0,p.__)("circle-right","snow-monkey-blocks")},{value:"arrow-right",label:(0,p.__)("arrow-right","snow-monkey-blocks")},{value:"check",label:(0,p.__)("check","snow-monkey-blocks")},{value:"circle-check",label:(0,p.__)("circle-check","snow-monkey-blocks")},{value:"square-check",label:(0,p.__)("square-check","snow-monkey-blocks")},{value:"circle-chevron-right",label:(0,p.__)("circle-chevron-right","snow-monkey-blocks")},{value:"hand-point-right",label:(0,p.__)("hand-point-right","snow-monkey-blocks")}],g=a()("smb-list",o),v=(0,d.useBlockProps)({className:g}),w=(0,d.useInnerBlocksProps)({},{allowedBlocks:b,template:m,templateLock:c});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.InspectorControls,{group:"styles",children:(0,s.jsx)(d.__experimentalPanelColorGradientSettings,{title:(0,p.__)("Color","snow-monkey-blocks"),initialOpen:!1,settings:[{colorValue:i,onColorChange:e=>t({iconColor:e}),label:(0,p.__)("Icon color","snow-monkey-blocks")}],__experimentalIsRenderedInSidebar:!0})}),(0,s.jsx)(d.InspectorControls,{children:(0,s.jsx)(h.__experimentalToolsPanel,{label:(0,p.__)("Block settings","snow-monkey-blocks"),children:(0,s.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>r!==l.uK.icon.default,isShownByDefault:!0,label:(0,p.__)("Icon","snow-monkey-blocks"),onDeselect:()=>t({icon:l.uK.icon.default}),children:(0,s.jsx)(h.BaseControl,{__nextHasNoMarginBottom:!0,label:(0,p.__)("Icon","snow-monkey-blocks"),id:"snow-monkey-blocks/list/icon",children:(0,s.jsx)("div",{className:"smb-list-icon-selector",children:(0,u.times)(k.length,(e=>{const o=k[e].value;return(0,s.jsx)(h.Button,{variant:r===o&&"primary",onClick:()=>t({icon:o}),children:(0,s.jsx)("i",{className:`fa-solid fa-${k[e].value}`,title:k[e].label})},e)}))})})})})}),(0,s.jsxs)("div",{...v,"data-icon":r,"data-icon-color":i,children:[(0,s.jsx)("style",{children:`.editor-styles-wrapper [data-block="${n}"] ul li::before, .customize-control-sidebar_block_editor [data-block="${n}"] ul li::before { border-color: ${i} }`}),(0,s.jsx)("ul",{...w})]})]})},save:function({attributes:e,className:t}){const{icon:o,iconColor:n}=e,r=a()("smb-list",t);return(0,s.jsx)("div",{...d.useBlockProps.save({className:r}),"data-icon":o,"data-icon-color":n,children:(0,s.jsx)("ul",{...d.useInnerBlocksProps.save()})})},deprecated:v}),(0,r.addFilter)("blocks.registerBlockType","snow-monkey-blocks/add-core-list-item-to-icon-list",(function(e,t){if("core/list-item"!==t)return e;let o=[];return null!=e?.parent&&(o=Array.isArray(e.parent)?e.parent:[e.parent]),{...e,parent:[...o,l.UU]}}))},6942:(e,t)=>{var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=s(e,l(o)))}return e}function l(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)n.call(e,o)&&e[o]&&(t=s(t,o));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var l=o[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=(t,o,r,l)=>{if(!o){var s=1/0;for(u=0;u<e.length;u++){for(var[o,r,l]=e[u],i=!0,c=0;c<o.length;c++)(!1&l||s>=l)&&Object.keys(n.O).every((e=>n.O[e](o[c])))?o.splice(c--,1):(i=!1,l<s&&(s=l));if(i){e.splice(u--,1);var a=r();void 0!==a&&(t=a)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[o,r,l]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={1450:0,382:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,l,[s,i,c]=o,a=0;if(s.some((t=>0!==e[t]))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(c)var u=c(n)}for(t&&t(o);a<s.length;a++)l=s[a],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(u)},o=globalThis.webpackChunk=globalThis.webpackChunk||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r=n.O(void 0,[382],(()=>n(3675)));r=n.O(r)})();