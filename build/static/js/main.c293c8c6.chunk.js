(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,a){},53:function(e,t,a){e.exports=a(63)},63:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(39),l=a.n(r),o=(a(38),a(7)),u=a(42),s=a.n(u),m=a(65);var i=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),u=Object(o.a)(l,2),i=u[0],b=u[1],d=Object(n.useState)(""),E=Object(o.a)(d,2),p=E[0],v=E[1],f=Object(n.useState)(0),h=Object(o.a)(f,2),g=h[0],w=h[1],N=function(){var e=s()();r(e);for(var t=Math.max(Math.floor(Math.random()*(e.length-3))+1,1),a="",n=0;n<e.length;n++)a+=n<t?" _ ":e[n];b(a)};return c.a.createElement("div",{className:"main_div"},c.a.createElement("div",{className:"content-div"},c.a.createElement("h1",null,"Guess the Word"),c.a.createElement("p",null,"Score: ",g),c.a.createElement("p",{className:"pulsate"},i),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a===p?(m.a.success("You got it!"),w(g+1),N()):(m.a.error('Sorry, incorrect guess. The correct word was "'.concat(a,'"')),N()),v("")}},c.a.createElement("div",{className:"guesser"},c.a.createElement("div",{className:"input-submit-container"},c.a.createElement("input",{type:"text",className:"input",value:p,onChange:function(e){v(e.target.value)},placeholder:"Enter your guess"}),c.a.createElement("br",null),c.a.createElement("button",{className:"button",type:"submit",disabled:""===a},"Submit")))),c.a.createElement("br",null),c.a.createElement("div",null,c.a.createElement("button",{className:"button",onClick:N},"Generate a New Word"))))};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i,null)))}},[[53,2,1]]]);
//# sourceMappingURL=main.c293c8c6.chunk.js.map