(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{38:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(13),s=c.n(a),o=c(0);var l=function(){return Object(o.jsxs)("header",{className:"jumbotron",children:[Object(o.jsx)("h1",{className:"display-3",children:"Employee Directory"}),Object(o.jsx)("h3",{className:"lead",children:"Quickly navigate through your employees!"})]})},i=c(3),j=c(14),d=c.n(j),u=function(){return new Promise((function(e,t){d.a.get("https://randomuser.me/api/?results=50").then((function(t){var c=t.data.results.map((function(e){return{key:e.login.uuid,image:e.picture.large,first:e.name.first,last:e.name.last,age:e.dob.age,city:e.location.city,state:e.location.state}}));e(c)})).catch((function(e){return t(alert(e))}))}))},f=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1];Object(r.useEffect)((function(){c&&u(c).then((function(e){console.log(e),n(e)}))}));return Object(o.jsx)("form",{className:"search",children:Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{className:"searchLabel",htmlFor:"language",children:"Search Employee:"}),Object(o.jsx)("input",{value:c,onChange:function(){console.log(c)},name:"employee",list:"employeeList",type:"text",className:"form-control",placeholder:"Search by First or Last name!",id:"employee"})]})})};var b=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],s=n.a.useReducer((function(){return{}}),{})[1];function l(){var e=c.sort((function(e,t){return e.first<t.first?-1:e.first>t.first?1:0})),t=prompt('Type "a" for Ascending or "d" for Descending');if(null!==t)switch("a"!==t&&"d"!==t&&(alert("Please enter a valid character!"),l()),t.toLowerCase()){case"d":a(e.reverse()),s();break;default:a(e),s()}}Object(r.useEffect)((function(){u().then((function(e){console.log(e),a(e)}))}),[]),Object(r.useEffect)((function(){console.log("table useEffect: ",c)}),[c]);var j=function e(){var t=c.sort((function(e,t){return e.last<t.last?-1:e.last>t.last?1:0})),r=prompt('Type "a" for Ascending or "d" for Descending');if(null!==r)switch("a"!==r&&"d"!==r&&(alert("Please enter a valid character!"),e()),r.toLowerCase()){case"d":a(t.reverse()),s();break;default:a(t),s()}},d=function e(){var t=c.sort((function(e,t){return e.age<t.age?-1:e.age>t.age?1:0})),r=prompt('Type "a" for Ascending or "d" for Descending');if(null!==r)switch("a"!==r&&"d"!==r&&(alert("Please enter a valid character!"),e()),r.toLowerCase()){case"d":a(t.reverse()),s();break;default:a(t),s()}};return Object(o.jsxs)("table",{className:"table table-hover",children:[Object(o.jsxs)("thead",{children:[Object(o.jsx)("header",{className:"tableHead",children:"Employees"}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Employee Photo"}),Object(o.jsxs)("th",{children:["First Name ",Object(o.jsx)("button",{className:"downArrow fa fa-angle-down",onClick:function(){return l()}})]}),Object(o.jsxs)("th",{children:["Last Name ",Object(o.jsx)("button",{className:"downArrow fa fa-angle-down",onClick:function(){return j()}})]}),Object(o.jsxs)("th",{children:["Age ",Object(o.jsx)("button",{className:"downArrow fa fa-angle-down",onClick:function(){return d()}})]}),Object(o.jsx)("th",{children:"City"}),Object(o.jsx)("th",{children:"State"})]})]}),Object(o.jsx)("tbody",{children:c.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("img",{src:e.image,alt:"Not Provided"})}),Object(o.jsx)("td",{children:e.first}),Object(o.jsx)("td",{children:e.last}),Object(o.jsx)("td",{children:e.age}),Object(o.jsx)("td",{children:e.city}),Object(o.jsx)("td",{children:e.state})]},e.key)}))})]})},h=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{}),Object(o.jsx)(f,{}),Object(o.jsx)(b,{})]})};var m=function(){return Object(o.jsxs)(h,{children:[Object(o.jsx)(l,{}),Object(o.jsx)(f,{}),Object(o.jsx)(b,{})]})};c(38),c(39);s.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.2a5ab558.chunk.js.map