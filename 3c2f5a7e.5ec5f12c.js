(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{120:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(1),i=t(6),a=(t(0),t(188)),o={id:"editing-docusaurus",title:null,sidebar_label:null},l={id:"appendices/editing-docusaurus",isDocsHomePage:!1,title:"editing-docusaurus",description:"Recommend enable Windows feature Windows Subsystem for Linux and then the Ubuntu image from Microsoft Store.",source:"@site/docs/appendices/editing-docusaurus.md",permalink:"/legal-tech-class/docs/appendices/editing-docusaurus",editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/appendices/editing-docusaurus.md",sidebar_label:null,sidebar:"someSidebar",previous:{title:"Working with Docx files",permalink:"/legal-tech-class/docs/classes/docacon-2020/working-with-docx"}},c=[{value:"Quick start",id:"quick-start",children:[]},{value:"Installing the remark-mermaid plugin",id:"installing-the-remark-mermaid-plugin",children:[{value:"How I enabled the mermaid plugin (don&#39;t need to re-do this step)",id:"how-i-enabled-the-mermaid-plugin-dont-need-to-re-do-this-step",children:[]}]}],s={rightToc:c};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Recommend enable Windows feature Windows Subsystem for Linux and then the Ubuntu image from Microsoft Store."),Object(a.b)("p",null,"In VS Code, you can install the plugins:"),Object(a.b)("p",null,"Remote - WSL\nMarkdown Preview Enhanced\nMarkdown Preview Mermaid"),Object(a.b)("p",null,"To see what you are doing as you work."),Object(a.b)("h2",{id:"quick-start"},"Quick start"),Object(a.b)("p",null,"git clone"),Object(a.b)("p",null,"install yarn, node and npm"),Object(a.b)("p",null,"run ",Object(a.b)("inlineCode",{parentName:"p"},"yarn")," inside the git repository to download all Node dependencies."),Object(a.b)("h2",{id:"installing-the-remark-mermaid-plugin"},"Installing the remark-mermaid plugin"),Object(a.b)("p",null,"You don't need to re-do this. But here are my configuration notes:"),Object(a.b)("p",null,"to create mermaid graphs, use remark-mermaid plugin. This should install when you run ",Object(a.b)("inlineCode",{parentName:"p"},"yarn")),Object(a.b)("p",null,"To build on your environment, you need to install dependencies for chrome-headless"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo apt-get install gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget\n")),Object(a.b)("h3",{id:"how-i-enabled-the-mermaid-plugin-dont-need-to-re-do-this-step"},"How I enabled the mermaid plugin (don't need to re-do this step)"),Object(a.b)("p",null,"edit docusaurus.config.js\nAt top of file, add\n",Object(a.b)("inlineCode",{parentName:"p"},"const mermaid = require('remark-mermaid')")),Object(a.b)("p",null,'In the "docs" block, add ',Object(a.b)("inlineCode",{parentName:"p"},"remarkPlugins: [mermaid],"),"\nSee ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://mdxjs.com/advanced/plugins"}),"https://mdxjs.com/advanced/plugins")," which explains how remark plugins work. Not explained in Docusaurus documentation."))}u.isMDXComponent=!0},188:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),u=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},d=function(e){var n=u(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),p=r,m=d["".concat(o,".").concat(p)]||d[p]||b[p]||a;return t?i.a.createElement(m,l({ref:n},s,{components:t})):i.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);