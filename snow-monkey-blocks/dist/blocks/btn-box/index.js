(()=>{var e,t={6843:(e,t,n)=>{"use strict";const s=window.wp.blocks,o=window.wp.i18n,r=JSON.parse('{"UU":"snow-monkey-blocks/btn-box","uK":{"lede":{"type":"string","source":"html","selector":".smb-btn-box__lede","default":""},"note":{"type":"string","source":"html","selector":".smb-btn-box__note","default":""},"backgroundColor":{"type":"string"},"btnLabel":{"type":"string","source":"html","selector":".smb-btn__label","default":""},"btnURL":{"type":"string","source":"attribute","selector":".smb-btn","attribute":"href","default":""},"btnTarget":{"type":"string","source":"attribute","selector":".smb-btn","attribute":"target","default":"_self"},"btnBackgroundColor":{"type":"string"},"btnBackgroundGradientColor":{"type":"string"},"btnTextColor":{"type":"string"},"btnSize":{"type":"string","default":""},"btnBorderRadius":{"type":"string"},"btnWrap":{"type":"boolean","default":false}},"xY":{"html":false,"spacing":{"margin":true,"padding":true},"snowmonkeyeditor":{"blockPresets":{"ignore":["lede","note","btnLabel","btnURL","btnTarget"]}}}}'),l=window.ReactJSXRuntime,a=(0,l.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,l.jsx)("path",{d:"M18,8H6A1,1,0,0,0,5,9v6a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V9A1,1,0,0,0,18,8Zm0,5.8A1.15,1.15,0,0,1,16.91,15H6.55a.57.57,0,0,1-.55-.6V9.64A.57.57,0,0,1,6.55,9h10.9a.57.57,0,0,1,.55.6Z"}),(0,l.jsx)("rect",{x:"9.5",y:"11.54",width:"5",height:"1"}),(0,l.jsx)("path",{d:"M23,3H1A1,1,0,0,0,0,4V20a1,1,0,0,0,1,1H23a1,1,0,0,0,1-1V4A1,1,0,0,0,23,3Zm0,16.47a.52.52,0,0,1-.52.53h-21A.52.52,0,0,1,1,19.47V4.53A.52.52,0,0,1,1.52,4h21a.52.52,0,0,1,.52.53Z"})]});var b=n(6942),i=n.n(b);const c=window.wp.components,d=window.wp.blockEditor,u=window.wp.element,m=window.wp.primitives,x=(0,l.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(m.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})}),p=r.uK,h=r.xY,g=[{attributes:{...p,btnBorderRadius:{type:"number"}},supports:{...h},migrate(e){const{btnBorderRadius:t}=e;return e.btnBorderRadius=String(t).match(/^\d+$/)?`${t}px`:t,[{...e}]},save({attributes:e,className:t}){const{lede:n,note:s,backgroundColor:o,btnLabel:r,btnURL:a,btnTarget:b,btnBackgroundColor:c,btnBackgroundGradientColor:u,btnTextColor:m,btnSize:x,btnBorderRadius:p,btnWrap:h}=e,g=i()("smb-btn-box",t),v=i()("smb-btn",{[`smb-btn--${x}`]:!!x,"smb-btn--wrap":h}),_={"--smb-btn-box--background-color":o||void 0},k={"--smb-btn--background-color":c||void 0,"--smb-btn--background-image":u||void 0,"--smb-btn--border-radius":p||0<=p?`${p}px`:void 0,"--smb-btn--color":m||void 0};return e.className&&e.className.split(" ").includes("is-style-ghost")&&(k["--smb-btn--style--ghost--border-color"]=c||void 0),(0,l.jsx)("div",{...d.useBlockProps.save({className:g,style:_}),children:(0,l.jsxs)("div",{className:"c-container",children:[!d.RichText.isEmpty(n)&&(0,l.jsx)("div",{className:"smb-btn-box__lede",children:(0,l.jsx)(d.RichText.Content,{value:n})}),(0,l.jsx)("div",{className:"smb-btn-box__btn-wrapper",children:(0,l.jsx)("a",{className:v,href:a,style:k,target:"_self"===b?void 0:b,rel:"_self"===b?void 0:"noopener noreferrer",children:(0,l.jsx)("span",{className:"smb-btn__label",children:(0,l.jsx)(d.RichText.Content,{value:r})})})}),!d.RichText.isEmpty(s)&&(0,l.jsx)("div",{className:"smb-btn-box__note",children:(0,l.jsx)(d.RichText.Content,{value:s})})]})})}},{attributes:{...p,btnBorderRadius:{type:"number"}},supports:{...h},save({attributes:e,className:t}){const{lede:n,note:s,backgroundColor:o,btnLabel:r,btnURL:a,btnTarget:b,btnBackgroundColor:c,btnBackgroundGradientColor:u,btnTextColor:m,btnSize:x,btnBorderRadius:p,btnWrap:h}=e,g=i()("smb-btn-box",t),v=i()("smb-btn",{[`smb-btn--${x}`]:!!x,"smb-btn--wrap":h}),_={backgroundColor:o||void 0},k={backgroundColor:c||void 0,backgroundImage:u||void 0,borderRadius:void 0!==p?`${p}px`:void 0};return e.className&&e.className.split(" ").includes("is-style-ghost")&&(k.borderColor=c||void 0),(0,l.jsx)("div",{...d.useBlockProps.save({className:g,style:_}),children:(0,l.jsxs)("div",{className:"c-container",children:[!d.RichText.isEmpty(n)&&(0,l.jsx)("div",{className:"smb-btn-box__lede",children:(0,l.jsx)(d.RichText.Content,{value:n})}),(0,l.jsx)("div",{className:"smb-btn-box__btn-wrapper",children:(0,l.jsx)("a",{className:v,href:a,style:k,target:"_self"===b?void 0:b,rel:"_self"===b?void 0:"noopener noreferrer",children:(0,l.jsx)("span",{className:"smb-btn__label",style:{color:m},children:(0,l.jsx)(d.RichText.Content,{value:r})})})}),!d.RichText.isEmpty(s)&&(0,l.jsx)("div",{className:"smb-btn-box__note",children:(0,l.jsx)(d.RichText.Content,{value:s})})]})})}},{attributes:{...p,btnURL:{type:"string",default:""},btnTarget:{type:"string",default:"_self"},btnBorderRadius:{type:"number"}},supports:{align:["wide","full"]},save({attributes:e,className:t}){const{lede:n,note:s,backgroundColor:o,btnLabel:r,btnURL:a,btnTarget:b,btnBackgroundColor:c,btnTextColor:u,btnSize:m,btnBorderRadius:x,btnWrap:p}=e,h=i()("smb-btn-box",t),g=i()("smb-btn",{[`smb-btn--${m}`]:!!m,"smb-btn--wrap":p}),v={backgroundColor:o||void 0},_={backgroundColor:c||void 0,borderRadius:void 0!==x?`${x}px`:void 0};return"is-style-ghost"===e.className&&(_.borderColor=c||void 0),(0,l.jsx)("div",{...d.useBlockProps.save({className:h,style:v}),children:(0,l.jsxs)("div",{className:"c-container",children:[!d.RichText.isEmpty(n)&&(0,l.jsx)("div",{className:"smb-btn-box__lede",children:(0,l.jsx)(d.RichText.Content,{value:n})}),(0,l.jsx)("div",{className:"smb-btn-box__btn-wrapper",children:(0,l.jsx)("a",{className:g,href:a,style:_,target:"_self"===b?void 0:b,rel:"_self"===b?void 0:"noopener noreferrer",children:(0,l.jsx)("span",{className:"smb-btn__label",style:{color:u},children:(0,l.jsx)(d.RichText.Content,{value:r})})})}),!d.RichText.isEmpty(s)&&(0,l.jsx)("div",{className:"smb-btn-box__note",children:(0,l.jsx)(d.RichText.Content,{value:s})})]})})}},{attributes:{...p,btnURL:{type:"string",default:""},btnTarget:{type:"string",default:"_self"},btnBorderRadius:{type:"number"}},supports:{align:["wide","full"]},save({attributes:e}){const{lede:t,note:n,backgroundColor:s,btnLabel:o,btnURL:r,btnTarget:a,btnBackgroundColor:b,btnTextColor:c,btnSize:u}=e;return(0,l.jsx)("div",{className:"smb-btn-box",style:{backgroundColor:s},children:(0,l.jsxs)("div",{className:"c-container",children:[!d.RichText.isEmpty(t)&&(0,l.jsx)("div",{className:"smb-btn-box__lede",children:(0,l.jsx)(d.RichText.Content,{value:t})}),(0,l.jsx)("div",{className:"smb-btn-box__btn-wrapper",children:(0,l.jsx)("a",{className:i()("smb-btn",{[`smb-btn--${u}`]:!!u}),href:r,style:{backgroundColor:b},target:"_self"===a?void 0:a,rel:"_self"===a?void 0:"noopener noreferrer",children:(0,l.jsx)("span",{className:"smb-btn__label",style:{color:c},children:(0,l.jsx)(d.RichText.Content,{value:o})})})}),!d.RichText.isEmpty(n)&&(0,l.jsx)("div",{className:"smb-btn-box__note",children:(0,l.jsx)(d.RichText.Content,{value:n})})]})})}},{attributes:{...p,btnURL:{type:"string",default:""},btnTarget:{type:"string",default:"_self"},btnBorderRadius:{type:"number"}},save({attributes:e}){const{lede:t,note:n,backgroundColor:s,btnLabel:o,btnURL:r,btnTarget:a,btnBackgroundColor:b,btnTextColor:i}=e,c={};s&&"null"!==s&&(c.backgroundColor=s);const u={};b&&"null"!==b&&(u.btnBackgroundColor=b);const m={};return i&&"null"!==i&&(m.btnTextColor=i),(0,l.jsx)("div",{className:"smb-btn-box",style:c,children:(0,l.jsxs)("div",{className:"c-container",children:[!d.RichText.isEmpty(t)&&(0,l.jsx)("div",{className:"smb-btn-box__lede",children:(0,l.jsx)(d.RichText.Content,{value:t})}),(0,l.jsx)("a",{className:"smb-btn smb-btn--full",href:r,target:a,style:u,children:(0,l.jsx)("span",{className:"smb-btn__label",style:m,children:(0,l.jsx)(d.RichText.Content,{value:o})})}),!d.RichText.isEmpty(n)&&(0,l.jsx)("div",{className:"smb-btn-box__note",children:(0,l.jsx)(d.RichText.Content,{value:n})})]})})}},{attributes:{...p,btnURL:{type:"string",default:""},btnTarget:{type:"string",default:"_self"},btnBorderRadius:{type:"number"}},supports:{align:["wide","full"]},save({attributes:e}){const{lede:t,note:n,backgroundColor:s,btnLabel:o,btnURL:r,btnTarget:a,btnBackgroundColor:b,btnTextColor:c,btnSize:u}=e;return(0,l.jsx)("div",{className:"smb-btn-box",style:{backgroundColor:s},children:(0,l.jsxs)("div",{className:"c-container",children:[!d.RichText.isEmpty(t)&&(0,l.jsx)("div",{className:"smb-btn-box__lede",children:(0,l.jsx)(d.RichText.Content,{value:t})}),(0,l.jsx)("div",{className:"smb-btn-box__btn-wrapper",children:(0,l.jsx)("a",{className:i()("smb-btn",{[`smb-btn--${u}`]:!!u}),href:r,target:a,style:{backgroundColor:b},children:(0,l.jsx)("span",{className:"smb-btn__label",style:{color:c},children:(0,l.jsx)(d.RichText.Content,{value:o})})})}),!d.RichText.isEmpty(n)&&(0,l.jsx)("div",{className:"smb-btn-box__note",children:(0,l.jsx)(d.RichText.Content,{value:n})})]})})}}];(0,s.registerBlockType)(r.UU,{icon:{foreground:"#cd162c",src:a},styles:[{name:"default",label:(0,o.__)("Default","snow-monkey-blocks"),isDefault:!0},{name:"ghost",label:(0,o.__)("Ghost","snow-monkey-blocks")}],edit:function({attributes:e,setAttributes:t,isSelected:n,className:s}){const{lede:a,note:b,backgroundColor:m,btnLabel:p,btnURL:h,btnTarget:g,btnBackgroundColor:v,btnBackgroundGradientColor:_,btnTextColor:k,btnSize:y,btnBorderRadius:f,btnWrap:j}=e,[C,w]=(0,u.useState)(!1),R=!!h,T="_blank"===g,[N,B]=(0,u.useState)(null),S=i()("smb-btn-box",s),L=i()("smb-btn",{[`smb-btn--${y}`]:!!y,"smb-btn--wrap":j}),U={"--smb-btn-box--background-color":m||void 0},E={"--smb-btn--background-color":v||void 0,"--smb-btn--background-image":_||void 0,"--smb-btn--border-radius":String(f).match(/^\d+$/)?`${f}px`:f,"--smb-btn--color":k||void 0};e.className&&e.className.split(" ").includes("is-style-ghost")&&(E["--smb-btn--style--ghost--border-color"]=v||void 0);const O=(0,u.useRef)(),z=(0,d.useBlockProps)({className:S,style:U});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d.InspectorControls,{group:"styles",children:(0,l.jsx)(d.__experimentalPanelColorGradientSettings,{title:(0,o.__)("Color","snow-monkey-blocks"),initialOpen:!1,settings:[{colorValue:m,onColorChange:e=>t({backgroundColor:e}),label:(0,o.__)("Background color","snow-monkey-blocks")}],__experimentalIsRenderedInSidebar:!0})}),(0,l.jsx)(d.InspectorControls,{children:(0,l.jsxs)(c.__experimentalToolsPanel,{label:(0,o.__)("Button settings","snow-monkey-blocks"),children:[(0,l.jsx)(c.__experimentalToolsPanelItem,{hasValue:()=>y!==r.uK.btnSize.default,isShownByDefault:!0,label:(0,o.__)("Button size","snow-monkey-blocks"),onDeselect:()=>t({btnSize:r.uK.btnSize.default}),children:(0,l.jsx)(c.SelectControl,{label:(0,o.__)("Button size","snow-monkey-blocks"),value:y,onChange:e=>t({btnSize:e}),options:[{value:"",label:(0,o.__)("Normal size","snow-monkey-blocks")},{value:"little-wider",label:(0,o.__)("Litle wider","snow-monkey-blocks")},{value:"wider",label:(0,o.__)("Wider","snow-monkey-blocks")},{value:"more-wider",label:(0,o.__)("More wider","snow-monkey-blocks")},{value:"full",label:(0,o.__)("Full size","snow-monkey-blocks")}]})}),(0,l.jsx)(c.__experimentalToolsPanelItem,{hasValue:()=>f!==r.uK.btnBorderRadius.default,isShownByDefault:!0,label:(0,o.__)("Border radius","snow-monkey-blocks"),onDeselect:()=>t({btnBorderRadius:r.uK.btnBorderRadius.default}),children:(0,l.jsx)("div",{className:"smb-border-radius-control",children:(0,l.jsx)(d.__experimentalBorderRadiusControl,{values:f,onChange:e=>{t({btnBorderRadius:e})}})})}),(0,l.jsx)(c.__experimentalToolsPanelItem,{hasValue:()=>j!==r.uK.btnWrap.default,isShownByDefault:!0,label:(0,o.__)("Wrap","snow-monkey-blocks"),onDeselect:()=>t({btnWrap:r.uK.btnWrap.default}),children:(0,l.jsx)(c.ToggleControl,{label:(0,o.__)("Wrap","snow-monkey-blocks"),checked:j,onChange:e=>t({btnWrap:e})})}),(0,l.jsxs)("div",{className:"smb-color-gradient-settings-dropdown",children:[(0,l.jsx)(d.__experimentalColorGradientSettingsDropdown,{settings:[{label:(0,o.__)("Background color","snow-monkey-blocks"),colorValue:v,gradientValue:_,onColorChange:e=>t({btnBackgroundColor:e}),onGradientChange:e=>t({btnBackgroundGradientColor:e})}],__experimentalIsRenderedInSidebar:!0,...(0,d.__experimentalUseMultipleOriginColorsAndGradients)()}),(0,l.jsx)(d.__experimentalColorGradientSettingsDropdown,{settings:[{label:(0,o.__)("Text color","snow-monkey-blocks"),colorValue:k,onColorChange:e=>t({btnTextColor:e})}],__experimentalIsRenderedInSidebar:!0,...(0,d.__experimentalUseMultipleOriginColorsAndGradients)()}),(0,l.jsx)(d.ContrastChecker,{backgroundColor:v,textColor:k})]})]})}),(0,l.jsx)("div",{...z,children:(0,l.jsxs)("div",{className:"c-container",children:[(!d.RichText.isEmpty(a)||n)&&(0,l.jsx)(d.RichText,{className:"smb-btn-box__lede",value:a,onChange:e=>t({lede:e}),placeholder:(0,o.__)("Write lede…","snow-monkey-blocks")}),(0,l.jsx)("div",{className:"smb-btn-box__btn-wrapper",children:(0,l.jsx)("span",{ref:B,className:L,href:h,style:E,target:"_self"===g?void 0:g,rel:"_self"===g?void 0:"noopener noreferrer",children:(0,l.jsx)(d.RichText,{className:"smb-btn__label",value:p,placeholder:(0,o.__)("Button","snow-monkey-blocks"),onChange:e=>t({btnLabel:e}),withoutInteractiveFormatting:!0,ref:O})})}),(!d.RichText.isEmpty(b)||n)&&(0,l.jsx)(d.RichText,{className:"smb-btn-box__note",value:b,onChange:e=>t({note:e}),placeholder:(0,o.__)("Write note…","snow-monkey-blocks")})]})}),(0,l.jsx)(d.BlockControls,{group:"block",children:(0,l.jsx)(c.ToolbarButton,{name:"link",icon:x,title:(0,o.__)("Link","snow-monkey-blocks"),onClick:e=>{e.preventDefault(),w(!0)},isActive:R})}),n&&C&&(0,l.jsx)(c.Popover,{placement:"bottom",anchor:N,onClose:()=>{w(!1),O.current?.focus()},children:(0,l.jsx)(d.__experimentalLinkControl,{className:"wp-block-navigation-link__inline-link-input",value:{url:h,opensInNewTab:T},onChange:({url:e,opensInNewTab:n})=>{t({btnURL:e,btnTarget:n?"_blank":"_self"})},onRemove:()=>{t({btnURL:void 0,btnTarget:void 0}),w(!1),O.current?.focus()},forceIsEditingLink:!R})})]})},save:function({attributes:e,className:t}){const{lede:n,note:s,backgroundColor:o,btnLabel:r,btnURL:a,btnTarget:b,btnBackgroundColor:c,btnBackgroundGradientColor:u,btnTextColor:m,btnSize:x,btnBorderRadius:p,btnWrap:h}=e,g=i()("smb-btn-box",t),v=i()("smb-btn",{[`smb-btn--${x}`]:!!x,"smb-btn--wrap":h}),_={"--smb-btn-box--background-color":o||void 0},k={"--smb-btn--background-color":c||void 0,"--smb-btn--background-image":u||void 0,"--smb-btn--border-radius":String(p).match(/^\d+$/)?`${p}px`:p,"--smb-btn--color":m||void 0};return e.className&&e.className.split(" ").includes("is-style-ghost")&&(k["--smb-btn--style--ghost--border-color"]=c||void 0),(0,l.jsx)("div",{...d.useBlockProps.save({className:g,style:_}),children:(0,l.jsxs)("div",{className:"c-container",children:[!d.RichText.isEmpty(n)&&(0,l.jsx)("div",{className:"smb-btn-box__lede",children:(0,l.jsx)(d.RichText.Content,{value:n})}),(0,l.jsx)("div",{className:"smb-btn-box__btn-wrapper",children:(0,l.jsx)("a",{className:v,href:a,style:k,target:"_self"===b?void 0:b,rel:"_self"===b?void 0:"noopener noreferrer",children:(0,l.jsx)("span",{className:"smb-btn__label",children:(0,l.jsx)(d.RichText.Content,{value:r})})})}),!d.RichText.isEmpty(s)&&(0,l.jsx)("div",{className:"smb-btn-box__note",children:(0,l.jsx)(d.RichText.Content,{value:s})})]})})},deprecated:g})},6942:(e,t)=>{var n;!function(){"use strict";var s={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=l(e,r(n)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)s.call(e,n)&&e[n]&&(t=l(t,n));return t}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}},n={};function s(e){var o=n[e];if(void 0!==o)return o.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,s),r.exports}s.m=t,e=[],s.O=(t,n,o,r)=>{if(!n){var l=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],r=e[c][2];for(var a=!0,b=0;b<n.length;b++)(!1&r||l>=r)&&Object.keys(s.O).every((e=>s.O[e](n[b])))?n.splice(b--,1):(a=!1,r<l&&(l=r));if(a){e.splice(c--,1);var i=o();void 0!==i&&(t=i)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,o,r]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={5549:0,1089:0};s.O.j=t=>0===e[t];var t=(t,n)=>{var o,r,l=n[0],a=n[1],b=n[2],i=0;if(l.some((t=>0!==e[t]))){for(o in a)s.o(a,o)&&(s.m[o]=a[o]);if(b)var c=b(s)}for(t&&t(n);i<l.length;i++)r=l[i],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(c)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=s.O(void 0,[1089],(()=>s(6843)));o=s.O(o)})();