(this["webpackJsonpThriftShop-admin-app"]=this["webpackJsonpThriftShop-admin-app"]||[]).push([[24],{428:function(e,t,a){"use strict";var n=a(33),s=a(177),r=a(0),c=a.n(r),i=a(687),o=a(416),m=a(420);t.a=function(e){var t=e.label,a=e.data,l=e.limitTags,d=void 0===l?2:l,u=e.loading,_=void 0!==u&&u,h=e.onItemSelected,b=void 0===h?function(e){return e}:h,p=Object(s.a)(e,["label","data","limitTags","loading","onItemSelected"]),f=Object(m.d)(p),g=Object(n.a)(f,3),v=g[0],E=g[1],w=g[2],S=Object(r.useState)(v.value),O=Object(n.a)(S,2),y=O[0],j=O[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,Object.assign({options:a,value:v.value.text||"",inputValue:y.text||"",limitTags:d,openOnFocus:!0,autoHighlight:!0,loading:_},p,{onChange:function(e,t){var a={text:"",value:""};t?(w.setValue(t),j(t.text||a),b(t.value||a)):(w.setValue(a),j(a),b(a))},onInputChange:function(e,t){j({text:t,value:t})},getOptionLabel:function(e){return e?e.text?e.text:e:""},getOptionSelected:function(e,t){return e.value===t},style:{width:"100%"},renderInput:function(e){return c.a.createElement(o.a,Object.assign({},e,{label:t},p,{variant:"outlined"}))}})),E.touched&&E.error?c.a.createElement("div",{className:"oak-input-error"},E.error.value):null)}},431:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"d",(function(){return u})),a.d(t,"e",(function(){return _})),a.d(t,"f",(function(){return h})),a.d(t,"b",(function(){return b})),a.d(t,"c",(function(){return p}));var n=a(47),s=a(21);function r(){var e=Object(n.a)(["\n  query GetSettings {\n    response: settings {\n      id\n      institution_code\n      shop_name\n      email_address\n      logo_url\n      logo_thumbnail_url\n      address\n      shop_owner_name\n      shop_owner_desc\n      phone1\n      phone2\n      dormant_phone_number\n      duplicate_transaction\n      auto_verify_customers\n      take_sms_commission\n      sms_commission_amount\n      alert_username\n      alert_password\n      alert_business_name\n      default_sender_id\n\n      send_customer_registration_email\n      send_customer_registration_sms\n      send_customer_credit_email\n      send_customer_credit_sms\n      send_customer_debit_email\n      send_customer_debit_sms\n      send_staff_registration_email\n      send_staff_registration_sms\n      send_user_registration_email\n      send_user_registration_sms\n    }\n  }\n"]);return r=function(){return e},e}function c(){var e=Object(n.a)(["\n  query GetDashboardStatistics {\n    response: dashboard_statistics {\n      active_staff_count\n      deleted_staff_count\n      active_user_count\n      suspended_user_count\n      sms_units_balance\n      active_staff_count\n      deleted_staff_count\n      active_user_count\n      suspended_user_count\n      active_customer_count\n      deleted_customer_count\n      unverified_customer_count\n      total_deposit_count\n      total_withdrawal_count\n      total_transactions_count\n      unapproved_transactions_count\n    }\n  }\n"]);return c=function(){return e},e}function i(){var e=Object(n.a)(["\n  query GetStateLGALists {\n    state_list {\n      state_id\n      state_name\n    }\n    lga_list {\n      lga_id\n      state_id\n      lga_name\n    }\n    branches {\n      data {\n        branch_code\n        branch_name\n      }\n    }\n  }\n"]);return i=function(){return e},e}function o(){var e=Object(n.a)(["\n  query GetStaffAndBranchesAndUsersLists {\n    staffs(page: 1, first: 200, orderBy: [{ column: NAME, order: ASC }]) {\n      data {\n        staff_id\n        name\n      }\n    }\n    branches {\n      data {\n        branch_code\n        branch_name\n      }\n    }\n    users(page: 1, first: 200, orderBy: [{ column: NAME, order: ASC }]) {\n      data {\n        name\n        email\n      }\n    }\n  }\n"]);return o=function(){return e},e}function m(){var e=Object(n.a)(["\n  query GetStaffAndBranchesLists {\n    staffs(page: 1, first: 200, orderBy: [{ column: NAME, order: ASC }]) {\n      data {\n        staff_id\n        name\n      }\n    }\n    branches {\n      data {\n        branch_code\n        branch_name\n      }\n    }\n  }\n"]);return m=function(){return e},e}function l(){var e=Object(n.a)(["\n  query GetBankStateLGALists {\n    staffs(page: 1, first: 200, orderBy: [{ column: NAME, order: ASC }]) {\n      data {\n        staff_id\n        name\n      }\n    }\n    state_list {\n      state_id\n      state_name\n    }\n    lga_list {\n      lga_id\n      state_id\n      lga_name\n    }\n    branches {\n      data {\n        branch_code\n        branch_name\n      }\n    }\n  }\n"]);return l=function(){return e},e}var d=Object(s.gql)(l()),u=Object(s.gql)(m()),_=Object(s.gql)(o()),h=Object(s.gql)(i()),b=Object(s.gql)(c()),p=Object(s.gql)(r())},441:function(e,t,a){"use strict";var n=a(1),s=a(6),r=a(0),c=a(3),i=(a(5),a(7)),o=r.forwardRef((function(e,t){var a=e.animation,i=void 0===a?"pulse":a,o=e.classes,m=e.className,l=e.component,d=void 0===l?"span":l,u=e.height,_=e.variant,h=void 0===_?"text":_,b=e.width,p=Object(s.a)(e,["animation","classes","className","component","height","variant","width"]);return r.createElement(d,Object(n.a)({ref:t,className:Object(c.a)(o.root,o[h],m,!1!==i&&o[i])},p,{style:Object(n.a)({width:b,height:u},p.style)}))}));t.a=Object(i.a)((function(e){return{root:{display:"block",backgroundColor:e.palette.action.hover,height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(e.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}}}}),{name:"MuiSkeleton"})(o)},481:function(e,t,a){"use strict";var n=a(13),s=a(33),r=a(177),c=a(0),i=a.n(c),o=a(420),m=a(507),l=a(252),d=a(416),u=a(9),_=Object(u.a)(i.a.createElement(i.a.Fragment,null,i.a.createElement("g",{fill:"none"},i.a.createElement("path",{d:"M0 0h24v24H0V0z"}),i.a.createElement("path",{d:"M0 0h24v24H0V0z",opacity:".87"})),i.a.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"})),"LockOutlined"),h=Object(u.a)(i.a.createElement("path",{d:"M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"VisibilityRounded"),b=Object(u.a)(i.a.createElement("path",{d:"M12 6.5c2.76 0 5 2.24 5 5 0 .51-.1 1-.24 1.46l3.06 3.06c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l2.17 2.17c.47-.14.96-.24 1.47-.24zM2.71 3.16c-.39.39-.39 1.02 0 1.41l1.97 1.97C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.97-.3 4.31-.82l2.72 2.72c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.13 3.16c-.39-.39-1.03-.39-1.42 0zM12 16.5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07L14.14 16c-.65.32-1.37.5-2.14.5zm2.97-5.33c-.15-1.4-1.25-2.49-2.64-2.64l2.64 2.64z"}),"VisibilityOffRounded"),p=a(506);t.a=function(e){var t=e.label,a=Object(r.a)(e,["label"]),u=Object(o.d)(a),f=Object(s.a)(u,2),g=f[0],v=f[1],E=Object(c.useState)(g.value),w=Object(s.a)(E,2),S=w[0],O=w[1],y=Object(c.useState)({password:"",showPassword:!1}),j=Object(s.a)(y,2),N=j[0],x=j[1],$=function(){x(Object(n.a)(Object(n.a)({},N),{},{showPassword:!N.showPassword}))},k=function(e){e.preventDefault()},z=Object(p.a)((function(e){g.onChange&&g.onChange(e)}),200);Object(c.useEffect)((function(){""===g.value&&O("")}),[g.value]);var C=Object(c.useCallback)((function(e){e.persist();var t=e.currentTarget.value;O(t),z.callback(e)}),[z]),A={};return A=a.icon?{startAdornment:i.a.createElement(m.a,{position:"start"},i.a.createElement(_,null)),endAdornment:i.a.createElement(m.a,{position:"end"},i.a.createElement(l.a,{"aria-label":"Toggle password visibility",onClick:$,onMouseDown:k},N.showPassword?i.a.createElement(h,null):i.a.createElement(b,null)))}:{endAdornment:i.a.createElement(m.a,{position:"end"},i.a.createElement(l.a,{"aria-label":"Toggle password visibility",onClick:$,onMouseDown:k},N.showPassword?i.a.createElement(h,null):i.a.createElement(b,null)))},i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,Object.assign({fullWidth:!0,variant:"outlined",label:t,value:S,onChange:C,onBlur:g.onBlur},a,{type:N.showPassword?"text":"password",InputProps:A})),v.touched&&v.error?i.a.createElement("div",{className:"oak-input-error"},v.error):null)}},498:function(e,t,a){"use strict";var n=a(33),s=a(177),r=a(0),c=a.n(r),i=a(420),o=a(380);t.a=function(e){var t=e.label,a=e.size,m=void 0===a?"medium":a,l=e.description,d=e.color,u=void 0===d?"secondary":d,_=Object(s.a)(e,["label","size","description","color"]),h=Object(i.d)(_),b=Object(n.a)(h,3),p=b[0],f=b[1],g=b[2],v=Object(r.useState)("Yes"===p.value),E=Object(n.a)(v,2),w=E[0],S=E[1];return Object(r.useEffect)((function(){""===p.value?S(!1):S("Yes"===p.value)}),[p.value]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"d-flex align-items-center mr-4"},c.a.createElement("div",{className:"d-60 d-flex align-items-center justify-content-center mr-3"},c.a.createElement(o.a,Object.assign({checked:w,color:u},_,{className:"switch-".concat(m),onChange:function(e){S(e.target.checked),g.setValue(e.target.checked?"Yes":"No")}}))),c.a.createElement("div",null,c.a.createElement("div",{className:"font-weight-bold fs14"},t),c.a.createElement("span",{className:"text-black opacity-5 d-block fs12"},l))),f.touched&&f.error?c.a.createElement("div",{className:"oak-input-error"},f.error):null)}},521:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(9);t.a=Object(r.a)(s.a.createElement("path",{d:"M15 16h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1zm1-6h1v4h-1v-4zm-7 6h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1zm1-6h1v4h-1v-4zM6 8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1V9c0-.55-.45-1-1-1zM2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2zm17 12H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z"}),"MoneyRounded")},550:function(e,t,a){"use strict";var n=a(177),s=a(0),r=a.n(s),c=a(3);t.a=function(e){var t=e.children,a=e.activeTab,s=e.index,i=Object(n.a)(e,["children","activeTab","index"]);return r.a.createElement("div",Object.assign({className:Object(c.a)("tab-item-wrapper pn mn",{active:a===s}),style:{overflow:"visible"}},i),t)}},551:function(e,t,a){"use strict";var n=a(177),s=a(0),r=a.n(s),c=a(159);t.a=function(e){var t=e.onClick,a=e.index,s=e.activeTab,i=e.title,o=void 0===i?"":i,m=e.icon,l=void 0===m?null:m,d=Object(n.a)(e,["onClick","index","activeTab","title","icon"]);return r.a.createElement(c.a,Object.assign({button:!0,disableRipple:!0,selected:s===a},d,{onClick:function(){t()}}),r.a.createElement("span",{className:"font-size-lg"}," ",l," ",o),r.a.createElement("div",{className:"divider"}))}},552:function(e,t,a){"use strict";var n=a(177),s=a(0),r=a.n(s),c=a(320);t.a=function(e){var t=e.children,a=e.color,s=void 0===a?"info":a,i=Object(n.a)(e,["children","color"]);return r.a.createElement(c.a,Object.assign({component:"div",className:"nav-line pt20 pl20 pr20 d-flex nav-line-alt nav-tabs-".concat(s)},i),t)}},553:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(441);t.a=function(e){var t=e.width,a=void 0===t?"100%":t,n=e.height,c=void 0===n?60:n,i=e.className,o=void 0===i?"mb20":i;return s.a.createElement(r.a,{variant:"rect",animation:"wave",width:a,height:c,className:o})}},629:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(9);t.a=Object(r.a)(s.a.createElement("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"}),"SmsRounded")},680:function(e,t,a){"use strict";a.r(t);var n=a(33),s=a(0),r=a.n(s),c=a(180),i=a(122),o=a(14),m=a(43),l=a(21),d=a(81),u=a(431),_=a(9),h=Object(_.a)(r.a.createElement("path",{d:"M6.21 13.97l1.2 2.07c.08.13.23.18.37.13l1.49-.6c.31.24.64.44 1.01.59l.22 1.59c.03.14.15.25.3.25h2.4c.15 0 .27-.11.3-.26l.22-1.59c.36-.15.7-.35 1.01-.59l1.49.6c.14.05.29 0 .37-.13l1.2-2.07c.08-.13.04-.29-.07-.39l-1.27-.99c.03-.19.04-.39.04-.58 0-.2-.02-.39-.04-.59l1.27-.99c.11-.09.15-.26.07-.39l-1.2-2.07c-.08-.13-.23-.18-.37-.13l-1.49.6c-.31-.24-.64-.44-1.01-.59l-.22-1.59c-.03-.14-.15-.25-.3-.25h-2.4c-.15 0-.27.11-.3.26l-.22 1.59c-.36.15-.71.34-1.01.58l-1.49-.6c-.14-.05-.29 0-.37.13l-1.2 2.07c-.08.13-.04.29.07.39l1.27.99c-.03.2-.05.39-.05.59 0 .2.02.39.04.59l-1.27.99c-.11.1-.14.26-.06.39zM12 10.29c.94 0 1.71.77 1.71 1.71s-.77 1.71-1.71 1.71-1.71-.77-1.71-1.71.77-1.71 1.71-1.71zM19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm0 16H5V5h14v14z"}),"SettingsApplicationsOutlined"),b=a(368),p=Object(_.a)(r.a.createElement("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71L18 16z"}),"NotificationsRounded"),f=a(597),g=a(183),v=a(550),E=a(551),w=a(552),S=a(655),O=a(161),y=a.n(O),j=a(178),N=a(420),x=a(401),$=a(629),k=a(381),z=a(408),C=a(321),A=a(407),M=a(522),V=a(247),P=a(423),T=a(96),H=a(44),B=a(181),L=a(47);function q(){var e=Object(L.a)(["\n  mutation saveAccountSettings(\n    $institution_code: String!\n    $shop_name: String!\n    $email_address: String!\n    $address: String!\n    $shop_owner_name: String!\n    $shop_owner_desc: String!\n    $phone1: String!\n    $phone2: String!\n    $dormant_phone_number: String!\n    $auto_verify_customers: String!\n    $take_sms_commission: String!\n    $sms_commission_amount: String!\n    $alert_username: String!\n    $alert_password: String!\n    $alert_business_name: String!\n    $default_sender_id: String!\n  ) {\n    response: save_general_settings(\n      institution_code: $institution_code\n      shop_name: $shop_name\n      email_address: $email_address\n      address: $address\n      shop_owner_name: $shop_owner_name\n      shop_owner_desc: $shop_owner_desc\n      phone1: $phone1\n      phone2: $phone2\n      dormant_phone_number: $dormant_phone_number\n      auto_verify_customers: $auto_verify_customers\n      take_sms_commission: $take_sms_commission\n      sms_commission_amount: $sms_commission_amount\n      alert_username: $alert_username\n      alert_password: $alert_password\n      alert_business_name: $alert_business_name\n      default_sender_id: $default_sender_id\n    ) {\n      __typename\n      ... on Response {\n        status\n        code\n        message\n        errors\n      }\n    }\n  }\n"]);return q=function(){return e},e}function I(){var e=Object(L.a)(["\n  mutation saveNotificationSettings(\n    $send_customer_registration_email: String!\n    $send_customer_registration_sms: String!\n    $send_staff_registration_email: String!\n    $send_staff_registration_sms: String!\n    $send_customer_credit_email: String!\n    $send_customer_credit_sms: String!\n    $send_customer_debit_email: String!\n    $send_customer_debit_sms: String!\n    $send_user_registration_email: String!\n    $send_user_registration_sms: String!\n  ) {\n    response: save_notification_settings(\n      send_customer_registration_email: $send_customer_registration_email\n      send_customer_registration_sms: $send_customer_registration_sms\n      send_staff_registration_email: $send_staff_registration_email\n      send_staff_registration_sms: $send_staff_registration_sms\n      send_customer_credit_email: $send_customer_credit_email\n      send_customer_credit_sms: $send_customer_credit_sms\n      send_customer_debit_email: $send_customer_debit_email\n      send_customer_debit_sms: $send_customer_debit_sms\n      send_user_registration_email: $send_user_registration_email\n      send_user_registration_sms: $send_user_registration_sms\n    ) {\n      __typename\n      ... on Response {\n        status\n        code\n        message\n        errors\n      }\n    }\n  }\n"]);return I=function(){return e},e}var D=Object(l.gql)(I()),F=Object(l.gql)(q()),R=a(185),G=a(498),X=function(e){var t=e.settings,a=Object(o.c)(),s=Object(l.useMutation)(D,{errorPolicy:"all",fetchPolicy:"no-cache"}),c=Object(n.a)(s,1)[0],i=Object(B.b)().getConfirmation,d={send_customer_registration_email:t.send_customer_registration_email,send_customer_registration_sms:t.send_customer_registration_sms,send_customer_credit_email:t.send_customer_credit_email,send_customer_credit_sms:t.send_customer_credit_sms,send_customer_debit_email:t.send_customer_debit_email,send_customer_debit_sms:t.send_customer_debit_sms,send_staff_registration_email:t.send_staff_registration_email,send_staff_registration_sms:t.send_staff_registration_sms,send_user_registration_email:t.send_user_registration_email,send_user_registration_sms:t.send_user_registration_sms},u=P.b().shape({}),_=function(){var e=Object(j.a)(y.a.mark((function e(t,n){var s,r,o,l,d;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=n.setSubmitting,n.resetForm,e.next=3,i({title:"Attention!",type:"warning",okText:"Proceed",cancelText:"Cancel",message:"Are you sure you would like to save these settings?"});case 3:if(r=e.sent,o={send_customer_registration_email:t.send_customer_registration_email,send_customer_registration_sms:t.send_customer_registration_sms,send_customer_credit_email:t.send_customer_credit_email,send_customer_credit_sms:t.send_customer_credit_sms,send_customer_debit_email:t.send_customer_debit_email,send_customer_debit_sms:t.send_customer_debit_sms,send_staff_registration_email:t.send_staff_registration_email,send_staff_registration_sms:t.send_staff_registration_sms,send_user_registration_email:t.send_user_registration_email,send_user_registration_sms:t.send_user_registration_sms},!r){e.next=11;break}return console.log({variables:o}),e.next=9,c({variables:o});case 9:(l=e.sent).data&&("success"===(d=l.data).response.status?(a(Object(H.a)(d.response.message,"success")),s(!1)):Object(m.a)(d.response,a));case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.c,{initialValues:d,onSubmit:_,validateOnChange:!0,validateOnBlur:!0,validationSchema:u},(function(e){var t=e.isSubmitting;return r.a.createElement(N.b,{className:"",autoComplete:"false"},r.a.createElement(z.a,null,r.a.createElement(C.a,{container:!0,spacing:3,className:"prn pln mtn"},r.a.createElement(C.a,{item:!0,md:6},r.a.createElement(R.a,{title:"Email Notification Settings",extraClasses:"ml20 mb30 mr20 mt20",align:"center",icon:r.a.createElement(x.a,null)}),r.a.createElement(C.a,{item:!0,md:12},r.a.createElement(A.a,{className:"shadow-sm p-2 mt10 ml10 mr10 rounded-sm"},r.a.createElement(G.a,{label:"Send registration success email to customers",color:"primary",description:"Specify whether the system should send a welcome email to customers on successful registration",name:"send_customer_registration_email"}))),r.a.createElement(C.a,{item:!0,md:12},r.a.createElement(A.a,{className:"shadow-sm p-2 mt10 ml10 mr10 rounded-sm"},r.a.createElement(G.a,{label:"Send account credit email to customers",color:"primary",description:"Specify whether the system should send an email to customers when their account is credited",name:"send_customer_credit_email"}))),r.a.createElement(C.a,{item:!0,md:12},r.a.createElement(A.a,{className:"shadow-sm p-2 mt10 ml10 mr10 rounded-sm"},r.a.createElement(G.a,{label:"Send account debit email to customers",color:"primary",description:"Specify whether the system should send an email to customers when their account is debited",name:"send_customer_debit_email"}))),r.a.createElement(C.a,{item:!0,md:12},r.a.createElement(A.a,{className:"shadow-sm p-2 mt10 ml10 mr10 rounded-sm"},r.a.createElement(G.a,{label:"Send welcome email to staff",color:"primary",description:"Specify whether the system should send an email to staff on successful registration",name:"send_staff_registration_email"}))),r.a.createElement(C.a,{item:!0,md:12},r.a.createElement(A.a,{className:"shadow-sm p-2 mt10 ml10 mr10 rounded-sm"},r.a.createElement(G.a,{label:"Send welcome email to system user accounts",color:"primary",description:"Specify whether the system should send an email to user accounts on successful registration",name:"send_user_registration_email"})))),r.a.createElement(C.a,{item:!0,md:6},r.a.createElement(R.a,{title:"SMS Notification Settings",extraClasses:"ml20 mb30 mr20 mt20",align:"center",icon:r.a.createElement($.a,null)}),r.a.createElement(C.a,{item:!0,md:12},r.a.createElement(A.a,{className:"shadow-sm p-2 mt10 ml10 mr10 rounded-sm"},r.a.createElement(G.a,{label:"Send registration success sms to customers",color:"primary",description:"Specify whether the system should send a welcome sms to customers on successful registration",name:"send_customer_registration_sms"}))),r.a.createElement(C.a,{item:!0,md:12},r.a.createElement(A.a,{className:"shadow-sm p-2 mt10 ml10 mr10 rounded-sm"},r.a.createElement(G.a,{label:"Send account credit sms to customers",color:"primary",description:"Specify whether the system should send a sms to customers when their account is credited",name:"send_customer_credit_sms"}))),r.a.createElement(C.a,{item:!0,md:12},r.a.createElement(A.a,{className:"shadow-sm p-2 mt10 ml10 mr10 rounded-sm"},r.a.createElement(G.a,{label:"Send account debit sms to customers",color:"primary",description:"Specify whether the system should send a sms to customers when their account is debited",name:"send_customer_debit_sms"}))),r.a.createElement(C.a,{item:!0,md:12},r.a.createElement(A.a,{className:"shadow-sm p-2 mt10 ml10 mr10 rounded-sm"},r.a.createElement(G.a,{label:"Send welcome sms to staff",color:"primary",description:"Specify whether the system should send a sms to staff on successful registration",name:"send_staff_registration_sms"}))),r.a.createElement(C.a,{item:!0,md:12},r.a.createElement(A.a,{className:"shadow-sm p-2 mt10 ml10 mr10 rounded-sm"},r.a.createElement(G.a,{label:"Send welcome sms to system user accounts",color:"primary",description:"Specify whether the system should send a sms to user accounts on successful registration",name:"send_user_registration_sms"}))))),r.a.createElement("div",{className:"mt30"})),r.a.createElement("div",{className:"divider"}),r.a.createElement(M.a,{className:"p20 d-flex align-items-left justify-content-left"},r.a.createElement(V.a,{disabled:t,type:"submit",className:"btn-second font-weight-bold"},t?r.a.createElement("div",{className:"pt5"},r.a.createElement(T.BeatLoader,{color:"var(--second)",loading:!0})):r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,null)," \xa0 Save Settings"))))})))},Y=a(553),U=function(){return r.a.createElement("div",{className:"p30"},r.a.createElement("div",{className:"d-flex align-content-between justify-content-between"},r.a.createElement(Y.a,{height:60,width:"100%",className:"mt10 mr20"}),r.a.createElement(Y.a,{height:60,width:"100%",className:"mt10 mr20"})),r.a.createElement("div",{className:"d-flex align-content-between justify-content-between"},r.a.createElement(Y.a,{height:60,width:"100%",className:"mt10 mr20"}),r.a.createElement(Y.a,{height:60,width:"100%",className:"mt10 mr20"})),r.a.createElement("div",{className:"d-flex align-content-between justify-content-between"},r.a.createElement(Y.a,{height:60,width:"100%",className:"mt10 mr20"}),r.a.createElement(Y.a,{height:60,width:"100%",className:"mt10 mr20"})),r.a.createElement("div",{className:"d-flex align-content-between justify-content-between"},r.a.createElement(Y.a,{height:60,width:"100%",className:"mt10 mr20"}),r.a.createElement(Y.a,{height:60,width:"100%",className:"mt10 mr20"})))},J=a(13),Q=a(177),W=a(438),K=a(426),Z=Object(_.a)(r.a.createElement("path",{d:"M12 7V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-8zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm9 12h-7v-2h2v-2h-2v-2h2v-2h-2V9h7c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1zm-1-8h-2v2h2v-2zm0 4h-2v2h2v-2z"}),"BusinessRounded"),ee=Object(_.a)(r.a.createElement("path",{d:"M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z"}),"MapOutlined"),te=a(633),ae=a(521),ne=a(632),se=a(424),re=a(421),ce=a(125),ie=a(428),oe=a(481),me=a(427),le=function(e){var t=e.settings,a=e.profile,s=Object(o.c)(),c=Object(l.useMutation)(F,{errorPolicy:"all",fetchPolicy:"no-cache"}),i=Object(n.a)(c,2),d=i[0],u=(i[1].error,Object(B.b)().getConfirmation),_={institution_code:t.institution_code,shop_name:t.shop_name,email_address:t.email_address,address:t.address,shop_owner_name:t.shop_owner_name,shop_owner_desc:{text:t.shop_owner_desc,value:t.shop_owner_desc},phone1:t.phone1,phone2:t.phone2,dormant_phone_number:t.dormant_phone_number,auto_verify_customers:t.auto_verify_customers,take_sms_commission:t.take_sms_commission,sms_commission_amount:t.sms_commission_amount,alert_username:t.alert_username,alert_password:"no-password",alert_business_name:t.alert_business_name,default_sender_id:t.default_sender_id},h=P.b({institution_code:se.i(!0,1,10),shop_name:se.i(!0,1,200),email_address:se.b(),address:se.i(!0,1,300),shop_owner_name:se.i(!0,1,200),shop_owner_desc:se.a("Please select a position"),phone1:se.c(!0),phone2:se.c(!0),dormant_phone_number:se.c(!0),sms_commission_amount:se.d(!0),alert_username:se.i(!0,1,150),alert_password:se.i(!0,1,20),alert_business_name:se.i(!0,1,50),default_sender_id:se.i(!0,1,11)}),b=function(){var e=Object(j.a)(y.a.mark((function e(t,n){var r,c,i,o,l,_;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.setSubmitting,e.next=3,u({title:"Attention!",type:"warning",okText:"Proceed",cancelText:"Cancel",message:"Are you sure you would like to save this account settings?"});case 3:if(!e.sent){e.next=13;break}return c={institution_code:t.institution_code,shop_name:t.shop_name,email_address:t.email_address,address:t.address,shop_owner_name:t.shop_owner_name,shop_owner_desc:t.shop_owner_desc.value,phone1:t.phone1,phone2:t.phone2,dormant_phone_number:t.dormant_phone_number,auto_verify_customers:t.auto_verify_customers,take_sms_commission:t.take_sms_commission,sms_commission_amount:t.sms_commission_amount,alert_username:t.alert_username,alert_password:t.alert_password,alert_business_name:t.alert_business_name,default_sender_id:t.default_sender_id},e.next=8,d({variables:c});case 8:i=e.sent,r(!1),console.log({fetched:i}),i.data&&(o=i.data)&&("success"===o.response.status?(a&&(l=a.settings,_=Object(Q.a)(a,["settings"]),s(ce.a.actions.setProfile(Object(J.a)(Object(J.a)({},_),{},{settings:Object(J.a)(Object(J.a)({},l),c)})))),s(Object(H.a)(o.response.message,"success"))):Object(m.a)(o.response,s)),i.error&&(console.log({error:i.error}),Object(m.b)(i.error,s));case 13:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.c,{initialValues:_,onSubmit:b,validateOnChange:!0,validationSchema:h},(function(e){var t=e.isSubmitting;return r.a.createElement(N.b,{className:""},r.a.createElement(A.a,{variant:"elevation",className:"card-box"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"card-header--title text-center d-block"},r.a.createElement("small",null,"Account Settings"),r.a.createElement("b",null,"All Information"))),r.a.createElement(z.a,null,r.a.createElement(re.a,{title:"Information!",type:"info"},"Please make changes below and click on the save button to save changes. All fields marked (*) are compulsory."),r.a.createElement(C.a,{container:!0,spacing:3,className:"pr20 pl20 mt10"},r.a.createElement(C.a,{item:!0,md:6},r.a.createElement(K.a,{disabled:!0,name:"institution_code",label:"Institution Code *",placeholder:"Institution Code",icon:r.a.createElement(Z,null)})),r.a.createElement(C.a,{item:!0,md:6},r.a.createElement(K.a,{name:"shop_name",label:"Shop Name *",placeholder:"Shop Name",icon:r.a.createElement(Z,null)})," "),r.a.createElement(C.a,{item:!0,md:6},r.a.createElement(K.a,{name:"email_address",label:"Email Address *",placeholder:"Email Address",icon:r.a.createElement(x.a,null)})," "),r.a.createElement(C.a,{item:!0,md:6},r.a.createElement(K.a,{name:"address",label:"Address *",placeholder:"Address",icon:r.a.createElement(ee,null)})," "),r.a.createElement(C.a,{item:!0,md:6},r.a.createElement(K.a,{name:"shop_owner_name",label:"Shop Owner Name *",placeholder:"Shop Owner Name",icon:r.a.createElement(f.a,null)})," "),r.a.createElement(C.a,{item:!0,md:6},r.a.createElement(ie.a,{data:me.a.STAFF_POSITION_DATA,name:"shop_owner_desc",label:"Shop Owner Position *",placeholder:"Shop Owner Position"})," "),r.a.createElement(C.a,{item:!0,md:6},r.a.createElement(K.a,{name:"phone1",label:"Phone Number 1 *",placeholder:"Phone Number 1",icon:r.a.createElement(te.a,null)})," "),r.a.createElement(C.a,{item:!0,md:6},r.a.createElement(K.a,{name:"phone2",label:"Phone Number 2 *",placeholder:"Phone Number 2",icon:r.a.createElement(te.a,null)})," "),r.a.createElement(C.a,{item:!0,md:6},r.a.createElement(K.a,{name:"dormant_phone_number",label:"Dormant Phone Number *",placeholder:"Dormant Phone Number",icon:r.a.createElement(te.a,null)})," "),r.a.createElement(C.a,{item:!0,md:6},r.a.createElement(G.a,{label:"Auto verify customers",color:"primary",description:"Specify whether the system should automatically verify customers on successful registration",name:"auto_verify_customers"})),r.a.createElement(C.a,{item:!0,md:6},r.a.createElement(G.a,{label:"Deduct SMS Commission",color:"primary",description:"Specify whether the system should automatically deduct sms commission from customer's account every month",name:"take_sms_commission"})),r.a.createElement(C.a,{item:!0,md:6},r.a.createElement(K.a,{name:"sms_commission_amount",label:"SMS Commission Amount *",placeholder:"SMS Commission Amount",icon:r.a.createElement(ae.a,null)})," "),r.a.createElement(C.a,{item:!0,md:6},r.a.createElement(K.a,{name:"alert_username",label:"SMS Gateway Username *",placeholder:"SMS Gateway Username",icon:r.a.createElement(te.a,null)})," "),r.a.createElement(C.a,{item:!0,md:6},r.a.createElement(oe.a,{name:"alert_password",label:"SMS Gateway Password *",placeholder:"SMS Gateway Password"})," "),r.a.createElement(C.a,{item:!0,md:6},r.a.createElement(K.a,{name:"default_sender_id",label:"SMS Default Sender ID *",placeholder:"SMS Default Sender ID",icon:r.a.createElement(ne.a,null)})," "),r.a.createElement(C.a,{item:!0,md:6},r.a.createElement(K.a,{name:"alert_business_name",label:"Business Alias *",placeholder:"Business Alias",icon:r.a.createElement(f.a,null)})," ")),r.a.createElement("div",{className:"mb30"})),r.a.createElement("div",{className:"divider"}),r.a.createElement(M.a,{className:"p20"},r.a.createElement(V.a,{disabled:t,type:"submit",className:"btn-second font-weight-bold"},t?r.a.createElement("div",{className:"pt5"},r.a.createElement(T.BeatLoader,{color:"var(--second)",loading:!0})):r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,null)," \xa0 Save Settings")))))})))},de=function(e){var t=e.settings,a=Object(s.useState)(""),c=Object(n.a)(a,2),i=(c[0],c[1]),m=Object(s.useState)(!1),l=Object(n.a)(m,2),d=l[0],u=(l[1],Object(o.c)()),_=Object(o.d)((function(e){return e.profile}));return Object(s.useEffect)((function(){if(t){var e=_.settings,a=Object(Q.a)(_,["settings"]);u(ce.a.actions.setProfile(Object(J.a)(Object(J.a)({},a),{},{settings:Object(J.a)(Object(J.a)({},e),{},{logo_url:t.logo_url,logo_thumbnail_url:t.logo_thumbnail_url})})))}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{container:!0,spacing:6},r.a.createElement(C.a,{item:!0,xl:4},r.a.createElement(A.a,{variant:"elevation",className:"card-box"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"card-header--title text-center d-block"},r.a.createElement("small",null,"Account Settings"),r.a.createElement("b",null,"Change Company Logo"))),r.a.createElement(z.a,null,r.a.createElement("div",{className:"py-4 d-flex align-items-center justify-content-center"},r.a.createElement(W.a,{setAvatarId:i,model:"settings",mode:"edit",reset:d,model_id:t.institution_code,initialAvatar:t.logo_thumbnail_url}))))),r.a.createElement(C.a,{item:!0,xl:8,className:"d-flex"},r.a.createElement(le,{profile:_,settings:t}))))},ue=a(100);t.default=function(){var e=Object(o.c)(),t=Object(s.useState)({}),a=Object(n.a)(t,2),_=a[0],O=a[1],y=Object(s.useState)(0),j=Object(n.a)(y,2),N=j[0],x=j[1],$=Object(l.useQuery)(u.c,{errorPolicy:"all",fetchPolicy:"no-cache",onCompleted:function(t){!function(t){t&&(console.log(t),t.response?O(t.response):Object(m.a)(t.response,e))}(t)},onError:function(t){Object(d.d)(t,e)}}).loading,k=function(e){N!==e&&x(e)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{title:"Application Settings"}),r.a.createElement(g.a,{titleHeading:"Settings",titleDescription:"You can change system-wide settings here",breadCrumbTitle:"Dashboard",breadCrumbSubTitle:"Settings",Icon:h}),r.a.createElement(i.a,{square:!0,className:"shadow-xxl"},r.a.createElement(w.a,null,r.a.createElement(E.a,{onClick:function(){k(0)},index:0,activeTab:N,title:"Account Settings",icon:r.a.createElement(b.a,null)}),r.a.createElement(E.a,{onClick:function(){k(1)},index:1,activeTab:N,title:"Notifications",icon:r.a.createElement(p,null)}),r.a.createElement(E.a,{onClick:function(){k(2)},index:2,activeTab:N,title:"Edit Profile",icon:r.a.createElement(f.a,null)})),r.a.createElement(v.a,{activeTab:N,index:0},r.a.createElement("div",{className:"p-3"},!$&&_&&_.institution_code?r.a.createElement(de,{settings:_}):r.a.createElement(ue.a,null))),r.a.createElement(v.a,{activeTab:N,index:1},!$&&_&&_.send_customer_debit_email?r.a.createElement(X,{settings:_}):r.a.createElement(U,null)),r.a.createElement(v.a,{activeTab:N,index:2},r.a.createElement("div",{className:"p-3"},r.a.createElement(S.default,{from:"settings"})))))}}}]);