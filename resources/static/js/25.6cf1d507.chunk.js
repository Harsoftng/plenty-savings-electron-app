(this["webpackJsonpThriftShop-admin-app"]=this["webpackJsonpThriftShop-admin-app"]||[]).push([[25],{421:function(e,a,t){"use strict";var n=t(33),r=t(0),c=t.n(r),i=t(413),o=t(386),l=t(252),s=t(327),u=t(3);a.a=function(e){var a=e.type,t=e.children,m=e.title,d=e.className,b=void 0===d?"ml20 mr20":d,h=e.marginBottom,f=void 0===h||h,p=Object(r.useState)(!0),g=Object(n.a)(p,2),v=g[0],E=g[1];return c.a.createElement(o.a,{in:v,className:b},c.a.createElement(i.a,{className:Object(u.a)("alerts-alternate",{"mb-4":f}),severity:a,variant:"filled",action:c.a.createElement(l.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){E(!1)}},c.a.createElement(s.a,{fontSize:"inherit"}))},c.a.createElement("div",{className:"d-flex align-items-center align-content-start"},c.a.createElement("span",null,c.a.createElement("strong",{className:"d-block"},m),t))))}},429:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(666),i=t(667),o=t(668),l=t(612),s=t(702),u=t(246),m=Object(u.a)((function(){return{visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));a.a=function(e){var a=e.onSelectAllClick,t=e.order,n=e.orderBy,u=e.numSelected,d=e.rowCount,b=e.onRequestSort,h=e.headCells,f=m();return r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement(o.a,{padding:"checkbox"},r.a.createElement(l.a,{indeterminate:u>0&&u<d,checked:d>0&&u===d,onChange:a,inputProps:{"aria-label":"select all records"}})),h.map((function(e){return r.a.createElement(o.a,{key:e.id,style:(e.width,{width:e.width}),align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:n===e.id&&t},r.a.createElement(s.a,{active:n===e.id,direction:n===e.id?t:"asc",onClick:(a=e.id,function(e){b(e,a)})},e.label,n===e.id?r.a.createElement("span",{className:f.visuallyHidden},"desc"===t?"sorted descending":"sorted ascending"):null));var a}))))}},430:function(e,a,t){"use strict";var n=t(97),r=t(33),c=t(0),i=t.n(c),o=t(246),l=t(31),s=t(3),u=t(326),m=t(174),d=t(416),b=t(507),h=t(669),f=t(506),p=Object(o.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:"#FFF",backgroundColor:Object(l.e)("#070919",.3)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}}));a.a=function(e){var a=e.numSelected,t=e.onSearchChange,o=e.onSearchKeyPressed,l=e.children,g=e.searchValue,v=p(),E=Object(c.useState)(g),O=Object(r.a)(E,2),j=O[0],w=O[1],y=Object(f.a)((function(e){t&&t(e)}),200),N=Object(c.useCallback)((function(e){e.persist();var a=e.currentTarget.value;w(a),y.callback(e)}),[y]);return i.a.createElement(u.a,{className:Object(s.a)(v.root,Object(n.a)({},v.highlight,a>0))},a>0?i.a.createElement(m.a,{className:v.title,color:"inherit",variant:"subtitle1",component:"div"},a," selected"):i.a.createElement("div",{className:"fluid-width"},i.a.createElement("div",{className:"search-wrapper mr10 mb10"},i.a.createElement(d.a,{variant:"outlined",fullWidth:!0,size:"medium",value:j,id:"input-search",placeholder:"Search",margin:"normal",onChange:N,InputProps:{startAdornment:i.a.createElement(b.a,{position:"start"},i.a.createElement(h.a,null)),onKeyUp:function(e){o(e)}}}))),a>0&&l)}},432:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(441);a.a=function(){return r.a.createElement("div",{className:"mb-spacing-6-x2"},r.a.createElement("div",{className:"pl20 pr20 pb20 pt20 d-flex align-items-between justify-content-between flex-row"},r.a.createElement(c.a,{variant:"rect",animation:"wave",height:50,width:"30%",className:"mb10"}),r.a.createElement(c.a,{variant:"rect",animation:"wave",height:50,width:"30%",className:"mb10"})),r.a.createElement("div",{className:"pl20 pr20 pb20"},r.a.createElement(c.a,{variant:"rect",animation:"wave",height:60,width:"100%",className:"mb5"}),r.a.createElement(c.a,{variant:"rect",animation:"wave",height:30,width:"100%",className:"mb5"}),r.a.createElement(c.a,{variant:"rect",animation:"wave",height:30,width:"100%",className:"mb5"}),r.a.createElement(c.a,{variant:"rect",animation:"wave",height:30,width:"100%",className:"mb5"}),r.a.createElement(c.a,{variant:"rect",animation:"wave",height:30,width:"100%",className:"mb5"}),r.a.createElement(c.a,{variant:"rect",animation:"wave",height:30,width:"100%",className:"mb30"})))}},441:function(e,a,t){"use strict";var n=t(1),r=t(6),c=t(0),i=t(3),o=(t(5),t(7)),l=c.forwardRef((function(e,a){var t=e.animation,o=void 0===t?"pulse":t,l=e.classes,s=e.className,u=e.component,m=void 0===u?"span":u,d=e.height,b=e.variant,h=void 0===b?"text":b,f=e.width,p=Object(r.a)(e,["animation","classes","className","component","height","variant","width"]);return c.createElement(m,Object(n.a)({ref:a,className:Object(i.a)(l.root,l[h],s,!1!==o&&l[o])},p,{style:Object(n.a)({width:f,height:d},p.style)}))}));a.a=Object(o.a)((function(e){return{root:{display:"block",backgroundColor:e.palette.action.hover,height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(e.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}}}}),{name:"MuiSkeleton"})(l)},501:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(9);a.a=Object(c.a)(r.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zm3.17-7.83c.39-.39 1.02-.39 1.41 0L12 12.59l1.42-1.42c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 14l1.42 1.42c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L12 15.41l-1.42 1.42c-.39.39-1.02.39-1.41 0a.9959.9959 0 010-1.41L10.59 14l-1.42-1.42c-.39-.38-.39-1.02 0-1.41zM15.5 4l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-2.5z"}),"DeleteForeverRounded")},506:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0);function r(e,a,t){var r=this,c=Object(n.useRef)(null),i=Object(n.useRef)(0),o=Object(n.useRef)(null),l=Object(n.useRef)([]),s=Object(n.useRef)(),u=Object(n.useRef)(),m=Object(n.useRef)(e),d=Object(n.useRef)(!0);m.current=e;var b=!a&&0!==a&&"undefined"!==typeof window;if("function"!==typeof e)throw new TypeError("Expected a function");a=+a||0;var h=!!(t=t||{}).leading,f=!("trailing"in t)||!!t.trailing,p="maxWait"in t,g=p?Math.max(+t.maxWait||0,a):null,v=Object(n.useCallback)((function(e){var a=l.current,t=s.current;return l.current=s.current=null,i.current=e,u.current=m.current.apply(t,a)}),[]),E=Object(n.useCallback)((function(e,a){b&&cancelAnimationFrame(o.current),o.current=b?requestAnimationFrame(e):setTimeout(e,a)}),[b]),O=Object(n.useCallback)((function(e){if(!d.current)return!1;var t=e-c.current,n=e-i.current;return!c.current||t>=a||t<0||p&&n>=g}),[g,p,a]),j=Object(n.useCallback)((function(e){return o.current=null,f&&l.current?v(e):(l.current=s.current=null,u.current)}),[v,f]),w=Object(n.useCallback)((function(){var e=Date.now();if(O(e))return j(e);var t=e-c.current,n=e-i.current,r=a-t,o=p?Math.min(r,g-n):r;E(w,o)}),[g,p,O,E,j,a]),y=Object(n.useCallback)((function(){o.current&&(b?cancelAnimationFrame(o.current):clearTimeout(o.current)),i.current=0,l.current=c.current=s.current=o.current=null}),[b]),N=Object(n.useCallback)((function(){return o.current?j(Date.now()):u.current}),[j]);Object(n.useEffect)((function(){return d.current=!0,function(){d.current=!1}}),[]);var k=Object(n.useCallback)((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Date.now(),m=O(n);if(l.current=e,s.current=r,c.current=n,m){if(!o.current&&d.current)return i.current=c.current,E(w,a),h?v(c.current):u.current;if(p)return E(w,a),v(c.current)}return o.current||E(w,a),u.current}),[v,h,p,O,E,w,a]),x=Object(n.useCallback)((function(){return!!o.current}),[]);return Object(n.useMemo)((function(){return{callback:k,cancel:y,flush:N,pending:x}}),[k,y,N,x])}},507:function(e,a,t){"use strict";var n=t(1),r=t(6),c=t(0),i=(t(5),t(3)),o=t(174),l=t(7),s=t(89),u=c.forwardRef((function(e,a){var t=e.children,l=e.classes,u=e.className,m=e.component,d=void 0===m?"div":m,b=e.disablePointerEvents,h=void 0!==b&&b,f=e.disableTypography,p=void 0!==f&&f,g=e.position,v=e.variant,E=Object(r.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),O=Object(s.b)()||{},j=v;return v&&O.variant,O&&!j&&(j=O.variant),c.createElement(s.a.Provider,{value:null},c.createElement(d,Object(n.a)({className:Object(i.a)(l.root,u,h&&l.disablePointerEvents,O.hiddenLabel&&l.hiddenLabel,"filled"===j&&l.filled,{start:l.positionStart,end:l.positionEnd}[g],"dense"===O.margin&&l.marginDense),ref:a},E),"string"!==typeof t||p?t:c.createElement(o.a,{color:"textSecondary"},t)))}));a.a=Object(l.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(u)},514:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"c",(function(){return u})),t.d(a,"b",(function(){return m})),t.d(a,"d",(function(){return d}));var n=t(47),r=t(21);function c(){var e=Object(n.a)(["\n  mutation RestoreBranchRecord($branch_codes: [String!]!) {\n    response: restore_branch(branch_codes: $branch_codes) {\n      __typename\n      ... on Response {\n        status\n        code\n        message\n        errors\n      }\n      ... on StatusResponse {\n        status\n        code\n        message\n        ids\n      }\n    }\n  }\n"]);return c=function(){return e},e}function i(){var e=Object(n.a)(["\n  mutation DeleteBranchRecord($branch_codes: [String!]!, $status: String!) {\n    response: delete_branch(branch_codes: $branch_codes, status: $status) {\n      __typename\n      ... on Response {\n        status\n        code\n        message\n        errors\n      }\n      ... on StatusResponse {\n        status\n        code\n        message\n        ids\n      }\n    }\n  }\n"]);return i=function(){return e},e}function o(){var e=Object(n.a)(["\n  mutation EditBranchRecord(\n    $branch_id: String!\n    $branch_code: String!\n    $branch_name: String!\n    $address: String!\n    $manager_name: String!\n    $phone_number: String!\n    $email: String!\n  ) {\n    response: update_branch(\n      branch_id: $branch_id\n      branch_code: $branch_code\n      branch_name: $branch_name\n      address: $address\n      manager_name: $manager_name\n      phone_number: $phone_number\n      email: $email\n    ) {\n      status\n      code\n      message\n      errors\n    }\n  }\n"]);return o=function(){return e},e}function l(){var e=Object(n.a)(["\n  mutation CreateBranchRecord(\n    $branch_code: String!\n    $branch_name: String!\n    $address: String!\n    $manager_name: String!\n    $phone_number: String!\n    $email: String!\n  ) {\n    response: create_branch(\n      branch_code: $branch_code\n      branch_name: $branch_name\n      address: $address\n      manager_name: $manager_name\n      phone_number: $phone_number\n      email: $email\n    ) {\n      status\n      code\n      message\n      errors\n    }\n  }\n"]);return l=function(){return e},e}var s=Object(r.gql)(l()),u=Object(r.gql)(o()),m=Object(r.gql)(i()),d=Object(r.gql)(c())},603:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(9);a.a=Object(c.a)(r.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zm5.65-8.65c.2-.2.51-.2.71 0L16 14h-2v4h-4v-4H8l3.65-3.65zM15.5 4l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-2.5z"}),"RestoreFromTrashRounded")},691:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return ie}));var n=t(0),r=t.n(n),c=t(321),i=t(407),o=t(160),l=t(247),s=t(408),u=t(183),m=t(180),d=t(384),b=t(9),h=Object(b.a)(r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{fill:"none",d:"M24 0v24H0V0h24z",opacity:".87"}),r.a.createElement("path",{d:"M12.29 8.71L9.7 11.3c-.39.39-.39 1.02 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7z"})),"ArrowLeftRounded"),f=t(11),p=t(421),g=t(17),v=t(14),E=t(81),O=t(161),j=t.n(O),w=t(178),y=t(97),N=t(13),k=t(177),x=t(440),_=t(33),S=t(246),C=t(122),P=t(670),$=t(671),R=t(672),L=t(673),T=t(667),B=t(668),A=t(612),M=t(244),z=t(634),H=t(377),F=t(685),I=t(429),D=t(3),V=t(21),q=t(43),W=t(22),X=t(603),K=t(501),Q=t(390),J=t(674),U=t(432),G=t(430),Y=t(163),Z=t(44),ee=t(181),ae=t(198),te=t(514),ne=Object(S.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(0)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}})),re=[{id:"sn",width:"10px",numeric:!1,disablePadding:!1,label:"S/N"},{id:"action",width:"60px",numeric:!1,disablePadding:!1,label:"Action"},{id:"name",width:"",numeric:!1,disablePadding:!1,label:"Branch Name"},{id:"code",width:"",numeric:!1,disablePadding:!1,label:"Branch Code"},{id:"address",width:"",numeric:!1,disablePadding:!1,label:"Address"},{id:"manager_name",width:"",numeric:!1,disablePadding:!1,label:"Manager Name"},{id:"phone_number",width:"",numeric:!1,disablePadding:!1,label:"Phone Number"},{id:"email",width:"",numeric:!1,disablePadding:!1,label:"Email"}];function ce(){var e=ne(),a=Object(v.c)(),t=r.a.useState("page"),n=Object(_.a)(t,2),c=n[0],i=n[1],s=r.a.useState(""),u=Object(_.a)(s,2),m=u[0],d=u[1],b=r.a.useState("asc"),h=Object(_.a)(b,2),f=h[0],p=h[1],g=r.a.useState("calories"),O=Object(_.a)(g,2),S=O[0],ce=O[1],ie=r.a.useState([]),oe=Object(_.a)(ie,2),le=oe[0],se=oe[1],ue=r.a.useState([]),me=Object(_.a)(ue,2),de=me[0],be=me[1],he=r.a.useState(1),fe=Object(_.a)(he,2),pe=fe[0],ge=fe[1],ve=r.a.useState(0),Ee=Object(_.a)(ve,2),Oe=Ee[0],je=Ee[1],we=r.a.useState(10),ye=Object(_.a)(we,2),Ne=ye[0],ke=ye[1],xe=r.a.useState([]),_e=Object(_.a)(xe,2),Se=_e[0],Ce=_e[1],Pe=r.a.useState(!0),$e=Object(_.a)(Pe,2),Re=$e[0],Le=$e[1],Te=Object(ee.b)().getConfirmation,Be=Math.trunc(Oe/Ne),Ae=Oe/Ne,Me=Ae>Be?Be+1:Ae,ze=function(e){e&&(e.response.data&&e.response.paginatorInfo?(be(e.response.data.map((function(e){return Object.assign(e,{show:!0})}))),ge(parseInt(e.response.paginatorInfo.currentPage)),ke(parseInt(e.response.paginatorInfo.perPage)),je(parseInt(e.response.paginatorInfo.total))):Object(q.a)(e.response,a)),Le(!1)},He=function(e,t){if(e)if(a(Object(Y.a)()),"success"===e.response.status){var n=[];if(e.response.ids&&(n=e.response.ids),"delete"===t||"restore"===t){var r=de.filter((function(e){return-1===n.indexOf(e.branch_code)}));be(r)}se([]),a(Object(Z.a)(e.response.message,"success"))}else Object(q.a)(e.response,a)},Fe=function(e){Object(q.b)(e,a)},Ie=Object(V.useQuery)(ae.c,{errorPolicy:"all",fetchPolicy:"no-cache",variables:{page:1},onCompleted:function(e){ze(e),i("page")},onError:Fe}).loading,De=Object(V.useLazyQuery)(ae.c,{errorPolicy:"all",fetchPolicy:"no-cache",onCompleted:function(e){ze(e),i("page")},onError:Fe}),Ve=Object(_.a)(De,2),qe=Ve[0],We=Ve[1].loading,Xe=Object(V.useLazyQuery)(ae.d,{errorPolicy:"all",fetchPolicy:"no-cache",onCompleted:function(e){ze(e),i("search")},onError:Fe}),Ke=Object(_.a)(Xe,2),Qe=Ke[0],Je=Ke[1].loading,Ue=Object(V.useMutation)(te.d,{errorPolicy:"all",fetchPolicy:"no-cache",onCompleted:function(e){He(e,"restore")},onError:Fe}),Ge=Object(_.a)(Ue,1)[0],Ye=Object(V.useMutation)(te.b,{errorPolicy:"all",fetchPolicy:"no-cache",onCompleted:function(e){He(e,"delete")},onError:Fe}),Ze=Object(_.a)(Ye,1)[0],ea=function(e,a){var t="a".concat(a);if(Se["a"+a]){Se[t];var n=Object(k.a)(Se,[t].map(x.a));Ce(Object(N.a)(Object(N.a)({},n),{},Object(y.a)({},t,null)))}},aa=function(){var e=Object(w.a)(j.a.mark((function e(a,t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Le(!0),n="%".concat(m,"%"),"search"!==c){e.next=7;break}return e.next=5,Qe({variables:{page:t,search:n}});case 5:e.next=9;break;case 7:return e.next=9,qe({variables:{page:t}});case 9:ge(t);case 10:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),ta=function(){var e=Object(w.a)(j.a.mark((function e(a){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(13!==a.keyCode){e.next=6;break}return t=a.target.value,e.next=4,Qe({variables:{page:1,search:"%".concat(t,"%")}});case 4:ge(1),d(t);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),na=function(){var e=Object(w.a)(j.a.mark((function e(){var t,n,r,c=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.length>0&&void 0!==c[0]?c[0]:[],0!==(n=0===t.length?le:t).length){e.next=6;break}return r="Please select the branch offices to restore!",a(Object(Z.a)(r,"error")),e.abrupt("return");case 6:return e.next=8,Te({title:"Attention!",type:"warning",okText:"Proceed",cancelText:"Cancel",message:"Are you sure you would like to restore the selected branch office(s) from trash?"});case 8:if(!e.sent){e.next=13;break}return a(Object(Y.a)(!0)),e.next=13,Ge({variables:{branch_codes:n}});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ra=function(){var e=Object(w.a)(j.a.mark((function e(){var t,n,r,c,i=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=i.length>0&&void 0!==i[0]?i[0]:[],n=i.length>1&&void 0!==i[1]?i[1]:"force",0!==(r=0===t.length?le:t).length){e.next=7;break}return c="Please select the branch offices to delete permanently!",a(Object(Z.a)(c,"error")),e.abrupt("return");case 7:return console.log({emails:r,status:n}),c="Are you sure you would like to delete the selected branch office(s) permanently?. This action will delete this branch office and all its associated transaction records permanently from the database. If this office has been used to record transactions, customers or staff, please use the discontinue action instead. Please note that this action is irreversible.",e.next=11,Te({title:"Attention!",type:"warning",okText:"Proceed",cancelText:"Cancel",message:c});case 11:if(!e.sent){e.next=16;break}return a(Object(Y.a)(!0)),e.next=16,Ze({variables:{branch_codes:r,status:n}});case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:e.root},Ie||We||Je||Re?r.a.createElement(C.a,{className:e.paper},r.a.createElement(U.a,null)):r.a.createElement(C.a,{className:e.paper},r.a.createElement(G.a,{numSelected:le.length,onSearchChange:function(e){var a=e.target.value;a&&(a=a.toLowerCase());var t=de.map((function(e){return-1!==e.branch_code.toLowerCase().indexOf(a)||-1!==e.branch_name.toLowerCase().indexOf(a)||-1!==e.address.toLowerCase().indexOf(a)||-1!==e.manager_name.toLowerCase().indexOf(a)||-1!==e.phone_number.toLowerCase().indexOf(a)||-1!==e.email.toLowerCase().indexOf(a)?e.show=!0:e.show=!1,e}));be(t)},searchValue:m,setSearchValue:d,onSearchKeyPressed:ta},r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{size:"medium",className:"m-2",color:"primary","aria-label":"outlined primary button group"},r.a.createElement(o.a,{title:"Restore the selected branch office(s) from trash"},r.a.createElement(l.a,{className:"btn-transition-none btn-neutral-first mr10 text-white",onClick:function(){na([])}},r.a.createElement(X.a,{className:"mr5"})," Restore")),r.a.createElement(o.a,{title:"Delete the selected branch office(s) permanently"},r.a.createElement(l.a,{className:"btn-transition-none btn-neutral-first text-white",onClick:function(){ra([])}},r.a.createElement(K.a,{className:"mr5"})," Delete"))))),r.a.createElement($.a,{className:"pb30"},r.a.createElement(R.a,{className:Object(D.a)(e.table,"table text-nowrap mb-0"),"aria-labelledby":"tableTitle",size:"medium","aria-label":"enhanced table"},r.a.createElement(I.a,{classes:e,numSelected:le.length,order:f,orderBy:S,onSelectAllClick:function(e){if(e.target.checked){var a=de.map((function(e){return e.branch_code}));se(a)}else se([])},onRequestSort:function(e,a){p(S===a&&"asc"===f?"desc":"asc"),ce(a)},headCells:re,rowCount:de.length}),r.a.createElement(L.a,null,Object(E.f)(de,Object(E.c)(f,S)).map((function(e,a){var t,n=(t=e.branch_code,-1!==le.indexOf(t)),c="enhanced-table-checkbox-".concat(a),i=Ne*(pe-1)+(a+1);return e.show?r.a.createElement(T.a,{hover:!0,onClick:function(a){return function(e,a){var t=le.indexOf(a),n=[];-1===t?n=n.concat(le,a):0===t?n=n.concat(le.slice(1)):t===le.length-1?n=n.concat(le.slice(0,-1)):t>0&&(n=n.concat(le.slice(0,t),le.slice(t+1))),se(n)}(0,e.branch_code)},role:"checkbox","aria-checked":n,tabIndex:-1,key:e.branch_code,selected:n},r.a.createElement(B.a,{padding:"checkbox"},r.a.createElement(A.a,{checked:n,inputProps:{"aria-labelledby":c}})),r.a.createElement(B.a,{align:"left"},i),r.a.createElement(B.a,{padding:"none"},r.a.createElement(l.a,{size:"small",onClick:function(e){!function(e,a){var t=e.currentTarget,n="a".concat(a);if(Se["a"+a]){Se[n];var r=Object(k.a)(Se,[n].map(x.a));Ce(Object(N.a)(Object(N.a)({},r),{},Object(y.a)({},n,t)))}else Ce(Object(N.a)(Object(N.a)({},Se),{},Object(y.a)({},n,t)))}(e,a)},className:"btn-second btn-icon d-40 p-0 btn-animated-icon-sm"},r.a.createElement(W.a,{icon:["fas","ellipsis-h"],className:"font-size-lg"})),r.a.createElement(M.a,{anchorEl:Se["a"+a],open:Boolean(Se["a"+a]),keepMounted:!0,onClose:function(e){ea(0,a)},classes:{list:"p-0"},getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},r.a.createElement(z.a,{button:!0,onClick:function(t){ea(0,a),ra([e.branch_code])}},r.a.createElement("div",{className:"mr10"},r.a.createElement(K.a,null)),r.a.createElement("span",null,"Delete Forever")),r.a.createElement(H.a,{className:"my-2"}),r.a.createElement(z.a,{button:!0,onClick:function(t){ea(0,a),na([e.branch_code])}},r.a.createElement("div",{className:"mr10"},r.a.createElement(X.a,null)),r.a.createElement("span",null,"Restore Record")),r.a.createElement(H.a,{className:"my-2"}),r.a.createElement(z.a,{button:!0,onClick:function(t){var n="/print/branches/view/".concat(e.branch_code);ea(0,a),E.a.launchNewWindow(n,1e3,700)}},r.a.createElement("div",{className:"mr10"},r.a.createElement(Q.a,null)),r.a.createElement("span",null,"View Profile")))),r.a.createElement(B.a,{component:"th",id:c,scope:"row",padding:"none"},r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("div",null,r.a.createElement("span",{className:"font-weight-bold text-black",title:"..."},e.branch_name),r.a.createElement("span",{className:"text-black-50 d-block"},"Branch Office")))),r.a.createElement(B.a,{align:"left"},e.branch_code),r.a.createElement(B.a,{align:"left"},e.address||"-N/A-"),r.a.createElement(B.a,{align:"left"},e.manager_name||"-N/A-"),r.a.createElement(B.a,{align:"left"},e.phone_number||"-N/A-"),r.a.createElement(B.a,{align:"left"},e.email||"-N/A-")):null})),0===de.length&&r.a.createElement(T.a,{style:{height:53}},r.a.createElement(B.a,{colSpan:11,className:"bg-gray-300"},r.a.createElement(J.a,null)," No records found"))))),r.a.createElement("div",{className:"card-footer py-3 d-flex justify-content-between"},r.a.createElement(F.a,{className:"pagination-second",variant:"outlined",page:pe,onChange:aa,count:Me}))))}function ie(){var e=Object(g.g)(),a=Object(v.d)((function(e){return e.profile}));return Object(n.useEffect)((function(){E.a.enforcePermissions(a,e,"view-branch")}),[a,e]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{title:"View Branch Offices (Trash)"}),r.a.createElement(u.a,{titleHeading:"View Branch Offices (Trash)",titleDescription:"Manage all branch offices that have been moved to trash (deleted).",breadCrumbTitle:"Branch Management",breadCrumbSubTitle:"Manage Branch Offices (Trash)",Icon:d.a}),r.a.createElement(c.a,null,r.a.createElement(i.a,{className:"card-box mb-spacing-6-x2"},r.a.createElement("div",{className:"card-header pr-2"},r.a.createElement("div",{className:"card-header--title"},r.a.createElement("small",null,"BRANCH OFFICES"),r.a.createElement("b",null,"List of deleted Branch Offices")),r.a.createElement("div",{className:"card-header--actions"},r.a.createElement("div",{className:"d-flex align-items-center justify-content-center"},r.a.createElement(o.a,{arrow:!0,title:"Manage Branch Offices",placement:"top"},r.a.createElement(f.b,{to:"/branches/manage"},r.a.createElement(l.a,{variant:"outlined",className:"btn-outline-second btn-sm mr-2 rounded-pill"},r.a.createElement(h,null)," Back")))))),r.a.createElement(s.a,{className:"p-0"},r.a.createElement(p.a,{title:"How to Use!",type:"info",className:"",marginBottom:!1},"The table below shows the list of branch offices that have been deleted from the system. To perform an action (delete, restore etc) on any record, please select an action from the action menu close to the record"),r.a.createElement(c.a,{item:!0,md:12},r.a.createElement(ce,null))))))}}}]);