(this.webpackJsonpunit=this.webpackJsonpunit||[]).push([[0],{67:function(e,n,t){e.exports=t(84)},72:function(e,n,t){},73:function(e,n,t){},84:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(34),i=t.n(l),o=(t(72),t(2)),c=(t(73),t(90)),u=t(91),d=t(4),m=t(35),s=function e(){Object(m.a)(this,e)};s.TREE_GREEN="#186f25",s.DEEP_GREEN="#003303",s.TREE_LIGHT_GREEN="#00a118",s.BTN_GREEN="#003400",s.BACK_GRAY_WHITE="#fdfdfd",s.BACK_GRAY_SUBTITLE="rgba(216, 216, 216, 0.2)";var f=t(23),p=t(54);function v(){var e=Object(o.a)(["\n  margin-left: 28px;\n  color: white;\n  font-size: 14px;\n  text-align: center;\n  font-weight: bold;\n  min-width: 90px;\n  &:hover {\n    background-color: ",";\n  }\n  @media screen and (max-width: 864px) {\n    margin: 0;\n    background-color: ",";\n  }\n  padding: 20px 13px 16px 14px;\n"]);return v=function(){return e},e}var g=d.a.div(v(),(function(e){return e.hovercolor}),(function(){return s.TREE_GREEN})),E=function(e){var n=e.to,t=e.isHash,a=e.hovercolor,l=e.children;return r.a.createElement(g,{hovercolor:a,"data-toggle":"collapse","data-target":".navbar-collapse.show"},t?r.a.createElement(u.a.Link,{as:p.HashLink,to:n,href:"".concat(n),className:"p-0"},l||null):r.a.createElement(u.a.Link,{as:f.Link,to:n,href:"".concat(n),className:"p-0"},l||null))};function h(){var e=Object(o.a)(["\n  margin-left: 15px;\n  width: 90px;\n  @media screen and (max-width: 864px) {\n    margin: 5px;\n  }\n"]);return h=function(){return e},e}function x(){var e=Object(o.a)(["\n  background-color: ",";\n"]);return x=function(){return e},e}var b=Object(d.a)(c.a)(x(),(function(e){return e.color})),j=d.a.img(h());function y(){return r.a.createElement(b,{collapseOnSelect:!0,expand:"md",className:"p-0",color:s.TREE_GREEN},r.a.createElement(f.Link,{to:"/"},r.a.createElement(c.a.Brand,null,r.a.createElement(j,{src:"/logo.png",alt:"logo"}))),r.a.createElement(c.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(c.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(u.a,{className:"ml-auto"},r.a.createElement(E,{to:"/aboutus",hovercolor:s.TREE_LIGHT_GREEN},"About Us"),r.a.createElement(E,{to:"/partners",hovercolor:s.TREE_LIGHT_GREEN},"Partner"),r.a.createElement(E,{to:"/sponsors",hovercolor:s.TREE_LIGHT_GREEN},"Sponsor"),r.a.createElement(E,{to:"/Contact",hovercolor:s.TREE_LIGHT_GREEN},"Contact"))))}var w=t(87),O=t(88),k=t(89);function N(){var e=Object(o.a)(["\n  @media screen and (max-width: 992px) {\n    text-align: center;\n  }\n"]);return N=function(){return e},e}function T(){var e=Object(o.a)(["\n  font-size: 14px;\n  color: #ffffff;\n"]);return T=function(){return e},e}function _(){var e=Object(o.a)(["\n  background-color: ",";\n"]);return _=function(){return e},e}var z=Object(d.a)(w.a)(_(),(function(){return s.DEEP_GREEN})),R=d.a.div(T()),C=d.a.div(N()),P=function(){return r.a.createElement(z,{fluid:!0,className:"p-0"},r.a.createElement(O.a,{noGutters:!0},r.a.createElement(k.a,{lg:4,style:{display:"flex",alignItems:"center",justifyContent:"center",height:120},className:"d-none d-lg-flex"},r.a.createElement(R,null,r.a.createElement("div",null,"Design by QURIAN, Philographer"),r.a.createElement(C,null,"contact@unit.center"))),r.a.createElement(k.a,{lg:4,className:"d-none d-lg-flex"}),r.a.createElement(k.a,{lg:4,style:{display:"flex",alignItems:"center",justifyContent:"center",height:120},className:"d-none d-lg-flex"},r.a.createElement(R,{style:{textAlign:"center"}},"Copyright \xa9 UNIT 2020")),r.a.createElement(k.a,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:120},md:12,className:"d-flex d-lg-none"},r.a.createElement(R,null,r.a.createElement(C,null,"Design by QURIAN, Philographer"),r.a.createElement(C,null,"contact@unit.center"),r.a.createElement(C,null,"Copyright \xa9 UNIT 2020")))))},S=t(25),G=t(14),I=t(12),L=t(8),B=t.n(L);function A(){var e=Object(o.a)(["\n  {\n    landingPage {\n      heading\n      subheading\n      image {\n        url\n      }\n    }\n  }\n"]);return A=function(){return e},e}function D(){var e=Object(o.a)(["\n  max-width: 960px;\n  height: 360px;\n  background-blend-mode: screen;\n  background-image: linear-gradient(\n    to bottom,\n    rgba(0, 0, 0, 0.5) 50%,\n    rgba(0, 110, 39, 0.5) 100%\n  );\n"]);return D=function(){return e},e}var U=d.a.div(D()),H=Object(I.b)(A()),W=function(){var e=Object(G.a)(H),n=e.loading,t=e.error,a=e.data;return n?r.a.createElement(L.SkeletonTheme,{color:s.TREE_GREEN,highlightColor:"rgba(255, 255, 255, 0.2)"},r.a.createElement("div",{style:{height:"360px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{style:{marginBottom:"6px"}},r.a.createElement(B.a,{width:320,height:60})),r.a.createElement(B.a,{width:320,height:29}))):t?r.a.createElement("p",null,"Error :("):r.a.createElement("div",{style:{display:"block"}},r.a.createElement("div",{style:{width:"100%",backgroundRepeat:"no-repeat",height:"360px",backgroundPosition:"center",backgroundSize:"cover",backgroundImage:"url(".concat(null===a||void 0===a?void 0:a.landingPage.image.url,")")}},r.a.createElement(U,null,r.a.createElement("div",{style:{display:"flex",height:"100%",justifyContent:"center",alignItems:"center",flexDirection:"column"}},r.a.createElement("div",{style:{justifyContent:"center",width:"320px",height:"60px",backgroundColor:"rgba(24, 111, 37, 0.85)",alignItems:"center",display:"flex",fontSize:"24px",fontWeight:"bold",marginBottom:"6px"}},r.a.createElement("span",{style:{color:"white",lineHeight:"1",padding:"0.25em",textAlign:"center"}},null===a||void 0===a?void 0:a.landingPage.heading)),r.a.createElement("div",{style:{justifyContent:"center",width:"320px",height:"29px",backgroundColor:"rgba(24, 111, 37, 0.85)",alignItems:"center",display:"flex",fontSize:"16px",fontWeight:"bold"}},r.a.createElement("span",{style:{color:"white",lineHeight:"1",padding:"0.25em",textAlign:"center"}},null===a||void 0===a?void 0:a.landingPage.subheading))))))};function Y(){var e=Object(o.a)(["\n  {\n    landingPage {\n      events {\n        title\n        title_kr\n        date\n        image {\n          url\n        }\n      }\n    }\n  }\n"]);return Y=function(){return e},e}var q=Object(I.b)(Y());function K(){var e=Object(G.a)(q),n=e.loading,t=e.error,a=e.data;return n?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},[0,1,2].map((function(e,n){return r.a.createElement("div",{className:"col-12 col-sm-12 col-md-12 col-lg-4",style:{flexDirection:"column",display:"flex",height:"120px",alignItems:"center"},key:"evt-".concat(n)},r.a.createElement("div",{style:{width:"50%"}},r.a.createElement(B.a,null)),r.a.createElement("div",{style:{marginTop:"8px",width:"70%"}},r.a.createElement(B.a,null)))})))):t?r.a.createElement("p",null,"Error :("):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},null===a||void 0===a?void 0:a.landingPage.events.map((function(e,n){return r.a.createElement("div",{className:"col-12 col-sm-12 col-md-12 col-lg-4",style:{height:"120px",backgroundColor:"white",textAlign:"center"},key:"evt-".concat(n)},r.a.createElement("span",{style:{fontSize:"16px",fontWeight:"bold",color:"#186f25"}},e.title),r.a.createElement("br",null),r.a.createElement("div",{style:{marginTop:"8px"}},r.a.createElement("span",{style:{fontSize:"14px",color:"#aeaeae"}},e.title_kr," | ",e.date)))}))))}function Q(){var e=Object(o.a)(["\n  height: 40px;\n  background-color: ",";\n"]);return Q=function(){return e},e}var X=d.a.div(Q(),(function(e){return e.back}));function F(){return r.a.createElement(X,{back:s.BACK_GRAY_WHITE})}function J(){var e=Object(o.a)(["\n  border-bottom: solid 2px #d8d8d8;\n"]);return J=function(){return e},e}function V(){var e=Object(o.a)(["\n  flex: 1;\n  margin-right: 20px;\n  margin-left: 30px;\n"]);return V=function(){return e},e}function $(){var e=Object(o.a)(["\n  font-size: 18px;\n  font-weight: 800;\n  color: #595959;\n  margin-left: 30px;\n"]);return $=function(){return e},e}function M(){var e=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  height: 40px;\n"]);return M=function(){return e},e}var Z=d.a.div(M()),ee=d.a.div($()),ne=d.a.div(V()),te=d.a.div(J()),ae=function(e){var n=e.title,t=e.style;return r.a.createElement(Z,{style:t},r.a.createElement(ee,null,n),r.a.createElement(ne,null,r.a.createElement(te,null)))};function re(){var e=Object(o.a)(["\n  height: 18px;\n  font-size: 12px;\n  font-weight: 500;\n  text-align: right;\n  color: rgba(0, 0, 0, 0.45);\n"]);return re=function(){return e},e}function le(){var e=Object(o.a)(["\n  flex: 1;\n  height: 27px;\n  font-size: 18px;\n  font-weight: bold;\n  color: #000000;\n"]);return le=function(){return e},e}function ie(){var e=Object(o.a)(["\n  width: 256px;\n  //height: 60px;\n  color: #323434;\n  font-size: 14px;\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: ",";\n  -webkit-box-orient: vertical;\n"]);return ie=function(){return e},e}function oe(){var e=Object(o.a)(["\n  margin: 7px 16px 0 16px;\n  height: ",";\n"]);return oe=function(){return e},e}function ce(){var e=Object(o.a)(["\n  width: 288px;\n  height: 104px;\n"]);return ce=function(){return e},e}function ue(){var e=Object(o.a)([""]);return ue=function(){return e},e}function de(){var e=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  margin: 7px 16px 0 16px;\n"]);return de=function(){return e},e}function me(){var e=Object(o.a)(["\n  height: ",";\n  width: 288px;\n  object-fit: contain;\n  border-radius: 8px;\n  border: solid 1px #eeeeee;\n"]);return me=function(){return e},e}function se(){var e=Object(o.a)(["\n  display: flex;\n  min-width: 320px;\n  justify-content: center;\n  align-items: center;\n  padding: 16px;\n"]);return se=function(){return e},e}function fe(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: ",";\n  margin-right: 16px;\n"]);return fe=function(){return e},e}function pe(){var e=Object(o.a)(["\n  font-size: 10px;\n  color: #323434;\n  font-weight: bold;\n  margin-left: 15px;\n  margin-right: 15px;\n"]);return pe=function(){return e},e}function ve(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 24px;\n  border-radius: 15px;\n  border: solid 1px #979797;\n\n  &:not(:last-of-type) {\n    margin-right: 4px;\n  }\n"]);return ve=function(){return e},e}var ge=d.a.div(ve()),Ee=d.a.div(pe()),he=d.a.div(fe(),(function(e){return e.logo?"7px":"15px"})),xe=d.a.div(se()),be=d.a.div(me(),(function(e){return e.logo?"224px":"159px"})),je=d.a.div(de()),ye=d.a.div(ue()),we=d.a.img(ce()),Oe=d.a.div(oe(),(function(e){return e.logo?"40px":"60px"})),ke=d.a.div(ie(),(function(e){return e.ellipsisLineCount})),Ne=d.a.div(le()),Te=d.a.div(re());function _e(e,n){return n?r.a.createElement(ge,null,r.a.createElement("a",{href:n,target:"_blank noopener noreferrer"},r.a.createElement(Ee,null,e))):null}var ze=function(e){var n,t=e.name,a=e.logo,l=e.since,i=(e.slogan,e.introduction),o=e.homepage,c=e.facebook,u=e.medium;return r.a.createElement(k.a,{xs:12,sm:12,md:6,lg:4,xl:4,className:"p-0"},r.a.createElement(xe,null,r.a.createElement(be,{logo:a},a?r.a.createElement(ye,null,r.a.createElement(we,{src:a.url,alt:"logo"})):null,r.a.createElement(je,null,r.a.createElement(Ne,null,t),r.a.createElement(Te,null,l?"since ".concat((n=l)?n.split("-")[0]:""):null)),r.a.createElement(Oe,{logo:a},r.a.createElement(ke,{ellipsisLineCount:a?2:3},i)),r.a.createElement(he,{logo:a},_e("\uc6f9\ud398\uc774\uc9c0",o),_e("f",c),_e("m",u)))))};function Re(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 24px;\n  border-radius: 15px;\n  border: solid 1px #eeeeee;\n\n  &:not(:last-of-type) {\n    margin-right: 4px;\n  }\n"]);return Re=function(){return e},e}function Ce(){var e=Object(o.a)(["\n  font-size: 10px;\n  color: #323434;\n  font-weight: bold;\n  margin-left: 15px;\n  margin-right: 15px;\n"]);return Ce=function(){return e},e}function Pe(){var e=Object(o.a)(["\n  width: 20%;\n  height: 18px;\n  font-size: 12px;\n  font-weight: 500;\n  text-align: right;\n  color: rgba(0, 0, 0, 0.45);\n"]);return Pe=function(){return e},e}function Se(){var e=Object(o.a)(["\n  flex: 1;\n  height: 27px;\n  font-size: 18px;\n  font-weight: bold;\n  color: #000000;\n"]);return Se=function(){return e},e}function Ge(){var e=Object(o.a)(["\n  width: 256px;\n  color: #323434;\n  font-size: 14px;\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: ",";\n  -webkit-box-orient: vertical;\n"]);return Ge=function(){return e},e}function Ie(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: ",";\n  margin-right: 16px;\n"]);return Ie=function(){return e},e}function Le(){var e=Object(o.a)(["\n  margin: 7px 16px 0 16px;\n  height: ",";\n"]);return Le=function(){return e},e}function Be(){var e=Object(o.a)(["\n  width: 288px;\n  height: 104px;\n  padding: 10px;\n"]);return Be=function(){return e},e}function Ae(){var e=Object(o.a)([""]);return Ae=function(){return e},e}function De(){var e=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  margin: 15px 16px 0 16px;\n"]);return De=function(){return e},e}function Ue(){var e=Object(o.a)(["\n  height: ",";\n  width: 288px;\n  object-fit: contain;\n  border-radius: 8px;\n  border: solid 1px #eeeeee;\n"]);return Ue=function(){return e},e}function He(){var e=Object(o.a)(["\n  display: flex;\n  min-width: 320px;\n  justify-content: center;\n  align-items: center;\n  padding: 16px;\n"]);return He=function(){return e},e}var We=d.a.div(He()),Ye=d.a.div(Ue(),(function(e){return e.logo?"224px":"159px"})),qe=d.a.div(De()),Ke=d.a.div(Ae()),Qe=d.a.div(Be()),Xe=d.a.div(Le(),(function(e){return e.logo?"40px":"60px"})),Fe=d.a.div(Ie(),(function(e){return e.logo?"2px":"8px"})),Je=d.a.div(Ge(),(function(e){return e.ellipsisLineCount})),Ve=d.a.div(Se()),$e=d.a.div(Pe()),Me=d.a.div(Ce());function Ze(){return r.a.createElement(en,null,r.a.createElement(Me,null,r.a.createElement(B.a,{count:1})))}var en=d.a.div(Re()),nn=function(e){var n=e.logo;return r.a.createElement(k.a,{xs:12,sm:12,md:6,lg:4,xl:4,className:"p-0"},r.a.createElement(We,null,r.a.createElement(Ye,{logo:n},n?r.a.createElement(Ke,null,r.a.createElement(Qe,null,r.a.createElement(B.a,{height:100}))):null,r.a.createElement(qe,null,r.a.createElement(Ve,null,r.a.createElement("div",{style:{width:"50%"}},r.a.createElement(B.a,{count:1}))),r.a.createElement($e,null,r.a.createElement(B.a,{count:1}))),r.a.createElement(Xe,{logo:n},r.a.createElement(Je,{ellipsisLineCount:n?2:3},r.a.createElement(B.a,{count:n?2:3}))),r.a.createElement(Fe,{logo:n},Ze(),Ze(),Ze()))))};function tn(){var e=Object(o.a)(["\n      {\n          partners(limit: ",") {\n              name\n              subName\n              introduction\n              slogan\n              establishmentDate\n              facebook\n              homepage\n              location\n              medium\n              email\n              tags\n              logo {\n                  url\n              }\n          }\n      }\n  "]);return tn=function(){return e},e}var an=function(e){e.children;var n=e.limit,t=Object(G.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Object(I.b)(tn(),e)}(n)),a=t.loading,l=t.error,i=t.data;return a?r.a.createElement(w.a,null,r.a.createElement(O.a,null,[0,1,2,3,4,5].map((function(e,n){return r.a.createElement(nn,{logo:!1,key:"skeleton-".concat(e)})})))):l?r.a.createElement("p",null,"Error :("):r.a.createElement(w.a,null,r.a.createElement(O.a,null,null===i||void 0===i?void 0:i.partners.map((function(e){var n=e.name,t=e.subName,a=e.introduction,l=e.slogan,i=e.establishmentDate,o=e.facebook,c=e.homepage,u=(e.location,e.medium);e.email,e.tags,e.logo;return r.a.createElement(ze,{since:i,name:n,subName:t,slogan:l,introduction:a,homepage:c,facebook:o,medium:u,key:n})}))))};function rn(){var e=Object(o.a)(["\n      {\n          sponsors(limit: ",") {\n              name\n              subName\n              introduction\n              slogan\n              establishmentDate\n              homepage\n              location\n              email\n              tags\n              logo {\n                  url\n              }\n          }\n      }\n  "]);return rn=function(){return e},e}var ln=function(e){e.children;var n=e.limit,t=Object(G.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Object(I.b)(rn(),e)}(n)),a=t.loading,l=t.error,i=t.data;return a?r.a.createElement(w.a,null,r.a.createElement(O.a,null,[0,1,2,3,4,5].map((function(e,n){return r.a.createElement(nn,{logo:!0,key:"skeleton-".concat(e)})})))):l?r.a.createElement("p",null,"Error :("):r.a.createElement(w.a,null,r.a.createElement(O.a,null,null===i||void 0===i?void 0:i.sponsors.map((function(e){var n=e.name,t=e.subName,a=e.introduction,l=e.slogan,i=e.establishmentDate,o=e.homepage,c=(e.location,e.email,e.tags,e.logo);return r.a.createElement(ze,{since:i,name:n,subName:t,slogan:l,introduction:a,logo:c,homepage:o,key:n})}))))};function on(){return r.a.createElement("div",null,r.a.createElement(W,null),r.a.createElement(F,null),r.a.createElement(K,null),r.a.createElement(ae,{title:"Partner"}),r.a.createElement(an,{limit:6}),r.a.createElement(ae,{title:"Sponsor",style:{marginTop:25}}),r.a.createElement(ln,{limit:6}))}function cn(){var e=Object(o.a)(["\n  width: 320px;\n  height: 84px; \n  font-size: 14px;\n  color: white;\n  margin-top: 43px;\n"]);return cn=function(){return e},e}function un(){var e=Object(o.a)(["  \n  height: 36px;\n  font-size: 24px;\n  font-weight: bold;\n  color: white; \n"]);return un=function(){return e},e}function dn(){var e=Object(o.a)(["\n  margin-top: 50px;\n  margin-left: 48px;\n"]);return dn=function(){return e},e}function mn(){var e=Object(o.a)(["\n  height: 240px;\n  background-color: ",";\n"]);return mn=function(){return e},e}var sn=d.a.div(mn(),(function(){return s.TREE_LIGHT_GREEN})),fn=d.a.div(dn()),pn=d.a.div(un()),vn=d.a.div(cn());function gn(e){return void 0===e?r.a.createElement("div",null):e?r.a.createElement("div",null,e,r.a.createElement("br",null)):r.a.createElement(L.SkeletonTheme,{color:"transparent",highlightColor:s.TREE_GREEN},r.a.createElement("div",{style:{fontSize:14,lineHeight:1,marginBottom:"5px",width:"90%"}},r.a.createElement(B.a,null)))}var En=function(e){e.children;var n=e.title,t=e.desc1,a=e.desc2,l=e.desc3;return r.a.createElement(sn,null,r.a.createElement(fn,null,r.a.createElement(pn,null,function(e){return e||r.a.createElement(L.SkeletonTheme,{color:"transparent",highlightColor:s.TREE_GREEN},r.a.createElement("div",{style:{fontSize:24,lineHeight:2,width:"80px"}},r.a.createElement(B.a,null)))}(n)),r.a.createElement(vn,null,gn(t),gn(a),gn(l))))};function hn(){var e=Object(o.a)(["\n  height: 40px;\n"]);return hn=function(){return e},e}var xn=d.a.div(hn()),bn=function(){return r.a.createElement(xn,null)};function jn(){var e=Object(o.a)(["\n  font-size: 18px;\n  font-weight: bold;\n  color: ",";\n"]);return jn=function(){return e},e}function yn(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 320px;\n  height: 48px;\n  border-radius: 24px;\n  border: solid 2px ",";\n  opacity: 0.8;\n  background-color: rgba(255, 255, 255, 0.7);\n"]);return yn=function(){return e},e}var wn=d.a.div(yn(),(function(){return s.BTN_GREEN})),On=d.a.div(jn(),(function(){return s.BTN_GREEN})),kn=function(e){var n=e.children;return r.a.createElement(wn,null,r.a.createElement(On,null,n))};function Nn(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 96px;\n  background-color: rgba(0, 163, 0, 0.15);\n  margin-top: 348px;\n"]);return Nn=function(){return e},e}function Tn(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Tn=function(){return e},e}var _n=d.a.div(Tn()),zn=d.a.div(Nn()),Rn=function(e){var n=e.children,t=e.title,a=e.desc1,l=e.desc2,i=e.desc3,o=e.isEdit,c=void 0!==o&&o,u=e.hasSearch,d=void 0!==u&&u;return r.a.createElement(_n,null,r.a.createElement(En,{title:t,desc1:a,desc2:l,desc3:i}),d?r.a.createElement(bn,null):null,n,c?r.a.createElement(zn,null,r.a.createElement(kn,null,t," \ub2e8\uccb4\ub4f1\ub85d, \uc815\ubcf4\uc218\uc815 \uc694\uccad")):null)};function Cn(){var e=Object(o.a)(["\n    {\n        aboutUsPage {\n            title,\n            description1,\n            description2,\n            subTitle,\n            subDescription,\n            lastComment1,\n            lastComment2\n            events {\n                title,\n                title_kr,\n                description,\n                summary,\n                date,\n                image {\n                    url\n                }\n            }\n        }\n    }\n"]);return Cn=function(){return e},e}function Pn(){var e=Object(o.a)(["\n  margin-top: 16px;\n  font-size: 16px;\n  font-weight: bold;\n  color: #00a300;\n"]);return Pn=function(){return e},e}function Sn(){var e=Object(o.a)(["\n  word-break: keep-all;\n  font-size: 16px;\n  color: #000000;\n"]);return Sn=function(){return e},e}function Gn(){var e=Object(o.a)(["\n  height: 48px;\n  font-size: 21px;\n  font-weight: bold;\n  color: #000000;\n"]);return Gn=function(){return e},e}function In(){var e=Object(o.a)(["\n  height: 100%;\n  margin-top: 7.5%;\n"]);return In=function(){return e},e}function Ln(){var e=Object(o.a)(["\n  padding: 28px 48px 24px 48px\n"]);return Ln=function(){return e},e}var Bn=d.a.div(Ln()),An=d.a.div(In()),Dn=d.a.div(Gn()),Un=d.a.div(Sn()),Hn=d.a.div(Pn()),Wn=Object(I.b)(Cn());var Yn=function(e,n,t){return r.a.createElement(r.a.Fragment,{key:"evt-".concat(e)},r.a.createElement(k.a,{xs:{span:12,order:2*(1+e)},lg:6},r.a.createElement(An,null,r.a.createElement(Dn,null,t?r.a.createElement("div",{style:{fontSize:"31px",width:"95px"}},r.a.createElement(B.a,null)):null===n||void 0===n?void 0:n.title),r.a.createElement(Un,null,t?r.a.createElement("div",{style:{fontSize:"18px",width:"50%"}},r.a.createElement(B.a,null)):"".concat(null===n||void 0===n?void 0:n.title_kr," | ").concat((a=null===n||void 0===n?void 0:n.date,"SINCE ".concat(null===a||void 0===a?void 0:a.split("-")[0]))),r.a.createElement("br",null),t?r.a.createElement("div",{style:{fontSize:"18px",width:"100%"}},r.a.createElement(B.a,{count:3})):null===n||void 0===n?void 0:n.description))),r.a.createElement(k.a,{xs:{span:12,order:1+2*e},lg:6},t?r.a.createElement("div",{style:{fontSize:"160px",width:"100%",lineHeight:.1,padding:"7.5%"}},r.a.createElement(B.a,null)):r.a.createElement("img",{src:null===n||void 0===n?void 0:n.image.url,alt:null===n||void 0===n?void 0:n.title,style:{width:"100%",padding:"7.5%"}})));var a},qn=function(){var e=Object(G.a)(Wn),n=e.error,t=e.data;return n?r.a.createElement("p",null,"Error :("):r.a.createElement(Rn,{title:(null===t||void 0===t?void 0:t.aboutUsPage.title)||"",desc1:(null===t||void 0===t?void 0:t.aboutUsPage.description1)||"",desc2:(null===t||void 0===t?void 0:t.aboutUsPage.description2)||"",desc3:void 0},r.a.createElement(Bn,null,r.a.createElement(Dn,null,t?r.a.createElement("span",null,t.aboutUsPage.title):r.a.createElement("div",{style:{fontSize:"31px",width:"90px"}},r.a.createElement(B.a,null))),r.a.createElement(Un,null,t?r.a.createElement("span",null,t.aboutUsPage.subDescription):r.a.createElement("div",{style:{fontSize:"16px",width:"100%"}},r.a.createElement(B.a,{count:4}))),r.a.createElement(Hn,null,r.a.createElement("span",null,"* UNIT \ub2e8\uccb4\uc18c\uac1c\uc11c.pdf"))),r.a.createElement(w.a,{className:"p-0",style:{maxWidth:"inherit"}},r.a.createElement(Bn,null,r.a.createElement(O.a,null,t?t.aboutUsPage.events.map((function(e,n){return Yn(n,e)})):[0,1,2].map((function(e){return Yn(e,void 0,!0)})))),r.a.createElement(Bn,{style:{paddingTop:0}},null===t||void 0===t?void 0:t.aboutUsPage.lastComment1,r.a.createElement("br",null),null===t||void 0===t?void 0:t.aboutUsPage.lastComment2)))};function Kn(){var e=Object(o.a)(["\n      {\n          sponsorPage {\n              title,\n              subTitle1,\n              subTitle2,\n              subTitle3\n          }\n      }\n  "]);return Kn=function(){return e},e}var Qn=function(){var e=Object(I.b)(Kn()),n=Object(G.a)(e),t=n.error,a=n.data;return t?r.a.createElement("p",null,"Error :("):r.a.createElement(Rn,{title:(null===a||void 0===a?void 0:a.sponsorPage.title)||"",desc1:(null===a||void 0===a?void 0:a.sponsorPage.subTitle1)||"",desc2:(null===a||void 0===a?void 0:a.sponsorPage.subTitle2)||"",desc3:(null===a||void 0===a?void 0:a.sponsorPage.subTitle3)||"",isEdit:!0,hasSearch:!0},r.a.createElement(ln,null))};function Xn(){var e=Object(o.a)(["\n      {\n          partnerPage {\n              title,\n              subTitle1,\n              subTitle2,\n              subTitle3\n          }\n      }\n  "]);return Xn=function(){return e},e}var Fn=function(){var e=Object(I.b)(Xn()),n=Object(G.a)(e),t=n.error,a=n.data;return t?r.a.createElement("p",null,"Error :("):r.a.createElement(Rn,{title:(null===a||void 0===a?void 0:a.partnerPage.title)||"",desc1:(null===a||void 0===a?void 0:a.partnerPage.subTitle1)||"",desc2:(null===a||void 0===a?void 0:a.partnerPage.subTitle2)||"",desc3:(null===a||void 0===a?void 0:a.partnerPage.subTitle3)||"",isEdit:!0,hasSearch:!0},r.a.createElement(an,null))};function Jn(){var e=Object(o.a)(["\n  margin: 0 48px 0 48px;\n  font-size: 16px; \n"]);return Jn=function(){return e},e}function Vn(){var e=Object(o.a)(["\n  font-size: 21px;\n  font-weight: bold;\n  margin: 20px 48px 4px 48px; \n"]);return Vn=function(){return e},e}function $n(){var e=Object(o.a)(["\n  height: 136px;\n"]);return $n=function(){return e},e}var Mn=d.a.div($n()),Zn=d.a.div(Vn()),et=d.a.div(Jn()),nt=function(e){var n=e.title,t=e.description1,a=e.description2,l=e.isLoading,i=void 0!==l&&l;return r.a.createElement(Mn,null,r.a.createElement(Zn,null,i?r.a.createElement("div",{style:{fontSize:"30px",width:"300px"}},r.a.createElement(B.a,null)):r.a.createElement("div",null,n)),r.a.createElement(et,null,i?r.a.createElement("div",{style:{fontSize:"20px",width:"270px"}},r.a.createElement(B.a,null)):r.a.createElement("div",null,t),i?r.a.createElement("div",{style:{fontSize:"20px",width:"270px"}},r.a.createElement(B.a,null)):r.a.createElement("div",null,a)))};function tt(){var e=Object(o.a)(["\n  margin: 200px 48px 24px 48px;\n  font-size: 16px;\n"]);return tt=function(){return e},e}function at(){var e=Object(o.a)(["\n  width: 100%;\n  margin-left: 48px;\n  font-size: 24px;\n  font-weight: bold; \n"]);return at=function(){return e},e}function rt(){var e=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  height: 80px;\n  background-color: ",";\n"]);return rt=function(){return e},e}function lt(){var e=Object(o.a)(["\n    {\n        contact {\n            title,\n            subTitle,\n            description1,\n            description2,\n            description3,\n            lastComment1,\n            lastComment2,\n            faqs {\n                title,\n                description1,\n                description2\n            }\n        }\n    }\n"]);return lt=function(){return e},e}var it=Object(I.b)(lt()),ot=d.a.div(rt(),(function(){return s.BACK_GRAY_SUBTITLE})),ct=d.a.div(at()),ut=d.a.div(tt()),dt=function(){var e=Object(G.a)(it),n=e.error,t=e.data;return n?r.a.createElement("p",null,"Error :("):r.a.createElement(Rn,{title:(null===t||void 0===t?void 0:t.contact.title)||"",desc1:(null===t||void 0===t?void 0:t.contact.description1)||"",desc2:(null===t||void 0===t?void 0:t.contact.description2)||"",desc3:void 0},r.a.createElement(ot,null,r.a.createElement(ct,null,t?null===t||void 0===t?void 0:t.contact.subTitle:r.a.createElement("div",{style:{fontSize:"32px",width:"100px"}},r.a.createElement(B.a,null)))),t?null===t||void 0===t?void 0:t.contact.faqs.map((function(e,n){return r.a.createElement(nt,{key:"faq-".concat(n),title:e.title,description1:e.description1,description2:e.description2})})):[0,1,2,3].map((function(e){return r.a.createElement(nt,{key:"faq-".concat(e),title:"",description1:"",description2:"",isLoading:!0})})),r.a.createElement(ut,null,null===t||void 0===t?void 0:t.contact.lastComment1,r.a.createElement("br",null),null===t||void 0===t?void 0:t.contact.lastComment2))},mt=function(){return r.a.createElement(S.g,null,r.a.createElement(S.d,{path:"/aboutus"},r.a.createElement(qn,null)),r.a.createElement(S.d,{path:"/sponsors"},r.a.createElement(Qn,null)),r.a.createElement(S.d,{path:"/partners"},r.a.createElement(Fn,null)),r.a.createElement(S.d,{path:"/contact"},r.a.createElement(dt,null)),r.a.createElement(S.d,{path:"/moin",component:function(){return window.location.href="https://www.canva.com/design/DAD_A2X2iXY/gXB_B9GOFN_HVgS8KQYfyw/view#1",null}}),r.a.createElement(S.d,{path:"/"},r.a.createElement(on,null)))},st=t(16),ft=function e(){Object(m.a)(this,e)};function pt(){var e=Object(o.a)(["\n  max-width: 960px;\n  flex: 1;\n"]);return pt=function(){return e},e}function vt(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n"]);return vt=function(){return e},e}ft.END_POINT="https://unit-server.herokuapp.com";var gt=new I.a({uri:"".concat(ft.END_POINT,"/graphql")}),Et=d.a.div(vt()),ht=d.a.div(pt()),xt=function(){return r.a.createElement(st.a,{client:gt},r.a.createElement(f.BrowserRouter,{basename:"/"},r.a.createElement(Et,null,r.a.createElement(ht,null,r.a.createElement(y,null),r.a.createElement(mt,null),r.a.createElement(P,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(83);i.a.render(r.a.createElement(xt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.bcb5a532.chunk.js.map