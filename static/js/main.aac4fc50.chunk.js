(this.webpackJsonppractice=this.webpackJsonppractice||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n(2),i=n.n(c),a=n(8),r=n.n(a),d=(n(16),n(3));var u=function(t){var e=Object(c.useState)(t.edit?t.edit.newValue:""),n=Object(d.a)(e,2),i=n[0],a=n[1],r=Object(c.useRef)(null);Object(c.useEffect)((function(){r.current.focus()}));var u=function(t){a(t.target.value)};return Object(o.jsx)("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e4*Math.random()),text:i}),a("")},children:t.edit?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{type:"text",placeholder:"Update todo",value:i,className:"todo-input edit",name:"text",onChange:u,ref:r}),Object(o.jsx)("button",{className:"todo-button edit",children:"Update"})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{type:"text",placeholder:"Enter Todo",value:i,className:"todo-input",name:"text",onChange:u,ref:r}),Object(o.jsx)("button",{className:"todo-button",children:"Add"})]})})},s=n(7),l=n(9),j=n(10);var b=function(t){var e=t.todos,n=t.completeTodo,i=t.removeTodo,a=t.updateTodo,r=Object(c.useState)({id:null,value:""}),s=Object(d.a)(r,2),b=s[0],f=s[1];return b.id?Object(o.jsx)(u,{edit:b,onSubmit:function(t){a(b.id,t),f({id:null,value:""})}}):e.map((function(t,e){return Object(o.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(o.jsx)("div",{onClick:function(){return n(t.id)},children:t.text},t.id),Object(o.jsxs)("div",{className:"icons",children:[Object(o.jsx)(l.a,{onClick:function(){return i(t.id)},className:"delete-icons"}),Object(o.jsx)(j.a,{onClick:function(){return f({id:t.id,value:t.text})},className:"edit-icons"})]})]},e)}))};var f=function(){var t=Object(c.useState)([]),e=Object(d.a)(t,2),n=e[0],i=e[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"What's the plan for Today"}),Object(o.jsx)(u,{onSubmit:function(t){var e=[t].concat(Object(s.a)(n));i(e)}}),Object(o.jsx)(b,{todos:n,completetodo:function(t){var e=n.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));i(e)},removeTodo:function(t){var e=Object(s.a)(n).filter((function(e){return e.id!==t}));i(e)},updateTodo:function(t,e){i((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})};var m=function(){return Object(o.jsx)("div",{className:"to-do",children:Object(o.jsx)(f,{})})};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.aac4fc50.chunk.js.map