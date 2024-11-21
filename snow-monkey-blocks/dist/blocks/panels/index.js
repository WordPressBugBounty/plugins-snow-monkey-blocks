(()=>{var e,t={779:(e,t,s)=>{"use strict";const a=window.wp.blocks,l=JSON.parse('{"UU":"snow-monkey-blocks/panels","uK":{"sm":{"type":"number","default":1},"md":{"type":"number","default":1},"lg":{"type":"number","default":2},"imagePadding":{"type":"boolean","default":false},"itemTitleTagName":{"type":"string","default":"div"},"contentJustification":{"type":"string"},"isGlue":{"type":"boolean","default":false},"gap":{"type":"string","default":""},"templateLock":{"type":["string","boolean"],"enum":["all","insert","contentOnly",false]}}}'),n=window.ReactJSXRuntime,i=(0,n.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,n.jsx)("path",{d:"M3,3v8h8V3Zm7,7H4V4h6Z"}),(0,n.jsx)("path",{d:"M13,3v8h8V3Zm7,7H14V4h6Z"}),(0,n.jsx)("path",{d:"M3,13v8h8V13Zm7,7H4V14h6Z"}),(0,n.jsx)("path",{d:"M13,13v8h8V13Zm7,7H14V14h6Z"})]});var o=s(6942),r=s.n(o);const m=window.wp.blockEditor,c=window.wp.components,u=window.wp.data,d=window.wp.i18n,g=window.lodash,p=(e,t=0,s=null)=>(e=Number(e),(isNaN(e)||e<t)&&(e=t),null!==s&&e>s&&(e=s),e);function _(e){const{desktop:t,tablet:s,mobile:a}=e,l=[];return t&&l.push({name:"desktop",title:(0,n.jsx)(c.Dashicon,{icon:"desktop"})}),s&&l.push({name:"tablet",title:(0,n.jsx)(c.Dashicon,{icon:"tablet"})}),a&&l.push({name:"mobile",title:(0,n.jsx)(c.Dashicon,{icon:"smartphone"})}),(0,n.jsx)(c.TabPanel,{className:"smb-inspector-tabs",tabs:l,children:e=>{if(e.name){if("desktop"===e.name)return t();if("tablet"===e.name)return s();if("mobile"===e.name)return a()}}})}const b=["snow-monkey-blocks/panels-item","snow-monkey-blocks/panels-item-horizontal","snow-monkey-blocks/panels-item-free","snow-monkey-blocks/panels-item-block-link"],h=["left","center","right","space-between"],f=l.uK,x=[{attributes:{...f},save({attributes:e}){const{sm:t,md:s,lg:a,imagePadding:l}=e;return(0,n.jsx)("div",{className:"smb-panels","data-image-padding":l,children:(0,n.jsx)("div",{className:"c-row c-row--margin c-row--fill","data-columns":t,"data-md-columns":s,"data-lg-columns":a,children:(0,n.jsx)(m.InnerBlocks.Content,{})})})}},{attributes:{...f,columns:{type:"number",default:2},items:{type:"array",source:"query",default:[],selector:".smb-panels__item",query:{title:{source:"html",selector:".smb-panels__item__title"},summary:{source:"html",selector:".smb-panels__item__content"},linkLabel:{source:"html",selector:".smb-panels__item__link"},linkURL:{type:"string",source:"attribute",attribute:"href",default:""},linkTarget:{type:"string",source:"attribute",attribute:"target",default:"_self"},imageID:{type:"number",source:"attribute",selector:".smb-panels__item__figure > img",attribute:"data-image-id",default:0},imageURL:{type:"string",source:"attribute",selector:".smb-panels__item__figure > img",attribute:"src",default:""}}}},migrate:e=>[{sm:e.sm,md:e.md,lg:e.lg,imagePadding:Boolean(e.imagePadding)},(()=>{const t=void 0===e.items?0:e.items.length;return(0,g.times)(t,(t=>{const s=(0,g.get)(e.items,[t,"title"],""),l=(0,g.get)(e.items,[t,"summary"],""),n=(0,g.get)(e.items,[t,"linkLabel"],""),i=(0,g.get)(e.items,[t,"linkURL"],""),o=(0,g.get)(e.items,[t,"linkTarget"],"_self"),r=(0,g.get)(e.items,[t,"imageID"],0),m=(0,g.get)(e.items,[t,"imageURL"],"");return(0,a.createBlock)("snow-monkey-blocks/panels-item",{titleTagName:e.itemTitleTagName,title:s,summary:l,linkLabel:n,linkURL:i,linkTarget:o,imageID:Number(r),imageURL:m})}))})()],save({attributes:e}){const{sm:t,md:s,lg:a,imagePadding:l,itemTitleTagName:i,items:o}=e,r=void 0===e.items?0:e.items.length,c=()=>{let e=[];return e.push("c-row__col"),e.push(`c-row__col--1-${t}`),e.push(`c-row__col--md-1-${s}`),e.push(`c-row__col--lg-1-${a}`),e=e.join(" "),e};return(0,n.jsx)("div",{className:`smb-panels smb-panels--sm-${t} smb-panels--md-${s} smb-panels--lg-${a}`,"data-image-padding":l,children:(0,n.jsx)("div",{className:"c-row c-row--margin c-row--fill",children:(0,g.times)(r,(e=>{const t=(0,g.get)(o,[e,"title"],""),s=(0,g.get)(o,[e,"summary"],""),a=(0,g.get)(o,[e,"linkLabel"],""),l=(0,g.get)(o,[e,"linkURL"],""),r=(0,g.get)(o,[e,"linkTarget"],"_self"),u=(0,g.get)(o,[e,"imageID"],0),d=(0,g.get)(o,[e,"imageURL"],"");return(0,n.jsx)("div",{className:c(),children:(p=(0,n.jsxs)(n.Fragment,{children:[!!u&&(0,n.jsx)("div",{className:"smb-panels__item__figure",children:(0,n.jsx)("img",{src:d,alt:"",className:`wp-image-${u}`,"data-image-id":u})}),(0,n.jsxs)("div",{className:"smb-panels__item__body",children:[!m.RichText.isEmpty(t)&&(0,n.jsx)(m.RichText.Content,{tagName:i,className:"smb-panels__item__title",value:t}),!m.RichText.isEmpty(s)&&(0,n.jsx)("div",{className:"smb-panels__item__content",children:(0,n.jsx)(m.RichText.Content,{value:s})}),!m.RichText.isEmpty(a)&&(0,n.jsx)("div",{className:"smb-panels__item__action",children:(0,n.jsx)("div",{className:"smb-panels__item__link",children:(0,n.jsx)(m.RichText.Content,{value:a})})})]})]}),l?(0,n.jsx)("a",{className:"smb-panels__item",href:l,target:r,children:p}):(0,n.jsx)("div",{className:"smb-panels__item",href:l,target:r,children:p}))});var p}))})})}},{attributes:{columns:{type:"number",default:2},sm:{type:"number",default:1},md:{type:"number",default:1},lg:{type:"number",default:2},imagePadding:{type:"boolean",default:!1},items:{type:"array",source:"query",default:[],selector:".smb-panels__item",query:{title:{source:"html",selector:".smb-panels__item__title"},summary:{source:"html",selector:".smb-panels__item__content"},linkLabel:{source:"html",selector:".smb-panels__item__link"},linkURL:{type:"string",source:"attribute",attribute:"href",default:""},linkTarget:{type:"string",source:"attribute",attribute:"target",default:"_self"},imageID:{type:"number",source:"attribute",selector:".smb-panels__item__figure > img",attribute:"data-image-id",default:0},imageURL:{type:"string",source:"attribute",selector:".smb-panels__item__figure > img",attribute:"src",default:""}}}},save({attributes:e}){const{columns:t,sm:s,md:a,lg:l,imagePadding:i,items:o}=e;return(0,n.jsx)("div",{className:`smb-panels smb-panels--sm-${s} smb-panels--md-${a} smb-panels--lg-${l}`,"data-image-padding":i,children:(0,n.jsx)("div",{className:"c-row c-row--margin c-row--fill",children:(0,g.times)(t,(e=>{const t=(0,g.get)(o,[e,"title"],""),i=(0,g.get)(o,[e,"summary"],""),r=(0,g.get)(o,[e,"linkLabel"],""),c=(0,g.get)(o,[e,"linkURL"],""),u=(0,g.get)(o,[e,"linkTarget"],"_self"),d=(0,g.get)(o,[e,"imageID"],0),p=(0,g.get)(o,[e,"imageURL"],"");return(0,n.jsx)("div",{className:(()=>{let e=[];return e.push("c-row__col"),e.push(`c-row__col--1-${s}`),s===a&&e.push(`c-row__col--1-${a}`),e.push(`c-row__col--lg-1-${l}`),e=e.join(" "),e})(),children:(_=(0,n.jsxs)(n.Fragment,{children:[!!d&&(0,n.jsx)("div",{className:"smb-panels__item__figure",children:(0,n.jsx)("img",{src:p,alt:"","data-image-id":d})}),(0,n.jsxs)("div",{className:"smb-panels__item__body",children:[!m.RichText.isEmpty(t)&&(0,n.jsx)("div",{className:"smb-panels__item__title",children:(0,n.jsx)(m.RichText.Content,{value:t})}),!m.RichText.isEmpty(i)&&(0,n.jsx)("div",{className:"smb-panels__item__content",children:(0,n.jsx)(m.RichText.Content,{value:i})}),!m.RichText.isEmpty(r)&&(0,n.jsx)("div",{className:"smb-panels__item__action",children:(0,n.jsx)("div",{className:"smb-panels__item__link",children:(0,n.jsx)(m.RichText.Content,{value:r})})})]})]}),c?(0,n.jsx)("a",{className:"smb-panels__item",href:c,target:u,children:_}):(0,n.jsx)("div",{className:"smb-panels__item",href:c,target:u,children:_}))});var _}))})})}}],k={innerBlocks:[{name:"snow-monkey-blocks/panels-item",attributes:{title:"Lorem ipsum",summary:"sed do eiusmod tempor incididunt",imageURL:`${smb.pluginUrl}/dist/img/photos/beach-sand-coast2756.jpg`,imageID:1}},{name:"snow-monkey-blocks/panels-item",attributes:{title:"dolor sit amet",summary:"ut labore et dolore magna aliqua",imageURL:`${smb.pluginUrl}/dist/img/photos/building-architecture-sky2096.jpg`,imageID:1}}]};(0,a.registerBlockType)(l.UU,{icon:{foreground:"#cd162c",src:i},edit:function({attributes:e,setAttributes:t,className:s,clientId:a}){const{sm:i,md:o,lg:g,imagePadding:f,contentJustification:x,isGlue:k,gap:w,templateLock:v}=e,y=(0,u.useSelect)((e=>!!e("core/block-editor").getBlock(a)?.innerBlocks?.length),[a]),j=r()("smb-panels",s,{"smb-panels--glue":k&&!w}),N=(0,m.useBlockProps)({className:j}),T=x&&"left"!==x?x.replace("space-",""):void 0,C=r()("c-row","c-row--fill",{"c-row--margin":!(k||"m"!==w&&w),[`c-row--${T}`]:x,[`c-row--margin-${w}`]:!k&&("s"===w||"l"===w)}),R=(0,m.useInnerBlocksProps)({className:C},{allowedBlocks:b,templateLock:v,renderAppender:y?void 0:m.InnerBlocks.ButtonBlockAppender,orientation:"horizontal"}),B=[{label:"S",value:1},{label:"M",value:2},{label:"L",value:3}];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m.InspectorControls,{children:(0,n.jsxs)(c.__experimentalToolsPanel,{label:(0,d.__)("Block settings","snow-monkey-blocks"),children:[(0,n.jsx)(c.__experimentalToolsPanelItem,{hasValue:()=>g!==l.uK.lg.default||o!==l.uK.md.default||i!==l.uK.sm.default,isShownByDefault:!0,label:(0,d.__)("Columns per row","snow-monkey-blocks"),onDeselect:()=>t({lg:l.uK.lg.default,md:l.uK.md.default,sm:l.uK.sm.default}),children:(0,n.jsx)(_,{desktop:()=>(0,n.jsx)(c.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,d.__)("Columns per row (Large window)","snow-monkey-blocks"),value:g,onChange:e=>t({lg:p(e,1,6)}),min:"1",max:"6"}),tablet:()=>(0,n.jsx)(c.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,d.__)("Columns per row (Medium window)","snow-monkey-blocks"),value:o,onChange:e=>t({md:p(e,1,6)}),min:"1",max:"6"}),mobile:()=>(0,n.jsx)(c.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,d.__)("Columns per row (Small window)","snow-monkey-blocks"),value:i,onChange:e=>t({sm:p(e,1,6)}),min:"1",max:"6"})})}),(0,n.jsx)(c.__experimentalToolsPanelItem,{hasValue:()=>f!==l.uK.imagePadding.default,isShownByDefault:!0,label:(0,d.__)("Set padding around images","snow-monkey-blocks"),onDeselect:()=>t({imagePadding:l.uK.imagePadding.default}),children:(0,n.jsx)(c.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,d.__)("Set padding around images","snow-monkey-blocks"),checked:f,onChange:e=>t({imagePadding:e})})}),!w&&(0,n.jsx)(c.__experimentalToolsPanelItem,{hasValue:()=>k!==l.uK.isGlue.default,isShownByDefault:!0,label:(0,d.__)("Glue each item together","snow-monkey-blocks"),onDeselect:()=>t({isGlue:l.uK.isGlue.default}),children:(0,n.jsx)(c.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,d.__)("Glue each item together","snow-monkey-blocks"),checked:k,onChange:e=>t({isGlue:e})})})]})}),!k&&(0,n.jsx)(m.InspectorControls,{group:"dimensions",children:(0,n.jsx)(c.__experimentalToolsPanelItem,{hasValue:()=>w!==l.uK.gap.default,isShownByDefault:!0,label:(0,d.__)("Gap","snow-monkey-blocks"),onDeselect:()=>t({gap:l.uK.gap.default}),panelId:a,children:(0,n.jsx)(c.BaseControl,{__nextHasNoMarginBottom:!0,id:"snow-monkey-blocks/panels/gap",label:(0,d.__)("Gap","snow-monkey-blocks"),className:"spacing-sizes-control",children:(0,n.jsx)(c.RangeControl,{__nextHasNoMarginBottom:!0,className:"spacing-sizes-control__range-control",value:B.filter((e=>e.label?.toLowerCase()===w))?.[0]?.value,resetFallbackValue:void 0,onChange:e=>t({gap:B.filter((t=>t.value===e))?.[0]?.label?.toLowerCase()}),withInputField:!1,min:1,max:3,marks:!0,renderTooltipContent:e=>B.filter((t=>t.value===e))?.[0]?.label?.toUpperCase(),hideLabelFromVision:!0})})})}),(0,n.jsx)(m.BlockControls,{group:"block",children:(0,n.jsx)(m.JustifyToolbar,{allowedControls:h,value:x,onChange:e=>t({contentJustification:e})})}),(0,n.jsx)("div",{...N,"data-image-padding":f,children:(0,n.jsx)("div",{...R,"data-columns":i,"data-md-columns":o,"data-lg-columns":g})})]})},save:function({attributes:e,className:t}){const{sm:s,md:a,lg:l,imagePadding:i,contentJustification:o,isGlue:c,gap:u}=e,d=r()("smb-panels",t,{"smb-panels--glue":c&&!u}),g=o&&"left"!==o?o.replace("space-",""):void 0,p=r()("c-row","c-row--fill",{"c-row--margin":!(c||"m"!==u&&u),[`c-row--${g}`]:o,[`c-row--margin-${u}`]:!c&&("s"===u||"l"===u)});return(0,n.jsx)("div",{...m.useBlockProps.save({className:d}),"data-image-padding":i,children:(0,n.jsx)("div",{...m.useInnerBlocksProps.save({className:p}),"data-columns":s,"data-md-columns":a,"data-lg-columns":l})})},deprecated:x,example:k})},6942:(e,t)=>{var s;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(e=i(e,n(s)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return l.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var s in e)a.call(e,s)&&e[s]&&(t=i(t,s));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(l.default=l,e.exports=l):void 0===(s=function(){return l}.apply(t,[]))||(e.exports=s)}()}},s={};function a(e){var l=s[e];if(void 0!==l)return l.exports;var n=s[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,e=[],a.O=(t,s,l,n)=>{if(!s){var i=1/0;for(c=0;c<e.length;c++){s=e[c][0],l=e[c][1],n=e[c][2];for(var o=!0,r=0;r<s.length;r++)(!1&n||i>=n)&&Object.keys(a.O).every((e=>a.O[e](s[r])))?s.splice(r--,1):(o=!1,n<i&&(i=n));if(o){e.splice(c--,1);var m=l();void 0!==m&&(t=m)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[s,l,n]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={6560:0,8536:0};a.O.j=t=>0===e[t];var t=(t,s)=>{var l,n,i=s[0],o=s[1],r=s[2],m=0;if(i.some((t=>0!==e[t]))){for(l in o)a.o(o,l)&&(a.m[l]=o[l]);if(r)var c=r(a)}for(t&&t(s);m<i.length;m++)n=i[m],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(c)},s=self.webpackChunk=self.webpackChunk||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var l=a.O(void 0,[8536],(()=>a(779)));l=a.O(l)})();