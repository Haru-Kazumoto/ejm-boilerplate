import{P as h}from"./Page.b0ec3cd0.js";import{u as p,F as c,a as f}from"./FormFieldControl.6d022860.js";import{a as e,j as i,I as C,r as g,T as n,c as b,e as x,F as k,B as d,f as y,ae as I}from"./index.0e24cb86.js";import{F as u}from"./FieldText.629ceab0.js";import{P as a}from"./PagePadding.f9f1bdac.js";import{C as S}from"./index.esm.68da116c.js";import{E as F}from"./EyeIcon.0d72bd0e.js";import{U as w}from"./UserIcon.accdbe28.js";import{I as T,B as v}from"./index.esm.726820fc.js";import{K as D}from"./KeyIcon.5273f942.js";import{u as P,E as L}from"./useError.ed61bdd7.js";import"./index.238261e4.js";const A=({label:o,...t})=>e(S,{...t,children:o}),E=({...o})=>i(C,{...o,children:[e("path",{d:"M16 8V7C16 4.79086 14.2091 3 12 3V3C9.79086 3 8 4.79086 8 7V8",stroke:"currentColor",fill:"none",strokeWidth:"2",strokeLinecap:"round"}),e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.87868 7.87868C3 8.75736 3 10.1716 3 13V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V13C21 10.1716 21 8.75736 20.1213 7.87868C19.2426 7 17.8284 7 15 7H9C6.17157 7 4.75736 7 3.87868 7.87868ZM12 15C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14C11 14.5523 11.4477 15 12 15ZM15 14C15 15.3062 14.1652 16.4175 13 16.8293V19H11V16.8293C9.83481 16.4175 9 15.3062 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14Z",fill:"currentColor"})]}),M=()=>{const{formState:o,control:t}=p(),[s,m]=g.exports.useState(!1),l=()=>m(!s);return i(g.exports.Fragment,{children:[e(c,{label:"Username",control:t,name:"username",formState:o,id:"email",rules:{required:{value:!0,message:"Username Dibutuhkan"}},children:e(u,{leftElement:e(w,{color:"#718096"})})}),e(a,{x:0,y:1}),e(c,{label:"Password",control:t,name:"password",formState:o,id:"password",rules:{required:{value:!0,message:"Password Dibutuhkan"}},children:e(u,{type:s?"text":"password",leftElement:e(E,{color:"#718096"}),rightElement:e(T,{onClick:l,variant:"outline",h:"1.75rem",size:"sm",border:"none",icon:e(F,{}),"aria-label":"Toggle"})})}),e(a,{x:0,y:2}),e(c,{label:e(n,{fontSize:13,fontWeight:"normal",color:"#718096",children:"Buat saya tetap login"}),control:t,name:"keep_me_signin",formState:o,id:"keep_me_signin",rules:{required:{value:!1,message:"Ini Dibutuhkan"}},children:e(A,{})})]})},N=()=>{const o=b(),t=x(),s=P(I);return e(h,{title:"Login | EJM Assessment & Monitoring",children:i(k,{height:"100vh",children:[i(d,{w:{base:"100%",xl:"550px"},display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",bg:"bg.white",children:[e("img",{src:"/images/logo.png",alt:"EJM"}),e(n,{display:{base:"block",xl:"none"},children:"Aplikasi Assessment & Monitoring"}),e(a,{x:0,y:5}),e(n,{fontWeight:"bold",fontSize:{base:25,lg:30},color:"bg.blackAlpha",children:"Selamat Datang"}),e(n,{fontWeight:"light",fontSize:18,color:"bg.blackAlpha",children:"Ayo mulai kerja"}),e(a,{x:0,y:2}),e(y,{maxWidth:"md",children:i(f,{onSubmit:l=>{s.mutate(l,{onSuccess:r=>{localStorage.setItem("_TuVbwpW",r.data.token),localStorage.setItem("_RuvTpQv",r.data.refresh_token),t({title:"Sukses",description:r.message,position:"top",status:"success",duration:9e3,isClosable:!0}),o("/")},onError:r=>L(r,t)})},id:"formLogin",children:[e(M,{}),e(a,{x:0,y:2}),e(v,{type:"submit",width:"100%",leftIcon:e(D,{fontSize:25}),size:"lg",children:"Login"})]})})]}),i(d,{flex:"1",bg:"#CBD5E0",display:{base:"none",xl:"flex"},p:3,alignItems:"center",flexDirection:"column",justifyContent:"center",gap:2,children:[e(n,{fontWeight:"extrabold",fontSize:{md:25,lg:40},color:"#2D3748",children:"Aplikasi Assessment & Monitoring"}),e(n,{fontWeight:"light",fontSize:24,children:"PT Tata Kelola Dokumen"}),e("img",{src:"/images/login-bg.png",alt:"Background Login",style:{width:"calc(100% / 1.4)",height:"auto"}})]})]})})};export{N as default};
