(()=>{var e={6942:(e,t)=>{var s;!function(){"use strict";var o={}.hasOwnProperty;function l(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(e=n(e,i(s)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return l.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var s in e)o.call(e,s)&&e[s]&&(t=n(t,s));return t}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(l.default=l,e.exports=l):void 0===(s=function(){return l}.apply(t,[]))||(e.exports=s)}()}},t={};function s(o){var l=t[o];if(void 0!==l)return l.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,s),i.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"UU":"snow-monkey-blocks/step-item-free","uK":{"title":{"type":"string","source":"html","selector":".smb-step__item__title > span","default":""},"numberColor":{"type":"string"},"titleColor":{"type":"string"},"titleFontSizeSlug":{"type":"string"},"titleFontSize":{"type":"string"},"templateLock":{"type":["string","boolean"],"enum":["all","insert","contentOnly",false]}},"xY":{"anchor":true,"layout":{"allowSwitching":false,"allowEditing":false,"allowInheriting":false,"default":{"type":"constrained"}}}}'),o=window.ReactJSXRuntime,l=(0,o.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,o.jsx)("rect",{x:"7.68",y:"6.14",width:"13",height:"1"}),(0,o.jsx)("rect",{x:"7.68",y:"11.14",width:"13",height:"1"}),(0,o.jsx)("rect",{x:"7.68",y:"16.14",width:"13",height:"1"}),(0,o.jsx)("path",{d:"M5.29,8.44H4.6V5.86a2.55,2.55,0,0,1-.89.52V5.75a1.87,1.87,0,0,0,.59-.33,1.24,1.24,0,0,0,.43-.57h.56Z"}),(0,o.jsx)("path",{d:"M5.85,12.8v.64H3.44a1.68,1.68,0,0,1,.24-.68,4.3,4.3,0,0,1,.77-.86A4.38,4.38,0,0,0,5,11.31a.78.78,0,0,0,.14-.42A.48.48,0,0,0,5,10.54a.49.49,0,0,0-.34-.12.46.46,0,0,0-.35.13.66.66,0,0,0-.14.43l-.69-.07a1.13,1.13,0,0,1,.39-.82,1.29,1.29,0,0,1,.8-.24,1.14,1.14,0,0,1,.83.28.92.92,0,0,1,.31.71,1.14,1.14,0,0,1-.09.46,2,2,0,0,1-.27.46,5.87,5.87,0,0,1-.45.46c-.22.2-.36.33-.41.39a1,1,0,0,0-.14.19Z"}),(0,o.jsx)("path",{d:"M3.51,17.46l.66-.08a.64.64,0,0,0,.17.39.5.5,0,0,0,.7,0,.65.65,0,0,0,.14-.43A.6.6,0,0,0,5,16.9a.43.43,0,0,0-.34-.15,1,1,0,0,0-.31.05l.07-.56a.67.67,0,0,0,.43-.12A.42.42,0,0,0,5,15.78a.39.39,0,0,0-.1-.29.4.4,0,0,0-.29-.11.41.41,0,0,0-.3.12.6.6,0,0,0-.15.36l-.63-.11a1.38,1.38,0,0,1,.2-.52.85.85,0,0,1,.37-.3,1.14,1.14,0,0,1,.53-.11,1,1,0,0,1,.81.32.83.83,0,0,1,.25.6.85.85,0,0,1-.51.75.82.82,0,0,1,.49.29.89.89,0,0,1,.18.56,1.07,1.07,0,0,1-.34.8,1.2,1.2,0,0,1-.86.33,1.15,1.15,0,0,1-.8-.28A1,1,0,0,1,3.51,17.46Z"})]});var i=s(6942),n=s.n(i);const r=window.wp.blockEditor,a=window.wp.components,c=window.wp.data,m=window.wp.i18n,p=[{attributes:{...t.uK},supports:{...t.xY},save({attributes:e,className:t}){const{title:s,numberColor:l}=e,i=n()("smb-step__item",t),a={backgroundColor:l||void 0};return(0,o.jsxs)("div",{...r.useBlockProps.save({className:i}),children:[(0,o.jsxs)("div",{className:"smb-step__item__title",children:[(0,o.jsx)("div",{className:"smb-step__item__number",style:a}),(0,o.jsx)(r.RichText.Content,{tagName:"span",value:s})]}),(0,o.jsx)("div",{className:"smb-step__item__body",children:(0,o.jsx)("div",{...r.useInnerBlocksProps.save({className:"smb-step__item__summary"})})})]})}}];(0,e.registerBlockType)(t.UU,{icon:{foreground:"#cd162c",src:l},edit:function({attributes:e,setAttributes:s,className:l,clientId:i}){const{title:p,numberColor:u,titleColor:d,titleFontSizeSlug:_,titleFontSize:b,templateLock:g}=e,[v]=(0,r.useSettings)("typography.fontSizes"),x=(0,c.useSelect)((e=>!!e("core/block-editor").getBlock(i)?.innerBlocks?.length),[i]),h=n()("smb-step__item",l),y={"--smb-step--number-background-color":u||void 0,"--smb-step--title-color":d||void 0},S=(0,r.useBlockProps)({className:h,style:y}),f=(0,r.useInnerBlocksProps)({className:"smb-step__item__summary"},{templateLock:g,renderAppender:x?r.InnerBlocks.DefaultBlockAppender:r.InnerBlocks.ButtonBlockAppender}),w=v.find((e=>!!_&&e.slug===_))?.size||b,j=_?(0,r.getFontSizeClass)(_):void 0;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.InspectorControls,{group:"typography",children:(0,o.jsx)(a.__experimentalToolsPanelItem,{panelId:i,hasValue:()=>_!==t.titleFontSizeSlug||b!==t.titleFontSize,isShownByDefault:!0,label:(0,m.__)("Title font size","snow-monkey-blocks"),resetAllFilter:()=>({titleFontSizeSlug:t.titleFontSizeSlug,titleFontSize:t.titleFontSize}),onDeselect:()=>{s({titleFontSizeSlug:t.titleFontSizeSlug,titleFontSize:t.titleFontSize})},children:(0,o.jsx)(a.BaseControl,{label:(0,m.__)("Title","snow-monkey-blocks"),id:"snow-monkey-blocks/step-item-free/title-font-size",children:(0,o.jsx)(r.FontSizePicker,{value:w,onChange:e=>{const t=(0,r.getFontSizeObjectByValue)(v,e).slug;s({titleFontSizeSlug:t||void 0,titleFontSize:t?void 0:e})},withReset:!1,withSlider:!0})})})}),(0,o.jsx)(r.InspectorControls,{group:"color",children:(0,o.jsx)(r.__experimentalColorGradientSettingsDropdown,{panelId:i,__experimentalIsRenderedInSidebar:!0,...(0,r.__experimentalUseMultipleOriginColorsAndGradients)(),settings:[{colorValue:u,onColorChange:e=>s({numberColor:e}),resetAllFilter:()=>({numberColor:t.numberColor}),label:(0,m.__)("Number color","snow-monkey-blocks")},{colorValue:d,onColorChange:e=>s({titleColor:e}),resetAllFilter:()=>({titleColor:t.titleColor}),label:(0,m.__)("Title color","snow-monkey-blocks")}]})}),(0,o.jsxs)("div",{...S,children:[(0,o.jsxs)("div",{className:n()("smb-step__item__title",j),style:{fontSize:b||void 0},children:[(0,o.jsx)("div",{className:"smb-step__item__number"}),(0,o.jsx)(r.RichText,{tagName:"span",placeholder:(0,m.__)("Write title…","snow-monkey-blocks"),value:p,multiline:!1,onChange:e=>s({title:e})})]}),(0,o.jsx)("div",{className:"smb-step__item__body",children:(0,o.jsx)("div",{...f})})]})]})},save:function({attributes:e,className:t}){const{title:s,numberColor:l,titleColor:i,titleFontSizeSlug:a,titleFontSize:c}=e,m=n()("smb-step__item",t),p={"--smb-step--number-background-color":l||void 0,"--smb-step--title-color":i||void 0},u=a?(0,r.getFontSizeClass)(a):void 0;return(0,o.jsxs)("div",{...r.useBlockProps.save({className:m,style:p}),children:[(0,o.jsxs)("div",{className:n()("smb-step__item__title",u),style:{fontSize:c||void 0},children:[(0,o.jsx)("div",{className:"smb-step__item__number"}),(0,o.jsx)(r.RichText.Content,{tagName:"span",value:s})]}),(0,o.jsx)("div",{className:"smb-step__item__body",children:(0,o.jsx)("div",{...r.useInnerBlocksProps.save({className:"smb-step__item__summary"})})})]})},deprecated:p})})()})();