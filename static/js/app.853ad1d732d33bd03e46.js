webpackJsonp([1],{"0aER":function(t,a){},Guc3:function(t,a){},IMTU:function(t,a){},InLD:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("7+uW"),r={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]},s=e("VU/8")(null,r,!1,null,null,null).exports,i=e("/ocq"),o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main"},[e("div",{staticClass:"left-bar"},[e("router-link",{attrs:{to:"/admin/aphorisms"}},[t._v("Афоризмы")]),t._v(" "),e("router-link",{attrs:{to:"/admin/meterials"}},[t._v("Материалы")]),t._v(" "),e("router-link",{attrs:{to:"/admin/subscribers"}},[t._v("Subscribers")]),t._v(" "),e("router-link",{attrs:{to:"/admin/tasks"}},[t._v("Tasks")])],1),t._v(" "),e("router-view")],1)},staticRenderFns:[]};var c=e("VU/8")({},o,!1,function(t){e("ntOU")},"data-v-51cc5c4f",null).exports,u=e("Dd8w"),d=e.n(u),h=e("Xxa5"),l=e.n(h),p=e("exGp"),m=e.n(p),v=e("mtWM"),f=e.n(v),_=function(t){t?f.a.defaults.headers.common.Authorization="Bearer "+t:delete f.a.defaults.headers.common.Authorization},b=function(){return localStorage.token},g={data:function(){return{aphorismData:[],count:0}},mounted:function(){var t=this;return m()(l.a.mark(function a(){var e;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.get("http://83.166.242.213/v1/admin/aphorisms");case 2:e=a.sent,t.aphorismData=e.data.data,t.count=e.data.count;case 5:case"end":return a.stop()}},a,t)}))()},methods:{authorFilterHandler:function(){var t=m()(l.a.mark(function t(a){var e,n;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=a?"?author="+a:"",t.next=3,f.a.get("http://83.166.242.213/v1/admin/aphorisms"+e);case 3:n=t.sent,this.aphorismData=n.data.data,this.count=n.data.count;case 6:case"end":return t.stop()}},t,this)}));return function(a){return t.apply(this,arguments)}}(),bodyFilterHandler:function(){var t=m()(l.a.mark(function t(a){var e,n;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=a?"?body="+a:"",t.next=3,f.a.get("http://83.166.242.213/v1/admin/aphorisms"+e);case 3:n=t.sent,this.aphorismData=n.data.data,this.count=n.data.count;case 6:case"end":return t.stop()}},t,this)}));return function(a){return t.apply(this,arguments)}}(),deleteAphorism:function(t){var a=this;f.a.delete("http://83.166.242.213/v1/admin/aphorisms",{data:{_id:t}}).then(function(){a.aphorismData=a.aphorismData.filter(function(a){return a._id!==t})})},addAphorism:function(t){var a=this,e=t.author,n=t.body,r=t.tags,s=t.category;f.a.post("http://83.166.242.213/v1/admin/aphorisms",{author:e,body:n,tags:r.split(", "),category:s}).then(function(t){a.aphorismData.unshift({author:e,body:n,tags:r.split(", ").map(function(t){return{name:t}}),_id:t.data._id}),a.$modal.hide("add-aphorism")})},updateAphorism:function(t){var a=this,e=t.author,n=t.body,r=t.tags,s=t._id,i=t.category;f.a.put("http://83.166.242.213/v1/admin/aphorisms",{_id:s,author:e,body:n,tags:r.split(","),category:i}).then(function(){a.aphorismData=a.aphorismData.map(function(t){return t._id===s?d()({},t,{author:e,body:n,tags:r.split(", ").map(function(t){return{name:t}}),_id:s,category:i}):t}),a.$modal.hide("add-aphorism")})},show:function(t,a){this.$modal.show("add-aphorism",{func:this[t],item:a})},hide:function(){this.$modal.hide("add-aphorism")}}},w={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"aphorisms"},[e("div",[t._v("\n    123\n    ")]),t._v(" "),e("input",{staticClass:"add-aphorism",attrs:{type:"button",value:"Добавить"},on:{click:function(a){return t.show("addAphorism")}}}),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("ul",{staticClass:"aphorisms-header"},[a("div",{staticClass:"header-input-filter"}),this._v(" "),a("div",{staticClass:"header-input-filter"})])}]};var y=e("VU/8")(g,w,!1,function(t){e("Guc3")},"data-v-6084a3b0",null).exports,x={data:function(){return{subscribers:[],count:0}},mounted:function(){var t=this;return m()(l.a.mark(function a(){var e;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.get("http://83.166.242.213/v1/admin/subscribers");case 2:e=a.sent,t.subscribers=e.data.data,t.count=e.data.count;case 5:case"end":return a.stop()}},a,t)}))()}},E={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",[t._v("Subscribers")]),t._v(" "),e("table",{staticClass:"table"},[t._m(0),t._v(" "),t._l(t.subscribers,function(a){return e("tbody",{key:a.id},[e("tr",[e("td",[t._v(t._s(a.id))]),t._v(" "),e("td",[t._v(t._s(a.email))]),t._v(" "),e("td",[t._v(t._s(a.created_at.slice(0,-8).replace("T"," ")))])])])})],2)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[this._v("#")]),this._v(" "),a("th",{attrs:{scope:"col"}},[this._v("Email")]),this._v(" "),a("th",{attrs:{scope:"col"}},[this._v("Created")])])])}]};var k=e("VU/8")(x,E,!1,function(t){e("0aER")},"data-v-8495b27a",null).exports,$={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("h1",[this._v("Materials")])])}]};var C=e("VU/8")({},$,!1,function(t){e("InLD")},"data-v-df1eea64",null).exports,D={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("h1",[this._v("Tasks")])])}]};var U=e("VU/8")({},D,!1,function(t){e("IMTU")},"data-v-7d0ee5e4",null).exports,A={data:function(){return{email:"",password:""}},methods:{auth:function(t){var a=t.email,e=t.password;f.a.post("http://83.166.242.213/user/login",{email:a,password:e}).then(function(t){var a=t.data.token;_(a),function(t){localStorage.token=t}(a),V.push("/admin")}).catch(function(t){alert(t.message),console.log(t)})}}},R={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",{staticClass:"form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",name:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),t._v(" "),e("br"),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"text",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}}),t._v(" "),e("br"),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.auth({email:t.email,password:t.password})}}},[t._v("Primary")])])},staticRenderFns:[]};var F=e("VU/8")(A,R,!1,function(t){e("QOqE")},"data-v-79f6ac9c",null).exports;n.a.use(i.a);var L=new i.a({routes:[{path:"/admin",component:c,name:"Main",children:[{path:"aphorisms",component:y,name:"Aphorisms"},{path:"subscribers",component:k,name:"Subscribers"},{path:"meterials",component:C},{path:"tasks",component:U}]},{path:"/admin/login",component:F,name:"Login"}],mode:"history",base:Object({NODE_ENV:"production"}).BASE_URL});L.beforeEach(function(t,a,e){b()?(_(b()),f.a.get("http://83.166.242.213/user/auth").then(function(){e()}).catch(function(){"Login"!==t.name?e({name:"Login"}):e()})):"Login"!==t.name?e({name:"Login"}):e()});var V=L;n.a.config.productionTip=!1,new n.a({el:"#app",router:V,components:{App:s},template:"<App/>"})},QOqE:function(t,a){},ntOU:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.853ad1d732d33bd03e46.js.map