(()=>{"use strict";var e={n:l=>{var o=l&&l.__esModule?()=>l.default:()=>l;return e.d(o,{a:o}),o},d:(l,o)=>{for(var n in o)e.o(o,n)&&!e.o(l,n)&&Object.defineProperty(l,n,{enumerable:!0,get:o[n]})},o:(e,l)=>Object.prototype.hasOwnProperty.call(e,l)};const l=window.wp.blocks,o=JSON.parse('{"UU":"snow-monkey-blocks/child-pages","uK":{"$t":{"A":{}},"DD":{"A":""},"Zp":{"A":"rich-media"},"rQ":{"A":""},"ez":{"A":0},"$w":{"A":"h3"},"cn":{"A":"full"},"d$":{"A":false},"r$":{"A":true},"YP":{"A":0},"EP":{"A":false}}}'),n=window.ReactJSXRuntime,a=(0,n.jsxs)("svg",{viewBox:"0 0 24 20",children:[(0,n.jsx)("path",{d:"M6.5,1V6a1,1,0,0,0,1,1h9a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1h-9A1,1,0,0,0,6.5,1ZM16,6H8a.5.5,0,0,1-.5-.5v-4A.5.5,0,0,1,8,1h8a.5.5,0,0,1,.5.5v4A.5.5,0,0,1,16,6Z"}),(0,n.jsx)("rect",{x:"11.5",y:"6",width:"1",height:"4.26"}),(0,n.jsx)("path",{d:"M0,14v5a1,1,0,0,0,1,1h9a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1H1A1,1,0,0,0,0,14Zm9.5,5h-8a.5.5,0,0,1-.5-.5v-4a.5.5,0,0,1,.5-.5h8a.5.5,0,0,1,.5.5v4A.5.5,0,0,1,9.5,19Z"}),(0,n.jsx)("path",{d:"M13,14v5a1,1,0,0,0,1,1h9a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1H14A1,1,0,0,0,13,14Zm9.5,5h-8a.5.5,0,0,1-.5-.5v-4a.5.5,0,0,1,.5-.5h8a.5.5,0,0,1,.5.5v4A.5.5,0,0,1,22.5,19Z"}),(0,n.jsx)("path",{d:"M5.75,13V10.76a.5.5,0,0,1,.5-.5h11.5a.5.5,0,0,1,.5.5V13h1V10.26a1,1,0,0,0-1-1H5.75a1,1,0,0,0-1,1V13Z"})]}),s=window.lodash,t=window.wp.components,i=window.wp.blockEditor,r=window.wp.data,c=window.wp.i18n,m=window.wp.serverSideRender;var u=e.n(m);function _({label:e,...l}){return(0,n.jsx)(t.BaseControl,{__nextHasNoMarginBottom:!0,label:e,id:"snow-monkey-blocks/component/search-post-control",children:(0,n.jsx)("div",{className:"smb-search-post-control",children:(0,n.jsx)(i.__experimentalLinkControl,{...l,forceIsEditingLink:!l?.value?.id})})})}const h=(e,l=0,o=null)=>(e=Number(e),(isNaN(e)||e<l)&&(e=l),null!==o&&e>o&&(e=o),e);(0,l.registerBlockType)(o.UU,{icon:{foreground:"#cd162c",src:a},edit:function({attributes:e,setAttributes:l,clientId:a}){const{title:m,layout:b,gap:d,smCols:p,itemTitleTagName:k,itemThumbnailSizeSlug:w,arrows:y,dots:g,interval:x,autoplayButton:v,parent:j}=e,A=(0,r.useSelect)((e=>{const{getSettings:l}=e("core/block-editor"),{imageSizes:o}=l();return o.map((e=>({value:e.slug,label:e.name})))}),[]),C=["h2","h3","h4"],D=[{label:"S",value:1},{label:"M",value:2},{label:"L",value:3}];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.InspectorControls,{children:(0,n.jsxs)(t.__experimentalToolsPanel,{label:(0,c.__)("Block settings","snow-monkey-blocks"),children:[(0,n.jsx)(t.__experimentalToolsPanelItem,{hasValue:()=>m!==o.uK.DD.A,isShownByDefault:!0,label:(0,c.__)("Title","snow-monkey-blocks"),onDeselect:()=>l({title:o.uK.DD.A}),children:(0,n.jsx)(t.TextControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Title","snow-monkey-blocks"),value:m,placeholder:(0,c.__)("Child pages","snow-monkey-blocks"),onChange:e=>l({title:e})})}),(0,n.jsx)(t.__experimentalToolsPanelItem,{hasValue:()=>b!==o.uK.Zp.A,isShownByDefault:!0,label:(0,c.__)("Layout","snow-monkey-blocks"),onDeselect:()=>l({layout:o.uK.Zp.A}),children:(0,n.jsx)(t.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Layout","snow-monkey-blocks"),value:b,onChange:e=>l({layout:e}),options:[{value:"rich-media",label:(0,c.__)("Rich media","snow-monkey-blocks")},{value:"simple",label:(0,c.__)("Simple","snow-monkey-blocks")},{value:"text",label:(0,c.__)("Text","snow-monkey-blocks")},{value:"text2",label:(0,c.__)("Text 2","snow-monkey-blocks")},{value:"panel",label:(0,c.__)("Panels","snow-monkey-blocks")},{value:"carousel",label:(0,c.sprintf)(
// translators: %1$s: Layout
// translators: %1$s: Layout
(0,c.__)("Carousel (%1$s)","snow-monkey-blocks"),(0,c.__)("Rich media","snow-monkey-blocks"))},{value:"large-image",label:(0,c.__)("Large image","snow-monkey-blocks")}]})}),"carousel"===b&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.__experimentalToolsPanelItem,{hasValue:()=>y!==o.uK.d$.A,isShownByDefault:!0,label:(0,c.__)("Display arrows","snow-monkey-blocks"),onDeselect:()=>l({arrows:o.uK.d$.A}),children:(0,n.jsx)(t.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Display arrows","snow-monkey-blocks"),checked:y,onChange:e=>l({arrows:e})})}),(0,n.jsx)(t.__experimentalToolsPanelItem,{hasValue:()=>g!==o.uK.r$.A,isShownByDefault:!0,label:(0,c.__)("Display dots","snow-monkey-blocks"),onDeselect:()=>l({dots:o.uK.r$.A}),children:(0,n.jsx)(t.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Display dots","snow-monkey-blocks"),checked:g,onChange:e=>l({dots:e})})}),(0,n.jsx)(t.__experimentalToolsPanelItem,{hasValue:()=>x!==o.uK.YP.A,isShownByDefault:!0,label:(0,c.__)("Autoplay Speed in seconds","snow-monkey-blocks"),onDeselect:()=>l({interval:o.uK.YP.A}),children:(0,n.jsx)(t.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Autoplay Speed in seconds","snow-monkey-blocks"),help:(0,c.__)('If "0", no scroll.',"snow-monkey-blocks"),value:x,onChange:e=>l({interval:h(e,0,10)}),min:"0",max:"10"})}),0<x&&(0,n.jsx)(t.__experimentalToolsPanelItem,{hasValue:()=>v!==o.uK.EP.A,isShownByDefault:!0,label:(0,c.__)("Autoplay Speed in seconds","snow-monkey-blocks"),onDeselect:()=>l({autoplayButton:o.uK.EP.A}),children:(0,n.jsx)(t.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Display pause button for autoplay","snow-monkey-blocks"),checked:v,onChange:e=>l({autoplayButton:e})})})]}),(0,n.jsx)(t.__experimentalToolsPanelItem,{hasValue:()=>k!==o.uK.$w.A,isShownByDefault:!0,label:(0,c.__)("Title tag","snow-monkey-blocks"),onDeselect:()=>l({itemTitleTagName:o.uK.$w.A}),children:(0,n.jsx)(t.BaseControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Title tag","snow-monkey-blocks"),id:"snow-monkey-blocks/child-pages/item-title-tag-name",children:(0,n.jsx)("div",{className:"smb-list-icon-selector",children:(0,s.times)(C.length,(e=>(0,n.jsx)(t.Button,{variant:k===C[e]?"primary":"secondary",onClick:()=>l({itemTitleTagName:C[e]}),children:C[e]},e)))})})}),(0,n.jsx)(t.__experimentalToolsPanelItem,{hasValue:()=>w!==o.uK.cn.A,isShownByDefault:!0,label:(0,c.__)("Images size","snow-monkey-blocks"),onDeselect:()=>l({itemThumbnailSizeSlug:o.uK.cn.A}),children:(0,n.jsx)(t.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Images size","snow-monkey-blocks"),value:w,options:A,onChange:e=>l({itemThumbnailSizeSlug:e})})}),("rich-media"===b||"panel"===b)&&(0,n.jsx)(t.__experimentalToolsPanelItem,{hasValue:()=>p!==o.uK.ez.A,isShownByDefault:!0,label:(0,c.__)("Number of columns displayed on mobile device","snow-monkey-blocks"),onDeselect:()=>l({smCols:o.uK.ez.A}),children:(0,n.jsx)(t.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,c.__)("Number of columns displayed on mobile device","snow-monkey-blocks"),value:p,onChange:e=>l({smCols:h(e)}),options:[{value:0,label:(0,c.__)("Default","snow-monkey-blocks")},{value:1,label:(0,c.__)("1 column","snow-monkey-blocks")},{value:2,label:(0,c.__)("2 columns","snow-monkey-blocks")}]})}),(0,n.jsx)(t.__experimentalToolsPanelItem,{hasValue:()=>j!==o.uK.$t.A,isShownByDefault:!0,label:(0,c.__)("Specify the parent page","snow-monkey-blocks"),onDeselect:()=>l({parent:o.uK.$t.A}),children:(0,n.jsx)(_,{label:(0,c.__)("Specify the parent page","snow-monkey-blocks"),onRemove:()=>l({parent:{}}),settings:[],searchInputPlaceholder:(0,c.__)("Search","snow-monkey-blocks"),value:j,onChange:e=>{l({parent:{id:e.id,title:e.title,url:e.url}})},suggestionQuery:{type:"post",subtype:"page"}})})]})}),(0,n.jsx)(i.InspectorControls,{group:"dimensions",children:(0,n.jsx)(t.__experimentalToolsPanelItem,{hasValue:()=>d!==o.uK.rQ.A,isShownByDefault:!0,label:(0,c.__)("The gap between each item","snow-monkey-blocks"),onDeselect:()=>l({gap:o.uK.rQ.A}),panelId:a,children:(0,n.jsx)(t.BaseControl,{__nextHasNoMarginBottom:!0,id:"snow-monkey-blocks/child-pages/gap",label:(0,c.__)("The gap between each item","snow-monkey-blocks"),className:"spacing-sizes-control",children:(0,n.jsx)(t.RangeControl,{__nextHasNoMarginBottom:!0,className:"spacing-sizes-control__range-control",value:D.filter((e=>e.label?.toLowerCase()===d))?.[0]?.value,resetFallbackValue:void 0,onChange:e=>l({gap:D.filter((l=>l.value===e))?.[0]?.label?.toLowerCase()}),withInputField:!1,min:1,max:3,marks:!0,renderTooltipContent:e=>D.filter((l=>l.value===e))?.[0]?.label?.toUpperCase(),hideLabelFromVision:!0})})})}),(0,n.jsx)("div",{...(0,i.useBlockProps)(),children:(0,n.jsx)(t.Disabled,{children:(0,n.jsx)(u(),{block:"snow-monkey-blocks/child-pages",attributes:e})})})]})},save:function(){return null}})})();