(()=>{var e={6942:(e,t)=>{var s;!function(){"use strict";var i={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(e=n(e,l(s)))}return e}function l(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var s in e)i.call(e,s)&&e[s]&&(t=n(t,s));return t}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(s=function(){return a}.apply(t,[]))||(e.exports=s)}()}},t={};function s(i){var a=t[i];if(void 0!==a)return a.exports;var l=t[i]={exports:{}};return e[i](l,l.exports,s),l.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"UU":"snow-monkey-blocks/items-item-standard","uK":{"titleTagName":{"type":"string","default":"div"},"title":{"type":"string","source":"html","selector":".smb-items__item__title","default":""},"lede":{"type":"string","source":"html","selector":".smb-items__item__lede","default":""},"summary":{"type":"string","source":"html","selector":".smb-items__item__content","default":""},"url":{"type":"string","source":"attribute","selector":".smb-items__item__action a","attribute":"href","default":""},"target":{"type":"string","source":"attribute","selector":".smb-items__item__action a","attribute":"target","default":"_self"},"displayImage":{"type":"boolean","default":false},"imageID":{"type":"number","default":0},"imageURL":{"type":"string","source":"attribute","selector":".smb-items__item__figure > img","attribute":"src","default":""},"imageAlt":{"type":"string","source":"attribute","selector":".smb-items__item__figure > img","attribute":"alt","default":""},"imageWidth":{"type":"string","source":"attribute","selector":".smb-items__item__figure > img","attribute":"width","default":""},"imageHeight":{"type":"string","source":"attribute","selector":".smb-items__item__figure > img","attribute":"height","default":""},"imageSizeSlug":{"type":"string","default":"full"},"displayBtn":{"type":"boolean","default":false},"btnLabel":{"type":"string","source":"html","selector":".smb-items__item__btn > .smb-btn__label","default":""},"btnBackgroundColor":{"type":"string"},"btnBackgroundGradientColor":{"type":"string"},"btnTextColor":{"type":"string"},"btnSize":{"type":"string","default":""},"btnBorderRadius":{"type":"string"},"btnWrap":{"type":"boolean","default":false}},"xY":{"html":false,"color":{"__experimentalSkipSerialization":true,"background":true,"text":true,"link":true}}}'),i=window.ReactJSXRuntime,a=(0,i.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,i.jsx)("rect",{x:"1",y:"15.5",width:"10",height:"1"}),(0,i.jsx)("rect",{x:"1",y:"17.5",width:"8",height:"1"}),(0,i.jsx)("rect",{x:"1",y:"19.5",width:"8",height:"1"}),(0,i.jsx)("path",{d:"M1,4.06v8.88a.56.56,0,0,0,.56.56h8.88a.56.56,0,0,0,.56-.56V4.06a.56.56,0,0,0-.56-.56H1.56A.56.56,0,0,0,1,4.06m8.89,8.61H2.11a.29.29,0,0,1-.28-.28V4.61a.29.29,0,0,1,.28-.28H9.89a.29.29,0,0,1,.28.28v7.78a.29.29,0,0,1-.28.28"}),(0,i.jsx)("path",{d:"M1.83,10.05,4,8.45a.15.15,0,0,1,.16,0L5.85,9.52A.13.13,0,0,0,6,9.5l2.11-2a.14.14,0,0,1,.19,0l2.21,2.15v.84L8.32,8.32a.14.14,0,0,0-.19,0L6,10.34a.13.13,0,0,1-.17,0L4.18,9.29a.14.14,0,0,0-.16,0L1.83,10.88Z"}),(0,i.jsx)("rect",{x:"1",y:"3.5",width:"10",height:"10",fill:"none"}),(0,i.jsx)("rect",{x:"13",y:"15.5",width:"10",height:"1"}),(0,i.jsx)("rect",{x:"13",y:"17.5",width:"8",height:"1"}),(0,i.jsx)("rect",{x:"13",y:"19.5",width:"8",height:"1"}),(0,i.jsx)("path",{d:"M13,4.06v8.88a.56.56,0,0,0,.56.56h8.88a.56.56,0,0,0,.56-.56V4.06a.56.56,0,0,0-.56-.56H13.56a.56.56,0,0,0-.56.56m8.89,8.61H14.11a.29.29,0,0,1-.28-.28V4.61a.29.29,0,0,1,.28-.28h7.78a.29.29,0,0,1,.28.28v7.78a.29.29,0,0,1-.28.28"}),(0,i.jsx)("path",{d:"M13.83,10.05,16,8.45a.15.15,0,0,1,.16,0l1.67,1.07a.13.13,0,0,0,.17,0l2.11-2a.14.14,0,0,1,.19,0l2.21,2.15v.84L20.32,8.32a.14.14,0,0,0-.19,0l-2.11,2a.13.13,0,0,1-.17,0L16.18,9.29a.14.14,0,0,0-.16,0l-2.19,1.59Z"}),(0,i.jsx)("rect",{x:"13",y:"3.5",width:"10",height:"10",fill:"none"})]});var l=s(6942),n=s.n(l);const o=window.lodash,r=window.wp.components,m=window.wp.blockEditor,c=window.wp.element,d=window.wp.data,b=window.wp.i18n,_=window.wp.primitives,u=(0,i.jsx)(_.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,i.jsx)(_.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})}),g=({id:e,src:t,allowedTypes:s,accept:a,onSelect:l,onSelectURL:n,onRemove:o})=>(0,i.jsxs)(m.BlockControls,{group:"inline",children:[(0,i.jsx)(m.MediaReplaceFlow,{mediaId:e,mediaURL:t,allowedTypes:s,accept:a,onSelect:l,onSelectURL:n}),!!t&&!!o&&(0,i.jsx)(r.ToolbarButton,{onClick:o,children:(0,b.__)("Release","snow-monkey-blocks")})]}),h=({src:e,alt:t,id:s,style:a,width:l,height:n})=>(0,i.jsx)("img",{src:e,alt:t,className:`wp-image-${s}`,style:a,width:l,height:n}),x=({src:e,style:t,width:s,height:a})=>(0,i.jsx)("video",{src:e,style:t,width:s,height:a}),p=(0,c.memo)((({id:e,src:t,alt:s,url:a,width:l,height:n,target:r,allowedTypes:m,accept:c,onSelect:d,onSelectURL:b,onRemove:_,mediaType:u,style:p,rel:y,linkClass:v})=>{let k;if("image"===u){let m;k=(0,i.jsx)(h,{src:t,alt:s,id:e,style:p,width:l,height:n}),m=y?(0,o.isEmpty)(y)?void 0:y:"_self"!==r&&r?"noopener noreferrer":void 0,a&&(k=(0,i.jsx)("span",{href:a,target:"_self"===r?void 0:r,rel:m,className:v,children:k}))}else"video"===u&&(k=(0,i.jsx)(x,{src:t,style:p,width:l,height:n}));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g,{id:e,src:t,allowedTypes:m,accept:c,onSelect:d,onSelectURL:b,onRemove:_}),k]})}),((e,t)=>{const s=Object.keys(e);for(const i of s)if(e[i]!==t[i])return!1;return!0}));function y(e){const{src:t,onSelect:s,onSelectURL:a,mediaType:l,allowedTypes:n=["image"]}=e,o=!l&&t?"image":l;let r=(0,b.__)("Media","snow-monkey-blocks");1===n.length&&("image"===n[0]?r=(0,b.__)("Image","snow-monkey-blocks"):"video"===n[0]&&(r=(0,b.__)("Video","snow-monkey-blocks")));const d=(0,c.useMemo)((()=>n.map((e=>`${e}/*`)).join(",")),[n]);return t?(0,i.jsx)(p,{...e,accept:d,allowedTypes:n,mediaType:o}):(0,i.jsx)(m.MediaPlaceholder,{icon:"format-image",labels:{title:r},onSelect:s,onSelectURL:a,accept:d,allowedTypes:n})}const v=[{label:(0,b._x)("Thumbnail","Image size option for resolution control"),value:"thumbnail"},{label:(0,b._x)("Medium","Image size option for resolution control"),value:"medium"},{label:(0,b._x)("Large","Image size option for resolution control"),value:"large"},{label:(0,b._x)("Full Size","Image size option for resolution control"),value:"full"}];function k({panelId:e,value:t,onChange:s,options:a=v,defaultValue:l=v[0].value,isShownByDefault:n=!0,withToolsPanelItem:o=!0}){const m=null!=t?t:l,c=()=>(0,i.jsx)(r.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,b.__)("Resolution"),value:m,options:a,onChange:s,help:(0,b.__)("Select the size of the source image."),size:"__unstable-large"});return o?(0,i.jsx)(r.__experimentalToolsPanelItem,{hasValue:()=>m!==l,label:(0,b.__)("Resolution"),onDeselect:()=>s(l),isShownByDefault:n,panelId:e,children:(0,i.jsx)(c,{})}):(0,i.jsx)(c,{})}const f=["image"],j="full",w=t.uK,N=t.xY,R=[{attributes:{...w,btnBorderRadius:{type:"number"}},supports:{...N},migrate(e){const{btnLabel:t,url:s,imageURL:i,btnBorderRadius:a}=e;return m.RichText.isEmpty(t)&&!s||(e.displayBtn=!0),i&&(e.displayImage=!0),e.btnBorderRadius=String(a).match(/^\d+$/)?`${a}px`:a,e},save({attributes:e,className:t}){const{titleTagName:s,title:a,lede:l,summary:o,url:r,target:c,imageID:d,imageURL:b,imageAlt:_,imageWidth:u,imageHeight:g,btnLabel:h,btnBackgroundColor:x,btnBackgroundGradientColor:p,btnTextColor:y,btnSize:v,btnBorderRadius:k,btnWrap:f}=e,j=n()("c-row__col",t),w=n()("smb-items__item__btn","smb-btn",{[`smb-btn--${v}`]:!!v,"smb-btn--wrap":f}),N={"--smb-btn--background-color":x||void 0,"--smb-btn--background-image":p||void 0,"--smb-btn--border-radius":String(k).match(/^\d+$/)?`${k}px`:k,"--smb-btn--color":y||void 0};return(0,i.jsx)("div",{...m.useBlockProps.save({className:j}),children:(0,i.jsxs)("div",{className:"smb-items__item",children:[!!b&&(0,i.jsx)("div",{className:"smb-items__item__figure",children:(0,i.jsx)("img",{src:b,alt:_,width:!!u&&u,height:!!g&&g,className:`wp-image-${d}`})}),(0,i.jsxs)("div",{className:"smb-items__item__body",children:["none"!==s&&(0,i.jsx)(m.RichText.Content,{tagName:s,className:"smb-items__item__title",value:a}),!m.RichText.isEmpty(l)&&(0,i.jsx)("div",{className:"smb-items__item__lede",children:(0,i.jsx)(m.RichText.Content,{value:l})}),!m.RichText.isEmpty(o)&&(0,i.jsx)("div",{className:"smb-items__item__content",children:(0,i.jsx)(m.RichText.Content,{value:o})}),!m.RichText.isEmpty(h)&&!!r&&(0,i.jsx)("div",{className:"smb-items__item__action",children:(0,i.jsx)("a",{className:w,href:r,style:N,target:"_self"===c?void 0:c,rel:"_self"===c?void 0:"noopener noreferrer",children:(0,i.jsx)("span",{className:"smb-btn__label",children:(0,i.jsx)(m.RichText.Content,{value:h})})})})]})]})})}},{attributes:{...w,btnBorderRadius:{type:"number"}},supports:{...N},save({attributes:e,className:t}){const{titleTagName:s,title:a,lede:l,summary:o,url:r,target:c,imageID:d,imageURL:b,imageAlt:_,imageWidth:u,imageHeight:g,btnLabel:h,btnBackgroundColor:x,btnBackgroundGradientColor:p,btnTextColor:y,btnSize:v,btnBorderRadius:k,btnWrap:f}=e,j=n()("c-row__col",t),w=n()("smb-items__item__btn","smb-btn",{[`smb-btn--${v}`]:!!v,"smb-btn--wrap":f}),N={"--smb-btn--background-color":x||void 0,"--smb-btn--background-image":p||void 0,"--smb-btn--border-radius":void 0!==k?`${k}px`:void 0,"--smb-btn--color":y||void 0};return(0,i.jsx)("div",{...m.useBlockProps.save({className:j}),children:(0,i.jsxs)("div",{className:"smb-items__item",children:[!!b&&(0,i.jsx)("div",{className:"smb-items__item__figure",children:(0,i.jsx)("img",{src:b,alt:_,width:!!u&&u,height:!!g&&g,className:`wp-image-${d}`})}),(0,i.jsxs)("div",{className:"smb-items__item__body",children:["none"!==s&&(0,i.jsx)(m.RichText.Content,{tagName:s,className:"smb-items__item__title",value:a}),!m.RichText.isEmpty(l)&&(0,i.jsx)("div",{className:"smb-items__item__lede",children:(0,i.jsx)(m.RichText.Content,{value:l})}),!m.RichText.isEmpty(o)&&(0,i.jsx)("div",{className:"smb-items__item__content",children:(0,i.jsx)(m.RichText.Content,{value:o})}),!m.RichText.isEmpty(h)&&!!r&&(0,i.jsx)("div",{className:"smb-items__item__action",children:(0,i.jsx)("a",{className:w,href:r,style:N,target:"_self"===c?void 0:c,rel:"_self"===c?void 0:"noopener noreferrer",children:(0,i.jsx)("span",{className:"smb-btn__label",children:(0,i.jsx)(m.RichText.Content,{value:h})})})})]})]})})}},{attributes:{...w,btnBorderRadius:{type:"number"}},supports:{...N},save({attributes:e,className:t}){const{titleTagName:s,title:a,lede:l,summary:o,url:r,target:c,imageID:d,imageURL:b,imageAlt:_,imageWidth:u,imageHeight:g,btnLabel:h,btnBackgroundColor:x,btnBackgroundGradientColor:p,btnTextColor:y,btnSize:v,btnBorderRadius:k,btnWrap:f}=e,j=n()("c-row__col",t),w=n()("smb-items__item__btn","smb-btn",{[`smb-btn--${v}`]:!!v,"smb-btn--wrap":f}),N={color:y||void 0},R={backgroundColor:x||void 0,backgroundImage:p||void 0,borderRadius:void 0!==k?`${k}px`:void 0};return(0,i.jsx)("div",{...m.useBlockProps.save({className:j}),children:(0,i.jsxs)("div",{className:"smb-items__item",children:[!!b&&(0,i.jsx)("div",{className:"smb-items__item__figure",children:(0,i.jsx)("img",{src:b,alt:_,width:!!u&&u,height:!!g&&g,className:`wp-image-${d}`})}),(0,i.jsxs)("div",{className:"smb-items__item__body",children:["none"!==s&&(0,i.jsx)(m.RichText.Content,{tagName:s,className:"smb-items__item__title",value:a}),!m.RichText.isEmpty(l)&&(0,i.jsx)("div",{className:"smb-items__item__lede",children:(0,i.jsx)(m.RichText.Content,{value:l})}),!m.RichText.isEmpty(o)&&(0,i.jsx)("div",{className:"smb-items__item__content",children:(0,i.jsx)(m.RichText.Content,{value:o})}),!m.RichText.isEmpty(h)&&!!r&&(0,i.jsx)("div",{className:"smb-items__item__action",children:(0,i.jsx)("a",{className:w,href:r,style:R,target:"_self"===c?void 0:c,rel:"_self"===c?void 0:"noopener noreferrer",children:(0,i.jsx)("span",{className:"smb-btn__label",style:N,children:(0,i.jsx)(m.RichText.Content,{value:h})})})})]})]})})}},{attributes:{...w,url:{type:"string",default:""},target:{type:"string",default:"_self"},btnBorderRadius:{type:"number"}},save({attributes:e,className:t}){const{titleTagName:s,title:a,lede:l,summary:o,url:r,target:c,imageID:d,imageURL:b,imageAlt:_,imageWidth:u,imageHeight:g,btnLabel:h,btnBackgroundColor:x,btnTextColor:p,btnSize:y,btnBorderRadius:v,btnWrap:k}=e,f=n()("c-row__col",t),j=n()("smb-items__item__btn","smb-btn",{[`smb-btn--${y}`]:!!y,"smb-btn--wrap":k}),w={color:p||void 0},N={backgroundColor:x||void 0,borderRadius:void 0!==v?`${v}px`:void 0};return(0,i.jsx)("div",{...m.useBlockProps.save({className:f}),children:(0,i.jsxs)("div",{className:"smb-items__item",children:[!!b&&(0,i.jsx)("div",{className:"smb-items__item__figure",children:(0,i.jsx)("img",{src:b,alt:_,width:!!u&&u,height:!!g&&g,className:`wp-image-${d}`})}),"none"!==s&&(0,i.jsx)(m.RichText.Content,{tagName:s,className:"smb-items__item__title",value:a}),!m.RichText.isEmpty(l)&&(0,i.jsx)("div",{className:"smb-items__item__lede",children:(0,i.jsx)(m.RichText.Content,{value:l})}),!m.RichText.isEmpty(o)&&(0,i.jsx)("div",{className:"smb-items__item__content",children:(0,i.jsx)(m.RichText.Content,{value:o})}),!m.RichText.isEmpty(h)&&!!r&&(0,i.jsx)("div",{className:"smb-items__item__action",children:(0,i.jsx)("a",{className:j,href:r,style:N,target:"_self"===c?void 0:c,rel:"_self"===c?void 0:"noopener noreferrer",children:(0,i.jsx)("span",{className:"smb-btn__label",style:w,children:(0,i.jsx)(m.RichText.Content,{value:h})})})})]})})}}],T={to:[{type:"block",blocks:["snow-monkey-blocks/items-item-block-link"],transform:t=>(0,e.createBlock)("snow-monkey-blocks/items-item-block-link",t)},{type:"block",blocks:["snow-monkey-blocks/items-banner"],transform:t=>(0,e.createBlock)("snow-monkey-blocks/items-banner",t)},{type:"block",blocks:["snow-monkey-blocks/items-item-free"],transform:t=>(0,e.createBlock)("snow-monkey-blocks/items-item-free",{},[(0,e.createBlock)("core/paragraph",{content:t.summary})])}]};(0,e.registerBlockType)(t.UU,{icon:{foreground:"#cd162c",src:a},edit:function({attributes:e,setAttributes:s,isSelected:a,className:l,clientId:_}){const{titleTagName:g,title:h,lede:x,summary:p,url:v,target:w,displayImage:N,imageID:R,imageURL:T,imageAlt:C,imageWidth:B,imageHeight:S,imageSizeSlug:I,displayBtn:L,btnLabel:z,btnBackgroundColor:D,btnBackgroundGradientColor:H,btnTextColor:W,btnSize:U,btnBorderRadius:P,btnWrap:$}=e,M=(0,m.__experimentalUseColorProps)(e),[E,K]=(0,c.useState)(!1),V=!!v,A="_blank"===w,[G,O]=(0,c.useState)(null),{imageSizes:F,image:Z}=(0,d.useSelect)((e=>{const{getSettings:t}=e("core/block-editor");return{image:R&&a?e("core").getMedia(R,{context:"view"}):null,imageSizes:t()?.imageSizes}}),[a,R,_]),J=F.filter((({slug:e})=>Z?.media_details?.sizes?.[e]?.source_url)).map((({name:e,slug:t})=>({value:t,label:e}))),Y=(0,m.__experimentalUseMultipleOriginColorsAndGradients)(),X=["div","h2","h3","none"],q=n()("c-row__col",l),Q=n()("smb-items__item__btn","smb-btn",{[`smb-btn--${U}`]:!!U,"smb-btn--wrap":$}),ee={"--smb-btn--background-color":D||void 0,"--smb-btn--background-image":H||void 0,"--smb-btn--border-radius":String(P).match(/^\d+$/)?`${P}px`:P,"--smb-btn--color":W||void 0},te=(0,c.useRef)(),se=(0,m.useBlockProps)({className:q});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(m.InspectorControls,{children:[(0,i.jsx)(r.__experimentalToolsPanel,{label:(0,b.__)("Block settings","snow-monkey-blocks"),children:(0,i.jsx)(r.__experimentalToolsPanelItem,{hasValue:()=>g!==t.uK.titleTagName.default,isShownByDefault:!0,label:(0,b.__)("Title tag","snow-monkey-blocks"),onDeselect:()=>s({titleTagName:t.uK.titleTagName.default}),children:(0,i.jsx)(r.BaseControl,{__nextHasNoMarginBottom:!0,label:(0,b.__)("Title tag","snow-monkey-blocks"),id:"snow-monkey-blocks/items-item-standard/title-tag-name",children:(0,i.jsx)("div",{className:"smb-list-icon-selector",children:(0,o.times)(X.length,(e=>(0,i.jsx)(r.Button,{variant:g===X[e]?"primary":"secondary",onClick:()=>s({titleTagName:X[e]}),children:X[e]},e)))})})})}),(0,i.jsxs)(r.__experimentalToolsPanel,{label:(0,b.__)("Image settings","snow-monkey-blocks"),children:[(0,i.jsx)(r.__experimentalToolsPanelItem,{hasValue:()=>N!==t.uK.displayImage.default,isShownByDefault:!0,label:(0,b.__)("Display image","snow-monkey-blocks"),onDeselect:()=>s({displayImage:t.uK.displayImage.default}),children:(0,i.jsx)(r.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,b.__)("Display image","snow-monkey-blocks"),checked:N,onChange:e=>s({displayImage:e})})}),N&&0<J.length&&(0,i.jsx)(k,{defaultValue:t.uK.imageSizeSlug.default,value:I,options:J,onChange:e=>{const t=Z?.media_details?.sizes?.[e]?.source_url,i=Z?.media_details?.sizes?.[e]?.width,a=Z?.media_details?.sizes?.[e]?.height;s({imageURL:t,imageWidth:i,imageHeight:a,imageSizeSlug:e})}})]}),(0,i.jsxs)(r.__experimentalToolsPanel,{label:(0,b.__)("Button settings","snow-monkey-blocks"),children:[(0,i.jsx)(r.__experimentalToolsPanelItem,{hasValue:()=>L!==t.uK.displayBtn.default,isShownByDefault:!0,label:(0,b.__)("Display button","snow-monkey-blocks"),onDeselect:()=>s({displayBtn:t.uK.displayBtn.default}),children:(0,i.jsx)(r.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,b.__)("Display button","snow-monkey-blocks"),checked:L,onChange:e=>s({displayBtn:e})})}),L&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.__experimentalToolsPanelItem,{hasValue:()=>U!==t.uK.btnSize.default,isShownByDefault:!0,label:(0,b.__)("Button size","snow-monkey-blocks"),onDeselect:()=>s({btnSize:t.uK.btnSize.default}),children:(0,i.jsx)(r.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,b.__)("Button size","snow-monkey-blocks"),value:U,onChange:e=>s({btnSize:e}),options:[{value:"",label:(0,b.__)("Normal size","snow-monkey-blocks")},{value:"little-wider",label:(0,b.__)("Litle wider","snow-monkey-blocks")},{value:"wider",label:(0,b.__)("Wider","snow-monkey-blocks")},{value:"more-wider",label:(0,b.__)("More wider","snow-monkey-blocks")},{value:"full",label:(0,b.__)("Full size","snow-monkey-blocks")}]})}),(0,i.jsx)(r.__experimentalToolsPanelItem,{hasValue:()=>P!==t.uK.btnBorderRadius.default,isShownByDefault:!0,label:(0,b.__)("Border radius","snow-monkey-blocks"),onDeselect:()=>s({btnBorderRadius:t.uK.btnBorderRadius.default}),children:(0,i.jsx)("div",{className:"smb-border-radius-control",children:(0,i.jsx)(m.__experimentalBorderRadiusControl,{values:P,onChange:e=>{s({btnBorderRadius:e})}})})}),(0,i.jsx)(r.__experimentalToolsPanelItem,{hasValue:()=>$!==t.uK.btnWrap.default,isShownByDefault:!0,label:(0,b.__)("Wrap","snow-monkey-blocks"),onDeselect:()=>s({btnWrap:t.uK.btnWrap.default}),children:(0,i.jsx)(r.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,b.__)("Wrap","snow-monkey-blocks"),checked:$,onChange:e=>s({btnWrap:e})})}),(0,i.jsx)("div",{className:"smb-color-gradient-settings-dropdown",children:(0,i.jsx)(m.__experimentalColorGradientSettingsDropdown,{settings:[{label:(0,b.__)("Background color","snow-monkey-blocks"),colorValue:D,onColorChange:e=>s({btnBackgroundColor:e}),gradientValue:H,onGradientChange:e=>s({btnBackgroundGradientColor:e})},{label:(0,b.__)("Text color","snow-monkey-blocks"),colorValue:W,onColorChange:e=>s({btnTextColor:e})}],__experimentalIsRenderedInSidebar:!0,...Y})}),(0,i.jsx)(m.ContrastChecker,{backgroundColor:D,textColor:W})]})]})]}),(0,i.jsx)("div",{...se,children:(0,i.jsxs)("div",{className:n()("smb-items__item",M?.className),style:{...M?.style},children:[N&&(0,i.jsx)("div",{className:"smb-items__item__figure",children:(0,i.jsx)(y,{src:T,id:R,alt:C,width:B,height:S,onSelect:e=>{const t=e?.sizes?.[I]?I:j,i=e?.sizes?.[t]?.url,a=e?.sizes?.[t]?.width,l=e?.sizes?.[t]?.height;s({imageURL:i||e.url,imageID:e.id,imageAlt:e.alt,imageWidth:a||e.width,imageHeight:l||e.height,imageSizeSlug:t})},onSelectURL:e=>{e!==T&&s({imageURL:e,imageID:0,mediaSizeSlug:j})},onRemove:()=>s({imageID:t.uK.imageID.default,imageURL:t.uK.imageURL.default,imageAlt:t.uK.imageAlt.default,imageWidth:t.uK.imageWidth.default,imageHeight:t.uK.imageHeight.default}),allowedTypes:f})}),(0,i.jsxs)("div",{className:"smb-items__item__body",children:["none"!==g&&(0,i.jsx)(m.RichText,{tagName:g,className:"smb-items__item__title",placeholder:(0,b.__)("Write title…","snow-monkey-blocks"),value:h,onChange:e=>s({title:e})}),(!m.RichText.isEmpty(x)||a)&&(0,i.jsx)(m.RichText,{className:"smb-items__item__lede",placeholder:(0,b.__)("Write lede…","snow-monkey-blocks"),value:x,onChange:e=>s({lede:e})}),(!m.RichText.isEmpty(p)||a)&&(0,i.jsx)(m.RichText,{className:"smb-items__item__content",placeholder:(0,b.__)("Write content…","snow-monkey-blocks"),value:p,onChange:e=>s({summary:e})}),L&&(0,i.jsx)("div",{className:"smb-items__item__action",children:(0,i.jsx)("span",{ref:O,className:Q,href:v,style:ee,target:"_self"===w?void 0:w,rel:"_self"===w?void 0:"noopener noreferrer",children:(0,i.jsx)(m.RichText,{className:"smb-btn__label",value:z,placeholder:(0,b.__)("Button","snow-monkey-blocks"),onChange:e=>s({btnLabel:e}),withoutInteractiveFormatting:!0,ref:te})})})]})]})}),L&&(0,i.jsx)(m.BlockControls,{group:"block",children:(0,i.jsx)(r.ToolbarButton,{name:"link",icon:u,title:(0,b.__)("Link","snow-monkey-blocks"),onClick:e=>{e.preventDefault(),K(!0)},isActive:V})}),a&&E&&(0,i.jsx)(r.Popover,{placement:"bottom",anchor:G,onClose:()=>{K(!1),te.current?.focus()},children:(0,i.jsx)(m.__experimentalLinkControl,{className:"wp-block-navigation-link__inline-link-input",value:{url:v,opensInNewTab:A},onChange:({url:e,opensInNewTab:t})=>s({url:e,target:t?"_blank":"_self"}),onRemove:()=>{s({url:void 0,target:void 0}),K(!1),te.current?.focus()},forceIsEditingLink:!V})})]})},save:function({attributes:e,className:t}){const{titleTagName:s,title:a,lede:l,summary:o,url:r,target:c,displayImage:d,imageID:b,imageURL:_,imageAlt:u,imageWidth:g,imageHeight:h,displayBtn:x,btnLabel:p,btnBackgroundColor:y,btnBackgroundGradientColor:v,btnTextColor:k,btnSize:f,btnBorderRadius:j,btnWrap:w}=e,N=(0,m.__experimentalGetColorClassesAndStyles)(e),R=n()("c-row__col",t),T=n()("smb-items__item__btn","smb-btn",{[`smb-btn--${f}`]:!!f,"smb-btn--wrap":w}),C={"--smb-btn--background-color":y||void 0,"--smb-btn--background-image":v||void 0,"--smb-btn--border-radius":String(j).match(/^\d+$/)?`${j}px`:j,"--smb-btn--color":k||void 0};return(0,i.jsx)("div",{...m.useBlockProps.save({className:R}),children:(0,i.jsxs)("div",{className:n()("smb-items__item",N?.className),style:{...N?.style},children:[d&&(0,i.jsx)("div",{className:"smb-items__item__figure",children:(0,i.jsx)("img",{src:_,alt:u,width:!!g&&g,height:!!h&&h,className:`wp-image-${b}`})}),(0,i.jsxs)("div",{className:"smb-items__item__body",children:["none"!==s&&(0,i.jsx)(m.RichText.Content,{tagName:s,className:"smb-items__item__title",value:a}),!m.RichText.isEmpty(l)&&(0,i.jsx)("div",{className:"smb-items__item__lede",children:(0,i.jsx)(m.RichText.Content,{value:l})}),!m.RichText.isEmpty(o)&&(0,i.jsx)("div",{className:"smb-items__item__content",children:(0,i.jsx)(m.RichText.Content,{value:o})}),x&&(0,i.jsx)("div",{className:"smb-items__item__action",children:(0,i.jsx)("a",{className:T,href:r,style:C,target:"_self"===c?void 0:c,rel:"_self"===c?void 0:"noopener noreferrer",children:(0,i.jsx)("span",{className:"smb-btn__label",children:(0,i.jsx)(m.RichText.Content,{value:p})})})})]})]})})},deprecated:R,transforms:T})})()})();