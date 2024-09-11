(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{576:function(t,e,r){"use strict";r.r(e);var o=r(6),n=(r(55),r(21),r(10),{data:function(){return{processing:!1,form:{amount:"",wallet:""}}},methods:{handleBuyCrypto:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.processing=!0,r=JSON.parse(sessionStorage.getItem("auth")),e.prev=3,e.next=7,fetch("https://api.bastonsbanks.com/graphql/query",{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer "+r},body:JSON.stringify({query:"\n          mutation newTransaction($input: NewTransaction!) {\n            newTransaction(input: $input)\n          }\n        ",variables:{input:{amount:t.form.amount,wallet:t.form.wallet,transactionType:"withdrawal"}}})});case 7:return o=e.sent,e.next=10,o.json();case 10:null!=(data=e.sent)&&data.errors?t.$toastr.e(data.errors[0].message):(t.$toastr.s("You have successfully purchased crypto"),t.form.amount,t.form.wallet,t.$emit("cryptoPurchaseSuccess"));case 12:return e.prev=12,t.processing=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[3,,12,15]])})))()}},computed:{isFormEmpty:function(){return!(!this.form.amount||!this.form.wallet)}}}),l=r(16),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("form",{staticClass:"space-y-6 p-4",on:{submit:function(e){return e.preventDefault(),t.handleBuyCrypto.apply(null,arguments)}}},[e("div",[e("label",{staticClass:"block text-sm font-medium leading-6 text-gray-900",attrs:{for:"currency"}},[t._v("I want to buy")]),t._v(" "),e("div",{staticClass:"mt-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.amount,expression:"form.amount"}],staticClass:"block w-full rounded-md py-2.5 px-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 border-[0.6px] bg-gray-100 border-gray-500 sm:text-sm sm:leading-6",attrs:{type:"tel"},domProps:{value:t.form.amount},on:{input:function(e){e.target.composing||t.$set(t.form,"amount",e.target.value)}}})])]),t._v(" "),e("div",[e("label",{staticClass:"block text-sm font-medium leading-6 text-gray-900",attrs:{for:"password"}},[t._v("Enter your BTC wallet\n      address")]),t._v(" "),e("p",{staticClass:"text-xs text-gray-500"},[t._v("Please enter the address you want your BTC sent to.")]),t._v(" "),e("div",{staticClass:"mt-2 flex"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.wallet,expression:"form.wallet"}],staticClass:"block w-full rounded-md py-2.5 px-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 border-[0.6px] bg-gray-100 border-gray-500 sm:text-sm sm:leading-6",attrs:{type:"tel"},domProps:{value:t.form.wallet},on:{input:function(e){e.target.composing||t.$set(t.form,"wallet",e.target.value)}}})])]),t._v(" "),e("div",[e("button",{staticClass:"flex w-full disabled:cursor-not-allowed disabled:opacity-25 justify-center rounded-md bg-yellow-600 px-3 py-2.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",attrs:{type:"submit",disabled:!t.isFormEmpty||t.processing}},[t._v("Proceed")])])])}),[],!1,null,null,null);e.default=component.exports}}]);