(this.webpackJsonpfrontlogin=this.webpackJsonpfrontlogin||[]).push([[0],{40:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(20),s=n.n(a),j=n(12),o=n(11),i=n(6),d=n(7),b=[{id:"a",password:"123",name:"Kim"},{id:"b",password:"456",name:"Lee"},{id:"abc",password:"789",name:"Park"}];var l=n(1);var u=function(e){var t=e.authenticated,n=e.Component,r=e.render;return console.log(r),Object(l.jsx)(d.b,{render:function(e){return t?r?r(e):Object(l.jsx)(n,Object(j.a)({},e)):Object(l.jsx)(d.a,{to:{pathname:"/login",state:{from:e.location}}})}})};var O,h,x,p,f=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Home"}),Object(l.jsx)("p",{children:"\uba54\uc778 \ud654\uba74"})]})},m=n(13),g=n(14),v=g.a.li(O||(O=Object(m.a)(["\ndisplay: flex;\nmargin: 10px;\n"]))),w=g.a.div(h||(h=Object(m.a)(["\njustfy-contents: center;\n"]))),y=g.a.div(x||(x=Object(m.a)(["\ndisplay: flex;\nflex-direction: column;\nborder: 1px solid black;\nwidth: 20%;\n"]))),k=g.a.span(p||(p=Object(m.a)(["\nmargin: 0px 10px;\n"])));var L=function(e){var t=e.user,n=t.id,r=t.password,c=t.name;return Object(l.jsxs)(w,{children:[Object(l.jsx)("h1",{children:"Profile"}),Object(l.jsxs)(y,{children:[Object(l.jsxs)(v,{children:["ID: ",Object(l.jsx)(k,{}),n]}),Object(l.jsxs)(v,{children:["Password: ",Object(l.jsx)(k,{}),r]}),Object(l.jsxs)(v,{children:["Name:  ",Object(l.jsx)(k,{}),c]})]})]})};var C=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Not Found"}),Object(l.jsx)("p",{children:"\ud398\uc774\uc9c0\ub97c \ubabb \ucc3e\uc558\uc2b5\ub2c8\ub2e4"})]})};var P=function(e){var t=e.authenticated,n=e.login,c=e.location,a=Object(r.useState)(""),s=Object(o.a)(a,2),j=s[0],i=s[1],b=Object(r.useState)(""),u=Object(o.a)(b,2),O=u[0],h=u[1],x=(c.state||{from:{pathname:"/"}}).from;return console.log(x),t?Object(l.jsx)(d.a,{to:x}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Login"}),Object(l.jsx)("input",{value:j,onChange:function(e){var t=e.target.value;return i(t)},type:"text",placeholder:"id"}),Object(l.jsx)("input",{value:O,onChange:function(e){var t=e.target.value;return h(t)},type:"password",placeholder:"password"}),Object(l.jsx)("button",{onClick:function(){try{n({id:j,password:O})}catch(e){alert("\ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4"),i(""),h("")}},children:"Login"}),Object(l.jsx)("h2",{children:"\ub4f1\ub85d\ub41c \uc544\uc774\ub514\uc640 \ube44\ubc00\ubc88\ud638"}),Object(l.jsx)("h4",{children:"id: 'a', password: '123', name: 'Kim' "}),Object(l.jsx)("h4",{children:" id: 'b', password: '456', name: 'Lee'  "}),Object(l.jsx)("h4",{children:" id: 'abc', password: '789', name: 'Park' "})]})};var F=Object(d.g)((function(e){var t=e.logout,n=e.history;return Object(l.jsx)("button",{onClick:function(){t(),n.push("/")},children:"Logout"})}));var S=function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1],a=null!=n,s=function(e){var t=e.id,n=e.password;return c(function(e){var t=e.id,n=e.password,r=b.find((function(e){return e.id===t&&e.password===n}));if(void 0===r)throw new Error;return r}({id:t,password:n}))};return Object(l.jsxs)(i.a,{children:[Object(l.jsxs)("header",{children:[Object(l.jsx)(i.b,{to:"/",children:Object(l.jsx)("button",{children:"Home"})}),Object(l.jsx)(i.b,{to:"/profile",children:Object(l.jsx)("button",{children:"Profile"})}),a?Object(l.jsx)(F,{logout:function(){return c(null)}}):Object(l.jsx)(i.b,{to:"/login",children:Object(l.jsx)("button",{children:"Login"})})]}),Object(l.jsx)("main",{children:Object(l.jsxs)(d.d,{children:[Object(l.jsx)(d.b,{exact:!0,path:"/",component:f}),Object(l.jsx)(d.b,{path:"/login",render:function(e){return Object(l.jsx)(P,Object(j.a)({authenticated:a,login:s},e))}}),Object(l.jsx)(u,{authenticated:a,path:"/profile",render:function(e){return Object(l.jsx)(L,Object(j.a)({user:n},e))}}),Object(l.jsx)(d.b,{component:C})]})})]})};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.1501e200.chunk.js.map