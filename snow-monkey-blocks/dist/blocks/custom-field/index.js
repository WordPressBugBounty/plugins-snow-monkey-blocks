(()=>{"use strict";var e={n:o=>{var n=o&&o.__esModule?()=>o.default:()=>o;return e.d(n,{a:n}),n},d:(o,n)=>{for(var l in n)e.o(n,l)&&!e.o(o,l)&&Object.defineProperty(o,l,{enumerable:!0,get:n[l]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)};const o=window.wp.blocks,n=window.wp.primitives,l=window.ReactJSXRuntime,s=(0,l.jsx)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(n.Path,{fillRule:"evenodd",d:"M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z",clipRule:"evenodd"})}),t=JSON.parse('{"UU":"snow-monkey-blocks/custom-field","uK":{"U":{"A":""}}}'),a=window.wp.components,i=window.wp.blockEditor,r=window.wp.i18n,c=window.wp.serverSideRender;var d=e.n(c);(0,o.registerBlockType)(t.UU,{icon:{foreground:"#cd162c",src:s},edit:function({attributes:e,setAttributes:o}){const{name:n}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.InspectorControls,{children:(0,l.jsx)(a.__experimentalToolsPanel,{label:(0,r.__)("Block settings","snow-monkey-blocks"),children:(0,l.jsx)(a.__experimentalToolsPanelItem,{hasValue:()=>n!==t.uK.U.A,isShownByDefault:!0,label:(0,r.__)("Custom field name","snow-monkey-blocks"),onDeselect:()=>o({name:t.uK.U.A}),children:(0,l.jsx)(a.TextControl,{__nextHasNoMarginBottom:!0,label:(0,r.__)("Custom field name","snow-monkey-blocks"),value:n,onChange:e=>o({name:e})})})})}),(0,l.jsx)("div",{...(0,i.useBlockProps)(),children:n?(0,l.jsx)(a.Disabled,{children:(0,l.jsx)(d(),{block:"snow-monkey-blocks/custom-field",attributes:e})}):(0,l.jsx)(a.Placeholder,{instructions:(0,r.__)("Specify a custom field name.","snow-monkey-blocks")})})]})},save:function(){return null}})})();