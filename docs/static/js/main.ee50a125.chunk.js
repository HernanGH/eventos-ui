(this["webpackJsonpeventos-ui"]=this["webpackJsonpeventos-ui"]||[]).push([[0],{54:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(29),i=c.n(n),r=(c(54),c(20)),l=c(8),o=c(67),j=c(66),d=c(1),b=function(){return Object(d.jsxs)(o.a,{bg:"dark",variant:"dark",children:[Object(d.jsx)(o.a.Brand,{to:"/",children:Object(d.jsx)(r.b,{to:"/",children:"EVENTOS"})}),Object(d.jsxs)(j.a,{className:"mr-auto",children:[Object(d.jsx)(j.a.Link,{to:"/",children:Object(d.jsx)(r.b,{to:"/",children:"Home"})}),Object(d.jsx)(j.a.Link,{children:Object(d.jsx)(r.b,{to:"/inscripcion",children:"Inscripcion"})}),Object(d.jsx)(j.a.Link,{children:Object(d.jsx)(r.b,{to:"/login",children:"Iniciar"})})]})]})},h=c(65),O=c(47),m=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"footer text-light",children:Object(d.jsx)(h.a,{className:"justify-content-md-center",children:Object(d.jsx)(O.a,{md:"auto",children:Object(d.jsx)("h2",{children:"Eventos de Tecnologia"})})})}),Object(d.jsx)("div",{children:Object(d.jsx)(h.a,{className:"justify-content-md-center",children:Object(d.jsxs)(O.a,{md:"auto",className:"text-light bg-dark",children:["\xa9 ",(new Date).getFullYear()," Copyright: ACAMICA"]})})})]})},u=c(22),x=function(){return Object(d.jsxs)(u.a,{children:[Object(d.jsxs)(u.a.Item,{children:[Object(d.jsx)("img",{className:"d-block w-80 img-slide",src:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",alt:"First slide"}),Object(d.jsxs)(u.a.Caption,{children:[Object(d.jsx)("h3",{children:"First slide label"}),Object(d.jsx)("p",{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})]})]}),Object(d.jsxs)(u.a.Item,{children:[Object(d.jsx)("img",{className:"d-block w-80 img-slide",src:"https://images.unsplash.com/photo-1535378917042-10a22c95931a",alt:"Second slide"}),Object(d.jsxs)(u.a.Caption,{children:[Object(d.jsx)("h3",{children:"Second slide label"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),Object(d.jsxs)(u.a.Item,{children:[Object(d.jsx)("img",{className:"d-block w-80 img-slide",src:"https://images.unsplash.com/photo-1550745165-9bc0b252726f",alt:"Third slide"}),Object(d.jsxs)(u.a.Caption,{children:[Object(d.jsx)("h3",{children:"Third slide label"}),Object(d.jsx)("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]})]})},p=c(31),g=c(26),v=function(e){var t=e.products,c=Object(l.f)();console.log(t);return Object(d.jsx)("div",{className:"product-list",children:t.map((function(e){return Object(d.jsxs)(p.a,{className:"bg-dark",style:{width:"18rem"},children:[Object(d.jsx)(p.a.Img,{variant:"top",src:e.img}),Object(d.jsxs)(p.a.Body,{children:[Object(d.jsx)(p.a.Title,{className:"text-light bg-dark",children:e.title}),Object(d.jsx)(p.a.Text,{className:"text-light bg-dark",children:e.description}),Object(d.jsx)(g.a,{onClick:function(){return t=e,void c.push("/inscripcion/".concat(t.id));var t},className:"text-light bg-dark",variant:"primary",children:"Inscribirme"})]})]},e.id)}))})},f=[{id:0,title:"Evento 1",description:"Evento 1, Fecha: 14/04/2000, Lugar: asdad a342, AC, USA",img:"https://images.unsplash.com/photo-1593642532973-d31b6557fa68"},{id:1,title:"Evento 2",description:"Evento 2, Fecha: 14/04/2000, Lugar: asdad a342, AC, USA",img:"https://images.unsplash.com/photo-1593508512255-86ab42a8e620"},{id:2,title:"Evento 3",description:"Evento 3, Fecha: 14/04/2000, Lugar: asdad a342, AC, USA",img:"https://images.unsplash.com/photo-1624465991603-ea7793b4fc7d"}],N=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(x,{}),Object(d.jsx)("div",{className:"list",children:Object(d.jsx)(v,{products:f})})]})},C=c(16),y=c(30),E=c(11),k="http://localhost/3000",I="".concat(k,"/inscription"),S="".concat(k,"/login"),w=c(36),F=function(e){var t=e.notification,c=e.onClose;return Object(d.jsx)("div",{"aria-live":"polite","aria-atomic":"true",style:{position:"relative",minHeight:"100px"},children:Object(d.jsxs)(w.a,{delay:3e3,autohide:!0,show:t,onClose:c,style:{position:"absolute",top:0,right:0},children:[Object(d.jsxs)(w.a.Header,{children:[Object(d.jsx)("strong",{className:"mr-auto",children:"Eventos"}),Object(d.jsx)("small",{children:"just now"})]}),Object(d.jsx)(w.a.Body,{children:t})]})})},L=function(){var e=Object(l.g)().id,t=Object(a.useState)(""),c=Object(y.a)(t,2),s=c[0],n=c[1],i=Object(a.useState)({id:e||0}),r=Object(y.a)(i,2),o=r[0],j=r[1];return Object(a.useEffect)((function(){j({id:e})}),[e]),Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("div",{className:"form",children:Object(d.jsxs)(E.a,{children:[Object(d.jsxs)(E.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(d.jsx)(E.a.Label,{className:"text-light bg-dark",children:"Email address: "}),Object(d.jsx)(E.a.Control,{onChange:function(e){var t=e.target;j(Object(C.a)(Object(C.a)({},o),{},{email:t.value}))},type:"email",placeholder:"Enter email"}),Object(d.jsx)(E.a.Text,{className:"text-muted text-light bg-dark",children:"We'll never share your email with anyone else."})]}),Object(d.jsxs)(E.a.Group,{controlId:"formGridState",children:[Object(d.jsx)(E.a.Label,{className:"text-light bg-dark",children:"Evento: "}),Object(d.jsxs)(E.a.Control,{as:"select",defaultValue:o.id,onChange:function(e){var t=e.target;j(Object(C.a)(Object(C.a)({},o),{},{id:t.value}))},children:[Object(d.jsx)("option",{value:"0",label:"Evento 1",children:"Evento 1"}),Object(d.jsx)("option",{value:"1",label:"Evento 2",children:"Evento 2"}),Object(d.jsx)("option",{value:"2",label:"Evento 3",children:"Evento 3"})]})]}),Object(d.jsx)(g.a,{onClick:function(e){e.preventDefault(),fetch(I,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((function(e){console.log(e)})).catch((function(e){console.error(e),n("Error interno, por favor intente mas tarde")}))},variant:"primary",type:"submit",children:"Inscribirme"})]})}),s&&Object(d.jsx)(F,{notification:s,onClose:function(){n("")}})]})},T=function(){var e=Object(a.useState)(""),t=Object(y.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)({}),i=Object(y.a)(n,2),r=i[0],l=i[1];return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("div",{className:"form",children:Object(d.jsxs)(E.a,{children:[Object(d.jsxs)(E.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(d.jsx)(E.a.Label,{className:"text-light bg-dark",children:"Email address: "}),Object(d.jsx)(E.a.Control,{onChange:function(e){var t=e.target;l(Object(C.a)(Object(C.a)({},r),{},{email:t.value}))},type:"email",placeholder:"Ingrese email"})]}),Object(d.jsxs)(E.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(d.jsx)(E.a.Label,{className:"text-light bg-dark",children:"Password"}),Object(d.jsx)(E.a.Control,{onChange:function(e){var t=e.target;l(Object(C.a)(Object(C.a)({},r),{},{password:t.value}))},type:"password",placeholder:"Contrase\xf1a"})]}),Object(d.jsx)(g.a,{onClick:function(e){e.preventDefault(),fetch(S,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(e){console.log(e)})).catch((function(e){console.error(e),s("Error interno, por favor intente mas tarde")}))},variant:"primary",type:"submit",children:"Iniciar"})]})}),c&&Object(d.jsx)(F,{notification:c,onClose:function(){s("")}})]})},A=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(r.a,{basename:"/eventos-ui",children:[Object(d.jsx)(b,{}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",children:Object(d.jsx)(N,{})}),Object(d.jsx)(l.a,{path:"/inscripcion/:id?",children:Object(d.jsx)(L,{})}),Object(d.jsx)(l.a,{path:"/login",children:Object(d.jsx)(T,{})})]}),Object(d.jsx)(m,{})]})})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,68)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};c(62);i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root")),B()}},[[63,1,2]]]);
//# sourceMappingURL=main.ee50a125.chunk.js.map