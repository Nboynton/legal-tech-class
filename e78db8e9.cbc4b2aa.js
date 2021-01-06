(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),r=(n(0),n(166)),i=n(167),s={slug:"assignment-branch-logic",title:"Assignment 3: Branching logic\n",sidebar_label:"Assignment 3"},l={unversionedId:"classes/assignment-branch-logic",id:"classes/assignment-branch-logic",isDocsHomePage:!1,title:"Assignment 3: Branching logic\n",description:"Walking Down the Path: Branching Logic",source:"@site/docs/classes/assignment-branch-logic.md",slug:"/classes/assignment-branch-logic",permalink:"/legal-tech-class/docs/classes/assignment-branch-logic",editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/classes/assignment-branch-logic.md",version:"current",sidebar_label:"Assignment 3",sidebar:"someSidebar",previous:{title:"Assignment 2: Object-oriented programming\n",permalink:"/legal-tech-class/docs/classes/2020-law-smart-machines-assignment-2"},next:{title:"Assignment 4: Creating a document\n",permalink:"/legal-tech-class/docs/classes/assignment-creating-document"}},c=[{value:"Walking Down the Path: Branching Logic",id:"walking-down-the-path-branching-logic",children:[]},{value:"Example",id:"example",children:[{value:"Thinking through outcomes",id:"thinking-through-outcomes",children:[]},{value:"What do you need to know?",id:"what-do-you-need-to-know",children:[]},{value:"If this, then that",id:"if-this-then-that",children:[]},{value:"More branches!",id:"more-branches",children:[]},{value:"Assignment 3",id:"assignment-3",children:[]}]},{value:"Turn in your work",id:"turn-in-your-work",children:[]},{value:"Contributors",id:"contributors",children:[]}],u={toc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"walking-down-the-path-branching-logic"},"Walking Down the Path: Branching Logic"),Object(r.b)("img",{alt:"Woman at crossroads",src:Object(i.a)("img/einar-storsul-K3W7I7x37Xk-unsplash.jpg")}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Photo by Einar Storsul on Unsplash")),Object(r.b)("p",null,"Very simple interviews might just ask a user some questions and spit out some result. Most interviews, though, will want to change what the questions they ask and the results they show based on a user's answers."),Object(r.b)("p",null,"Our code has to make a choice and, until the AI take over, we have to give it very specific instructions about how to make that choice. That's often called ",Object(r.b)("em",{parentName:"p"},"branching logic"),". Probably because of trees."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://imgs.xkcd.com/comics/automation.png",alt:null}))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Panel by Randall Munroe from xkcd.com")),Object(r.b)("p",null,"Suppose you have a friend who comes to you for advice. They were invited to a party, but they're not sure if they should go. You give them advice, your friend is happy, and now you have lots of friends, and even strangers coming to you looking for advice on the same topic. You decide ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://xkcd.com/1319/"}),"code is the answer")," and you'll write a simple form to help them out."),Object(r.b)("p",null,"You start simple."),Object(r.b)("h3",{id:"thinking-through-outcomes"},"Thinking through outcomes"),Object(r.b)("p",null,"What outcomes will our flowchart have? "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to the party"),Object(r.b)("li",{parentName:"ol"},"Stay home")),Object(r.b)("p",null,"We'll need two ",Object(r.b)("strong",{parentName:"p"},"ending")," screens. You make endings screens with an ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docassemble.org/docs/questions.html#event"}),Object(r.b)("inlineCode",{parentName:"a"},"event")," specifier")," in a ",Object(r.b)("inlineCode",{parentName:"p"},"question")," block. Unlike regular question screens, your user isn't going to give an answer here, so there's no variable for Docassemble to find. The ",Object(r.b)("inlineCode",{parentName:"p"},"event")," specifier tells Docassemble how to find the question without needing a variable name."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"---\nevent: dont_go_to_party\nquestion: |\n  Don't go to that dumb party. Do something fun instead!\nsubquestion: |\n  [FILE https://media.giphy.com/media/3j7lxEPPFseD0xvhPi/giphy.gif]\n---\nevent: go_to_party\nquestion: |\n  You should go to the party! I promise it'll be awesome!\nsubquestion: |\n  [FILE https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif]\n")),Object(r.b)("h3",{id:"what-do-you-need-to-know"},"What do you need to know?"),Object(r.b)("p",null,"Well, without user research, you don't really know what good questions would be. You don't have funding or time to do that discovery work, though, but you don't care that much about those strangers and it's not like they have other options, so you'll start by making a guess and worry about it later."),Object(r.b)("p",null,"Do they even like parties? That seems like a place to start."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"---\nquestion: |\n  Do you like parties?\nfields:\n  - no label: user_likes_parties\n    datatype: yesnoradio\n")),Object(r.b)("p",null,"Docassemble will show two buttons on this question screen. If the user clicks 'Yes', ",Object(r.b)("inlineCode",{parentName:"p"},"user_likes_parties")," will have a value of ",Object(r.b)("inlineCode",{parentName:"p"},"True"),". If they click 'No', it will have a value of ",Object(r.b)("inlineCode",{parentName:"p"},"False"),". We can use that to help our program decide what to do. ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docassemble.org/docs/fields.html#fields%20yesno"}),"Read more about yes/no fields"),"."),Object(r.b)("h3",{id:"if-this-then-that"},"If this, then that"),Object(r.b)("p",null,"We'll use what's called an ",Object(r.b)("inlineCode",{parentName:"p"},"if")," statement. It tells our program, 'if the situation is this, then do that.'"),Object(r.b)("p",null,"We already learned about using ",Object(r.b)("inlineCode",{parentName:"p"},"if")," statements inside a ",Object(r.b)("inlineCode",{parentName:"p"},"question")," block. The ",Object(r.b)("inlineCode",{parentName:"p"},"if")," statement inside a ",Object(r.b)("inlineCode",{parentName:"p"},"code")," block is very similar. However, we don't need to start our line with a ",Object(r.b)("inlineCode",{parentName:"p"},"%")," symbol. We also use indentation to show the start and end instead of an ",Object(r.b)("inlineCode",{parentName:"p"},"endif")," statement."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"---\nmandatory: True\ncode: |\n  if user_likes_parties :\n    go_to_party\n  else:\n    dont_go_to_party\n")),Object(r.b)("h3",{id:"more-branches"},"More branches!"),Object(r.b)("p",null,"So that's not really all that matters, right? For example, do they have a ride or would they have to walk?"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"---\nquestion: |\n  Do you have a ride?\nfields:\n  - no label: user_has_a_ride\n    datatype: yesnoradio\n")),Object(r.b)("p",null,"We could ask them both questions separately..."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"---\nmandatory: True\ncode: |\n  if user_likes_parties :\n    go_to_party\n  else:\n    dont_go_to_party\n  \n  if user_has_a_ride :\n    go_to_party\n  else:\n    dont_go_to_party\n")),Object(r.b)("p",null,"...but we'd be wasting their time. If they don't like parties, why does it matter if they have a ride? They want their answer as soon as possible! So we nest the ",Object(r.b)("inlineCode",{parentName:"p"},"if")," statements inside each other. We only ask the second question if they said yes to the first question."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"---\nmandatory: True\ncode: |\n  if user_likes_parties:\n    if user_has_a_ride:\n      go_to_party\n    else:\n      dont_go_to_party      \n  else:\n    dont_go_to_party\n")),Object(r.b)("h3",{id:"assignment-3"},"Assignment 3"),Object(r.b)("p",null,"We've put the app out there and people aren't happy. They feel the situation is more nuanced than the questions you have. Add some more questions! What else could you ask? Copy the script above and add some more questions."),Object(r.b)("p",null,"Add three more questions to the file we already have. If you are short on inspiration, you could choose from this list:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Do you have a big assignment due the next day?"),Object(r.b)("li",{parentName:"ul"},"Is it really far away?"),Object(r.b)("li",{parentName:"ul"},"Will it be mostly people you don't know?"),Object(r.b)("li",{parentName:"ul"},"Do you have someone you want to meet?"),Object(r.b)("li",{parentName:"ul"},"Did you promise someone a ride?")),Object(r.b)("p",null,"The basic steps will be:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create a question block for each question."),Object(r.b)("li",{parentName:"ol"},"Add the question in the right place inside your nested ",Object(r.b)("inlineCode",{parentName:"li"},"if")," statement.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"---\ncomment: |\n  ASSIGNMENT CHECKLIST:\n  [ ] Copy this code\n  [ ] Turn it into an interview\n  [ ] Add three more question blocks\n  [ ] Add logical `if` statements to the code block\n  [ ] Upload two items to the Blackboard\n      [ ] Your version of this script on the Blackboard\n      [ ] A link to your working interview\n---\nmandatory: True\ncode: |\n  if user_likes_parties:\n    if user_has_a_ride:\n      go_to_party\n    else:\n      dont_go_to_party\n  else:\n    dont_go_to_party\n---\nquestion: |\n  Do you like parties?\nfields:\n  - no label: user_likes_parties\n    datatype: yesnoradio\n---\nquestion: |\n  Do you have a ride?\nfields:\n  - no label: user_has_a_ride\n    datatype: yesnoradio\n---\nevent: dont_go_to_party\nquestion: |\n  Don't go to that dumb party. Do something fun instead!\n---\nevent: go_to_party\nquestion: |\n  You should go to the party! I promise it'll be awesome!\n")),Object(r.b)("h2",{id:"turn-in-your-work"},"Turn in your work"),Object(r.b)("p",null,"Use Blackboard to turn in your work. As you see in the comment at the top of the script, you will need to turn in a link to your working interview, as well as the actual YAML code."),Object(r.b)("h2",{id:"contributors"},"Contributors"),Object(r.b)("p",null,"This exercise was prepared by:"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nonprofittechy"}),"Quinten Steenhuis"),", ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/plocket"}),"@Plocket")))}b.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(n),h=a,d=b["".concat(i,".").concat(h)]||b[h]||p[h]||r;return n?o.a.createElement(d,s(s({ref:t},c),{},{components:n})):o.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},167:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a=n(22),o=n(168);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},168:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))}}]);