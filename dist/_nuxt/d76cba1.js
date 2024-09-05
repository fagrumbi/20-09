(window.webpackJsonp=window.webpackJsonp||[]).push([[63,11],{440:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String},desc:{type:String}}},o=n(16),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center border rounded-br-md rounded-bl-md py-10"},[e("svg",{staticClass:"mx-auto h-12 w-12 text-gray-400",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"vector-effect":"non-scaling-stroke","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"}})]),t._v(" "),e("h3",{staticClass:"mt-2 text-sm font-semibold text-gray-900"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v(t._s(t.desc)+".")])])}),[],!1,null,null,null);e.default=component.exports},684:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(55),n(43),n(36),n(42),n(21),n(10),n(37),n(440)),l={layout:"user-dashboard",head:function(){return{title:"Bastons Banks | User Dashboard",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Mobile Banking, Credit Cards, Mortgages, Auto Loan"},{hid:"keywords",name:"keywords",content:"Mobile Banking, Credit Cards, Mortgages, Auto Loan"},{hid:"og:title",property:"og:title",content:"Bastons Banks | User Dashboard"},{hid:"og:description",property:"og:description",content:"Mobile Banking, Credit Cards, Mortgages, Auto Loan"},{hid:"og:type",property:"og:type",content:"website"},{hid:"og:url",property:"og:url",content:"https://www.bastonsbanks.com/user/dashboard/deposits"},{hid:"og:image",property:"og:image",content:"@/assets/img/preview.png"},{hid:"twitter:card",name:"twitter:card",content:""},{hid:"twitter:title",name:"twitter:title",content:"Bastons Banks | User Dashboard"},{hid:"twitter:description",name:"twitter:description",content:"Mobile Banking, Credit Cards, Mortgages, Auto Loan"},{hid:"twitter:image",name:"twitter:image",content:"@/assets/img/preview.png"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}]}},components:{Modal:n(176).default,EmptyState:o.default},data:function(){return{user:{},transactionsList:[],isModalVisible:!1,selectedTransaction:{},loading:!1,depositsDateRange:""}},created:function(){this.fetchTransactions()},mounted:function(){this.getUser()},methods:{downloadDeposits:function(){this.$downloadCSV(this.transactionsList,"deposit-data.csv")},fetchTransactions:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data,o,l,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,n=JSON.parse(sessionStorage.getItem("auth")),t.loading=!0,e.prev=5,e.next=8,fetch("https://fidelityvalues.onrender.com/graphql/query",{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer "+n},body:JSON.stringify({query:"\n        query {\n          getUsersTransactions {\n            id\n            amount\n            beneficiaryName\n            beneficiaryAccountNumber\n            receivingBankName\n            routingNumber\n            wallet\n            transactionType\n            transactionStatus\n            user {\n              id\n              name\n              email\n              role\n              phoneNumber\n              dob\n              gender\n              ssn\n              occupation\n              country\n              city\n              zip\n              address\n              accountCurrency\n              pin\n              passport\n              identification\n              Status\n              PlanType\n              accountBalance\n              cardBalance\n              cardNumber\n              expiry\n              cvv\n              eth\n              btc\n              timeAdded\n            }\n            proof\n            timeAdded\n          }\n        }\n      "})});case 8:return r=e.sent,e.next=11,r.json();case 11:null!=(data=e.sent)&&data.errors?t.$toastr.e(data.errors[0].message):(o=data.data.getUsersTransactions,t.transactionsList=o.filter((function(t){return"deposit"===t.transactionType})),l=t.transactionsList.map((function(t){return new Date(t.timeAdded)})),c=new Date(Math.min.apply(null,l)),d=new Date(Math.max.apply(null,l)),t.depositsDateRange="Withdrawals from ".concat(c.toISOString().split("T")[0]," to ").concat(d.toISOString().split("T")[0]));case 13:return e.prev=13,t.loading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[5,,13,16]])})))()},formatDateTime:function(t){if("string"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))return"Invalid Date";return t.toLocaleDateString("en-US",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"})},formatNumberAsDollar:function(t){return null==t?void 0:t.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})},previewTransaction:function(data){this.isModalVisible=!0,this.selectedTransaction=data},getUser:function(){var t=JSON.parse(sessionStorage.getItem("user"));this.user=t}}},c=n(16),component=Object(c.a)(l,(function(){var t,e,n,r,o,l,c,d,m,v,x=this,y=x._self._c;return y("main",[y("div",{staticClass:"px-4 sm:px-6 lg:px-8"},[y("div",{staticClass:"sm:flex sm:items-center"},[y("div",{staticClass:"sm:flex-auto"},[y("h1",{staticClass:"text-base font-semibold leading-6 text-gray-900"},[x._v("Deposits")]),x._v(" "),y("p",{staticClass:"mt-2 text-sm text-gray-700"},[x._v("For deposits completed from "+x._s(x.depositsDateRange))])]),x._v(" "),y("div",{staticClass:"mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},[y("button",{staticClass:"block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",attrs:{type:"button"},on:{click:x.downloadDeposits}},[x._v("Print")])])]),x._v(" "),null!==(t=x.transactionsList)&&void 0!==t&&t.length&&!x.loading?y("div",{staticClass:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"},[y("table",{staticClass:"min-w-full divide-y divide-gray-300"},[x._m(0),x._v(" "),y("tbody",{staticClass:"divide-y divide-gray-200 bg-white"},x._l(x.transactionsList,(function(t){var e,n,r,o,l,c;return y("tr",{key:t.id},[y("td",{staticClass:"whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0"},[y("div",{staticClass:"font-medium text-gray-900"},[x._v("\n              "+x._s(null!==(e=t.beneficiaryAccountNumber)&&void 0!==e&&e.length?t.beneficiaryAccountNumber:"Nil")+"\n            ")]),x._v(" "),y("div",{staticClass:"mt-1 truncate text-gray-500"},[x._v(x._s(null!==(n=t.beneficiaryName)&&void 0!==n&&n.length?t.beneficiaryName:"Nil")+"\n            ")])]),x._v(" "),y("td",{staticClass:"whitespace-nowrap px-3 py-5 text-sm text-gray-500"},[y("div",{staticClass:"text-gray-900"},[x._v(x._s(null!==(r=x.formatDateTime(t.timeAdded))&&void 0!==r?r:"Nil"))])]),x._v(" "),y("td",{staticClass:"whitespace-nowrap px-3 py-5 text-sm text-gray-500"},[y("span",{class:["Pending"===t.transactionStatus?"bg-yellow-500 py-2 text-xs text-white px-2.5 rounded-full":"Approved"===t.transactionStatus?"bg-green-500 py-2.5 text-xs text-white px-3 rounded-full":"Declined"===t.transactionStatus?"bg-red-500 py-2.5 text-xs text-white px-3 rounded-full":""]},[x._v("\n              "+x._s(null!==(o=t.transactionStatus)&&void 0!==o?o:"Nil"))])]),x._v(" "),y("td",{staticClass:"whitespace-nowrap px-3 py-5 text-sm text-gray-500"},[x._v("\n            "+x._s(null!==(l=x.user.accountCurrency)&&void 0!==l?l:"Nil")+x._s(null!==(c=x.formatNumberAsDollar(t.amount))&&void 0!==c?c:"Nil")+"\n          ")]),x._v(" "),y("td",{staticClass:"relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"},[y("a",{staticClass:"text-indigo-600 hover:text-indigo-900",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),x.previewTransaction(t)}}},[x._v("Edit"),y("span",{staticClass:"sr-only"},[x._v(", Lindsay Walton")])])])])})),0)])]):!x.loading||null!==(e=x.transactionsList)&&void 0!==e&&e.length?y("EmptyState",{attrs:{title:"No Deposits available",desc:"Please perform a withdrawal transaction"}}):y("div",{staticClass:"bg-white rounded-lg shadow-md p-4 animate-pulse"},[y("div",{staticClass:"w-full h-32 bg-gray-300 rounded mb-2"})])],1),x._v(" "),y("Modal",{attrs:{isVisible:x.isModalVisible},on:{"update:isVisible":function(t){x.isModalVisible=t},"update:is-visible":function(t){x.isModalVisible=t}}},[y("div",{staticClass:"overflow-hidden"},[y("div",{staticClass:"px-4 py-6 sm:px-6"},[y("h3",{staticClass:"text-base font-semibold leading-7 text-gray-900"},[x._v("Deposit Information")])]),x._v(" "),y("div",{staticClass:"border-t border-gray-100"},[y("dl",{staticClass:"divide-y divide-gray-100"},[y("div",{staticClass:"px-4 py-6 flex justify-between items-center sm:gap-4 sm:px-6"},[y("dt",{staticClass:"text-sm font-medium text-gray-900"},[x._v("Amount")]),x._v(" "),y("dd",{staticClass:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"},[x._v("\n\n              "+x._s(null!==(n=x.user.accountCurrency)&&void 0!==n?n:"Nil")+x._s(null!==(r=x.formatNumberAsDollar(x.selectedTransaction.amount))&&void 0!==r?r:"Nil")+"\n\n            ")])]),x._v(" "),y("div",{staticClass:"px-4 py-6 flex justify-between items-center sm:gap-4 sm:px-6"},[y("dt",{staticClass:"text-sm font-medium text-gray-900"},[x._v("Beneficiary Account Number")]),x._v(" "),y("dd",{staticClass:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"},[x._v("\n              "+x._s(null!==(o=x.selectedTransaction.beneficiaryAccountNumber)&&void 0!==o&&o.length?x.selectedTransaction.beneficiaryAccountNumber:"Nil"))])]),x._v(" "),y("div",{staticClass:"px-4 py-6 flex justify-between items-center sm:gap-4 sm:px-6"},[y("dt",{staticClass:"text-sm font-medium text-gray-900"},[x._v("Beneficiary Name")]),x._v(" "),y("dd",{staticClass:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"},[x._v("\n              "+x._s(null!==(l=x.selectedTransaction.beneficiaryName)&&void 0!==l&&l.length?x.selectedTransaction.beneficiaryName:"Nil"))])]),x._v(" "),y("div",{staticClass:"px-4 py-6 flex justify-between items-center sm:gap-4 sm:px-6"},[y("dt",{staticClass:"text-sm font-medium text-gray-900"},[x._v("Receiving Bank Name")]),x._v(" "),y("dd",{staticClass:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"},[x._v("\n              "+x._s(null!==(c=x.selectedTransaction.receivingBankName)&&void 0!==c&&c.length?x.selectedTransaction.receivingBankName:"Nil"))])]),x._v(" "),y("div",{staticClass:"px-4 py-6 flex justify-between items-center sm:gap-4 sm:px-6"},[y("dt",{staticClass:"text-sm font-medium text-gray-900"},[x._v("Routing Number")]),x._v(" "),y("dd",{staticClass:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"},[x._v(x._s(null!==(d=x.selectedTransaction.routingNumber)&&void 0!==d&&d.length?x.selectedTransaction.routingNumber:"Nil"))])]),x._v(" "),y("div",{staticClass:"px-4 py-6 flex justify-between items-center sm:gap-4 sm:px-6"},[y("dt",{staticClass:"text-sm font-medium text-gray-900"},[x._v("Wallet")]),x._v(" "),y("dd",{staticClass:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"},[x._v(x._s(null!==(m=x.selectedTransaction.wallet)&&void 0!==m&&m.length?x.selectedTransaction.wallet:"Nil"))])]),x._v(" "),y("div",{staticClass:"px-4 py-6 flex justify-between items-center sm:gap-4 sm:px-6"},[y("dt",{staticClass:"text-sm font-medium text-gray-900"},[x._v("Transaction Status")]),x._v(" "),y("dd",{staticClass:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"},[x._v("\n              "+x._s(null!==(v=x.selectedTransaction.transactionStatus)&&void 0!==v&&v.length?x.selectedTransaction.transactionStatus:"Nil"))])])])])]),x._v(" "),y("div",{staticClass:"w-full pt-10"},[y("button",{staticClass:"bg-green-500 text-white w-full py-2.5 rounded-md",on:{click:function(t){x.isModalVisible=!1}}},[x._v("Close")])])])],1)}),[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{staticClass:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0",attrs:{scope:"col"}},[t._v("Account\n          ")]),t._v(" "),e("th",{staticClass:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",attrs:{scope:"col"}},[t._v("Date")]),t._v(" "),e("th",{staticClass:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",attrs:{scope:"col"}},[t._v("Status")]),t._v(" "),e("th",{staticClass:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",attrs:{scope:"col"}},[t._v("Amount")]),t._v(" "),e("th",{staticClass:"relative py-3.5 pl-3 pr-4 sm:pr-0",attrs:{scope:"col"}},[e("span",{staticClass:"sr-only"},[t._v("Edit")])])])])}],!1,null,null,null);e.default=component.exports}}]);