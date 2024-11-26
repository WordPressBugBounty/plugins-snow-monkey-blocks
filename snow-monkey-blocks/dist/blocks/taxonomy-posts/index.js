(()=>{"use strict";var e={n:o=>{var l=o&&o.__esModule?()=>o.default:()=>o;return e.d(l,{a:l}),l},d:(o,l)=>{for(var t in l)e.o(l,t)&&!e.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:l[t]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)};const o=window.wp.blocks,l=window.wp.i18n,t=JSON.parse('{"UU":"snow-monkey-blocks/taxonomy-posts","uK":{"taxonomy":{"type":"string","default":null},"termId":{"type":"number","default":0},"postsPerPage":{"type":"number","default":6},"layout":{"type":"string","default":"rich-media"},"gap":{"type":"string","default":""},"ignoreStickyPosts":{"type":"boolean","default":true},"smCols":{"type":"number","default":0},"noPostsText":{"type":"string","default":""},"itemTitleTagName":{"type":"string","default":"h3"},"itemThumbnailSizeSlug":{"type":"string","default":"full"},"forceDisplayItemMeta":{"type":"boolean","default":false},"forceDisplayItemTerms":{"type":"boolean","default":false},"displayItemAuthor":{"type":"boolean"},"displayItemPublished":{"type":"boolean","default":true},"displayItemModified":{"type":"boolean","default":false},"displayItemExcerpt":{"type":"boolean"},"categoryLabelTaxonomy":{"type":"string","default":""},"arrows":{"type":"boolean","default":false},"dots":{"type":"boolean","default":true},"interval":{"type":"number","default":0},"autoplayButton":{"type":"boolean","default":false},"anchor":{"type":"string","default":""},"clientId":{"type":"string","default":""}}}'),a=window.ReactJSXRuntime,s=(0,a.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,a.jsx)("rect",{x:"3",y:"6.5",width:"4",height:"1"}),(0,a.jsx)("rect",{x:"9",y:"6.5",width:"13",height:"1"}),(0,a.jsx)("rect",{x:"3",y:"11.5",width:"4",height:"1"}),(0,a.jsx)("rect",{x:"9",y:"11.5",width:"13",height:"1"}),(0,a.jsx)("rect",{x:"3",y:"16.5",width:"4",height:"1"}),(0,a.jsx)("rect",{x:"9",y:"16.5",width:"13",height:"1"})]}),n=window.lodash,i=window.wp.components,r=window.wp.blockEditor,m=window.wp.data,c=window.wp.element,u=window.wp.serverSideRender;var d=e.n(u);const y=(e,o=0,l=null)=>(e=Number(e),(isNaN(e)||e<o)&&(e=o),null!==l&&e>l&&(e=l),e),p=e=>{const o=e.map((e=>({children:[],parent:null,...e}))),l=(0,n.groupBy)(o,"parent");if(l.null&&l.null.length)return o;const t=e=>e.map((e=>{const o=l[e.id];return{...e,children:o&&o.length?t(o):[]}}));return t(l[0]||[])},_=[{attributes:{...t.uK,myAnchor:{type:"string",default:""}},migrate:e=>(e.anchor=e.myAnchor,e),save:()=>null}];(0,o.registerBlockType)(t.UU,{icon:{foreground:"#cd162c",src:s},keywords:[(0,l.__)("Posts list","snow-monkey-blocks"),(0,l.__)("Recent posts","snow-monkey-blocks"),(0,l.__)("Latest posts","snow-monkey-blocks")],edit:function({attributes:e,setAttributes:o,clientId:s}){const{taxonomy:u,termId:_,postsPerPage:h,layout:b,gap:g,ignoreStickyPosts:x,smCols:k,noPostsText:f,itemTitleTagName:w,itemThumbnailSizeSlug:T,forceDisplayItemMeta:I,displayItemAuthor:D,displayItemPublished:j,displayItemModified:B,forceDisplayItemTerms:P,displayItemExcerpt:S,categoryLabelTaxonomy:C,arrows:v,dots:K,interval:N,autoplayButton:M}=e;(0,c.useEffect)((()=>{let e,l;e=null==D?!["text","text2"].includes(b):D,l=null==S?["rich-media","simple","caroucel"].includes(b):S,o({displayItemAuthor:e,displayItemExcerpt:l})}),[b]),(0,c.useEffect)((()=>{o({clientId:e.clientId||s})}),[]);const{taxonomiesTerms:H,taxonomies:V}=(0,m.useSelect)((e=>{const{getTaxonomies:o,getEntityRecords:l}=e("core"),t=(o({per_page:-1})||[]).filter((e=>e.visibility.show_ui)),a=t.map((e=>{const o=l("taxonomy",e.slug,{per_page:-1})||[];return 0<o.length?{taxonomy:e.slug,terms:o}:{}})).filter((e=>e));return{taxonomiesTerms:a,taxonomies:t}}),[]),L=(0,m.useSelect)((e=>{const{getSettings:o}=e("core/block-editor"),{imageSizes:l}=o();return l.map((e=>({value:e.slug,label:e.name})))}),[]),z=(0,c.useMemo)((()=>{const e=V.map((e=>({value:e.slug,label:e.name})));return e.unshift({value:"",label:(0,l.__)("Default (Taxonomy selected in this block)","snow-monkey-blocks")}),e}),[V]),A=(0,n.find)(H,{taxonomy:u}),F=A?(0,n.find)(A.terms,["id",y(_)]):[],R=["h2","h3","h4"],E=[{label:"S",value:1},{label:"M",value:2},{label:"L",value:3}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.InspectorControls,{children:(0,a.jsxs)(i.__experimentalToolsPanel,{label:(0,l.__)("Block settings","snow-monkey-blocks"),children:[H.length?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>u!==t.uK.taxonomy.default||_!==t.uK.termId.default,isShownByDefault:!0,label:(0,l.__)("Taxonomy","snow-monkey-blocks"),onDeselect:()=>o({taxonomy:t.uK.taxonomy.default,termId:t.uK.termId.default}),children:(0,a.jsx)(i.Flex,{direction:"column",children:H.map((e=>{const l=(0,n.find)(V,["slug",e.taxonomy]);return!!l&&(0,a.jsx)(i.TreeSelect,{__nextHasNoMarginBottom:!0,label:l.name,noOptionLabel:"-",onChange:e=>{o({taxonomy:l.slug,termId:y(e)})},selectedId:_,tree:p(e.terms)},`${l.slug}-${_}`)}))})}),(0,a.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>h!==t.uK.postsPerPage.default,isShownByDefault:!0,label:(0,l.__)("Number of posts","snow-monkey-blocks"),onDeselect:()=>o({postsPerPage:t.uK.postsPerPage.default}),children:(0,a.jsx)(i.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Number of posts","snow-monkey-blocks"),value:h,onChange:e=>o({postsPerPage:y(e,1,50)}),min:"1",max:"50"})}),(0,a.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>b!==t.uK.layout.default,isShownByDefault:!0,label:(0,l.__)("Layout","snow-monkey-blocks"),onDeselect:()=>o({layout:t.uK.layout.default}),children:(0,a.jsx)(i.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Layout","snow-monkey-blocks"),value:b,onChange:e=>{o({layout:e})},options:[{value:"rich-media",label:(0,l.__)("Rich media","snow-monkey-blocks")},{value:"simple",label:(0,l.__)("Simple","snow-monkey-blocks")},{value:"text",label:(0,l.__)("Text","snow-monkey-blocks")},{value:"text2",label:(0,l.__)("Text 2","snow-monkey-blocks")},{value:"panel",label:(0,l.__)("Panels","snow-monkey-blocks")},{value:"carousel",label:(0,l.sprintf)(
// translators: %1$s: Layout
// translators: %1$s: Layout
(0,l.__)("Carousel (%1$s)","snow-monkey-blocks"),(0,l.__)("Rich media","snow-monkey-blocks"))},{value:"large-image",label:(0,l.__)("Large image","snow-monkey-blocks")}]})})]}):(0,a.jsx)("div",{style:{gridColumn:"1/-1"},children:(0,a.jsx)(i.BaseControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Loading taxonomies…","snow-monkey-blocks"),id:"snow-monkey-blocks/taxonomy-posts/taxonomies",children:(0,a.jsx)(i.Spinner,{})})}),"carousel"===b&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>v!==t.uK.arrows.default,isShownByDefault:!0,label:(0,l.__)("Display arrows","snow-monkey-blocks"),onDeselect:()=>o({arrows:t.uK.arrows.default}),children:(0,a.jsx)(i.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Display arrows","snow-monkey-blocks"),checked:v,onChange:e=>o({arrows:e})})}),(0,a.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>K!==t.uK.dots.default,isShownByDefault:!0,label:(0,l.__)("Display dots","snow-monkey-blocks"),onDeselect:()=>o({dots:t.uK.dots.default}),children:(0,a.jsx)(i.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Display dots","snow-monkey-blocks"),checked:K,onChange:e=>o({dots:e})})}),(0,a.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>N!==t.uK.interval.default,isShownByDefault:!0,label:(0,l.__)("Autoplay Speed in seconds","snow-monkey-blocks"),onDeselect:()=>o({interval:t.uK.interval.default}),children:(0,a.jsx)(i.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Autoplay Speed in seconds","snow-monkey-blocks"),help:(0,l.__)('If "0", no scroll.',"snow-monkey-blocks"),value:N,onChange:e=>o({interval:y(e,0,10)}),min:"0",max:"10"})}),0<N&&(0,a.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>M!==t.uK.autoplayButton.default,isShownByDefault:!0,label:(0,l.__)("Display pause button for autoplay","snow-monkey-blocks"),onDeselect:()=>o({autoplayButton:t.uK.autoplayButton.default}),children:(0,a.jsx)(i.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Display pause button for autoplay","snow-monkey-blocks"),checked:M,onChange:e=>o({autoplayButton:e})})})]}),(0,a.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>w!==t.uK.itemTitleTagName.default,isShownByDefault:!0,label:(0,l.__)("Title tag of each items","snow-monkey-blocks"),onDeselect:()=>o({itemTitleTagName:t.uK.itemTitleTagName.default}),children:(0,a.jsx)(i.BaseControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Title tag of each items","snow-monkey-blocks"),id:"snow-monkey-blocks/taxonomy-posts/item-title-tag-name",children:(0,a.jsx)("div",{className:"smb-list-icon-selector",children:(0,n.times)(R.length,(e=>(0,a.jsx)(i.Button,{variant:w===R[e]?"primary":"secondary",onClick:()=>o({itemTitleTagName:R[e]}),children:R[e]},e)))})})}),(0,a.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>T!==t.uK.itemThumbnailSizeSlug.default,isShownByDefault:!0,label:(0,l.__)("Images size of each items","snow-monkey-blocks"),onDeselect:()=>o({itemThumbnailSizeSlug:t.uK.itemThumbnailSizeSlug.default}),children:(0,a.jsx)(i.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Images size of each items","snow-monkey-blocks"),value:T,options:L,onChange:e=>o({itemThumbnailSizeSlug:e})})}),"category"!==u&&"post_tag"!==u&&(0,a.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>I!==t.uK.forceDisplayItemMeta.default,isShownByDefault:!0,label:(0,l.__)("Force display meta of each items","snow-monkey-blocks"),onDeselect:()=>o({forceDisplayItemMeta:t.uK.forceDisplayItemMeta.default}),children:(0,a.jsx)(i.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Force display meta of each items","snow-monkey-blocks"),help:(0,l.__)("If it's already displayed, this setting will be ignored.","snow-monkey-blocks"),checked:I,onChange:e=>o({forceDisplayItemMeta:e})})}),("category"===u||"post_tag"===u||I)&&"text"!==b&&(0,a.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>D!==!["text","text2"].includes(b),isShownByDefault:!0,label:(0,l.__)("Display author of each items","snow-monkey-blocks"),onDeselect:()=>o({displayItemAuthor:!["text","text2"].includes(b)}),children:(0,a.jsx)(i.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Display author of each items","snow-monkey-blocks"),checked:D,onChange:e=>o({displayItemAuthor:e})})}),("category"===u||"post_tag"===u||I)&&(0,a.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>j!==t.uK.displayItemPublished.default,isShownByDefault:!0,label:(0,l.__)("Display published date of each items","snow-monkey-blocks"),onDeselect:()=>o({displayItemPublished:t.uK.displayItemPublished.default}),children:(0,a.jsx)(i.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Display published date of each items","snow-monkey-blocks"),checked:j,onChange:e=>o({displayItemPublished:e})})}),("category"===u||"post_tag"===u||I)&&(0,a.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>B!==t.uK.displayItemModified.default,isShownByDefault:!0,label:(0,l.__)("Display modified date of each items","snow-monkey-blocks"),onDeselect:()=>o({displayItemModified:t.uK.displayItemModified.default}),children:(0,a.jsx)(i.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Display modified date of each items","snow-monkey-blocks"),checked:B,onChange:e=>o({displayItemModified:e})})}),["rich-media","simple","panel","carousel"].includes(b)&&(0,a.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>S===["rich-media","simple","panel","carousel"].includes(b),isShownByDefault:!0,label:(0,l.__)("Display excerpt of each items","snow-monkey-blocks"),onDeselect:()=>{o({displayItemExcerpt:["rich-media","simple","panel","carousel"].includes(b)})},children:(0,a.jsx)(i.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Display excerpt of each items","snow-monkey-blocks"),checked:S,onChange:e=>o({displayItemExcerpt:e})})}),"category"!==u&&"post_tag"!==u&&(0,a.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>P!==t.uK.forceDisplayItemTerms.default,isShownByDefault:!0,label:(0,l.__)("Force display category label of each items","snow-monkey-blocks"),onDeselect:()=>o({forceDisplayItemTerms:t.uK.forceDisplayItemTerms.default}),children:(0,a.jsx)(i.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Force display category label of each items","snow-monkey-blocks"),help:(0,l.__)("If it's already displayed, this setting will be ignored.","snow-monkey-blocks"),checked:P,onChange:e=>o({forceDisplayItemTerms:e})})}),(0,a.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>C!==t.uK.categoryLabelTaxonomy.default,isShownByDefault:!0,label:(0,l.__)("Taxonomy to use for the category label","snow-monkey-blocks"),onDeselect:()=>o({categoryLabelTaxonomy:t.uK.categoryLabelTaxonomy.default}),children:(0,a.jsx)(i.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Taxonomy to use for the category label","snow-monkey-blocks"),help:(0,l.__)("If no category labels are displayed, this setting will be ignored.","snow-monkey-blocks"),value:C,options:z,onChange:e=>o({categoryLabelTaxonomy:e})})}),("rich-media"===b||"panel"===b)&&(0,a.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>k!==t.uK.smCols.default,isShownByDefault:!0,label:(0,l.__)("Number of columns displayed on mobile device","snow-monkey-blocks"),onDeselect:()=>o({smCols:t.uK.smCols.default}),children:(0,a.jsx)(i.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Number of columns displayed on mobile device","snow-monkey-blocks"),value:k,onChange:e=>o({smCols:y(e)}),options:[{value:0,label:(0,l.__)("Default","snow-monkey-blocks")},{value:1,label:(0,l.__)("1 column","snow-monkey-blocks")},{value:2,label:(0,l.__)("2 columns","snow-monkey-blocks")}]})}),(0,a.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>x!==t.uK.ignoreStickyPosts.default,isShownByDefault:!0,label:(0,l.__)("Ignore sticky posts","snow-monkey-blocks"),onDeselect:()=>o({ignoreStickyPosts:t.uK.ignoreStickyPosts.default}),children:(0,a.jsx)(i.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Ignore sticky posts","snow-monkey-blocks"),checked:x,onChange:e=>o({ignoreStickyPosts:e})})}),(0,a.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>f!==t.uK.noPostsText.default,isShownByDefault:!0,label:(0,l.__)("Text if no posts matched","snow-monkey-blocks"),onDeselect:()=>o({noPostsText:t.uK.noPostsText.default}),children:(0,a.jsx)(i.TextareaControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Text if no posts matched","snow-monkey-blocks"),help:(0,l.__)("Allow HTML","snow-monkey-blocks"),value:f||"",onChange:e=>o({noPostsText:e})})})]})}),(0,a.jsx)(r.InspectorControls,{group:"dimensions",children:(0,a.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>g!==t.uK.gap.default,isShownByDefault:!0,label:(0,l.__)("The gap between each item","snow-monkey-blocks"),onDeselect:()=>o({gap:t.uK.gap.default}),panelId:s,children:(0,a.jsx)(i.BaseControl,{__nextHasNoMarginBottom:!0,id:"snow-monkey-blocks/recent-posts/gap",label:(0,l.__)("The gap between each item","snow-monkey-blocks"),className:"spacing-sizes-control",children:(0,a.jsx)(i.RangeControl,{__nextHasNoMarginBottom:!0,className:"spacing-sizes-control__range-control",value:E.filter((e=>e.label?.toLowerCase()===g))?.[0]?.value,resetFallbackValue:void 0,onChange:e=>o({gap:E.filter((o=>o.value===e))?.[0]?.label?.toLowerCase()}),withInputField:!1,min:1,max:3,marks:!0,renderTooltipContent:e=>E.filter((o=>o.value===e))?.[0]?.label?.toUpperCase(),hideLabelFromVision:!0})})})}),(0,a.jsx)("div",{...(0,r.useBlockProps)(),children:F&&A?(0,a.jsx)(i.Disabled,{children:(0,a.jsx)(d(),{block:"snow-monkey-blocks/taxonomy-posts",attributes:e})}):(0,a.jsx)(i.Placeholder,{icon:"editor-ul",label:(0,l.__)("Taxonomy posts","snow-monkey-blocks"),children:(0,a.jsx)(i.Spinner,{})})})]})},save:function(){return(0,a.jsx)("div",{...r.useBlockProps.save(),"data-dynamic-block":"snow-monkey-blocks/taxonomy-posts","data-version":"2"})},deprecated:_})})();