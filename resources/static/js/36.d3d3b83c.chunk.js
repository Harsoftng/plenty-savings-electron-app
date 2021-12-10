(this["webpackJsonpPlentySavings-admin-app"]=this["webpackJsonpPlentySavings-admin-app"]||[]).push([[36],{452:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return _})),t.d(e,"d",(function(){return d})),t.d(e,"c",(function(){return p})),t.d(e,"e",(function(){return b})),t.d(e,"f",(function(){return f}));var a=t(47),r=t(21);function c(){var n=Object(a.a)(['\n  query SearchAllCustomersFilter($page: Int!, $search: Mixed!) {\n    response: customers_filter(\n      first: 20\n      page: $page\n      orderBy: [{ column: NAME, order: ASC }]\n      where: {\n        AND: [\n          { column: VERIFIED, operator: EQ, value: "Yes" }\n          {\n            OR: [\n              { column: ACCOUNT_NUMBER, operator: LIKE, value: $search }\n              { column: NAME, operator: LIKE, value: $search }\n              { column: EMAIL, operator: LIKE, value: $search }\n              { column: PHONE_NUMBER, operator: LIKE, value: $search }\n            ]\n          }\n        ]\n      }\n    ) {\n      paginatorInfo {\n        currentPage\n        lastPage\n        total\n        perPage\n        count\n      }\n      data {\n        title\n        name\n        account_number\n        phone_number\n        photo_thumbnail_url\n        occupation\n        gender\n        daily_contribution_amount\n        main_balance\n        customer_type\n        branch {\n          branch_code\n          branch_name\n        }\n        account_officer_info {\n          name\n        }\n        page_status {\n          current_page\n          num_comm_collected\n          transaction_count\n        }\n        registration_date\n        verified\n      }\n    }\n  }\n']);return c=function(){return n},n}function o(){var n=Object(a.a)(['\n  query SearchAllCustomersFilter($page: Int!, $search: Mixed!) {\n    response: customers_filter(\n      first: 20\n      page: $page\n      orderBy: [{ column: NAME, order: ASC }]\n      where: {\n        AND: [\n          { column: VERIFIED, operator: EQ, value: "Yes" }\n          {\n            OR: [\n              { column: ACCOUNT_NUMBER, operator: LIKE, value: $search }\n              { column: NAME, operator: LIKE, value: $search }\n              { column: EMAIL, operator: LIKE, value: $search }\n              { column: PHONE_NUMBER, operator: LIKE, value: $search }\n            ]\n          }\n        ]\n      }\n    ) {\n      paginatorInfo {\n        currentPage\n        lastPage\n        total\n        perPage\n        count\n      }\n      data {\n        title\n        name\n        account_number\n        phone_number\n        photo_thumbnail_url\n        occupation\n        gender\n        daily_contribution_amount\n        main_balance\n        customer_type\n        branch {\n          branch_code\n          branch_name\n        }\n        account_officer_info {\n          name\n        }\n        registration_date\n        verified\n      }\n    }\n  }\n']);return o=function(){return n},n}function i(){var n=Object(a.a)(["\n  query GetPendingTransaction($transaction_id: String!) {\n    response: pending_transaction(transaction_id: $transaction_id) {\n      transaction_id\n      account_number\n      branch_code\n      transaction_date\n      amount\n      amount_in_words\n      received_by\n      transaction_type\n      sms_sent\n      created_by\n      sms_commission_collected\n      commission_collected\n\n      branch {\n        branch_code\n        branch_name\n      }\n\n      customer {\n        title\n        name\n        phone_number\n        daily_contribution_amount\n        main_balance\n        customer_type\n        photo_thumbnail_url\n        account_officer_info {\n          name\n        }\n      }\n      collector {\n        staff_id\n        name\n        staff_description\n      }\n    }\n  }\n"]);return i=function(){return n},n}function l(){var n=Object(a.a)(["\n  query GetTransaction($transaction_id: String!) {\n    response: transaction(transaction_id: $transaction_id) {\n      transaction_id\n      account_number\n      branch_code\n      transaction_date\n      amount\n      amount_in_words\n      received_by\n      transaction_type\n      sms_sent\n      created_by\n      sms_commission_collected\n      commission_collected\n\n      branch {\n        branch_code\n        branch_name\n      }\n\n      customer {\n        title\n        name\n        phone_number\n        daily_contribution_amount\n        main_balance\n        customer_type\n        photo_thumbnail_url\n        account_officer_info {\n          name\n        }\n      }\n      collector {\n        staff_id\n        name\n        staff_description\n      }\n    }\n  }\n"]);return l=function(){return n},n}function s(){var n=Object(a.a)(["\n  query GetAllPendingTransactionsFilter(\n    $page: Int!\n    $condition: [QueryPendingTransactionsFilterWhereWhereConditions!]\n  ) {\n    response: pending_transactions_filter(\n      page: $page\n      orderBy: [{ column: TRANSACTION_DATE, order: ASC }]\n      where: { AND: $condition }\n    ) {\n      paginatorInfo {\n        currentPage\n        lastPage\n        total\n        perPage\n        count\n      }\n      data {\n        transaction_id\n        account_number\n        branch_code\n        transaction_date\n        amount\n        amount_in_words\n        transaction_type\n        created_by\n        collector_id\n\n        branch {\n          branch_code\n          branch_name\n        }\n\n        customer {\n          name\n        }\n\n        collector {\n          staff_id\n          name\n        }\n      }\n    }\n  }\n"]);return s=function(){return n},n}function m(){var n=Object(a.a)(["\n  query GetAllCustomerTransactions($page: Int!, $account_number: Mixed!) {\n    response: transactions_filter(\n      page: $page\n      first: 4000\n      orderBy: [{ column: TRANSACTION_DATE, order: DESC }]\n      where: {\n        AND: [{ column: ACCOUNT_NUMBER, operator: EQ, value: $account_number }]\n      }\n    ) {\n      paginatorInfo {\n        currentPage\n        lastPage\n        total\n        perPage\n        count\n      }\n      data {\n        transaction_id\n        account_number\n        branch_code\n        transaction_date\n        amount\n        amount_in_words\n        transaction_type\n        created_by\n        collector_id\n\n        branch {\n          branch_code\n          branch_name\n        }\n\n        customer {\n          name\n        }\n\n        collector {\n          staff_id\n          name\n        }\n      }\n    }\n  }\n"]);return m=function(){return n},n}var u=Object(r.gql)(m()),_=Object(r.gql)(s()),d=Object(r.gql)(l()),p=Object(r.gql)(i()),b=Object(r.gql)(o()),f=Object(r.gql)(c())},678:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return A}));var a=t(33),r=t(0),c=t.n(r),o=t(321),i=t(407),l=t(408),s=t(247),m=t(180),u=t(14),_=t(45),d=t(44),p=t(21),b=t(81),f=t(74),E=t(409),g=t(327),h=t(100),y=t(17),N=t(185),v=t(452);function A(n){var e=n.match,t=Object(u.c)(),A=Object(r.useState)({}),O=Object(a.a)(A,2),w=O[0],P=O[1],C=Object(y.g)(),I=Object(u.d)((function(n){return n.profile}));Object(r.useEffect)((function(){b.a.enforcePermissions(I,C,"view-transactions")}),[I,C]);var $=e.params.id,j="pending"===e.params.pending,T=j?v.c:v.d,S=Object(p.useQuery)(T,{errorPolicy:"all",fetchPolicy:"no-cache",onCompleted:function(n){!function(n){n&&(n.response?P(n.response):Object(d.a)(n.response,t))}(n)},onError:function(n){Object(b.d)(n,t)},variables:{transaction_id:$}}).loading;return e.params.id||e.params.pending?c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{title:"View Transaction"}),S&&c.a.createElement(h.a,null),!S&&w&&w.transaction_id&&c.a.createElement(o.a,{container:!0,spacing:6,className:"d-flex justify-content-center p20 bg-gray-300"},c.a.createElement(o.a,{item:!0,xl:12,className:""},c.a.createElement(i.a,{variant:"elevation",className:"card-box "},c.a.createElement("div",{className:"color-swatch"},c.a.createElement("div",{className:"color-swatch--bg h-auto bg-composed-wrapper bg-brand-slack"},c.a.createElement("div",{className:"bg-composed-wrapper--image bg-composed-img-3"}),c.a.createElement("div",{className:"bg-composed-wrapper--content text-light p-3"},c.a.createElement("h5",{className:"mb-1"},"Transaction"),c.a.createElement("p",{className:"mb-0 opacity-7"},"Slip")))),c.a.createElement(l.a,{className:"text-center card-body-avatar"},c.a.createElement("a",{href:"#/",onClick:function(n){return n.preventDefault()},className:"avatar-icon-wrapper shadow-sm rounded-circle d-100"},c.a.createElement("div",{className:"avatar-icon rounded-circle"},c.a.createElement("img",{alt:"...",className:"img-fluid",src:w.customer.photo_thumbnail_url}))),c.a.createElement(N.a,{title:"Customer Details",extraClasses:"ml20 mr20 mtn",align:"left"}),c.a.createElement(o.a,{container:!0,spacing:3,className:"pr20 pl20 mt10 mb20"},c.a.createElement(o.a,{item:!0,sm:6},c.a.createElement(f.a,{title:"Account Number",content:w.account_number})),c.a.createElement(o.a,{item:!0,sm:6},c.a.createElement(f.a,{title:"Name",content:"".concat(w.customer.title," ").concat(w.customer.name)})),c.a.createElement(o.a,{item:!0,sm:6},c.a.createElement(f.a,{title:"Phone Number",content:w.customer.phone_number})),c.a.createElement(o.a,{item:!0,sm:6},c.a.createElement(f.a,{title:"Daily Contribution Amount",content:"\u20a6"+parseInt(w.customer.daily_contribution_amount).toLocaleString()})),c.a.createElement(o.a,{item:!0,sm:6},c.a.createElement(f.a,{title:"Current Balance",content:"\u20a6"+parseFloat(w.customer.main_balance).toLocaleString()})),c.a.createElement(o.a,{item:!0,sm:6},c.a.createElement(f.a,{title:"Account Officer",content:w.customer.account_officer_info.name}))),c.a.createElement(N.a,{title:"Transaction Details",extraClasses:"ml20 mr20 mt40",align:"left"}),c.a.createElement(o.a,{container:!0,spacing:3,className:"pr20 pl20 mt10 mb20"},c.a.createElement(o.a,{item:!0,sm:6},c.a.createElement(f.a,{title:"Transaction ID",content:w.transaction_id})),c.a.createElement(o.a,{item:!0,sm:6},c.a.createElement(f.a,{title:"Amount",content:"\u20a6".concat(parseFloat(w.amount).toLocaleString())})),c.a.createElement(o.a,{item:!0,sm:6},c.a.createElement(f.a,{title:"Amount In Words",content:w.amount_in_words})),c.a.createElement(o.a,{item:!0,sm:6},c.a.createElement(f.a,{title:"Description",content:w.transaction_type})),c.a.createElement(o.a,{item:!0,sm:6},c.a.createElement(f.a,{title:"Collector",content:"".concat(w.collector.name," (").concat(w.collector.staff_description,")")})),c.a.createElement(o.a,{item:!0,sm:6},c.a.createElement(f.a,{title:"Branch",content:w.branch.branch_name})),c.a.createElement(o.a,{item:!0,sm:6},c.a.createElement(f.a,{title:"Transaction Date",content:b.a.getUserFriendlyDateTime(w.transaction_date)})),c.a.createElement(o.a,{item:!0,sm:6},c.a.createElement(f.a,{title:"SMS Sent?",content:w.sms_sent||"-N/A-"})),c.a.createElement(o.a,{item:!0,sm:6},c.a.createElement(f.a,{title:"Posted By",content:w.created_by||"-N/A-"}))),c.a.createElement("div",{className:"no-print"},c.a.createElement("div",{className:"p20 d-flex align-items-between justify-content-between"},c.a.createElement(s.a,{type:"button",className:"btn-second font-weight-bold",onClick:function(){b.a.hideNonPrintableArea(),window.print(),b.a.hideNonPrintableArea(!1)}},c.a.createElement(E.a,null)," \xa0 Print"),c.a.createElement(s.a,{type:"button",className:"btn-second font-weight-bold",onClick:function(){window.close()}},c.a.createElement(g.a,null)," \xa0 Close")))))))):(t(Object(_.a)("This record you are trying to view does not exist. Please try again later!","error")),null)}}}]);