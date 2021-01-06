(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{166:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,h=b["".concat(l,".").concat(d)]||b[d]||u[d]||o;return a?i.a.createElement(h,r(r({ref:t},s),{},{components:a})):i.a.createElement(h,r({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var s=2;s<o;s++)l[s]=a[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),o=(a(0),a(166)),l={slug:"installing-production-app",title:"Installing a docassemble app on your production server",sidebar_label:"Installing a docassemble app on your production server"},r={unversionedId:"practical-guide-docassemble/installing-production-app",id:"practical-guide-docassemble/installing-production-app",isDocsHomePage:!1,title:"Installing a docassemble app on your production server",description:"Installing your app involves three basic steps:",source:"@site/docs/practical-guide-docassemble/installing-production-app.md",slug:"/practical-guide-docassemble/installing-production-app",permalink:"/legal-tech-class/docs/practical-guide-docassemble/installing-production-app",editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/practical-guide-docassemble/installing-production-app.md",version:"current",sidebar_label:"Installing a docassemble app on your production server",sidebar:"someSidebar",previous:{title:"The Jinja2 Templating Language",permalink:"/legal-tech-class/docs/jinja2"},next:{title:"Ethical issues in legal technology",permalink:"/legal-tech-class/docs/ethical-issues/ethical-issues"}},c=[{value:"Quick start",id:"quick-start",children:[]},{value:"Installing the app system-wide",id:"installing-the-app-system-wide",children:[]},{value:"Running the installed package",id:"running-the-installed-package",children:[]},{value:"Creating a permanent shortcut link to the package",id:"creating-a-permanent-shortcut-link-to-the-package",children:[]},{value:"Updating an app that is already installed",id:"updating-an-app-that-is-already-installed",children:[]}],s={toc:c};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Installing your app involves three basic steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docassemble.org/docs/packages.html#playground"}),"Putting the app into a\npackage."),". It's best\nto store the package on Github."),Object(o.b)("li",{parentName:"ol"},"Installing the app system-wide."),Object(o.b)("li",{parentName:"ol"},"Creating a shortcut ",Object(o.b)("inlineCode",{parentName:"li"},"alias"),' to the app so that you can view it on the\n"Available interviews" /list menu and run it via /start/',Object(o.b)("inlineCode",{parentName:"li"},"alias"),".")),Object(o.b)("h2",{id:"quick-start"},"Quick start"),Object(o.b)("p",null,"Before installing the package, you will need:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The URL to the package on GitHub."),Object(o.b)("li",{parentName:"ol"},"The name of the interview YAML file."),Object(o.b)("li",{parentName:"ol"},'The desired "alias" or shortcut name for the package.')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The interview author should be able to provide all three pieces of information\nto the server administrator before asking for the app to be installed.")),Object(o.b)("h2",{id:"installing-the-app-system-wide"},"Installing the app system-wide"),Object(o.b)("p",null,'To install a package, visit the "Package Management" page on your docassemble\nserver (you can reach it via Menu | Package Management, or the /updatepackage\npage on your server.\n)'),Object(o.b)("p",null,'Copy the Github link to your package into the "Github URL" input. It should look\nsomething like this: ',Object(o.b)("inlineCode",{parentName:"p"},"https://github.com/gbls/docassemble-MAEvictionDefense"),"\n(without any trailing ",Object(o.b)("inlineCode",{parentName:"p"},"/"),")."),Object(o.b)("p",null,'Now, scroll down and click on the large "Update" button. Although this is marked\n"Update," it also serves to install a package for the first time.'),Object(o.b)("h2",{id:"running-the-installed-package"},"Running the installed package"),Object(o.b)("p",null,"Now that you've installed the package, how do you run it? You will need to\nidentify two things:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The internal/Python name of the package that corresponds to your package from\nGitHub."),Object(o.b)("li",{parentName:"ol"},"The name of the YAML file(s) that contains the runnable logic of the package.")),Object(o.b)("p",null,"The internal name of the package is very similar to the name of the GitHub\nrepository, except that you replace the ",Object(o.b)("inlineCode",{parentName:"p"},"-")," with a ",Object(o.b)("inlineCode",{parentName:"p"},"."),". For example, the package\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/gbls/docassemble-MAEvictionDefense"}),"https://github.com/gbls/docassemble-MAEvictionDefense")," becomes\n",Object(o.b)("inlineCode",{parentName:"p"},"docassemble.MAEvictionDefense"),'. Package names are case sensitive. If you used\nthe docassemble playground to create your package, it will always start with\n"docassemble" as the beginning of the package name.'),Object(o.b)("p",null,"The YAML file name is simply the name that the file has in your playground.\nIf this is someone else's package, you will need to do a small amount of dective\nwork. "),Object(o.b)("p",null,'Visit the GitHub page for the package. Each docassemble package has the same\nfolder structure. Navigate by clicking through the folders as follows, replacing\n"PackageName" with the name of your package.'),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"docassemble\n  +---[PackageName]\n    +----data\n      +---questions\n")),Object(o.b)("p",null,"For example, for the MAEvictionDefense package, the folder contents\nlook like this:\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/GBLS/docassemble-MAEvictionDefense/tree/master/docassemble/MAEvictionDefense/data/questions"}),"https://github.com/GBLS/docassemble-MAEvictionDefense/tree/master/docassemble/MAEvictionDefense/data/questions")),Object(o.b)("p",null,'For some packages, there is only one YAML file. If there is more than one, you\ncan either ask the package author which one should be run, or click through a\nfew and pick the likeliest candidate. For the MAEvictionDefense package, the\nmain interview file is named "eviction.yml".'),Object(o.b)("p",null,"For a package named ",Object(o.b)("inlineCode",{parentName:"p"},"docassemble.MAEvictionDefense")," and a YAML file named\n",Object(o.b)("inlineCode",{parentName:"p"},"eviction.yml"),", the link to run the interview is\n",Object(o.b)("inlineCode",{parentName:"p"},"https://[docassemble.example.com]/run/MAEvictionDefense/eviction"),"."),Object(o.b)("h2",{id:"creating-a-permanent-shortcut-link-to-the-package"},"Creating a permanent shortcut link to the package"),Object(o.b)("p",null,"If you want, you can add a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docassemble.org/docs/config.html#dispatch"}),"customizable, short\nalias")," for the interview."),Object(o.b)("p",null,'This adds the interview to the /list URL on the server, the "Available\ninterviews" menu option, and allows you to advertise a nicer URL, like\n',Object(o.b)("inlineCode",{parentName:"p"},"https://docassemble.example.com/start/alias"),"."),Object(o.b)("p",null,"This gives you a lot of flexibility to repackage your app later, which\nmakes it a good idea if you ever want to share the link on a different\nwebsite."),Object(o.b)("p",null,"You will use the same information needed above: the ",Object(o.b)("strong",{parentName:"p"},"package name"),"\nand the ",Object(o.b)("strong",{parentName:"p"},"YAML filename"),"."),Object(o.b)("p",null,"Visit the docassemble configuration page (/config) on your server."),Object(o.b)("p",null,"Scroll down and look for an existing ",Object(o.b)("inlineCode",{parentName:"p"},"dispatch")," section in your\nconfiguration file. If you don't see one, create a new one that looks\nlike this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"dispatch:\n  alias: docassemble.MyPackageName:data/questions/interview_name.yml\n")),Object(o.b)("p",null,'Replace "MyPackageName" and "interview_name.yml" with the package name\nand the YAML filename for your package, respectively. Now, when someone\nvisits "',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docassemble.example.com/start/alias%22"}),'https://docassemble.example.com/start/alias"'),' they will be redirected to the\n"interview_name.yml" interview.'),Object(o.b)("p",null,"For example, for the MAEvictionDefense package, the configuration looks like\nthis:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"dispatch:\n  eviction: docassemble.MAEvictionDefense:data/questions/eviction.yml\n")),Object(o.b)("p",null,"And the interview can be run via ",Object(o.b)("inlineCode",{parentName:"p"},"https://interviews.gbls.org/start/eviction"),"."),Object(o.b)("h2",{id:"updating-an-app-that-is-already-installed"},"Updating an app that is already installed"),Object(o.b)("p",null,'If the app has already been installed on the server, you do not need to get the\nGitHub URL again. Just scroll down the /updatepackage page until you see the\nname of the package (remember, it will be docassemble.PackageName). Then click the\n"update" button next to the package.'),Object(o.b)("p",null,'If you do not see the "update" button but the package is listed, then use the\nGitHub URL as described above.'))}p.isMDXComponent=!0}}]);