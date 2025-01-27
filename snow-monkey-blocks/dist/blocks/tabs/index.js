(()=>{var t,a={7931:(t,a,e)=>{"use strict";const s=window.wp.blocks,o=window.wp.i18n,n=window.ReactJSXRuntime,l=(0,n.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,n.jsx)("circle",{cx:"6.5",cy:"8",r:"1"}),(0,n.jsx)("path",{d:"M20,8H13.75a.25.25,0,0,1-.25-.25V5.5a1,1,0,0,0-1-1H4a1,1,0,0,0-1,1v13a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V9A1,1,0,0,0,20,8Zm0,10a.54.54,0,0,1-.53.54H4.53A.54.54,0,0,1,4,18V6a.54.54,0,0,1,.53-.54H12A.54.54,0,0,1,12.5,6V8.25a.54.54,0,0,0,.53.54h6.44a.54.54,0,0,1,.53.54Z"})]}),i=JSON.parse('{"UU":"snow-monkey-blocks/tabs","uK":{"tabs":{"type":"array","default":[]},"matchHeight":{"type":"string","source":"attribute","selector":".smb-tabs","attribute":"data-match-height","default":"false"},"tabsJustification":{"type":"string","source":"attribute","selector":".smb-tabs","attribute":"data-tabs-justification","default":"flex-start"},"tabsId":{"type":"string","source":"attribute","selector":".smb-tabs","attribute":"data-tabs-id","default":""},"orientation":{"type":"string","source":"attribute","selector":".smb-tabs","attribute":"data-orientation","default":"horizontal"},"templateLock":{"type":["string","boolean"],"enum":["all","insert","contentOnly",false]}},"xY":{"html":false,"spacing":{"margin":true},"snowmonkeyeditor":{"blockPresets":{"ignore":["tabs","tabsId"]}}}}');var r=e(6942),b=e.n(r);const c=window.wp.blockEditor,d=window.wp.components,m=window.wp.element,h=(0,m.forwardRef)((function({icon:t,size:a=24,...e},s){return(0,m.cloneElement)(t,{width:a,height:a,...e,ref:s})})),u=window.wp.primitives,p=(0,n.jsx)(u.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(u.Path,{d:"M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"})}),_=(0,n.jsx)(u.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)(u.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})}),v=(0,n.jsx)(u.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(u.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"})}),x=(0,n.jsx)(u.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(u.Path,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"})}),f=(0,n.jsx)(u.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)(u.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})}),w=(0,n.jsx)(u.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(u.Path,{d:"M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"})}),g=window.wp.data,k=["snow-monkey-blocks/tab-panel"],y=i.uK,j=i.xY,N=[{attributes:{...y,tabs:{type:"string",default:"[]"}},supports:{...j},migrate(t){const{tabs:a}=t;return{...t,tabs:JSON.parse(a)}},save({attributes:t,className:a}){const{tabs:e,matchHeight:s,tabsJustification:o,tabsId:l,orientation:i}=t,r=JSON.parse(e),d="vertical"===i||"horizontal"===i&&"true"===s,m=b()("smb-tabs",a);return(0,n.jsxs)("div",{...c.useBlockProps.save({className:m}),"data-tabs-id":l,"data-orientation":i,"data-match-height":d?"true":s,"data-tabs-justification":"horizontal"===i?o:void 0,children:[0<r.length&&(0,n.jsx)("div",{className:"smb-tabs__tabs",role:"tablist",children:r.map(((t,a)=>{const e=(0,c.__experimentalGetColorClassesAndStyles)(t);return(0,n.jsx)("div",{className:"smb-tabs__tab-wrapper",id:`smb-tab-for-${t?.anchor}`,children:(0,n.jsx)(c.RichText.Content,{tagName:"button",value:t.title,className:b()("smb-tabs__tab",e?.className),style:e?.style,role:"tab","aria-controls":t?.anchor,"aria-selected":0===a?"true":"false"})},a)}))}),(0,n.jsx)("div",{...c.useInnerBlocksProps.save({className:"smb-tabs__body"})}),d&&(0,n.jsx)("style",{children:r.map(((t,a)=>`[data-tabs-id="${l}"] > .smb-tabs__body > .smb-tab-panel:nth-child(${a+1}) {left: ${-100*a}%}`))})]})}},{attributes:{...y,tabs:{type:"string",default:"[]"}},supports:{...j},migrate(t){const{tabs:a}=t;return{...t,tabs:JSON.parse(a)}},save({attributes:t,className:a}){const{tabs:e,matchHeight:s,tabsJustification:o,tabsId:l,orientation:i}=t,r=JSON.parse(e),d="vertical"===i||"horizontal"===i&&"true"===s,m=b()("smb-tabs",a);return(0,n.jsxs)("div",{...c.useBlockProps.save({className:m}),"data-tabs-id":l,"data-orientation":i,"data-match-height":d?"true":s,"data-tabs-justification":"horizontal"===i?o:void 0,children:[0<r.length&&(0,n.jsx)("div",{className:"smb-tabs__tabs",role:"tablist",children:r.map(((t,a)=>{const e=(0,c.__experimentalGetColorClassesAndStyles)(t);return(0,n.jsx)("div",{className:"smb-tabs__tab-wrapper",children:(0,n.jsx)(c.RichText.Content,{tagName:"button",value:t.title,className:b()("smb-tabs__tab",e?.className),style:e?.style,role:"tab","aria-controls":t.tabPanelId,"aria-selected":0===a?"true":"false"})},a)}))}),(0,n.jsx)("div",{...c.useInnerBlocksProps.save({className:"smb-tabs__body"})}),d&&(0,n.jsx)("style",{children:r.map(((t,a)=>`[data-tabs-id="${l}"] > .smb-tabs__body > .smb-tab-panel:nth-child(${a+1}) {left: ${-100*a}%}`))})]})}},{attributes:{...y,tabs:{type:"string",default:"[]"}},supports:{...j},migrate(t){const{tabs:a}=t;return{...t,tabs:JSON.parse(a)}},save({attributes:t,className:a}){const{tabs:e,matchHeight:s,tabsJustification:o,tabsId:l,orientation:i}=t,r=JSON.parse(e),d="vertical"===i||"horizontal"===i&&"true"===s,m=b()("smb-tabs",a);return(0,n.jsxs)("div",{...c.useBlockProps.save({className:m}),"data-tabs-id":l,"data-orientation":i,"data-match-height":d?"true":s,"data-tabs-justification":"horizontal"===i?o:void 0,children:[0<r.length&&(0,n.jsx)("div",{className:"smb-tabs__tabs",children:r.map(((t,a)=>(0,n.jsx)("div",{className:"smb-tabs__tab-wrapper",children:(0,n.jsx)(c.RichText.Content,{tagName:"button",value:t.title,className:"smb-tabs__tab",role:"tab","aria-controls":t.tabPanelId,"aria-selected":0===a?"true":"false"})},a)))}),(0,n.jsx)("div",{...c.useInnerBlocksProps.save({className:"smb-tabs__body"})}),d&&(0,n.jsx)("style",{children:r.map(((t,a)=>`[data-tabs-id="${l}"] > .smb-tabs__body > .smb-tab-panel:nth-child(${a+1}) {left: ${-100*a}%}`))})]})}}];(0,s.registerBlockType)(i.UU,{icon:{foreground:"#cd162c",src:l},edit:function({attributes:t,setAttributes:a,className:e,clientId:l}){const{tabs:r,matchHeight:u,tabsJustification:y,tabsId:j,orientation:N,templateLock:B}=t,{removeBlocks:P,insertBlocks:S,moveBlocksUp:I,moveBlocksDown:C,updateBlockAttributes:H,selectBlock:z}=(0,g.useDispatch)("core/block-editor"),{getBlockOrder:$,getBlock:O}=(0,g.useSelect)("core/block-editor"),[V,J]=(0,m.useState)(void 0),[T,L]=(0,m.useState)(void 0);(0,m.useEffect)((()=>{if(j!==l&&a({tabsId:l}),1>r.length)return;J(r[0]?.tabPanelId),L(r[0]?.anchor);const t=$(l);if(!T){const a=O(t[0]);J(a.attributes.tabPanelId),L(a.attributes.anchor)}t.forEach(((t,a)=>{const e=O(t);e.attributes.tabPanelId===V&&L(e.attributes.anchor),H(t,{ariaHidden:0===a?"false":"true"})}))}),[l,r]);const M="vertical"===N||"horizontal"===N&&"true"===u,A=b()("smb-tabs",e),D=(0,c.useBlockProps)({className:A}),G=(0,c.useInnerBlocksProps)({className:"smb-tabs__body"},{allowedBlocks:k,templateLock:B,renderAppender:!1});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.InspectorControls,{children:(0,n.jsxs)(d.__experimentalToolsPanel,{label:(0,o.__)("Block settings","snow-monkey-blocks"),children:[(0,n.jsx)(d.__experimentalToolsPanelItem,{hasValue:()=>N!==i.uK.orientation.default,isShownByDefault:!0,label:(0,o.__)("Tabs orientation","snow-monkey-blocks"),onDeselect:()=>a({orientation:i.uK.orientation.default}),children:(0,n.jsx)(d.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,o.__)("Tabs orientation","snow-monkey-blocks"),value:N,onChange:t=>a({orientation:t}),options:[{value:"horizontal",label:(0,o.__)("Horizontal","snow-monkey-blocks")},{value:"vertical",label:(0,o.__)("Vertical","snow-monkey-blocks")}]})}),"horizontal"===N&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.__experimentalToolsPanelItem,{hasValue:()=>u!==i.uK.matchHeight.default,isShownByDefault:!0,label:(0,o.__)("Align the height of each tab panels","snow-monkey-blocks"),onDeselect:()=>a({matchHeight:i.uK.matchHeight.default}),children:(0,n.jsx)(d.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,o.__)("Align the height of each tab panels","snow-monkey-blocks"),checked:"true"===u,onChange:t=>a({matchHeight:t?"true":"false"})})}),(0,n.jsx)(d.__experimentalToolsPanelItem,{hasValue:()=>y!==i.uK.tabsJustification.default,isShownByDefault:!0,label:(0,o.__)("Tabs justification","snow-monkey-blocks"),onDeselect:()=>a({tabsJustification:i.uK.tabsJustification.default}),children:(0,n.jsx)(d.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,o.__)("Tabs justification","snow-monkey-blocks"),value:y,onChange:t=>a({tabsJustification:t}),options:[{label:(0,o.__)("Left","snow-monkey-blocks"),value:"flex-start"},{label:(0,o.__)("Center","snow-monkey-blocks"),value:"center"},{label:(0,o.__)("Right","snow-monkey-blocks"),value:"flex-end"},{label:(0,o.__)("Stretch","snow-monkey-blocks"),value:"stretch"}]})})]})]})}),(0,n.jsxs)("div",{...D,"data-tabs-id":j,"data-orientation":N,"data-match-height":M?"true":u,"data-tabs-justification":"horizontal"===N?y:void 0,children:[(0,n.jsxs)("div",{className:"smb-tabs__tabs","data-has-tabs":1<r.length?"true":"false",children:[r.map(((t,e)=>{const s=$(l)[e],i=(0,c.__experimentalGetColorClassesAndStyles)(t);return(0,n.jsxs)("div",{className:"smb-tabs__tab-wrapper","aria-selected":T===t?.anchor?"true":"false",children:[0<e&&(0,n.jsx)("button",{className:"smb-tabs__up-tab",onClick:()=>{I(s?[s]:[],l);const t=r[e];r.splice(e,1),r.splice(e-1,0,t),a({tabs:[...r]}),J(r[e-1]?.tabPanelId),L(r[e-1]?.anchor)},"aria-label":"horizontal"===N?(0,o.__)("Move to left","snow-monkey-blocks"):(0,o.__)("Move to up","snow-monkey-blocks"),children:(0,n.jsx)(h,{icon:"horizontal"===N?p:_})}),1<r.length&&(0,n.jsx)("button",{className:"smb-tabs__remove-tab",onClick:()=>{P(s?[s]:[],!1),r.splice(e,1),a({tabs:[...r]}),J(r[0]?.tabPanelId),L(r[0]?.anchor)},"aria-label":(0,o.__)("Remove this tab","snow-monkey-blocks"),children:(0,n.jsx)(h,{icon:v})}),r.length-1>e&&(0,n.jsx)("button",{className:"smb-tabs__down-tab",onClick:()=>{C(s?[s]:[],l);const t=r[e];r.splice(e,1),r.splice(e+1,0,t),a({tabs:[...r]}),J(r[e+1]?.tabPanelId),L(r[e+1]?.anchor)},"aria-label":"horizontal"===N?(0,o.__)("Move to right","snow-monkey-blocks"):(0,o.__)("Move to down","snow-monkey-blocks"),children:(0,n.jsx)(h,{icon:"horizontal"===N?x:f})}),(0,n.jsx)("button",{className:b()("smb-tabs__tab",i?.className),style:i?.style,role:"tab","aria-controls":t?.anchor,"aria-selected":T===t?.anchor?"true":"false",onClick:a=>{J(t?.tabPanelId),L(t?.anchor),a.target.classList.contains("smb-tabs__tab")&&0!==a.clientX&&0!==a.clientY&&0!==a.pageX&&0!==a.pageY&&z(s)},children:(0,n.jsx)(c.RichText,{value:t.title,onChange:t=>{r[e].title=t,a({tabs:[...r]})},placeholder:(0,o.__)("Tab","snow-monkey-blocks")})})]},`${l}-${e}`)})),(0,n.jsx)("div",{className:"smb-tabs__tab-wrapper",children:(0,n.jsx)("button",{className:"smb-tabs__tab smb-tabs__add-tab",onClick:()=>{const t=(0,s.createBlock)("snow-monkey-blocks/tab-panel"),e=`block-${t.clientId}`;t.attributes.tabPanelId=e,t.attributes.anchor=e,S(t,r.length,l,!1),r.push({tabPanelId:e,anchor:e}),a({tabs:r}),J(e),L(e)},children:(0,n.jsx)(h,{icon:w})})})]}),(0,n.jsx)("div",{...G}),!!T&&!M&&(0,n.jsx)("style",{children:`[data-tabs-id="${j}"] > .smb-tabs__body > .smb-tab-panel:not(#${T}) {display: none !important}`}),!!T&&M&&(0,n.jsxs)("style",{children:[r.map(((t,a)=>`[data-tabs-id="${j}"] > .smb-tabs__body > .smb-tab-panel:nth-child(${a+1}) {left: ${-100*a}%}`)),`[data-tabs-id="${j}"] > .smb-tabs__body > .smb-tab-panel:not(#${T}) {visibility: hidden !important}`]})]})]})},save:function({attributes:t,className:a}){const{tabs:e,matchHeight:s,tabsJustification:o,tabsId:l,orientation:i}=t,r="vertical"===i||"horizontal"===i&&"true"===s,d=b()("smb-tabs",a);return(0,n.jsxs)("div",{...c.useBlockProps.save({className:d}),"data-tabs-id":l,"data-orientation":i,"data-match-height":r?"true":s,"data-tabs-justification":"horizontal"===i?o:void 0,children:[0<e.length&&(0,n.jsx)("div",{className:"smb-tabs__tabs",role:"tablist",children:e.map(((t,a)=>{const e=(0,c.__experimentalGetColorClassesAndStyles)(t);return(0,n.jsx)("div",{className:"smb-tabs__tab-wrapper",id:`smb-tab-for-${t?.anchor}`,children:(0,n.jsx)(c.RichText.Content,{tagName:"button",value:t.title,className:b()("smb-tabs__tab",e?.className),style:e?.style,role:"tab","aria-controls":t?.anchor,"aria-selected":0===a?"true":"false"})},a)}))}),(0,n.jsx)("div",{...c.useInnerBlocksProps.save({className:"smb-tabs__body"})}),r&&(0,n.jsx)("style",{children:e.map(((t,a)=>`[data-tabs-id="${l}"] > .smb-tabs__body > .smb-tab-panel:nth-child(${a+1}) {left: ${-100*a}%}`))})]})},deprecated:N,styles:[{name:"default",label:(0,o.__)("Default","snow-monkey-blocks"),isDefault:!0},{name:"simple",label:(0,o.__)("Simple","snow-monkey-blocks")},{name:"line",label:(0,o.__)("Line","snow-monkey-blocks")}]})},6942:(t,a)=>{var e;!function(){"use strict";var s={}.hasOwnProperty;function o(){for(var t="",a=0;a<arguments.length;a++){var e=arguments[a];e&&(t=l(t,n(e)))}return t}function n(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return o.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var a="";for(var e in t)s.call(t,e)&&t[e]&&(a=l(a,e));return a}function l(t,a){return a?t?t+" "+a:t+a:t}t.exports?(o.default=o,t.exports=o):void 0===(e=function(){return o}.apply(a,[]))||(t.exports=e)}()}},e={};function s(t){var o=e[t];if(void 0!==o)return o.exports;var n=e[t]={exports:{}};return a[t](n,n.exports,s),n.exports}s.m=a,t=[],s.O=(a,e,o,n)=>{if(!e){var l=1/0;for(c=0;c<t.length;c++){for(var[e,o,n]=t[c],i=!0,r=0;r<e.length;r++)(!1&n||l>=n)&&Object.keys(s.O).every((t=>s.O[t](e[r])))?e.splice(r--,1):(i=!1,n<l&&(l=n));if(i){t.splice(c--,1);var b=o();void 0!==b&&(a=b)}}return a}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[e,o,n]},s.n=t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return s.d(a,{a}),a},s.d=(t,a)=>{for(var e in a)s.o(a,e)&&!s.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:a[e]})},s.o=(t,a)=>Object.prototype.hasOwnProperty.call(t,a),(()=>{var t={1881:0,3293:0};s.O.j=a=>0===t[a];var a=(a,e)=>{var o,n,[l,i,r]=e,b=0;if(l.some((a=>0!==t[a]))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(r)var c=r(s)}for(a&&a(e);b<l.length;b++)n=l[b],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(c)},e=globalThis.webpackChunk=globalThis.webpackChunk||[];e.forEach(a.bind(null,0)),e.push=a.bind(null,e.push.bind(e))})();var o=s.O(void 0,[3293],(()=>s(7931)));o=s.O(o)})();