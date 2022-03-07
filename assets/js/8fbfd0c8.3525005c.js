"use strict";(self.webpackChunk_griffel_website=self.webpackChunk_griffel_website||[]).push([[428],{6325:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(2784),a=n(2600);const s="container_Knlc";const i=function(e){return r.createElement("div",{className:s},r.createElement(a.iC,null),r.createElement("span",null,e.children))}},3342:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>p,toc:()=>f,default:()=>u});var r=n(7896),a=n(1461),s=(n(2784),n(876)),i=n(6325),o=["components"],l={sidebar_position:3},c="makeStaticStyles",p={unversionedId:"react/api/make-static-styles",id:"react/api/make-static-styles",title:"makeStaticStyles",description:"Creates styles with a global selector. This is especially useful for CSS resets, for example normalize.css.",source:"@site/docs/react/api/make-static-styles.md",sourceDirName:"react/api",slug:"/react/api/make-static-styles",permalink:"/react/api/make-static-styles",editUrl:"https://github.com/microsoft/griffel/tree/main/apps/website/docs/react/api/make-static-styles.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"reactSidebar",previous:{title:"mergeClasses",permalink:"/react/api/merge-classes"},next:{title:"createDOMRenderer",permalink:"/react/api/create-dom-renderer"}},f=[{value:"Defining styles with objects",id:"defining-styles-with-objects",children:[],level:2},{value:"Defining multiple styles",id:"defining-multiple-styles",children:[],level:2}],m={toc:f};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"makestaticstyles"},"makeStaticStyles"),(0,s.kt)("p",null,"Creates styles with a global selector. This is especially useful for CSS resets, for example ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/necolas/normalize.css/"},"normalize.css"),"."),(0,s.kt)("h2",{id:"defining-styles-with-objects"},"Defining styles with objects"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStaticStyles } from '@griffel/react';\n\nconst useStaticStyles = makeStaticStyles({\n  '@font-face': {\n    fontFamily: 'Open Sans',\n    src: `url(\"/fonts/OpenSans-Regular-webfont.woff2\") format(\"woff2\"),\n         url(\"/fonts/OpenSans-Regular-webfont.woff\") format(\"woff\")`,\n  },\n  body: {\n    backgroundColor: 'red',\n  },\n});\n\nfunction App() {\n  useStaticStyles();\n\n  return <div />;\n}\n")),(0,s.kt)(i.Z,{mdxType:"OutputTitle"},"Produces following CSS..."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"@font-face {\n  font-family: 'Open Sans';\n  src: url('/fonts/OpenSans-Regular-webfont.woff2') format('woff2'), url('/fonts/OpenSans-Regular-webfont.woff') format('woff');\n}\nbody {\n  background-color: red;\n}\n")),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Limited support for nested selectors")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Nested selectors are not supported for this scenario via nesting of JavaScript objects."),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStaticStyles } from '@griffel/react';\n\nconst useStaticStyles = makeStaticStyles({\n  // \ud83d\udd34 Not supported\n  '.some': {\n    '.class': {\n      /* ... */\n    },\n    ':hover': {\n      /* ... */\n    },\n  },\n\n  // \u2705 Supported\n  '.some.class': {\n    /* ... */\n  },\n  '.some.class:hover': {\n    /* ... */\n  },\n});\n")))),(0,s.kt)("h2",{id:"defining-multiple-styles"},"Defining multiple styles"),(0,s.kt)("p",null,"Static styles can be defined with strings & arrays of strings/objects:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import { makeStaticStyles } from '@griffel/react';\n\nconst useStaticStyles1 = makeStaticStyles('body { background: red; } .foo { color: green; }');\nconst useStaticStyles2 = makeStaticStyles([\n  {\n    '@font-face': {\n      fontFamily: 'My Font',\n      src: `url(my_font.woff)`,\n    },\n  },\n  'html { line-height: 20px; }',\n]);\n\nfunction App() {\n  useStaticStyles1();\n  useStaticStyles2();\n\n  return <div />;\n}\n")))}u.isMDXComponent=!0},876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,d=m["".concat(l,".").concat(u)]||m[u]||f[u]||s;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);