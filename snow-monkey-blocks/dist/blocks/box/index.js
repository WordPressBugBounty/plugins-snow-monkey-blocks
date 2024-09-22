(()=>{var o,e={4595:(o,e,r)=>{"use strict";const a=window.wp.blocks,n=JSON.parse('{"UU":"snow-monkey-blocks/box","uK":{"backgroundColor":{"type":"string"},"backgroundGradientColor":{"type":"string"},"borderColor":{"type":"string"},"borderStyle":{"type":"string"},"textColor":{"type":"string"},"borderWidth":{"type":"string","default":1},"borderRadius":{"type":"string"},"opacity":{"type":"number","default":1},"boxShadow":{"type":"object","default":{"color":"","opacity":0.1,"horizontal":0,"vertical":0,"blur":10,"spread":0,"position":""}},"templateLock":{"type":["string","boolean"],"enum":["all","insert","contentOnly",false]}},"xY":{"html":false,"spacing":{"margin":true,"padding":true},"layout":{"allowSwitching":false,"allowEditing":false,"allowInheriting":false,"default":{"type":"constrained"}},"snowmonkeyeditor":{"blockPresets":{"ignore":true}}}}'),t=window.ReactJSXRuntime,l=(0,t.jsx)("svg",{viewBox:"0 0 24 24",children:(0,t.jsx)("path",{d:"M23,3H1A1,1,0,0,0,0,4V20a1,1,0,0,0,1,1H23a1,1,0,0,0,1-1V4A1,1,0,0,0,23,3Zm0,16.47a.52.52,0,0,1-.52.53h-21A.52.52,0,0,1,1,19.47V4.53A.52.52,0,0,1,1.52,4h21a.52.52,0,0,1,.52.53Z"})});var s=r(6942),i=r.n(s),d=r(3558),c=r.n(d);const b=window.wp.blockEditor,u=window.wp.components,p=window.wp.data,h=window.wp.i18n,x=window.wp.element;function m({settings:o,label:e}){const r={},a={},n=o.map(((o,e)=>{if(o.hasOwnProperty("colorValue")&&o.hasOwnProperty("onColorChange")){r.color=o.colorValue,a.color=o.onColorChange;const n=(0,b.__experimentalUseMultipleOriginColorsAndGradients)();return n.colors=n.colors.map((o=>{const e=o.colors.filter((o=>!o.color.match(/^var\(/)));return!(1>e.length)&&(o.colors=e,o)})).filter(Boolean),(0,t.jsx)("div",{className:"smb-color-gradient-settings-dropdown",children:(0,t.jsx)(b.__experimentalColorGradientSettingsDropdown,{settings:[{label:(0,h.__)("Color","snow-monkey-blocks"),colorValue:o.colorValue,onColorChange:o.onColorChange}],__experimentalIsRenderedInSidebar:!0,...n})},e)}return o.hasOwnProperty("opacityValue")&&o.hasOwnProperty("onOpacityChange")?(r.opacity=o.opacityValue,a.opacity=o.onOpacityChange,(0,t.jsx)(u.RangeControl,{label:(0,h.__)("Opacity","snow-monkey-blocks"),value:Number(o.opacityValue.toFixed(1)),onChange:o.onOpacityChange,min:0,max:1,step:.1},e)):o.hasOwnProperty("horizontalValue")&&o.hasOwnProperty("onHorizontalChange")?(r.horizontal=o.horizontalValue,a.horizontal=o.onHorizontalChange,(0,t.jsx)(u.RangeControl,{label:(0,h.__)("Horizontal","snow-monkey-blocks"),value:o.horizontalValue,onChange:o.onHorizontalChange,min:null!==(n=o?.min)&&void 0!==n?n:-100,max:null!==(l=o?.max)&&void 0!==l?l:100},e)):o.hasOwnProperty("verticalValue")&&o.hasOwnProperty("onVerticalChange")?(r.vertical=o.verticalValue,a.vertical=o.onVerticalChange,(0,t.jsx)(u.RangeControl,{label:(0,h.__)("Vertical","snow-monkey-blocks"),value:o.verticalValue,onChange:o.onVerticalChange,min:null!==(s=o?.min)&&void 0!==s?s:-100,max:null!==(i=o?.max)&&void 0!==i?i:100},e)):o.hasOwnProperty("blurValue")&&o.hasOwnProperty("onBlurChange")?(r.blur=o.blurValue,a.blur=o.onBlurChange,(0,t.jsx)(u.RangeControl,{label:(0,h.__)("Blur","snow-monkey-blocks"),value:o.blurValue,onChange:o.onBlurChange,min:null!==(d=o?.min)&&void 0!==d?d:0,max:null!==(c=o?.max)&&void 0!==c?c:100},e)):o.hasOwnProperty("spreadValue")&&o.hasOwnProperty("onSpreadChange")?(r.spread=o.spreadValue,a.spread=o.onSpreadChange,(0,t.jsx)(u.RangeControl,{label:(0,h.__)("Spread","snow-monkey-blocks"),value:o.spreadValue,onChange:o.onSpreadChange,min:null!==(p=o?.min)&&void 0!==p?p:-100,max:null!==(m=o?.max)&&void 0!==m?m:100},e)):o.hasOwnProperty("positionValue")&&o.hasOwnProperty("onPositionChange")?(r.position=o.positionValue,a.position=o.onPositionChange,(0,t.jsx)(u.SelectControl,{label:(0,h.__)("Position","snow-monkey-blocks"),value:o.positionValue,onChange:o.onPositionChange,options:[{value:"",label:(0,h.__)("Outline","snow-monkey-blocks")},{value:"inset",label:(0,h.__)("Inset","snow-monkey-blocks")}]},e)):(0,t.jsx)(x.Fragment,{},e);var n,l,s,i,d,c,p,m}));return(0,t.jsx)(u.__experimentalToolsPanel,{label:e||(0,h.__)("Box Shadow","snow-monkey-blocks"),className:"smb-box-shadow-tools-panel",children:(0,t.jsx)(u.__experimentalToolsPanelItem,{label:e||(0,h.__)("Box Shadow","snow-monkey-blocks"),hasValue:()=>o.some((o=>{if(o.hasOwnProperty("defaultValue")){let e;return o.hasOwnProperty("opacityValue")?e=o.opacityValue:o.hasOwnProperty("horizontalValue")?e=o.horizontalValue:o.hasOwnProperty("verticalValue")?e=o.verticalValue:o.hasOwnProperty("blurValue")?e=o.blurValue:o.hasOwnProperty("spreadValue")?e=o.spreadValue:o.hasOwnProperty("positionValue")&&(e=o.positionValue),void 0!==e&&o.defaultValue!==e}return!1})),isShownByDefault:!0,onDeselect:()=>{o.forEach((o=>{if(o.hasOwnProperty("defaultValue")){let e;o.hasOwnProperty("onOpacityChange")?e=o.onOpacityChange:o.hasOwnProperty("onHorizontalChange")?e=o.onHorizontalChange:o.hasOwnProperty("onVerticalChange")?e=o.onVerticalChange:o.hasOwnProperty("onBlurChange")?e=o.onBlurChange:o.hasOwnProperty("onSpreadChange")?e=o.onSpreadChange:o.hasOwnProperty("onPositionChange")&&(e=o.onPositionChange),void 0!==e&&e(o.defaultValue)}}))},children:n})})}window.lodash;const g=(o,e=0,r=null)=>(o=Number(o),(isNaN(o)||o<e)&&(o=e),null!==r&&o>r&&(o=r),o),y={from:[{type:"block",isMultiBlock:!0,blocks:["*"],__experimentalConvert(o){const e=["wide","full"],r=o.reduce(((o,r)=>{const{align:a}=r.attributes;return e.indexOf(a)>e.indexOf(o)?a:o}),void 0),n=o.map((o=>(0,a.createBlock)(o.name,o.attributes,o.innerBlocks)));return(0,a.createBlock)("snow-monkey-blocks/box",{align:r},n)}}],ungroup:(o,e)=>e.flatMap((o=>o))},v=n.uK,C=n.xY,w=[{attributes:{...v,borderWidth:{type:"number"},borderRadius:{type:"number"},contentPadding:{type:"string",default:""}},supports:{...C},save({attributes:o,className:e}){const{backgroundColor:r,backgroundGradientColor:a,borderColor:n,textColor:l,borderWidth:s,borderRadius:d,opacity:u,contentPadding:p,boxShadow:h}=o,x={"--smb-box--color":l||void 0,"--smb-box--border-radius":0<=d?`${d}px`:void 0,"--smb-box--box-shadow":h.color?`${h.horizontal}px ${h.vertical}px ${h.blur}px ${h.spread}px ${c()(h.color,h.opacity)}`:void 0,"--smb-box--background-color":r||void 0,"--smb-box--background-image":a||void 0,"--smb-box--background-opacity":String(u),"--smb-box--border-color":n||void 0,"--smb-box--border-width":0<=s?`${s}px`:void 0},m=i()("smb-box",e,{[`smb-box--p-${p}`]:!!p});return(0,t.jsxs)("div",{...b.useBlockProps.save({className:m,style:x}),children:[(0,t.jsx)("div",{className:"smb-box__background"}),(0,t.jsx)("div",{...b.useInnerBlocksProps.save({className:"smb-box__body"})})]})}},{attributes:{...v,borderRadius:{type:"number"},borderWidth:{type:"number"},contentPadding:{type:"string",default:""}},supports:{...C},save({attributes:o,className:e}){const{backgroundColor:r,backgroundGradientColor:a,borderColor:n,textColor:l,borderWidth:s,borderRadius:d,opacity:u,contentPadding:p,boxShadow:h}=o,x={color:l||void 0,borderRadius:0<=d?`${d}px`:void 0,boxShadow:h.color?`${h.horizontal}px ${h.vertical}px ${h.blur}px ${h.spread}px ${c()(h.color,h.opacity)}`:void 0},m={backgroundColor:r||void 0,backgroundImage:a||void 0,borderColor:n||void 0,borderWidth:s||void 0,borderRadius:0<=d?`${d}px`:void 0,opacity:u},g=i()("smb-box",e,{[`smb-box--p-${p}`]:!!p});return(0,t.jsxs)("div",{...b.useBlockProps.save({className:g,style:x}),children:[(0,t.jsx)("div",{className:"smb-box__background",style:m}),(0,t.jsx)("div",{...b.useInnerBlocksProps.save({className:"smb-box__body"})})]})}},{attributes:{...v,borderRadius:{type:"number"},borderWidth:{type:"number"},contentPadding:{type:"string",default:""}},save({attributes:o,className:e}){const{backgroundColor:r,borderColor:a,textColor:n,borderWidth:l}=o,s={backgroundColor:r||void 0,borderColor:a||void 0,color:n||void 0,borderWidth:l||void 0},d=i()("smb-box",e);return(0,t.jsx)("div",{className:d,style:s,children:(0,t.jsx)("div",{className:"smb-box__body",children:(0,t.jsx)(b.InnerBlocks.Content,{})})})}},{attributes:{...v,borderRadius:{type:"number"},borderWidth:{type:"number"},contentPadding:{type:"string",default:""}},save({attributes:o}){const{backgroundColor:e,borderColor:r,textColor:a,borderWidth:n}=o;return(0,t.jsx)("div",{className:"smb-box",style:{backgroundColor:e,borderColor:r,color:a,borderWidth:n},children:(0,t.jsx)("div",{className:"smb-box__body",children:(0,t.jsx)(b.InnerBlocks.Content,{})})})}}];(0,a.registerBlockType)(n.UU,{icon:{foreground:"#cd162c",src:l},edit:function({attributes:o,setAttributes:e,clientId:r}){const{backgroundColor:a,backgroundGradientColor:l,borderColor:s,borderStyle:d,textColor:x,borderWidth:y,borderRadius:v,opacity:C,boxShadow:w,templateLock:k}=o,f=(0,p.useSelect)((o=>!!o("core/block-editor").getBlock(r)?.innerBlocks?.length),[r]),_={"--smb-box--color":x||void 0,"--smb-box--border-radius":String(v).match(/^\d+$/)?`${v}px`:v,"--smb-box--box-shadow":w.color?`${w.horizontal}px ${w.vertical}px ${w.blur}px ${w.spread}px ${c()(w.color,w.opacity)}`:void 0,"--smb-box--background-color":a||void 0,"--smb-box--background-image":l||void 0,"--smb-box--background-opacity":String(C),"--smb-box--border-color":s||void 0,"--smb-box--border-style":d||void 0,"--smb-box--border-width":String(y).match(/^\d+$/)?`${y}px`:y},V=i()("smb-box"),S=(0,b.useBlockProps)({className:V,style:_}),O=(0,b.useInnerBlocksProps)({className:"smb-box__body"},{templateLock:k,renderAppender:f?b.InnerBlocks.DefaultBlockAppender:b.InnerBlocks.ButtonBlockAppender});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b.InspectorControls,{group:"styles",children:(0,t.jsx)(b.__experimentalPanelColorGradientSettings,{title:(0,h.__)("Color","snow-monkey-blocks"),initialOpen:!1,settings:[{colorValue:x,onColorChange:o=>e({textColor:o}),label:(0,h.__)("Text color","snow-monkey-blocks")}],__experimentalIsRenderedInSidebar:!0,children:(0,t.jsx)(b.ContrastChecker,{backgroundColor:a,textColor:x})})}),(0,t.jsxs)(b.InspectorControls,{group:"border",children:[(0,t.jsx)(u.__experimentalToolsPanelItem,{hasValue:()=>s!==n.uK.borderColor.default||d!==n.uK.borderStyle.default||y!==n.uK.borderWidth.default,isShownByDefault:!0,label:(0,h.__)("Border","snow-monkey-blocks"),onDeselect:()=>e({borderColor:n.uK.borderColor.default,borderStyle:n.uK.borderStyle.default,borderWidth:n.uK.borderWidth.default}),panelId:r,children:(0,t.jsx)(u.__experimentalBorderBoxControl,{...(0,b.__experimentalUseMultipleOriginColorsAndGradients)(),className:"smb-border-box-control",enableAlpha:!0,enableStyle:!0,onChange:o=>{e({borderColor:o?.color,borderWidth:o?.width,borderStyle:o?.style})},popoverOffset:40,popoverPlacement:"left-start",value:{color:s,style:d,width:y},__experimentalIsRenderedInSidebar:!0})}),(0,t.jsx)(u.__experimentalToolsPanelItem,{hasValue:()=>v!==n.uK.borderRadius.default,isShownByDefault:!0,label:(0,h.__)("Border radius","snow-monkey-blocks"),onDeselect:()=>e({borderRadius:n.uK.borderRadius.default}),panelId:r,children:(0,t.jsx)("div",{className:"smb-border-radius-control",children:(0,t.jsx)(b.__experimentalBorderRadiusControl,{values:v,onChange:o=>{e({borderRadius:o})}})})})]}),(0,t.jsxs)(b.InspectorControls,{group:"styles",children:[(0,t.jsxs)(u.__experimentalToolsPanel,{label:(0,h.__)("Background","snow-monkey-blocks"),children:[(0,t.jsx)("div",{className:"smb-color-gradient-settings-dropdown",children:(0,t.jsx)(b.__experimentalColorGradientSettingsDropdown,{settings:[{label:(0,h.__)("Color","snow-monkey-blocks"),colorValue:a,gradientValue:l,onColorChange:o=>e({backgroundColor:o}),onGradientChange:o=>e({backgroundGradientColor:o})}],__experimentalIsRenderedInSidebar:!0,...(0,b.__experimentalUseMultipleOriginColorsAndGradients)()})}),(0,t.jsx)(u.__experimentalToolsPanelItem,{hasValue:()=>C!==n.uK.opacity.default,isShownByDefault:!0,label:(0,h.__)("Opacity","snow-monkey-blocks"),onDeselect:()=>e({opacity:n.uK.opacity.default}),children:(0,t.jsx)(u.RangeControl,{label:(0,h.__)("Opacity","snow-monkey-blocks"),value:C,onChange:o=>e({opacity:g(o,0,1)}),min:0,max:1,step:.1})})]}),(0,t.jsx)(m,{settings:[{colorValue:w.color,onColorChange:o=>{e({boxShadow:{...w,color:o}})},defaultValue:n.uK.boxShadow.default.color},{opacityValue:w.opacity,onOpacityChange:o=>{e({boxShadow:{...w,opacity:o}})},defaultValue:n.uK.boxShadow.default.opacity},{horizontalValue:w.horizontal,onHorizontalChange:o=>{e({boxShadow:{...w,horizontal:o}})},defaultValue:n.uK.boxShadow.default.horizontal},{blurValue:w.blur,onBlurChange:o=>{e({boxShadow:{...w,blur:o}})},defaultValue:n.uK.boxShadow.default.blur},{spreadValue:w.spread,onSpreadChange:o=>{e({boxShadow:{...w,spread:o}})},defaultValue:n.uK.boxShadow.default.spread}]})]}),(0,t.jsxs)("div",{...S,children:[(0,t.jsx)("div",{className:"smb-box__background"}),(0,t.jsx)("div",{...O})]})]})},save:function({attributes:o}){const{backgroundColor:e,backgroundGradientColor:r,borderColor:a,borderStyle:n,textColor:l,borderWidth:s,borderRadius:d,opacity:u,boxShadow:p}=o,h={"--smb-box--color":l||void 0,"--smb-box--border-radius":String(d).match(/^\d+$/)?`${d}px`:d,"--smb-box--box-shadow":p.color?`${p.horizontal}px ${p.vertical}px ${p.blur}px ${p.spread}px ${c()(p.color,p.opacity)}`:void 0,"--smb-box--background-color":e||void 0,"--smb-box--background-image":r||void 0,"--smb-box--background-opacity":String(u),"--smb-box--border-color":a||void 0,"--smb-box--border-style":n||void 0,"--smb-box--border-width":String(s).match(/^\d+$/)?`${s}px`:s},x=i()("smb-box");return(0,t.jsxs)("div",{...b.useBlockProps.save({className:x,style:h}),children:[(0,t.jsx)("div",{className:"smb-box__background"}),(0,t.jsx)("div",{...b.useInnerBlocksProps.save({className:"smb-box__body"})})]})},transforms:y,deprecated:w})},3558:o=>{"use strict";var e=function(o){return parseInt(o,16)};o.exports=function(o,r){var a,n,t=function(o){return"#"===o.charAt(0)?o.slice(1):o}(o),l=function(o){var r=o.g,a=o.b,n=o.a;return{r:e(o.r),g:e(r),b:e(a),a:+(e(n)/255).toFixed(2)}}({r:(n=3===(a=t).length||4===a.length)?"".concat(a.slice(0,1)).concat(a.slice(0,1)):a.slice(0,2),g:n?"".concat(a.slice(1,2)).concat(a.slice(1,2)):a.slice(2,4),b:n?"".concat(a.slice(2,3)).concat(a.slice(2,3)):a.slice(4,6),a:(n?"".concat(a.slice(3,4)).concat(a.slice(3,4)):a.slice(6,8))||"ff"});return function(o,e){var r,a=o.r,n=o.g,t=o.b,l=o.a,s=(r=e,!isNaN(parseFloat(r))&&isFinite(r)?e:l);return"rgba(".concat(a,", ").concat(n,", ").concat(t,", ").concat(s,")")}(l,r)}},6942:(o,e)=>{var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var o="",e=0;e<arguments.length;e++){var r=arguments[e];r&&(o=l(o,t(r)))}return o}function t(o){if("string"==typeof o||"number"==typeof o)return o;if("object"!=typeof o)return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var e="";for(var r in o)a.call(o,r)&&o[r]&&(e=l(e,r));return e}function l(o,e){return e?o?o+" "+e:o+e:o}o.exports?(n.default=n,o.exports=n):void 0===(r=function(){return n}.apply(e,[]))||(o.exports=r)}()}},r={};function a(o){var n=r[o];if(void 0!==n)return n.exports;var t=r[o]={exports:{}};return e[o](t,t.exports,a),t.exports}a.m=e,o=[],a.O=(e,r,n,t)=>{if(!r){var l=1/0;for(c=0;c<o.length;c++){r=o[c][0],n=o[c][1],t=o[c][2];for(var s=!0,i=0;i<r.length;i++)(!1&t||l>=t)&&Object.keys(a.O).every((o=>a.O[o](r[i])))?r.splice(i--,1):(s=!1,t<l&&(l=t));if(s){o.splice(c--,1);var d=n();void 0!==d&&(e=d)}}return e}t=t||0;for(var c=o.length;c>0&&o[c-1][2]>t;c--)o[c]=o[c-1];o[c]=[r,n,t]},a.n=o=>{var e=o&&o.__esModule?()=>o.default:()=>o;return a.d(e,{a:e}),e},a.d=(o,e)=>{for(var r in e)a.o(e,r)&&!a.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:e[r]})},a.o=(o,e)=>Object.prototype.hasOwnProperty.call(o,e),(()=>{var o={7614:0,178:0};a.O.j=e=>0===o[e];var e=(e,r)=>{var n,t,l=r[0],s=r[1],i=r[2],d=0;if(l.some((e=>0!==o[e]))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(i)var c=i(a)}for(e&&e(r);d<l.length;d++)t=l[d],a.o(o,t)&&o[t]&&o[t][0](),o[t]=0;return a.O(c)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var n=a.O(void 0,[178],(()=>a(4595)));n=a.O(n)})();