(()=>{var e={6942:(e,t)=>{var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=s(e,a(r)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)o.call(e,r)&&e[r]&&(t=s(t,r));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"UU":"snow-monkey-blocks/tab-panel"}'),o=window.ReactJSXRuntime,n=(0,o.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,o.jsx)("circle",{cx:"6.5",cy:"8",r:"1"}),(0,o.jsx)("path",{d:"M20,8H13.75a.25.25,0,0,1-.25-.25V5.5a1,1,0,0,0-1-1H4a1,1,0,0,0-1,1v13a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V9A1,1,0,0,0,20,8Zm0,10a.54.54,0,0,1-.53.54H4.53A.54.54,0,0,1,4,18V6a.54.54,0,0,1,.53-.54H12A.54.54,0,0,1,12.5,6V8.25a.54.54,0,0,0,.53.54h6.44a.54.54,0,0,1,.53.54Z"})]});var a=r(6942),s=r.n(a);const c=window.wp.blockEditor,l=window.wp.data,i=window.wp.element;window.lodash;const d=e=>{if(null===e||"object"!=typeof e||Array.isArray(e))return e;const t=Object.entries(e).map((([e,t])=>[e,d(t)])).filter((([,e])=>null!=e&&""!==e));return t.length?Object.fromEntries(t):void 0};(0,e.registerBlockType)(t.UU,{icon:{foreground:"#cd162c",src:n},edit:function({attributes:e,className:t,clientId:r}){const{tabPanelId:n,backgroundColor:a,textColor:u,style:p,templateLock:b}=e,{updateBlockAttributes:f}=(0,l.useDispatch)("core/block-editor"),v=(0,l.useSelect)((e=>e("core/block-editor").getBlockParents(r,!0)[0])),k=(0,l.useSelect)((e=>e("core/block-editor").getBlockAttributes(v)));(0,i.useEffect)((()=>{const e=k?.tabs;if(!e)return;const t=JSON.parse(e).map((e=>e.tabPanelId===n?d({...e,backgroundColor:a||void 0,textColor:u||void 0,style:{...e?.style,color:{...e?.style?.color,background:p?.color?.background||void 0,text:p?.color?.text||void 0}}}):e));f(v,{tabs:JSON.stringify(t)})}),[a,u,p?.color?.background,p?.color?.text]);const y=(0,l.useSelect)((e=>!!e("core/block-editor").getBlock(r)?.innerBlocks?.length),[r]),g=s()("smb-tab-panel",t),m=(0,c.useBlockProps)({className:g}),x=(0,c.useInnerBlocksProps)({className:"smb-tab-panel__body"},{templateLock:b,renderAppender:y?c.InnerBlocks.DefaultBlockAppender:c.InnerBlocks.ButtonBlockAppender});return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{...m,id:n,role:"tabpanel",children:(0,o.jsx)("div",{...x})})})},save:function({attributes:e,className:t}){const{tabPanelId:r,ariaHidden:n}=e,a=s()("smb-tab-panel",t);return(0,o.jsx)("div",{...c.useBlockProps.save({className:a}),id:r,"aria-hidden":n,role:"tabpanel",children:(0,o.jsx)("div",{...c.useInnerBlocksProps.save({className:"smb-tab-panel__body"})})})}})})()})();