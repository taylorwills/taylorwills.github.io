(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{284:function(t,e,c){"use strict";c(45);var n=c(283),l=c(282),o={name:"Header",data:function(){return{navFunction:l.a}},props:{noSidebar:{type:Boolean},noTypingAnimation:{type:Boolean},arr:{type:Array},name:{type:String,default:"Taylor Wills | Full Stack Engineer"},menus:{type:[Object,Array],default:function(){return[{name:"About",href:"about",icon:"icon ion-person"},{name:"Projects",href:"works",icon:"icon ion-paintbrush"},{name:"Contact",href:"contacts",icon:"icon ion-at"}]}}},components:{TypingAnimation:n.a}},r=c(44),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("div",{staticClass:"profile"},[e("div",{staticClass:"title"},[t._v(t._s(t.name))]),t._v(" "),t.noTypingAnimation?e("div",{staticClass:"subtitle"},[t._v(t._s(t.arr))]):e("TypingAnimation",{attrs:{arr:t.arr}})],1),t._v(" "),e("div",{staticClass:"top-menu"},[e("ul",t._l(t.menus,(function(menu){return e("li",{key:menu.name,class:t.navFunction.activeNav(menu.href)},[e("a",{attrs:{href:"#"+menu.href},on:{click:function(e){return t.navFunction.activeSection(menu.href)}}},[e("span",{class:menu.icon}),t._v(" "),e("span",{staticClass:"link"},[t._v(t._s(menu.name))])])])})),0)])])}),[],!1,null,null,null);e.a=component.exports},286:function(t,e,c){"use strict";c(80);var n=c(293),l={name:"LanguagesSkills",mounted:function(){Object(n.d)(),setTimeout(n.c,1e3)}},o=c(44),component=Object(o.a)(l,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("ul",[e("li",{staticClass:"border-line-h"},[e("div",{staticClass:"name"},[t._v("English")]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"percentage",staticStyle:{width:"90%"}})])]),t._v(" "),e("li",{staticClass:"border-line-h"},[e("div",{staticClass:"name"},[t._v("German")]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"percentage",staticStyle:{width:"60%"}})])]),t._v(" "),e("li",{staticClass:"border-line-h"},[e("div",{staticClass:"name"},[t._v("Italian")]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"percentage",staticStyle:{width:"30%"}})])]),t._v(" "),e("li",[e("div",{staticClass:"name"},[t._v("French")]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"percentage",staticStyle:{width:"70%"}})])])])}],!1,null,null,null);e.a=component.exports},297:function(t,e,c){t.exports=c.p+"img/python.ea5766d.svg"},298:function(t,e,c){t.exports=c.p+"img/javascript.8f556dd.svg"},299:function(t,e,c){t.exports=c.p+"img/java.5cb2db8.svg"},300:function(t,e,c){t.exports=c.p+"img/react.93d1e20.svg"},301:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4IiBpZD0iYW5ndWxhcmpzIj48cGF0aCBmaWxsPSIjQjNCM0IzIiBkPSJNNjMuODEgMS4wMjZsLTU5LjI1NyAyMC44NTQgOS4zNjMgNzcuNjM3IDQ5Ljk1NyAyNy40NTcgNTAuMjE0LTI3LjgyOCA5LjM2LTc3LjYzNXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjQTYxMjBEIiBkPSJNMTE3LjUzNiAyNS45OThsLTUzLjg2NC0xOC4zNjl2MTEyLjc4NWw0NS4xNDEtMjQuOTgzeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNERDFCMTYiIGQ9Ik0xMS4yMDEgMjYuMzI5bDguMDI2IDY5LjQzNCA0NC40NDQgMjQuNjUxdi0xMTIuNzg3eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGMkYyRjIiIGQ9Ik03OC40OTkgNjcuNjdsLTE0LjgyNyA2LjkzNGgtMTUuNjI4bC03LjM0NyAxOC4zNzQtMTMuNjYzLjI1NCAzNi42MzgtODEuNTA4IDE0LjgyNyA1NS45NDZ6bS0xLjQzNC0zLjQ5MWwtMTMuMjk1LTI2LjMyMS0xMC45MDYgMjUuODY4aDEwLjgwN2wxMy4zOTQuNDUzeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNCM0IzQjMiIGQ9Ik02My42NzEgMTEuNzI0bC4wOTggMjYuMTM0IDEyLjM3NSAyNS44ODhoLTEyLjQ0NmwtLjAyNyAxMC44NDEgMTcuMjA5LjAxNyA4LjA0MiAxOC42MyAxMy4wNzQuMjQyeiI+PC9wYXRoPjwvc3ZnPg=="},302:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYW1hZGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjUwMCAyMTU2LjMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1MDAgMjE1Ni4zIiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGU+LnN0MHtmaWxsOiM0MWI4ODN9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjAwMCAwaDUwMEwxMjUwIDIxNTYuMyAwIDBoOTU2LjNMMTI1MCA1MDAgMTUzNy41IDBIMjAwMHoiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJtMCAwIDEyNTAgMjE1Ni4zTDI1MDAgMGgtNTAwbC03NTAgMTI5My44TDQ5My44IDBIMHoiLz48cGF0aCBkPSJNNDkzLjggMCAxMjUwIDEzMDAgMjAwMCAwaC00NjIuNUwxMjUwIDUwMCA5NTYuMyAwSDQ5My44eiIgc3R5bGU9ImZpbGw6IzM1NDk1ZSIvPjwvc3ZnPg=="},303:function(t,e,c){t.exports=c.p+"img/nuxtjs.ebc840e.svg"},304:function(t,e,c){t.exports=c.p+"img/jquery.f55a69d.svg"},305:function(t,e,c){t.exports=c.p+"img/html.c67be4c.svg"},306:function(t,e,c){t.exports=c.p+"img/css3.e973a54.svg"},307:function(t,e,c){t.exports=c.p+"img/docker.8816006.svg"},308:function(t,e,c){t.exports=c.p+"img/postgresql.8d9dc78.svg"},309:function(t,e,c){t.exports=c.p+"img/django.c983cad.svg"},310:function(t,e,c){t.exports=c.p+"img/git.3203504.svg"},311:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iZ2l0aHViIj48cGF0aCBkPSJNMTIsMi4yNDY3QTEwLjAwMDQyLDEwLjAwMDQyLDAsMCwwLDguODM3NTIsMjEuNzM0MTljLjUuMDg3NTIuNjg3NS0uMjEyNDcuNjg3NS0uNDc1LDAtLjIzNzQ5LS4wMTI1MS0xLjAyNS0uMDEyNTEtMS44NjI0OUM3LDE5Ljg1OTE5LDYuMzUsMTguNzg0MjMsNi4xNSwxOC4yMjE3M0EzLjYzNiwzLjYzNiwwLDAsMCw1LjEyNSwxNi44MDkyYy0uMzUtLjE4NzUtLjg1LS42NS0uMDEyNTEtLjY2MjQ4QTIuMDAxMTcsMi4wMDExNywwLDAsMSw2LjY1LDE3LjE3MTY5YTIuMTM3NDIsMi4xMzc0MiwwLDAsMCwyLjkxMjQ4LjgyNUEyLjEwMzc2LDIuMTAzNzYsMCwwLDEsMTAuMiwxNi42NTkyM2MtMi4yMjUtLjI1LTQuNTUtMS4xMTI1NC00LjU1LTQuOTM3NWEzLjg5MTg3LDMuODkxODcsMCwwLDEsMS4wMjUtMi42ODc1LDMuNTkzNzMsMy41OTM3MywwLDAsMSwuMS0yLjY1cy44Mzc0Ny0uMjYyNTEsMi43NSwxLjAyNWE5LjQyNzQ3LDkuNDI3NDcsMCwwLDEsNSwwYzEuOTEyNDgtMS4zLDIuNzUtMS4wMjUsMi43NS0xLjAyNWEzLjU5MzIzLDMuNTkzMjMsMCwwLDEsLjEsMi42NSwzLjg2OSwzLjg2OSwwLDAsMSwxLjAyNSwyLjY4NzVjMCwzLjgzNzQ3LTIuMzM3NTIsNC42ODc1LTQuNTYyNSw0LjkzNzVhMi4zNjgxNCwyLjM2ODE0LDAsMCwxLC42NzUsMS44NWMwLDEuMzM3NTItLjAxMjUxLDIuNDEyNDgtLjAxMjUxLDIuNzUsMCwuMjYyNTEuMTg3NS41NzUuNjg3NS40NzVBMTAuMDA1MywxMC4wMDUzLDAsMCwwLDEyLDIuMjQ2N1oiPjwvcGF0aD48L3N2Zz4="},312:function(t,e,c){t.exports=c.p+"img/gitlab.682902f.svg"},344:function(t,e,c){"use strict";c.r(e);var n=c(285),l=c(288),o=c(289),r=c(286),v=c(290),M=c(291),d=c(283),C=c(292),m=c(284),N={name:"index-new-demo-3",head:function(){return{link:[{rel:"stylesheet",href:"css/new-skin/new-skin.css"},{rel:"stylesheet",href:"css/demos/demo-3-colors.css"},{rel:"stylesheet",href:"css/new-skin/classic-skin.css"}]}},data:function(){return{skills:[{name:"WordPress",value:90},{name:"PHP / MYSQL",value:75},{name:"Angular / JavaScript",value:85},{name:"HTML / CSS",value:95}],animationText:["Back-end Developer","Front-end Developer","Freelancer","Programmer"]}},components:{Layout:c(287).a,Header:m.a,TypingAnimation:d.a,ActiveSection:n.a,Contact:o.a,Blogs:l.a,WorkIsotope:C.a,SkillProgress:v.a,Testimonials:M.a,LanguagesSkills:r.a}},j=c(44),component=Object(j.a)(N,(function(){var t=this,e=t._self._c;return e("Layout",{attrs:{background:"gradient","no-sidebar":!0}},[e("Header",{attrs:{"no-sidebar":!0,arr:t.animationText,name:"Taylor Wills"}}),t._v(" "),e("div",{staticClass:"card-started",attrs:{id:"home-card"}},[e("div",{staticClass:"profile no-photo"},[e("div",{staticClass:"slide",staticStyle:{"background-image":"url(https://i.ibb.co/D70XhcX/087-BE419-9-FC6-442-C-B9-BA-40-DBEBC9-CB0-A-1-201-a.jpg)"}}),t._v(" "),e("div",{staticClass:"title"},[t._v("Taylor Wills")]),t._v(" "),e("TypingAnimation",{attrs:{arr:t.animationText}}),t._v(" "),e("div",{staticClass:"social"},[e("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/in/taylorawills/"}},[e("span",{staticClass:"fa fa-linkedin",attrs:{id:"linkedin-icon"}})]),t._v(" "),e("a",{attrs:{target:"_blank",href:"https://gitlab.com/taylorwills"}},[e("span",{staticClass:"fa fa-gitlab"})]),t._v(" "),e("a",{attrs:{target:"_blank",href:"https://github.com/taylorwills"}},[e("span",{staticClass:"fa fa-github"})]),t._v(" "),e("a",{attrs:{target:"_blank",href:"https://www.instagram.com/taylorawills/"}},[e("span",{staticClass:"fa fa-instagram"})])]),t._v(" "),e("div",{staticClass:"lnks"},[e("a",{staticClass:"lnk",attrs:{href:"/TaylorWills_Resume.pdf",download:"",target:"_blank"}},[e("span",{staticClass:"text"},[t._v("Download Resume")]),t._v(" "),e("span",{staticClass:"ion ion-android-download"})])])],1)]),t._v(" "),e("ActiveSection",{attrs:{sectionName:"about"}},[e("div",{staticClass:"content about"},[e("div",{staticClass:"title"},[t._v("About Me")]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col col-d-6 col-t-6 col-m-12 border-line-v"},[e("div",{staticClass:"text-box"},[e("p",[e("strong",[t._v("Hi! I’m Taylor Wills.")]),t._v("\n                I'm a motivated software engineer well-versed in several programming\n                languages and frameworks. Among these are Python, Java, Javascript,\n                ReactJS, Django, and FastAPI. Through hands-on involvement in various\n                projects, I have developed a profound grasp of agile methodologies and\n                full-stack development. I possess a strong enthusiasm for problem solving,\n                debugging, and mastering new technologies.\n                "),e("br"),t._v("\n                Currently, I am in search of an entry-level/junior software engineer\n                position, aiming to apply my expertise and pursue continuous growth. I am\n                open to new opportunities and enthusiastic about forging connections within the field.\n                Please don't hesitate to get in touch!\n              ")])])]),t._v(" "),e("div",{staticClass:"col col-d-6 col-t-6 col-m-12 border-line-v"},[e("div",{staticClass:"info-list"},[e("ul",[e("li",[e("strong",[t._v("Residence . . . . .")]),t._v(" Arlington, TX")]),t._v(" "),e("li",[e("strong",[t._v("Freelance . . . . .")]),t._v(" Available")])])])]),t._v(" "),e("div",{staticClass:"clear"})])]),t._v(" "),e("div",{staticClass:"content services"},[e("div",{staticClass:"title"},[t._v("SOME TECHNOLOGIES I'VE WORKED WITH")]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"col service-item"},[e("img",{attrs:{src:c(297)}})]),t._v(" "),e("div",{staticClass:"col service-item"},[e("img",{attrs:{src:c(298)}})]),t._v(" "),e("div",{staticClass:"col service-item"},[e("img",{attrs:{src:c(299)}})]),t._v(" "),e("div",{staticClass:"col service-item"},[e("img",{attrs:{src:c(300)}})]),t._v(" "),e("div",{staticClass:"col service-item"},[e("img",{attrs:{src:c(301)}})]),t._v(" "),e("div",{staticClass:"col service-item"},[e("img",{attrs:{src:c(302)}})]),t._v(" "),e("div",{staticClass:"col service-item"},[e("img",{attrs:{src:c(303)}})]),t._v(" "),e("div",{staticClass:"col service-item"},[e("img",{attrs:{src:c(304)}})]),t._v(" "),e("div",{staticClass:"col service-item"},[e("img",{attrs:{src:c(305)}})]),t._v(" "),e("div",{staticClass:"col service-item"},[e("img",{attrs:{src:c(306)}})]),t._v(" "),e("div",{staticClass:"col service-item"},[e("img",{attrs:{src:c(307)}})]),t._v(" "),e("div",{staticClass:"col service-item"},[e("img",{attrs:{src:c(308)}})]),t._v(" "),e("div",{staticClass:"col service-item"},[e("img",{attrs:{src:c(309)}})]),t._v(" "),e("div",{staticClass:"col service-item"},[e("img",{attrs:{src:c(310)}})]),t._v(" "),e("div",{staticClass:"col service-item"},[e("img",{attrs:{src:c(311)}})]),t._v(" "),e("div",{staticClass:"col service-item"},[e("img",{attrs:{src:c(312)}})])])]),t._v(" "),e("div",{staticClass:"clear"})]),t._v(" "),e("div",{staticClass:"content fuct"},[e("div",{staticClass:"title"},[t._v("Fun Facts")]),t._v(" "),e("div",{staticClass:"row fuct-items"},[e("div",{staticClass:"col col-d-3 col-t-3 col-m-6 border-line-v"},[e("div",{staticClass:"fuct-item"},[e("div",{staticClass:"icon"},[e("span",{staticClass:"fa fa-code"})]),t._v(" "),e("div",{staticClass:"name"},[t._v("6 Languages learned and counting")])])]),t._v(" "),e("div",{staticClass:"col col-d-3 col-t-3 col-m-6 border-line-v"},[e("div",{staticClass:"fuct-item"},[e("div",{staticClass:"icon"},[e("span",{staticClass:"fa fa-plane"})]),t._v(" "),e("div",{staticClass:"name"},[t._v("Over 100 pilot hours")])])]),t._v(" "),e("div",{staticClass:"col col-d-3 col-t-3 col-m-6 border-line-v"},[e("div",{staticClass:"fuct-item"},[e("div",{staticClass:"icon"},[e("span",{staticClass:"fa fa-diamond"})]),t._v(" "),e("div",{staticClass:"name"},[t._v("10 Stained-glass pieces created")])])]),t._v(" "),e("div",{staticClass:"col col-d-3 col-t-3 col-m-6 border-line-v"},[e("div",{staticClass:"fuct-item"},[e("div",{staticClass:"icon"},[e("span",{staticClass:"fa fa-flag"})]),t._v(" "),e("div",{staticClass:"name"},[t._v("10 Countries Visited")])])]),t._v(" "),e("div",{staticClass:"clear"})])])]),t._v(" "),e("ActiveSection",{attrs:{sectionName:"works"}},[e("WorkIsotope")],1),t._v(" "),e("Contact")],1)}),[],!1,null,null,null);e.default=component.exports}}]);