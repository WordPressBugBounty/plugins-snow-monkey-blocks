(()=>{var e={6942:(e,t)=>{var s;!function(){"use strict";var i={}.hasOwnProperty;function l(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(e=n(e,a(s)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return l.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var s in e)i.call(e,s)&&e[s]&&(t=n(t,s));return t}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(l.default=l,e.exports=l):void 0===(s=function(){return l}.apply(t,[]))||(e.exports=s)}()}},t={};function s(i){var l=t[i];if(void 0!==l)return l.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,s),a.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"UU":"snow-monkey-blocks/panels-item-horizontal","uK":{"titleTagName":{"type":"string","default":"div"},"title":{"type":"string","source":"html","selector":".smb-panels__item__title","default":""},"summary":{"type":"string","source":"html","selector":".smb-panels__item__content","default":""},"displayLink":{"type":"boolean","default":false},"linkLabel":{"type":"string","source":"text","selector":".smb-panels__item__link","default":""},"linkURL":{"type":"string","source":"attribute","selector":".smb-panels__item__action > a","attribute":"href","default":""},"linkTarget":{"type":"string","source":"attribute","selector":".smb-panels__item__action > a","attribute":"target","default":"_self"},"displayImage":{"type":"boolean","default":false},"imagePosition":{"type":"string","default":"right"},"imageID":{"type":"number","default":0},"imageURL":{"type":"string","source":"attribute","selector":".smb-panels__item__figure > img","attribute":"src","default":""},"imageAlt":{"type":"string","source":"attribute","selector":".smb-panels__item__figure > img","attribute":"alt","default":""},"imageWidth":{"type":"string","source":"attribute","selector":".smb-panels__item__figure > img","attribute":"width","default":""},"imageHeight":{"type":"string","source":"attribute","selector":".smb-panels__item__figure > img","attribute":"height","default":""},"imageSizeSlug":{"type":"string","default":"full"}},"xY":{"html":false,"color":{"background":true,"gradients":true,"text":true,"link":true}}}'),i=window.ReactJSXRuntime,l=(0,i.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,i.jsx)("path",{d:"M3,3v8h8V3Zm7,7H4V4h6Z"}),(0,i.jsx)("path",{d:"M13,3v8h8V3Zm7,7H14V4h6Z"}),(0,i.jsx)("path",{d:"M3,13v8h8V13Zm7,7H4V14h6Z"}),(0,i.jsx)("path",{d:"M13,13v8h8V13Zm7,7H14V14h6Z"})]});var a=s(6942),n=s.n(a);const o=window.lodash,r=window.wp.blockEditor,m=window.wp.components,c=window.wp.compose,_=window.wp.element,d=window.wp.data,g=window.wp.primitives,h=(0,i.jsx)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,i.jsx)(g.Path,{d:"M4 18h6V6H4v12zm9-9.5V10h7V8.5h-7zm0 7h7V14h-7v1.5z"})}),p=(0,i.jsx)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,i.jsx)(g.Path,{d:"M14 6v12h6V6h-6zM4 10h7V8.5H4V10zm0 5.5h7V14H4v1.5z"})}),u=(0,i.jsx)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,i.jsx)(g.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})}),b=window.wp.i18n,x=({id:e,src:t,allowedTypes:s,accept:l,onSelect:a,onSelectURL:n,onRemove:o})=>(0,i.jsxs)(r.BlockControls,{group:"inline",children:[(0,i.jsx)(r.MediaReplaceFlow,{mediaId:e,mediaURL:t,allowedTypes:s,accept:l,onSelect:a,onSelectURL:n}),!!t&&!!o&&(0,i.jsx)(m.ToolbarButton,{onClick:o,children:(0,b.__)("Release","snow-monkey-blocks")})]}),k=({src:e,alt:t,id:s,style:l,width:a,height:n})=>(0,i.jsx)("img",{src:e,alt:t,className:`wp-image-${s}`,style:l,width:a,height:n}),v=({src:e,style:t,width:s,height:l})=>(0,i.jsx)("video",{src:e,style:t,width:s,height:l}),y=(0,_.memo)((({id:e,src:t,alt:s,url:l,width:a,height:n,target:r,allowedTypes:m,accept:c,onSelect:_,onSelectURL:d,onRemove:g,mediaType:h,style:p,rel:u,linkClass:b})=>{let y;if("image"===h){let m;y=(0,i.jsx)(k,{src:t,alt:s,id:e,style:p,width:a,height:n}),m=u?(0,o.isEmpty)(u)?void 0:u:"_self"!==r&&r?"noopener noreferrer":void 0,l&&(y=(0,i.jsx)("span",{href:l,target:"_self"===r?void 0:r,rel:m,className:b,children:y}))}else"video"===h&&(y=(0,i.jsx)(v,{src:t,style:p,width:a,height:n}));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x,{id:e,src:t,allowedTypes:m,accept:c,onSelect:_,onSelectURL:d,onRemove:g}),y]})}),((e,t)=>{const s=Object.keys(e);for(const i of s)if(e[i]!==t[i])return!1;return!0}));function j(e){const{src:t,onSelect:s,onSelectURL:l,mediaType:a,allowedTypes:n=["image"]}=e,o=!a&&t?"image":a;let m=(0,b.__)("Media","snow-monkey-blocks");1===n.length&&("image"===n[0]?m=(0,b.__)("Image","snow-monkey-blocks"):"video"===n[0]&&(m=(0,b.__)("Video","snow-monkey-blocks")));const c=(0,_.useMemo)((()=>n.map((e=>`${e}/*`)).join(",")),[n]);return t?(0,i.jsx)(y,{...e,accept:c,allowedTypes:n,mediaType:o}):(0,i.jsx)(r.MediaPlaceholder,{icon:"format-image",labels:{title:m},onSelect:s,onSelectURL:l,accept:c,allowedTypes:n})}const f=[{label:(0,b._x)("Thumbnail","Image size option for resolution control"),value:"thumbnail"},{label:(0,b._x)("Medium","Image size option for resolution control"),value:"medium"},{label:(0,b._x)("Large","Image size option for resolution control"),value:"large"},{label:(0,b._x)("Full Size","Image size option for resolution control"),value:"full"}];function w({panelId:e,value:t,onChange:s,options:l=f,defaultValue:a=f[0].value,isShownByDefault:n=!0,withToolsPanelItem:o=!0}){const r=null!=t?t:a,c=()=>(0,i.jsx)(m.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,b.__)("Resolution"),value:r,options:l,onChange:s,help:(0,b.__)("Select the size of the source image."),size:"__unstable-large"});return o?(0,i.jsx)(m.__experimentalToolsPanelItem,{hasValue:()=>r!==a,label:(0,b.__)("Resolution"),onDeselect:()=>s(a),isShownByDefault:n,panelId:e,children:(0,i.jsx)(c,{})}):(0,i.jsx)(c,{})}const N=e=>{const t=document.createElement("div");return t.style.display="none",t.innerHTML=e,t.innerText},T=["image"],R="full",C=t.uK,L=t.xY,S=[{attributes:{...C,backgroundColor:{type:"string"},backgroundGradientColor:{type:"string"},textColor:{type:"string"}},supports:{...L,color:{background:!1,gradients:!1,text:!1,link:!1}},migrate(e){const{backgroundColor:t,backgroundGradientColor:s,textColor:i}=e;let l={...e};return t&&(l={...l,backgroundColor:void 0,style:{...l?.style,color:{...l?.style?.color,background:t}}}),s&&(l={...l,backgroundGradientColor:void 0,style:{...l?.style,color:{...l?.style?.color,gradient:s}}}),i&&(l={...l,textColor:void 0,style:{...l?.style,color:{...l?.style?.color,text:i}}}),l},save({attributes:e,className:t}){const{titleTagName:s,title:l,summary:a,backgroundColor:o,backgroundGradientColor:m,textColor:c,displayLink:_,linkLabel:d,linkURL:g,linkTarget:h,displayImage:p,imagePosition:u,imageID:b,imageURL:x,imageAlt:k,imageWidth:v,imageHeight:y}=e,j=n()("c-row__col",t),f=n()("smb-panels__item","smb-panels__item--horizontal",{"smb-panels__item--reverse":"right"===u}),w=n()("smb-panels__item__action",{"smb-panels__item__action--nolabel":!d}),N={"--smb-panel--background-color":o,"--smb-panel--background-image":m,"--smb-panel--color":c};return(0,i.jsx)("div",{...r.useBlockProps.save({className:j}),children:(0,i.jsxs)("div",{className:f,style:N,children:[p&&(0,i.jsx)("div",{className:"smb-panels__item__figure",children:(0,i.jsx)("img",{src:x,alt:k,width:!!v&&v,height:!!y&&y,className:`wp-image-${b}`})}),(0,i.jsxs)("div",{className:"smb-panels__item__body",children:[!r.RichText.isEmpty(l)&&"none"!==s&&(0,i.jsx)(r.RichText.Content,{tagName:s,className:"smb-panels__item__title",value:l}),!r.RichText.isEmpty(a)&&(0,i.jsx)("div",{className:"smb-panels__item__content",children:(0,i.jsx)(r.RichText.Content,{value:a})}),(!!g||_)&&(0,i.jsx)("div",{className:w,children:g?(0,i.jsx)("a",{href:g,target:"_self"===h?void 0:h,rel:"_self"===h?void 0:"noopener noreferrer",children:_&&(0,i.jsx)("div",{className:"smb-panels__item__link",children:(0,i.jsx)(r.RichText.Content,{value:d})})}):(0,i.jsx)(i.Fragment,{children:_&&(0,i.jsx)("div",{className:"smb-panels__item__link",children:(0,i.jsx)(r.RichText.Content,{value:d})})})})]})]})})}},{attributes:{...C},supports:{...L,color:{background:!1,gradients:!1,text:!1,link:!1}},migrate(e){const{linkLabel:t,linkURL:s,imageURL:i}=e;return r.RichText.isEmpty(t)&&!s||(e.displayLink=!0),i&&(e.displayImage=!0),e},save({attributes:e,className:t}){const{titleTagName:s,title:l,summary:a,linkLabel:o,linkURL:m,linkTarget:c,imagePosition:_,imageID:d,imageURL:g,imageAlt:h,imageWidth:p,imageHeight:u}=e,b=n()("c-row__col",t),x=n()("smb-panels__item","smb-panels__item--horizontal",{"smb-panels__item--reverse":"right"===_}),k=n()("smb-panels__item__action",{"smb-panels__item__action--nolabel":!o}),v=!r.RichText.isEmpty(o)&&(0,i.jsx)("div",{className:"smb-panels__item__link",children:(0,i.jsx)(r.RichText.Content,{value:o})});return(0,i.jsx)("div",{...r.useBlockProps.save({className:b}),children:(0,i.jsxs)("div",{className:x,children:[!!g&&(0,i.jsx)("div",{className:"smb-panels__item__figure",children:(0,i.jsx)("img",{src:g,alt:h,width:!!p&&p,height:!!u&&u,className:`wp-image-${d}`})}),(0,i.jsxs)("div",{className:"smb-panels__item__body",children:[!r.RichText.isEmpty(l)&&"none"!==s&&(0,i.jsx)(r.RichText.Content,{tagName:s,className:"smb-panels__item__title",value:l}),!r.RichText.isEmpty(a)&&(0,i.jsx)("div",{className:"smb-panels__item__content",children:(0,i.jsx)(r.RichText.Content,{value:a})}),(!r.RichText.isEmpty(o)||!!m)&&(0,i.jsx)("div",{className:k,children:m?(0,i.jsx)("a",{href:m,target:"_self"===c?void 0:c,rel:"_self"===c?void 0:"noopener noreferrer",children:v}):(0,i.jsx)(i.Fragment,{children:v})})]})]})})}},{attributes:{...C,linkTarget:{type:"string",default:"_self"}},supports:{...L,color:{background:!1,gradients:!1,text:!1,link:!1}},save({attributes:e,className:t}){const{titleTagName:s,title:l,summary:a,linkLabel:o,linkURL:m,linkTarget:c,imagePosition:_,imageID:d,imageURL:g,imageAlt:h}=e,p=n()("c-row__col",t),u=n()("smb-panels__item","smb-panels__item--horizontal",{"smb-panels__item--reverse":"right"===_});return(0,i.jsx)("div",{className:p,children:(0,i.jsxs)("div",{className:u,children:[!!g&&(0,i.jsx)("div",{className:"smb-panels__item__figure",children:(0,i.jsx)("img",{src:g,alt:h,className:`wp-image-${d}`})}),(0,i.jsxs)("div",{className:"smb-panels__item__body",children:[!r.RichText.isEmpty(l)&&"none"!==s&&(0,i.jsx)(r.RichText.Content,{tagName:s,className:"smb-panels__item__title",value:l}),!r.RichText.isEmpty(a)&&(0,i.jsx)("div",{className:"smb-panels__item__content",children:(0,i.jsx)(r.RichText.Content,{value:a})}),!r.RichText.isEmpty(o)&&(0,i.jsx)("div",{className:"smb-panels__item__action",children:m?(0,i.jsx)("a",{href:m,target:"_self"===c?void 0:c,rel:"_self"===c?void 0:"noopener noreferrer",children:(0,i.jsx)("div",{className:"smb-panels__item__link",children:(0,i.jsx)(r.RichText.Content,{value:o})})}):(0,i.jsx)("div",{className:"smb-panels__item__link",children:(0,i.jsx)(r.RichText.Content,{value:o})})})]})]})})}},{attributes:{...C,linkURL:{type:"string",source:"attribute",selector:".smb-panels__item",attribute:"href",default:""},linkTarget:{type:"string",source:"attribute",selector:".smb-panels__item",attribute:"target",default:"_self"}},supports:{...L,color:{background:!1,gradients:!1,text:!1,link:!1}},save({attributes:e,className:t}){const{titleTagName:s,title:l,summary:a,linkLabel:o,linkURL:m,linkTarget:c,imagePosition:_,imageID:d,imageURL:g,imageAlt:h}=e,p=(0,i.jsxs)(i.Fragment,{children:[!!g&&(0,i.jsx)("div",{className:"smb-panels__item__figure",children:(0,i.jsx)("img",{src:g,alt:h,className:`wp-image-${d}`})}),(0,i.jsxs)("div",{className:"smb-panels__item__body",children:[!r.RichText.isEmpty(l)&&"none"!==s&&(0,i.jsx)(r.RichText.Content,{tagName:s,className:"smb-panels__item__title",value:l}),!r.RichText.isEmpty(a)&&(0,i.jsx)("div",{className:"smb-panels__item__content",children:(0,i.jsx)(r.RichText.Content,{value:a})}),!r.RichText.isEmpty(o)&&(0,i.jsx)("div",{className:"smb-panels__item__action",children:(0,i.jsx)("div",{className:"smb-panels__item__link",children:(0,i.jsx)(r.RichText.Content,{value:o})})})]})]}),u=n()("c-row__col",t),b=n()("smb-panels__item","smb-panels__item--horizontal",{"smb-panels__item--reverse":"right"===_});return(0,i.jsx)("div",{className:u,children:m?(0,i.jsx)("a",{className:b,href:m,target:"_self"===c?void 0:c,rel:"_self"===c?void 0:"noopener noreferrer",children:p}):(0,i.jsx)("div",{className:b,children:p})})}},{attributes:{...C,linkURL:{type:"string",source:"attribute",selector:".smb-panels__item",attribute:"href",default:""},linkTarget:{type:"string",source:"attribute",selector:".smb-panels__item",attribute:"target",default:"_self"}},supports:{...L,color:{background:!1,gradients:!1,text:!1,link:!1}},save({attributes:e}){const{titleTagName:t,title:s,summary:l,linkLabel:a,linkURL:o,linkTarget:m,imagePosition:c,imageID:_,imageURL:d}=e,g=()=>(0,i.jsxs)(i.Fragment,{children:[!!_&&(0,i.jsx)("div",{className:"smb-panels__item__figure",children:(0,i.jsx)("img",{src:d,alt:"",className:`wp-image-${_}`})}),(0,i.jsxs)("div",{className:"smb-panels__item__body",children:[!r.RichText.isEmpty(s)&&(0,i.jsx)(r.RichText.Content,{tagName:t,className:"smb-panels__item__title",value:s}),!r.RichText.isEmpty(l)&&(0,i.jsx)("div",{className:"smb-panels__item__content",children:(0,i.jsx)(r.RichText.Content,{value:l})}),!r.RichText.isEmpty(a)&&(0,i.jsx)("div",{className:"smb-panels__item__action",children:(0,i.jsx)("div",{className:"smb-panels__item__link",children:(0,i.jsx)(r.RichText.Content,{value:a})})})]})]}),h=()=>o?(0,i.jsx)("a",{className:n()("smb-panels__item","smb-panels__item--horizontal",{"smb-panels__item--reverse":"right"===c}),href:o,target:"_self"===m?void 0:m,rel:"_self"===m?void 0:"noopener noreferrer",children:(0,i.jsx)(g,{})}):(0,i.jsx)("div",{className:n()("smb-panels__item","smb-panels__item--horizontal",{"smb-panels__item--reverse":"right"===c}),children:(0,i.jsx)(g,{})});return(0,i.jsx)("div",{className:"c-row__col",children:(0,i.jsx)(h,{})})}},{attributes:{...C,linkURL:{type:"string",source:"attribute",selector:".smb-panels__item",attribute:"href",default:""},linkTarget:{type:"string",source:"attribute",selector:".smb-panels__item",attribute:"target",default:"_self"}},supports:{...L,color:{background:!1,gradients:!1,text:!1,link:!1}},save({attributes:e}){const{titleTagName:t,title:s,summary:l,linkLabel:a,linkURL:o,linkTarget:m,imagePosition:c,imageID:_,imageURL:d}=e;return(0,i.jsx)("div",{className:"c-row__col",children:(g=(0,i.jsxs)(i.Fragment,{children:[!!_&&(0,i.jsx)("div",{className:"smb-panels__item__figure",children:(0,i.jsx)("img",{src:d,alt:"",className:`wp-image-${_}`})}),(0,i.jsxs)("div",{className:"smb-panels__item__body",children:[!r.RichText.isEmpty(s)&&(0,i.jsx)(r.RichText.Content,{tagName:t,className:"smb-panels__item__title",value:s}),!r.RichText.isEmpty(l)&&(0,i.jsx)("div",{className:"smb-panels__item__content",children:(0,i.jsx)(r.RichText.Content,{value:l})}),!r.RichText.isEmpty(a)&&(0,i.jsx)("div",{className:"smb-panels__item__action",children:(0,i.jsx)("div",{className:"smb-panels__item__link",children:(0,i.jsx)(r.RichText.Content,{value:a})})})]})]}),o?(0,i.jsx)("a",{className:n()("smb-panels__item","smb-panels__item--horizontal",{"smb-panels__item--reverse":"right"===c}),href:o,target:m,children:g}):(0,i.jsx)("div",{className:n()("smb-panels__item","smb-panels__item--horizontal",{"smb-panels__item--reverse":"right"===c}),href:o,target:m,children:g}))});var g}}],U={to:[{type:"block",blocks:["snow-monkey-blocks/panels-item"],transform:t=>(0,e.createBlock)("snow-monkey-blocks/panels-item",t)},{type:"block",blocks:["snow-monkey-blocks/panels-item-free"],transform:t=>(0,e.createBlock)("snow-monkey-blocks/panels-item-free",{},[(0,e.createBlock)("core/paragraph",{content:t.summary})])},{type:"block",blocks:["snow-monkey-blocks/panels-item-block-link"],transform:t=>(0,e.createBlock)("snow-monkey-blocks/panels-item-block-link",{linkURL:t.linkURL,linkTarget:t.linkTarget},[(0,e.createBlock)("core/paragraph",{content:t.summary})])}]};(0,e.registerBlockType)(t.UU,{icon:{foreground:"#cd162c",src:l},edit:function({attributes:e,setAttributes:s,isSelected:l,clientId:a}){const{titleTagName:g,title:x,summary:k,displayLink:v,linkLabel:y,linkURL:f,linkTarget:C,displayImage:L,imagePosition:S,imageID:U,imageURL:z,imageAlt:I,imageWidth:B,imageHeight:P,imageSizeSlug:V}=e,D=(0,r.__experimentalUseColorProps)({style:{color:{...e?.style?.color}},backgroundColor:e?.backgroundColor||void 0,textColor:e?.textColor||void 0,gradient:e?.gradient||void 0}),[E,H]=(0,_.useState)(!1),M=!!f,A="_blank"===C,[K,W]=(0,_.useState)(null),{imageSizes:Z,image:F}=(0,d.useSelect)((e=>{const{getSettings:t}=e("core/block-editor");return{image:U&&l?e("core").getMedia(U,{context:"view"}):null,imageSizes:t()?.imageSizes}}),[l,U,a]),G=Z.filter((({slug:e})=>F?.media_details?.sizes?.[e]?.source_url)).map((({name:e,slug:t})=>({value:t,label:e}))),$=["div","h2","h3","none"],O=n()("smb-panels__item","smb-panels__item--horizontal",D?.className,{"smb-panels__item--reverse":"right"===S}),J=D?.style,Y=n()("smb-panels__item__action",{"smb-panels__item__action--nolabel":!y&&!l}),X=(0,_.useRef)(),q=(0,_.useRef)(),Q=(0,r.useBlockProps)({className:"c-row__col",ref:(0,c.useMergeRefs)([W,X])});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.InspectorControls,{children:[(0,i.jsx)(m.__experimentalToolsPanel,{label:(0,b.__)("Block settings","snow-monkey-blocks"),children:(0,i.jsx)(m.__experimentalToolsPanelItem,{hasValue:()=>g!==t.uK.titleTagName.default,isShownByDefault:!0,label:(0,b.__)("Title tag","snow-monkey-blocks"),onDeselect:()=>s({titleTagName:t.uK.titleTagName.default}),children:(0,i.jsx)(m.BaseControl,{__nextHasNoMarginBottom:!0,label:(0,b.__)("Title tag","snow-monkey-blocks"),id:"snow-monkey-blocks/panels-item-horizontal/title-tag-name",children:(0,i.jsx)("div",{className:"smb-list-icon-selector",children:(0,o.times)($.length,(e=>(0,i.jsx)(m.Button,{variant:g===$[e]?"primary":"secondary",onClick:()=>s({titleTagName:$[e]}),children:$[e]},e)))})})})}),(0,i.jsxs)(m.__experimentalToolsPanel,{label:(0,b.__)("Image settings","snow-monkey-blocks"),children:[(0,i.jsx)(m.__experimentalToolsPanelItem,{hasValue:()=>L!==t.uK.displayImage.default,isShownByDefault:!0,label:(0,b.__)("Display image","snow-monkey-blocks"),onDeselect:()=>s({displayImage:t.uK.displayImage.default}),children:(0,i.jsx)(m.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,b.__)("Display image","snow-monkey-blocks"),checked:L,onChange:e=>s({displayImage:e})})}),L&&0<G.length&&(0,i.jsx)(w,{defaultValue:t.uK.imageSizeSlug.default,value:V,options:G,onChange:e=>{const t=F?.media_details?.sizes?.[e]?.source_url,i=F?.media_details?.sizes?.[e]?.width,l=F?.media_details?.sizes?.[e]?.height;s({imageURL:t,imageWidth:i,imageHeight:l,imageSizeSlug:e})}})]}),(0,i.jsx)(m.__experimentalToolsPanel,{label:(0,b.__)("Link settings","snow-monkey-blocks"),children:(0,i.jsx)(m.__experimentalToolsPanelItem,{hasValue:()=>v!==t.uK.displayLink.default,isShownByDefault:!0,label:(0,b.__)("Display link","snow-monkey-blocks"),onDeselect:()=>s({displayLink:t.uK.displayLink.default}),children:(0,i.jsx)(m.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,b.__)("Display link","snow-monkey-blocks"),checked:v,onChange:e=>s({displayLink:e})})})})]}),(0,i.jsx)(r.BlockControls,{group:"block",children:(0,i.jsxs)(m.ToolbarGroup,{children:[(0,i.jsx)(m.ToolbarButton,{icon:h,title:(0,b.__)("Image position","snow-monkey-blocks"),isActive:"left"===S,onClick:()=>s({imagePosition:"left"})}),(0,i.jsx)(m.ToolbarButton,{icon:p,title:(0,b.__)("Show avatar on right","snow-monkey-blocks"),isActive:"right"===S,onClick:()=>s({imagePosition:"right"})})]})}),(0,i.jsx)("div",{...Q,children:(0,i.jsxs)("div",{className:O,style:J,children:[L&&(0,i.jsx)("div",{className:"smb-panels__item__figure",children:(0,i.jsx)(j,{src:z,id:U,alt:I,width:B,height:P,onSelect:e=>{const t=e?.sizes?.[V]?V:R,i=e?.sizes?.[t]?.url,l=e?.sizes?.[t]?.width,a=e?.sizes?.[t]?.height;s({imageURL:i||e.url,imageID:e.id,imageAlt:e.alt,imageWidth:l||e.width,imageHeight:a||e.height,imageSizeSlug:t})},onSelectURL:e=>{e!==z&&s({imageURL:e,imageID:0,mediaSizeSlug:R})},onRemove:()=>s({imageURL:t.uK.imageURL.default,imageAlt:t.uK.imageAlt.default,imageWidth:t.uK.imageWidth.default,imageHeight:t.uK.imageHeight.default,imageID:t.uK.imageID.default}),allowedTypes:T})}),(0,i.jsxs)("div",{className:"smb-panels__item__body",children:[(!r.RichText.isEmpty(x)||l)&&"none"!==g&&(0,i.jsx)(r.RichText,{tagName:g,className:"smb-panels__item__title",placeholder:(0,b.__)("Write title…","snow-monkey-blocks"),value:x,onChange:e=>s({title:e})}),(!r.RichText.isEmpty(k)||l)&&(0,i.jsx)(r.RichText,{className:"smb-panels__item__content",placeholder:(0,b.__)("Write content…","snow-monkey-blocks"),value:k,onChange:e=>s({summary:e})}),(M||v)&&(0,i.jsx)("div",{className:Y,children:v&&(0,i.jsx)(r.RichText,{className:"smb-panels__item__link",value:y,placeholder:(0,b.__)("Link","snow-monkey-blocks"),onChange:e=>s({linkLabel:N(e)}),ref:q})})]})]})}),(0,i.jsx)(r.BlockControls,{group:"block",children:(0,i.jsx)(m.ToolbarButton,{name:"link",icon:u,title:(0,b.__)("Link","snow-monkey-blocks"),onClick:e=>{e.preventDefault(),H(!0)},isActive:M})}),l&&E&&(0,i.jsx)(m.Popover,{placement:"bottom",anchor:K,onClose:()=>{H(!1),q.current?.focus()},children:(0,i.jsx)(r.__experimentalLinkControl,{className:"wp-block-navigation-link__inline-link-input",value:{url:f,opensInNewTab:A},onChange:({url:e,opensInNewTab:t})=>s({linkURL:e,linkTarget:t?"_blank":"_self"}),onRemove:()=>{s({linkURL:void 0,linkTarget:void 0}),H(!1)},forceIsEditingLink:!M})})]})},save:function({attributes:e}){const{titleTagName:t,title:s,summary:l,displayLink:a,linkLabel:o,linkURL:m,linkTarget:c,displayImage:_,imagePosition:d,imageID:g,imageURL:h,imageAlt:p,imageWidth:u,imageHeight:b}=e,x=(0,r.__experimentalGetColorClassesAndStyles)({style:{color:{...e?.style?.color}},backgroundColor:e?.backgroundColor||void 0,textColor:e?.textColor||void 0,gradient:e?.gradient||void 0}),k=n()("smb-panels__item","smb-panels__item--horizontal",x?.className,{"smb-panels__item--reverse":"right"===d}),v=x?.style,y=n()("smb-panels__item__action",{"smb-panels__item__action--nolabel":!o});return(0,i.jsx)("div",{...r.useBlockProps.save({className:"c-row__col"}),children:(0,i.jsxs)("div",{className:k,style:v,children:[_&&(0,i.jsx)("div",{className:"smb-panels__item__figure",children:(0,i.jsx)("img",{src:h,alt:p,width:!!u&&u,height:!!b&&b,className:`wp-image-${g}`})}),(0,i.jsxs)("div",{className:"smb-panels__item__body",children:[!r.RichText.isEmpty(s)&&"none"!==t&&(0,i.jsx)(r.RichText.Content,{tagName:t,className:"smb-panels__item__title",value:s}),!r.RichText.isEmpty(l)&&(0,i.jsx)("div",{className:"smb-panels__item__content",children:(0,i.jsx)(r.RichText.Content,{value:l})}),(!!m||a)&&(0,i.jsx)("div",{className:y,children:m?(0,i.jsx)("a",{href:m,target:"_self"===c?void 0:c,rel:"_self"===c?void 0:"noopener noreferrer",children:a&&(0,i.jsx)("div",{className:"smb-panels__item__link",children:(0,i.jsx)(r.RichText.Content,{value:o})})}):(0,i.jsx)(i.Fragment,{children:a&&(0,i.jsx)("div",{className:"smb-panels__item__link",children:(0,i.jsx)(r.RichText.Content,{value:o})})})})]})]})})},deprecated:S,transforms:U})})()})();