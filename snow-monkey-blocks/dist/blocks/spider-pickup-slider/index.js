(()=>{"use strict";var e,o={2849:()=>{const e=window.wp.blocks,o=window.wp.i18n,l=JSON.parse('{"UU":"snow-monkey-blocks/spider-pickup-slider","uK":{"yT":{"A":false},"cz":{"A":0},"r$":{"A":false},"kJ":{"A":false},"d$":{"A":true},"Rv":{"A":false},"YP":{"A":0},"EP":{"A":false}}}'),s=window.ReactJSXRuntime,n=(0,s.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,s.jsx)("path",{d:"M5,5.78V18.22a.78.78,0,0,0,.78.78H18.22a.78.78,0,0,0,.78-.78V5.78A.78.78,0,0,0,18.22,5H5.78A.78.78,0,0,0,5,5.78m12.44,12H6.56a.38.38,0,0,1-.39-.39V6.56a.38.38,0,0,1,.39-.39H17.44a.38.38,0,0,1,.39.39V17.44a.38.38,0,0,1-.39.39"}),(0,s.jsx)("path",{d:"M6.17,14.16l3.06-2.23a.22.22,0,0,1,.22,0l2.34,1.5a.21.21,0,0,0,.24,0l3-2.83a.19.19,0,0,1,.27,0l3.09,3v1.16l-3.09-3a.18.18,0,0,0-.27,0l-3,2.82a.19.19,0,0,1-.24,0L9.45,13.11a.18.18,0,0,0-.22,0L6.17,15.33Z"}),(0,s.jsx)("path",{d:"M2.22,5H0V6.17H1.44a.38.38,0,0,1,.39.39V17.44a.38.38,0,0,1-.39.39H0V19H2.22A.78.78,0,0,0,3,18.22V5.78A.78.78,0,0,0,2.22,5Z"}),(0,s.jsx)("path",{d:"M24,17.83H22.56a.38.38,0,0,1-.39-.39V6.56a.38.38,0,0,1,.39-.39H24V5H21.78a.78.78,0,0,0-.78.78V18.22a.78.78,0,0,0,.78.78H24Z"})]}),a=window.wp.components,t=window.wp.blockEditor,r=(window.lodash,(e,o=0,l=null)=>(e=Number(e),(isNaN(e)||e<o)&&(e=o),null!==l&&e>l&&(e=l),e));(0,e.registerBlockType)(l.UU,{icon:{foreground:"#cd162c",src:n},keywords:[(0,o.__)("Slider","snow-monkey-blocks"),(0,o.__)("Carousel","snow-monkey-blocks")],edit:function({attributes:e,setAttributes:n}){const{random:i,postsPerPage:c,arrows:u,dots:d,dotsToThumbnail:_,fade:m,interval:h,autoplayButton:k}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.InspectorControls,{children:(0,s.jsxs)(a.__experimentalToolsPanel,{label:(0,o.__)("Block settings","snow-monkey-blocks"),children:[(0,s.jsx)(a.__experimentalToolsPanelItem,{hasValue:()=>i!==l.uK.yT.A,isShownByDefault:!0,label:(0,o.__)("Shuffle slides","snow-monkey-blocks"),onDeselect:()=>n({random:l.uK.yT.A}),children:(0,s.jsx)(a.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,o.__)("Shuffle slides","snow-monkey-blocks"),checked:i,onChange:e=>n({random:e})})}),(0,s.jsx)(a.__experimentalToolsPanelItem,{hasValue:()=>c!==l.uK.cz.A,isShownByDefault:!0,label:(0,o.__)("Maximum number of displays","snow-monkey-blocks"),onDeselect:()=>n({postsPerPage:l.uK.cz.A}),children:(0,s.jsx)(a.RangeControl,{label:(0,o.__)("Maximum number of displays","snow-monkey-blocks"),help:(0,o.__)('If "0", all items are displayed.',"snow-monkey-blocks"),value:c,onChange:e=>n({postsPerPage:r(e,0,10)}),min:"0",max:"10"})}),(0,s.jsx)(a.__experimentalToolsPanelItem,{hasValue:()=>u!==l.uK.d$.A,isShownByDefault:!0,label:(0,o.__)("Display arrows","snow-monkey-blocks"),onDeselect:()=>n({arrows:l.uK.d$.A}),children:(0,s.jsx)(a.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,o.__)("Display arrows","snow-monkey-blocks"),checked:u,onChange:e=>n({arrows:e})})}),(0,s.jsx)(a.__experimentalToolsPanelItem,{hasValue:()=>d!==l.uK.r$.A,isShownByDefault:!0,label:(0,o.__)("Display dots","snow-monkey-blocks"),onDeselect:()=>n({dots:l.uK.r$.A}),children:(0,s.jsx)(a.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,o.__)("Display dots","snow-monkey-blocks"),checked:d,onChange:e=>n({dots:e})})}),d&&(0,s.jsx)(a.__experimentalToolsPanelItem,{hasValue:()=>_!==l.uK.kJ.A,isShownByDefault:!0,label:(0,o.__)("Change dots to thumbnails","snow-monkey-blocks"),onDeselect:()=>n({dotsToThumbnail:l.uK.kJ.A}),children:(0,s.jsx)(a.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,o.__)("Change dots to thumbnails","snow-monkey-blocks"),checked:_,onChange:e=>n({dotsToThumbnail:e})})}),(0,s.jsx)(a.__experimentalToolsPanelItem,{hasValue:()=>m!==l.uK.Rv.A,isShownByDefault:!0,label:(0,o.__)("Fade","snow-monkey-blocks"),onDeselect:()=>n({fade:l.uK.Rv.A}),children:(0,s.jsx)(a.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,o.__)("Fade","snow-monkey-blocks"),checked:m,onChange:e=>n({fade:e})})}),(0,s.jsx)(a.__experimentalToolsPanelItem,{hasValue:()=>h!==l.uK.YP.A,isShownByDefault:!0,label:(0,o.__)("Autoplay Speed in seconds","snow-monkey-blocks"),onDeselect:()=>n({interval:l.uK.YP.A}),children:(0,s.jsx)(a.RangeControl,{label:(0,o.__)("Autoplay Speed in seconds","snow-monkey-blocks"),help:(0,o.__)('If "0", no scroll.',"snow-monkey-blocks"),value:h,onChange:e=>n({interval:r(e,0,10)}),min:"0",max:"10"})}),0<h&&(0,s.jsx)(a.__experimentalToolsPanelItem,{hasValue:()=>k!==l.uK.EP.A,isShownByDefault:!0,label:(0,o.__)("Autoplay Speed in seconds","snow-monkey-blocks"),onDeselect:()=>n({autoplayButton:l.uK.EP.A}),children:(0,s.jsx)(a.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,o.__)("Display pause button for autoplay","snow-monkey-blocks"),checked:k,onChange:e=>n({autoplayButton:e})})})]})}),(0,s.jsx)("div",{...(0,t.useBlockProps)(),children:(0,s.jsx)(a.Placeholder,{icon:"format-gallery",label:(0,o.__)("Pickup slider","snow-monkey-blocks"),children:(0,o.__)('Posts with "pickup" tag are displayed as sliders.',"snow-monkey-blocks")})})]})},save:function(){return null}})}},l={};function s(e){var n=l[e];if(void 0!==n)return n.exports;var a=l[e]={exports:{}};return o[e](a,a.exports,s),a.exports}s.m=o,e=[],s.O=(o,l,n,a)=>{if(!l){var t=1/0;for(u=0;u<e.length;u++){l=e[u][0],n=e[u][1],a=e[u][2];for(var r=!0,i=0;i<l.length;i++)(!1&a||t>=a)&&Object.keys(s.O).every((e=>s.O[e](l[i])))?l.splice(i--,1):(r=!1,a<t&&(t=a));if(r){e.splice(u--,1);var c=n();void 0!==c&&(o=c)}}return o}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[l,n,a]},s.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={6815:0,6471:0};s.O.j=o=>0===e[o];var o=(o,l)=>{var n,a,t=l[0],r=l[1],i=l[2],c=0;if(t.some((o=>0!==e[o]))){for(n in r)s.o(r,n)&&(s.m[n]=r[n]);if(i)var u=i(s)}for(o&&o(l);c<t.length;c++)a=t[c],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(u)},l=self.webpackChunk=self.webpackChunk||[];l.forEach(o.bind(null,0)),l.push=o.bind(null,l.push.bind(l))})();var n=s.O(void 0,[6471],(()=>s(2849)));n=s.O(n)})();