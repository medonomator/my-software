webpackJsonp([1],{"68C5":function(t,a){},NHnr:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=n("7+uW"),s=n("C/JF"),e=n("fhbW"),i=n("1e6/");s.c.add(e.a),o.a.component("font-awesome-icon",i.a);var r={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"header"},[a("router-link",{attrs:{to:"/admin"}},[this._v("Main")]),this._v(" "),a("router-link",{attrs:{to:"/admin/aphorisms"}},[this._v("Aphorisms")])],1),this._v(" "),a("router-view")],1)},staticRenderFns:[]};var p=n("VU/8")({name:"App"},r,!1,function(t){n("NVBc")},null,null).exports,u=n("/ocq"),m={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("Main")])},staticRenderFns:[]};var d=n("VU/8")({name:"Main",data:function(){return{msg:"Welcome to Your Vue.js App"}}},m,!1,function(t){n("jC+f")},"data-v-718512c2",null).exports,h=n("Dd8w"),c=n.n(h),l=n("mtWM"),f=n.n(l),v={data:function(){return{count:0,aphorismInputData:{author:"",body:"",tags:"",_id:""},handler:function(){}}},methods:{beforeOpen:function(t){var a=t.params,n=a.item,o=a.func;n&&(this.aphorismInputData=c()({},n,{tags:n.tags.map(function(t){return t.name}).join(", ")})),this.handler=o},beforeClose:function(){this.aphorismInputData={author:"",body:"",tags:""}}}},_={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("modal",{attrs:{name:"add-aphorism"},on:{"before-close":t.beforeClose,"before-open":t.beforeOpen}},[n("div",{staticClass:"modal-form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.aphorismInputData.author,expression:"aphorismInputData.author"}],attrs:{type:"text",placeholder:"Автор"},domProps:{value:t.aphorismInputData.author},on:{input:function(a){a.target.composing||t.$set(t.aphorismInputData,"author",a.target.value)}}}),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.aphorismInputData.body,expression:"aphorismInputData.body"}],staticClass:"aphorism-textarea",attrs:{rows:"10",cols:"45",placeholder:"Афоризм"},domProps:{value:t.aphorismInputData.body},on:{input:function(a){a.target.composing||t.$set(t.aphorismInputData,"body",a.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.aphorismInputData.tags,expression:"aphorismInputData.tags"}],attrs:{type:"text",placeholder:"Топик"},domProps:{value:t.aphorismInputData.tags},on:{input:function(a){a.target.composing||t.$set(t.aphorismInputData,"tags",a.target.value)}}}),t._v(" "),n("input",{staticClass:"add-aphorism",attrs:{type:"button",value:"Добавить"},on:{click:function(a){return t.handler(t.aphorismInputData)}}})])])},staticRenderFns:[]};var g={data:function(){return{aphorismData:[],count:0}},components:{"modal-form":n("VU/8")(v,_,!1,function(t){n("68C5")},null,null).exports},mounted:function(){var t=this;f.a.get("http://localhost:5000/admin/aphorisms").then(function(a){t.aphorismData=a.data.data,t.count=a.data.count})},methods:{deleteAphorism:function(t){var a=this;f.a.delete("http://localhost:5000/admin/aphorisms",{data:{_id:t}}).then(function(n){a.aphorismData=a.aphorismData.filter(function(a){return a._id!==t})})},addAphorism:function(t){var a=this,n=t.author,o=t.body,s=t.tags;f.a.post("http://localhost:5000/admin/aphorisms",{author:n,body:o,tags:s.split(", ")}).then(function(t){a.aphorismData.unshift({author:n,body:o,tags:s.split(", ").map(function(t){return{name:t}}),_id:t.data._id}),a.$modal.hide("add-aphorism")})},updateAphorism:function(t){var a=this,n=t.author,o=t.body,s=t.tags,e=t._id;f.a.put("http://localhost:5000/admin/aphorisms",{_id:e,author:n,body:o,tags:s.split(",")}).then(function(t){a.aphorismData=a.aphorismData.map(function(t){return t._id===e?c()({},t,{author:n,body:o,tags:s.split(", ").map(function(t){return{name:t}}),_id:e}):t}),a.$modal.hide("add-aphorism")})},show:function(t,a){this.$modal.show("add-aphorism",{func:this[t],item:a})},hide:function(){this.$modal.hide("add-aphorism")}}},b={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("div",[n("strong",[t._v(t._s(this.count))]),t._v(" Aphorisms\n  ")]),t._v(" "),n("modal-form"),t._v(" "),n("input",{staticClass:"add-aphorism",attrs:{type:"button",value:"Добавить"},on:{click:function(a){return t.show("addAphorism")}}}),t._v(" "),t._l(this.aphorismData,function(a){return n("ul",{key:a._id,staticClass:"aphorisms"},[n("li",{staticClass:"aphorisms-item"},[n("span",{staticClass:"aphorisms-author"},[t._v(t._s(a.author))]),t._v(" "),n("span",{staticClass:"aphorisms-body"},[t._v(t._s(a.body))]),t._v(" "),n("div",{staticClass:"aphorisms-tags"},t._l(a.tags,function(a,o){return n("span",{key:o},[t._v(t._s(a.name))])}),0),t._v(" "),n("font-awesome-icon",{staticClass:"icon-pencil",attrs:{icon:"pen"},on:{click:function(n){return t.show("updateAphorism",a)}}}),t._v(" "),n("span",{staticClass:"aphorisms-delete",on:{click:function(n){return t.deleteAphorism(a._id)}}},[t._v("+")])],1)])})],2)},staticRenderFns:[]};var D=n("VU/8")(g,b,!1,function(t){n("qArt")},"data-v-6d96664c",null).exports;o.a.use(u.a);var y=new u.a({routes:[{path:"/admin",name:"Main",component:d},{path:"/admin/aphorisms",name:"Aphorisms",component:D}],mode:"history"}),C=n("rifk"),I=n.n(C);o.a.use(I.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:y,components:{App:p},template:"<App/>"})},NVBc:function(t,a){},"jC+f":function(t,a){},qArt:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.edaddaebc76640445115.js.map