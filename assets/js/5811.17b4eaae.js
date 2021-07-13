(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5811],{38173:function(e,t,a){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function n(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(a)return(a=a.call(e)).next.bind(a);if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}a.r(t),a.d(t,{default:function(){return n}})},3905:function(e,t,a){"use strict";a.r(t),a.d(t,{MDXContext:function(){return c},MDXProvider:function(){return f},mdx:function(){return b},useMDXComponents:function(){return s},withMDXComponents:function(){return d}});var r=a(2784);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),d=function(e){return function(t){var a=s(t.components);return r.createElement(e,l({},t,{components:a}))}},s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},f=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),f=n,p=d["".concat(u,".").concat(f)]||d[f]||m[f]||l;return a?r.createElement(p,o(o({ref:t},c),{},{components:a})):r.createElement(p,o({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,u=new Array(l);u[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,u[1]=o;for(var c=2;c<l;c++)u[c]=a[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},45125:function(e,t,a){"use strict";var r=a(20862).default,n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(2784)),u=n(a(86010)),o=a(3905),i=r(a(29052)),c=n(a(33692)),d=n(a(47637)),s=n(a(41217)),f=n(a(46327)),m=a(86700);var p=function(e){var t,a,r=(t=(0,m.usePluralForm)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,i.translate)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),n=e.children,p=e.frontMatter,b=e.metadata,h=e.truncated,v=e.isBlogPostPage,g=void 0!==v&&v,y=b.date,E=b.formattedDate,O=b.permalink,k=b.tags,_=b.readingTime,P=p.author,T=p.title,j=p.image,N=p.keywords,w=p.author_url||p.authorURL,C=p.author_title||p.authorTitle,I=p.author_image_url||p.authorImageURL;return l.default.createElement(l.default.Fragment,null,l.default.createElement(s.default,{keywords:N,image:j}),l.default.createElement("article",{className:g?void 0:"margin-bottom--xl"},(a=g?"h1":"h2",l.default.createElement("header",null,l.default.createElement(a,{className:(0,u.default)("margin-bottom--sm",f.default.blogPostTitle)},g?T:l.default.createElement(c.default,{to:O},T)),l.default.createElement("div",{className:"margin-vert--md"},l.default.createElement("time",{dateTime:y,className:f.default.blogPostDate},E,_&&l.default.createElement(l.default.Fragment,null," \xb7 ",r(_)))),l.default.createElement("div",{className:"avatar margin-vert--md"},I&&l.default.createElement(c.default,{className:"avatar__photo-link avatar__photo",href:w},l.default.createElement("img",{src:I,alt:P})),l.default.createElement("div",{className:"avatar__intro"},P&&l.default.createElement(l.default.Fragment,null,l.default.createElement("h4",{className:"avatar__name"},l.default.createElement(c.default,{href:w},P)),l.default.createElement("small",{className:"avatar__subtitle"},C)))))),l.default.createElement("div",{className:"markdown"},l.default.createElement(o.MDXProvider,{components:d.default},n)),(k.length>0||h)&&l.default.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&l.default.createElement("div",{className:"col"},l.default.createElement("strong",null,l.default.createElement(i.default,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),k.map((function(e){var t=e.label,a=e.permalink;return l.default.createElement(c.default,{key:a,className:"margin-horiz--sm",to:a},t)}))),h&&l.default.createElement("div",{className:"col text--right"},l.default.createElement(c.default,{to:b.permalink,"aria-label":"Read more about "+T},l.default.createElement("strong",null,l.default.createElement(i.default,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))};t.default=p},61238:function(e,t,a){"use strict";var r=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.sidebar;if(0===t.items.length)return null;return n.default.createElement("div",{className:(0,l.default)(o.default.sidebar,"thin-scrollbar")},n.default.createElement("h3",{className:o.default.sidebarItemTitle},t.title),n.default.createElement("ul",{className:o.default.sidebarItemList},t.items.map((function(e){return n.default.createElement("li",{key:e.permalink,className:o.default.sidebarItem},n.default.createElement(u.default,{isNavLink:!0,to:e.permalink,className:o.default.sidebarItemLink,activeClassName:o.default.sidebarItemLinkActive},e.title))}))))};var n=r(a(2784)),l=r(a(86010)),u=r(a(33692)),o=r(a(60766))},96638:function(e,t,a){"use strict";var r=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(19756)),l=r(a(2784)),u=r(a(86010)),o=a(29052),i=a(86700);a(38133);var c=r(a(38867)),d=["id"],s=function(e){return function(t){var a,r=t.id,s=(0,n.default)(t,d),f=(0,i.useThemeConfig)().navbar.hideOnScroll;return r?l.default.createElement(e,s,l.default.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,u.default)("anchor",(a={},a[c.default.enhancedAnchor]=!f,a)),id:r}),s.children,l.default.createElement("a",{className:"hash-link",href:"#"+r,title:(0,o.translate)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.default.createElement(e,s)}};t.default=s},73491:function(e,t,a){"use strict";var r=a(95318).default,n=a(20862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(2784)),u=r(a(33692)),o=r(a(48995)),i=r(a(96638)),c={code:function(e){var t=e.children;return(0,l.isValidElement)(t)?t:t.includes("\n")?l.default.createElement(o.default,e):l.default.createElement("code",e)},a:function(e){return l.default.createElement(u.default,e)},pre:function(e){var t,a=e.children;return(0,l.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?null==a?void 0:a.props.children:l.default.createElement(o.default,(0,l.isValidElement)(a)?null==a?void 0:a.props:{children:a})},h1:(0,i.default)("h1"),h2:(0,i.default)("h2"),h3:(0,i.default)("h3"),h4:(0,i.default)("h4"),h5:(0,i.default)("h5"),h6:(0,i.default)("h6")};t.default=c},48995:function(e,t,a){"use strict";var r=a(95318).default,n=a(20862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(22122)),u=r(a(19756));a(83283);var o=r(a(735)),i=n(a(2784)),c=n(a(29052)),d=["children"],s=function(e){var t=e.children,a=(0,u.default)(e,d),r=(0,i.useRef)(null),n=(0,i.useState)(!1),s=n[0],f=n[1];return i.default.createElement("pre",(0,l.default)({},a,{ref:r}),t,i.default.createElement("button",{type:"button","aria-label":(0,c.translate)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:"copy-button",onClick:function(){var e;r.current&&(0,o.default)([].concat(null!=(e=r.current.querySelectorAll("code div.line"))?e:[]).map((function(e){return e.textContent})).join("\n"));f(!0),setTimeout((function(){return f(!1)}),2e3)}},s?i.default.createElement(c.default,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):i.default.createElement(c.default,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy")))};t.default=s},47637:function(e,t,a){"use strict";var r=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(2784)),l=r(a(48995)),u=r(a(73491)),o=Object.assign({},u.default,{div:function(e){return"shiki-twoslash-fragment"===e.className?n.default.createElement(n.default.Fragment,null,e.children):n.default.createElement("div",e)},pre:function(e){return n.default.createElement(l.default,e)},code:function(e){return n.default.createElement("code",e)}});t.default=o},735:function(e,t,a){"use strict";function r(e,{target:t=document.body}={}){const a=document.createElement("textarea"),r=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const n=document.getSelection();let l=!1;n.rangeCount>0&&(l=n.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let u=!1;try{u=document.execCommand("copy")}catch{}return a.remove(),l&&(n.removeAllRanges(),n.addRange(l)),r&&r.focus(),u}a.r(t),a.d(t,{default:function(){return r}})},38133:function(e,t,a){"use strict";a.r(t)},83283:function(e,t,a){"use strict";a.r(t)},46327:function(e,t,a){"use strict";a.r(t),t.default={blogPostTitle:"blogPostTitle_GeHD",blogPostDate:"blogPostDate_fNvV"}},60766:function(e,t,a){"use strict";a.r(t),t.default={sidebar:"sidebar_2ahu",sidebarItemTitle:"sidebarItemTitle_2hhb",sidebarItemList:"sidebarItemList_2xAf",sidebarItem:"sidebarItem_2UVv",sidebarItemLink:"sidebarItemLink_1RT6",sidebarItemLinkActive:"sidebarItemLinkActive_12pM"}},38867:function(e,t,a){"use strict";a.r(t),t.default={enhancedAnchor:"enhancedAnchor_2LWZ"}}}]);