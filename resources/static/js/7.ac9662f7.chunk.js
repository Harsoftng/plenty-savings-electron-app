(this["webpackJsonpThriftShop-admin-app"]=this["webpackJsonpThriftShop-admin-app"]||[]).push([[7],{421:function(e,a,n){"use strict";var t=n(33),r=n(0),i=n.n(r),o=n(413),s=n(386),l=n(252),c=n(327),u=n(3);a.a=function(e){var a=e.type,n=e.children,m=e.title,d=e.className,b=void 0===d?"ml20 mr20":d,f=e.marginBottom,p=void 0===f||f,g=Object(r.useState)(!0),h=Object(t.a)(g,2),v=h[0],E=h[1];return i.a.createElement(s.a,{in:v,className:b},i.a.createElement(o.a,{className:Object(u.a)("alerts-alternate",{"mb-4":p}),severity:a,variant:"filled",action:i.a.createElement(l.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){E(!1)}},i.a.createElement(c.a,{fontSize:"inherit"}))},i.a.createElement("div",{className:"d-flex align-items-center align-content-start"},i.a.createElement("span",null,i.a.createElement("strong",{className:"d-block"},m),n))))}},424:function(e,a,n){"use strict";n.d(a,"b",(function(){return r})),n.d(a,"i",(function(){return i})),n.d(a,"a",(function(){return o})),n.d(a,"h",(function(){return s})),n.d(a,"c",(function(){return l})),n.d(a,"d",(function(){return c})),n.d(a,"g",(function(){return u})),n.d(a,"e",(function(){return m})),n.d(a,"f",(function(){return d}));var t=n(423),r=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:255,r=t.d().email("Invalid email address!").min(a,"Email addresses must be 10 characters or more!").max(n,"Email addresses must be 255 characters or less!");return e&&(r=r.required("A valid email is required!")),r},i=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:255,r=t.d().min(a,"Value must be "+a+" characters or more!").max(n,"Value must be "+n+" characters or less!");return e&&(r=r.required("A value is required!")),r},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Please select a value!";return t.b().shape({value:t.d().required(e),text:t.d().required(e)})},s=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a=t.d();return e&&(a=a.required("Please select a value!")),a},l=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a=t.a().typeError("A valid number is required!");return e&&(a=a.required("A valid number is required!")),a},c=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a=/^[0-9]\d*(((,\d{3}){1})*(\.\d{0,2})?)$/,n=t.d().matches(a,"A valid amount is required!");return e&&(n=n.required("A valid amount is required!")),n},u=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,n=t.d().matches(a,"Phone number is not valid");return e&&(n=n.required("A valid phone number is required!")),n},m=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:50,i=t.d().min(n,"Passwords must be 6 characters or more!").max(r,"Passwords must be 50 characters or less!");return e&&(i=i.matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,"Passwords must contain at least 6 characters consisting of at least one uppercase, one lowercase, one number and one special case character")),a&&(i=i.required("A valid password is required")),i},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"password",a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t.d().oneOf([t.c(e),null],"Passwords must match");return a&&(n=n.required("Please confirm your password!")),n}},426:function(e,a,n){"use strict";var t=n(33),r=n(177),i=n(0),o=n.n(i),s=n(420),l=n(507),c=n(416),u=n(519),m=n(506);a.a=function(e){var a=e.label,n=e.readOnly,d=Object(r.a)(e,["label","readOnly"]),b=Object(s.d)(d),f=Object(t.a)(b,2),p=f[0],g=f[1],h=Object(i.useState)(p.value),v=Object(t.a)(h,2),E=v[0],_=v[1],S=Object(m.a)((function(e){p.onChange&&p.onChange(e)}),200);Object(i.useEffect)((function(){""===p.value?_(""):_(p.value)}),[p.value]);var O=Object(i.useCallback)((function(e){e.persist();var a=e.currentTarget.value;_(a),S.callback(e)}),[S]),A={};return d.icon&&(A={startAdornment:o.a.createElement(l.a,{position:"start"},d.icon?d.icon:o.a.createElement(u.a,null)),readOnly:n}),o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,Object.assign({fullWidth:!0,variant:"outlined",label:a,value:E,onChange:O,onBlur:p.onBlur},d,{InputProps:A})),g.touched&&g.error?o.a.createElement("div",{className:"oak-input-error"},g.error):null)}},427:function(e,a,n){"use strict";var t=n(81),r={defaultErrorObject:{code:500,open:!0,message:"Could not communicate with the IBEN Server. Logout failed. Please try again!",title:"",type:"error",messages:[]},privilegesComboData:[{value:"",text:"--- Select ---"},{value:"Administrator",text:"Administrator (All Rights)"},{value:"selected",text:"Select Privileges"}],MARITAL_STATUS_DATA:[{value:"",text:"--- Select Marital Status ---"},{value:"Single",text:"Single"},{value:"Married",text:"Married"},{value:"Divorced",text:"Divorced"},{value:"Widowed",text:"Widowed"}],MEANS_OF_IDENTIFICATION_DATA:[{value:"",text:"--- Select ---"},{value:"Driver's License",text:"Driver's License"},{value:"National ID Card",text:"National ID Card"},{value:"International Passport",text:"International Passport"}],NEXT_OF_KIN_RELATIONSHIP_DATA:t.a.transformArrayIntoData(["Parent","Sibling","Spouse","Guardian","Partner","Child","Sister","Brother","Cousin","Niece","Nephew","Aunty","Uncle"]),RECORD_TITLE_DATA:t.a.transformArrayIntoData(["Mr.","Mrs.","Miss","Chief","Evang.","Dr.","Prof.","Messrs.","Barr.","Lady","Senator","Hon.","Rt. Hon. Barr.","HRH","Ichie","Nze","Eze","Rev. Fr."]),RELIGION_DATA:t.a.transformArrayIntoData(["Christianity","Islam","Judaism","Buddhism","Zoroastrianism","Hare Krishna","African Traditional Religion"]),DEPARTMENT_DATA:t.a.transformArrayIntoData(["Accounts","Administration","Finance","Security","Marketing","Customer Support","Contact Center","Enquiries","Complaints","Information","Sales","Billing"]),STAFF_POSITION_DATA:t.a.transformArrayIntoData(["Accountant","MD CEO","Corps Member","Manager","Director","Sales Representative","Marketer","Distributor","Chairman","Administrator","Driver","Secretary","Cleaner","Medical Staff","Customer Care"]),QUALIFICATION_DATA:t.a.transformArrayIntoData(["B.Sc","B.Tech","M.Sc","M.Tech","OND","HND","LLB","M.B.B.S","B.Ed","NCE","Dr.","Prof.","S.S.C.E","J.S.C.E"]),INVESTMENT_ROI_PERCENT_DATA:[{value:"10",text:"10%"},{value:"15",text:"15%"},{value:"20",text:"20%"}],ROI_PAYMENT_FREQUENCY_DATA:t.a.transformArrayIntoData(["Monthly","Every 3 Months","Every 6 Months"]),INVESTMENT_DURATION_DATA:t.a.transformArrayIntoData(["1 Month","2 Months","3 Months","4 Months","5 Months","6 Months","7 Months","8 Months","9 Months","10 Months","11 Months","12 Months"]),PAYMENT_MODE_DATA:t.a.transformArrayIntoData(["Mobile App Transfer","Bank Transfer","Bank Deposit"]),CUSTOMER_TYPE_DATA:t.a.transformArrayIntoData(["Savings","Loans"]),TRANSACTION_TYPE_DATA:t.a.transformArrayIntoData(["Deposit","Withdrawal"]),getNationalityData:function(){return t.a.transformArrayIntoData(["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic (CAR)","Chad","Chile","China","Colombia","Comoros","Democratic Republic of the Congo","Republic of the Congo","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar (Burma)","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates (UAE)","United Kingdom (UK)","United States of America (USA)","Uruguay","Uzbekistan","Vanuatu","Vatican City (Holy See)","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"])}};a.a=r},435:function(e,a,n){"use strict";n.d(a,"a",(function(){return s})),n.d(a,"b",(function(){return l}));var t=n(47),r=n(21);function i(){var e=Object(t.a)(["\n  mutation UploadAvatar(\n    $file: Upload!\n    $mode: String!\n    $model: String!\n    $model_id: String!\n    $field_name: String!\n  ) {\n    response: upload_file(\n      file: $file\n      mode: $mode\n      model: $model\n      model_id: $model_id\n      field_name: $field_name\n    )\n  }\n"]);return i=function(){return e},e}function o(){var e=Object(t.a)(["\n  mutation UploadAvatar(\n    $file: Upload!\n    $mode: String!\n    $model: String!\n    $model_id: String!\n  ) {\n    response: upload_avatar(\n      file: $file\n      mode: $mode\n      model: $model\n      model_id: $model_id\n    )\n  }\n"]);return o=function(){return e},e}var s=Object(r.gql)(o()),l=Object(r.gql)(i())},438:function(e,a,n){"use strict";n.d(a,"a",(function(){return W}));var t=n(161),r=n.n(t),i=n(178),o=n(33),s=n(0),l=n.n(s),c=n(480),u=n(469),m=n.n(u),d=n(467),b=n.n(d),f=n(488),p=n.n(f),g=n(468),h=n.n(g),v=n(160),E=n(247),_=n(632),S=n(665),O=n(246),A=n(324),j=n(325),N=n(326),y=n(252),C=n(174),w=n(190),$=n.n(w),M=n(249),T=n(328),I=n(3),x=n(14),P=n(381),D=n(664),k=n(486),R=n.n(k),B=n(44),L=n(487),U=n.n(L),F=n(81),q=Object(O.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}})),z={width:1280,height:720,facingMode:"user",aspectRatio:.6666666667},G=l.a.forwardRef((function(e,a){return l.a.createElement(M.a,Object.assign({direction:"up",ref:a},e))}));function V(e){var a=e.title,n=e.open,t=void 0!==n&&n,r=e.onCloseClick,i=e.onCapturedImageSrc,c=e.onSetFiles,u=e.uploadAvatar,m=e.reset,d=q(),b=Object(s.useState)(!1),f=Object(o.a)(b,2),p=f[0],g=f[1],h=Object(s.useState)(""),v=Object(o.a)(h,2),_=v[0],S=v[1],O=Object(x.d)((function(e){return e.ThemeOptions})),w=Object(x.c)(),M=l.a.useRef(null),k=l.a.useRef(null),L=l.a.useCallback((function(){var e=M.current.getScreenshot();S(e)}),[]),V=!!O.sidebarStyle&&-1!==O.sidebarStyle.indexOf("app-sidebar--dark"),H="";""!==O.sidebarStyle&&(H=O.sidebarStyle.replace("app-sidebar--dark",""));var K=V?H:"bg-gray-500";return Object(s.useEffect)((function(){m&&(S(""),i(""),c([]))}),[m,i,c]),l.a.createElement(A.a,{fullScreen:!0,open:t,onClose:function(){r(),g(!1),S("")},TransitionComponent:G},l.a.createElement(j.a,{className:Object(I.a)(d.appBar,K)},l.a.createElement(N.a,null,l.a.createElement(y.a,{edge:"start",color:"inherit",onClick:function(){r(),g(!1),S("")},"aria-label":"close",className:Object(I.a)({"text-white":V})},l.a.createElement($.a,null)),l.a.createElement(C.a,{variant:"h6",className:Object(I.a)(d.title,{"text-white":V})},a),p?l.a.createElement(E.a,{autoFocus:!0,variant:"outlined",color:"inherit",className:Object(I.a)({"text-white":V}),onClick:function(){if("undefined"===typeof k.current.getCroppedCanvas())return w(Object(B.a)("Could not crop the selected image!","error")),void r();var e=k.current.getCroppedCanvas().toDataURL("image/jpeg",100);i(e);var a=Object(F.b)(e);a.name="image.jpeg",u(a),c([]),g(!1),S(""),r()}},l.a.createElement(P.a,null)," \xa0 Save"):l.a.createElement(E.a,{autoFocus:!0,variant:"outlined",color:"inherit",className:Object(I.a)({"text-white":V}),onClick:function(){L(),g(!0)}},l.a.createElement(D.a,null)," \xa0 Capture"))),l.a.createElement(T.a,null,l.a.createElement("div",{className:"d-flex align-items-center justify-content-center"},l.a.createElement("div",{className:"mt20 br24 text-center"},""===_?l.a.createElement(R.a,{audio:!1,height:"100%",ref:M,screenshotFormat:"image/jpeg",width:"100%",videoConstraints:z,screenshotQuality:1,onUserMediaError:function(){w(Object(B.a)("Could not open your device camera. Please make sure a camera is connected and try again!","error")),r()}}):l.a.createElement(U.a,{style:{height:400,width:"100%"},preview:".img-preview",guides:!1,src:_,ref:k})))))}var H=n(96),K=n(21),J=n(43),Y=n(427),Z=n(435);function W(e){var a=e.setAvatarId,n=e.mode,t=e.model,u=e.model_id,d=e.reset,f=e.initialAvatar,g=void 0===f?"":f,O=Object(s.useState)([]),A=Object(o.a)(O,2),j=A[0],N=A[1],y=Object(s.useState)(""),C=Object(o.a)(y,2),w=C[0],$=C[1],M=Object(s.useState)(!1),T=Object(o.a)(M,2),I=T[0],P=T[1],D=Object(x.c)(),k=Object(K.useMutation)(Z.a,{errorPolicy:"all",fetchPolicy:"no-cache"}),R=Object(o.a)(k,2),L=R[0],U=R[1],F=U.error,q=U.data,z=U.loading,G=Object(c.a)({noClick:!0,noKeyboard:!0,multiple:!1,accept:"image/*",onDrop:function(e){N(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}))),e&&(e.length>0?($(""),re(e[0])):D(Object(B.a)("Please select a valid image file format (JPEG, PNG, JPG, GIF, SVG, WEBP) of less than 5MB","warning")))}}),W=G.isDragActive,Q=G.isDragAccept,X=G.isDragReject,ee=G.open,ae=G.getRootProps,ne=G.getInputProps,te=j.map((function(e){return l.a.createElement("div",{key:e.name,className:""},l.a.createElement("img",{className:"img-fluid img-fit-container rounded-sm",src:e.preview,style:{maxHeight:"240px"},alt:"..."}))}));Object(s.useEffect)((function(){return function(){j.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[j]);var re=function(){var e=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L({variables:{file:a,mode:n,model:t,model_id:u}});case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){q&&(q?"success"===q.response.status?(a("edit"===n?q.response.photo_thumbnail:q.response.id),D(Object(B.a)(q.response.message))):Object(J.a)(q.response,D):Object(J.a)(Y.a.defaultErrorObject,D)),Object(J.b)(F,D)}),[q,D,F,n,a]),Object(s.useEffect)((function(){d&&(N([]),$(""))}),[d]),l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{title:"Drag and drop an image here or click on the buttons below to upload a profile picture",placement:"top",arrow:!0},l.a.createElement("div",{className:"py-1 d-flex align-items-center justify-content-center flex-column"},l.a.createElement("div",{className:"dropzone rounded shadow-xxl"},l.a.createElement("div",ae({className:"dropzone-upload-wrapper"}),l.a.createElement("input",ne()),l.a.createElement("div",{className:"dropzone-inner-wrapper d-240 rounded dropzone-avatar"},l.a.createElement("div",{className:"avatar-icon-wrapper d-240 rounded m-2"},l.a.createElement(v.a,{title:"Click here to select an image",placement:"top",arrow:!0},l.a.createElement(E.a,{onClick:ee,className:"avatar-button badge shadow-sm btn-icon badge-position badge-position--bottom-right border-0 text-indent-0 d-40 badge-circle btn-second text-white"},"edit"===n?l.a.createElement(_.a,{className:"d-20"}):l.a.createElement(b.a,{className:"d-20"}))),l.a.createElement(v.a,{title:"Click here to capture a photo",placement:"top",arrow:!0},l.a.createElement(E.a,{onClick:function(){return P(!0)},className:"avatar-button badge mr45 shadow-sm btn-icon badge-position badge-position--bottom-right border-0 text-indent-0 d-40 badge-circle btn-second text-white"},l.a.createElement(S.a,{className:"d-20"}))),l.a.createElement("div",null,Q&&l.a.createElement("div",{className:"rounded overflow-hidden d-230 ml5 bg-success text-center font-weight-bold text-white d-flex justify-content-center align-items-center"},l.a.createElement(h.a,{className:"d-40"})),X&&l.a.createElement("div",{className:"rounded overflow-hidden d-230 ml5 bg-danger text-center font-weight-bold text-white d-flex justify-content-center align-items-center"},l.a.createElement(m.a,{className:"d-60"})),!W&&""===w&&te.length<1&&l.a.createElement("div",{className:"rounded overflow-hidden d-230 ml5 bg-neutral-dark text-center font-weight-bold text-black-50 d-flex justify-content-center align-items-center"},g?l.a.createElement("img",{className:"img-fluid img-fit-container rounded-sm",style:{height:"100%"},src:g,alt:"..."}):l.a.createElement(p.a,{className:"d-50"}))),!X&&l.a.createElement(l.a.Fragment,null,te.length>0||""===w?l.a.createElement(l.a.Fragment,null,!Q&&l.a.createElement("div",null,te)):l.a.createElement(l.a.Fragment,null,!Q&&l.a.createElement("div",{className:"rounded overflow-hidden d-230 ml5"},l.a.createElement("img",{className:"img-fluid img-fit-container rounded-sm",style:{height:"100%"},src:w,alt:"..."})))))))),l.a.createElement("div",{className:"pb5 pl10 pt20"},z&&l.a.createElement(H.BarLoader,{loading:!0})))),l.a.createElement(V,{open:I,title:"Capture Photo",onCloseClick:function(){return P(!1)},onSetFiles:N,onCapturedImageSrc:$,reset:d,uploadAvatar:re}))}},444:function(e,a,n){"use strict";n.d(a,"c",(function(){return d})),n.d(a,"g",(function(){return b})),n.d(a,"f",(function(){return f})),n.d(a,"b",(function(){return p})),n.d(a,"d",(function(){return g})),n.d(a,"a",(function(){return h})),n.d(a,"e",(function(){return v}));var t=n(47),r=n(21);function i(){var e=Object(t.a)(["\n  mutation EditUserPermission($email: String!, $permissions: [String!]!) {\n    response: change_user_permission(email: $email, permissions: $permissions) {\n      status\n      code\n      message\n      errors\n    }\n  }\n"]);return i=function(){return e},e}function o(){var e=Object(t.a)(["\n  mutation ChangeUserStatus($emails: [String!]!, $status: String!) {\n    response: change_user_status(emails: $emails, status: $status) {\n      __typename\n      ... on Response {\n        status\n        code\n        message\n        errors\n      }\n      ... on StatusResponse {\n        status\n        code\n        message\n        ids\n      }\n    }\n  }\n"]);return o=function(){return e},e}function s(){var e=Object(t.a)(["\n  mutation DeleteUserAccounts($emails: [String!]!) {\n    response: delete_users(emails: $emails) {\n      __typename\n      ... on Response {\n        status\n        code\n        message\n        errors\n      }\n      ... on StatusResponse {\n        status\n        code\n        message\n        ids\n      }\n    }\n  }\n"]);return s=function(){return e},e}function l(){var e=Object(t.a)(["\n  mutation ChangePassword(\n    $old_password: String!\n    $password: String!\n    $password_confirmation: String!\n  ) {\n    response: change_password(\n      old_password: $old_password\n      password: $password\n      password_confirmation: $password_confirmation\n    ) {\n      status\n      code\n      message\n      errors\n    }\n  }\n"]);return l=function(){return e},e}function c(){var e=Object(t.a)(["\n  mutation UpdateAccount(\n    $name: String!\n    $email: String!\n    $phone_number: String!\n    $last_name: String!\n    $first_name: String!\n    $branch_code: String!\n  ) {\n    response: update_user(\n      name: $name\n      email: $email\n      phone_number: $phone_number\n      last_name: $last_name\n      first_name: $first_name\n      branch_code: $branch_code\n    ) {\n      status\n      code\n      message\n      errors\n    }\n  }\n"]);return c=function(){return e},e}function u(){var e=Object(t.a)(["\n  mutation UpdateAccount(\n    $name: String!\n    $email: String!\n    $phone_number: String!\n    $last_name: String!\n    $first_name: String!\n    $branch_code: String!\n  ) {\n    response: update_profile(\n      name: $name\n      email: $email\n      phone_number: $phone_number\n      last_name: $last_name\n      first_name: $first_name\n      branch_code: $branch_code\n    ) {\n      status\n      code\n      message\n      errors\n    }\n  }\n"]);return u=function(){return e},e}function m(){var e=Object(t.a)(["\n  mutation CreateAccount(\n    $name: String!\n    $email: String!\n    $password: String!\n    $password_confirmation: String!\n    $phone_number: String!\n    $last_name: String!\n    $first_name: String!\n    $permissions: [String!]!\n    $avatar_id: String!\n    $privilegeCombo: String!\n    $branch_code: String!\n  ) {\n    response: create_user(\n      name: $name\n      email: $email\n      password: $password\n      password_confirmation: $password_confirmation\n      phone_number: $phone_number\n      last_name: $last_name\n      first_name: $first_name\n      permissions: $permissions\n      avatar_id: $avatar_id\n      privilegeCombo: $privilegeCombo\n      branch_code: $branch_code\n    ) {\n      status\n      code\n      message\n      errors\n    }\n  }\n"]);return m=function(){return e},e}var d=Object(r.gql)(m()),b=Object(r.gql)(u()),f=Object(r.gql)(c()),p=Object(r.gql)(l()),g=Object(r.gql)(s()),h=Object(r.gql)(o()),v=Object(r.gql)(i())},655:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return B}));var t=n(13),r=n(177),i=n(33),o=n(0),s=n.n(o),l=n(321),c=n(407),u=n(408),m=n(183),d=n(180),b=n(438),f=n(597),p=n(14),g=n(125),h=n(161),v=n.n(h),E=n(178),_=n(420),S=n(426),O=n(596),A=n(633),j=n(381),N=n(522),y=n(247),C=n(423),w=n(424),$=n(21),M=n(421),T=n(96),I=n(444),x=n(43),P=n(44),D=n(181),k=n(81),R=function(e){e.avatarId,e.onReset;var a=e.profile,n=Object(p.c)(),r=Object(o.useState)(!1),m=Object(i.a)(r,2),d=m[0],b=m[1],h=Object($.useMutation)(I.g,{errorPolicy:"all",fetchPolicy:"no-cache"}),R=Object(i.a)(h,2),B=R[0],L=R[1],U=L.error,F=L.data,q=Object(D.b)().getConfirmation;Object(o.useEffect)((function(){if((U||F)&&b(!1),Object(x.b)(U,n),F)if("success"===F.response.status){var e=k.a.getFieldValue("first_name"),r=k.a.getFieldValue("last_name"),i=r+" "+e;n(g.a.actions.setProfile(Object(t.a)(Object(t.a)({},a),{},{first_name:e,last_name:r,name:i,phone_number:k.a.getFieldValue("phone_number")}))),n(Object(P.a)(F.response.message,"success"))}else Object(x.a)(F.response,n)}),[U,n,F]);var z={email:a.email,last_name:a.last_name,first_name:a.first_name,phone_number:a.phone_number,branch_code:a.branch_code},G=C.b({email:w.b(),last_name:w.i(!0,1,100),first_name:w.i(!0,1,100),phone_number:w.g(!0),branch_code:w.i(!0,1,10)}),V=function(){var e=Object(E.a)(v.a.mark((function e(a,n){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.setSubmitting,e.next=3,q({title:"Attention!",type:"warning",okText:"Proceed",cancelText:"Cancel",message:"Are you sure you would like to save this record?"});case 3:if(!e.sent){e.next=9;break}return e.next=7,B({variables:{email:a.email,last_name:a.last_name,first_name:a.first_name,name:a.last_name+" "+a.first_name,phone_number:a.phone_number,branch_code:a.branch_code}});case 7:t(!1),b(!1);case 9:case"end":return e.stop()}}),e)})));return function(a,n){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(_.c,{initialValues:z,onSubmit:V,validateOnChange:!0,validationSchema:G},(function(e){var n=e.isSubmitting;return s.a.createElement(_.b,{className:""},s.a.createElement(c.a,{variant:"elevation",className:"card-box"},s.a.createElement("div",{className:"card-header"},s.a.createElement("div",{className:"card-header--title text-center d-block"},s.a.createElement("small",null,"Users"),s.a.createElement("b",null,"Personal Information"))),s.a.createElement(u.a,null,s.a.createElement(M.a,{title:"Information!",type:"info"},"Please make changes below and click on the save button to save changes. All fields marked (*) are compulsory."),s.a.createElement(l.a,{container:!0,spacing:3,className:"pr20 pl20 mt10"},s.a.createElement(l.a,{item:!0,md:6},s.a.createElement(S.a,{disabled:!0,id:"email",name:"email",label:"Email address *",placeholder:"Email address",icon:s.a.createElement(O.a,null)})),s.a.createElement(l.a,{item:!0,md:6},s.a.createElement(S.a,{id:"last_name",name:"last_name",label:"Last Name *",placeholder:"Last Name",icon:s.a.createElement(f.a,null)})," "),s.a.createElement(l.a,{item:!0,md:6},s.a.createElement(S.a,{id:"first_name",name:"first_name",label:"First Name *",placeholder:"First Name",icon:s.a.createElement(f.a,null)})," "),s.a.createElement(l.a,{item:!0,md:6},s.a.createElement(S.a,{id:"phone_number",name:"phone_number",label:"Phone Number *",placeholder:"Phone Number",icon:s.a.createElement(A.a,null)})," "),s.a.createElement("input",{type:"hidden",name:"branch_code",value:a.branch_code})),s.a.createElement("div",{className:"mb30"})),s.a.createElement("div",{className:"divider"}),s.a.createElement(N.a,{className:"p20"},s.a.createElement(y.a,{disabled:n||d,type:"submit",className:"btn-second font-weight-bold"},n||d?s.a.createElement("div",{className:"pt5"},s.a.createElement(T.BeatLoader,{color:"var(--second)",loading:!0})):s.a.createElement(s.a.Fragment,null,s.a.createElement(j.a,null)," \xa0 Save Profile")))))})))};function B(e){var a=e.from,n=void 0===a?"main":a,h=Object(o.useState)(""),v=Object(i.a)(h,2),E=v[0],_=v[1],S=Object(o.useState)(!1),O=Object(i.a)(S,2),A=O[0],j=O[1],N=Object(p.d)((function(e){return e.profile})),y=Object(p.c)();return Object(o.useEffect)((function(){try{if(E){N.photo_thumbnail_url;var e=Object(r.a)(N,["photo_thumbnail_url"]);y(g.a.actions.setProfile(Object(t.a)({photo_thumbnail_url:E},e)))}console.log(E)}catch(a){console.log(a)}}),[E]),s.a.createElement(s.a.Fragment,null,"main"===n&&s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{title:"My Profile"}),s.a.createElement(m.a,{titleHeading:"My Profile",titleDescription:"Manage your user profile. You can update your personal info and upload a photograph.",breadCrumbTitle:"User Accounts Mgt.",breadCrumbSubTitle:"My Profile",Icon:f.a})),s.a.createElement(l.a,{container:!0,spacing:6},s.a.createElement(l.a,{item:!0,xl:4},s.a.createElement(c.a,{variant:"elevation",className:"card-box"},s.a.createElement("div",{className:"card-header"},s.a.createElement("div",{className:"card-header--title text-center d-block"},s.a.createElement("small",null,"Users"),s.a.createElement("b",null,"Change Photograph"))),s.a.createElement(u.a,null,s.a.createElement("div",{className:"py-4 d-flex align-items-center justify-content-center"},s.a.createElement(b.a,{setAvatarId:_,model:"user",mode:"edit",model_id:N.email,reset:A,initialAvatar:N.photo_thumbnail_url}))))),s.a.createElement(l.a,{item:!0,xl:8,className:"d-flex"},s.a.createElement(R,{avatarId:E,onReset:j,profile:N}))))}}}]);