(()=>{var e,o={7162:(e,o,n)=>{"use strict";const t=window.wp.blocks,r=window.wp.blockEditor,l=window.wp.compose,s=window.wp.data,i=window.wp.hooks,a=JSON.parse('{"UU":"snow-monkey-blocks/grid","uK":{"bf":{"A":"min"},"YB":{"A":1},"$s":{"A":"250px"},"ZD":{"A":"auto-fit"},"y9":{"A":""},"Be":{"A":"rows"},"Ge":{"A":1},"co":{"A":""}}}'),u=window.ReactJSXRuntime,c=(0,u.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,u.jsx)("path",{d:"M3,3v8h8V3Zm7,7H4V4h6Z"}),(0,u.jsx)("path",{d:"M13,3v8h8V3Zm7,7H14V4h6Z"}),(0,u.jsx)("path",{d:"M3,13v8h8V13Zm7,7H4V14h6Z"}),(0,u.jsx)("path",{d:"M13,13v8h8V13Zm7,7H14V14h6Z"})]});var m=n(6942),p=n.n(m);const d=window.wp.components,g=window.wp.i18n,b={from:[{type:"block",isMultiBlock:!0,blocks:["*"],__experimentalConvert(e){const o=["wide","full"],n=e.reduce(((e,n)=>{const{align:t}=n.attributes;return o.indexOf(t)>o.indexOf(e)?t:e}),void 0),r=e.map((e=>(0,t.createBlock)(e.name,e.attributes,e.innerBlocks)));return(0,t.createBlock)("snow-monkey-blocks/grid",{align:n},r)}}],ungroup:(e,o)=>o.flatMap((e=>e))};(0,t.registerBlockType)(a.UU,{icon:{foreground:"#cd162c",src:c},edit:function({attributes:e,setAttributes:o,className:n,clientId:t}){const{columnsOption:l,columns:i,columnMinWidth:c,columnAutoRepeat:m,gridTemplateColumns:b,rowsOption:w,rows:v,gridTemplateRows:k,style:f,templateLock:h}=e,x=(0,s.useSelect)((e=>{const{getBlock:o}=e("core/block-editor"),n=o(t);return!(!n||!n.innerBlocks.length)}),[t]),_=f?.spacing?.blockGap&&(0,r.__experimentalGetGapCSSValue)(f?.spacing?.blockGap,"0px"),C=p()("smb-grid",`smb-grid--columns:${l}`,`smb-grid--rows:${w}`,n),y={"--smb-grid--gap":_||void 0,"--smb-grid--columns":"columns"===l&&String(i)||void 0,"--smb-grid--column-min-width":"min"===l&&c||void 0,"--smb-grid--column-auto-repeat":"min"===l&&m||void 0,"--smb-grid--grid-template-columns":"free"===l&&b||void 0,"--smb-grid--rows":"rows"===w&&String(v)||void 0,"--smb-grid--grid-template-rows":"free"===w&&k||void 0},j=(0,r.useBlockProps)({className:C,style:y}),A=(0,r.useInnerBlocksProps)(j,{templateLock:h,renderAppender:x?r.InnerBlocks.DefaultBlockAppender:r.InnerBlocks.ButtonBlockAppender});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.InspectorControls,{children:(0,u.jsxs)(d.__experimentalToolsPanel,{label:(0,g.__)("Block settings","snow-monkey-blocks"),children:[(0,u.jsxs)(d.__experimentalToolsPanelItem,{hasValue:()=>l!==a.uK.bf.A,isShownByDefault:!0,label:"grid-template-columns",onDeselect:()=>o({columnsOption:a.uK.bf.A,columns:a.uK.YB.A,columnMinWidth:a.uK.$s.A,columnAutoRepeat:a.uK.ZD.A,gridTemplateColumns:a.uK.y9.A}),children:[(0,u.jsxs)(d.__experimentalToggleGroupControl,{label:"grid-template-columns",value:l,onChange:e=>{o({columnsOption:e,columns:a.uK.YB.A,columnMinWidth:a.uK.$s.A,columnAutoRepeat:a.uK.ZD.A,gridTemplateColumns:a.uK.y9.A})},isBlock:!0,children:[(0,u.jsx)(d.__experimentalToggleGroupControlOption,{value:"min",label:(0,g.__)("Minimum width","snow-monkey-blocks")}),(0,u.jsx)(d.__experimentalToggleGroupControlOption,{value:"columns",label:(0,g.__)("Columns count","snow-monkey-blocks")}),(0,u.jsx)(d.__experimentalToggleGroupControlOption,{value:"free",label:(0,g.__)("Free input","snow-monkey-blocks")})]}),"columns"===l&&(0,u.jsx)(d.RangeControl,{label:(0,g.__)("Columns count","snow-monkey-blocks"),value:parseInt(i),onChange:e=>o({columns:parseInt(e)}),min:1,max:12,step:1}),"min"===l&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.__experimentalUnitControl,{label:(0,g.__)("Minimum width","snow-monkey-blocks"),value:c,onChange:e=>o({columnMinWidth:e})}),(0,u.jsxs)(d.__experimentalToggleGroupControl,{label:(0,g.__)("Auto repeat","snow-monkey-blocks"),value:m,onChange:e=>{o({columnAutoRepeat:e})},isBlock:!0,children:[(0,u.jsx)(d.__experimentalToggleGroupControlOption,{value:"auto-fit",label:"auto-fit"}),(0,u.jsx)(d.__experimentalToggleGroupControlOption,{value:"auto-fill",label:"auto-fill"})]})]}),"free"===l&&(0,u.jsx)(d.TextControl,{value:b,onChange:e=>o({gridTemplateColumns:e})})]}),(0,u.jsxs)(d.__experimentalToolsPanelItem,{hasValue:()=>w!==a.uK.Be.A,isShownByDefault:!0,label:"grid-template-rows",onDeselect:()=>o({rowsOption:a.uK.Be.A,rows:a.uK.Ge.A,gridTemplateRows:a.uK.co.A}),children:[(0,u.jsxs)(d.__experimentalToggleGroupControl,{label:"grid-template-rows",value:w,onChange:e=>{o({rowsOption:e,rows:a.uK.Ge.A,gridTemplateRows:a.uK.co.A})},isBlock:!0,children:[(0,u.jsx)(d.__experimentalToggleGroupControlOption,{value:"rows",label:(0,g.__)("Rows count","snow-monkey-blocks")}),(0,u.jsx)(d.__experimentalToggleGroupControlOption,{value:"free",label:(0,g.__)("Free input","snow-monkey-blocks")})]}),"rows"===w&&(0,u.jsx)(d.RangeControl,{label:(0,g.__)("Rows count","snow-monkey-blocks"),value:parseInt(v),onChange:e=>o({rows:parseInt(e)}),min:1,max:12,step:1}),"free"===w&&(0,u.jsx)(d.TextControl,{value:k,onChange:e=>o({gridTemplateRows:e})})]})]})}),(0,u.jsx)("div",{...A})]})},save:function({attributes:e,className:o}){const{columnsOption:n,columns:t,columnMinWidth:l,columnAutoRepeat:s,gridTemplateColumns:i,rowsOption:a,rows:c,gridTemplateRows:m,style:d}=e,g=d?.spacing?.blockGap&&(0,r.__experimentalGetGapCSSValue)(d?.spacing?.blockGap,"0px"),b=p()("smb-grid",`smb-grid--columns:${n}`,`smb-grid--rows:${a}`,o),w={"--smb-grid--gap":g||void 0,"--smb-grid--columns":"columns"===n&&String(t)||void 0,"--smb-grid--column-min-width":"min"===n&&l||void 0,"--smb-grid--column-auto-repeat":"min"===n&&s||void 0,"--smb-grid--grid-template-columns":"free"===n&&i||void 0,"--smb-grid--rows":"rows"===a&&String(c)||void 0,"--smb-grid--grid-template-rows":"free"===a&&m||void 0};return(0,u.jsx)("div",{...r.useInnerBlocksProps.save({...r.useBlockProps.save({className:b,style:w})})})},transforms:b});const w=(0,l.createHigherOrderComponent)((e=>o=>{const{getBlockParents:n,getBlock:t}=(0,s.useSelect)((e=>e(r.store)),[o.clientId]),l={...o},i=n(o.clientId);if(0<i.length){const e=i[i.length-1];if(e){const o=t(e);"snow-monkey-blocks/grid"===o?.name&&(l.attributes={...l.attributes,__unstableSMBSupports:{alignSelf:!0,justifySelf:!0,gridColumn:!0,gridRow:!0}})}}return(0,u.jsx)(e,{...l})}),"withClientIdClassName");(0,i.addFilter)("editor.BlockListBlock","smb/grid/with-child-block-attributes",w)},6942:(e,o)=>{var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e="",o=0;o<arguments.length;o++){var n=arguments[o];n&&(e=s(e,l(n)))}return e}function l(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var o="";for(var n in e)t.call(e,n)&&e[n]&&(o=s(o,n));return o}function s(e,o){return o?e?e+" "+o:e+o:e}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(o,[]))||(e.exports=n)}()}},n={};function t(e){var r=n[e];if(void 0!==r)return r.exports;var l=n[e]={exports:{}};return o[e](l,l.exports,t),l.exports}t.m=o,e=[],t.O=(o,n,r,l)=>{if(!n){var s=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],l=e[c][2];for(var i=!0,a=0;a<n.length;a++)(!1&l||s>=l)&&Object.keys(t.O).every((e=>t.O[e](n[a])))?n.splice(a--,1):(i=!1,l<s&&(s=l));if(i){e.splice(c--,1);var u=r();void 0!==u&&(o=u)}}return o}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[n,r,l]},t.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},t.d=(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={8085:0,9849:0};t.O.j=o=>0===e[o];var o=(o,n)=>{var r,l,s=n[0],i=n[1],a=n[2],u=0;if(s.some((o=>0!==e[o]))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(a)var c=a(t)}for(o&&o(n);u<s.length;u++)l=s[u],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(c)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))})();var r=t.O(void 0,[9849],(()=>t(7162)));r=t.O(r)})();