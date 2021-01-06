(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(166)),i={slug:"markdown",title:"The Markdown formatting language",sidebar_label:"Understanding Markdown"},l={unversionedId:"markdown",id:"markdown",isDocsHomePage:!1,title:"The Markdown formatting language",description:"The Markdown formatting language",source:"@site/docs/markdown.md",slug:"/markdown",permalink:"/legal-tech-class/docs/markdown",editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/markdown.md",version:"current",sidebar_label:"Understanding Markdown",sidebar:"someSidebar",previous:{title:"The YAML file Format",permalink:"/legal-tech-class/docs/yaml"},next:{title:"The Mako templating language",permalink:"/legal-tech-class/docs/mako"}},c=[{value:"The Markdown formatting language",id:"the-markdown-formatting-language",children:[]},{value:"Including variable text",id:"including-variable-text",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"the-markdown-formatting-language"},"The Markdown formatting language"),Object(o.b)("p",null,"Like YAML, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://daringfireball.net/projects/markdown/"}),"Markdown")," is meant to be a concise, human readable way to represent information: in this case, it represents elements such as font size, headers, bold, italic, formatted lists, and even links to resources on the WWW. Many forums, including the popular Reddit, allow you to format your comments using Markdown. However, it is not quite as expressive as an OOXML, Word, or RTF file would be."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-markdown"}),"#### Heading level 4\n**Bold text**\n_italic text__\n\n1. Numbered item 1\n1. Numbered item 2\n1. Numbered item 3\n")),Object(o.b)("p",null,"Turns into:"),Object(o.b)("h4",{id:"heading-level-4"},"Heading level 4"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Bold text")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"italic text")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Numbered item 1"),Object(o.b)("li",{parentName:"ol"},"Numbered item 2"),Object(o.b)("li",{parentName:"ol"},"Numbered item 3")),Object(o.b)("h2",{id:"including-variable-text"},"Including variable text"),Object(o.b)("p",null,"In order to add variable text, Docassemble uses the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/legal-tech-class/docs/mako"}),"Mako templating language")," which\ncan be inserted directly almost anywhere Docassemble expects text, such as under a\n",Object(o.b)("inlineCode",{parentName:"p"},"question"),", ",Object(o.b)("inlineCode",{parentName:"p"},"subquestion"),", ",Object(o.b)("inlineCode",{parentName:"p"},"content")," or ",Object(o.b)("inlineCode",{parentName:"p"},"template")," block."),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docassemble.org/docs/markup.html"}),"Docassemble documentation")," covers Markdown fairly well, with examples. "),Object(o.b)("p",null,"This section was originally posted as a blog on ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.nonprofittechy.com/2020/01/17/understanding-docassembles-yaml-interview-format/"}),"Nonprofittechy.com"),"."))}b.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,p=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(p,l(l({ref:t},s),{},{components:n})):a.a.createElement(p,l({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);