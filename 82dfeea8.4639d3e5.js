(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),o=(n(0),n(166)),r=n(167),s={slug:"2020-assembly-line-assignment-1",title:"Assignment 1",sidebar_label:"Assignment 1"},l={unversionedId:"classes/assembly-line/2020-assembly-line-assignment-1",id:"classes/assembly-line/2020-assembly-line-assignment-1",isDocsHomePage:!1,title:"Assignment 1",description:"Before you get started",source:"@site/docs/classes/assembly-line/2020-assembly-line-assignment-1.md",slug:"/classes/assembly-line/2020-assembly-line-assignment-1",permalink:"/legal-tech-class/docs/classes/assembly-line/2020-assembly-line-assignment-1",editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/classes/assembly-line/2020-assembly-line-assignment-1.md",version:"current",sidebar_label:"Assignment 1",sidebar:"someSidebar",previous:{title:"Assignment 4: Creating a document\n",permalink:"/legal-tech-class/docs/classes/assignment-creating-document"},next:{title:"Assignment 3",permalink:"/legal-tech-class/docs/classes/assembly-line/2020-assembly-line-assignment-3"}},c=[{value:"Before you get started",id:"before-you-get-started",children:[]},{value:"What is Docassemble?",id:"what-is-docassemble",children:[]},{value:"Introduction to the Docassemble Playground",id:"introduction-to-the-docassemble-playground",children:[]},{value:"Hello, World",id:"hello-world",children:[{value:"Baby steps",id:"baby-steps",children:[]},{value:"The mandatory specifier",id:"the-mandatory-specifier",children:[]},{value:"Introducing variables",id:"introducing-variables",children:[]},{value:"Introducing logic",id:"introducing-logic",children:[]}]},{value:"Your assignment",id:"your-assignment",children:[]},{value:"Working with GitHub",id:"working-with-github",children:[]}],b={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"before-you-get-started"},"Before you get started"),Object(o.b)("p",null,"We will discuss the first few sections of this assignment in class. To refresh\nyour memory and reflect on your own, I recommend skimming the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/legal-tech-class/docs/introduction-to-docassemble"}),"Overview of\nDocassemble"),", Description of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/legal-tech-class/docs/yaml"}),"YAML"),", and the section\ndescribing ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/legal-tech-class/docs/mako"}),"Mako"),". If you run into any trouble, please ask for help on\nthe A2J Slack channel."),Object(o.b)("p",null,"Watch the video below to learn how to create an account on our Docassemble server and\non ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com"}),"GitHub.com"),"."),Object(o.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/TcQChDCgv30",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(o.b)("h2",{id:"what-is-docassemble"},"What is Docassemble?"),Object(o.b)("p",null,"Docassemble is a system for running interactive questionnaires. It uses several\nopen source technologies, including Python, Markdown, YAML and docx-template to\nlet you concentrate on writing your interviews and writing very little code.\nYet, it's flexible enough to allow you to use advanced coding techniques when\nyou need to do so."),Object(o.b)("h2",{id:"introduction-to-the-docassemble-playground"},"Introduction to the Docassemble Playground"),Object(o.b)("p",null,"We will use the Docassemble playground for all exercises. Log in to your\nDocassemble server. When you are loggged in, click on your email address, and\nthen select the Playground option to reach the Playground."),Object(o.b)("img",{alt:"Overview of the Docassemble Playground",src:Object(r.a)("img/playground_window.png")}),Object(o.b)("p",null,"The Playground is made up of several elements."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The main text editing window"),Object(o.b)("li",{parentName:"ol"},"A list of example blocks that can be directly inserted into the text editing window"),Object(o.b)("li",{parentName:"ol"},"A list of variables and functions available in the current interview file"),Object(o.b)("li",{parentName:"ol"},"The save and run button, used to run the interview and view results."),Object(o.b)("li",{parentName:"ol"},"The share button which also gives you a link that can be shared ")),Object(o.b)("h2",{id:"hello-world"},"Hello, World"),Object(o.b)("p",null,"In computer programming, the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/%22Hello,_World!%22_program"}),"traditional first\nexercise"),' in a new\nprogramming language is to display the text "Hello, World."'),Object(o.b)("h3",{id:"baby-steps"},"Baby steps"),Object(o.b)("p",null,"Let's erase the text in the playground and replace it with the text below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"question: Hello, World\n")),Object(o.b)("p",null,"Docassemble interviews contain a series of ",Object(o.b)("inlineCode",{parentName:"p"},"specifiers")," followed by text, such\nas the ",Object(o.b)("inlineCode",{parentName:"p"},"question")," specifier. The ",Object(o.b)("inlineCode",{parentName:"p"},"question")," specifier tells docassemble that\nwhat follows will be the title of a screen displayed to the user."),Object(o.b)("p",null,"When you save and then run this sample, you will notice an error."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Error\nDocassemble has finished executing all code blocks marked as initial or mandatory, and finished asking all questions marked as mandatory (if any). It is a best practice to end your interview with a question that says goodbye and offers an Exit button.\n")),Object(o.b)("h3",{id:"the-mandatory-specifier"},"The mandatory specifier"),Object(o.b)("p",null,"Take a minute to read the error message. In Docassemble, your interview can\ncontain many questions and branches that are never shown to the user. This error\nis telling us that ",Object(o.b)("em",{parentName:"p"},"none")," of the questions are marked as ",Object(o.b)("inlineCode",{parentName:"p"},"mandatory"),", or\nrequired, so Docassemble doesn't know what to display. Let's fix that."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"question: Hello, World\nmandatory: True\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"mandatory"),' specifier marks this block as required. Now when we run the\ninterview, we\'ll see the text "Hello, World" on the screen without any errors.'),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": you should normally have only ONE ",Object(o.b)("inlineCode",{parentName:"p"},"mandatory")," block in a single\ninterview. We'll discuss good practices around this later.")),Object(o.b)("h3",{id:"introducing-variables"},"Introducing variables"),Object(o.b)("p",null,"The purpose of Docassemble is to gather information from the users. Let's ask\nthe user's name so we can greet them personally."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"question: Hello, ${user_name}\nmandatory: True\n---\nquestion: What is your name?\nfields:\n  - Name: user_name\n")),Object(o.b)("p",null,"We introduced several new ideas in this interview. Notice that each screen in\nthe interview is separated by three dashes, like this: ",Object(o.b)("inlineCode",{parentName:"p"},"---"),"."),Object(o.b)("p",null,"We introduced a new ",Object(o.b)("inlineCode",{parentName:"p"},"specifier"),", ",Object(o.b)("inlineCode",{parentName:"p"},"fields"),". Instead of single line of text, this\n",Object(o.b)("inlineCode",{parentName:"p"},"specifier")," takes a list. Each field in the list is indented and begins with a\nsingle dash, like this: ",Object(o.b)("inlineCode",{parentName:"p"},"-"),". Each item has a label, followed by a colon,\nfollowed by the name of the variable that the user's input will be assigned to."),Object(o.b)("p",null,"To learn more about the format of a Docassemble interview, read the section on\nthe ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/legal-tech-class/docs/yaml"}),"YAML format"),"."),Object(o.b)("p",null,"We also introduced ",Object(o.b)("inlineCode",{parentName:"p"},"variables"),". A variable is simply a placeholder. ",Object(o.b)("inlineCode",{parentName:"p"},"user_name"),"\nis a variable that is a placeholder for the user's name. Inside the Docassemble\ninterview, we can display a variable by surrounding it with ",Object(o.b)("inlineCode",{parentName:"p"},"Mako")," tags, like\nthis: ",Object(o.b)("inlineCode",{parentName:"p"},"${variable_name}"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": We don't need to tell Docassemble to mark the second question as\nmandatory. Because the mandatory question requires the variable ",Object(o.b)("inlineCode",{parentName:"p"},"user_name"),",\nDocassemble automatically asks the first question that provides a definition.")),Object(o.b)("h3",{id:"introducing-logic"},"Introducing logic"),Object(o.b)("p",null,"Sometimes you want to answer a question with some logic rather than directly\nasking the user for information."),Object(o.b)("p",null,"Docassemble uses ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/legal-tech-class/docs/python"}),"Python"),", a powerful but easy to read programming\nlanguage to control logic inside an interview. Python statements go inside a\n",Object(o.b)("inlineCode",{parentName:"p"},"code")," block."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'---\ncode: |\n  # This is a comment. notice that we assign a value with =, and we test a value with ==\n  if user_name == "Scotty":\n    secret_message = "Beam Me Up, Scotty"\n  else:\n    secret_message = "No message to report."\n---    \nquestion: |\n  Hello, ${user_name}\nsubquestion: |\n  ${secret_message}\nmandatory: True\n---\nquestion: |\n  What is your name?\nfields:\n  - Name: user_name\n')),Object(o.b)("p",null,"In the example above, we introduced the use of the ",Object(o.b)("inlineCode",{parentName:"p"},"|")," line continuation marker,\nor vertical pipe. We always use this when the text that follows could go on\nmultiple lines, and to handle special characters (like accented letters). You\nalso always use it for a ",Object(o.b)("inlineCode",{parentName:"p"},"code")," block."),Object(o.b)("p",null,"We also introduced the ",Object(o.b)("inlineCode",{parentName:"p"},"subquestion")," specifier. ",Object(o.b)("inlineCode",{parentName:"p"},"subquestion")," is used for longer\nexplanation text on a screen. It uses a smaller font that is not bold."),Object(o.b)("p",null,"Sometimes you don't want to use logic to create a new variable. You can use\nsimple Python code right inside a ",Object(o.b)("inlineCode",{parentName:"p"},"question")," or ",Object(o.b)("inlineCode",{parentName:"p"},"subquestion")," block, although the\nsyntax is very slightly different."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"---  \nquestion: Hello, ${user_name}\nsubquestion: |\n  % if user_name == 'Spock':\n  Live long and prosper.\n  % endif\nmandatory: True\n---\nquestion: What is your name?\nfields:\n  - Name: user_name\n")),Object(o.b)("p",null,"Notice that inside a ",Object(o.b)("inlineCode",{parentName:"p"},"question")," block, the line with the ",Object(o.b)("inlineCode",{parentName:"p"},"if")," statement starts\nwith ",Object(o.b)("inlineCode",{parentName:"p"},"%"),". We also need to use an ",Object(o.b)("inlineCode",{parentName:"p"},"endif")," statement, instead of using indentation\nto show the beginning and end of the ",Object(o.b)("inlineCode",{parentName:"p"},"if")," statement."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),":  ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/legal-tech-class/docs/yaml"}),"YAML")," is picky about indentation. If you run into an\nerror, check to make sure each line is indented the same way as the example\nabove.")),Object(o.b)("h2",{id:"your-assignment"},"Your assignment"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Modify the Hello, World exercise so that it ask for the user's first and last\nnames separately.")),Object(o.b)("h2",{id:"working-with-github"},"Working with GitHub"),Object(o.b)("p",null,"One of the powerful features of Docassemble is its integration with\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com"}),"GitHub"),". GitHub is like track changes on steroids. It helps\npeople work in teams and to let an individual keep track of the history of a\nproject, which is important for solving bugs."),Object(o.b)("p",null,"The DocAssembly Line use GitHub."),Object(o.b)("p",null,"Watch this video again to learn how to create a GitHub account."),Object(o.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/TcQChDCgv30",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(o.b)("p",null,"For our exercise today, we'll work with this\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/SuffolkLITLab/docassemble-teachingtuesday"}),"repository"),"."),Object(o.b)("p",null,"In the Playground, visit the Packages folder."),Object(o.b)("img",{alt:"Packages Menu",src:Object(r.a)("img/folders_packages.png")}),Object(o.b)("p",null,"Pull the repository into the playground."),Object(o.b)("img",{alt:"Pull Package",src:Object(r.a)("img/Playground_Pull.png")}),Object(o.b)("p",null,"Click back. Switch to the file ",Object(o.b)("inlineCode",{parentName:"p"},"plain_language_experiment.yml"),". Edit the text in\nthe Playground, following the instructions that are right in the file."),Object(o.b)("p",null,"Go back to the Packages menu. Now, you can click the Github button to add your\nchanges back on the repository. Make your changes in a ",Object(o.b)("strong",{parentName:"p"},"new branch"),". Add your\ngithub username to the branch name. Branch names can include hyphens, but not\nspaces."),Object(o.b)("img",{alt:"Pull Package",src:Object(r.a)("img/github_new_branch.png")}),Object(o.b)("p",null,'Add a brief "commit message". A commit message is a short note that explains\nwhat you changed since the last time you sent code to GitHub in this repository.'),Object(o.b)("p",null,'Click the "Commit" button to send your changes to GitHub.'))}u.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,p=u["".concat(r,".").concat(m)]||u[m]||d[m]||o;return n?i.a.createElement(p,s(s({ref:t},c),{},{components:n})):i.a.createElement(p,s({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},167:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var a=n(22),i=n(168);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(a)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+r:r}(t,e,n,a)}}function r(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},168:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))}}]);