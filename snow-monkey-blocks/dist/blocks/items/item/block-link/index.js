(()=>{var e={6942:(e,t)=>{var s;!function(){"use strict";var i={}.hasOwnProperty;function l(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(e=n(e,a(s)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return l.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var s in e)i.call(e,s)&&e[s]&&(t=n(t,s));return t}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(l.default=l,e.exports=l):void 0===(s=function(){return l}.apply(t,[]))||(e.exports=s)}()}},t={};function s(i){var l=t[i];if(void 0!==l)return l.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,s),a.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"UU":"snow-monkey-blocks/items-item-block-link","uK":{"titleTagName":{"type":"string","default":"div"},"title":{"type":"string","source":"html","selector":".smb-items__item__title","default":""},"lede":{"type":"string","source":"html","selector":".smb-items__item__lede","default":""},"summary":{"type":"string","source":"html","selector":".smb-items__item__content","default":""},"url":{"type":"string","source":"attribute","selector":".smb-items__item__action > a","attribute":"href"},"rel":{"type":"string","source":"attribute","selector":".smb-items__item__action > a","attribute":"rel"},"target":{"type":"string","source":"attribute","selector":".smb-items__item__action > a","attribute":"target"},"displayImage":{"type":"boolean","default":false},"imageID":{"type":"number","default":0},"imageURL":{"type":"string","source":"attribute","selector":".smb-items__item__figure > img","attribute":"src","default":""},"imageAlt":{"type":"string","source":"attribute","selector":".smb-items__item__figure > img","attribute":"alt","default":""},"imageWidth":{"type":"string","source":"attribute","selector":".smb-items__item__figure > img","attribute":"width","default":""},"imageHeight":{"type":"string","source":"attribute","selector":".smb-items__item__figure > img","attribute":"height","default":""},"imageSizeSlug":{"type":"string","default":"full"},"displayBtn":{"type":"boolean","default":false},"btnLabel":{"type":"string","source":"html","selector":".smb-items__item__action > a > span","role":"content"},"btnBackgroundColor":{"type":"string"},"btnBackgroundGradientColor":{"type":"string"},"btnTextColor":{"type":"string"},"btnSize":{"type":"string","default":""},"btnBorderRadius":{"type":"string"},"btnWrap":{"type":"boolean","default":false}},"xY":{"html":false,"color":{"__experimentalSkipSerialization":true,"background":true,"text":true,"link":true}}}'),i=window.ReactJSXRuntime,l=(0,i.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,i.jsx)("rect",{x:"1",y:"15.5",width:"10",height:"1"}),(0,i.jsx)("rect",{x:"1",y:"17.5",width:"8",height:"1"}),(0,i.jsx)("rect",{x:"1",y:"19.5",width:"8",height:"1"}),(0,i.jsx)("path",{d:"M1,4.06v8.88a.56.56,0,0,0,.56.56h8.88a.56.56,0,0,0,.56-.56V4.06a.56.56,0,0,0-.56-.56H1.56A.56.56,0,0,0,1,4.06m8.89,8.61H2.11a.29.29,0,0,1-.28-.28V4.61a.29.29,0,0,1,.28-.28H9.89a.29.29,0,0,1,.28.28v7.78a.29.29,0,0,1-.28.28"}),(0,i.jsx)("path",{d:"M1.83,10.05,4,8.45a.15.15,0,0,1,.16,0L5.85,9.52A.13.13,0,0,0,6,9.5l2.11-2a.14.14,0,0,1,.19,0l2.21,2.15v.84L8.32,8.32a.14.14,0,0,0-.19,0L6,10.34a.13.13,0,0,1-.17,0L4.18,9.29a.14.14,0,0,0-.16,0L1.83,10.88Z"}),(0,i.jsx)("rect",{x:"1",y:"3.5",width:"10",height:"10",fill:"none"}),(0,i.jsx)("rect",{x:"13",y:"15.5",width:"10",height:"1"}),(0,i.jsx)("rect",{x:"13",y:"17.5",width:"8",height:"1"}),(0,i.jsx)("rect",{x:"13",y:"19.5",width:"8",height:"1"}),(0,i.jsx)("path",{d:"M13,4.06v8.88a.56.56,0,0,0,.56.56h8.88a.56.56,0,0,0,.56-.56V4.06a.56.56,0,0,0-.56-.56H13.56a.56.56,0,0,0-.56.56m8.89,8.61H14.11a.29.29,0,0,1-.28-.28V4.61a.29.29,0,0,1,.28-.28h7.78a.29.29,0,0,1,.28.28v7.78a.29.29,0,0,1-.28.28"}),(0,i.jsx)("path",{d:"M13.83,10.05,16,8.45a.15.15,0,0,1,.16,0l1.67,1.07a.13.13,0,0,0,.17,0l2.11-2a.14.14,0,0,1,.19,0l2.21,2.15v.84L20.32,8.32a.14.14,0,0,0-.19,0l-2.11,2a.13.13,0,0,1-.17,0L16.18,9.29a.14.14,0,0,0-.16,0l-2.19,1.59Z"}),(0,i.jsx)("rect",{x:"13",y:"3.5",width:"10",height:"10",fill:"none"})]});var a=s(6942),n=s.n(a);const o=window.lodash,r=window.wp.components,m=window.wp.blockEditor,c=window.wp.compose,d=window.wp.data,b=window.wp.element,_=window.wp.primitives,u=(0,i.jsx)(_.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,i.jsx)(_.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})}),g=(0,i.jsx)(_.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,i.jsx)(_.Path,{d:"M17.031 4.703 15.576 4l-1.56 3H14v.03l-2.324 4.47H9.5V13h1.396l-1.502 2.889h-.95a3.694 3.694 0 0 1 0-7.389H10V7H8.444a5.194 5.194 0 1 0 0 10.389h.17L7.5 19.53l1.416.719L15.049 8.5h.507a3.694 3.694 0 0 1 0 7.39H14v1.5h1.556a5.194 5.194 0 0 0 .273-10.383l1.202-2.304Z"})}),h=window.wp.keycodes,x=window.wp.url,p=window.wp.i18n,v=({id:e,src:t,allowedTypes:s,accept:l,onSelect:a,onSelectURL:n,onRemove:o})=>(0,i.jsxs)(m.BlockControls,{group:"inline",children:[(0,i.jsx)(m.MediaReplaceFlow,{mediaId:e,mediaURL:t,allowedTypes:s,accept:l,onSelect:a,onSelectURL:n}),!!t&&!!o&&(0,i.jsx)(r.ToolbarButton,{onClick:o,children:(0,p.__)("Release","snow-monkey-blocks")})]}),y=({src:e,alt:t,id:s,style:l,width:a,height:n})=>(0,i.jsx)("img",{src:e,alt:t,className:`wp-image-${s}`,style:l,width:a,height:n}),k=({src:e,style:t,width:s,height:l})=>(0,i.jsx)("video",{src:e,style:t,width:s,height:l}),f=(0,b.memo)((({id:e,src:t,alt:s,url:l,width:a,height:n,target:r,allowedTypes:m,accept:c,onSelect:d,onSelectURL:b,onRemove:_,mediaType:u,style:g,rel:h,linkClass:x})=>{let p;if("image"===u){let m;p=(0,i.jsx)(y,{src:t,alt:s,id:e,style:g,width:a,height:n}),m=h?(0,o.isEmpty)(h)?void 0:h:"_self"!==r&&r?"noopener noreferrer":void 0,l&&(p=(0,i.jsx)("span",{href:l,target:"_self"===r?void 0:r,rel:m,className:x,children:p}))}else"video"===u&&(p=(0,i.jsx)(k,{src:t,style:g,width:a,height:n}));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v,{id:e,src:t,allowedTypes:m,accept:c,onSelect:d,onSelectURL:b,onRemove:_}),p]})}),((e,t)=>{const s=Object.keys(e);for(const i of s)if(e[i]!==t[i])return!1;return!0}));function j(e){const{src:t,onSelect:s,onSelectURL:l,mediaType:a,allowedTypes:n=["image"]}=e,o=!a&&t?"image":a;let r=(0,p.__)("Media","snow-monkey-blocks");1===n.length&&("image"===n[0]?r=(0,p.__)("Image","snow-monkey-blocks"):"video"===n[0]&&(r=(0,p.__)("Video","snow-monkey-blocks")));const c=(0,b.useMemo)((()=>n.map((e=>`${e}/*`)).join(",")),[n]);return t?(0,i.jsx)(f,{...e,accept:c,allowedTypes:n,mediaType:o}):(0,i.jsx)(m.MediaPlaceholder,{icon:"format-image",labels:{title:r},onSelect:s,onSelectURL:l,accept:c,allowedTypes:n})}const w=[{label:(0,p._x)("Thumbnail","Image size option for resolution control"),value:"thumbnail"},{label:(0,p._x)("Medium","Image size option for resolution control"),value:"medium"},{label:(0,p._x)("Large","Image size option for resolution control"),value:"large"},{label:(0,p._x)("Full Size","Image size option for resolution control"),value:"full"}];function N({panelId:e,value:t,onChange:s,options:l=w,defaultValue:a=w[0].value,isShownByDefault:n=!0,withToolsPanelItem:o=!0}){const m=null!=t?t:a,c=()=>(0,i.jsx)(r.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,p.__)("Resolution"),value:m,options:l,onChange:s,help:(0,p.__)("Select the size of the source image."),size:"__unstable-large"});return o?(0,i.jsx)(r.__experimentalToolsPanelItem,{hasValue:()=>m!==a,label:(0,p.__)("Resolution"),onDeselect:()=>s(a),isShownByDefault:n,panelId:e,children:(0,i.jsx)(c,{})}):(0,i.jsx)(c,{})}const T="noreferrer noopener",R="_blank",C="nofollow",B=[...m.__experimentalLinkControl.DEFAULT_LINK_SETTINGS,{id:"nofollow",title:(0,p.__)("Mark as nofollow","snow-monkey-blocks")}],S=["image"],L="full",I=t.uK,z=t.xY,H=[{attributes:{...I,btnLabel:{...I.btnLabel,selector:".smb-items__item__btn > .smb-btn__label",default:""},target:{...I.target,selector:".smb-items__item--block-link",default:"_self"},url:{...I.url,selector:".smb-items__item--block-link",default:""},btnBorderRadius:{type:"number"}},supports:{...z},save({attributes:e,className:t}){const{titleTagName:s,title:l,lede:a,summary:o,url:r,target:c,displayImage:d,imageID:b,imageURL:_,imageAlt:u,imageWidth:g,imageHeight:h,displayBtn:x,btnLabel:p,btnBackgroundColor:v,btnBackgroundGradientColor:y,btnTextColor:k,btnSize:f,btnBorderRadius:j,btnWrap:w}=e,N=(0,m.__experimentalGetColorClassesAndStyles)(e),T=n()("c-row__col",t),R=n()("smb-items__item__btn","smb-btn",{[`smb-btn--${f}`]:!!f,"smb-btn--wrap":w}),C={"--smb-btn--background-color":v||void 0,"--smb-btn--background-image":y||void 0,"--smb-btn--border-radius":String(j).match(/^\d+$/)?`${j}px`:j,"--smb-btn--color":k||void 0};return(0,i.jsx)("div",{...m.useBlockProps.save({className:T}),children:(0,i.jsxs)("a",{className:n()("smb-items__item","smb-items__item--block-link",N?.className),style:{...N?.style},href:r,target:"_self"===c?void 0:c,rel:"_blank"===c?"noopener noreferrer":void 0,children:[d&&(0,i.jsx)("div",{className:"smb-items__item__figure",children:(0,i.jsx)("img",{src:_,alt:u,width:!!g&&g,height:!!h&&h,className:`wp-image-${b}`})}),(0,i.jsxs)("div",{className:"smb-items__item__body",children:["none"!==s&&(0,i.jsx)(m.RichText.Content,{tagName:s,className:"smb-items__item__title",value:l}),!m.RichText.isEmpty(a)&&(0,i.jsx)("div",{className:"smb-items__item__lede",children:(0,i.jsx)(m.RichText.Content,{value:a})}),!m.RichText.isEmpty(o)&&(0,i.jsx)("div",{className:"smb-items__item__content",children:(0,i.jsx)(m.RichText.Content,{value:o})}),x&&(0,i.jsx)("div",{className:"smb-items__item__action",children:(0,i.jsx)("span",{className:R,href:r,style:C,target:"_self"===c?void 0:c,rel:"_blank"===c?"noopener noreferrer":void 0,children:(0,i.jsx)("span",{className:"smb-btn__label",children:(0,i.jsx)(m.RichText.Content,{value:p})})})})]})]})})}},{attributes:{...I,btnLabel:{...I.btnLabel,selector:".smb-items__item__btn > .smb-btn__label",default:""},target:{...I.target,selector:".smb-items__item--block-link",default:"_self"},url:{...I.url,selector:".smb-items__item--block-link",default:""},btnBorderRadius:{type:"number"}},supports:{...z},migrate(e){const{btnLabel:t,imageURL:s,btnBorderRadius:i}=e;return m.RichText.isEmpty(t)||(e.displayBtn=!0),s&&(e.displayImage=!0),e.btnBorderRadius=String(i).match(/^\d+$/)?`${i}px`:i,e},save({attributes:e,className:t}){const{titleTagName:s,title:l,lede:a,summary:o,url:r,target:c,imageID:d,imageURL:b,imageAlt:_,imageWidth:u,imageHeight:g,btnLabel:h,btnBackgroundColor:x,btnBackgroundGradientColor:p,btnTextColor:v,btnSize:y,btnBorderRadius:k,btnWrap:f}=e,j=n()("c-row__col",t),w=n()("smb-items__item__btn","smb-btn",{[`smb-btn--${y}`]:!!y,"smb-btn--wrap":f}),N={"--smb-btn--background-color":x||void 0,"--smb-btn--background-image":p||void 0,"--smb-btn--border-radius":String(k).match(/^\d+$/)?`${k}px`:k,"--smb-btn--color":v||void 0};return(0,i.jsx)("div",{...m.useBlockProps.save({className:j}),children:(0,i.jsxs)("a",{className:"smb-items__item smb-items__item--block-link",href:r,target:"_self"===c?void 0:c,rel:"_blank"===c?"noopener noreferrer":void 0,children:[!!b&&(0,i.jsx)("div",{className:"smb-items__item__figure",children:(0,i.jsx)("img",{src:b,alt:_,width:!!u&&u,height:!!g&&g,className:`wp-image-${d}`})}),(0,i.jsxs)("div",{className:"smb-items__item__body",children:["none"!==s&&(0,i.jsx)(m.RichText.Content,{tagName:s,className:"smb-items__item__title",value:l}),!m.RichText.isEmpty(a)&&(0,i.jsx)("div",{className:"smb-items__item__lede",children:(0,i.jsx)(m.RichText.Content,{value:a})}),!m.RichText.isEmpty(o)&&(0,i.jsx)("div",{className:"smb-items__item__content",children:(0,i.jsx)(m.RichText.Content,{value:o})}),!m.RichText.isEmpty(h)&&!!r&&(0,i.jsx)("div",{className:"smb-items__item__action",children:(0,i.jsx)("span",{className:w,href:r,style:N,target:"_self"===c?void 0:c,rel:"_blank"===c?"noopener noreferrer":void 0,children:(0,i.jsx)("span",{className:"smb-btn__label",children:(0,i.jsx)(m.RichText.Content,{value:h})})})})]})]})})}},{attributes:{...I,btnLabel:{...I.btnLabel,selector:".smb-items__item__btn > .smb-btn__label",default:""},target:{...I.target,selector:".smb-items__item--block-link",default:"_self"},url:{...I.url,selector:".smb-items__item--block-link",default:""},btnBorderRadius:{type:"number"}},supports:{...z},save({attributes:e,className:t}){const{titleTagName:s,title:l,lede:a,summary:o,url:r,target:c,imageID:d,imageURL:b,imageAlt:_,imageWidth:u,imageHeight:g,btnLabel:h,btnBackgroundColor:x,btnBackgroundGradientColor:p,btnTextColor:v,btnSize:y,btnBorderRadius:k,btnWrap:f}=e,j=n()("c-row__col",t),w=n()("smb-items__item__btn","smb-btn",{[`smb-btn--${y}`]:!!y,"smb-btn--wrap":f}),N={"--smb-btn--background-color":x||void 0,"--smb-btn--background-image":p||void 0,"--smb-btn--border-radius":void 0!==k?`${k}px`:void 0,"--smb-btn--color":v||void 0};return(0,i.jsx)("div",{...m.useBlockProps.save({className:j}),children:(0,i.jsxs)("a",{className:"smb-items__item smb-items__item--block-link",href:r,target:"_self"===c?void 0:c,rel:"_blank"===c?"noopener noreferrer":void 0,children:[!!b&&(0,i.jsx)("div",{className:"smb-items__item__figure",children:(0,i.jsx)("img",{src:b,alt:_,width:!!u&&u,height:!!g&&g,className:`wp-image-${d}`})}),(0,i.jsxs)("div",{className:"smb-items__item__body",children:["none"!==s&&(0,i.jsx)(m.RichText.Content,{tagName:s,className:"smb-items__item__title",value:l}),!m.RichText.isEmpty(a)&&(0,i.jsx)("div",{className:"smb-items__item__lede",children:(0,i.jsx)(m.RichText.Content,{value:a})}),!m.RichText.isEmpty(o)&&(0,i.jsx)("div",{className:"smb-items__item__content",children:(0,i.jsx)(m.RichText.Content,{value:o})}),!m.RichText.isEmpty(h)&&!!r&&(0,i.jsx)("div",{className:"smb-items__item__action",children:(0,i.jsx)("span",{className:w,href:r,style:N,target:"_self"===c?void 0:c,rel:"_blank"===c?"noopener noreferrer":void 0,children:(0,i.jsx)("span",{className:"smb-btn__label",children:(0,i.jsx)(m.RichText.Content,{value:h})})})})]})]})})}},{attributes:{...I,btnLabel:{...I.btnLabel,selector:".smb-items__item__btn > .smb-btn__label",default:""},target:{...I.target,selector:".smb-items__item--block-link",default:"_self"},url:{...I.url,selector:".smb-items__item--block-link",default:""},btnBorderRadius:{type:"number"}},supports:{...z},save({attributes:e,className:t}){const{titleTagName:s,title:l,lede:a,summary:o,url:r,target:c,imageID:d,imageURL:b,imageAlt:_,imageWidth:u,imageHeight:g,btnLabel:h,btnBackgroundColor:x,btnBackgroundGradientColor:p,btnTextColor:v,btnSize:y,btnBorderRadius:k,btnWrap:f}=e,j=n()("c-row__col",t),w=n()("smb-items__item__btn","smb-btn",{[`smb-btn--${y}`]:!!y,"smb-btn--wrap":f}),N={color:v||void 0},T={backgroundColor:x||void 0,backgroundImage:p||void 0,borderRadius:void 0!==k?`${k}px`:void 0};return(0,i.jsx)("div",{...m.useBlockProps.save({className:j}),children:(0,i.jsxs)("a",{className:"smb-items__item smb-items__item--block-link",href:r,target:"_self"===c?void 0:c,rel:"_blank"===c?"noopener noreferrer":void 0,children:[!!b&&(0,i.jsx)("div",{className:"smb-items__item__figure",children:(0,i.jsx)("img",{src:b,alt:_,width:!!u&&u,height:!!g&&g,className:`wp-image-${d}`})}),(0,i.jsxs)("div",{className:"smb-items__item__body",children:["none"!==s&&(0,i.jsx)(m.RichText.Content,{tagName:s,className:"smb-items__item__title",value:l}),!m.RichText.isEmpty(a)&&(0,i.jsx)("div",{className:"smb-items__item__lede",children:(0,i.jsx)(m.RichText.Content,{value:a})}),!m.RichText.isEmpty(o)&&(0,i.jsx)("div",{className:"smb-items__item__content",children:(0,i.jsx)(m.RichText.Content,{value:o})}),!m.RichText.isEmpty(h)&&!!r&&(0,i.jsx)("div",{className:"smb-items__item__action",children:(0,i.jsx)("span",{className:w,href:r,style:T,target:"_self"===c?void 0:c,rel:"_blank"===c?"noopener noreferrer":void 0,children:(0,i.jsx)("span",{className:"smb-btn__label",style:N,children:(0,i.jsx)(m.RichText.Content,{value:h})})})})]})]})})}},{attributes:{...I,btnLabel:{...I.btnLabel,selector:".smb-items__item__btn > .smb-btn__label",default:""},url:{type:"string",default:""},target:{type:"string",default:"_self"},btnBorderRadius:{type:"number"}},save({attributes:e,className:t}){const{titleTagName:s,title:l,lede:a,summary:o,url:r,target:c,imageID:d,imageURL:b,imageAlt:_,imageWidth:u,imageHeight:g,btnLabel:h,btnBackgroundColor:x,btnTextColor:p,btnSize:v,btnBorderRadius:y,btnWrap:k}=e,f=n()("c-row__col",t),j=n()("smb-items__item__btn","smb-btn",{[`smb-btn--${v}`]:!!v,"smb-btn--wrap":k}),w={color:p||void 0},N={backgroundColor:x||void 0,borderRadius:void 0!==y?`${y}px`:void 0};return(0,i.jsx)("div",{className:f,children:(0,i.jsxs)("a",{className:"smb-items__item smb-items__item--block-link",href:r,target:"_self"===c?void 0:c,rel:"_blank"===c?"noopener noreferrer":void 0,children:[!!b&&(0,i.jsx)("div",{className:"smb-items__item__figure",children:(0,i.jsx)("img",{src:b,alt:_,width:!!u&&u,height:!!g&&g,className:`wp-image-${d}`})}),"none"!==s&&(0,i.jsx)(m.RichText.Content,{tagName:s,className:"smb-items__item__title",value:l}),!m.RichText.isEmpty(a)&&(0,i.jsx)("div",{className:"smb-items__item__lede",children:(0,i.jsx)(m.RichText.Content,{value:a})}),!m.RichText.isEmpty(o)&&(0,i.jsx)("div",{className:"smb-items__item__content",children:(0,i.jsx)(m.RichText.Content,{value:o})}),!m.RichText.isEmpty(h)&&!!r&&(0,i.jsx)("div",{className:"smb-items__item__action",children:(0,i.jsx)("span",{className:j,style:N,children:(0,i.jsx)("span",{className:"smb-btn__label",style:w,children:(0,i.jsx)(m.RichText.Content,{value:h})})})})]})})}},{attributes:{...I,btnLabel:{...I.btnLabel,selector:".smb-items__item__btn > .smb-btn__label",default:""},url:{type:"string",default:""},target:{type:"string",default:"_self"},btnBorderRadius:{type:"number"}},save({attributes:e,className:t}){const{titleTagName:s,title:l,lede:a,summary:o,url:r,target:c,imageID:d,imageURL:b,imageAlt:_,imageWidth:u,imageHeight:g,btnLabel:h,btnBackgroundColor:x,btnTextColor:p,btnSize:v,btnBorderRadius:y,btnWrap:k}=e,f=n()("c-row__col",t),j=n()("smb-items__item__btn","smb-btn",{[`smb-btn--${v}`]:!!v,"smb-btn--wrap":k}),w={color:p||void 0},N={backgroundColor:x||void 0,borderRadius:void 0!==y?`${y}px`:void 0};return(0,i.jsx)("div",{className:f,children:(0,i.jsxs)("div",{className:"smb-items__item smb-items__item--block-link",children:[!!b&&(0,i.jsx)("div",{className:"smb-items__item__figure",children:(0,i.jsx)("img",{src:b,alt:_,width:!!u&&u,height:!!g&&g,className:`wp-image-${d}`})}),"none"!==s&&(0,i.jsx)(m.RichText.Content,{tagName:s,className:"smb-items__item__title",value:l}),!m.RichText.isEmpty(a)&&(0,i.jsx)("div",{className:"smb-items__item__lede",children:(0,i.jsx)(m.RichText.Content,{value:a})}),!m.RichText.isEmpty(o)&&(0,i.jsx)("div",{className:"smb-items__item__content",children:(0,i.jsx)(m.RichText.Content,{value:o})}),!m.RichText.isEmpty(h)&&!!r&&(0,i.jsx)("div",{className:"smb-items__item__action",children:(0,i.jsx)("a",{className:j,href:r,style:N,target:"_self"===c?void 0:c,rel:"_blank"===c?"noopener noreferrer":void 0,children:(0,i.jsx)("span",{className:"smb-btn__label",style:w,children:(0,i.jsx)(m.RichText.Content,{value:h})})})})]})})}},{attributes:{...I,btnLabel:{...I.btnLabel,selector:".smb-items__item__btn > .smb-btn__label",default:""},url:{type:"string",default:""},target:{type:"string",default:"_self"},btnBorderRadius:{type:"number"}},save({attributes:e,className:t}){const{titleTagName:s,title:l,lede:a,summary:o,btnLabel:r,url:c,target:d,btnBackgroundColor:b,btnTextColor:_,imageID:u,imageURL:g,imageAlt:h,imageWidth:x,imageHeight:p}=e,v=n()("c-row__col",t),y={color:_||void 0},k={backgroundColor:b||void 0};return(0,i.jsx)("div",{className:v,children:(0,i.jsxs)("a",{className:"smb-items__item",href:c,target:"_self"===d?void 0:d,rel:"_blank"===d?"noopener noreferrer":void 0,children:[!!g&&(0,i.jsx)("div",{className:"smb-items__item__figure",children:(0,i.jsx)("img",{src:g,alt:h,width:!!x&&x,height:!!p&&p,className:`wp-image-${u}`})}),"none"!==s&&(0,i.jsx)(m.RichText.Content,{tagName:s,className:"smb-items__item__title",value:l}),!m.RichText.isEmpty(a)&&(0,i.jsx)("div",{className:"smb-items__item__lede",children:(0,i.jsx)(m.RichText.Content,{value:a})}),!m.RichText.isEmpty(o)&&(0,i.jsx)("div",{className:"smb-items__item__content",children:(0,i.jsx)(m.RichText.Content,{value:o})}),!m.RichText.isEmpty(r)&&!!c&&(0,i.jsx)("div",{className:"smb-items__item__action",children:(0,i.jsx)("span",{className:"smb-items__item__btn smb-btn",style:k,children:(0,i.jsx)("span",{className:"smb-btn__label",style:y,children:(0,i.jsx)(m.RichText.Content,{value:r})})})})]})})}}],D={to:[{type:"block",blocks:["snow-monkey-blocks/items-item-standard"],transform:t=>(0,e.createBlock)("snow-monkey-blocks/items-item-standard",t)},{type:"block",blocks:["snow-monkey-blocks/items-banner"],transform:t=>(0,e.createBlock)("snow-monkey-blocks/items-banner",t)},{type:"block",blocks:["snow-monkey-blocks/items-item-free"],transform:t=>(0,e.createBlock)("snow-monkey-blocks/items-item-free",{},[(0,e.createBlock)("core/paragraph",{content:t.summary})])}]};(0,e.registerBlockType)(t.UU,{icon:{foreground:"#cd162c",src:l},edit:function({attributes:e,setAttributes:s,isSelected:l,className:a,clientId:_}){const{titleTagName:v,title:y,lede:k,summary:f,url:w,rel:I,target:z,displayImage:H,imageID:D,imageURL:$,imageAlt:E,imageWidth:W,imageHeight:U,imageSizeSlug:P,displayBtn:M,btnLabel:A,btnBackgroundColor:V,btnBackgroundGradientColor:K,btnTextColor:G,btnSize:O,btnBorderRadius:F,btnWrap:Z}=e,J=(0,m.__experimentalUseColorProps)(e),Y=(0,b.useRef)(),[Q,X]=(0,b.useState)(),[q,ee]=(0,b.useState)(!1),te=!!w,se=z===R,ie=!!I?.includes(C),le=(0,b.useMemo)((()=>({url:w,title:A,opensInNewTab:se,nofollow:ie})),[w,A,se,ie]);function ae(){s({url:void 0,target:void 0,rel:void 0}),ee(!1)}const{imageSizes:ne,image:oe}=(0,d.useSelect)((e=>{const{getSettings:t}=e("core/block-editor");return{image:D&&l?e("core").getMedia(D,{context:"view"}):null,imageSizes:t()?.imageSizes}}),[l,D,_]),re=ne.filter((({slug:e})=>oe?.media_details?.sizes?.[e]?.source_url)).map((({name:e,slug:t})=>({value:t,label:e}))),me=(0,m.__experimentalUseMultipleOriginColorsAndGradients)(),ce=["div","h2","h3","none"],de=n()("c-row__col",a),be=n()("smb-items__item__btn","smb-btn",{[`smb-btn--${O}`]:!!O,"smb-btn--wrap":Z}),_e={"--smb-btn--background-color":V||void 0,"--smb-btn--background-image":K||void 0,"--smb-btn--border-radius":String(F).match(/^\d+$/)?`${F}px`:F,"--smb-btn--color":G||void 0},ue=(0,m.useBlockProps)({className:de,ref:(0,c.useMergeRefs)([X,Y])});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(m.InspectorControls,{children:[(0,i.jsx)(r.__experimentalToolsPanel,{label:(0,p.__)("Block settings","snow-monkey-blocks"),children:(0,i.jsx)(r.__experimentalToolsPanelItem,{hasValue:()=>v!==t.uK.titleTagName.default,isShownByDefault:!0,label:(0,p.__)("Title tag","snow-monkey-blocks"),onDeselect:()=>s({titleTagName:t.uK.titleTagName.default}),children:(0,i.jsx)(r.BaseControl,{__nextHasNoMarginBottom:!0,label:(0,p.__)("Title tag","snow-monkey-blocks"),id:"snow-monkey-blocks/items-item-block-link/title-tag-name",children:(0,i.jsx)("div",{className:"smb-list-icon-selector",children:(0,o.times)(ce.length,(e=>(0,i.jsx)(r.Button,{variant:v===ce[e]?"primary":"secondary",onClick:()=>{s({titleTagName:ce[e]})},children:ce[e]},e)))})})})}),(0,i.jsxs)(r.__experimentalToolsPanel,{label:(0,p.__)("Image settings","snow-monkey-blocks"),children:[(0,i.jsx)(r.__experimentalToolsPanelItem,{hasValue:()=>H!==t.uK.displayImage.default,isShownByDefault:!0,label:(0,p.__)("Display image","snow-monkey-blocks"),onDeselect:()=>s({displayImage:t.uK.displayImage.default}),children:(0,i.jsx)(r.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,p.__)("Display image","snow-monkey-blocks"),checked:H,onChange:e=>s({displayImage:e})})}),H&&0<re.length&&(0,i.jsx)(N,{defaultValue:t.uK.imageSizeSlug.default,value:P,options:re,onChange:e=>{const t=oe?.media_details?.sizes?.[e]?.source_url,i=oe?.media_details?.sizes?.[e]?.width,l=oe?.media_details?.sizes?.[e]?.height;s({imageURL:t,imageWidth:i,imageHeight:l,imageSizeSlug:e})}})]}),(0,i.jsxs)(r.__experimentalToolsPanel,{label:(0,p.__)("Button settings","snow-monkey-blocks"),children:[(0,i.jsx)(r.__experimentalToolsPanelItem,{hasValue:()=>M!==t.uK.displayBtn.default,isShownByDefault:!0,label:(0,p.__)("Display button","snow-monkey-blocks"),onDeselect:()=>s({displayBtn:t.uK.displayBtn.default}),children:(0,i.jsx)(r.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,p.__)("Display button","snow-monkey-blocks"),checked:M,onChange:e=>s({displayBtn:e})})}),M&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.__experimentalToolsPanelItem,{hasValue:()=>O!==t.uK.btnSize.default,isShownByDefault:!0,label:(0,p.__)("Button size","snow-monkey-blocks"),onDeselect:()=>s({btnSize:t.uK.btnSize.default}),children:(0,i.jsx)(r.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,p.__)("Button size","snow-monkey-blocks"),value:O,onChange:e=>s({btnSize:e}),options:[{value:"",label:(0,p.__)("Normal size","snow-monkey-blocks")},{value:"little-wider",label:(0,p.__)("Litle wider","snow-monkey-blocks")},{value:"wider",label:(0,p.__)("Wider","snow-monkey-blocks")},{value:"more-wider",label:(0,p.__)("More wider","snow-monkey-blocks")},{value:"full",label:(0,p.__)("Full size","snow-monkey-blocks")}]})}),(0,i.jsx)(r.__experimentalToolsPanelItem,{hasValue:()=>F!==t.uK.btnBorderRadius.default,isShownByDefault:!0,label:(0,p.__)("Border radius","snow-monkey-blocks"),onDeselect:()=>s({btnBorderRadius:t.uK.btnBorderRadius.default}),children:(0,i.jsx)("div",{className:"smb-border-radius-control",children:(0,i.jsx)(m.__experimentalBorderRadiusControl,{values:F,onChange:e=>{s({btnBorderRadius:e})}})})}),(0,i.jsx)(r.__experimentalToolsPanelItem,{hasValue:()=>Z!==t.uK.btnWrap.default,isShownByDefault:!0,label:(0,p.__)("Wrap","snow-monkey-blocks"),onDeselect:()=>s({btnWrap:t.uK.btnWrap.default}),children:(0,i.jsx)(r.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,p.__)("Wrap","snow-monkey-blocks"),checked:Z,onChange:e=>s({btnWrap:e})})}),(0,i.jsx)("div",{className:"smb-color-gradient-settings-dropdown",children:(0,i.jsx)(m.__experimentalColorGradientSettingsDropdown,{settings:[{label:(0,p.__)("Background color","snow-monkey-blocks"),colorValue:V,onColorChange:e=>s({btnBackgroundColor:e}),gradientValue:K,onGradientChange:e=>s({btnBackgroundGradientColor:e})},{label:(0,p.__)("Text color","snow-monkey-blocks"),colorValue:G,onColorChange:e=>s({btnTextColor:e})}],__experimentalIsRenderedInSidebar:!0,...me})}),(0,i.jsx)(m.ContrastChecker,{backgroundColor:V,textColor:G})]})]})]}),(0,i.jsx)("div",{...ue,children:(0,i.jsxs)("div",{className:n()("smb-items__item","smb-items__item--block-link",J?.className),style:{...J?.style},children:[H&&(0,i.jsx)("div",{className:"smb-items__item__figure",children:(0,i.jsx)(j,{src:$,id:D,alt:E,width:W,height:U,onSelect:e=>{const t=e?.sizes?.[P]?P:L,i=e?.sizes?.[t]?.url,l=e?.sizes?.[t]?.width,a=e?.sizes?.[t]?.height;s({imageURL:i||e.url,imageID:e.id,imageAlt:e.alt,imageWidth:l||e.width,imageHeight:a||e.height,imageSizeSlug:t})},onSelectURL:e=>{e!==$&&s({imageURL:e,imageID:0,mediaSizeSlug:L})},onRemove:()=>s({imageID:t.uK.imageID.default,imageURL:t.uK.imageURL.default,imageAlt:t.uK.imageAlt.default,imageWidth:t.uK.imageWidth.default,imageHeight:t.uK.imageHeight.default}),allowedTypes:S})}),(0,i.jsxs)("div",{className:"smb-items__item__body",children:["none"!==v&&(0,i.jsx)(m.RichText,{tagName:v,className:"smb-items__item__title",placeholder:(0,p.__)("Write title…","snow-monkey-blocks"),value:y,onChange:e=>s({title:e})}),(!m.RichText.isEmpty(k)||l)&&(0,i.jsx)(m.RichText,{className:"smb-items__item__lede",placeholder:(0,p.__)("Write lede…","snow-monkey-blocks"),value:k,onChange:e=>s({lede:e})}),(!m.RichText.isEmpty(f)||l)&&(0,i.jsx)(m.RichText,{className:"smb-items__item__content",placeholder:(0,p.__)("Write content…","snow-monkey-blocks"),value:f,onChange:e=>s({summary:e})}),(te||M)&&(0,i.jsx)("div",{className:"smb-items__item__action",children:(0,i.jsx)("span",{className:M?be:void 0,style:M?_e:void 0,href:w,target:z,rel:I,children:M?(0,i.jsx)(m.RichText,{className:"smb-btn__label",value:A,placeholder:(0,p.__)("Button","snow-monkey-blocks"),onChange:e=>s({btnLabel:e}),withoutInteractiveFormatting:!0}):(0,i.jsx)("span",{className:"screen-reader-text",children:A||(0,p.__)("Learn more","snow-monkey-blocks")})})})]})]})}),(0,i.jsxs)(m.BlockControls,{group:"block",children:[!te&&(0,i.jsx)(r.ToolbarButton,{name:"link",icon:u,title:(0,p.__)("Link"),shortcut:h.displayShortcut.primary("k"),onClick:function(e){e.preventDefault(),ee(!0)}}),te&&(0,i.jsx)(r.ToolbarButton,{name:"link",icon:g,title:(0,p.__)("Unlink"),shortcut:h.displayShortcut.primaryShift("k"),onClick:ae,isActive:!0})]}),l&&(q||te)&&(0,i.jsx)(r.Popover,{placement:"bottom center",onClose:()=>{ee(!1)},anchor:Q,focusOnMount:!!q&&"firstElement",children:(0,i.jsx)(m.__experimentalLinkControl,{className:"wp-block-navigation-link__inline-link-input",value:le,onChange:({url:e="",title:t,opensInNewTab:i,nofollow:l})=>{s(function({rel:e="",url:t="",title:s,opensInNewTab:i,nofollow:l}){let a,n=e;if(i)a=R,n=n?.includes(T)?n:n+` ${T}`;else{const e=new RegExp(`\\b${T}\\s*`,"g");n=n?.replace(e,"").trim()}if(l)n=n?.includes(C)?n:(n+` ${C}`).trim();else{const e=new RegExp(`\\b${C}\\s*`,"g");n=n?.replace(e,"").trim()}return{url:(0,x.prependHTTP)(t),btnLabel:s,target:a,rel:n||void 0}}({rel:I,url:e,title:t,opensInNewTab:i,nofollow:l}))},onRemove:()=>{ae()},forceIsEditingLink:q,hasRichPreviews:!0,hasTextControl:!M,settings:B,showInitialSuggestions:!0,suggestionsQuery:{initialSuggestionsSearchOptions:{type:"post",subtype:"page",perPage:20}}})})]})},save:function({attributes:e,className:t}){const{titleTagName:s,title:l,lede:a,summary:o,url:r,rel:c,target:d,displayImage:b,imageID:_,imageURL:u,imageAlt:g,imageWidth:h,imageHeight:x,displayBtn:v,btnLabel:y,btnBackgroundColor:k,btnBackgroundGradientColor:f,btnTextColor:j,btnSize:w,btnBorderRadius:N,btnWrap:T}=e,R=!!r,C=(0,m.__experimentalGetColorClassesAndStyles)(e),B=n()("c-row__col",t),S=n()("smb-items__item__btn","smb-btn",{[`smb-btn--${w}`]:!!w,"smb-btn--wrap":T}),L={"--smb-btn--background-color":k||void 0,"--smb-btn--background-image":f||void 0,"--smb-btn--border-radius":String(N).match(/^\d+$/)?`${N}px`:N,"--smb-btn--color":j||void 0};return(0,i.jsx)("div",{...m.useBlockProps.save({className:B}),children:(0,i.jsxs)("div",{className:n()("smb-items__item","smb-items__item--block-link",C?.className),style:{...C?.style},children:[b&&(0,i.jsx)("div",{className:"smb-items__item__figure",children:(0,i.jsx)("img",{src:u,alt:g,width:!!h&&h,height:!!x&&x,className:`wp-image-${_}`})}),(0,i.jsxs)("div",{className:"smb-items__item__body",children:["none"!==s&&(0,i.jsx)(m.RichText.Content,{tagName:s,className:"smb-items__item__title",value:l}),!m.RichText.isEmpty(a)&&(0,i.jsx)("div",{className:"smb-items__item__lede",children:(0,i.jsx)(m.RichText.Content,{value:a})}),!m.RichText.isEmpty(o)&&(0,i.jsx)("div",{className:"smb-items__item__content",children:(0,i.jsx)(m.RichText.Content,{value:o})}),(R||v)&&(0,i.jsx)("div",{className:"smb-items__item__action",children:(0,i.jsx)("a",{className:v?S:void 0,style:v?L:void 0,href:r,target:d,rel:c,children:v?(0,i.jsx)("span",{className:"smb-btn__label",children:(0,i.jsx)(m.RichText.Content,{value:y})}):(0,i.jsx)("span",{className:"screen-reader-text",children:y||(0,p.__)("Learn more","snow-monkey-blocks")})})})]})]})})},deprecated:H,transforms:D})})()})();