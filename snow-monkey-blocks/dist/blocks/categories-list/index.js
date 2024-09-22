(()=>{var e,s={3669:(e,s,o)=>{"use strict";const t=window.wp.blocks,l=JSON.parse('{"name":"snow-monkey-blocks/categories-list","uK":{"OZ":{"A":5},"rE":{"A":""},"q5":{"A":""},"fq":{"A":""}}}'),r=window.ReactJSXRuntime,n=(0,r.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,r.jsx)("path",{d:"M21.28,12.57H16.76a.19.19,0,0,1-.18-.19V10.73a.73.73,0,0,0-.72-.73H9.72a.73.73,0,0,0-.72.73v9.54a.73.73,0,0,0,.72.73H21.28a.73.73,0,0,0,.72-.73v-7A.72.72,0,0,0,21.28,12.57ZM21,19.62a.37.37,0,0,1-.37.38H10.37a.37.37,0,0,1-.37-.38V11.37a.37.37,0,0,1,.37-.37h4.76a.37.37,0,0,1,.37.37v1.88a.36.36,0,0,0,.37.37h4.76A.37.37,0,0,1,21,14Z"}),(0,r.jsx)("path",{d:"M9,13H3.37A.37.37,0,0,1,3,12.62V4.37A.37.37,0,0,1,3.37,4H8.13a.37.37,0,0,1,.37.37V6.25a.36.36,0,0,0,.37.37h4.76A.37.37,0,0,1,14,7v3h1V6.3a.72.72,0,0,0-.72-.73H9.76a.19.19,0,0,1-.18-.19V3.73A.73.73,0,0,0,8.86,3H2.72A.73.73,0,0,0,2,3.73v9.54a.73.73,0,0,0,.72.73H9Z"})]});var i=o(6942),a=o.n(i);const c=window.lodash,d=window.wp.components,u=window.wp.blockEditor,_=window.wp.data,m=window.wp.element,g=window.wp.i18n,p=(e,s=0,o=null)=>(e=Number(e),(isNaN(e)||e<s)&&(e=s),null!==o&&e>o&&(e=o),e),b=window.wp.dataControls,{name:h}=l,y={articleCategories:{}},k={setArticleCategories:e=>({type:"SET_ARTICLE_CATEGORIES",articleCategories:e}),*fetchArticleCategories(){const e=yield(0,b.apiFetch)({path:"/wp/v2/categories/?per_page=-1"});return k.setArticleCategories(e)}},x={*getArticleCategories(){yield k.fetchArticleCategories()}},w=(0,_.createReduxStore)(h,{reducer:(e=y,s)=>"SET_ARTICLE_CATEGORIES"===s.type?{...e,articleCategories:s.articleCategories}:e,actions:k,selectors:{getArticleCategories:e=>e.articleCategories},controls:b.controls,resolvers:x});(0,_.register)(w),(0,t.registerBlockType)(l.name,{icon:{foreground:"#cd162c",src:n},edit:function({attributes:e,setAttributes:s,className:o}){const{articles:t,exclusionCategories:n,orderby:i,order:b}=e,h=(0,m.useRef)(),y=(0,_.useSelect)((e=>e(w).getArticleCategories()));if(!y||!y.length)return(0,r.jsx)("div",{...(0,u.useBlockProps)(),children:(0,r.jsxs)(d.Placeholder,{icon:"editor-ul",label:(0,g.__)("Categories list","snow-monkey-blocks"),children:[(0,r.jsx)(d.Spinner,{}),(0,g.__)("Loading setting data","snow-monkey-blocks")]})});const k=(e,s)=>{let o=[];return null!=n&&(o=n.split(",")),e?o.push(s):o=(0,c.remove)(o,(e=>s!==e)),(0,c.compact)((0,c.union)(o)).join(",")},x=()=>y.map((e=>(0,r.jsx)(d.ToggleControl,{label:e.name,value:String(e.id),checked:-1!==(0,c.indexOf)(n.split(","),String(e.id)),onChange:o=>{s({exclusionCategories:k(o,String(e.id))})}},e.id))),v=a()("smb-categories-list",o),f=()=>{const e=y.map((e=>e.count>0&&-1===(0,c.indexOf)(n.split(","),String(e.id))?(0,r.jsxs)("li",{className:"smb-categories-list__item",children:[(0,r.jsxs)("div",{className:"smb-categories-list__item__count",children:[e.count,(0,r.jsx)("span",{children:(0,g.__)("articles","snow-monkey-blocks")})]}),(0,r.jsxs)("div",{className:"smb-categories-list__item__detail",children:[(0,r.jsx)("div",{className:"smb-categories-list__item__category-name",children:e.name}),e.description&&(0,r.jsx)("div",{className:"smb-categories-list__item__category-description",children:e.description}),(0,r.jsx)("div",{className:"smb-categories-list__item__recent-label",children:(0,g.__)("Recent posts","snow-monkey-blocks")}),(0,r.jsx)("ul",{className:"smb-categories-list__item__list",children:(0,r.jsx)("li",{children:(0,g.__)("Only the actual contribution screen is displayed","snow-monkey-blocks")})})]})]},e.id):null)).filter((e=>e));return(0,r.jsx)("div",{className:v,children:(0,r.jsx)("ul",{className:"smb-categories-list__list",ref:h,children:e.filter((e=>e))})})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(u.InspectorControls,{children:[(0,r.jsx)(d.__experimentalToolsPanel,{label:(0,g.__)("Block settings","snow-monkey-blocks"),children:(0,r.jsx)(d.__experimentalToolsPanelItem,{hasValue:()=>t!==l.uK.OZ.A,isShownByDefault:!0,label:(0,g.__)("Categories list articles","snow-monkey-blocks"),onDeselect:()=>s({articles:l.uK.OZ.A}),children:(0,r.jsx)(d.RangeControl,{label:(0,g.__)("Categories list articles","snow-monkey-blocks"),value:t,onChange:e=>s({articles:p(e,1,5)}),min:"1",max:"5"})})}),(0,r.jsx)(d.__experimentalToolsPanel,{label:(0,g.__)("Exclusion categories settings","snow-monkey-blocks"),children:(0,r.jsxs)(d.__experimentalToolsPanelItem,{hasValue:()=>n!==l.uK.rE.A,isShownByDefault:!0,label:(0,g.__)("Exclusion categories settings","snow-monkey-blocks"),onDeselect:()=>s({exclusionCategories:l.uK.rE.A}),children:[(0,r.jsx)("p",{style:{gridColumn:"1/-1"},children:(0,g.__)("Categories with a post count of 0 are not displayed even if they are not excluded","snow-monkey-blocks")}),(0,r.jsx)("div",{style:{display:"grid",gap:"16px"},children:(0,r.jsx)(x,{})})]})}),(0,r.jsxs)(d.__experimentalToolsPanel,{label:(0,g.__)("Display order settings","snow-monkey-blocks"),children:[(0,r.jsx)("p",{style:{gridColumn:"1/-1"},children:(0,g.__)("The display order you set is valid only on the actual contribution screen","snow-monkey-blocks")}),(0,r.jsx)(d.__experimentalToolsPanelItem,{hasValue:()=>i!==l.uK.q5.A,isShownByDefault:!0,label:(0,g.__)("orderby","snow-monkey-blocks"),onDeselect:()=>s({orderby:l.uK.q5.A}),children:(0,r.jsx)(d.SelectControl,{label:(0,g.__)("orderby","snow-monkey-blocks"),value:i,options:[{label:(0,g.__)("category id","snow-monkey-blocks"),value:"id"},{label:(0,g.__)("category name","snow-monkey-blocks"),value:"name"},{label:(0,g.__)("category slug","snow-monkey-blocks"),value:"slug"},{label:(0,g.__)("category post count","snow-monkey-blocks"),value:"count"},{label:(0,g.__)("term_group","snow-monkey-blocks"),value:"term_group"}],onChange:e=>s({orderby:e})})}),(0,r.jsx)(d.__experimentalToolsPanelItem,{hasValue:()=>b!==l.uK.fq.A,isShownByDefault:!0,label:(0,g.__)("order","snow-monkey-blocks"),onDeselect:()=>s({order:l.uK.fq.A}),children:(0,r.jsx)(d.SelectControl,{label:(0,g.__)("order","snow-monkey-blocks"),value:b,options:[{label:(0,g.__)("asc","snow-monkey-blocks"),value:"asc"},{label:(0,g.__)("desc","snow-monkey-blocks"),value:"desc"}],onChange:e=>s({order:e})})})]})]}),(0,r.jsx)("div",{...(0,u.useBlockProps)(),children:(0,r.jsx)(f,{})})]})},save:function(){return null}})},6942:(e,s)=>{var o;!function(){"use strict";var t={}.hasOwnProperty;function l(){for(var e="",s=0;s<arguments.length;s++){var o=arguments[s];o&&(e=n(e,r(o)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return l.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var s="";for(var o in e)t.call(e,o)&&e[o]&&(s=n(s,o));return s}function n(e,s){return s?e?e+" "+s:e+s:e}e.exports?(l.default=l,e.exports=l):void 0===(o=function(){return l}.apply(s,[]))||(e.exports=o)}()}},o={};function t(e){var l=o[e];if(void 0!==l)return l.exports;var r=o[e]={exports:{}};return s[e](r,r.exports,t),r.exports}t.m=s,e=[],t.O=(s,o,l,r)=>{if(!o){var n=1/0;for(d=0;d<e.length;d++){o=e[d][0],l=e[d][1],r=e[d][2];for(var i=!0,a=0;a<o.length;a++)(!1&r||n>=r)&&Object.keys(t.O).every((e=>t.O[e](o[a])))?o.splice(a--,1):(i=!1,r<n&&(n=r));if(i){e.splice(d--,1);var c=l();void 0!==c&&(s=c)}}return s}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[o,l,r]},t.n=e=>{var s=e&&e.__esModule?()=>e.default:()=>e;return t.d(s,{a:s}),s},t.d=(e,s)=>{for(var o in s)t.o(s,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:s[o]})},t.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),(()=>{var e={9804:0,9764:0};t.O.j=s=>0===e[s];var s=(s,o)=>{var l,r,n=o[0],i=o[1],a=o[2],c=0;if(n.some((s=>0!==e[s]))){for(l in i)t.o(i,l)&&(t.m[l]=i[l]);if(a)var d=a(t)}for(s&&s(o);c<n.length;c++)r=n[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(d)},o=self.webpackChunk=self.webpackChunk||[];o.forEach(s.bind(null,0)),o.push=s.bind(null,o.push.bind(o))})();var l=t.O(void 0,[9764],(()=>t(3669)));l=t.O(l)})();