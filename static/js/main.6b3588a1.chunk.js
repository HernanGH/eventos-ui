(this["webpackJsonpeventos-ui"]=this["webpackJsonpeventos-ui"]||[]).push([[0],{52:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(29),i=c.n(s),r=(c(52),c(20)),o=c(8),l=c(65),j=c(64),d=c(1),b=function(){return Object(d.jsxs)(l.a,{bg:"dark",variant:"dark",children:[Object(d.jsx)(l.a.Brand,{to:"/",children:Object(d.jsx)(r.b,{to:"/",children:"EVENTOS"})}),Object(d.jsxs)(j.a,{className:"mr-auto",children:[Object(d.jsx)(j.a.Link,{to:"/",children:Object(d.jsx)(r.b,{to:"/",children:"Home"})}),Object(d.jsx)(j.a.Link,{children:Object(d.jsx)(r.b,{to:"/inscripcion",children:"Inscripcion"})}),Object(d.jsx)(j.a.Link,{children:Object(d.jsx)(r.b,{to:"/login",children:"Iniciar"})})]})]})},h=c(22),O=function(){return Object(d.jsxs)(h.a,{children:[Object(d.jsxs)(h.a.Item,{children:[Object(d.jsx)("img",{className:"d-block w-80 img-slide",src:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",alt:"First slide"}),Object(d.jsxs)(h.a.Caption,{children:[Object(d.jsx)("h3",{children:"First slide label"}),Object(d.jsx)("p",{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})]})]}),Object(d.jsxs)(h.a.Item,{children:[Object(d.jsx)("img",{className:"d-block w-80 img-slide",src:"https://images.unsplash.com/photo-1535378917042-10a22c95931a",alt:"Second slide"}),Object(d.jsxs)(h.a.Caption,{children:[Object(d.jsx)("h3",{children:"Second slide label"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),Object(d.jsxs)(h.a.Item,{children:[Object(d.jsx)("img",{className:"d-block w-80 img-slide",src:"https://images.unsplash.com/photo-1550745165-9bc0b252726f",alt:"Third slide"}),Object(d.jsxs)(h.a.Caption,{children:[Object(d.jsx)("h3",{children:"Third slide label"}),Object(d.jsx)("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]})]})},m=c(31),u=c(26),x=function(e){var t=e.products,c=Object(o.f)();console.log(t);return Object(d.jsx)("div",{className:"product-list",children:t.map((function(e){return Object(d.jsxs)(m.a,{className:"bg-dark",style:{width:"18rem"},children:[Object(d.jsx)(m.a.Img,{variant:"top",src:e.img}),Object(d.jsxs)(m.a.Body,{children:[Object(d.jsx)(m.a.Title,{className:"text-light bg-dark",children:e.title}),Object(d.jsx)(m.a.Text,{className:"text-light bg-dark",children:e.description}),Object(d.jsx)(u.a,{onClick:function(){return t=e,void c.push("/inscripcion/".concat(t.id));var t},className:"text-light bg-dark",variant:"primary",children:"Inscribirme"})]})]},e.id)}))})},p=[{id:0,title:"Evento 1",description:"Evento 1, Fecha: 14/04/2000, Lugar: asdad a342, AC, USA",img:"https://images.unsplash.com/photo-1593642532973-d31b6557fa68"},{id:1,title:"Evento 2",description:"Evento 2, Fecha: 14/04/2000, Lugar: asdad a342, AC, USA",img:"https://images.unsplash.com/photo-1593508512255-86ab42a8e620"},{id:2,title:"Evento 3",description:"Evento 3, Fecha: 14/04/2000, Lugar: asdad a342, AC, USA",img:"https://images.unsplash.com/photo-1624465991603-ea7793b4fc7d"}],g=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{}),Object(d.jsx)("div",{className:"list",children:Object(d.jsx)(x,{products:p})})]})},v=c(16),f=c(30),C=c(11),E="http://localhost/3000",N="".concat(E,"/inscription"),y="".concat(E,"/login"),k=c(36),I=function(e){var t=e.notification,c=e.onClose;return Object(d.jsx)("div",{"aria-live":"polite","aria-atomic":"true",style:{position:"relative",minHeight:"100px"},children:Object(d.jsxs)(k.a,{delay:3e3,autohide:!0,show:t,onClose:c,style:{position:"absolute",top:0,right:0},children:[Object(d.jsxs)(k.a.Header,{children:[Object(d.jsx)("strong",{className:"mr-auto",children:"Eventos"}),Object(d.jsx)("small",{children:"just now"})]}),Object(d.jsx)(k.a.Body,{children:t})]})})},S=function(){var e=Object(o.g)().id,t=Object(a.useState)(""),c=Object(f.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)({id:e||0}),r=Object(f.a)(i,2),l=r[0],j=r[1];return Object(a.useEffect)((function(){j({id:e})}),[e]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"form",children:Object(d.jsxs)(C.a,{children:[Object(d.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(d.jsx)(C.a.Label,{className:"text-light bg-dark",children:"Email address: "}),Object(d.jsx)(C.a.Control,{onChange:function(e){var t=e.target;j(Object(v.a)(Object(v.a)({},l),{},{email:t.value}))},type:"email",placeholder:"Enter email"}),Object(d.jsx)(C.a.Text,{className:"text-muted text-light bg-dark",children:"We'll never share your email with anyone else."})]}),Object(d.jsxs)(C.a.Group,{controlId:"formGridState",children:[Object(d.jsx)(C.a.Label,{children:"Evento: "}),Object(d.jsxs)(C.a.Control,{as:"select",defaultValue:l.id,onChange:function(e){var t=e.target;j(Object(v.a)(Object(v.a)({},l),{},{id:t.value}))},children:[Object(d.jsx)("option",{value:"0",label:"Evento 1",children:"Evento 1"}),Object(d.jsx)("option",{value:"1",label:"Evento 2",children:"Evento 2"}),Object(d.jsx)("option",{value:"2",label:"Evento 3",children:"Evento 3"})]})]}),Object(d.jsx)(u.a,{onClick:function(e){e.preventDefault(),fetch(N,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then((function(e){console.log(e)})).catch((function(e){console.error(e),s("Error interno, por favor intente mas tarde")}))},variant:"primary",type:"submit",children:"Inscribirme"})]})}),n&&Object(d.jsx)(I,{notification:n,onClose:function(){s("")}})]})},w=function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)({}),i=Object(f.a)(s,2),r=i[0],o=i[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"form",children:Object(d.jsxs)(C.a,{children:[Object(d.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(d.jsx)(C.a.Label,{className:"text-light bg-dark",children:"Email address: "}),Object(d.jsx)(C.a.Control,{onChange:function(e){var t=e.target;o(Object(v.a)(Object(v.a)({},r),{},{email:t.value}))},type:"email",placeholder:"Ingrese email"})]}),Object(d.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(d.jsx)(C.a.Label,{className:"text-light bg-dark",children:"Password"}),Object(d.jsx)(C.a.Control,{onChange:function(e){var t=e.target;o(Object(v.a)(Object(v.a)({},r),{},{password:t.value}))},type:"password",placeholder:"Contrase\xf1a"})]}),Object(d.jsx)(u.a,{onClick:function(e){e.preventDefault(),fetch(y,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(e){console.log(e)})).catch((function(e){console.error(e),n("Error interno, por favor intente mas tarde")}))},variant:"primary",type:"submit",children:"Iniciar"})]})}),c&&Object(d.jsx)(I,{notification:c,onClose:function(){n("")}})]})},F=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(b,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(g,{})}),Object(d.jsx)(o.a,{path:"/inscripcion/:id?",children:Object(d.jsx)(S,{})}),Object(d.jsx)(o.a,{path:"/login",children:Object(d.jsx)(w,{})})]})]})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,66)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};c(60);i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root")),L()}},[[61,1,2]]]);
//# sourceMappingURL=main.6b3588a1.chunk.js.map