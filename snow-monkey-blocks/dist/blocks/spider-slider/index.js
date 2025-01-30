(()=>{var e,s={8838:(e,s,i)=>{"use strict";const a=window.wp.blocks,t=window.wp.i18n,l=JSON.parse('{"UU":"snow-monkey-blocks/spider-slider","uK":{"images":{"type":"array","default":[],"source":"query","selector":".smb-spider-slider .spider__slide","query":{"url":{"type":"string","source":"attribute","selector":".spider__figure","attribute":"src"},"alt":{"type":"string","source":"attribute","selector":".spider__figure","attribute":"alt"},"id":{"type":"string","source":"attribute","selector":".spider__figure","attribute":"data-image-id"},"width":{"type":"number","source":"attribute","selector":".spider__figure","attribute":"width"},"height":{"type":"number","source":"attribute","selector":".spider__figure","attribute":"height"},"caption":{"type":"string","source":"html","selector":".smb-spider-slider__item__caption","default":""}}},"sizeSlug":{"type":"string","default":"full"},"dots":{"type":"boolean","default":false},"dotsToThumbnail":{"type":"boolean","default":false},"arrows":{"type":"boolean","default":false},"fade":{"type":"boolean","default":false},"shuffle":{"type":"boolean","default":false},"shifted":{"type":"boolean","default":false},"gutter":{"type":"string","default":""},"aspectRatio":{"type":"string","default":""},"displayCaption":{"type":"boolean","default":false},"interval":{"type":"number","default":0},"autoplayButton":{"type":"boolean","default":false},"duration":{"type":"number","default":0},"lgSlidesToShow":{"type":"number","default":1},"mdSlidesToShow":{"type":"number","default":1},"smSlidesToShow":{"type":"number","default":1}},"xY":{"align":["wide","full"],"spacing":{"margin":true}}}'),d=window.ReactJSXRuntime,r=(0,d.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,d.jsx)("path",{d:"M5,5.78V18.22a.78.78,0,0,0,.78.78H18.22a.78.78,0,0,0,.78-.78V5.78A.78.78,0,0,0,18.22,5H5.78A.78.78,0,0,0,5,5.78m12.44,12H6.56a.38.38,0,0,1-.39-.39V6.56a.38.38,0,0,1,.39-.39H17.44a.38.38,0,0,1,.39.39V17.44a.38.38,0,0,1-.39.39"}),(0,d.jsx)("path",{d:"M6.17,14.16l3.06-2.23a.22.22,0,0,1,.22,0l2.34,1.5a.21.21,0,0,0,.24,0l3-2.83a.19.19,0,0,1,.27,0l3.09,3v1.16l-3.09-3a.18.18,0,0,0-.27,0l-3,2.82a.19.19,0,0,1-.24,0L9.45,13.11a.18.18,0,0,0-.22,0L6.17,15.33Z"}),(0,d.jsx)("path",{d:"M2.22,5H0V6.17H1.44a.38.38,0,0,1,.39.39V17.44a.38.38,0,0,1-.39.39H0V19H2.22A.78.78,0,0,0,3,18.22V5.78A.78.78,0,0,0,2.22,5Z"}),(0,d.jsx)("path",{d:"M24,17.83H22.56a.38.38,0,0,1-.39-.39V6.56a.38.38,0,0,1,.39-.39H24V5H21.78a.78.78,0,0,0-.78.78V18.22a.78.78,0,0,0,.78.78H24Z"})]});var o=i(6942),n=i.n(o);const c=window.wp.blockEditor,h=window.wp.components,u=window.wp.data,m=window.wp.element,p=(0,m.forwardRef)((function({icon:e,size:s=24,...i},a){return(0,m.cloneElement)(e,{width:s,height:s,...i,ref:a})})),_=window.wp.primitives,g=(0,d.jsx)(_.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,d.jsx)(_.Path,{d:"M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12.75 8V13H11.25V8H12.75ZM12.75 14.5V16H11.25V14.5H12.75Z"})});function f(e){const{desktop:s,tablet:i,mobile:a}=e,t=[];return s&&t.push({name:"desktop",title:(0,d.jsx)(h.Dashicon,{icon:"desktop"})}),i&&t.push({name:"tablet",title:(0,d.jsx)(h.Dashicon,{icon:"tablet"})}),a&&t.push({name:"mobile",title:(0,d.jsx)(h.Dashicon,{icon:"smartphone"})}),(0,d.jsx)(h.TabPanel,{className:"smb-inspector-tabs",tabs:t,children:e=>{if(e.name){if("desktop"===e.name)return s();if("tablet"===e.name)return i();if("mobile"===e.name)return a()}}})}window.lodash;const w=(e,s=0,i=null)=>(e=Number(e),(isNaN(e)||e<s)&&(e=s),null!==i&&e>i&&(e=i),e);const x=["image"],b="full",v=l.uK,j=l.xY,N=[{attributes:{...v},supports:{...j},save({attributes:e,className:s}){const{images:i,aspectRatio:a,arrows:l,dots:r,dotsToThumbnail:o,fade:h,shuffle:u,shifted:m,gutter:p,displayCaption:_,interval:g,autoplayButton:f,duration:w,lgSlidesToShow:x,mdSlidesToShow:b,smSlidesToShow:v}=e;if(!i.length)return null;const j="wide"===e.align,N="full"===e.align,y=m&&!h&&(j||N),k=n()("smb-spider-slider",s,{[`smb-spider-slider--${a}`]:!!a,"smb-spider-slider--shifted":y,[`smb-spider-slider--gutter-${p}`]:!!p});return(0,d.jsxs)("div",{...c.useBlockProps.save({className:k}),"data-fade":h?"true":"false","data-shuffle":u?"true":"false","data-interval":0<g?1e3*g:void 0,"data-duration":0<w?1e3*w:void 0,"data-lg-slide-to-show":!h&&1<x?x:void 0,"data-md-slide-to-show":!h&&1<b?b:void 0,"data-sm-slide-to-show":!h&&1<v?v:void 0,children:[(0,d.jsxs)("div",{className:"spider",children:[y&&(0,d.jsx)("div",{className:"c-container",children:(0,d.jsx)("div",{className:"spider__reference"})}),(0,d.jsx)("div",{className:"spider__canvas",children:i.map(((e,s)=>(0,d.jsxs)("div",{className:"spider__slide","data-id":s,children:[(0,d.jsx)("div",{className:"smb-spider-slider__figure-wrapper",children:(0,d.jsx)("img",{className:`spider__figure wp-image-${e.id}`,src:e.url,alt:e.alt,width:e.width||e.sizes?.full?.width,height:e.height||e.sizes?.full?.height,"data-image-id":e.id})}),_&&!!e.caption&&(0,d.jsx)("div",{className:"smb-spider-slider__item",children:(0,d.jsx)("div",{className:"smb-spider-slider__item__caption",children:e.caption})})]},s)))}),l&&(0,d.jsxs)("div",{className:"spider__arrows",children:[(0,d.jsx)("button",{className:"spider__arrow","data-direction":"prev",children:"Prev"}),(0,d.jsx)("button",{className:"spider__arrow","data-direction":"next",children:"Next"})]})]}),(0<g&&f||r)&&(0,d.jsxs)("div",{className:"spider__dots","data-thumbnails":o?"true":"false",children:[f&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:"spider__stop",title:(0,t.__)("Pause autoplay","snow-monkey-blocks"),children:"⏸"}),(0,d.jsx)("button",{className:"spider__start",title:(0,t.__)("Start autoplay","snow-monkey-blocks"),children:"▶"})]}),r&&i.map(((e,s)=>(0,d.jsx)("button",{className:"spider__dot","data-id":s,children:o?(0,d.jsx)("img",{className:`spider__figure wp-image-${e.id}`,src:e.url,alt:e.alt,width:e.width||e.sizes?.full?.width,height:e.height||e.sizes?.full?.height}):(0,d.jsx)(d.Fragment,{children:s})},s)))]})]})}},{attributes:{...v},supports:{...j},save({attributes:e,className:s}){const{images:i,aspectRatio:a,arrows:t,dots:l,dotsToThumbnail:r,fade:o,shifted:h,gutter:u,displayCaption:m,interval:p,duration:_,lgSlidesToShow:g,mdSlidesToShow:f,smSlidesToShow:w}=e;if(!i.length)return null;const x="wide"===e.align,b="full"===e.align,v=h&&!o&&(x||b),j=n()("smb-spider-slider",s,{[`smb-spider-slider--${a}`]:!!a,"smb-spider-slider--shifted":v,[`smb-spider-slider--gutter-${u}`]:!!u});return(0,d.jsxs)("div",{...c.useBlockProps.save({className:j}),"data-fade":o?"true":"false","data-interval":0<p?1e3*p:void 0,"data-duration":0<_?1e3*_:void 0,"data-lg-slide-to-show":!o&&1<g?g:void 0,"data-md-slide-to-show":!o&&1<f?f:void 0,"data-sm-slide-to-show":!o&&1<w?w:void 0,children:[(0,d.jsxs)("div",{className:"spider",children:[v&&(0,d.jsx)("div",{className:"c-container",children:(0,d.jsx)("div",{className:"spider__reference"})}),(0,d.jsx)("div",{className:"spider__canvas",children:i.map(((e,s)=>(0,d.jsxs)("div",{className:"spider__slide","data-id":s,children:[(0,d.jsx)("div",{className:"smb-spider-slider__figure-wrapper",children:(0,d.jsx)("img",{className:`spider__figure wp-image-${e.id}`,src:e.url,alt:e.alt,width:e.width||e.sizes?.full?.width,height:e.height||e.sizes?.full?.height,"data-image-id":e.id})}),m&&!!e.caption&&(0,d.jsx)("div",{className:"smb-spider-slider__item",children:(0,d.jsx)("div",{className:"smb-spider-slider__item__caption",children:e.caption})})]},s)))}),t&&(0,d.jsxs)("div",{className:"spider__arrows",children:[(0,d.jsx)("button",{className:"spider__arrow","data-direction":"prev",children:"Prev"}),(0,d.jsx)("button",{className:"spider__arrow","data-direction":"next",children:"Next"})]})]}),l&&(0,d.jsx)("div",{className:"spider__dots","data-thumbnails":r?"true":"false",children:i.map(((e,s)=>(0,d.jsx)("button",{className:"spider__dot","data-id":s,children:r?(0,d.jsx)("img",{className:`spider__figure wp-image-${e.id}`,src:e.url,alt:e.alt,width:e.width||e.sizes?.full?.width,height:e.height||e.sizes?.full?.height}):(0,d.jsx)(d.Fragment,{children:s})},s)))})]})}},{attributes:{...v},supports:{...j},save({attributes:e,className:s}){const{images:i,aspectRatio:a,arrows:t,dots:l,dotsToThumbnail:r,fade:o,shifted:h,gutter:u,displayCaption:m,interval:p,duration:_,lgSlidesToShow:g,mdSlidesToShow:f,smSlidesToShow:w}=e;if(!i.length)return null;const x="wide"===e.align,b="full"===e.align,v=h&&!o&&(x||b),j=n()("smb-spider-slider",s,{[`smb-spider-slider--${a}`]:!!a,"smb-spider-slider--shifted":v,[`smb-spider-slider--gutter-${u}`]:!!u});return(0,d.jsxs)("div",{...c.useBlockProps.save({className:j}),"data-fade":o?"true":"false","data-interval":0<p?1e3*p:void 0,"data-duration":0<_?1e3*_:void 0,"data-lg-slide-to-show":!o&&1<g?g:void 0,"data-md-slide-to-show":!o&&1<f?f:void 0,"data-sm-slide-to-show":!o&&1<w?w:void 0,children:[(0,d.jsxs)("div",{className:"spider",children:[v&&(0,d.jsx)("div",{className:"c-container",children:(0,d.jsx)("div",{className:"spider__reference"})}),(0,d.jsx)("div",{className:"spider__canvas",children:i.map(((e,s)=>(0,d.jsxs)("div",{className:"spider__slide","data-id":s,children:[(0,d.jsx)("div",{className:"smb-spider-slider__figure-wrapper",children:(0,d.jsx)("img",{className:"spider__figure",src:e.url,alt:e.alt,width:e.width,height:e.height,"data-image-id":e.id})}),m&&!!e.caption&&(0,d.jsx)("div",{className:"smb-spider-slider__item",children:(0,d.jsx)("div",{className:"smb-spider-slider__item__caption",children:e.caption})})]},s)))}),t&&(0,d.jsxs)("div",{className:"spider__arrows",children:[(0,d.jsx)("button",{className:"spider__arrow","data-direction":"prev",children:"Prev"}),(0,d.jsx)("button",{className:"spider__arrow","data-direction":"next",children:"Next"})]})]}),l&&(0,d.jsx)("div",{className:"spider__dots","data-thumbnails":r?"true":"false",children:i.map(((e,s)=>(0,d.jsx)("button",{className:"spider__dot","data-id":s,children:r?(0,d.jsx)("img",{className:"spider__figure",src:e.url,alt:e.alt,width:e.width,height:e.height}):(0,d.jsx)(d.Fragment,{children:s})},s)))})]})}},{attributes:{...v},supports:{...j},save({attributes:e,className:s}){const{images:i,aspectRatio:a,arrows:t,dots:l,dotsToThumbnail:r,fade:o,shifted:h,gutter:u,displayCaption:m,interval:p,lgSlidesToShow:_,mdSlidesToShow:g,smSlidesToShow:f}=e;if(!i.length)return null;const w="wide"===e.align,x="full"===e.align,b=!!h&&!o,v=n()("smb-spider-slider",s,{[`smb-spider-slider--${a}`]:!!a,"smb-spider-slider--shifted":b,[`smb-spider-slider--gutter-${u}`]:!!u});return(0,d.jsxs)("div",{...c.useBlockProps.save({className:v}),"data-fade":o?"true":"false","data-interval":0<p?1e3*p:void 0,"data-lg-slide-to-show":!o&&1<_?_:void 0,"data-md-slide-to-show":!o&&1<g?g:void 0,"data-sm-slide-to-show":!o&&1<f?f:void 0,children:[(0,d.jsxs)("div",{className:"spider",children:[(x||w)&&(0,d.jsx)("div",{className:"c-container",children:(0,d.jsx)("div",{className:"spider__reference"})}),(0,d.jsx)("div",{className:"spider__canvas",children:i.map(((e,s)=>(0,d.jsxs)("div",{className:"spider__slide","data-id":s,children:[(0,d.jsx)("div",{className:"smb-spider-slider__figure-wrapper",children:(0,d.jsx)("img",{className:"spider__figure",src:e.url,alt:e.alt,width:e.width,height:e.height,"data-image-id":e.id})}),m&&!!e.caption&&(0,d.jsx)("div",{className:"smb-spider-slider__item",children:(0,d.jsx)("div",{className:"smb-spider-slider__item__caption",children:e.caption})})]},s)))}),t&&(0,d.jsxs)("div",{className:"spider__arrows",children:[(0,d.jsx)("button",{className:"spider__arrow","data-direction":"prev",children:"Prev"}),(0,d.jsx)("button",{className:"spider__arrow","data-direction":"next",children:"Next"})]})]}),l&&(0,d.jsx)("div",{className:"spider__dots","data-thumbnails":r?"true":"false",children:i.map(((e,s)=>(0,d.jsx)("button",{className:"spider__dot","data-id":s,children:r?(0,d.jsx)("img",{className:"spider__figure",src:e.url,alt:e.alt,width:e.width,height:e.height}):(0,d.jsx)(d.Fragment,{children:s})},s)))})]})}},{attributes:{...v},supports:{...j},save({attributes:e,className:s}){const{images:i,aspectRatio:a,arrows:t,dots:l,dotsToThumbnail:r,fade:o,shifted:h,gutter:u,displayCaption:m,interval:p,lgSlidesToShow:_,mdSlidesToShow:g,smSlidesToShow:f}=e;if(!i.length)return null;const w=!o&&"full"===e.align,x=!!h&&w,b=n()("smb-spider-slider",s,{[`smb-spider-slider--${a}`]:!!a,"smb-spider-slider--shifted":x,[`smb-spider-slider--gutter-${u}`]:!!u});return(0,d.jsxs)("div",{...c.useBlockProps.save({className:b}),"data-fade":o?"true":"false","data-interval":0<p?1e3*p:void 0,"data-lg-slide-to-show":!o&&1<_?_:void 0,"data-md-slide-to-show":!o&&1<g?g:void 0,"data-sm-slide-to-show":!o&&1<f?f:void 0,children:[(0,d.jsxs)("div",{className:"spider",children:[x&&(0,d.jsx)("div",{className:"c-container",children:(0,d.jsx)("div",{className:"spider__reference"})}),(0,d.jsx)("div",{className:"spider__canvas",children:i.map(((e,s)=>(0,d.jsxs)("div",{className:"spider__slide","data-id":s,children:[(0,d.jsx)("div",{className:"smb-spider-slider__figure-wrapper",children:(0,d.jsx)("img",{className:"spider__figure",src:e.url,alt:e.alt,width:e.width,height:e.height,"data-image-id":e.id})}),m&&!!e.caption&&(0,d.jsx)("div",{className:"smb-spider-slider__item",children:(0,d.jsx)("div",{className:"smb-spider-slider__item__caption",children:e.caption})})]},s)))}),t&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:"spider__arrow","data-direction":"prev",children:"Prev"}),(0,d.jsx)("button",{className:"spider__arrow","data-direction":"next",children:"Next"})]})]}),l&&(0,d.jsx)("div",{className:"spider__dots","data-thumbnails":r?"true":"false",children:i.map(((e,s)=>(0,d.jsx)("button",{className:"spider__dot","data-id":s,children:r?(0,d.jsx)("img",{className:"spider__figure",src:e.url,alt:e.alt,width:e.width,height:e.height}):(0,d.jsx)(d.Fragment,{children:s})},s)))})]})}},{attributes:{...v},supports:{align:["wide","full"]},migrate:e=>("16to9"===e.aspectRatio&&(e.aspectRatio="16x9"),"4to3"===e.aspectRatio&&(e.aspectRatio="4x3"),e),save({attributes:e,className:s}){const{images:i,aspectRatio:a,arrows:t,dots:l,dotsToThumbnail:r,fade:o,displayCaption:h,interval:u,lgSlidesToShow:m,mdSlidesToShow:p,smSlidesToShow:_}=e;if(!i.length)return null;const g=n()("smb-spider-slider",s,{[`smb-spider-slider--${a}`]:!!a});return(0,d.jsxs)("div",{...c.useBlockProps.save({className:g}),"data-fade":o?"true":"false","data-interval":0<u?1e3*u:void 0,"data-lg-slide-to-show":!o&&1<m?m:void 0,"data-md-slide-to-show":!o&&1<p?p:void 0,"data-sm-slide-to-show":!o&&1<_?_:void 0,children:[(0,d.jsxs)("div",{className:"spider",children:[(0,d.jsx)("div",{className:"spider__canvas",children:i.map(((e,s)=>(0,d.jsxs)("div",{className:"spider__slide","data-id":s,children:[(0,d.jsx)("img",{className:"spider__figure",src:e.url,alt:e.alt,width:e.width,height:e.height,"data-image-id":e.id}),h&&!!e.caption&&(0,d.jsx)("div",{className:"smb-spider-slider__item",children:(0,d.jsx)("div",{className:"smb-spider-slider__item__caption",children:e.caption})})]},s)))}),t&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:"spider__arrow","data-direction":"prev",children:"Prev"}),(0,d.jsx)("button",{className:"spider__arrow","data-direction":"next",children:"Next"})]})]}),l&&(0,d.jsx)("div",{className:"spider__dots","data-thumbnails":r?"true":"false",children:i.map(((e,s)=>(0,d.jsx)("button",{className:"spider__dot","data-id":s,children:r?(0,d.jsx)("img",{className:"spider__figure",src:e.url,alt:e.alt,width:e.width,height:e.height}):(0,d.jsx)(d.Fragment,{children:s})},s)))})]})}}],y={attributes:{images:[{url:`${smb.pluginUrl}/dist/img/photos/beach-sand-coast2756.jpg`},{url:`${smb.pluginUrl}/dist/img/photos/man-guy-photographer1579.jpg`},{url:`${smb.pluginUrl}/dist/img/photos/building-architecture-sky2096.jpg`}],arrows:!0,dots:!0}};(0,a.registerBlockType)(l.UU,{icon:{foreground:"#cd162c",src:r},keywords:[(0,t.__)("Carousel","snow-monkey-blocks")],edit:function({attributes:e,setAttributes:s,className:i,isSelected:a,clientId:r}){const{images:o,sizeSlug:_,aspectRatio:v,arrows:j,dots:N,dotsToThumbnail:y,fade:k,shuffle:S,shifted:T,gutter:C,displayCaption:B,interval:P,autoplayButton:D,duration:z,lgSlidesToShow:K,mdSlidesToShow:M,smSlidesToShow:H}=e,V=!!o.length,{getSettings:$}=(0,u.useSelect)((e=>({getSettings:e("core/block-editor").getSettings})),[]),{resizedImages:R}=(0,u.useSelect)((e=>({resizedImages:o.map((s=>s.id&&a?e("core").getMedia(s.id,{context:"view"}):null)).filter(Boolean)})),[a,o,r]),I="wide"===e.align,F="full"===e.align,O=!k,A=T&&O&&(I||F),L=(0,m.useRef)(),Z=(0,m.useRef)(),U=(0,m.useRef)(),E=!!L.current&&L.current.offsetWidth;(0,m.useEffect)((()=>{const e=!!L.current&&!!U.current&&A&&Math.floor(L.current.offsetWidth);e&&(L.current.style.setProperty("--spider--canvas-width",`${e}px`),U.current.style.width=`${e}px`);const s=!!Z.current&&A&&Math.floor(Z.current.offsetWidth);s&&L.current.style.setProperty("--spider--reference-width",`${s}px`)}),[E,A]);const G=n()("smb-spider-slider",i,{[`smb-spider-slider--${v}`]:!!v,"smb-spider-slider--shifted":A,[`smb-spider-slider--gutter-${C}`]:!!C}),W=function(e,s,i){return(0,m.useMemo)((()=>function(){if(!e||0===e.length)return;const{imageSizes:a}=i();let t={};s&&(t=e.reduce(((e,s)=>{if(!s.id)return e;const i=a.reduce(((e,i)=>{const a=s.sizes?.[i.slug]?.url,t=s.media_details?.sizes?.[i.slug]?.source_url;return{...e,[i.slug]:a||t}}),{});return{...e,[parseInt(s.id,10)]:i}}),{}));const l=Object.values(t);return a.filter((({slug:e})=>l.some((s=>s[e])))).map((({name:e,slug:s})=>({value:s,label:e})))}()),[e,s])}(R,a,$),q=[{value:"",label:(0,t.__)("Default","snow-monkey-blocks")},{value:"16x9",label:(0,t.__)("16:9","snow-monkey-blocks")},{value:"4x3",label:(0,t.__)("4:3","snow-monkey-blocks")}],J=[{value:"",label:(0,t.__)("None","snow-monkey-blocks")},{value:"s",label:(0,t.__)("S","snow-monkey-blocks")},{value:"m",label:(0,t.__)("M","snow-monkey-blocks")},{value:"l",label:(0,t.__)("L","snow-monkey-blocks")}],Y=(0,d.jsx)(c.MediaPlaceholder,{addToGallery:V,isAppender:V,className:i,disableMediaButtons:V&&!a,icon:!V&&"format-gallery",labels:{title:!V&&(0,t.__)("Slider","snow-monkey-blocks"),instructions:!V&&(0,t.__)("Drag images, upload new ones or select files from your library.","snow-monkey-blocks")},onSelect:e=>{const i=e.map((e=>{if(!e.id)return e;const s=e?.sizes[_]?_:b,i=e?.sizes[s]?.url,a=e?.sizes[s]?.width,t=e?.sizes[s]?.height;return{url:i,alt:e.alt,id:e.id,width:a,height:t,caption:e.caption}}));s({images:i})},accept:"image/*",allowedTypes:x,multiple:!0,value:o});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c.InspectorControls,{group:"dimensions",children:(0,d.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>C!==l.uK.gutter.default,isShownByDefault:!0,label:(0,t.__)("Gap","snow-monkey-blocks"),onDeselect:()=>s({gutter:l.uK.gutter.default}),panelId:r,children:(0,d.jsx)(h.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,t.__)("Gap","snow-monkey-blocks"),value:C,onChange:e=>s({gutter:e}),options:J})})}),(0,d.jsx)(c.InspectorControls,{children:(0,d.jsxs)(h.__experimentalToolsPanel,{label:(0,t.__)("Block settings","snow-monkey-blocks"),children:[(0,d.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>_!==l.uK.sizeSlug.default,isShownByDefault:!0,label:(0,t.__)("Images size","snow-monkey-blocks"),onDeselect:()=>s({sizeSlug:l.uK.sizeSlug.default}),children:(0,d.jsx)(h.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,t.__)("Images size","snow-monkey-blocks"),value:_,options:W,onChange:e=>{const i=R.map((s=>{if(!s.id)return s;const i=s?.media_details?.sizes?.[e]?e:b,a=s?.media_details?.sizes?.[i]?.source_url,t=s?.media_details?.sizes?.[i]?.width,l=s?.media_details?.sizes?.[i]?.height;return{url:a,alt:s.alt,id:s.id,width:t,height:l,caption:s.caption.rendered}}));s({images:i,sizeSlug:e})},help:(0,t.__)("Select the size of the source image.")})}),(0,d.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>v!==l.uK.aspectRatio.default,isShownByDefault:!0,label:(0,t.__)("Aspect ratio","snow-monkey-blocks"),onDeselect:()=>s({aspectRatio:l.uK.aspectRatio.default}),children:(0,d.jsx)(h.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,t.__)("Aspect ratio","snow-monkey-blocks"),value:v,onChange:e=>s({aspectRatio:e}),options:q})}),(0,d.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>j!==l.uK.arrows.default,isShownByDefault:!0,label:(0,t.__)("Display arrows","snow-monkey-blocks"),onDeselect:()=>s({arrows:l.uK.arrows.default}),children:(0,d.jsx)(h.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,t.__)("Display arrows","snow-monkey-blocks"),checked:j,onChange:e=>s({arrows:e})})}),(0,d.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>N!==l.uK.dots.default,isShownByDefault:!0,label:(0,t.__)("Display dots","snow-monkey-blocks"),onDeselect:()=>s({dots:l.uK.dots.default}),children:(0,d.jsx)(h.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,t.__)("Display dots","snow-monkey-blocks"),checked:N,onChange:e=>s({dots:e})})}),N&&(0,d.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>y!==l.uK.dotsToThumbnail.default,isShownByDefault:!0,label:(0,t.__)("Change dots to thumbnails","snow-monkey-blocks"),onDeselect:()=>s({dotsToThumbnail:l.uK.dotsToThumbnail.default}),children:(0,d.jsx)(h.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,t.__)("Change dots to thumbnails","snow-monkey-blocks"),checked:y,onChange:e=>s({dotsToThumbnail:e})})}),(0,d.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>k!==l.uK.fade.default,isShownByDefault:!0,label:(0,t.__)("Fade","snow-monkey-blocks"),onDeselect:()=>s({fade:l.uK.fade.default}),children:(0,d.jsx)(h.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,t.__)("Fade","snow-monkey-blocks"),checked:k,onChange:e=>s({fade:e})})}),(0,d.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>S!==l.uK.shuffle.default,isShownByDefault:!0,label:(0,t.__)("Shuffle slides","snow-monkey-blocks"),onDeselect:()=>s({shuffle:l.uK.shuffle.default}),children:(0,d.jsx)(h.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,t.__)("Shuffle slides","snow-monkey-blocks"),checked:S,onChange:e=>s({shuffle:e})})}),O&&(0,d.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>T!==l.uK.shifted.default,isShownByDefault:!0,label:(0,t.__)("Shifting the slider","snow-monkey-blocks"),onDeselect:()=>s({shifted:l.uK.shifted.default}),children:(0,d.jsx)(h.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,t.__)("Shifting the slider","snow-monkey-blocks"),help:T&&(!F||!I)&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p,{icon:g,style:{fill:"#d94f4f"}}),(0,t.__)("It must be full width (.alignfull) or wide width (.alignwide).","snow-monkey-blocks")]}),checked:T,onChange:e=>s({shifted:e})})}),(0,d.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>B!==l.uK.displayCaption.default,isShownByDefault:!0,label:(0,t.__)("Display caption","snow-monkey-blocks"),onDeselect:()=>s({displayCaption:l.uK.displayCaption.default}),children:(0,d.jsx)(h.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,t.__)("Display caption","snow-monkey-blocks"),checked:B,onChange:e=>s({displayCaption:e})})}),(0,d.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>P!==l.uK.interval.default,isShownByDefault:!0,label:(0,t.__)("Autoplay Speed in seconds","snow-monkey-blocks"),onDeselect:()=>s({interval:l.uK.interval.default}),children:(0,d.jsx)(h.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,t.__)("Autoplay Speed in seconds","snow-monkey-blocks"),help:(0,t.__)('If "0", no scroll.',"snow-monkey-blocks"),value:P,onChange:e=>s({interval:w(e,0,10)}),min:"0",max:"10"})}),0<P&&(0,d.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>D!==l.uK.autoplayButton.default,isShownByDefault:!0,label:(0,t.__)("Display pause button for autoplay","snow-monkey-blocks"),onDeselect:()=>s({autoplayButton:l.uK.autoplayButton.default}),children:(0,d.jsx)(h.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,t.__)("Display pause button for autoplay","snow-monkey-blocks"),checked:D,onChange:e=>s({autoplayButton:e})})}),(0,d.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>z!==l.uK.duration.default,isShownByDefault:!0,label:(0,t.__)("Animation speed in seconds","snow-monkey-blocks"),onDeselect:()=>s({duration:l.uK.duration.default}),children:(0,d.jsx)(h.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,t.__)("Animation speed in seconds","snow-monkey-blocks"),help:(0,t.__)('If "0", default animation speed.',"snow-monkey-blocks"),value:z,onChange:e=>s({duration:w(e,0,10)}),min:"0",max:"5",step:"0.1"})}),!k&&(0,d.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>K!==l.uK.lgSlidesToShow.default||M!==l.uK.mdSlidesToShow.default||H!==l.uK.smSlidesToShow.default,isShownByDefault:!0,label:(0,t.__)("Slides settings","snow-monkey-blocks"),onDeselect:()=>s({lgSlidesToShow:l.uK.lgSlidesToShow.default,mdSlidesToShow:l.uK.mdSlidesToShow.default,smSlidesToShow:l.uK.smSlidesToShow.default}),children:(0,d.jsx)(f,{desktop:()=>(0,d.jsx)(h.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,t.__)("# of slides to show (Large window)","snow-monkey-blocks"),value:K,onChange:e=>s({lgSlidesToShow:w(e,1,6)}),min:"1",max:6<o.length?6:o.length}),tablet:()=>(0,d.jsx)(h.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,t.__)("# of slides to show (Medium window)","snow-monkey-blocks"),value:M,onChange:e=>s({mdSlidesToShow:w(e,1,6)}),min:"1",max:6<o.length?6:o.length}),mobile:()=>(0,d.jsx)(h.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,t.__)("# of slides to show (Small window)","snow-monkey-blocks"),value:H,onChange:e=>s({smSlidesToShow:w(e,1,6)}),min:"1",max:6<o.length?6:o.length})})})]})}),V?(0,d.jsxs)("div",{...(0,c.useBlockProps)({className:G,ref:L}),"data-fade":k?"true":"false","data-shuffle":S?"true":"false","data-lg-slide-to-show":!k&&1<K?K:void 0,"data-md-slide-to-show":!k&&1<M?M:void 0,"data-sm-slide-to-show":!k&&1<H?H:void 0,children:[(0,d.jsxs)("div",{className:"spider",children:[A&&(0,d.jsx)("div",{className:"c-container",children:(0,d.jsx)("div",{className:"spider__reference",ref:Z})}),(0,d.jsx)("div",{className:"spider__canvas",ref:U,children:o.map(((e,s)=>(0,d.jsxs)("div",{className:"spider__slide","data-id":s,children:[(0,d.jsx)("div",{className:"smb-spider-slider__figure-wrapper",children:(0,d.jsx)("img",{className:`spider__figure wp-image-${e.id}`,src:e.url,alt:e.alt,width:e.width||e.sizes?.full?.width,height:e.height||e.sizes?.full?.height,"data-image-id":e.id})}),B&&!!e.caption&&(0,d.jsx)("div",{className:"smb-spider-slider__item",children:(0,d.jsx)("div",{className:"smb-spider-slider__item__caption",children:e.caption})})]},s)))}),j&&(0,d.jsxs)("div",{className:"spider__arrows",children:[(0,d.jsx)("button",{className:"spider__arrow","data-direction":"prev",children:"Prev"}),(0,d.jsx)("button",{className:"spider__arrow","data-direction":"next",children:"Next"})]})]}),(0<P&&D||N)&&(0,d.jsxs)("div",{className:"spider__dots","data-thumbnails":y?"true":"false",children:[D&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:"spider__stop",children:(0,d.jsxs)("svg",{width:"12",height:"16",viewBox:"0 0 12 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",title:(0,t.__)("Pause autoplay","snow-monkey-blocks"),children:[(0,d.jsx)("rect",{width:"5",height:"16",fill:"currentColor"}),(0,d.jsx)("rect",{x:"7",width:"5",height:"16",fill:"currentColor"})]})}),(0,d.jsx)("button",{className:"spider__start",children:(0,d.jsx)("svg",{width:"12",height:"16",viewBox:"0 0 12 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",title:(0,t.__)("Start autoplay","snow-monkey-blocks"),children:(0,d.jsx)("path",{d:"M12 8L-2.29967e-06 16L-2.29967e-06 0L12 8Z",fill:"currentColor"})})})]}),N&&o.map(((e,s)=>(0,d.jsx)("button",{className:"spider__dot","data-id":s,children:y?(0,d.jsx)("img",{className:`spider__figure wp-image-${e.id}`,src:e.url,alt:e.alt,width:e.width||e.sizes?.full?.width,height:e.height||e.sizes?.full?.height}):(0,d.jsx)(d.Fragment,{children:s})},s)))]}),Y]}):(0,d.jsx)("div",{...(0,c.useBlockProps)({ref:L}),children:Y})]})},save:function({attributes:e,className:s}){const{images:i,aspectRatio:a,arrows:l,dots:r,dotsToThumbnail:o,fade:h,shuffle:u,shifted:m,gutter:p,displayCaption:_,interval:g,autoplayButton:f,duration:w,lgSlidesToShow:x,mdSlidesToShow:b,smSlidesToShow:v}=e;if(!i.length)return null;const j="wide"===e.align,N="full"===e.align,y=m&&!h&&(j||N),k=n()("smb-spider-slider",s,{[`smb-spider-slider--${a}`]:!!a,"smb-spider-slider--shifted":y,[`smb-spider-slider--gutter-${p}`]:!!p});return(0,d.jsxs)("div",{...c.useBlockProps.save({className:k}),"data-fade":h?"true":"false","data-shuffle":u?"true":"false","data-interval":0<g?1e3*g:void 0,"data-duration":0<w?1e3*w:void 0,"data-lg-slide-to-show":!h&&1<x?x:void 0,"data-md-slide-to-show":!h&&1<b?b:void 0,"data-sm-slide-to-show":!h&&1<v?v:void 0,children:[(0,d.jsxs)("div",{className:"spider",children:[y&&(0,d.jsx)("div",{className:"c-container",children:(0,d.jsx)("div",{className:"spider__reference"})}),(0,d.jsx)("div",{className:"spider__canvas",children:i.map(((e,s)=>(0,d.jsxs)("div",{className:"spider__slide","data-id":s,children:[(0,d.jsx)("div",{className:"smb-spider-slider__figure-wrapper",children:(0,d.jsx)("img",{className:`spider__figure wp-image-${e.id}`,src:e.url,alt:e.alt,width:e.width||e.sizes?.full?.width,height:e.height||e.sizes?.full?.height,"data-image-id":e.id})}),_&&!!e.caption&&(0,d.jsx)("div",{className:"smb-spider-slider__item",children:(0,d.jsx)("div",{className:"smb-spider-slider__item__caption",children:e.caption})})]},s)))}),l&&(0,d.jsxs)("div",{className:"spider__arrows",children:[(0,d.jsx)("button",{className:"spider__arrow","data-direction":"prev",children:"Prev"}),(0,d.jsx)("button",{className:"spider__arrow","data-direction":"next",children:"Next"})]})]}),(0<g&&f||r)&&(0,d.jsxs)("div",{className:"spider__dots","data-thumbnails":o?"true":"false",children:[f&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:"spider__stop",children:(0,d.jsxs)("svg",{width:"12",height:"16",viewBox:"0 0 12 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",title:(0,t.__)("Pause autoplay","snow-monkey-blocks"),children:[(0,d.jsx)("rect",{width:"5",height:"16",fill:"currentColor"}),(0,d.jsx)("rect",{x:"7",width:"5",height:"16",fill:"currentColor"})]})}),(0,d.jsx)("button",{className:"spider__start",children:(0,d.jsx)("svg",{width:"12",height:"16",viewBox:"0 0 12 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",title:(0,t.__)("Start autoplay","snow-monkey-blocks"),children:(0,d.jsx)("path",{d:"M12 8L-2.29967e-06 16L-2.29967e-06 0L12 8Z",fill:"currentColor"})})})]}),r&&i.map(((e,s)=>(0,d.jsx)("button",{className:"spider__dot","data-id":s,children:o?(0,d.jsx)("img",{className:`spider__figure wp-image-${e.id}`,src:e.url,alt:e.alt,width:e.width||e.sizes?.full?.width,height:e.height||e.sizes?.full?.height}):(0,d.jsx)(d.Fragment,{children:s})},s)))]})]})},deprecated:N,example:y})},6942:(e,s)=>{var i;!function(){"use strict";var a={}.hasOwnProperty;function t(){for(var e="",s=0;s<arguments.length;s++){var i=arguments[s];i&&(e=d(e,l(i)))}return e}function l(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return t.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var s="";for(var i in e)a.call(e,i)&&e[i]&&(s=d(s,i));return s}function d(e,s){return s?e?e+" "+s:e+s:e}e.exports?(t.default=t,e.exports=t):void 0===(i=function(){return t}.apply(s,[]))||(e.exports=i)}()}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var l=i[e]={exports:{}};return s[e](l,l.exports,a),l.exports}a.m=s,e=[],a.O=(s,i,t,l)=>{if(!i){var d=1/0;for(c=0;c<e.length;c++){for(var[i,t,l]=e[c],r=!0,o=0;o<i.length;o++)(!1&l||d>=l)&&Object.keys(a.O).every((e=>a.O[e](i[o])))?i.splice(o--,1):(r=!1,l<d&&(d=l));if(r){e.splice(c--,1);var n=t();void 0!==n&&(s=n)}}return s}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[i,t,l]},a.n=e=>{var s=e&&e.__esModule?()=>e.default:()=>e;return a.d(s,{a:s}),s},a.d=(e,s)=>{for(var i in s)a.o(s,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:s[i]})},a.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),(()=>{var e={1427:0,8779:0};a.O.j=s=>0===e[s];var s=(s,i)=>{var t,l,[d,r,o]=i,n=0;if(d.some((s=>0!==e[s]))){for(t in r)a.o(r,t)&&(a.m[t]=r[t]);if(o)var c=o(a)}for(s&&s(i);n<d.length;n++)l=d[n],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(c)},i=globalThis.webpackChunk=globalThis.webpackChunk||[];i.forEach(s.bind(null,0)),i.push=s.bind(null,i.push.bind(i))})();var t=a.O(void 0,[8779],(()=>a(8838)));t=a.O(t)})();