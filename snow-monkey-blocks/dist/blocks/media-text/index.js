(()=>{var e,t={6193:(e,t,i)=>{"use strict";const a=window.wp.blocks,l=window.wp.i18n,o=JSON.parse('{"UU":"snow-monkey-blocks/media-text","uK":{"backgroundColor":{"type":"string"},"backgroundGradientColor":{"type":"string"},"textColor":{"type":"string"},"titleTagName":{"type":"string","default":"h2"},"title":{"type":"string","source":"html","selector":".smb-media-text__title","default":""},"mediaId":{"type":"number","default":0},"mediaUrl":{"type":"string","source":"attribute","selector":".smb-media-text__figure img, .smb-media-text__figure video","attribute":"src","default":""},"mediaAlt":{"type":"string","source":"attribute","selector":".smb-media-text__figure img","attribute":"alt","default":""},"mediaWidth":{"type":"string","source":"attribute","selector":".smb-media-text__figure img, .smb-media-text__figure video","attribute":"width","default":""},"mediaHeight":{"type":"string","source":"attribute","selector":".smb-media-text__figure img, .smb-media-text__figure video","attribute":"height","default":""},"mediaSizeSlug":{"type":"string","default":"full"},"mediaType":{"type":"string"},"caption":{"type":"string","source":"html","selector":".smb-media-text__caption","default":""},"mediaPosition":{"type":"string","default":"right"},"verticalAlignment":{"type":"string","default":"center"},"mediaColumnSize":{"type":"string","default":66},"mobileOrder":{"type":"string"},"href":{"type":"string","default":""},"rel":{"type":"string","source":"attribute","selector":".smb-media-text__figure > a","attribute":"rel"},"linkClass":{"type":"string","source":"attribute","selector":".smb-media-text__figure > a","attribute":"class"},"linkDestination":{"type":"string"},"linkTarget":{"type":"string","source":"attribute","selector":".smb-media-text__figure > a","attribute":"target","default":"_self"},"imageFill":{"type":"boolean","default":false},"focalPoint":{"type":"object"},"splitPoint":{"type":"string","default":"lg"},"templateLock":{"type":["string","boolean"],"enum":["all","insert","contentOnly",false]}},"xY":{"anchor":true,"spacing":{"margin":true,"blockGap":true},"layout":{"allowSwitching":false,"allowEditing":false,"allowInheriting":false,"default":{"type":"constrained"}}}}'),s=window.ReactJSXRuntime,r=(0,s.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,s.jsx)("path",{d:"M0,7.11v9.78a.61.61,0,0,0,.61.61h9.78a.61.61,0,0,0,.61-.61V7.11a.61.61,0,0,0-.61-.61H.61A.61.61,0,0,0,0,7.11m9.78,9.47H1.22a.29.29,0,0,1-.3-.3V7.72a.29.29,0,0,1,.3-.3H9.78a.29.29,0,0,1,.3.3v8.56a.29.29,0,0,1-.3.3"}),(0,s.jsx)("path",{d:"M.92,13.7,3.33,12a.15.15,0,0,1,.17,0l1.84,1.18a.15.15,0,0,0,.19,0l2.31-2.22a.15.15,0,0,1,.21,0l2.43,2.37v.91L8.05,11.8a.14.14,0,0,0-.21,0L5.53,14a.17.17,0,0,1-.19,0L3.5,12.87a.15.15,0,0,0-.18,0L.92,14.62Z"}),(0,s.jsx)("rect",{y:"6.5",width:"11",height:"11",fill:"none"}),(0,s.jsx)("rect",{x:"13.5",y:"8.5",width:"10.5",height:"1"}),(0,s.jsx)("rect",{x:"13.5",y:"11.5",width:"10.5",height:"1"}),(0,s.jsx)("rect",{x:"13.5",y:"14.5",width:"10.5",height:"1"})]});var n=i(6942),m=i.n(n);const d=window.lodash,c=window.wp.components,u=window.wp.blockEditor,g=window.wp.data,_=window.wp.primitives,h=(0,s.jsx)(_.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(_.Path,{d:"M4 18h6V6H4v12zm9-9.5V10h7V8.5h-7zm0 7h7V14h-7v1.5z"})}),p=(0,s.jsx)(_.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(_.Path,{d:"M14 6v12h6V6h-6zM4 10h7V8.5H4V10zm0 5.5h7V14H4v1.5z"})}),b=(e,t=null)=>{let i="1-3",a="2-3";return 75===parseInt(e)?(i="1-4",a="3-4"):66===parseInt(e)?(i="1-3",a="2-3"):50===parseInt(e)?(i="1-2",a="1-2"):33===parseInt(e)?(i="2-3",a="1-3"):25===parseInt(e)&&(i="3-4",a="1-4"),t&&100-parseInt(e)>=parseInt(t)&&(75===parseInt(t)?i="3-4":66===parseInt(t)?i="2-3":50===parseInt(t)?i="1-2":33===parseInt(t)?i="1-3":25===parseInt(t)&&(i="1-4")),{textColumnWidth:i,mediaColumnWidth:a,imageColumnWidth:a}},x=e=>e.media_type?"image"===e.media_type?"image":"video":e.type,f=["avi","mpg","mpeg","mov","mp4","m4v","ogg","ogv","webm","wmv"];function w(e=""){return!!e&&f.includes(function(e=""){const t=e.split(".");return t[t.length-1]}(e))}const y=window.wp.element,v=({id:e,src:t,allowedTypes:i,accept:a,onSelect:o,onSelectURL:r,onRemove:n})=>(0,s.jsxs)(u.BlockControls,{group:"inline",children:[(0,s.jsx)(u.MediaReplaceFlow,{mediaId:e,mediaURL:t,allowedTypes:i,accept:a,onSelect:o,onSelectURL:r}),!!t&&!!n&&(0,s.jsx)(c.ToolbarButton,{onClick:n,children:(0,l.__)("Release","snow-monkey-blocks")})]}),k=({src:e,alt:t,id:i,style:a,width:l,height:o})=>(0,s.jsx)("img",{src:e,alt:t,className:`wp-image-${i}`,style:a,width:l,height:o}),j=({src:e,style:t,width:i,height:a})=>(0,s.jsx)("video",{src:e,style:t,width:i,height:a}),C=(0,y.memo)((({id:e,src:t,alt:i,url:a,width:l,height:o,target:r,allowedTypes:n,accept:m,onSelect:c,onSelectURL:u,onRemove:g,mediaType:_,style:h,rel:p,linkClass:b})=>{let x;if("image"===_){let n;x=(0,s.jsx)(k,{src:t,alt:i,id:e,style:h,width:l,height:o}),n=p?(0,d.isEmpty)(p)?void 0:p:"_self"!==r&&r?"noopener noreferrer":void 0,a&&(x=(0,s.jsx)("span",{href:a,target:"_self"===r?void 0:r,rel:n,className:b,children:x}))}else"video"===_&&(x=(0,s.jsx)(j,{src:t,style:h,width:l,height:o}));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v,{id:e,src:t,allowedTypes:n,accept:m,onSelect:c,onSelectURL:u,onRemove:g}),x]})}),((e,t)=>{const i=Object.keys(e);for(const a of i)if(e[a]!==t[a])return!1;return!0}));function S(e){const{src:t,onSelect:i,onSelectURL:a,mediaType:o,allowedTypes:r=["image"]}=e,n=!o&&t?"image":o;let m=(0,l.__)("Media","snow-monkey-blocks");1===r.length&&("image"===r[0]?m=(0,l.__)("Image","snow-monkey-blocks"):"video"===r[0]&&(m=(0,l.__)("Video","snow-monkey-blocks")));const d=(0,y.useMemo)((()=>r.map((e=>`${e}/*`)).join(",")),[r]);return t?(0,s.jsx)(C,{...e,accept:d,allowedTypes:r,mediaType:n}):(0,s.jsx)(u.MediaPlaceholder,{icon:"format-image",labels:{title:m},onSelect:i,onSelectURL:a,accept:d,allowedTypes:r})}const T=[{label:(0,l._x)("Thumbnail","Image size option for resolution control"),value:"thumbnail"},{label:(0,l._x)("Medium","Image size option for resolution control"),value:"medium"},{label:(0,l._x)("Large","Image size option for resolution control"),value:"large"},{label:(0,l._x)("Full Size","Image size option for resolution control"),value:"full"}];function N({panelId:e,value:t,onChange:i,options:a=T,defaultValue:o=T[0].value,isShownByDefault:r=!0,withToolsPanelItem:n=!0}){const m=null!=t?t:o,d=()=>(0,s.jsx)(c.SelectControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:(0,l.__)("Resolution"),value:m,options:a,onChange:i,help:(0,l.__)("Select the size of the source image."),size:"__unstable-large"});return n?(0,s.jsx)(c.__experimentalToolsPanelItem,{hasValue:()=>m!==o,label:(0,l.__)("Resolution"),onDeselect:()=>i(o),isShownByDefault:r,panelId:e,children:(0,s.jsx)(d,{})}):(0,s.jsx)(d,{})}const I=["image","video"],z="media",P="attachment",R="full",B=[{attributes:{...o.uK},supports:{...o.xY},save({attributes:e,className:t}){const{titleTagName:i,title:a,mediaId:l,mediaUrl:o,mediaAlt:r,mediaWidth:n,mediaHeight:c,mediaType:g,caption:_,mediaPosition:h,verticalAlignment:p,mediaColumnSize:x,mobileOrder:f,href:w,rel:y,linkClass:v,linkTarget:k}=e,j=(0,d.isEmpty)(y)?void 0:y,{textColumnWidth:C,mediaColumnWidth:S}=b(x),T=m()("smb-media-text",t,{[`smb-media-text--mobile-${f}`]:!!f}),N=m()("c-row","c-row--margin",{"c-row--reverse":"left"===h,"c-row--top":"top"===p,"c-row--middle":"center"===p,"c-row--bottom":"bottom"===p}),I=m()("c-row__col","c-row__col--1-1",[`c-row__col--lg-${C}`]),z=m()("c-row__col","c-row__col--1-1",[`c-row__col--lg-${S}`]),P=(0,s.jsx)("img",{src:o,alt:r,width:!!n&&n,height:!!c&&c,className:`wp-image-${l}`}),R=(0,s.jsx)("video",{controls:!0,src:o,width:!!n&&n,height:!!c&&c});let B;return o&&("image"===g||void 0===g?B=w?(0,s.jsx)("a",{href:w,target:k,className:v,rel:j,children:P}):P:"video"===g&&(B=R)),(0,s.jsx)("div",{...u.useBlockProps.save({className:T}),children:(0,s.jsxs)("div",{className:N,children:[(0,s.jsxs)("div",{className:I,children:[!u.RichText.isEmpty(a)&&"none"!==i&&(0,s.jsx)(u.RichText.Content,{className:"smb-media-text__title",tagName:i,value:a}),(0,s.jsx)("div",{...u.useInnerBlocksProps.save({className:"smb-media-text__body"})})]}),(0,s.jsxs)("div",{className:z,children:[(0,s.jsx)("div",{className:"smb-media-text__figure",children:B}),!u.RichText.isEmpty(_)&&(0,s.jsx)(u.RichText.Content,{tagName:"div",className:"smb-media-text__caption",value:_})]})]})})}},{attributes:{...o.uK,url:{type:"string",default:""},imageMediaType:{type:"string"},imageSizeSlug:{type:"string",default:"full"},imagePosition:{type:"string",default:"right"},imageID:{type:"number",default:0},imageURL:{type:"string",source:"attribute",selector:".smb-media-text__figure img, .smb-media-text__figure video",attribute:"src",default:""},imageAlt:{type:"string",source:"attribute",selector:".smb-media-text__figure img",attribute:"alt",default:""},imageWidth:{type:"string",source:"attribute",selector:".smb-media-text__figure img, .smb-media-text__figure video",attribute:"width",default:""},imageHeight:{type:"string",source:"attribute",selector:".smb-media-text__figure img, .smb-media-text__figure video",attribute:"height",default:""},imageColumnSize:{type:"string",default:66},target:{type:"string",default:"_self"}},migrate:e=>({...e,href:e.url,mediaType:e.imageMediaType,mediaSizeSlug:e.imageSizeSlug,mediaPosition:e.imagePosition,mediaId:e.imageID,mediaUrl:e.imageURL,mediaAlt:e.imageAlt,mediaWidth:e.imageWidth,mediaHeight:e.imageHeight,mediaColumnSize:e.imageColumnSize,linkTarget:e.target}),save({attributes:e,className:t}){const{titleTagName:i,title:a,imageID:l,imageURL:o,imageAlt:r,imageWidth:n,imageHeight:d,imageMediaType:c,caption:g,imagePosition:_,verticalAlignment:h,imageColumnSize:p,mobileOrder:x,url:f,target:w}=e,{textColumnWidth:y,imageColumnWidth:v}=b(p),k=m()("smb-media-text",t,{[`smb-media-text--mobile-${x}`]:!!x}),j=m()("c-row","c-row--margin",{"c-row--reverse":"left"===_,"c-row--top":"top"===h,"c-row--middle":"center"===h,"c-row--bottom":"bottom"===h}),C=m()("c-row__col","c-row__col--1-1",[`c-row__col--lg-${y}`]),S=m()("c-row__col","c-row__col--1-1",[`c-row__col--lg-${v}`]),T=(0,s.jsx)("img",{src:o,alt:r,width:!!n&&n,height:!!d&&d,className:`wp-image-${l}`}),N=(0,s.jsx)("video",{controls:!0,src:o,width:!!n&&n,height:!!d&&d});let I;return o&&("image"===c||void 0===c?I=f?(0,s.jsx)("a",{href:f,target:"_self"===w?void 0:w,rel:"_self"===w?void 0:"noopener noreferrer",children:T}):T:"video"===c&&(I=N)),(0,s.jsx)("div",{...u.useBlockProps.save({className:k}),children:(0,s.jsxs)("div",{className:j,children:[(0,s.jsxs)("div",{className:C,children:[!u.RichText.isEmpty(a)&&"none"!==i&&(0,s.jsx)(u.RichText.Content,{className:"smb-media-text__title",tagName:i,value:a}),(0,s.jsx)("div",{className:"smb-media-text__body",children:(0,s.jsx)(u.InnerBlocks.Content,{})})]}),(0,s.jsxs)("div",{className:S,children:[(0,s.jsx)("div",{className:"smb-media-text__figure",children:I}),!u.RichText.isEmpty(g)&&(0,s.jsx)("div",{className:"smb-media-text__caption",children:(0,s.jsx)(u.RichText.Content,{value:g})})]})]})})}},{attributes:{...o.uK,url:{type:"string",default:""},imageMediaType:{type:"string"},imageSizeSlug:{type:"string",default:"full"},imagePosition:{type:"string",default:"right"},imageID:{type:"number",default:0},imageURL:{type:"string",source:"attribute",selector:".smb-media-text__figure img, .smb-media-text__figure video",attribute:"src",default:""},imageAlt:{type:"string",source:"attribute",selector:".smb-media-text__figure img",attribute:"alt",default:""},imageWidth:{type:"string",source:"attribute",selector:".smb-media-text__figure img, .smb-media-text__figure video",attribute:"width",default:""},imageHeight:{type:"string",source:"attribute",selector:".smb-media-text__figure img, .smb-media-text__figure video",attribute:"height",default:""},imageColumnSize:{type:"string",default:66},target:{type:"string",default:"_self"}},save({attributes:e}){const{title:t,imageID:i,imageURL:a,imagePosition:l,imageColumnSize:o}=e,{textColumnWidth:r,imageColumnWidth:n}=b(o);return(0,s.jsx)("div",{className:"smb-media-text",children:(0,s.jsxs)("div",{className:m()("c-row","c-row--margin","c-row--middle",{"c-row--reverse":"left"===l}),children:[(0,s.jsxs)("div",{className:`c-row__col c-row__col--1-1 c-row__col--lg-${r}`,children:[!u.RichText.isEmpty(t)&&(0,s.jsx)("h2",{className:"smb-media-text__title",children:(0,s.jsx)(u.RichText.Content,{value:t})}),(0,s.jsx)("div",{className:"smb-media-text__body",children:(0,s.jsx)(u.InnerBlocks.Content,{})})]}),(0,s.jsx)("div",{className:`c-row__col c-row__col--1-1 c-row__col--lg-${n}`,children:(0,s.jsx)("div",{className:"smb-media-text__figure",children:a&&(0,s.jsx)("img",{src:a,alt:"",className:`wp-image-${i}`})})})]})})}},{attributes:{...o.uK,url:{type:"string",default:""},imageMediaType:{type:"string"},imageSizeSlug:{type:"string",default:"full"},imagePosition:{type:"string",default:"right"},imageID:{type:"number",default:0},imageURL:{type:"string",source:"attribute",selector:".smb-media-text__figure img, .smb-media-text__figure video",attribute:"src",default:""},imageAlt:{type:"string",source:"attribute",selector:".smb-media-text__figure img",attribute:"alt",default:""},imageWidth:{type:"string",source:"attribute",selector:".smb-media-text__figure img, .smb-media-text__figure video",attribute:"width",default:""},imageHeight:{type:"string",source:"attribute",selector:".smb-media-text__figure img, .smb-media-text__figure video",attribute:"height",default:""},imageColumnSize:{type:"string",default:66},target:{type:"string",default:"_self"}},save({attributes:e}){const{title:t,imageURL:i,imagePosition:a,imageColumnSize:l}=e,{textColumnWidth:o,imageColumnWidth:r}=b(l);return(0,s.jsx)("div",{className:"smb-media-text",children:(0,s.jsxs)("div",{className:m()("c-row","c-row--margin","c-row--middle",{"c-row--reverse":"left"===a}),children:[(0,s.jsxs)("div",{className:`c-row__col c-row__col--1-1 c-row__col--lg-${o}`,children:[!u.RichText.isEmpty(t)&&(0,s.jsx)("h2",{className:"smb-media-text__title",children:(0,s.jsx)(u.RichText.Content,{value:t})}),(0,s.jsx)("div",{className:"smb-media-text__body",children:(0,s.jsx)(u.InnerBlocks.Content,{})})]}),(0,s.jsx)("div",{className:`c-row__col c-row__col--1-1 c-row__col--lg-${r}`,children:(0,s.jsx)("div",{className:"smb-media-text__figure",children:i&&(0,s.jsx)("img",{src:i,alt:""})})})]})})}}],U={attributes:{mediaId:1,mediaUrl:`${smb.pluginUrl}/dist/img/photos/man-guy-photographer1579.jpg`},innerBlocks:[{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}}]};(0,a.registerBlockType)(o.UU,{icon:{foreground:"#cd162c",src:r},keywords:[(0,l.__)("Image","snow-monkey-blocks"),(0,l.__)("Video","snow-monkey-blocks"),(0,l.__)("Media & sentence","snow-monkey-blocks")],edit:function({attributes:e,setAttributes:t,isSelected:i,className:a,clientId:r}){const{backgroundColor:n,backgroundGradientColor:_,textColor:f,titleTagName:y,title:v,mediaId:k,mediaUrl:j,mediaAlt:C,mediaWidth:T,mediaHeight:B,mediaSizeSlug:U,caption:D,mediaPosition:W,verticalAlignment:A,mediaColumnSize:V,mobileOrder:H,href:L,linkTarget:$,rel:K,linkClass:M,linkDestination:O,mediaType:G,imageFill:E,focalPoint:F,splitPoint:J,templateLock:Y}=e,q=(0,g.useSelect)((e=>!!e("core/block-editor").getBlock(r)?.innerBlocks?.length),[r]),X=(0,g.useSelect)((e=>e("core/block-editor").getSettings()?.imageSizes),[]),Z=(0,g.useSelect)((e=>k?e("core").getMedia(k,{context:"view"}):null),[k]),Q=X.filter((({slug:e})=>Z?.media_details?.sizes?.[e]?.source_url)).map((({name:e,slug:t})=>({value:t,label:e}))),ee="image"===G&&E,te=["h1","h2","h3","none"],{textColumnWidth:ie,mediaColumnWidth:ae}=b(V),le=m()("smb-media-text",a,{"smb-media-text--has-background":!!n||!!_,[`smb-media-text--mobile-${H}`]:!!H}),oe=m()("c-row",{"c-row--reverse":"left"===W,"c-row--top":!ee&&"top"===A,"c-row--middle":!ee&&"center"===A,"c-row--bottom":!ee&&"bottom"===A,"c-row--fill":ee}),se=m()("c-row__col","c-row__col--1-1",[`c-row__col--${J}-${ie}`]),re=m()("c-row__col","c-row__col--1-1",[`c-row__col--${J}-${ae}`]),ne=(0,u.useBlockProps)({className:le,style:{"--smb-media-text--background-color":n,"--smb-media-text--background-image":_,"--smb-media-text--color":f,"--smb-media-text--image-position-x":ee&&F?.x?100*F.x+"%":void 0,"--smb-media-text--image-position-y":ee&&F?.y?100*F.y+"%":void 0,"--smb-media-text--gap":(0,u.__experimentalGetGapCSSValue)(e?.style?.spacing?.blockGap)||void 0},"data-sm-split-point":J}),me=(0,u.useInnerBlocksProps)({className:"smb-media-text__body"},{templateLock:Y,renderAppender:q?void 0:u.InnerBlocks.ButtonBlockAppender});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.InspectorControls,{group:"color",children:(0,s.jsx)(u.__experimentalColorGradientSettingsDropdown,{panelId:r,__experimentalIsRenderedInSidebar:!0,...(0,u.__experimentalUseMultipleOriginColorsAndGradients)(),settings:[{colorValue:n,resetAllFilter:()=>({backgroundColor:o.backgroundColor,backgroundGradientColor:o.backgroundGradientColor}),onColorChange:e=>t({backgroundColor:e}),gradientValue:_,onGradientChange:e=>t({backgroundGradientColor:e}),label:(0,l.__)("Background color","snow-monkey-blocks")},{colorValue:f,resetAllFilter:()=>({textColor:o.textColor}),onColorChange:e=>t({textColor:e}),label:(0,l.__)("Text color","snow-monkey-blocks")}]})}),(0,s.jsx)(u.InspectorControls,{children:(0,s.jsxs)(c.__experimentalToolsPanel,{label:(0,l.__)("Block settings","snow-monkey-blocks"),children:[(0,s.jsx)(c.__experimentalToolsPanelItem,{hasValue:()=>V!==o.uK.mediaColumnSize.default,isShownByDefault:!0,label:(0,l.__)("Image column size","snow-monkey-blocks"),onDeselect:()=>t({mediaColumnSize:o.uK.mediaColumnSize.default}),children:(0,s.jsx)(c.SelectControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:(0,l.__)("Image column size","snow-monkey-blocks"),value:V,options:[{value:66,label:(0,l.__)("66%","snow-monkey-blocks")},{value:50,label:(0,l.__)("50%","snow-monkey-blocks")},{value:33,label:(0,l.__)("33%","snow-monkey-blocks")},{value:25,label:(0,l.__)("25%","snow-monkey-blocks")}],onChange:e=>t({mediaColumnSize:e})})}),0<Q.length&&(0,s.jsx)(N,{defaultValue:o.uK.mediaSizeSlug.default,value:U,options:Q,onChange:e=>{const i=Z?.media_details?.sizes?.[e]?.source_url,a=Z?.media_details?.sizes?.[e]?.width,l=Z?.media_details?.sizes?.[e]?.height;t({mediaUrl:i,mediaWidth:a,mediaHeight:l,mediaSizeSlug:e})}}),"image"===G&&(0,s.jsx)(c.__experimentalToolsPanelItem,{hasValue:()=>E!==o.uK.imageFill.default,isShownByDefault:!0,label:(0,l.__)("Crop image to fill entire column","snow-monkey-blocks"),onDeselect:()=>t({imageFill:o.uK.imageFill.default}),children:(0,s.jsx)(c.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Crop image to fill entire column","snow-monkey-blocks"),checked:E,onChange:e=>t({imageFill:e})})}),ee&&(0,s.jsx)(c.__experimentalToolsPanelItem,{hasValue:()=>F!==o.uK.focalPoint.default,isShownByDefault:!0,label:(0,l.__)("Focal point picker","snow-monkey-blocks"),onDeselect:()=>t({focalPoint:o.uK.focalPoint.default}),children:(0,s.jsx)(c.FocalPointPicker,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Focal point picker","snow-monkey-blocks"),url:j,value:F,onChange:e=>{t({focalPoint:e})},onDrag:e=>t({focalPoint:e})})}),(0,s.jsx)(c.__experimentalToolsPanelItem,{hasValue:()=>H!==o.uK.mobileOrder.default,isShownByDefault:!0,label:(0,l.__)("Sort by mobile","snow-monkey-blocks"),onDeselect:()=>t({mobileOrder:o.uK.mobileOrder.default}),children:(0,s.jsx)(c.SelectControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:(0,l.__)("Sort by mobile","snow-monkey-blocks"),value:H,options:[{value:"",label:(0,l.__)("Default","snow-monkey-blocks")},{value:"text",label:(0,l.__)("Text > Image","snow-monkey-blocks")},{value:"image",label:(0,l.__)("Image > Text","snow-monkey-blocks")}],onChange:e=>t({mobileOrder:""===e?void 0:e})})}),(0,s.jsx)(c.__experimentalToolsPanelItem,{hasValue:()=>J!==o.uK.splitPoint.default,isShownByDefault:!0,label:(0,l.__)("When to divide columns","snow-monkey-blocks"),onDeselect:()=>t({splitPoint:o.uK.splitPoint.default}),children:(0,s.jsx)(c.SelectControl,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:(0,l.__)("When to divide columns","snow-monkey-blocks"),value:J,options:[{value:"lg",label:(0,l.__)("PC","snow-monkey-blocks")},{value:"md",label:(0,l.__)("Tablet","snow-monkey-blocks")}],onChange:e=>t({splitPoint:e})})}),(0,s.jsx)(c.__experimentalToolsPanelItem,{hasValue:()=>y!==o.uK.titleTagName.default,isShownByDefault:!0,label:(0,l.__)("Title tag","snow-monkey-blocks"),onDeselect:()=>t({titleTagName:o.uK.titleTagName.default}),children:(0,s.jsx)(c.BaseControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Title tag","snow-monkey-blocks"),id:"snow-monkey-blocks/media-text/title-tag-name",children:(0,s.jsx)("div",{className:"smb-list-icon-selector",children:(0,d.times)(te.length,(e=>(0,s.jsx)(c.Button,{variant:y===te[e]?"primary":"secondary",onClick:()=>t({titleTagName:te[e]}),children:te[e]},e)))})})})]})}),(0,s.jsxs)(u.BlockControls,{group:"block",children:[!ee&&(0,s.jsx)(u.BlockVerticalAlignmentToolbar,{onChange:e=>t({verticalAlignment:e}),value:A}),(0,s.jsxs)(c.ToolbarGroup,{children:[(0,s.jsx)(c.ToolbarButton,{icon:h,title:(0,l.__)("Show media on left","snow-monkey-blocks"),isActive:"left"===W,onClick:()=>t({mediaPosition:"left"})}),(0,s.jsx)(c.ToolbarButton,{icon:p,title:(0,l.__)("Show media on right","snow-monkey-blocks"),isActive:"right"===W,onClick:()=>t({mediaPosition:"right"})}),j&&("image"===G||void 0===G)&&(0,s.jsx)(u.__experimentalImageURLInputUI,{url:L||"",onChangeUrl:e=>{t(e)},linkDestination:O,mediaType:G,mediaUrl:j,mediaLink:Z&&Z.link,linkTarget:$,linkClass:M,rel:K})]})]}),(0,s.jsx)("div",{...ne,children:(0,s.jsxs)("div",{className:oe,children:[(0,s.jsx)("div",{className:se,children:(0,s.jsxs)("div",{className:"smb-media-text__contents-wrapper",children:[(!u.RichText.isEmpty(v)||i)&&"none"!==y&&(0,s.jsx)(u.RichText,{className:"smb-media-text__title",tagName:y,value:v,onChange:e=>t({title:e}),placeholder:(0,l.__)("Write title…","snow-monkey-blocks")}),(0,s.jsx)("div",{...me})]})}),(0,s.jsxs)("div",{className:re,children:[(0,s.jsx)("div",{className:m()("smb-media-text__figure",{"smb-media-text__figure--fill":ee}),children:(0,s.jsx)(S,{src:j,id:k,alt:C,url:L,width:T,height:B,target:$,onSelect:e=>{const i=e?.sizes?.[U]?U:R,a=e?.sizes?.[i]?.url,l=e?.sizes?.[i]?.width,o=e?.sizes?.[i]?.height;let s=L;O===z&&(s=e.url),O===P&&(s=e.link),t({mediaType:x(e),mediaLink:e.link||void 0,mediaId:e.id,mediaUrl:a||e.url,mediaAlt:e.alt,mediaWidth:l||e.width,mediaHeight:o||e.height,mediaSizeSlug:i,href:s})},onSelectURL:e=>{if(e!==j){let i=L;O===z&&(i=e),O===P&&(i=""),t({mediaUrl:e,mediaId:0,mediaSizeSlug:R,mediaType:x({media_type:w(e)?"video":"image"}),href:i})}},onRemove:()=>{t({mediaUrl:o.uK.mediaUrl.default,mediaAlt:o.uK.mediaAlt.default,mediaWidth:o.uK.mediaWidth.default,mediaHeight:o.uK.mediaHeight.default,mediaId:o.uK.mediaId.default,mediaType:o.uK.mediaType.default,href:o.uK.href.default,linkDestination:o.uK.linkDestination.default})},mediaType:G,allowedTypes:I,linkClass:M,rel:K})}),(!u.RichText.isEmpty(D)||i)&&(0,s.jsx)(u.RichText,{className:"smb-media-text__caption",placeholder:(0,l.__)("Write caption…","snow-monkey-blocks"),value:D,onChange:e=>t({caption:e})})]})]})})]})},save:function({attributes:e,className:t}){const{backgroundColor:i,backgroundGradientColor:a,textColor:l,titleTagName:o,title:r,mediaId:n,mediaUrl:c,mediaAlt:g,mediaWidth:_,mediaHeight:h,caption:p,mediaPosition:x,verticalAlignment:f,mediaColumnSize:w,mobileOrder:y,href:v,linkTarget:k,rel:j,linkClass:C,mediaType:S,imageFill:T,focalPoint:N,splitPoint:I}=e,z="image"===S&&T,P=(0,d.isEmpty)(j)?void 0:j,{textColumnWidth:R,mediaColumnWidth:B}=b(w),U=m()("smb-media-text",t,{"smb-media-text--has-background":!!i||!!a,[`smb-media-text--mobile-${y}`]:!!y}),D=m()("c-row",{"c-row--reverse":"left"===x,"c-row--top":!z&&"top"===f,"c-row--middle":!z&&"center"===f,"c-row--bottom":!z&&"bottom"===f,"c-row--fill":z}),W=m()("c-row__col","c-row__col--1-1",[`c-row__col--${I}-${R}`]),A=m()("c-row__col","c-row__col--1-1",[`c-row__col--${I}-${B}`]),V=(0,s.jsx)("img",{src:c,alt:g,width:!!_&&_,height:!!h&&h,className:`wp-image-${n}`}),H=(0,s.jsx)("video",{controls:!0,src:c,width:!!_&&_,height:!!h&&h});let L;return c&&("image"===S||void 0===S?L=v?(0,s.jsx)("a",{href:v,target:k,className:C,rel:P,children:V}):V:"video"===S&&(L=H)),(0,s.jsx)("div",{...u.useBlockProps.save({className:U,style:{"--smb-media-text--background-color":i,"--smb-media-text--background-image":a,"--smb-media-text--color":l,"--smb-media-text--image-position-x":z&&N?.x?100*N.x+"%":void 0,"--smb-media-text--image-position-y":z&&N?.y?100*N.y+"%":void 0,"--smb-media-text--gap":(0,u.__experimentalGetGapCSSValue)(e?.style?.spacing?.blockGap)||void 0},"data-sm-split-point":I}),children:(0,s.jsxs)("div",{className:D,children:[(0,s.jsx)("div",{className:W,children:(0,s.jsxs)("div",{className:"smb-media-text__contents-wrapper",children:[!u.RichText.isEmpty(r)&&"none"!==o&&(0,s.jsx)(u.RichText.Content,{className:"smb-media-text__title",tagName:o,value:r}),(0,s.jsx)("div",{...u.useInnerBlocksProps.save({className:"smb-media-text__body"})})]})}),(0,s.jsxs)("div",{className:A,children:[(0,s.jsx)("div",{className:m()("smb-media-text__figure",{"smb-media-text__figure--fill":z}),children:L}),!u.RichText.isEmpty(p)&&(0,s.jsx)(u.RichText.Content,{tagName:"div",className:"smb-media-text__caption",value:p})]})]})})},deprecated:B,example:U,styles:[{name:"default",label:(0,l.__)("Default","snow-monkey-blocks"),isDefault:!0},{name:"border",label:(0,l.__)("Border","snow-monkey-blocks")}]})},6942:(e,t)=>{var i;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e="",t=0;t<arguments.length;t++){var i=arguments[t];i&&(e=s(e,o(i)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return l.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var i in e)a.call(e,i)&&e[i]&&(t=s(t,i));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(l.default=l,e.exports=l):void 0===(i=function(){return l}.apply(t,[]))||(e.exports=i)}()}},i={};function a(e){var l=i[e];if(void 0!==l)return l.exports;var o=i[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.m=t,e=[],a.O=(t,i,l,o)=>{if(!i){var s=1/0;for(d=0;d<e.length;d++){for(var[i,l,o]=e[d],r=!0,n=0;n<i.length;n++)(!1&o||s>=o)&&Object.keys(a.O).every((e=>a.O[e](i[n])))?i.splice(n--,1):(r=!1,o<s&&(s=o));if(r){e.splice(d--,1);var m=l();void 0!==m&&(t=m)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[i,l,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={378:0,9198:0};a.O.j=t=>0===e[t];var t=(t,i)=>{var l,o,[s,r,n]=i,m=0;if(s.some((t=>0!==e[t]))){for(l in r)a.o(r,l)&&(a.m[l]=r[l]);if(n)var d=n(a)}for(t&&t(i);m<s.length;m++)o=s[m],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},i=globalThis.webpackChunk=globalThis.webpackChunk||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var l=a.O(void 0,[9198],(()=>a(6193)));l=a.O(l)})();