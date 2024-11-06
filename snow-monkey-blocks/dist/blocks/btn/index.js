(()=>{var e,r={7819:(e,r,t)=>{"use strict";const o=window.wp.blocks,s=window.wp.i18n,n=JSON.parse('{"UU":"snow-monkey-blocks/btn","uK":{"content":{"type":"string","source":"html","selector":".smb-btn__label","default":""},"url":{"type":"string","source":"attribute","selector":".smb-btn-wrapper a","attribute":"href","default":""},"target":{"type":"string","source":"attribute","selector":".smb-btn-wrapper a","attribute":"target","default":"_self"},"modifier":{"type":"string","default":""},"borderRadius":{"type":"string"},"backgroundColor":{"type":"string"},"backgroundGradientColor":{"type":"string"},"textColor":{"type":"string"},"wrap":{"type":"boolean","default":false},"linkDestination":{"type":"string"}},"xY":{"align":["left","center","right"],"spacing":{"__experimentalSkipSerialization":true,"margin":false,"padding":true},"snowmonkeyeditor":{"blockPresets":{"ignore":["content","url","target","linkDestination"]}}}}'),l=window.ReactJSXRuntime,a=(0,l.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,l.jsx)("path",{d:"M18,8H6A1,1,0,0,0,5,9v6a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V9A1,1,0,0,0,18,8Zm0,5.8A1.15,1.15,0,0,1,16.91,15H6.55A.57.57,0,0,1,6,14.4V9.6A.57.57,0,0,1,6.55,9h10.9a.57.57,0,0,1,.55.6Z"}),(0,l.jsx)("rect",{x:"9.5",y:"11.5",width:"5",height:"1"})]});var i=t(6942),c=t.n(i);const d=window.wp.components,b=window.wp.blockEditor,u=window.wp.compose,m=window.wp.element,p=window.wp.primitives,g=(0,l.jsx)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})}),f=(0,l.jsx)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(p.Path,{d:"M17.031 4.703 15.576 4l-1.56 3H14v.03l-2.324 4.47H9.5V13h1.396l-1.502 2.889h-.95a3.694 3.694 0 0 1 0-7.389H10V7H8.444a5.194 5.194 0 1 0 0 10.389h.17L7.5 19.53l1.416.719L15.049 8.5h.507a3.694 3.694 0 0 1 0 7.39H14v1.5h1.556a5.194 5.194 0 0 0 .273-10.383l1.202-2.304Z"})}),v=n.uK,h=n.xY,x=[{attributes:{...v,borderRadius:{type:"number"}},supports:{...h},migrate(e){const{borderRadius:r}=e;return e.borderRadius=String(r).match(/^\d+$/)?`${r}px`:r,[{...e}]},save({attributes:e,className:r}){const{content:t,url:o,target:s,modifier:n,borderRadius:a,backgroundColor:i,backgroundGradientColor:d,textColor:u,wrap:m}=e,p=c()("smb-btn-wrapper",r,{[`smb-btn-wrapper--${n}`]:!!n}),g=c()("smb-btn",{[`smb-btn--${n}`]:!!n,"smb-btn--wrap":m}),f={"--smb-btn--background-color":i||void 0,"--smb-btn--background-image":d||void 0,"--smb-btn--border-radius":a||0<=a?`${a}px`:void 0,"--smb-btn--color":u||void 0};return e.className&&e.className.split(" ").includes("is-style-ghost")&&(f["--smb-btn--style--ghost--border-color"]=i||void 0),(0,l.jsx)("div",{...b.useBlockProps.save({className:p}),children:(0,l.jsx)("a",{className:g,href:o,style:f,target:"_self"===s?void 0:s,rel:"_self"===s?void 0:"noopener noreferrer",children:(0,l.jsx)("span",{className:"smb-btn__label",children:(0,l.jsx)(b.RichText.Content,{value:t})})})})}},{attributes:{...v,borderRadius:{type:"number"}},supports:{...h},save({attributes:e,className:r}){const{content:t,url:o,target:s,modifier:n,borderRadius:a,backgroundColor:i,backgroundGradientColor:d,textColor:u,wrap:m}=e,p=c()("smb-btn-wrapper",r,{[`smb-btn-wrapper--${n}`]:!!n}),g=c()("smb-btn",{[`smb-btn--${n}`]:!!n,"smb-btn--wrap":m}),f={backgroundColor:i||void 0,backgroundImage:d||void 0,borderRadius:a||0<=a?`${a}px`:void 0};e.className&&e.className.split(" ").includes("is-style-ghost")&&(f.borderColor=i||void 0);const v={color:u||void 0};return(0,l.jsx)("div",{...b.useBlockProps.save({className:p}),children:(0,l.jsx)("a",{className:g,href:o,style:f,target:"_self"===s?void 0:s,rel:"_self"===s?void 0:"noopener noreferrer",children:(0,l.jsx)("span",{className:"smb-btn__label",style:v,children:(0,l.jsx)(b.RichText.Content,{value:t})})})})}},{attributes:{...v,url:{type:"string",default:""},target:{type:"string",default:"_self"},borderRadius:{type:"number"}},supports:{align:["left","center","right"]},save({attributes:e,className:r}){const{content:t,url:o,target:s,modifier:n,borderRadius:a,backgroundColor:i,textColor:d,wrap:u}=e,m=c()("smb-btn-wrapper",r,{[`smb-btn-wrapper--${n}`]:!!n}),p=c()("smb-btn",{[`smb-btn--${n}`]:!!n,"smb-btn--wrap":u}),g={backgroundColor:i||void 0,borderRadius:a||0<=a?`${a}px`:void 0};"is-style-ghost"===e.className&&(g.borderColor=i||void 0);const f={color:d||void 0};return(0,l.jsx)("div",{...b.useBlockProps.save({className:m}),children:(0,l.jsx)("a",{className:p,href:o,style:g,target:"_self"===s?void 0:s,rel:"_self"===s?void 0:"noopener noreferrer",children:(0,l.jsx)("span",{className:"smb-btn__label",style:f,children:(0,l.jsx)(b.RichText.Content,{value:t})})})})}},{attributes:{...v,url:{type:"string",default:""},target:{type:"string",default:"_self"},borderRadius:{type:"number"}},supports:{align:["left","center","right"]},save({attributes:e,className:r}){const{content:t,url:o,target:s,modifier:n,borderRadius:a,backgroundColor:i,textColor:d,wrap:u}=e,m=c()("u-clearfix","smb-btn-wrapper",r),p=c()("smb-btn",{[`smb-btn--${n}`]:!!n,"smb-btn--wrap":u}),g={backgroundColor:i||void 0,borderRadius:void 0!==a?`${a}px`:void 0};"is-style-ghost"===e.className&&(g.borderColor=i||void 0);const f={color:d||void 0};return(0,l.jsx)("div",{className:m,children:(0,l.jsx)("a",{className:p,href:o,style:g,target:"_self"===s?void 0:s,rel:"_self"===s?void 0:"noopener noreferrer",children:(0,l.jsx)("span",{className:"smb-btn__label",style:f,children:(0,l.jsx)(b.RichText.Content,{value:t})})})})}},{attributes:{...v,url:{type:"string",default:""},target:{type:"string",default:"_self"},borderRadius:{type:"number"}},supports:{align:["left","center","right"]},save({attributes:e}){const{content:r,url:t,target:o,modifier:s,backgroundColor:n,textColor:a}=e;return(0,l.jsx)("div",{className:"u-clearfix smb-btn-wrapper",children:(0,l.jsx)("a",{className:c()("smb-btn",{[`smb-btn--${s}`]:!!s}),href:t,style:{backgroundColor:n},target:"_self"===o?void 0:o,rel:"_self"===o?void 0:"noopener noreferrer",children:(0,l.jsx)("span",{className:"smb-btn__label",style:{color:a},children:(0,l.jsx)(b.RichText.Content,{value:r})})})})}},{attributes:{...v,url:{type:"string",default:""},target:{type:"string",default:"_self"},borderRadius:{type:"number"}},supports:{align:["left","center","right"]},save({attributes:e}){const{content:r,url:t,target:o,modifier:s,backgroundColor:n,textColor:a}=e;return(0,l.jsx)("div",{className:"u-clearfix smb-btn-wrapper",children:(0,l.jsx)("a",{className:c()("smb-btn",{[`smb-btn--${s}`]:!!s}),href:t,target:o,style:{backgroundColor:n},children:(0,l.jsx)("span",{className:"smb-btn__label",style:{color:a},children:(0,l.jsx)(b.RichText.Content,{value:r})})})})}}];(0,o.registerBlockType)(n.UU,{icon:{foreground:"#cd162c",src:a},edit:function({attributes:e,setAttributes:r,className:t,isSelected:o,clientId:a}){const{content:i,url:p,target:v,modifier:h,borderRadius:x,backgroundColor:_,backgroundGradientColor:k,textColor:w,wrap:y}=e,C=(0,b.__experimentalGetSpacingClassesAndStyles)(e),[j,N]=(0,m.useState)(!1),R=!!p,S="_blank"===v,[B,$]=(0,m.useState)(null);(0,m.useEffect)((()=>{e.className&&r({className:e.className.replace("u-clearfix","")})}),[]);const T=c()("smb-btn-wrapper",t,{[`smb-btn-wrapper--${h}`]:!!h}),P=c()("smb-btn",{[`smb-btn--${h}`]:!!h,"smb-btn--wrap":y}),H={"--smb-btn--background-color":_||void 0,"--smb-btn--background-image":k||void 0,"--smb-btn--border-radius":String(x).match(/^\d+$/)?`${x}px`:x,"--smb-btn--color":w||void 0,...C.style};e.className&&e.className.split(" ").includes("is-style-ghost")&&(H["--smb-btn--style--ghost--border-color"]=_||void 0);const I=(0,m.useRef)(),O=(0,m.useRef)(),V=(0,b.useBlockProps)({className:T,ref:(0,u.useMergeRefs)([$,I])}),G=()=>{r({url:void 0,target:void 0}),N(!1)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.InspectorControls,{children:(0,l.jsxs)(d.__experimentalToolsPanel,{label:(0,s.__)("Block settings","snow-monkey-blocks"),children:[(0,l.jsx)(d.__experimentalToolsPanelItem,{hasValue:()=>h!==n.uK.modifier.default,isShownByDefault:!0,label:(0,s.__)("Button size","snow-monkey-blocks"),onDeselect:()=>r({modifier:n.uK.modifier.default}),children:(0,l.jsx)(d.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,s.__)("Button size","snow-monkey-blocks"),value:h,onChange:e=>r({modifier:e}),options:[{value:"",label:(0,s.__)("Normal size","snow-monkey-blocks")},{value:"little-wider",label:(0,s.__)("Litle wider","snow-monkey-blocks")},{value:"wider",label:(0,s.__)("Wider","snow-monkey-blocks")},{value:"more-wider",label:(0,s.__)("More wider","snow-monkey-blocks")},{value:"full",label:(0,s.__)("Full size","snow-monkey-blocks")}]})}),(0,l.jsx)(d.__experimentalToolsPanelItem,{hasValue:()=>y!==n.uK.wrap.default,isShownByDefault:!0,label:(0,s.__)("Wrap","snow-monkey-blocks"),onDeselect:()=>r({wrap:n.uK.wrap.default}),children:(0,l.jsx)(d.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,s.__)("Wrap","snow-monkey-blocks"),checked:y,onChange:e=>r({wrap:e})})})]})}),(0,l.jsx)(b.InspectorControls,{group:"styles",children:(0,l.jsx)(b.__experimentalPanelColorGradientSettings,{title:(0,s.__)("Color","snow-monkey-blocks"),initialOpen:!1,settings:[{colorValue:_,onColorChange:e=>r({backgroundColor:e}),gradientValue:k,onGradientChange:e=>r({backgroundGradientColor:e}),label:(0,s.__)("Background color","snow-monkey-blocks")},{colorValue:w,onColorChange:e=>r({textColor:e}),label:(0,s.__)("Text color","snow-monkey-blocks")}],__experimentalIsRenderedInSidebar:!0,children:(0,l.jsx)(b.ContrastChecker,{backgroundColor:_,textColor:w})})}),(0,l.jsx)(b.InspectorControls,{group:"border",children:(0,l.jsx)(d.__experimentalToolsPanelItem,{hasValue:()=>x!==n.uK.borderRadius.default,isShownByDefault:!0,label:(0,s.__)("Border radius","snow-monkey-blocks"),onDeselect:()=>r({borderRadius:n.uK.borderRadius.default}),panelId:a,children:(0,l.jsx)("div",{className:"smb-border-radius-control",children:(0,l.jsx)(b.__experimentalBorderRadiusControl,{values:x,onChange:e=>{r({borderRadius:e})}})})})}),(0,l.jsx)("div",{...V,children:(0,l.jsx)("span",{className:P,href:p,style:H,target:"_self"===v?void 0:v,rel:"_self"===v?void 0:"noopener noreferrer",children:(0,l.jsx)(b.RichText,{className:"smb-btn__label",value:i,placeholder:(0,s.__)("Button","snow-monkey-blocks"),onChange:e=>r({content:e}),withoutInteractiveFormatting:!0,ref:O})})}),(0,l.jsxs)(b.BlockControls,{group:"block",children:[!R&&(0,l.jsx)(d.ToolbarButton,{name:"link",icon:g,title:(0,s.__)("Link","snow-monkey-blocks"),onClick:e=>{e.preventDefault(),N(!0)}}),R&&(0,l.jsx)(d.ToolbarButton,{name:"link",icon:f,title:(0,s.__)("Unlink","snow-monkey-blocks"),onClick:G,isActive:!0})]}),o&&(j||R)&&(0,l.jsx)(d.Popover,{placement:"bottom",anchor:B,onClose:()=>{N(!1),O.current?.focus()},children:(0,l.jsx)(b.__experimentalLinkControl,{className:"wp-block-navigation-link__inline-link-input",value:{url:p,opensInNewTab:S},onChange:({url:e,opensInNewTab:t})=>{r({url:e,target:t?"_blank":"_self"})},onRemove:()=>{G(),O.current?.focus()},forceIsEditingLink:j})})]})},save:function({attributes:e,className:r}){const{content:t,url:o,target:s,modifier:n,borderRadius:a,backgroundColor:i,backgroundGradientColor:d,textColor:u,wrap:m}=e,p=(0,b.__experimentalGetSpacingClassesAndStyles)(e),g=c()("smb-btn-wrapper",r,{[`smb-btn-wrapper--${n}`]:!!n}),f=c()("smb-btn",{[`smb-btn--${n}`]:!!n,"smb-btn--wrap":m}),v={"--smb-btn--background-color":i||void 0,"--smb-btn--background-image":d||void 0,"--smb-btn--border-radius":String(a).match(/^\d+$/)?`${a}px`:a,"--smb-btn--color":u||void 0,...p.style};return e.className&&e.className.split(" ").includes("is-style-ghost")&&(v["--smb-btn--style--ghost--border-color"]=i||void 0),(0,l.jsx)("div",{...b.useBlockProps.save({className:g}),children:(0,l.jsx)("a",{className:f,href:o,style:v,target:"_self"===s?void 0:s,rel:"_self"===s?void 0:"noopener noreferrer",children:(0,l.jsx)("span",{className:"smb-btn__label",children:(0,l.jsx)(b.RichText.Content,{value:t})})})})},styles:[{name:"default",label:(0,s.__)("Default","snow-monkey-blocks"),isDefault:!0},{name:"ghost",label:(0,s.__)("Ghost","snow-monkey-blocks")},{name:"text",label:(0,s.__)("Text","snow-monkey-blocks")}],deprecated:x})},6942:(e,r)=>{var t;!function(){"use strict";var o={}.hasOwnProperty;function s(){for(var e="",r=0;r<arguments.length;r++){var t=arguments[r];t&&(e=l(e,n(t)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var t in e)o.call(e,t)&&e[t]&&(r=l(r,t));return r}function l(e,r){return r?e?e+" "+r:e+r:e}e.exports?(s.default=s,e.exports=s):void 0===(t=function(){return s}.apply(r,[]))||(e.exports=t)}()}},t={};function o(e){var s=t[e];if(void 0!==s)return s.exports;var n=t[e]={exports:{}};return r[e](n,n.exports,o),n.exports}o.m=r,e=[],o.O=(r,t,s,n)=>{if(!t){var l=1/0;for(d=0;d<e.length;d++){t=e[d][0],s=e[d][1],n=e[d][2];for(var a=!0,i=0;i<t.length;i++)(!1&n||l>=n)&&Object.keys(o.O).every((e=>o.O[e](t[i])))?t.splice(i--,1):(a=!1,n<l&&(l=n));if(a){e.splice(d--,1);var c=s();void 0!==c&&(r=c)}}return r}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[t,s,n]},o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={8757:0,585:0};o.O.j=r=>0===e[r];var r=(r,t)=>{var s,n,l=t[0],a=t[1],i=t[2],c=0;if(l.some((r=>0!==e[r]))){for(s in a)o.o(a,s)&&(o.m[s]=a[s]);if(i)var d=i(o)}for(r&&r(t);c<l.length;c++)n=l[c],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(d)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var s=o.O(void 0,[585],(()=>o(7819)));s=o.O(s)})();