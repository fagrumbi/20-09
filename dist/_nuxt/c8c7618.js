(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{388:function(e,t,r){e.exports=r.p+"img/forgot.be35a9a.jpg"},680:function(e,t,r){"use strict";r.r(t);var o=[function(){var e=this,t=e._self._c;return t("div",[t("h1",{staticClass:"text-3xl font-bold"},[e._v("\n          Almost Done!\n        ")]),e._v(" "),t("p",{staticClass:"text-gray-500 text-sm leading-loose"},[e._v("\n          Please enter your reset password token and your new password.\n        ")])])},function(){var e=this._self._c;return e("div",{staticClass:"relative hidden w-0 flex-1 lg:block"},[e("img",{staticClass:"absolute inset-0 h-full w-full object-cover",attrs:{src:r(388),alt:""}})])}],n=r(6),l=(r(55),r(21),r(10),{layout:"admin-auth",head:function(){return{title:"Bastons Banks | User Reset Password",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Mobile Banking, Credit Cards, Mortgages, Auto Loan"},{hid:"keywords",name:"keywords",content:"Mobile Banking, Credit Cards, Mortgages, Auto Loan"},{hid:"og:title",property:"og:title",content:"Bastons Banks | User Reset Password"},{hid:"og:description",property:"og:description",content:"Mobile Banking, Credit Cards, Mortgages, Auto Loan"},{hid:"og:type",property:"og:type",content:"website"},{hid:"og:url",property:"og:url",content:"https://www.bastonsbanks.com/user/reset"},{hid:"og:image",property:"og:image",content:"@/assets/img/preview.png"},{hid:"twitter:card",name:"twitter:card",content:""},{hid:"twitter:title",name:"twitter:title",content:"Bastons Banks | User Reset Password"},{hid:"twitter:description",name:"twitter:description",content:"Mobile Banking, Credit Cards, Mortgages, Auto Loan"},{hid:"twitter:image",name:"twitter:image",content:"@/assets/img/preview.png"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}]}},data:function(){return{user:"",processing:!1,form:{resetCode:"",email:"",password:""}}},computed:{isFormEmpty:function(){return!(!this.form.password||!this.form.resetCode)}},mounted:function(){this.user=JSON.parse(sessionStorage.getItem("user-email"))},methods:{login:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.processing=!0,t.prev=2,t.next=5,fetch("https://fidelityvalues.onrender.com/graphql/query",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({query:"\n      mutation resetPassword($email: String!, $newPassword: String!, $resetCode: String!) {\n            resetPassword(email: $email, newPassword: $newPassword, resetCode: $resetCode)\n          }\n        ",variables:{email:e.user,newPassword:e.form.password,resetCode:e.form.resetCode}})});case 5:return r=t.sent,t.next=8,r.json();case 8:null!=(data=t.sent)&&data.errors?e.$toastr.e(data.errors[0].message):(sessionStorage.removeItem("user-email"),e.$toastr.s("Password reset was successfully. Please Login"),e.$router.push("/user/login"));case 10:return t.prev=10,e.processing=!1,t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[2,,10,13]])})))()}}}),d=r(16),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex min-h-full lg:h-screen"},[t("div",{staticClass:"flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"},[t("section",{staticClass:"grid place-content-center h-screen space-y-6"},[e._m(0),e._v(" "),t("form",{staticClass:"space-y-4",on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[t("div",{staticClass:"space-y-1 text-sm w-full"},[t("label",{staticClass:"block text-gray-900 font-medium",attrs:{for:"token"}},[e._v("Token")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.resetCode,expression:"form.resetCode"}],staticClass:"border-[0.6px] bg-gray-100 border-gray-500 w-full outline-none px-4 py-3 rounded-md text-gray-900",attrs:{id:"token",type:"tel",name:"token",placeholder:"Enter token"},domProps:{value:e.form.resetCode},on:{input:function(t){t.target.composing||e.$set(e.form,"resetCode",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"space-y-1 text-sm w-full"},[t("label",{staticClass:"block text-gray-900 font-medium",attrs:{for:"password"}},[e._v("New Password")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"border-[0.6px] bg-gray-100 border-gray-500 w-full outline-none px-4 py-3 rounded-md text-gray-900",attrs:{id:"password",type:"password",name:"password",placeholder:"Enter password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"w-full pt-6"},[t("button",{staticClass:"w-full shrink-0 text-xs disabled:cursor-not-allowed disabled:opacity-25 rounded-md border border-green-500 bg-green-600 px-12 py-3.5 font-medium text-white transition",class:[!e.isFormEmpty||e.processing?"opacity-25 cursor-not-allowed":""],attrs:{disabled:!e.isFormEmpty}},[e._v("\n            "+e._s(e.processing?"processing...":"Submit")+"\n          ")])])])])]),e._v(" "),e._m(1)])}),o,!1,null,null,null);t.default=component.exports}}]);