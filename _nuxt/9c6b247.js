(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{284:function(t,e,l){"use strict";l(45);var c=l(283),v=l(282),n={name:"Header",data:function(){return{navFunction:v.a}},props:{noSidebar:{type:Boolean},noTypingAnimation:{type:Boolean},arr:{type:Array},name:{type:String,default:"Taylor Wills | Full Stack Engineer"},menus:{type:[Object,Array],default:function(){return[{name:"About",href:"about",icon:"icon ion-person"},{name:"Projects",href:"works",icon:"icon ion-paintbrush"},{name:"Contact",href:"contacts",icon:"icon ion-at"}]}}},components:{TypingAnimation:c.a}},o=l(44),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("div",{staticClass:"profile"},[e("div",{staticClass:"title"},[t._v(t._s(t.name))]),t._v(" "),t.noTypingAnimation?e("div",{staticClass:"subtitle"},[t._v(t._s(t.arr))]):e("TypingAnimation",{attrs:{arr:t.arr}})],1),t._v(" "),e("div",{staticClass:"top-menu"},[e("ul",t._l(t.menus,(function(menu){return e("li",{key:menu.name,class:t.navFunction.activeNav(menu.href)},[e("a",{attrs:{href:"#"+menu.href},on:{click:function(e){return t.navFunction.activeSection(menu.href)}}},[e("span",{class:menu.icon}),t._v(" "),e("span",{staticClass:"link"},[t._v(t._s(menu.name))])])])})),0)])])}),[],!1,null,null,null);e.a=component.exports},336:function(t,e,l){"use strict";l.r(e);var c=l(285),v=l(288),n=l(289),o=l(290),r=l(291),d=l(283),_=l(292),C=l(284),m=l(287),f=l(282),h={name:"index-new",head:function(){return{link:[{rel:"stylesheet",href:"css/new-skin/new-skin.css"},{rel:"stylesheet",href:"css/demos/demo-1-colors.css"}]}},data:function(){return{navFunction:f.a,skills:[{name:"WordPress",value:90},{name:"PHP / MYSQL",value:75},{name:"Angular / JavaScript",value:85},{name:"HTML / CSS",value:95}]}},components:{Layout:m.a,Header:C.a,TypingAnimation:d.a,ActiveSection:c.a,Contact:n.a,Blogs:v.a,WorkIsotope:_.a,SkillProgress:o.a,Testimonials:r.a}},w=l(44),component=Object(w.a)(h,(function(){var t=this,e=t._self._c;return e("Layout",{attrs:{background:"gradient","no-sidebar":!0}},[e("Header",{attrs:{"no-sidebar":!0}}),t._v(" "),e("div",{staticClass:"card-started",attrs:{id:"home-card"}},[e("div",{staticClass:"profile no-photo"},[e("div",{staticClass:"slide",staticStyle:{"background-image":"url(images/man5_big.jpg)"}}),t._v(" "),e("div",{staticClass:"title"},[t._v("Ryan Adlard")]),t._v(" "),e("TypingAnimation"),t._v(" "),e("div",{staticClass:"social"},[e("a",{attrs:{target:"_blank",href:"https://dribbble.com/"}},[e("span",{staticClass:"fa fa-dribbble"})]),t._v(" "),e("a",{attrs:{target:"_blank",href:"https://twitter.com/"}},[e("span",{staticClass:"fa fa-twitter"})]),t._v(" "),e("a",{attrs:{target:"_blank",href:"https://github.com/"}},[e("span",{staticClass:"fa fa-github"})]),t._v(" "),e("a",{attrs:{target:"_blank",href:"https://www.spotify.com/"}},[e("span",{staticClass:"fa fa-spotify"})]),t._v(" "),e("a",{attrs:{target:"_blank",href:"https://stackoverflow.com/"}},[e("span",{staticClass:"fa fa-stack-overflow"})])]),t._v(" "),e("div",{staticClass:"lnks"},[e("a",{staticClass:"lnk",attrs:{href:"#"}},[e("span",{staticClass:"text"},[t._v("Download CV")]),t._v(" "),e("span",{staticClass:"ion ion-archive"})]),t._v(" "),e("a",{staticClass:"lnk discover",attrs:{href:"#"},on:{click:function(e){return t.navFunction.activeSection("contacts")}}},[e("span",{staticClass:"text"},[t._v("Contact Me")]),t._v(" "),e("span",{staticClass:"arrow"})])])],1)]),t._v(" "),e("ActiveSection",{attrs:{sectionName:"about"}},[e("div",{staticClass:"content about"},[e("div",{staticClass:"title"},[t._v("About Me")]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col col-d-6 col-t-6 col-m-12 border-line-v"},[e("div",{staticClass:"text-box"},[e("p",[t._v("\n                I am Ryan Adlard, web designer from USA, California. I have rich\n                experience in web site design and building and customization,\n                also I am good at wordpress. I love to talk with you about our\n                unique.\n              ")])])]),t._v(" "),e("div",{staticClass:"col col-d-6 col-t-6 col-m-12 border-line-v"},[e("div",{staticClass:"info-list"},[e("ul",[e("li",[e("strong",[t._v("Age . . . . .")]),t._v(" 24")]),t._v(" "),e("li",[e("strong",[t._v("Residence . . . . .")]),t._v(" USA")]),t._v(" "),e("li",[e("strong",[t._v("Freelance . . . . .")]),t._v(" Available")]),t._v(" "),e("li",[e("strong",[t._v("Address . . . . .")]),t._v(" California, USA")])])])]),t._v(" "),e("div",{staticClass:"clear"})])]),t._v(" "),e("div",{staticClass:"content services"},[e("div",{staticClass:"title"},[t._v("My Services")]),t._v(" "),e("div",{staticClass:"row service-items border-line-v"},[e("div",{staticClass:"col col-d-6 col-t-6 col-m-12 border-line-h"},[e("div",{staticClass:"service-item"},[e("div",{staticClass:"icon"},[e("span",{staticClass:"fa fa-code"})]),t._v(" "),e("div",{staticClass:"name"},[e("span",[t._v(" Web Development ")])]),t._v(" "),e("div",{staticClass:"desc"},[e("div",[e("p",[t._v("\n                    Modern and mobile-ready website that will help you reach all\n                    of your marketing.\n                  ")])])])])]),t._v(" "),e("div",{staticClass:"col col-d-6 col-t-6 col-m-12 border-line-h"},[e("div",{staticClass:"service-item"},[e("div",{staticClass:"icon"},[e("span",{staticClass:"fa fa-music"})]),t._v(" "),e("div",{staticClass:"name"},[e("span",[t._v(" Music Writing ")])]),t._v(" "),e("div",{staticClass:"desc"},[e("div",[e("p",[t._v("\n                    Music copying, writing, creating, transcription, arranging\n                    and composition services.\n                  ")])])])])]),t._v(" "),e("div",{staticClass:"col col-d-6 col-t-6 col-m-12 border-line-h"},[e("div",{staticClass:"service-item"},[e("div",{staticClass:"icon"},[e("span",{staticClass:"fa fa-buysellads"})]),t._v(" "),e("div",{staticClass:"name"},[e("span",[t._v(" Advetising ")])]),t._v(" "),e("div",{staticClass:"desc"},[e("div",[e("p",[t._v("\n                    Advertising services include television, radio, print, mail,\n                    and web apps.\n                  ")])])])])]),t._v(" "),e("div",{staticClass:"col col-d-6 col-t-6 col-m-12 border-line-h"},[e("div",{staticClass:"service-item"},[e("div",{staticClass:"icon"},[e("span",{staticClass:"fa fa-gamepad"})]),t._v(" "),e("div",{staticClass:"name"},[e("span",[t._v(" Game Development ")])]),t._v(" "),e("div",{staticClass:"desc"},[e("div",[e("p",[t._v("\n                    Developing memorable and unique mobile android, ios and\n                    video games.\n                  ")])])])])])]),t._v(" "),e("div",{staticClass:"clear"})]),t._v(" "),e("div",{staticClass:"content pricing"},[e("div",{staticClass:"title"},[t._v("Pricing")]),t._v(" "),e("div",{staticClass:"row pricing-items"},[e("div",{staticClass:"col col-d-6 col-t-6 col-m-12 border-line-v"},[e("div",{staticClass:"pricing-item"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fa fa-battery-half"})]),t._v(" "),e("div",{staticClass:"name"},[t._v("Basic")]),t._v(" "),e("div",{staticClass:"amount"},[e("span",{staticClass:"dollar"},[t._v("$")]),t._v(" "),e("span",{staticClass:"number"},[t._v("22")]),t._v(" "),e("span",{staticClass:"period"},[t._v("hour")])]),t._v(" "),e("div",{staticClass:"feature-list"},[e("ul",[e("li",[t._v("Web Development")]),t._v(" "),e("li",[t._v("Advetising")]),t._v(" "),e("li",[t._v("Game Development")]),t._v(" "),e("li",{staticClass:"disable"},[t._v("Music Writing")]),t._v(" "),e("li",{staticClass:"disable"},[t._v("Photography "),e("strong",[t._v("new")])])])]),t._v(" "),e("div",{staticClass:"lnks"},[e("a",{staticClass:"lnk",attrs:{href:"#"}},[e("span",{staticClass:"text"},[t._v("Buy Basic")])])])])]),t._v(" "),e("div",{staticClass:"col col-d-6 col-t-6 col-m-12 border-line-v"},[e("div",{staticClass:"pricing-item"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fa fa-battery-full"})]),t._v(" "),e("div",{staticClass:"name"},[t._v("Pro")]),t._v(" "),e("div",{staticClass:"amount"},[e("span",{staticClass:"dollar"},[t._v("$")]),t._v(" "),e("span",{staticClass:"number"},[t._v("48")]),t._v(" "),e("span",{staticClass:"period"},[t._v("hour")])]),t._v(" "),e("div",{staticClass:"feature-list"},[e("ul",[e("li",[t._v("Web Development")]),t._v(" "),e("li",[t._v("Advetising")]),t._v(" "),e("li",[t._v("Game Development")]),t._v(" "),e("li",[t._v("Music Writing")]),t._v(" "),e("li",[t._v("Photography "),e("strong",[t._v("new")])])])]),t._v(" "),e("div",{staticClass:"lnks"},[e("a",{staticClass:"lnk",attrs:{href:"#"}},[e("span",{staticClass:"text"},[t._v("Buy Pro")])])])])]),t._v(" "),e("div",{staticClass:"clear"})])]),t._v(" "),e("div",{staticClass:"content fuct"},[e("div",{staticClass:"title"},[t._v("Fun Fact")]),t._v(" "),e("div",{staticClass:"row fuct-items"},[e("div",{staticClass:"col col-d-3 col-t-3 col-m-6 border-line-v"},[e("div",{staticClass:"fuct-item"},[e("div",{staticClass:"icon"},[e("span",{staticClass:"fa fa-music"})]),t._v(" "),e("div",{staticClass:"name"},[t._v("80 Albumes Listened")])])]),t._v(" "),e("div",{staticClass:"col col-d-3 col-t-3 col-m-6 border-line-v"},[e("div",{staticClass:"fuct-item"},[e("div",{staticClass:"icon"},[e("span",{staticClass:"fa fa-trophy"})]),t._v(" "),e("div",{staticClass:"name"},[t._v("15 Awards Won")])])]),t._v(" "),e("div",{staticClass:"col col-d-3 col-t-3 col-m-6 border-line-v"},[e("div",{staticClass:"fuct-item"},[e("div",{staticClass:"icon"},[e("span",{staticClass:"fa fa-coffee"})]),t._v(" "),e("div",{staticClass:"name"},[t._v("1 000 Cups of coffee")])])]),t._v(" "),e("div",{staticClass:"col col-d-3 col-t-3 col-m-6 border-line-v"},[e("div",{staticClass:"fuct-item"},[e("div",{staticClass:"icon"},[e("span",{staticClass:"fa fa-flag"})]),t._v(" "),e("div",{staticClass:"name"},[t._v("10 Countries Visited")])])]),t._v(" "),e("div",{staticClass:"clear"})])]),t._v(" "),e("div",{staticClass:"content clients"},[e("div",{staticClass:"title"},[t._v("Clients")]),t._v(" "),e("div",{staticClass:"row client-items"},[e("div",{staticClass:"col col-d-3 col-t-3 col-m-6 border-line-v"},[e("div",{staticClass:"client-item"},[e("div",{staticClass:"image"},[e("a",{attrs:{target:"_blank",href:"https://www.google.com"}},[e("img",{attrs:{src:"images/clients/client_1.png",alt:""}})])])])]),t._v(" "),e("div",{staticClass:"col col-d-3 col-t-3 col-m-6 border-line-v"},[e("div",{staticClass:"client-item"},[e("div",{staticClass:"image"},[e("a",{attrs:{target:"_blank",href:"https://www.google.com"}},[e("img",{attrs:{src:"images/clients/client_2.png",alt:""}})])])])]),t._v(" "),e("div",{staticClass:"col col-d-3 col-t-3 col-m-6 border-line-v"},[e("div",{staticClass:"client-item"},[e("div",{staticClass:"image"},[e("a",{attrs:{target:"_blank",href:"https://www.google.com"}},[e("img",{attrs:{src:"images/clients/client_3.png",alt:""}})])])])]),t._v(" "),e("div",{staticClass:"col col-d-3 col-t-3 col-m-6 border-line-v"},[e("div",{staticClass:"client-item"},[e("div",{staticClass:"image"},[e("a",{attrs:{target:"_blank",href:"https://www.google.com"}},[e("img",{attrs:{src:"images/clients/client_4.png",alt:""}})])])])]),t._v(" "),e("div",{staticClass:"clear"})])]),t._v(" "),e("div",{staticClass:"content quote"},[e("div",{staticClass:"title"},[e("span",[t._v("Quote")])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col col-d-12 col-t-12 col-m-12 border-line-v"},[e("div",{staticClass:"revs-item"},[e("div",{staticClass:"text"},[e("div",[t._v("\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem\n                  ipsum dolor sit amet, consectetur adipiscing elit.\n                ")])]),t._v(" "),e("div",{staticClass:"user"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:"images/profile.png",alt:"Ryan Adlard"}})]),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"name"},[t._v("Ryan Adlard")]),t._v(" "),e("div",{staticClass:"company"},[t._v("Web Designer")])]),t._v(" "),e("div",{staticClass:"clear"})])])]),t._v(" "),e("div",{staticClass:"clear"})])])]),t._v(" "),e("ActiveSection",{attrs:{sectionName:"resume"}},[e("div",{staticClass:"content resume"},[e("div",{staticClass:"title"},[t._v("Resume")]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col col-d-6 col-t-6 col-m-12 border-line-v"},[e("div",{staticClass:"resume-title border-line-h"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fa fa-briefcase"})]),t._v(" "),e("div",{staticClass:"name"},[t._v("Experience")])]),t._v(" "),e("div",{staticClass:"resume-items"},[e("div",{staticClass:"resume-item border-line-h active"},[e("div",{staticClass:"date"},[t._v("2013 - Present")]),t._v(" "),e("div",{staticClass:"name"},[t._v("Art Director")]),t._v(" "),e("div",{staticClass:"company"},[t._v("Facebook Inc.")]),t._v(" "),e("p",[t._v("\n                  Collaborate with creative and development teams on the\n                  execution of ideas.\n                ")])]),t._v(" "),e("div",{staticClass:"resume-item border-line-h"},[e("div",{staticClass:"date"},[t._v("2011 - 2012")]),t._v(" "),e("div",{staticClass:"name"},[t._v("Front-end Developer")]),t._v(" "),e("div",{staticClass:"company"},[t._v("Google Inc.")]),t._v(" "),e("p",[t._v("\n                  Monitored technical aspects of the front-end delivery for\n                  several projects.\n                ")])]),t._v(" "),e("div",{staticClass:"resume-item"},[e("div",{staticClass:"date"},[t._v("2009 - 2010")]),t._v(" "),e("div",{staticClass:"name"},[t._v("Senior Developer")]),t._v(" "),e("div",{staticClass:"company"},[t._v("Abc Inc.")]),t._v(" "),e("p",[t._v("Optimize website performance using latest technology.")])])])]),t._v(" "),e("div",{staticClass:"col col-d-6 col-t-6 col-m-12 border-line-v"},[e("div",{staticClass:"resume-title border-line-h"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fa fa-university"})]),t._v(" "),e("div",{staticClass:"name"},[t._v("Education")])]),t._v(" "),e("div",{staticClass:"resume-items"},[e("div",{staticClass:"resume-item border-line-h"},[e("div",{staticClass:"date"},[t._v("2006 - 2008")]),t._v(" "),e("div",{staticClass:"name"},[t._v("Art University")]),t._v(" "),e("div",{staticClass:"company"},[t._v("New York")]),t._v(" "),e("p",[t._v("\n                  Bachelor's Degree in Computer Science ABC Technical Institute,\n                  Jefferson, Missouri\n                ")])]),t._v(" "),e("div",{staticClass:"resume-item border-line-h"},[e("div",{staticClass:"date"},[t._v("2005 - 2006")]),t._v(" "),e("div",{staticClass:"name"},[t._v("Programming Course")]),t._v(" "),e("div",{staticClass:"company"},[t._v("Paris")]),t._v(" "),e("p",[t._v("Coursework - Git, WordPress, Javascript, iOS, Android.")])]),t._v(" "),e("div",{staticClass:"resume-item"},[e("div",{staticClass:"date"},[t._v("2004 - 2005")]),t._v(" "),e("div",{staticClass:"name"},[t._v("Web Design Course")]),t._v(" "),e("div",{staticClass:"company"},[t._v("London")]),t._v(" "),e("p",[t._v("\n                  Converted Photoshop layouts to web pages using HTML, CSS, and\n                  JavaScript\n                ")])])])]),t._v(" "),e("div",{staticClass:"clear"})])]),t._v(" "),e("div",{staticClass:"content skills"},[e("div",{staticClass:"title"},[t._v("My Skills")]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col col-d-6 col-t-6 col-m-12 border-line-v"},[e("div",{staticClass:"skills-list"},[e("div",{staticClass:"skill-title border-line-h"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fa fa-paint-brush"})]),t._v(" "),e("div",{staticClass:"name"},[t._v("Design")])]),t._v(" "),e("ul",[e("li",{staticClass:"border-line-h"},[e("div",{staticClass:"name"},[t._v("Web Design")]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"percentage",staticStyle:{width:"90%"}})])]),t._v(" "),e("li",{staticClass:"border-line-h"},[e("div",{staticClass:"name"},[t._v("Write Music")]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"percentage",staticStyle:{width:"65%"}})])]),t._v(" "),e("li",{staticClass:"border-line-h"},[e("div",{staticClass:"name"},[t._v("Photoshop")]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"percentage",staticStyle:{width:"75%"}})])]),t._v(" "),e("li",[e("div",{staticClass:"name"},[t._v("Graphic Design")]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"percentage",staticStyle:{width:"85%"}})])])])])]),t._v(" "),e("div",{staticClass:"col col-d-6 col-t-6 col-m-12 border-line-v"},[e("div",{staticClass:"skills-list dotted"},[e("div",{staticClass:"skill-title border-line-h"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fa fa-flag"})]),t._v(" "),e("div",{staticClass:"name"},[t._v("Languages")])]),t._v(" "),e("ul",[e("li",{staticClass:"border-line-h"},[e("div",{staticClass:"name"},[t._v("English")]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"percentage",staticStyle:{width:"90%"}})])]),t._v(" "),e("li",{staticClass:"border-line-h"},[e("div",{staticClass:"name"},[t._v("German")]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"percentage",staticStyle:{width:"60%"}})])]),t._v(" "),e("li",{staticClass:"border-line-h"},[e("div",{staticClass:"name"},[t._v("Italian")]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"percentage",staticStyle:{width:"30%"}})])]),t._v(" "),e("li",[e("div",{staticClass:"name"},[t._v("French")]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"percentage",staticStyle:{width:"70%"}})])])])])]),t._v(" "),e("div",{staticClass:"col col-d-6 col-t-6 col-m-12 border-line-v"},[e("div",{staticClass:"skills-list circles"},[e("div",{staticClass:"skill-title border-line-h"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fa fa-code"})]),t._v(" "),e("div",{staticClass:"name"},[t._v("Coding")])]),t._v(" "),e("ul",[e("SkillProgress",{attrs:{skills:t.skills}})],1)])]),t._v(" "),e("div",{staticClass:"col col-d-6 col-t-6 col-m-12 border-line-v"},[e("div",{staticClass:"skills-list list"},[e("div",{staticClass:"skill-title border-line-h"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fa fa-list"})]),t._v(" "),e("div",{staticClass:"name"},[t._v("Knowledge")])]),t._v(" "),e("ul",[e("li",[e("div",{staticClass:"name"},[t._v("Website hosting")])]),t._v(" "),e("li",[e("div",{staticClass:"name"},[t._v("iOS and android apps")])]),t._v(" "),e("li",[e("div",{staticClass:"name"},[t._v("Create logo design")])]),t._v(" "),e("li",[e("div",{staticClass:"name"},[t._v("Design for print")])]),t._v(" "),e("li",[e("div",{staticClass:"name"},[t._v("Modern and mobile-ready")])]),t._v(" "),e("li",[e("div",{staticClass:"name"},[t._v("Advertising services include")])]),t._v(" "),e("li",[e("div",{staticClass:"name"},[t._v("Graphics and animations")])]),t._v(" "),e("li",[e("div",{staticClass:"name"},[t._v("Search engine marketing")])])])])]),t._v(" "),e("div",{staticClass:"clear"})])]),t._v(" "),e("div",{staticClass:"content testimonials"},[e("div",{staticClass:"title"},[t._v("Testimonials")]),t._v(" "),e("div",{staticClass:"row testimonials-items"},[e("div",{staticClass:"col col-d-12 col-t-12 col-m-12 border-line-v"},[e("div",{staticClass:"revs-carousel default-revs"},[e("Testimonials")],1)]),t._v(" "),e("div",{staticClass:"clear"})])])]),t._v(" "),e("ActiveSection",{attrs:{sectionName:"works"}},[e("WorkIsotope")],1),t._v(" "),e("Blogs"),t._v(" "),e("Contact")],1)}),[],!1,null,null,null);e.default=component.exports}}]);