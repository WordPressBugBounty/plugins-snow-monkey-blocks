(()=>{var e,a={9492:(e,a,t)=>{"use strict";const l=window.wp.blocks,s=JSON.parse('{"UU":"snow-monkey-blocks/thumbnail-gallery","uK":{"arrows":{"type":"boolean","default":false},"speed":{"type":"number","default":300},"autoplay":{"type":"boolean","default":false},"autoplaySpeed":{"type":"number","default":0},"templateLock":{"type":["string","boolean"],"enum":["all","insert","contentOnly",false]}}}'),r=window.ReactJSXRuntime,n=(0,r.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,r.jsx)("path",{d:"M5,5.78V18.22a.78.78,0,0,0,.78.78H18.22a.78.78,0,0,0,.78-.78V5.78A.78.78,0,0,0,18.22,5H5.78A.78.78,0,0,0,5,5.78m12.44,12H6.56a.38.38,0,0,1-.39-.39V6.56a.38.38,0,0,1,.39-.39H17.44a.38.38,0,0,1,.39.39V17.44a.38.38,0,0,1-.39.39"}),(0,r.jsx)("path",{d:"M6.17,14.16l3.06-2.23a.22.22,0,0,1,.22,0l2.34,1.5a.21.21,0,0,0,.24,0l3-2.83a.19.19,0,0,1,.27,0l3.09,3v1.16l-3.09-3a.18.18,0,0,0-.27,0l-3,2.82a.19.19,0,0,1-.24,0L9.45,13.11a.18.18,0,0,0-.22,0L6.17,15.33Z"}),(0,r.jsx)("path",{d:"M2.22,5H0V6.17H1.44a.38.38,0,0,1,.39.39V17.44a.38.38,0,0,1-.39.39H0V19H2.22A.78.78,0,0,0,3,18.22V5.78A.78.78,0,0,0,2.22,5Z"}),(0,r.jsx)("path",{d:"M24,17.83H22.56a.38.38,0,0,1-.39-.39V6.56a.38.38,0,0,1,.39-.39H24V5H21.78a.78.78,0,0,0-.78.78V18.22a.78.78,0,0,0,.78.78H24Z"})]});var i=t(6942),o=t.n(i);const m=window.wp.blockEditor,u=window.wp.components,c=window.wp.data,d=window.wp.i18n,p=window.lodash,g=(e,a=0,t=null)=>(e=Number(e),(isNaN(e)||e<a)&&(e=a),null!==t&&e>t&&(e=t),e),b=["snow-monkey-blocks/thumbnail-gallery-item"],y=[["snow-monkey-blocks/thumbnail-gallery-item"]],_=s.uK,h=[{attributes:{..._},supports:{align:["wide","full"]},migrate:()=>({arrows:_.arrows.default,speed:_.speed.default,autoplay:_.autoplay.default,autoplaySpeed:_.autoplaySpeed.default}),save({className:e}){const a=o()("smb-thumbnail-gallery",e);return(0,r.jsx)("div",{className:a,children:(0,r.jsx)("div",{className:"smb-thumbnail-gallery__canvas",children:(0,r.jsx)(m.InnerBlocks.Content,{})})})}},{attributes:{content:{type:"array",source:"query",selector:".smb-thumbnail-gallery__item",default:[],query:{imageID:{type:"number",source:"attribute",selector:".smb-thumbnail-gallery__item__figure > img",attribute:"data-image-id",default:0},imageURL:{type:"string",source:"attribute",selector:".smb-thumbnail-gallery__item__figure > img",attribute:"src",default:""}}},items:{type:"number",default:2}},supports:{align:["wide","full"]},migrate:e=>[{},(()=>{const a=void 0===e.content?0:e.content.length;return(0,p.times)(a,(a=>{const t=(0,p.get)(e.content,[a,"imageID"],0),s=(0,p.get)(e.content,[a,"imageURL"],"");return(0,l.createBlock)("snow-monkey-blocks/thumbnail-gallery-item",{imageID:Number(t),imageURL:s})}))})()],save({attributes:e,className:a}){const{content:t}=e,l=o()("smb-thumbnail-gallery",a),s=void 0===t?0:t.length;return(0,r.jsxs)("div",{className:l,children:[(0,r.jsx)("div",{className:"smb-thumbnail-gallery__canvas",children:(0,p.times)(s,(e=>{const a=(0,p.get)(t,[e,"imageID"],0),l=(0,p.get)(t,[e,"imageURL"],"");return(0,r.jsx)(r.Fragment,{children:!!a&&(0,r.jsx)("div",{className:"smb-thumbnail-gallery__item",children:(0,r.jsx)("div",{className:"smb-thumbnail-gallery__item__figure",children:(0,r.jsx)("img",{src:l,alt:"",className:`wp-image-${a}`,"data-image-id":a})})})})}))}),(0,r.jsx)("div",{className:"smb-thumbnail-gallery__nav",children:(0,p.times)(s,(e=>{const a=(0,p.get)(t,[e,"imageID"],0),l=(0,p.get)(t,[e,"imageURL"],"");return(0,r.jsx)(r.Fragment,{children:!!a&&(0,r.jsx)("div",{className:"smb-thumbnail-gallery__nav__item",children:(0,r.jsx)("div",{className:"smb-thumbnail-gallery__nav__item__figure",children:(0,r.jsx)("img",{src:l,alt:"",className:`wp-image-${a}`,"data-image-id":a})})})})}))})]})}},{attributes:{content:{type:"array",source:"query",selector:".smb-thumbnail-gallery__item",default:[],query:{imageID:{type:"number",source:"attribute",selector:".smb-thumbnail-gallery__item__figure > img",attribute:"data-image-id",default:0},imageURL:{type:"string",source:"attribute",selector:".smb-thumbnail-gallery__item__figure > img",attribute:"src",default:""}}},items:{type:"number",default:2}},supports:{align:["wide","full"]},save({attributes:e}){const{items:a,content:t}=e;return(0,r.jsxs)("div",{className:"smb-thumbnail-gallery",children:[(0,r.jsx)("div",{className:"smb-thumbnail-gallery__canvas",children:(0,p.times)(a,(e=>{const a=(0,p.get)(t,[e,"imageID"],0),l=(0,p.get)(t,[e,"imageURL"],"");return(0,r.jsx)(r.Fragment,{children:!!a&&(0,r.jsx)("div",{className:"smb-thumbnail-gallery__item",children:(0,r.jsx)("div",{className:"smb-thumbnail-gallery__item__figure",children:(0,r.jsx)("img",{src:l,alt:"",className:`wp-image-${a}`,"data-image-id":a})})})})}))}),(0,r.jsx)("div",{className:"smb-thumbnail-gallery__nav",children:(0,p.times)(a,(e=>{const a=(0,p.get)(t,[e,"imageID"],0),l=(0,p.get)(t,[e,"imageURL"],"");return(0,r.jsx)(r.Fragment,{children:!!a&&(0,r.jsx)("div",{className:"smb-thumbnail-gallery__nav__item",children:(0,r.jsx)("div",{className:"smb-thumbnail-gallery__nav__item__figure",children:(0,r.jsx)("img",{src:l,alt:"",className:`wp-image-${a}`,"data-image-id":a})})})})}))})]})}}];(0,l.registerBlockType)(s.UU,{icon:{foreground:"#cd162c",src:n},edit:function({attributes:e,setAttributes:a,className:t,clientId:l}){const{arrows:n,speed:i,autoplaySpeed:p,templateLock:_}=e,h=(0,c.useSelect)((e=>!!e("core/block-editor").getBlock(l)?.innerBlocks?.length),[l]),f=o()("smb-thumbnail-gallery",t),v=(0,m.useBlockProps)({className:f}),w=(0,m.useInnerBlocksProps)({className:["c-row","c-row--margin"]},{allowedBlocks:b,template:y,templateLock:_,renderAppender:h?void 0:m.InnerBlocks.ButtonBlockAppender});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.InspectorControls,{children:(0,r.jsxs)(u.__experimentalToolsPanel,{label:(0,d.__)("Block settings","snow-monkey-blocks"),children:[(0,r.jsx)(u.__experimentalToolsPanelItem,{hasValue:()=>n!==s.uK.arrows.default,isShownByDefault:!0,label:(0,d.__)("Prev/Next arrows","snow-monkey-blocks"),onDeselect:()=>a({arrows:s.uK.arrows.default}),children:(0,r.jsx)(u.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,d.__)("Prev/Next arrows","snow-monkey-blocks"),checked:n,onChange:e=>a({arrows:e})})}),(0,r.jsx)(u.__experimentalToolsPanelItem,{hasValue:()=>i!==s.uK.speed.default,isShownByDefault:!0,label:(0,d.__)("Slide animation speed in milliseconds","snow-monkey-blocks"),onDeselect:()=>a({speed:s.uK.speed.default}),children:(0,r.jsx)(u.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,d.__)("Slide animation speed in milliseconds","snow-monkey-blocks"),value:i,onChange:e=>a({speed:g(e,100,1e3)}),min:"100",max:"1000",step:"100"})}),(0,r.jsx)(u.__experimentalToolsPanelItem,{hasValue:()=>p!==s.uK.autoplaySpeed.default,isShownByDefault:!0,label:(0,d.__)("Autoplay Speed in seconds","snow-monkey-blocks"),onDeselect:()=>a({autoplaySpeed:s.uK.autoplaySpeed.default,autoplay:s.uK.autoplay.default}),children:(0,r.jsx)(u.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,d.__)("Autoplay Speed in seconds","snow-monkey-blocks"),value:p,onChange:e=>{const t=g(e,0,10);a({autoplaySpeed:t}),a(0<t?{autoplay:!0}:{autoplay:!1})},min:"0",max:"10"})})]})}),(0,r.jsx)("div",{...v,children:(0,r.jsx)("div",{...w,"data-columns":"2"})})]})},save:function({attributes:e,className:a}){const{arrows:t,speed:l,autoplay:s,autoplaySpeed:n}=e,i=(e=>({arrows:e.arrows,speed:e.speed,autoplay:e.autoplay,autoplaySpeed:e.autoplaySpeed}))({arrows:t,speed:l,autoplay:s,autoplaySpeed:1e3*n}),u=o()("smb-thumbnail-gallery",a);return(0,r.jsx)("div",{...m.useBlockProps.save({className:u}),children:(0,r.jsx)("div",{...m.useInnerBlocksProps.save({className:"smb-thumbnail-gallery__canvas"}),"data-smb-thumbnail-gallery":JSON.stringify(i)})})},deprecated:h})},6942:(e,a)=>{var t;!function(){"use strict";var l={}.hasOwnProperty;function s(){for(var e="",a=0;a<arguments.length;a++){var t=arguments[a];t&&(e=n(e,r(t)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var a="";for(var t in e)l.call(e,t)&&e[t]&&(a=n(a,t));return a}function n(e,a){return a?e?e+" "+a:e+a:e}e.exports?(s.default=s,e.exports=s):void 0===(t=function(){return s}.apply(a,[]))||(e.exports=t)}()}},t={};function l(e){var s=t[e];if(void 0!==s)return s.exports;var r=t[e]={exports:{}};return a[e](r,r.exports,l),r.exports}l.m=a,e=[],l.O=(a,t,s,r)=>{if(!t){var n=1/0;for(u=0;u<e.length;u++){for(var[t,s,r]=e[u],i=!0,o=0;o<t.length;o++)(!1&r||n>=r)&&Object.keys(l.O).every((e=>l.O[e](t[o])))?t.splice(o--,1):(i=!1,r<n&&(n=r));if(i){e.splice(u--,1);var m=s();void 0!==m&&(a=m)}}return a}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[t,s,r]},l.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return l.d(a,{a}),a},l.d=(e,a)=>{for(var t in a)l.o(a,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},l.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e={6025:0,6653:0};l.O.j=a=>0===e[a];var a=(a,t)=>{var s,r,[n,i,o]=t,m=0;if(n.some((a=>0!==e[a]))){for(s in i)l.o(i,s)&&(l.m[s]=i[s]);if(o)var u=o(l)}for(a&&a(t);m<n.length;m++)r=n[m],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(u)},t=globalThis.webpackChunk=globalThis.webpackChunk||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})();var s=l.O(void 0,[6653],(()=>l(9492)));s=l.O(s)})();