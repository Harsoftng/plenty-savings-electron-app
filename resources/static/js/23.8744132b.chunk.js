(this["webpackJsonpThriftShop-admin-app"]=this["webpackJsonpThriftShop-admin-app"]||[]).push([[23],{421:function(e,n,t){"use strict";var a=t(33),r=t(0),i=t.n(r),c=t(413),o=t(386),l=t(252),s=t(327),u=t(3);n.a=function(e){var n=e.type,t=e.children,m=e.title,d=e.className,f=void 0===d?"ml20 mr20":d,p=e.marginBottom,h=void 0===p||p,b=Object(r.useState)(!0),g=Object(a.a)(b,2),_=g[0],E=g[1];return i.a.createElement(o.a,{in:_,className:f},i.a.createElement(c.a,{className:Object(u.a)("alerts-alternate",{"mb-4":h}),severity:n,variant:"filled",action:i.a.createElement(l.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){E(!1)}},i.a.createElement(s.a,{fontSize:"inherit"}))},i.a.createElement("div",{className:"d-flex align-items-center align-content-start"},i.a.createElement("span",null,i.a.createElement("strong",{className:"d-block"},m),t))))}},429:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(666),c=t(667),o=t(668),l=t(612),s=t(702),u=t(246),m=Object(u.a)((function(){return{visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));n.a=function(e){var n=e.onSelectAllClick,t=e.order,a=e.orderBy,u=e.numSelected,d=e.rowCount,f=e.onRequestSort,p=e.headCells,h=m();return r.a.createElement(i.a,null,r.a.createElement(c.a,null,r.a.createElement(o.a,{padding:"checkbox"},r.a.createElement(l.a,{indeterminate:u>0&&u<d,checked:d>0&&u===d,onChange:n,inputProps:{"aria-label":"select all records"}})),p.map((function(e){return r.a.createElement(o.a,{key:e.id,style:(e.width,{width:e.width}),align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:a===e.id&&t},r.a.createElement(s.a,{active:a===e.id,direction:a===e.id?t:"asc",onClick:(n=e.id,function(e){f(e,n)})},e.label,a===e.id?r.a.createElement("span",{className:h.visuallyHidden},"desc"===t?"sorted descending":"sorted ascending"):null));var n}))))}},430:function(e,n,t){"use strict";var a=t(97),r=t(33),i=t(0),c=t.n(i),o=t(246),l=t(31),s=t(3),u=t(326),m=t(174),d=t(416),f=t(507),p=t(669),h=t(506),b=Object(o.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:"#FFF",backgroundColor:Object(l.e)("#070919",.3)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}}));n.a=function(e){var n=e.numSelected,t=e.onSearchChange,o=e.onSearchKeyPressed,l=e.children,g=e.searchValue,_=b(),E=Object(i.useState)(g),v=Object(r.a)(E,2),$=v[0],O=v[1],S=Object(h.a)((function(e){t&&t(e)}),200),y=Object(i.useCallback)((function(e){e.persist();var n=e.currentTarget.value;O(n),S.callback(e)}),[S]);return c.a.createElement(u.a,{className:Object(s.a)(_.root,Object(a.a)({},_.highlight,n>0))},n>0?c.a.createElement(m.a,{className:_.title,color:"inherit",variant:"subtitle1",component:"div"},n," selected"):c.a.createElement("div",{className:"fluid-width"},c.a.createElement("div",{className:"search-wrapper mr10 mb10"},c.a.createElement(d.a,{variant:"outlined",fullWidth:!0,size:"medium",value:$,id:"input-search",placeholder:"Search",margin:"normal",onChange:y,InputProps:{startAdornment:c.a.createElement(f.a,{position:"start"},c.a.createElement(p.a,null)),onKeyUp:function(e){o(e)}}}))),n>0&&l)}},432:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(441);n.a=function(){return r.a.createElement("div",{className:"mb-spacing-6-x2"},r.a.createElement("div",{className:"pl20 pr20 pb20 pt20 d-flex align-items-between justify-content-between flex-row"},r.a.createElement(i.a,{variant:"rect",animation:"wave",height:50,width:"30%",className:"mb10"}),r.a.createElement(i.a,{variant:"rect",animation:"wave",height:50,width:"30%",className:"mb10"})),r.a.createElement("div",{className:"pl20 pr20 pb20"},r.a.createElement(i.a,{variant:"rect",animation:"wave",height:60,width:"100%",className:"mb5"}),r.a.createElement(i.a,{variant:"rect",animation:"wave",height:30,width:"100%",className:"mb5"}),r.a.createElement(i.a,{variant:"rect",animation:"wave",height:30,width:"100%",className:"mb5"}),r.a.createElement(i.a,{variant:"rect",animation:"wave",height:30,width:"100%",className:"mb5"}),r.a.createElement(i.a,{variant:"rect",animation:"wave",height:30,width:"100%",className:"mb5"}),r.a.createElement(i.a,{variant:"rect",animation:"wave",height:30,width:"100%",className:"mb30"})))}},441:function(e,n,t){"use strict";var a=t(1),r=t(6),i=t(0),c=t(3),o=(t(5),t(7)),l=i.forwardRef((function(e,n){var t=e.animation,o=void 0===t?"pulse":t,l=e.classes,s=e.className,u=e.component,m=void 0===u?"span":u,d=e.height,f=e.variant,p=void 0===f?"text":f,h=e.width,b=Object(r.a)(e,["animation","classes","className","component","height","variant","width"]);return i.createElement(m,Object(a.a)({ref:n,className:Object(c.a)(l.root,l[p],s,!1!==o&&l[o])},b,{style:Object(a.a)({width:h,height:d},b.style)}))}));n.a=Object(o.a)((function(e){return{root:{display:"block",backgroundColor:e.palette.action.hover,height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(e.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}}}}),{name:"MuiSkeleton"})(l)},499:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m})),t.d(n,"c",(function(){return d})),t.d(n,"d",(function(){return f})),t.d(n,"e",(function(){return p}));var a=t(47),r=t(21);function i(){var e=Object(a.a)(["\n  query GetStaffProfile($staff_id: String!) {\n    response: staff(staff_id: $staff_id, trashed: WITH) {\n      staff_id\n      branch_code\n      title\n      name\n      last_name\n      middle_name\n      first_name\n      marital_status\n      nationality\n      religion\n      gender\n      date_of_birth\n\n      email\n      phone_number\n      street_address\n      city\n      lga\n      state\n      emergency_contact_number\n\n      staff_description\n      staff_department\n      institution_attended\n      qualification\n      specialization\n      employment_date\n\n      next_of_kin_name\n      next_of_kin_relationship\n      next_of_kin_phone_number\n\n      photo_url\n      photo_thumbnail_url\n      created_at\n      updated_at\n      created_by\n\n      notes\n\n      branch {\n        branch_code\n        branch_name\n      }\n\n      state_info {\n        state_id\n        state_name\n      }\n\n      lga_info {\n        lga_id\n        lga_name\n      }\n    }\n  }\n"]);return i=function(){return e},e}function c(){var e=Object(a.a)(["\n  query GetAllTrashedStaffRecordsFilter($page: Int!, $search: Mixed!) {\n    response: staffs_filter(\n      page: $page\n      orderBy: [{ column: NAME, order: ASC }]\n      where: {\n        OR: [\n          { column: BRANCH_CODE, operator: EQ, value: $search }\n          { column: NAME, operator: LIKE, value: $search }\n          { column: EMAIL, operator: LIKE, value: $search }\n          { column: PHONE_NUMBER, operator: LIKE, value: $search }\n          { column: MARITAL_STATUS, operator: LIKE, value: $search }\n          { column: NATIONALITY, operator: LIKE, value: $search }\n          { column: STAFF_DESCRIPTION, operator: LIKE, value: $search }\n          { column: STAFF_DEPARTMENT, operator: LIKE, value: $search }\n          { column: INSTITUTION_ATTENDED, operator: LIKE, value: $search }\n          { column: QUALIFICATION, operator: LIKE, value: $search }\n          { column: SPECIALIZATION, operator: LIKE, value: $search }\n          { column: GENDER, operator: LIKE, value: $search }\n          { column: STREET_ADDRESS, operator: LIKE, value: $search }\n          { column: CITY, operator: LIKE, value: $search }\n          { column: LGA, operator: LIKE, value: $search }\n          { column: STATE, operator: LIKE, value: $search }\n          { column: NEXT_OF_KIN_NAME, operator: LIKE, value: $search }\n          { column: NEXT_OF_KIN_PHONE_NUMBER, operator: LIKE, value: $search }\n        ]\n      }\n      trashed: ONLY\n    ) {\n      paginatorInfo {\n        currentPage\n        lastPage\n        total\n        perPage\n        count\n      }\n      data {\n        staff_id\n        name\n        email\n        phone_number\n        photo_thumbnail_url\n        marital_status\n        staff_description\n        gender\n        branch {\n          branch_code\n          branch_name\n        }\n      }\n    }\n  }\n"]);return c=function(){return e},e}function o(){var e=Object(a.a)(["\n  query GetAllTrashedStaffRecords($page: Int!) {\n    response: staffs(\n      page: $page\n      orderBy: [{ column: NAME, order: ASC }]\n      trashed: ONLY\n    ) {\n      paginatorInfo {\n        currentPage\n        lastPage\n        total\n        perPage\n        count\n      }\n      data {\n        staff_id\n        name\n        email\n        phone_number\n        photo_thumbnail_url\n        marital_status\n        staff_description\n        gender\n        branch {\n          branch_code\n          branch_name\n        }\n      }\n    }\n  }\n"]);return o=function(){return e},e}function l(){var e=Object(a.a)(["\n  query GetAllStaffRecordsFilter($page: Int!, $search: Mixed!) {\n    response: staffs_filter(\n      page: $page\n      orderBy: [{ column: NAME, order: ASC }]\n      where: {\n        OR: [\n          { column: NAME, operator: LIKE, value: $search }\n          { column: EMAIL, operator: LIKE, value: $search }\n          { column: PHONE_NUMBER, operator: LIKE, value: $search }\n          { column: MARITAL_STATUS, operator: LIKE, value: $search }\n          { column: NATIONALITY, operator: LIKE, value: $search }\n          { column: STAFF_DESCRIPTION, operator: LIKE, value: $search }\n          { column: STAFF_DEPARTMENT, operator: LIKE, value: $search }\n          { column: INSTITUTION_ATTENDED, operator: LIKE, value: $search }\n          { column: QUALIFICATION, operator: LIKE, value: $search }\n          { column: SPECIALIZATION, operator: LIKE, value: $search }\n          { column: BRANCH_CODE, operator: EQ, value: $search }\n          { column: GENDER, operator: LIKE, value: $search }\n          { column: STREET_ADDRESS, operator: LIKE, value: $search }\n          { column: CITY, operator: LIKE, value: $search }\n          { column: LGA, operator: LIKE, value: $search }\n          { column: STATE, operator: LIKE, value: $search }\n          { column: NEXT_OF_KIN_NAME, operator: LIKE, value: $search }\n          { column: NEXT_OF_KIN_PHONE_NUMBER, operator: LIKE, value: $search }\n        ]\n      }\n    ) {\n      paginatorInfo {\n        currentPage\n        lastPage\n        total\n        perPage\n        count\n      }\n      data {\n        staff_id\n        name\n        email\n        phone_number\n        photo_thumbnail_url\n        marital_status\n        staff_description\n        gender\n        branch {\n          branch_code\n          branch_name\n        }\n      }\n    }\n  }\n"]);return l=function(){return e},e}function s(){var e=Object(a.a)(["\n  query GetAllStaffRecords($page: Int!) {\n    response: staffs(page: $page, orderBy: [{ column: NAME, order: ASC }]) {\n      paginatorInfo {\n        currentPage\n        lastPage\n        total\n        perPage\n        count\n      }\n      data {\n        staff_id\n        name\n        email\n        phone_number\n        photo_thumbnail_url\n        marital_status\n        staff_description\n        gender\n        branch {\n          branch_code\n          branch_name\n        }\n      }\n    }\n  }\n"]);return s=function(){return e},e}var u=Object(r.gql)(s()),m=Object(r.gql)(l()),d=Object(r.gql)(o()),f=Object(r.gql)(c()),p=Object(r.gql)(i())},500:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"c",(function(){return u})),t.d(n,"b",(function(){return m})),t.d(n,"d",(function(){return d}));var a=t(47),r=t(21);function i(){var e=Object(a.a)(["\n  mutation RestoreStaffRecords($staff_ids: [String!]!) {\n    response: restore_staff(staff_ids: $staff_ids) {\n      __typename\n      ... on Response {\n        status\n        code\n        message\n        errors\n      }\n      ... on StatusResponse {\n        status\n        code\n        message\n        ids\n      }\n    }\n  }\n"]);return i=function(){return e},e}function c(){var e=Object(a.a)(["\n  mutation DeleteStaffRecords($staff_ids: [String!]!, $status: String!) {\n    response: delete_staff(staff_ids: $staff_ids, status: $status) {\n      __typename\n      ... on Response {\n        status\n        code\n        message\n        errors\n      }\n      ... on StatusResponse {\n        status\n        code\n        message\n        ids\n      }\n    }\n  }\n"]);return c=function(){return e},e}function o(){var e=Object(a.a)(["\n  mutation EditStaffRecord(\n    $branch_code: String!\n    $staff_id: String!\n    $title: String!\n    $name: String!\n    $last_name: String!\n    $middle_name: String\n    $first_name: String!\n    $marital_status: String!\n    $nationality: String!\n    $religion: String!\n    $gender: String!\n    $date_of_birth: String!\n    $email: String\n    $phone_number: String!\n    $street_address: String\n    $city: String!\n    $lga: String!\n    $state: String!\n    $emergency_contact_number: String\n    $staff_description: String!\n    $staff_department: String!\n    $institution_attended: String\n    $qualification: String\n    $specialization: String\n    $employment_date: String!\n    $next_of_kin_name: String\n    $next_of_kin_relationship: String\n    $next_of_kin_phone_number: String\n    $notes: String\n  ) {\n    response: update_staff(\n      branch_code: $branch_code\n      staff_id: $staff_id\n      title: $title\n      name: $name\n      last_name: $last_name\n      middle_name: $middle_name\n      first_name: $first_name\n      marital_status: $marital_status\n      nationality: $nationality\n      religion: $religion\n      gender: $gender\n      date_of_birth: $date_of_birth\n\n      email: $email\n      phone_number: $phone_number\n      street_address: $street_address\n      city: $city\n      lga: $lga\n      state: $state\n      emergency_contact_number: $emergency_contact_number\n\n      staff_description: $staff_description\n      staff_department: $staff_department\n      institution_attended: $institution_attended\n      qualification: $qualification\n      specialization: $specialization\n      employment_date: $employment_date\n\n      next_of_kin_name: $next_of_kin_name\n      next_of_kin_relationship: $next_of_kin_relationship\n      next_of_kin_phone_number: $next_of_kin_phone_number\n\n      notes: $notes\n    ) {\n      status\n      code\n      message\n      errors\n    }\n  }\n"]);return o=function(){return e},e}function l(){var e=Object(a.a)(["\n  mutation CreateStaffRecord(\n    $branch_code: String!\n    $title: String!\n    $name: String!\n    $last_name: String!\n    $middle_name: String\n    $first_name: String!\n    $marital_status: String!\n    $nationality: String!\n    $religion: String!\n    $gender: String!\n    $date_of_birth: String!\n    $email: String\n    $phone_number: String!\n    $street_address: String\n    $city: String!\n    $lga: String!\n    $state: String!\n    $emergency_contact_number: String\n    $staff_description: String!\n    $staff_department: String!\n    $institution_attended: String\n    $qualification: String\n    $specialization: String\n    $employment_date: String!\n    $next_of_kin_name: String\n    $next_of_kin_relationship: String\n    $next_of_kin_phone_number: String\n    $avatar_id: String!\n    $notes: String\n  ) {\n    response: register_staff(\n      branch_code: $branch_code\n      title: $title\n      name: $name\n      last_name: $last_name\n      middle_name: $middle_name\n      first_name: $first_name\n      marital_status: $marital_status\n      nationality: $nationality\n      religion: $religion\n      gender: $gender\n      date_of_birth: $date_of_birth\n\n      email: $email\n      phone_number: $phone_number\n      street_address: $street_address\n      city: $city\n      lga: $lga\n      state: $state\n      emergency_contact_number: $emergency_contact_number\n\n      staff_description: $staff_description\n      staff_department: $staff_department\n      institution_attended: $institution_attended\n      qualification: $qualification\n      specialization: $specialization\n      employment_date: $employment_date\n\n      next_of_kin_name: $next_of_kin_name\n      next_of_kin_relationship: $next_of_kin_relationship\n      next_of_kin_phone_number: $next_of_kin_phone_number\n\n      avatar_id: $avatar_id\n      notes: $notes\n    ) {\n      status\n      code\n      message\n      errors\n    }\n  }\n"]);return l=function(){return e},e}var s=Object(r.gql)(l()),u=Object(r.gql)(o()),m=Object(r.gql)(c()),d=Object(r.gql)(i())},501:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(9);n.a=Object(i.a)(r.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zm3.17-7.83c.39-.39 1.02-.39 1.41 0L12 12.59l1.42-1.42c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 14l1.42 1.42c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L12 15.41l-1.42 1.42c-.39.39-1.02.39-1.41 0a.9959.9959 0 010-1.41L10.59 14l-1.42-1.42c-.39-.38-.39-1.02 0-1.41zM15.5 4l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-2.5z"}),"DeleteForeverRounded")},506:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0);function r(e,n,t){var r=this,i=Object(a.useRef)(null),c=Object(a.useRef)(0),o=Object(a.useRef)(null),l=Object(a.useRef)([]),s=Object(a.useRef)(),u=Object(a.useRef)(),m=Object(a.useRef)(e),d=Object(a.useRef)(!0);m.current=e;var f=!n&&0!==n&&"undefined"!==typeof window;if("function"!==typeof e)throw new TypeError("Expected a function");n=+n||0;var p=!!(t=t||{}).leading,h=!("trailing"in t)||!!t.trailing,b="maxWait"in t,g=b?Math.max(+t.maxWait||0,n):null,_=Object(a.useCallback)((function(e){var n=l.current,t=s.current;return l.current=s.current=null,c.current=e,u.current=m.current.apply(t,n)}),[]),E=Object(a.useCallback)((function(e,n){f&&cancelAnimationFrame(o.current),o.current=f?requestAnimationFrame(e):setTimeout(e,n)}),[f]),v=Object(a.useCallback)((function(e){if(!d.current)return!1;var t=e-i.current,a=e-c.current;return!i.current||t>=n||t<0||b&&a>=g}),[g,b,n]),$=Object(a.useCallback)((function(e){return o.current=null,h&&l.current?_(e):(l.current=s.current=null,u.current)}),[_,h]),O=Object(a.useCallback)((function(){var e=Date.now();if(v(e))return $(e);var t=e-i.current,a=e-c.current,r=n-t,o=b?Math.min(r,g-a):r;E(O,o)}),[g,b,v,E,$,n]),S=Object(a.useCallback)((function(){o.current&&(f?cancelAnimationFrame(o.current):clearTimeout(o.current)),c.current=0,l.current=i.current=s.current=o.current=null}),[f]),y=Object(a.useCallback)((function(){return o.current?$(Date.now()):u.current}),[$]);Object(a.useEffect)((function(){return d.current=!0,function(){d.current=!1}}),[]);var j=Object(a.useCallback)((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var a=Date.now(),m=v(a);if(l.current=e,s.current=r,i.current=a,m){if(!o.current&&d.current)return c.current=i.current,E(O,n),p?_(i.current):u.current;if(b)return E(O,n),_(i.current)}return o.current||E(O,n),u.current}),[_,p,b,v,E,O,n]),N=Object(a.useCallback)((function(){return!!o.current}),[]);return Object(a.useMemo)((function(){return{callback:j,cancel:S,flush:y,pending:N}}),[j,S,y,N])}},507:function(e,n,t){"use strict";var a=t(1),r=t(6),i=t(0),c=(t(5),t(3)),o=t(174),l=t(7),s=t(89),u=i.forwardRef((function(e,n){var t=e.children,l=e.classes,u=e.className,m=e.component,d=void 0===m?"div":m,f=e.disablePointerEvents,p=void 0!==f&&f,h=e.disableTypography,b=void 0!==h&&h,g=e.position,_=e.variant,E=Object(r.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),v=Object(s.b)()||{},$=_;return _&&v.variant,v&&!$&&($=v.variant),i.createElement(s.a.Provider,{value:null},i.createElement(d,Object(a.a)({className:Object(c.a)(l.root,u,p&&l.disablePointerEvents,v.hiddenLabel&&l.hiddenLabel,"filled"===$&&l.filled,{start:l.positionStart,end:l.positionEnd}[g],"dense"===v.margin&&l.marginDense),ref:n},E),"string"!==typeof t||b?t:i.createElement(o.a,{color:"textSecondary"},t)))}));n.a=Object(l.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(u)},603:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(9);n.a=Object(i.a)(r.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zm5.65-8.65c.2-.2.51-.2.71 0L16 14h-2v4h-4v-4H8l3.65-3.65zM15.5 4l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-2.5z"}),"RestoreFromTrashRounded")},697:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return re}));var a=t(0),r=t.n(a),i=t(321),c=t(407),o=t(160),l=t(247),s=t(408),u=t(183),m=t(180),d=t(390),f=t(392),p=t(11),h=t(421),b=t(17),g=t(14),_=t(81),E=t(161),v=t.n(E),$=t(178),O=t(97),S=t(13),y=t(177),j=t(440),N=t(33),w=t(246),I=t(122),x=t(670),k=t(671),T=t(672),L=t(673),C=t(667),A=t(668),P=t(612),R=t(244),K=t(634),M=t(377),D=t(685),F=t(429),q=t(3),z=t(21),H=t(43),B=t(22),U=t(603),G=t(501),V=t(674),X=t(432),Q=t(430),W=t(163),Y=t(44),J=t(181),Z=t(499),ee=t(500),ne=Object(w.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(0)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}})),te=[{id:"sn",width:"10px",numeric:!1,disablePadding:!1,label:"S/N"},{id:"action",width:"60px",numeric:!1,disablePadding:!1,label:"Action"},{id:"name",width:"",numeric:!1,disablePadding:!1,label:"Name"},{id:"gender",width:"",numeric:!1,disablePadding:!1,label:"Gender"},{id:"marital_status",width:"",numeric:!1,disablePadding:!1,label:"Marital Status"},{id:"email",width:"",numeric:!1,disablePadding:!1,label:"Email"},{id:"phone",width:"",numeric:!1,disablePadding:!1,label:"Phone Number"},{id:"staff_description",width:"",numeric:!1,disablePadding:!1,label:"Description"},{id:"branch",width:"",numeric:!1,disablePadding:!1,label:"Branch"}];function ae(){var e=ne(),n=Object(g.c)(),t=r.a.useState("page"),a=Object(N.a)(t,2),i=a[0],c=a[1],s=r.a.useState(""),u=Object(N.a)(s,2),m=u[0],f=u[1],p=r.a.useState("asc"),h=Object(N.a)(p,2),b=h[0],E=h[1],w=r.a.useState("calories"),ae=Object(N.a)(w,2),re=ae[0],ie=ae[1],ce=r.a.useState([]),oe=Object(N.a)(ce,2),le=oe[0],se=oe[1],ue=r.a.useState([]),me=Object(N.a)(ue,2),de=me[0],fe=me[1],pe=r.a.useState(1),he=Object(N.a)(pe,2),be=he[0],ge=he[1],_e=r.a.useState(0),Ee=Object(N.a)(_e,2),ve=Ee[0],$e=Ee[1],Oe=r.a.useState(10),Se=Object(N.a)(Oe,2),ye=Se[0],je=Se[1],Ne=r.a.useState([]),we=Object(N.a)(Ne,2),Ie=we[0],xe=we[1],ke=r.a.useState(!0),Te=Object(N.a)(ke,2),Le=Te[0],Ce=Te[1],Ae=Object(J.b)().getConfirmation,Pe=Math.trunc(ve/ye),Re=ve/ye,Ke=Re>Pe?Pe+1:Re,Me=function(e){e&&(e.response.data&&e.response.paginatorInfo?(fe(e.response.data.map((function(e){return Object.assign(e,{show:!0})}))),ge(parseInt(e.response.paginatorInfo.currentPage)),je(parseInt(e.response.paginatorInfo.perPage)),$e(parseInt(e.response.paginatorInfo.total))):Object(H.a)(e.response,n)),Ce(!1)},De=function(e,t){if(e)if(n(Object(W.a)()),"success"===e.response.status){var a=[];if(e.response.ids&&(a=e.response.ids),console.log({staff_ids:a}),"delete"===t||"restore"===t){var r=de.filter((function(e){return-1===a.indexOf(e.staff_id)}));fe(r)}se([]),n(Object(Y.a)(e.response.message,"success"))}else Object(H.a)(e.response,n)},Fe=function(e){Object(H.b)(e,n)},qe=Object(z.useQuery)(Z.c,{errorPolicy:"all",fetchPolicy:"no-cache",variables:{page:1},onCompleted:function(e){Me(e),c("page")},onError:Fe}).loading,ze=Object(z.useLazyQuery)(Z.c,{errorPolicy:"all",fetchPolicy:"no-cache",onCompleted:function(e){Me(e),c("page")},onError:Fe}),He=Object(N.a)(ze,2),Be=He[0],Ue=He[1].loading,Ge=Object(z.useLazyQuery)(Z.d,{errorPolicy:"all",fetchPolicy:"no-cache",onCompleted:function(e){Me(e),c("search")},onError:Fe}),Ve=Object(N.a)(Ge,2),Xe=Ve[0],Qe=Ve[1].loading,We=Object(z.useMutation)(ee.d,{errorPolicy:"all",fetchPolicy:"no-cache",onCompleted:function(e){De(e,"restore")},onError:Fe}),Ye=Object(N.a)(We,1)[0],Je=Object(z.useMutation)(ee.b,{errorPolicy:"all",fetchPolicy:"no-cache",onCompleted:function(e){De(e,"delete")},onError:Fe}),Ze=Object(N.a)(Je,1)[0],en=function(e,n){var t="a".concat(n);if(Ie["a"+n]){Ie[t];var a=Object(y.a)(Ie,[t].map(j.a));xe(Object(S.a)(Object(S.a)({},a),{},Object(O.a)({},t,null)))}},nn=function(){var e=Object($.a)(v.a.mark((function e(n,t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ce(!0),a="%".concat(m,"%"),"search"!==i){e.next=7;break}return e.next=5,Xe({variables:{page:t,search:a}});case 5:e.next=9;break;case 7:return e.next=9,Be({variables:{page:t}});case 9:ge(t);case 10:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),tn=function(){var e=Object($.a)(v.a.mark((function e(n){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(13!==n.keyCode){e.next=6;break}return t=n.target.value,e.next=4,Xe({variables:{page:1,search:"%".concat(t,"%")}});case 4:ge(1),f(t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),an=function(){var e=Object($.a)(v.a.mark((function e(){var t,a,r,i=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=i.length>0&&void 0!==i[0]?i[0]:[],0!==(a=0===t.length?le:t).length){e.next=6;break}return r="Please select the staff record(s) to restore!",n(Object(Y.a)(r,"error")),e.abrupt("return");case 6:return e.next=8,Ae({title:"Attention!",type:"warning",okText:"Proceed",cancelText:"Cancel",message:"Are you sure you would like to restore the selected staff record(s) from trash?"});case 8:if(!e.sent){e.next=13;break}return n(Object(W.a)(!0)),e.next=13,Ye({variables:{staff_ids:a}});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),rn=function(){var e=Object($.a)(v.a.mark((function e(){var t,a,r,i,c=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.length>0&&void 0!==c[0]?c[0]:[],a=c.length>1&&void 0!==c[1]?c[1]:"force",0!==(r=0===t.length?le:t).length){e.next=7;break}return i="Please select the staff record(s) to delete permanently!",n(Object(Y.a)(i,"error")),e.abrupt("return");case 7:return console.log({staff_ids:r,status:a}),i="Are you sure you would like to delete the selected staff record(s) permanently?. This action will delete all their records from the database. Please note that this action is irreversible.",e.next=11,Ae({title:"Attention!",type:"warning",okText:"Proceed",cancelText:"Cancel",message:i});case 11:if(!e.sent){e.next=16;break}return n(Object(W.a)(!0)),e.next=16,Ze({variables:{staff_ids:r,status:a}});case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:e.root},qe||Ue||Qe||Le?r.a.createElement(I.a,{className:e.paper},r.a.createElement(X.a,null)):r.a.createElement(I.a,{className:e.paper},r.a.createElement(Q.a,{numSelected:le.length,onSearchChange:function(e){var n=e.target.value;n&&(n=n.toLowerCase());var t=de.map((function(e){return-1!==e.staff_id.toLowerCase().indexOf(n)||-1!==e.name.toLowerCase().indexOf(n)||-1!==e.email.toLowerCase().indexOf(n)||-1!==e.phone_number.toLowerCase().indexOf(n)||-1!==e.staff_description.toLowerCase().indexOf(n)||-1!==e.gender.toLowerCase().indexOf(n)||-1!==e.marital_status.toLowerCase().indexOf(n)||-1!==e.branch.branch_code.toLowerCase().indexOf(n)||-1!==e.branch.branch_name.toLowerCase().indexOf(n)?e.show=!0:e.show=!1,e}));fe(t)},searchValue:m,setSearchValue:f,onSearchKeyPressed:tn},r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{size:"medium",className:"m-2",color:"primary","aria-label":"outlined primary button group"},r.a.createElement(o.a,{title:"Restore the selected staff record(s) from trash"},r.a.createElement(l.a,{className:"btn-transition-none mr10 btn-neutral-first text-white",onClick:function(){an([])}},r.a.createElement(U.a,{className:"mr5"})," Restore")),r.a.createElement(o.a,{title:"Delete the selected staff record(s) permanently"},r.a.createElement(l.a,{className:"btn-transition-none btn-neutral-first text-white",onClick:function(){rn([])}},r.a.createElement(G.a,{className:"mr5"})," Delete"))))),r.a.createElement(k.a,{className:"pb30"},r.a.createElement(T.a,{className:Object(q.a)(e.table,"table text-nowrap mb-0"),"aria-labelledby":"tableTitle",size:"medium","aria-label":"enhanced table"},r.a.createElement(F.a,{classes:e,numSelected:le.length,order:b,orderBy:re,onSelectAllClick:function(e){if(e.target.checked){var n=de.map((function(e){return e.staff_id}));se(n)}else se([])},onRequestSort:function(e,n){E(re===n&&"asc"===b?"desc":"asc"),ie(n)},headCells:te,rowCount:de.length}),r.a.createElement(L.a,null,Object(_.f)(de,Object(_.c)(b,re)).map((function(e,n){var t,a=(t=e.staff_id,-1!==le.indexOf(t)),i="enhanced-table-checkbox-".concat(n),c=ye*(be-1)+(n+1);return e.show?r.a.createElement(C.a,{hover:!0,onClick:function(n){return function(e,n){var t=le.indexOf(n),a=[];-1===t?a=a.concat(le,n):0===t?a=a.concat(le.slice(1)):t===le.length-1?a=a.concat(le.slice(0,-1)):t>0&&(a=a.concat(le.slice(0,t),le.slice(t+1))),se(a)}(0,e.staff_id)},role:"checkbox","aria-checked":a,tabIndex:-1,key:e.staff_id,selected:a},r.a.createElement(A.a,{padding:"checkbox"},r.a.createElement(P.a,{checked:a,inputProps:{"aria-labelledby":i}})),r.a.createElement(A.a,{align:"left"},c),r.a.createElement(A.a,{padding:"none"},r.a.createElement(l.a,{size:"small",onClick:function(e){!function(e,n){var t=e.currentTarget,a="a".concat(n);if(Ie["a"+n]){Ie[a];var r=Object(y.a)(Ie,[a].map(j.a));xe(Object(S.a)(Object(S.a)({},r),{},Object(O.a)({},a,t)))}else xe(Object(S.a)(Object(S.a)({},Ie),{},Object(O.a)({},a,t)))}(e,n)},className:"btn-second btn-icon d-40 p-0 btn-animated-icon-sm"},r.a.createElement(B.a,{icon:["fas","ellipsis-h"],className:"font-size-lg"})),r.a.createElement(R.a,{anchorEl:Ie["a"+n],open:Boolean(Ie["a"+n]),keepMounted:!0,onClose:function(e){en(0,n)},classes:{list:"p-0"},getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},r.a.createElement(K.a,{button:!0,onClick:function(t){en(0,n),rn([e.staff_id])}},r.a.createElement("div",{className:"mr10"},r.a.createElement(G.a,null)),r.a.createElement("span",null,"Delete Forever")),r.a.createElement(M.a,{className:"my-2"}),r.a.createElement(K.a,{button:!0,onClick:function(t){en(0,n),an([e.staff_id])}},r.a.createElement("div",{className:"mr10"},r.a.createElement(U.a,null)),r.a.createElement("span",null,"Restore Record")),r.a.createElement(M.a,{className:"my-2"}),r.a.createElement(K.a,{button:!0,onClick:function(t){var a="/print/staff/view/".concat(e.staff_id);en(0,n),_.a.launchNewWindow(a,1e3,700)}},r.a.createElement("div",{className:"mr10"},r.a.createElement(d.a,null)),r.a.createElement("span",null,"View Profile")))),r.a.createElement(A.a,{component:"th",id:i,scope:"row",padding:"none"},r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("div",{className:"avatar-icon-wrapper mr-3"},r.a.createElement("div",{className:"avatar-icon"},r.a.createElement("img",{alt:"...",src:e.photo_thumbnail_url}))),r.a.createElement("div",null,r.a.createElement("span",{className:"font-weight-bold text-black",title:"..."},e.name),r.a.createElement("span",{className:"text-black-50 d-block"},"Staff")))),r.a.createElement(A.a,{align:"center"},e.gender),r.a.createElement(A.a,{align:"center"},e.marital_status),r.a.createElement(A.a,{align:"left"},e.email),r.a.createElement(A.a,{align:"left"},e.phone_number),r.a.createElement(A.a,{align:"left"},e.staff_description),r.a.createElement(A.a,{align:"left"},e.branch.branch_name)):null})),0===de.length&&r.a.createElement(C.a,{style:{height:53}},r.a.createElement(A.a,{colSpan:11,className:"bg-gray-300"},r.a.createElement(V.a,null)," No deleted staff records found"))))),r.a.createElement("div",{className:"card-footer py-3 d-flex justify-content-between"},r.a.createElement(D.a,{className:"pagination-second",variant:"outlined",page:be,onChange:nn,count:Ke}))))}function re(){var e=Object(b.g)(),n=Object(g.d)((function(e){return e.profile}));return Object(a.useEffect)((function(){_.a.enforcePermissions(n,e,"view-staff")}),[n,e]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{title:"View Staff (Trash)"}),r.a.createElement(u.a,{titleHeading:"View Staff (Trash)",titleDescription:"Manage all staff records that have been moved to trash (deleted).",breadCrumbTitle:"Staff",breadCrumbSubTitle:"View Staff",Icon:d.a}),r.a.createElement(i.a,null,r.a.createElement(c.a,{className:"card-box mb-spacing-6-x2"},r.a.createElement("div",{className:"card-header pr-2"},r.a.createElement("div",{className:"card-header--title"},r.a.createElement("small",null,"STAFF"),r.a.createElement("b",null,"List of deleted staff records")),r.a.createElement("div",{className:"card-header--actions"},r.a.createElement("div",{className:"d-flex align-items-center justify-content-center"},r.a.createElement(o.a,{arrow:!0,title:"Register Staff",placement:"top"},r.a.createElement(p.b,{to:"/staff/create"},r.a.createElement(l.a,{variant:"text",className:"btn-outline-second d-40 mr-2 p-0 rounded-pill"},r.a.createElement(f.a,{className:"w-50"}))))))),r.a.createElement(s.a,{className:"p-0"},r.a.createElement(h.a,{title:"How to Use!",type:"info",className:"",marginBottom:!1},"The table below shows the list of staff records that have been deleted from the system. To perform an action (delete, restore etc) on any record, please select an action from the action menu close to the record"),r.a.createElement(i.a,{item:!0,md:12},r.a.createElement(ae,null))))))}}}]);