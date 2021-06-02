(this["webpackJsonpcono-client"]=this["webpackJsonpcono-client"]||[]).push([[0],{28:function(n,e,t){},40:function(n,e,t){"use strict";t.r(e);var i,a,c,o,r=t(0),s=t.n(r),d=t(20),p=t.n(d),l=(t(28),t(2)),j=t(3),h=t(11),b=t(4),x=t.p+"static/media/logo.ee98e5d1.png",u=t(1),m=j.a.div(i||(i=Object(l.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),g=j.a.img(a||(a=Object(l.a)(["\n  width: 12.5rem;\n"]))),O=j.a.h2(c||(c=Object(l.a)(["\n  margin: 10px 0 0;\n  font-size: 1rem;\n  font-weight: normal;\n"]))),f=j.a.h1(o||(o=Object(l.a)(["\n  margin: 0;\n  font-size: 3.5rem;\n"])));function v(){var n=Object(b.e)();return setTimeout((function(){n.push("/map")}),1500),Object(u.jsxs)(m,{children:[Object(u.jsx)(g,{src:x}),Object(u.jsx)(O,{children:"\ub2f9\uc2e0\uc758 \ub178\ub798\ubc29 \ub3d9\ubc18\uc790"}),Object(u.jsx)(f,{children:"CONO"})]})}var w,A,I=t(13),_={NAV_MAP_ACTIVE:t.p+"static/media/location_default.f9c107d8.png",NAV_MAP_INACTIVE:t.p+"static/media/location_grey.5b385a43.png",NAV_VIDEO_ACTIVE:t.p+"static/media/play_default.eaa52ea7.png",NAV_VIDEO_INACTIVE:t.p+"static/media/play_grey.95b2e896.png",NAV_RANKING_ACTIVE:t.p+"static/media/ranking_default.bbccb5de.png",NAV_RANKING_INACTIVE:t.p+"static/media/ranking_grey.86e6af8c.png",NAV_USER_ACTIVE:t.p+"static/media/user_default.21467c01.png",NAV_USER_INACTIVE:t.p+"static/media/user_grey.bcca4a70.png",COMMENT:t.p+"static/media/comment_grey.7be76ec1.png",LIKE_ACTIVE:t.p+"static/media/like_default.f5c7420d.png"},E=[{name:"map",to:"/map",active:_.NAV_MAP_ACTIVE,inactive:_.NAV_MAP_INACTIVE},{name:"video",to:"/video",active:_.NAV_VIDEO_ACTIVE,inactive:_.NAV_VIDEO_INACTIVE},{name:"ranking",to:"/ranking",active:_.NAV_RANKING_ACTIVE,inactive:_.NAV_RANKING_INACTIVE},{name:"my",to:"/my",active:_.NAV_USER_ACTIVE,inactive:_.NAV_USER_INACTIVE}],N=window.kakao,y=function(){var n,e=[];return{initMap:function(e){var t=document.getElementById(e),i={center:new N.maps.LatLng(37.561371221033546,126.99740576852703)};n=new N.maps.Map(t,i)},drawMarker:function(t){var i=new N.maps.Size(36,36),a={offset:new N.maps.Point(18,36)},c=new N.maps.MarkerImage("https://github.com/hwookim/cono-client/blob/master/src/assets/marker.png?raw=true",i,a),o=new N.maps.LatLng(t.latitude,t.longitude),r=new N.maps.Marker({position:o,image:c});r.setMap(n),e.push(r)},addClickEventToMarker:function(n,t){N.maps.event.addListener(e[n.id],"click",(function(){t(n.id)}))}}}(),k=Object(j.a)(h.b)(w||(w=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n"]))),C=j.a.div(A||(A=Object(l.a)(["\n  width: 36px;\n  height: 36px;\n  background: url(",") no-repeat;\n  background-size: 36px;\n\n  &:hover {\n    background: url(",") no-repeat;\n    background-size: 36px;\n  }\n"])),(function(n){return n.defaultImg}),(function(n){return n.active}));function T(n){var e=n.to,t=n.activeImg,i=n.inactiveImg,a=location.pathname.includes(e);return Object(u.jsx)(k,{to:e,children:Object(u.jsx)(C,{defaultImg:a?t:i,active:t})})}var V,M,F,R,G,z={MAIN:"#EE2C6C",MAIN_GRAY:"#C3C2C2",ACTIVE_TEXT:"#404040",INACTIVE_TEXT:"#7F7F7F",GRAY_TEXT:"#7C7C7C",TEXT_FIELD:"#FEF4F8"},P=j.a.nav(V||(V=Object(l.a)(["\n  z-index: 999;\n  height: 48px;\n  padding: 2px 10%;\n  display: flex;\n  justify-content: space-between;\n  box-shadow: 0 -3px 5px 2px ",";\n  background-color: white;\n"])),z.MAIN_GRAY);function L(){return Object(u.jsx)(P,{children:E.map((function(n){var e=n.name,t=n.to,i=n.active,a=n.inactive;return Object(u.jsx)(T,{to:t,activeImg:i,inactiveImg:a},e)}))})}var S,X,Y,D,U,K=j.a.div(M||(M=Object(l.a)(["\n  z-index: 999;\n  position: absolute;\n  top: 10px;\n  width: 100vw;\n  max-width: 500px;\n  height: 36px;\n  display: flex;\n  justify-content: center;\n"]))),J=j.a.div(F||(F=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  width: 90%;\n  padding: 10px;\n  border-radius: 15px;\n  box-shadow: 0 0 3px 1px ",";\n  background-color: white;\n"])),z.MAIN_GRAY),q=j.a.input(R||(R=Object(l.a)(["\n  width: 85%;\n  height: 100%;\n  margin: auto;\n  border: none;\n\n  &:focus {\n    outline: none;\n  }\n"]))),B=j.a.span(G||(G=Object(l.a)(["\n  font-size: 32px;\n  font-weight: bold;\n  color: ",";\n"])),z.GRAY_TEXT);function H(){var n=document.querySelector(".search-input");return Object(u.jsx)(K,{onClick:function(){n.focus()},children:Object(u.jsxs)(J,{children:[Object(u.jsx)(q,{className:"search-input"}),Object(u.jsx)(B,{className:"material-icons",children:"search"})]})})}var W,Q,Z,$,nn,en,tn,an,cn,on,rn,sn=j.a.div(S||(S=Object(l.a)(["\n  z-index: 999;\n  position: absolute;\n  top: 55px;\n  width: 100vw;\n  max-width: 500px;\n  height: 20%;\n  display: flex;\n  justify-content: center;\n"]))),dn=j.a.div(X||(X=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  padding: 10px;\n  border-radius: 15px;\n  background-color: rgba(255, 255, 255, 0.8);\n"]))),pn=j.a.div(Y||(Y=Object(l.a)(["\n  color: ",";\n"])),z.GRAY_TEXT),ln=j.a.div(D||(D=Object(l.a)(["\n  margin-top: 10px;\n  height: 80%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  white-space: nowrap;\n"]))),jn=j.a.img(U||(U=Object(l.a)(["\n  margin: 0 10px;\n  width: 27.5%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 15px;\n"])));function hn(n){var e=n.places,t=n.onClickImg;return Object(u.jsx)(sn,{children:Object(u.jsxs)(dn,{children:[Object(u.jsx)(pn,{children:"\uac00\uae4c\uc6b4 \ucf54\uc778\ub178\ub798\ubc29\uc744 \ud655\uc778\ud558\uc138\uc694."}),Object(u.jsx)(ln,{children:e.map((function(n){var e=n.id,i=n.name,a=n.photo;return Object(u.jsx)(jn,{src:a,alt:i,onClick:function(){return t(e)}},e)}))})]})})}var bn,xn,un,mn,gn=j.a.div(W||(W=Object(l.a)(["\n  display: flex;\n  position: relative;\n  padding: 10px 0;\n  width: 100%;\n  white-space: nowrap;\n"]))),On=j.a.img(Q||(Q=Object(l.a)(["\n  width: 30%;\n  height: 15vh;\n  object-fit: cover;\n"]))),fn=j.a.div(Z||(Z=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  justify-content: flex-end;\n"]))),vn=j.a.div($||($=Object(l.a)(["\n  font-size: 1.125rem;\n"]))),wn=j.a.div(nn||(nn=Object(l.a)(["\n  font-size: 0.9rem;\n  color: ",";\n"])),z.GRAY_TEXT),An=j.a.div(en||(en=Object(l.a)(["\n  margin-top: 4px;\n  display: flex;\n  align-items: flex-end;\n"]))),In=j.a.span(tn||(tn=Object(l.a)(["\n  font-size: 0.9rem;\n  color: ",";\n"])),z.GRAY_TEXT),_n=j.a.img(an||(an=Object(l.a)(["\n  margin: 0 5px;\n  height: 20px;\n  object-position: 0 3px;\n"]))),En=j.a.span(cn||(cn=Object(l.a)(["\n  font-size: 0.9rem;\n  color: ",";\n"])),z.MAIN),Nn=j.a.img(on||(on=Object(l.a)(["\n  margin: 0 5px;\n  height: 20px;\n"]))),yn=j.a.button(rn||(rn=Object(l.a)(["\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  padding: 4px 8px;\n  height: fit-content;\n  white-space: nowrap;\n  font-weight: bold;\n  background-color: white;\n  color: ",";\n  border: 2px solid ",";\n  border-radius: 15px;\n"])),z.MAIN,z.MAIN);function kn(n){var e=n.place;return Object(u.jsxs)(gn,{children:[Object(u.jsx)(On,{src:e.photo,alt:e.name}),Object(u.jsxs)(fn,{children:[Object(u.jsx)(vn,{children:e.name}),Object(u.jsx)(wn,{children:e.address}),Object(u.jsxs)(An,{children:[Object(u.jsx)(In,{children:e.comments.length}),Object(u.jsx)(_n,{src:_.COMMENT}),Object(u.jsx)(En,{children:e.likes}),Object(u.jsx)(Nn,{src:_.LIKE_ACTIVE})]})]}),Object(u.jsx)(yn,{children:"\uc815\ubcf4 \ubcf4\uae30"})]})}var Cn,Tn,Vn=j.a.div(bn||(bn=Object(l.a)(["\n  z-index: 999;\n  position: absolute;\n  top: ",";\n  height: ",";\n  width: calc(100vw - 20px);\n  max-width: 480px;\n  padding: 15px 10px;\n  background-color: white;\n  box-shadow: 0 -3px 5px 2px ",";\n  overflow-x: hidden;\n  overflow-y: ",";\n  transition: 1s all;\n"])),(function(n){return n.active?"30%":"calc(100% - 100px)"}),(function(n){return n.active?"65%":"50px"}),z.MAIN_GRAY,(function(n){return n.active?"auto":"hidden"})),Mn=j.a.div(xn||(xn=Object(l.a)(["\n  padding: 0 10px;\n  width: fit-content;\n  font-weight: bold;\n  border-bottom: 4px solid ",";\n  overflow: hidden;\n"])),z.MAIN),Fn=j.a.div(un||(un=Object(l.a)(["\n  border-bottom: 1px solid ",";\n"])),z.MAIN_GRAY),Rn=j.a.span(mn||(mn=Object(l.a)(["\n  float: right;\n"])));function Gn(n){var e=n.places,t=Object(r.useState)(!1),i=Object(I.a)(t,2),a=i[0],c=i[1];return Object(u.jsxs)(Vn,{active:a,onClick:function(){c(!0)},children:[Object(u.jsx)(Rn,{className:"material-icons",onClick:function(n){n.stopPropagation(),c(!1)},children:"close"}),Object(u.jsx)(Mn,{children:"\uc694\uc998 \ub9ce\uc774 \ucc3e\ub294 \ub178\ub798\ubc29"}),e.map((function(n){return Object(u.jsx)(Fn,{children:Object(u.jsx)(kn,{place:n})},n.id)}))]})}var zn=j.a.div(Cn||(Cn=Object(l.a)(["\n  z-index: 998;\n  position: absolute;\n  width: 90vw;\n  max-width: 450px;\n  bottom: 110px;\n  left: 50%;\n  transform: translate(-50%);\n  padding: 10px;\n  display: flex;\n  border-radius: 15px;\n  background-color: rgba(255, 255, 255, 0.8);\n"]))),Pn=j.a.span(Tn||(Tn=Object(l.a)(["\n  z-index: 998;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n"])));function Ln(n){var e=n.place,t=n.onClose;return Object(u.jsxs)(zn,{children:[Object(u.jsx)(Pn,{className:"material-icons",onClick:function(){t()},children:"close"}),Object(u.jsx)(kn,{place:e})]})}var Sn,Xn,Yn,Dn,Un=[{id:0,name:"24\uc2dc\ub3d9\uad6d\ub300\ucf54\uc778\ub178\ub798\uc5f0\uc2b5\uc7a5",address:"\uc11c\uc6b8 \uc911\uad6c \uc11c\uc560\ub85c1\uae38 10",latitude:37.56091632460447,longitude:126.99844451410752,price:"3\uace1\uc5d0 \ucc9c\uc6d0",photo:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210322_282%2F1616397113495viWn7_JPEG%2F3rlflNXEAm3dMyUTZQxsGPf0.jpg",comments:[],likes:0},{id:1,name:"\uc81c\uc774\ucf54\uc778\ub178\ub798\uc5f0\uc2b5\uc7a5",address:"\uc11c\uc6b8 \uc911\uad6c \ud544\ub3d9\ub85c 3 \uc0bc\uc9c0\ube4c\ub529 \uc9c0\ud558",latitude:37.56135575162827,longitude:126.99620195961862,price:"3\uace1\uc5d0 \ucc9c\uc6d0",photo:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190917_171%2F1568698196428qh6Jb_JPEG%2FPHeG2DFIUs56vXllopivLi8u.jpg",comments:[],likes:0},{id:2,name:"\ub9ac\ucf54\uc2a4\ud0c0 \ucf54\uc778\ub178\ub798\ubc29",address:"\uc11c\uc6b8 \uc911\uad6c \ud1f4\uacc4\ub85c 222",latitude:37.56152409392275,longitude:126.9963816693589,price:"3\uace1\uc5d0 \ucc9c\uc6d0",photo:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20191020_93%2F15715039352878rn9i_JPEG%2FrIEUlE2VIiCpln-KWDUv97-L.jpg",comments:[],likes:0}],Kn=j.a.div(Sn||(Sn=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n"]))),Jn=j.a.div(Xn||(Xn=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n"])));function qn(){var n=Object(r.useState)(null),e=Object(I.a)(n,2),t=e[0],i=e[1],a=Object(r.useState)(!1),c=Object(I.a)(a,2),o=c[0],s=c[1];Object(r.useEffect)((function(){y.initMap("kakao-map"),Un.map((function(n){y.drawMarker(n),y.addClickEventToMarker(n,d)}))}),[]);var d=function(n){i(Un[n]),s(!0)};return Object(u.jsxs)(Kn,{children:[Object(u.jsx)(H,{}),Object(u.jsx)(hn,{places:Un,onClickImg:d}),Object(u.jsx)(Jn,{id:"kakao-map"}),o&&Object(u.jsx)(Ln,{place:t,onClose:function(){s(!1)}}),Object(u.jsx)(Gn,{places:Un}),Object(u.jsx)(L,{})]})}var Bn,Hn,Wn=j.a.div(Yn||(Yn=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n"]))),Qn=j.a.div(Dn||(Dn=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n"])));function Zn(){return Object(u.jsxs)(Wn,{children:[Object(u.jsx)(Qn,{}),Object(u.jsx)(L,{})]})}var $n,ne,ee=j.a.div(Bn||(Bn=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n"]))),te=j.a.div(Hn||(Hn=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n"])));function ie(){return Object(u.jsxs)(ee,{children:[Object(u.jsx)(te,{}),Object(u.jsx)(L,{})]})}var ae,ce=j.a.div($n||($n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n"]))),oe=j.a.div(ne||(ne=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n"])));function re(){return Object(u.jsxs)(ce,{children:[Object(u.jsx)(oe,{}),Object(u.jsx)(L,{})]})}var se=j.a.div(ae||(ae=Object(l.a)(["\n  margin: auto;\n  max-width: 500px;\n  height: calc(var(--vh, 1vh) * 100);\n  box-shadow: 0 0 10px 2px gray;\n  overflow: hidden;\n"])));var de=function(){return Object(u.jsx)(se,{children:Object(u.jsxs)(h.a,{basename:"/cono",children:[Object(u.jsx)(b.a,{path:"/",exact:!0,component:v}),Object(u.jsx)(b.a,{path:"/map",component:qn}),Object(u.jsx)(b.a,{path:"/video",component:Zn}),Object(u.jsx)(b.a,{path:"/ranking",component:ie}),Object(u.jsx)(b.a,{path:"/my",component:re})]})})},pe=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),i(n),a(n),c(n),o(n)}))},le=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(le,"px")),window.addEventListener("resize",(function(){var n=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(n,"px"))})),p.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(de,{})}),document.getElementById("root")),pe()}},[[40,1,2]]]);
//# sourceMappingURL=main.b0960e4e.chunk.js.map