(()=>{var e,o={7008:(e,o,n)=>{"use strict";const a=window.wp.blocks,r=window.wp.blockEditor,t=window.wp.compose,l=window.wp.data,s=window.wp.hooks,i=JSON.parse('{"UU":"snow-monkey-blocks/flex","uK":{"MS":{"A":{"yW":"","ke":0.1,"xM":0,"Ge":10,"il":0}}}}'),c=window.ReactJSXRuntime,p=(0,c.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,c.jsx)("path",{d:"M3,3v8h8V3H3z M10,10H4V4h6V10z"}),(0,c.jsx)("path",{d:"M13,3v8h8V3H13z M20,10h-6V4h6V10z"}),(0,c.jsx)("path",{d:"M3,13v8h18v-8H3z M20,20H4v-6h16V20z"})]});var u=n(6942),h=n.n(u),d=n(3558),g=n.n(d);const b=window.wp.components,m=window.wp.element,w=window.wp.i18n;function x({settings:e,label:o}){const n={},a={},t=e.map(((e,o)=>{if(e.hasOwnProperty("colorValue")&&e.hasOwnProperty("onColorChange")){n.color=e.colorValue,a.color=e.onColorChange;const t=(0,r.__experimentalUseMultipleOriginColorsAndGradients)();return t.colors=t.colors.map((e=>{const o=e.colors.filter((e=>!e.color.match(/^var\(/)));return!(1>o.length)&&(e.colors=o,e)})).filter(Boolean),(0,c.jsx)("div",{className:"smb-color-gradient-settings-dropdown",children:(0,c.jsx)(r.__experimentalColorGradientSettingsDropdown,{settings:[{label:(0,w.__)("Color","snow-monkey-blocks"),colorValue:e.colorValue,onColorChange:e.onColorChange}],__experimentalIsRenderedInSidebar:!0,...t})},o)}return e.hasOwnProperty("opacityValue")&&e.hasOwnProperty("onOpacityChange")?(n.opacity=e.opacityValue,a.opacity=e.onOpacityChange,(0,c.jsx)(b.RangeControl,{label:(0,w.__)("Opacity","snow-monkey-blocks"),value:Number(e.opacityValue.toFixed(1)),onChange:e.onOpacityChange,min:0,max:1,step:.1},o)):e.hasOwnProperty("horizontalValue")&&e.hasOwnProperty("onHorizontalChange")?(n.horizontal=e.horizontalValue,a.horizontal=e.onHorizontalChange,(0,c.jsx)(b.RangeControl,{label:(0,w.__)("Horizontal","snow-monkey-blocks"),value:e.horizontalValue,onChange:e.onHorizontalChange,min:null!==(t=e?.min)&&void 0!==t?t:-100,max:null!==(l=e?.max)&&void 0!==l?l:100},o)):e.hasOwnProperty("verticalValue")&&e.hasOwnProperty("onVerticalChange")?(n.vertical=e.verticalValue,a.vertical=e.onVerticalChange,(0,c.jsx)(b.RangeControl,{label:(0,w.__)("Vertical","snow-monkey-blocks"),value:e.verticalValue,onChange:e.onVerticalChange,min:null!==(s=e?.min)&&void 0!==s?s:-100,max:null!==(i=e?.max)&&void 0!==i?i:100},o)):e.hasOwnProperty("blurValue")&&e.hasOwnProperty("onBlurChange")?(n.blur=e.blurValue,a.blur=e.onBlurChange,(0,c.jsx)(b.RangeControl,{label:(0,w.__)("Blur","snow-monkey-blocks"),value:e.blurValue,onChange:e.onBlurChange,min:null!==(p=e?.min)&&void 0!==p?p:0,max:null!==(u=e?.max)&&void 0!==u?u:100},o)):e.hasOwnProperty("spreadValue")&&e.hasOwnProperty("onSpreadChange")?(n.spread=e.spreadValue,a.spread=e.onSpreadChange,(0,c.jsx)(b.RangeControl,{label:(0,w.__)("Spread","snow-monkey-blocks"),value:e.spreadValue,onChange:e.onSpreadChange,min:null!==(h=e?.min)&&void 0!==h?h:-100,max:null!==(d=e?.max)&&void 0!==d?d:100},o)):e.hasOwnProperty("positionValue")&&e.hasOwnProperty("onPositionChange")?(n.position=e.positionValue,a.position=e.onPositionChange,(0,c.jsx)(b.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,w.__)("Position","snow-monkey-blocks"),value:e.positionValue,onChange:e.onPositionChange,options:[{value:"",label:(0,w.__)("Outline","snow-monkey-blocks")},{value:"inset",label:(0,w.__)("Inset","snow-monkey-blocks")}]},o)):(0,c.jsx)(m.Fragment,{},o);var t,l,s,i,p,u,h,d}));return(0,c.jsx)(b.__experimentalToolsPanel,{label:o||(0,w.__)("Box Shadow","snow-monkey-blocks"),className:"smb-box-shadow-tools-panel",children:(0,c.jsx)(b.__experimentalToolsPanelItem,{label:o||(0,w.__)("Box Shadow","snow-monkey-blocks"),hasValue:()=>e.some((e=>{if(e.hasOwnProperty("defaultValue")){let o;return e.hasOwnProperty("opacityValue")?o=e.opacityValue:e.hasOwnProperty("horizontalValue")?o=e.horizontalValue:e.hasOwnProperty("verticalValue")?o=e.verticalValue:e.hasOwnProperty("blurValue")?o=e.blurValue:e.hasOwnProperty("spreadValue")?o=e.spreadValue:e.hasOwnProperty("positionValue")&&(o=e.positionValue),void 0!==o&&e.defaultValue!==o}return!1})),isShownByDefault:!0,onDeselect:()=>{e.forEach((e=>{if(e.hasOwnProperty("defaultValue")){let o;e.hasOwnProperty("onOpacityChange")?o=e.onOpacityChange:e.hasOwnProperty("onHorizontalChange")?o=e.onHorizontalChange:e.hasOwnProperty("onVerticalChange")?o=e.onVerticalChange:e.hasOwnProperty("onBlurChange")?o=e.onBlurChange:e.hasOwnProperty("onSpreadChange")?o=e.onSpreadChange:e.hasOwnProperty("onPositionChange")&&(o=e.onPositionChange),void 0!==o&&o(e.defaultValue)}}))},children:t})})}const f={from:[{type:"block",isMultiBlock:!0,blocks:["*"],__experimentalConvert(e){const o=["wide","full"],n=e.reduce(((e,n)=>{const{align:a}=n.attributes;return o.indexOf(a)>o.indexOf(e)?a:e}),void 0),r=e.map((e=>(0,a.createBlock)(e.name,e.attributes,e.innerBlocks)));return(0,a.createBlock)("snow-monkey-blocks/flex",{align:n},r)}}],ungroup:(e,o)=>o.flatMap((e=>e))},v={attributes:{style:{spacing:{blockGap:"var:preset|spacing|40"}},layout:{orientation:"horizontal",type:"flex",flexWrap:"wrap",verticalAlignment:"stretch"}},innerBlocks:[{name:"snow-monkey-blocks/flex",attributes:{boxShadow:{color:"#000000",opacity:.1,horizontal:0,vertical:0,blur:15,spread:0},smb:{flexBasis:"150px",flexGrow:!0}},innerBlocks:[{name:"core/image",attributes:{url:`${smb.pluginUrl}/dist/img/photos/stocksnap_wrn48fo5mr.jpg`}},{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur",style:{spacing:{padding:{top:"var:preset|spacing|40",right:"var:preset|spacing|40",bottom:"var:preset|spacing|40",left:"var:preset|spacing|40"}}}}}]},{name:"snow-monkey-blocks/flex",attributes:{boxShadow:{color:"#000000",opacity:.1,horizontal:0,vertical:0,blur:15,spread:0},smb:{flexBasis:"150px",flexGrow:!0}},innerBlocks:[{name:"core/image",attributes:{url:`${smb.pluginUrl}/dist/img/photos/stocksnap_wrn48fo5mr.jpg`}},{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur",style:{spacing:{padding:{top:"var:preset|spacing|40",right:"var:preset|spacing|40",bottom:"var:preset|spacing|40",left:"var:preset|spacing|40"}}}}}]},{name:"snow-monkey-blocks/flex",attributes:{boxShadow:{color:"#000000",opacity:.1,horizontal:0,vertical:0,blur:15,spread:0},smb:{flexBasis:"150px",flexGrow:!0}},innerBlocks:[{name:"core/image",attributes:{url:`${smb.pluginUrl}/dist/img/photos/stocksnap_wrn48fo5mr.jpg`}},{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur",style:{spacing:{padding:{top:"var:preset|spacing|40",right:"var:preset|spacing|40",bottom:"var:preset|spacing|40",left:"var:preset|spacing|40"}}}}}]}]};(0,a.registerBlockType)(i.UU,{icon:{foreground:"#cd162c",src:p},edit:function({attributes:e,setAttributes:o,className:n,clientId:a}){const{boxShadow:t,templateLock:s}=e,p=(0,l.useSelect)((e=>{const{getBlock:o}=e("core/block-editor"),n=o(a);return!(!n||!n.innerBlocks.length)}),[a]),u=h()("smb-flex",n),d={"--smb-flex--box-shadow":t.color?`${t.horizontal}px ${t.vertical}px ${t.blur}px ${t.spread}px ${g()(t.color,t.opacity)}`:void 0},b=(0,r.useBlockProps)({className:u,style:d}),m=(0,r.useInnerBlocksProps)(b,{templateLock:s,renderAppender:p?void 0:r.InnerBlocks.ButtonBlockAppender});return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.InspectorControls,{group:"styles",children:(0,c.jsx)(x,{settings:[{colorValue:t.color,onColorChange:e=>{o({boxShadow:{...t,color:e}})},defaultValue:i.uK.MS.A.yW},{opacityValue:t.opacity,onOpacityChange:e=>{o({boxShadow:{...t,opacity:e}})},defaultValue:i.uK.MS.A.ke},{horizontalValue:t.horizontal,onHorizontalChange:e=>{o({boxShadow:{...t,horizontal:e}})},defaultValue:i.uK.MS.A.xM},{blurValue:t.blur,onBlurChange:e=>{o({boxShadow:{...t,blur:e}})},defaultValue:i.uK.MS.A.Ge},{spreadValue:t.spread,onSpreadChange:e=>{o({boxShadow:{...t,spread:e}})},defaultValue:i.uK.MS.A.il}]})}),(0,c.jsx)("div",{...m})]})},save:function({attributes:e}){const{boxShadow:o}=e,n=h()("smb-flex"),a={"--smb-flex--box-shadow":o.color?`${o.horizontal}px ${o.vertical}px ${o.blur}px ${o.spread}px ${g()(o.color,o.opacity)}`:void 0};return(0,c.jsx)("div",{...r.useInnerBlocksProps.save({...r.useBlockProps.save({className:n,style:a})})})},transforms:f,example:v});const y=(0,t.createHigherOrderComponent)((e=>o=>{const{getBlockParents:n,getBlock:a}=(0,l.useSelect)((e=>e(r.store)),[o.clientId]),t={...o},s=n(o.clientId);if(0<s.length){const e=s[s.length-1];if(e){const o=a(e);"snow-monkey-blocks/flex"===o?.name&&(t.attributes={...t.attributes,__unstableSMBSupports:{flexGrow:!0,flexShrink:!0,flexBasis:!0}})}}return(0,c.jsx)(e,{...t})}),"withClientIdClassName");(0,s.addFilter)("editor.BlockListBlock","smb/flex/with-child-block-attributes",y)},3558:e=>{"use strict";var o=function(e){return parseInt(e,16)};e.exports=function(e,n){var a,r,t=function(e){return"#"===e.charAt(0)?e.slice(1):e}(e),l=function(e){var n=e.g,a=e.b,r=e.a;return{r:o(e.r),g:o(n),b:o(a),a:+(o(r)/255).toFixed(2)}}({r:(r=3===(a=t).length||4===a.length)?"".concat(a.slice(0,1)).concat(a.slice(0,1)):a.slice(0,2),g:r?"".concat(a.slice(1,2)).concat(a.slice(1,2)):a.slice(2,4),b:r?"".concat(a.slice(2,3)).concat(a.slice(2,3)):a.slice(4,6),a:(r?"".concat(a.slice(3,4)).concat(a.slice(3,4)):a.slice(6,8))||"ff"});return function(e,o){var n,a=e.r,r=e.g,t=e.b,l=e.a,s=(n=o,!isNaN(parseFloat(n))&&isFinite(n)?o:l);return"rgba(".concat(a,", ").concat(r,", ").concat(t,", ").concat(s,")")}(l,n)}},6942:(e,o)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e="",o=0;o<arguments.length;o++){var n=arguments[o];n&&(e=l(e,t(n)))}return e}function t(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var o="";for(var n in e)a.call(e,n)&&e[n]&&(o=l(o,n));return o}function l(e,o){return o?e?e+" "+o:e+o:e}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(o,[]))||(e.exports=n)}()}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={exports:{}};return o[e](t,t.exports,a),t.exports}a.m=o,e=[],a.O=(o,n,r,t)=>{if(!n){var l=1/0;for(p=0;p<e.length;p++){n=e[p][0],r=e[p][1],t=e[p][2];for(var s=!0,i=0;i<n.length;i++)(!1&t||l>=t)&&Object.keys(a.O).every((e=>a.O[e](n[i])))?n.splice(i--,1):(s=!1,t<l&&(l=t));if(s){e.splice(p--,1);var c=r();void 0!==c&&(o=c)}}return o}t=t||0;for(var p=e.length;p>0&&e[p-1][2]>t;p--)e[p]=e[p-1];e[p]=[n,r,t]},a.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return a.d(o,{a:o}),o},a.d=(e,o)=>{for(var n in o)a.o(o,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},a.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={9912:0,4288:0};a.O.j=o=>0===e[o];var o=(o,n)=>{var r,t,l=n[0],s=n[1],i=n[2],c=0;if(l.some((o=>0!==e[o]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(i)var p=i(a)}for(o&&o(n);c<l.length;c++)t=l[c],a.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return a.O(p)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))})();var r=a.O(void 0,[4288],(()=>a(7008)));r=a.O(r)})();