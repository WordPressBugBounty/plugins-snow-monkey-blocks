(()=>{var e,r={4473:(e,r,o)=>{"use strict";const n=window.wp.blocks,t=JSON.parse('{"UU":"snow-monkey-blocks/accordion"}'),s=window.ReactJSXRuntime,c=(0,s.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,s.jsx)("path",{d:"M2,16.5v4H22v-4Zm19,3H3v-2H21Z"}),(0,s.jsx)("path",{d:"M2,3.5v4H22v-4Zm19,3H3v-2H21Z"}),(0,s.jsx)("polygon",{points:"21 7.5 21 13.5 3 13.5 3 7.5 2 7.5 2 14.5 22 14.5 22 7.5 21 7.5"})]});var i=o(6942),a=o.n(i);const l=window.wp.blockEditor,p=window.wp.data,u=["snow-monkey-blocks/accordion-item"],d=[["snow-monkey-blocks/accordion-item"]],v=[{save:()=>(0,s.jsx)("div",{className:"smb-accordion",children:(0,s.jsx)(l.InnerBlocks.Content,{})})}];(0,n.registerBlockType)(t.UU,{icon:{foreground:"#cd162c",src:c},edit:function({attributes:e,className:r,clientId:o}){const{templateLock:n}=e,t=(0,p.useSelect)((e=>!!e("core/block-editor").getBlock(o)?.innerBlocks?.length),[o]),c=a()("smb-accordion",r),i=(0,l.useBlockProps)({className:c}),v=(0,l.useInnerBlocksProps)(i,{allowedBlocks:u,template:d,templateLock:n,renderAppender:t?void 0:l.InnerBlocks.ButtonBlockAppender});return(0,s.jsx)("div",{...v})},save:function({className:e}){const r=a()("smb-accordion",e);return(0,s.jsx)("div",{...l.useInnerBlocksProps.save(l.useBlockProps.save({className:r}))})},deprecated:v})},6942:(e,r)=>{var o;!function(){"use strict";var n={}.hasOwnProperty;function t(){for(var e="",r=0;r<arguments.length;r++){var o=arguments[r];o&&(e=c(e,s(o)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return t.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var o in e)n.call(e,o)&&e[o]&&(r=c(r,o));return r}function c(e,r){return r?e?e+" "+r:e+r:e}e.exports?(t.default=t,e.exports=t):void 0===(o=function(){return t}.apply(r,[]))||(e.exports=o)}()}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var s=o[e]={exports:{}};return r[e](s,s.exports,n),s.exports}n.m=r,e=[],n.O=(r,o,t,s)=>{if(!o){var c=1/0;for(p=0;p<e.length;p++){for(var[o,t,s]=e[p],i=!0,a=0;a<o.length;a++)(!1&s||c>=s)&&Object.keys(n.O).every((e=>n.O[e](o[a])))?o.splice(a--,1):(i=!1,s<c&&(c=s));if(i){e.splice(p--,1);var l=t();void 0!==l&&(r=l)}}return r}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[o,t,s]},n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var o in r)n.o(r,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={5170:0,4246:0};n.O.j=r=>0===e[r];var r=(r,o)=>{var t,s,[c,i,a]=o,l=0;if(c.some((r=>0!==e[r]))){for(t in i)n.o(i,t)&&(n.m[t]=i[t]);if(a)var p=a(n)}for(r&&r(o);l<c.length;l++)s=c[l],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(p)},o=globalThis.webpackChunk=globalThis.webpackChunk||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var t=n.O(void 0,[4246],(()=>n(4473)));t=n.O(t)})();