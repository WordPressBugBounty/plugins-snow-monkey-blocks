(()=>{"use strict";var e={n:o=>{var l=o&&o.__esModule?()=>o.default:()=>o;return e.d(l,{a:l}),l},d:(o,l)=>{for(var a in l)e.o(l,a)&&!e.o(o,a)&&Object.defineProperty(o,a,{enumerable:!0,get:l[a]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)};const o=window.wp.blocks,l=JSON.parse('{"UU":"snow-monkey-blocks/rss","uK":{"feedURL":{"type":"string","default":""},"postsPerPage":{"type":"number","default":6},"layout":{"type":"string","default":"rich-media"},"gap":{"type":"string","default":""},"smCols":{"type":"number","default":0},"noPostsText":{"type":"string","default":""},"itemTitleTagName":{"type":"string","default":"h3"},"arrows":{"type":"boolean","default":false},"dots":{"type":"boolean","default":true},"interval":{"type":"number","default":0},"autoplayButton":{"type":"boolean","default":false},"anchor":{"type":"string","default":""},"clientId":{"type":"string","default":""}}}'),a=window.ReactJSXRuntime,s=(0,a.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,a.jsx)("path",{d:"M5.69,20a1.56,1.56,0,1,1,1.55-1.56A1.56,1.56,0,0,1,5.69,20Z"}),(0,a.jsx)("path",{d:"M12.37,19.75a8.71,8.71,0,0,0-8.12-8.16.13.13,0,0,1-.11-.13c0-.28,0-1,0-1.2a.05.05,0,0,1,.06,0,10.14,10.14,0,0,1,6.58,3,10,10,0,0,1,2.92,6.54.19.19,0,0,1-.19.21h-.93A.22.22,0,0,1,12.37,19.75Z"}),(0,a.jsx)("path",{d:"M18.79,20a.23.23,0,0,1-.23-.21,13.71,13.71,0,0,0-4.39-9.93A14.91,14.91,0,0,0,4.32,5.42a.19.19,0,0,1-.19-.2v-1a.18.18,0,0,1,.19-.19A16.19,16.19,0,0,1,15.14,8.84a16.19,16.19,0,0,1,4.73,10.88.21.21,0,0,1-.21.22Z"})]}),t=window.lodash,n=window.wp.blockEditor,r=window.wp.components,i=window.wp.element,u=window.wp.i18n,c=window.wp.serverSideRender;var m=e.n(c);const d=(e,o=0,l=null)=>(e=Number(e),(isNaN(e)||e<o)&&(e=o),null!==l&&e>l&&(e=l),e),_=[{attributes:{...l.uK,myAnchor:{type:"string",default:""}},migrate:e=>(e.anchor=e.myAnchor,e),save:()=>null}];(0,o.registerBlockType)(l.UU,{icon:{foreground:"#cd162c",src:s},edit:function({attributes:e,setAttributes:o,clientId:s}){const[c,_]=(0,i.useState)(!e.feedURL),{feedURL:p,postsPerPage:b,layout:k,gap:y,smCols:h,noPostsText:w,itemTitleTagName:x,arrows:g,dots:f,interval:v,autoplayButton:j}=e;(0,i.useEffect)((()=>{o({clientId:s})}),[s]);const T=["h2","h3","h4"],C=[{label:"S",value:1},{label:"M",value:2},{label:"L",value:3}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.BlockControls,{group:"block",children:(0,a.jsx)(r.ToolbarButton,{icon:"edit",title:(0,u.__)("Edit RSS URL","snow-monkey-blocks"),onClick:()=>_(!0)})}),(0,a.jsx)(n.InspectorControls,{children:(0,a.jsxs)(r.__experimentalToolsPanel,{label:(0,u.__)("Block settings","snow-monkey-blocks"),children:[(0,a.jsx)(r.__experimentalToolsPanelItem,{hasValue:()=>b!==l.uK.postsPerPage.default,isShownByDefault:!0,label:(0,u.__)("Number of posts","snow-monkey-blocks"),onDeselect:()=>o({postsPerPage:l.uK.postsPerPage.default}),children:(0,a.jsx)(r.RangeControl,{label:(0,u.__)("Number of posts","snow-monkey-blocks"),value:b,onChange:e=>o({postsPerPage:d(e,1,50)}),min:"1",max:"50"})}),(0,a.jsx)(r.__experimentalToolsPanelItem,{hasValue:()=>k!==l.uK.layout.default,isShownByDefault:!0,label:(0,u.__)("Layout","snow-monkey-blocks"),onDeselect:()=>o({layout:l.uK.layout.default}),children:(0,a.jsx)(r.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,u.__)("Layout","snow-monkey-blocks"),value:k,onChange:e=>o({layout:e}),options:[{value:"rich-media",label:(0,u.__)("Rich media","snow-monkey-blocks")},{value:"simple",label:(0,u.__)("Simple","snow-monkey-blocks")},{value:"text",label:(0,u.__)("Text","snow-monkey-blocks")},{value:"text2",label:(0,u.__)("Text 2","snow-monkey-blocks")},{value:"panel",label:(0,u.__)("Panels","snow-monkey-blocks")},{value:"carousel",label:(0,u.sprintf)(
// translators: %1$s: Layout
// translators: %1$s: Layout
(0,u.__)("Carousel (%1$s)","snow-monkey-blocks"),(0,u.__)("Rich media","snow-monkey-blocks"))},{value:"large-image",label:(0,u.__)("Large image","snow-monkey-blocks")}]})}),"carousel"===k&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.__experimentalToolsPanelItem,{hasValue:()=>g!==l.uK.arrows.default,isShownByDefault:!0,label:(0,u.__)("Display arrows","snow-monkey-blocks"),onDeselect:()=>o({arrows:l.uK.arrows.default}),children:(0,a.jsx)(r.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,u.__)("Display arrows","snow-monkey-blocks"),checked:g,onChange:e=>o({arrows:e})})}),(0,a.jsx)(r.__experimentalToolsPanelItem,{hasValue:()=>f!==l.uK.dots.default,isShownByDefault:!0,label:(0,u.__)("Display dots","snow-monkey-blocks"),onDeselect:()=>o({dots:l.uK.dots.default}),children:(0,a.jsx)(r.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,u.__)("Display dots","snow-monkey-blocks"),checked:f,onChange:e=>o({dots:e})})}),(0,a.jsx)(r.__experimentalToolsPanelItem,{hasValue:()=>v!==l.uK.interval.default,isShownByDefault:!0,label:(0,u.__)("Autoplay Speed in seconds","snow-monkey-blocks"),onDeselect:()=>o({interval:l.uK.interval.default}),children:(0,a.jsx)(r.RangeControl,{label:(0,u.__)("Autoplay Speed in seconds","snow-monkey-blocks"),help:(0,u.__)('If "0", no scroll.',"snow-monkey-blocks"),value:v,onChange:e=>o({interval:d(e,0,10)}),min:"0",max:"10"})}),0<v&&(0,a.jsx)(r.__experimentalToolsPanelItem,{hasValue:()=>j!==l.uK.autoplayButton.default,isShownByDefault:!0,label:(0,u.__)("Autoplay Speed in seconds","snow-monkey-blocks"),onDeselect:()=>o({autoplayButton:l.uK.autoplayButton.default}),children:(0,a.jsx)(r.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,u.__)("Display pause button for autoplay","snow-monkey-blocks"),checked:j,onChange:e=>o({autoplayButton:e})})})]}),(0,a.jsx)(r.__experimentalToolsPanelItem,{hasValue:()=>x!==l.uK.itemTitleTagName.default,isShownByDefault:!0,label:(0,u.__)("Title tag of each items","snow-monkey-blocks"),onDeselect:()=>o({itemTitleTagName:l.uK.itemTitleTagName.default}),children:(0,a.jsx)(r.BaseControl,{__nextHasNoMarginBottom:!0,label:(0,u.__)("Title tag of each items","snow-monkey-blocks"),id:"snow-monkey-blocks/rss/item-title-tag-name",children:(0,a.jsx)("div",{className:"smb-list-icon-selector",children:(0,t.times)(T.length,(e=>(0,a.jsx)(r.Button,{variant:x===T[e]?"primary":"secondary",onClick:()=>o({itemTitleTagName:T[e]}),children:T[e]},e)))})})}),("rich-media"===k||"panel"===k)&&(0,a.jsx)(r.__experimentalToolsPanelItem,{hasValue:()=>h!==l.uK.smCols.default,isShownByDefault:!0,label:(0,u.__)("Number of columns displayed on mobile device","snow-monkey-blocks"),onDeselect:()=>o({smCols:l.uK.smCols.default}),children:(0,a.jsx)(r.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,u.__)("Number of columns displayed on mobile device","snow-monkey-blocks"),value:h,onChange:e=>o({smCols:d(e)}),options:[{value:0,label:(0,u.__)("Default","snow-monkey-blocks")},{value:1,label:(0,u.__)("1 column","snow-monkey-blocks")},{value:2,label:(0,u.__)("2 columns","snow-monkey-blocks")}]})}),(0,a.jsx)(r.__experimentalToolsPanelItem,{hasValue:()=>w!==l.uK.noPostsText.default,isShownByDefault:!0,label:(0,u.__)("Text if no posts matched","snow-monkey-blocks"),onDeselect:()=>o({noPostsText:l.uK.noPostsText.default}),children:(0,a.jsx)(r.TextareaControl,{__nextHasNoMarginBottom:!0,label:(0,u.__)("Text if no posts matched","snow-monkey-blocks"),help:(0,u.__)("Allow HTML","snow-monkey-blocks"),value:w||"",onChange:e=>o({noPostsText:e})})})]})}),(0,a.jsx)(n.InspectorControls,{group:"dimensions",children:(0,a.jsx)(r.__experimentalToolsPanelItem,{hasValue:()=>y!==l.uK.gap.default,isShownByDefault:!0,label:(0,u.__)("The gap between each item","snow-monkey-blocks"),onDeselect:()=>o({gap:l.uK.gap.default}),panelId:s,children:(0,a.jsx)(r.BaseControl,{__nextHasNoMarginBottom:!0,id:"snow-monkey-blocks/recent-posts/gap",label:(0,u.__)("The gap between each item","snow-monkey-blocks"),className:"spacing-sizes-control",children:(0,a.jsx)(r.RangeControl,{className:"spacing-sizes-control__range-control",value:C.filter((e=>e.label?.toLowerCase()===y))?.[0]?.value,resetFallbackValue:void 0,onChange:e=>o({gap:C.filter((o=>o.value===e))?.[0]?.label?.toLowerCase()}),withInputField:!1,min:1,max:3,marks:!0,renderTooltipContent:e=>C.filter((o=>o.value===e))?.[0]?.label?.toUpperCase(),hideLabelFromVision:!0,__nextHasNoMarginBottom:!0})})})}),(0,a.jsx)("div",{...(0,n.useBlockProps)(),children:c?(0,a.jsx)(r.Placeholder,{icon:"rss",label:"RSS",children:(0,a.jsx)("form",{onSubmit:e=>{e.preventDefault(),p&&_(!1)},className:"wp-block-rss__placeholder-form",children:(0,a.jsxs)(r.__experimentalHStack,{wrap:!0,children:[(0,a.jsx)(r.__experimentalInputControl,{__next36pxDefaultSize:!0,placeholder:(0,u.__)("Enter URL here…"),value:p,onChange:e=>o({feedURL:e}),className:"wp-block-rss__placeholder-input"}),(0,a.jsx)(r.Button,{variant:"primary",type:"submit",children:(0,u.__)("Use URL")})]})})}):(0,a.jsx)(r.Disabled,{children:(0,a.jsx)(m(),{block:"snow-monkey-blocks/rss",attributes:e})})})]})},save:function(){return(0,a.jsx)("div",{...n.useBlockProps.save(),"data-dynamic-block":"snow-monkey-blocks/rss","data-version":"2"})},deprecated:_})})();