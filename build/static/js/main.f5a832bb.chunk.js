(this.webpackJsonpbasic=this.webpackJsonpbasic||[]).push([[0],{24:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(2),c=n.n(s),i=n(13),r=n.n(i),o=(n(24),n(14)),l=n(15),u=n(16),d=n(18),h=n(17),b=n(4),j=n.n(b),p=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={details:[],user:"",detail:""},t.handleInput=function(e){t.setState(Object(o.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),j.a.post("http://localhost:8000/wel/",{name:t.state.user,detail:t.state.quote}).then((function(e){t.setState({user:"",quote:""})})).catch((function(t){}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t,e=this;j.a.get("http://localhost:8000/wel/").then((function(n){t=n.data,e.setState({details:t})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"container jumbotron ",children:[Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("div",{className:"input-group mb-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsxs)("span",{className:"input-group-text",id:"basic-addon1",children:[" "," Author"," "]})}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Name of the Poet/Author","aria-label":"Username","aria-describedby":"basic-addon1",value:this.state.user,name:"user",onChange:this.handleInput})]}),Object(a.jsxs)("div",{className:"input-group mb-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text",children:"Your Quote"})}),Object(a.jsx)("textarea",{className:"form-control ","aria-label":"With textarea",placeholder:"Tell us what you think of .....",value:this.state.quote,name:"quote",onChange:this.handleInput})]}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary mb-5",children:"Submit"})]}),this.state.details.map((function(t,e){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{children:[t.detail," "]}),Object(a.jsxs)("footer",{children:[" -- by ",t.name," "]})]})})},e)}))]})})}}]),n}(c.a.Component),m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),s(t),c(t),i(t)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),m()}},[[43,1,2]]]);
//# sourceMappingURL=main.f5a832bb.chunk.js.map