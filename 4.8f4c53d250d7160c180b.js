(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{IJtC:function(t,e,n){"use strict";n.r(e),n.d(e,"AngularTestModule",(function(){return bt}));var o=n("ofXK"),c=n("tyNb"),r=n("3Pt+"),s=n("fXoL"),i=n("aceb");let l=(()=>{class t{constructor(t){this.elem=t,this.voted=new s.o}highlight(t){this.elem.nativeElement.style.color=t,this.elem.nativeElement.style.cursor="pointer"}onMouseEnter(){this.highlight(this.enterColor)}onMouseLeave(){this.highlight(this.leaveColor)}onMouseClick(){this.voted.emit("MouseClick")}ngOnDestroy(){console.log("Leave My Directive")}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(s.l))},t.\u0275dir=s.Ib({type:t,selectors:[["","appMyDirective",""]],hostBindings:function(t,e){1&t&&s.bc("mouseenter",(function(){return e.onMouseEnter()}))("mouseleave",(function(){return e.onMouseLeave()}))("click",(function(){return e.onMouseClick()}))},inputs:{enterColor:"enterColor",leaveColor:"leaveColor",testValue:"testValue"},outputs:{voted:"voted"}}),t})(),a=(()=>{class t{constructor(t){this.formBuilder=t,this.profileForm=this.formBuilder.group({firstName:["",r.p.required],email:["",r.p.compose([r.p.email,r.p.required])],address:this.formBuilder.group({street:["",r.p.compose([r.p.minLength(3),r.p.maxLength(6)])],city:[""],detail:this.formBuilder.group({state:[""],zip:[""]})})})}ngOnInit(){}onSubmit(){console.log(this.profileForm.value)}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(r.b))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-form"]],decls:39,vars:4,consts:[["accent","info"],["appMyDirective","",3,"enterColor","leaveColor"],[1,"form-style",3,"formGroup"],[1,"col-sm-12","col-md-6","col-lg-2"],["nbInput","","type","text","formControlName","firstName"],["nbInput","","type","email","formControlName","email"],["formGroupName","address",1,"form-style"],["nbInput","","type","text","formControlName","street","required",""],["nbInput","","type","text","formControlName","city"],["formGroupName","detail",1,"form-style"],["nbInput","","type","text","formControlName","state"],["nbInput","","type","text","formControlName","zip"],["nbButton","","status","info",1,"col-sm-12","col-md-4","col-lg-1",3,"disabled","click"]],template:function(t,e){1&t&&(s.Tb(0,"nb-card",0),s.Tb(1,"nb-card-header"),s.Tb(2,"h3",1),s.Ac(3,"\u8868\u55ae\u6e2c\u8a66"),s.Sb(),s.Sb(),s.Tb(4,"nb-card-body"),s.Tb(5,"form",2),s.Tb(6,"h5"),s.Ac(7,"\u6211\u7684\u8cc7\u6599"),s.Sb(),s.Tb(8,"div",3),s.Tb(9,"span"),s.Ac(10,"\u540d\u5b50 : "),s.Sb(),s.Ob(11,"input",4),s.Sb(),s.Tb(12,"div",3),s.Tb(13,"span"),s.Ac(14,"\u96fb\u90f5 : "),s.Sb(),s.Ob(15,"input",5),s.Sb(),s.Tb(16,"div",6),s.Tb(17,"h5"),s.Ac(18,"\u6211\u7684\u4f4f\u5740"),s.Sb(),s.Tb(19,"div",3),s.Tb(20,"span"),s.Ac(21,"\u8857\u9053 : "),s.Sb(),s.Ob(22,"input",7),s.Sb(),s.Tb(23,"div",3),s.Tb(24,"span"),s.Ac(25," \u57ce\u5e02 : "),s.Sb(),s.Ob(26,"input",8),s.Sb(),s.Tb(27,"div",9),s.Tb(28,"div",3),s.Tb(29,"span"),s.Ac(30,"\u5dde : "),s.Sb(),s.Ob(31,"input",10),s.Sb(),s.Tb(32,"div",3),s.Tb(33,"span"),s.Ac(34," Zip : "),s.Sb(),s.Ob(35,"input",11),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Tb(36,"nb-card-footer"),s.Tb(37,"button",12),s.bc("click",(function(){return e.onSubmit()})),s.Ac(38," \u9001\u51fa "),s.Sb(),s.Sb(),s.Sb()),2&t&&(s.Bb(2),s.jc("enterColor","red")("leaveColor",null),s.Bb(3),s.jc("formGroup",e.profileForm),s.Bb(32),s.jc("disabled",!e.profileForm.valid))},directives:[i.h,i.j,l,i.g,r.q,r.j,r.d,i.v,r.a,r.i,r.c,r.e,r.o,i.i,i.e],styles:[".form-style[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]}),t})();function b(t,e){1&t&&(s.Ac(0),s.ec(1,"json"),s.Tb(2,"p",2),s.Ac(3,"Hello Ng Template"),s.Sb()),2&t&&s.Cc(" ",s.fc(1,1,e.$implicit)," ")}function u(t,e){1&t&&s.Ob(0,"div")}const p=function(){return{key:1,value:"\u5433\u5c1a\u6069"}},d=function(t){return{$implicit:t}};let f=(()=>{class t{constructor(){this.childStr="Hello World from Child",this.childNum=100,this.childrenObj={a:"This is test 1",b:"This is test 2"}}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Hb({type:t,selectors:[["app-child"]],decls:5,vars:6,consts:[["data",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[2,"color","royalblue"]],template:function(t,e){if(1&t&&(s.Tb(0,"div"),s.Ac(1),s.Sb(),s.yc(2,b,4,3,"ng-template",null,0,s.zc),s.yc(4,u,1,0,"div",1)),2&t){const t=s.pc(3);s.Bb(1),s.Bc(e.childStr),s.Bb(3),s.jc("ngTemplateOutlet",t)("ngTemplateOutletContext",s.mc(4,d,s.lc(3,p)))}},directives:[o.t],pipes:[o.h],styles:[""]}),t})();const m=["buttonContent"],h=["buttonView"],g=["*"];function v(t,e){if(1&t){const t=s.Ub();s.Tb(0,"app-block"),s.Ac(1," \u6a19\u7c64 1 "),s.Tb(2,"button",0,2),s.bc("click",(function(){return s.rc(t),s.dc().tab=2})),s.Ac(5,"Next"),s.Sb(),s.Sb()}}function y(t,e){if(1&t){const t=s.Ub();s.Tb(0,"app-block"),s.Ac(1," \u6a19\u7c64 2 "),s.Tb(2,"button",0,2),s.bc("click",(function(){return s.rc(t),s.dc().tab=3})),s.Ac(5,"Next"),s.Sb(),s.Sb()}}function T(t,e){if(1&t){const t=s.Ub();s.Tb(0,"app-block"),s.Ac(1," \u6a19\u7c64 3 "),s.Tb(2,"button",0,2),s.bc("click",(function(){return s.rc(t),s.dc().tab=1})),s.Ac(5,"Home"),s.Sb(),s.Tb(6,"button",0,2),s.bc("click",(function(){return s.rc(t),s.dc().tab=2})),s.Ac(9,"Prev"),s.Sb(),s.Sb()}}let S=(()=>{class t{constructor(){}ngOnInit(){}ngAfterViewInit(){console.log(this.child)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Hb({type:t,selectors:[["app-parent"]],viewQuery:function(t,e){var n;1&t&&s.Ec(f,!0),2&t&&s.oc(n=s.cc())&&(e.child=n.first)},decls:8,vars:0,template:function(t,e){1&t&&(s.Tb(0,"h2"),s.Ac(1,"Child"),s.Sb(),s.Ob(2,"app-child"),s.Ob(3,"hr"),s.Tb(4,"h2"),s.Ac(5,"Parent"),s.Sb(),s.Ob(6,"app-my-tab"),s.Ob(7,"hr"))},directives:function(){return[f,A]},styles:[""]}),t})(),C=(()=>{class t{ngAfterContentInit(){console.log(this.buttonContent)}ngAfterViewInit(){console.log(this.buttonView)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Hb({type:t,selectors:[["app-block"]],contentQueries:function(t,e,n){var o;1&t&&s.Gb(n,m,!0),2&t&&s.oc(o=s.cc())&&(e.buttonContent=o.first)},viewQuery:function(t,e){var n;1&t&&s.Ec(h,!0),2&t&&s.oc(n=s.cc())&&(e.buttonView=n.first)},ngContentSelectors:g,decls:2,vars:0,consts:[[1,"block"]],template:function(t,e){1&t&&(s.ic(),s.Tb(0,"div",0),s.hc(1),s.Sb())},styles:[".block[_ngcontent-%COMP%] {\n                border: 1px solid black;\n            }"]}),t})(),A=(()=>{class t{constructor(){this.tab=1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Hb({type:t,selectors:[["app-my-tab"]],decls:9,vars:3,consts:[[3,"click"],[4,"ngIf"],["buttonView","","buttonContent",""]],template:function(t,e){1&t&&(s.Tb(0,"button",0),s.bc("click",(function(){return e.tab=1})),s.Ac(1,"Tab 1"),s.Sb(),s.Tb(2,"button",0),s.bc("click",(function(){return e.tab=2})),s.Ac(3,"Tab 2"),s.Sb(),s.Tb(4,"button",0),s.bc("click",(function(){return e.tab=3})),s.Ac(5,"Tab 3"),s.Sb(),s.yc(6,v,6,0,"app-block",1),s.yc(7,y,6,0,"app-block",1),s.yc(8,T,10,0,"app-block",1)),2&t&&(s.Bb(6),s.jc("ngIf",1===e.tab),s.Bb(1),s.jc("ngIf",2===e.tab),s.Bb(1),s.jc("ngIf",3===e.tab))},directives:[o.o,C],encapsulation:2}),t})(),w=(()=>{class t{constructor(){console.log("\u4f60\u5728 core service \u4e2d!!!")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),O=(()=>{class t{constructor(){console.log("\u4f60\u5728 new service \u4e2d!!!")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),k=(()=>{class t{constructor(){}ngOnInit(){console.log("Hello!!! Button")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Hb({type:t,selectors:[["app-button"]],decls:2,vars:0,template:function(t,e){1&t&&(s.Tb(0,"p"),s.Ac(1,"button works!"),s.Sb())},styles:[""]}),t})(),M=(()=>{class t{constructor(){}ngOnInit(){console.log("Hello!!! Card")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Hb({type:t,selectors:[["app-card"]],decls:2,vars:0,template:function(t,e){1&t&&(s.Tb(0,"p"),s.Ac(1,"card works!"),s.Sb())},styles:[""]}),t})();const B=["play"];let I=(()=>{class t{transform(t){return new Date(t).getFullYear()+"\u5e74"+(new Date(t).getMonth()+1)+"\u6708"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=s.Mb({name:"mydate",type:t,pure:!0}),t})(),j=(()=>{class t{constructor(t){this.elem=t,this.counter=new s.o,this.count=0}onMouseEnter(){this.highlight(this.enterColor)}highlight(t){this.elem.nativeElement.style.color=t,this.elem.nativeElement.style.cursor="pointer"}onMouseClick(){this.counter.emit(this.count++)}hitTest(){console.log("Hello !!!")}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(s.l))},t.\u0275dir=s.Ib({type:t,selectors:[["","appPlay",""]],hostBindings:function(t,e){1&t&&s.bc("mouseenter",(function(){return e.onMouseEnter()}))("click",(function(){return e.onMouseClick()}))},inputs:{enterColor:"enterColor"},outputs:{counter:"counter"},exportAs:["Playful"]}),t})(),x=(()=>{class t{constructor(){this.myDateTime=new Date}mycounter(t){console.log("Here : "+t),this.play.hitTest()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Hb({type:t,selectors:[["app-play-here"]],viewQuery:function(t,e){var n;1&t&&s.Ec(B,!0),2&t&&s.oc(n=s.cc())&&(e.play=n.first)},decls:6,vars:4,consts:[["appPlay","",1,"test",3,"enterColor","counter"],["play","Playful"]],template:function(t,e){1&t&&(s.Tb(0,"div"),s.Ac(1),s.ec(2,"mydate"),s.Sb(),s.Tb(3,"div",0,1),s.bc("counter",(function(t){return e.mycounter(t)})),s.Ac(5,"App Play Here Component"),s.Sb()),2&t&&(s.Bb(1),s.Bc(s.fc(2,2,e.myDateTime)),s.Bb(2),s.jc("enterColor","yellow"))},directives:[j],pipes:[I],styles:[".test[_ngcontent-%COMP%] {color : red}"]}),t})(),N=(()=>{class t{constructor(){}mycounter(t){console.log("There : "+t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Hb({type:t,selectors:[["app-play-there"]],decls:3,vars:1,consts:[["appPlay","",1,"test",3,"enterColor","counter"],["testDirective",""]],template:function(t,e){1&t&&(s.Tb(0,"div",0,1),s.bc("counter",(function(t){return e.mycounter(t)})),s.Ac(2,"App Play There"),s.Sb()),2&t&&s.jc("enterColor","red")},directives:[j],styles:[".test[_ngcontent-%COMP%] {color : green}"]}),t})(),H=(()=>{class t{constructor(t,e){this.coreServiceService=t,this.newServiceService=e,this.name=""}ngOnInit(){}ngAfterViewInit(){console.log(this.parent.child)}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(w),s.Nb(O))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-playground"]],viewQuery:function(t,e){var n;1&t&&s.Ec(S,!0),2&t&&s.oc(n=s.cc())&&(e.parent=n.first)},decls:25,vars:2,consts:[[3,"name","nameChange"],[1,"col-sm-12","col-md-6","col-lg-2",2,"border","1px solid"],[1,"col-2","qweqwe",2,"border","1px solid"],[1,"col-4",2,"border","1px solid"],[1,"col-6",2,"border","1px solid"],[1,"col-10",2,"border","1px solid"],[1,"col-12",2,"border","1px solid"]],template:function(t,e){1&t&&(s.Ob(0,"app-parent"),s.Ob(1,"hr"),s.Ob(2,"app-button"),s.Ob(3,"app-card"),s.Ob(4,"hr"),s.Tb(5,"h2"),s.Ac(6,"Playground"),s.Sb(),s.Tb(7,"app-info",0),s.bc("nameChange",(function(t){return e.name=t})),s.Sb(),s.Ac(8),s.Ob(9,"app-play-here"),s.Ob(10,"app-play-there"),s.Tb(11,"div",1),s.Ac(12,"\u88dd\u7f6e\u97ff\u61c9\u5f0f\u5e03\u5c40"),s.Sb(),s.Tb(13,"div",1),s.Ac(14,"\u88dd\u7f6e\u97ff\u61c9\u5f0f\u5e03\u5c40"),s.Sb(),s.Tb(15,"div",2),s.Ac(16,"1 of 2"),s.Sb(),s.Tb(17,"div",3),s.Ac(18,"2 of 2"),s.Sb(),s.Tb(19,"div",4),s.Ac(20,"1 of 3"),s.Sb(),s.Tb(21,"div",5),s.Ac(22,"2 of 3"),s.Sb(),s.Tb(23,"div",6),s.Ac(24,"3 of 3"),s.Sb()),2&t&&(s.Bb(7),s.jc("name",e.name),s.Bb(1),s.Cc("\nResult: ",e.name," "))},directives:function(){return[S,k,M,D,x,N]},styles:[".qweqwe[_ngcontent-%COMP%]{color:#f89406}"]}),t})(),D=(()=>{class t{constructor(){this.name="Hello World",this.nameChange=new s.o}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Hb({type:t,selectors:[["app-info"]],inputs:{name:"name"},outputs:{nameChange:"nameChange"},decls:2,vars:1,consts:[["type","text",3,"ngModel","ngModelChange","input"]],template:function(t,e){1&t&&(s.Ac(0,"\u59d3\u540d: "),s.Tb(1,"input",0),s.bc("ngModelChange",(function(t){return e.name=t}))("input",(function(){return e.nameChange.emit(e.name)})),s.Sb()),2&t&&(s.Bb(1),s.jc("ngModel",e.name))},directives:[r.a,r.i,r.l],encapsulation:2}),t})();var P=n("6GTT"),L=n("xgIS"),F=n("Cfvw"),E=n("UXun"),V=n("7o/Q");class R{constructor(t){this.value=t}call(t,e){return e.subscribe(new q(t,this.value))}}class q extends V.a{constructor(t,e){super(t),this.value=e}_next(t){this.destination.next(this.value)}}var Q=n("Kqap"),G=n("vkgz"),_=n("lJxs"),J=n("tk/3"),K=n("mlCX");function $(t,e){if(1&t&&(s.Tb(0,"li"),s.Ac(1),s.Sb()),2&t){const t=e.$implicit;s.Bb(1),s.Bc(t.data)}}function z(t,e){if(1&t&&(s.Rb(0),s.Tb(1,"p"),s.Ac(2,"async pipe \u6e2c\u8a66"),s.Sb(),s.yc(3,$,2,1,"li",6),s.Qb()),2&t){const t=e.ngIf;s.Bb(3),s.jc("ngForOf",t)}}function U(t,e){1&t&&s.Pb(0)}let X=(()=>{class t{constructor(t,e,n){this.httpClient=t,this.ajaxService=e,this.activatedRoute=n,this.asyncLoad=!1,this.chooseForm="A",this.mapping=new Map([["A",W],["B",Y],["C",nt],["D",ot]])}ngOnInit(){this.httpClient.get("http://localhost:3000/api/testData1"),this.httpClient.get("http://localhost:3000/api/testData2");const t=this.httpClient.get("http://localhost:3000/modifyData").pipe(Object(E.a)(1));t.subscribe(t=>{console.log(t)}),this.todos$=t,setInterval(()=>{this.asyncLoad=!0},1e3)}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(J.b),s.Nb(K.a),s.Nb(c.a))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-testground"]],decls:26,vars:12,consts:[[4,"ngIf","ngIfElse"],["type","radio","name","form","id","formA","value","A",3,"ngModel","ngModelChange"],["type","radio","name","form","id","formB","value","B",3,"ngModel","ngModelChange"],["type","radio","name","form","id","formC","value","C",3,"ngModel","ngModelChange"],["type","radio","name","form","id","formD","value","D",3,"ngModel","ngModelChange"],[4,"ngComponentOutlet"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(s.Rb(0),s.Tb(1,"div"),s.Ac(2,"Async Pipe \u6e2c\u8a66\u5340"),s.Sb(),s.Ac(3),s.ec(4,"async"),s.Qb(),s.yc(5,z,4,1,"ng-container",0),s.ec(6,"async"),s.Tb(7,"p"),s.Ac(8,"\u9078\u64c7\u5143\u4ef6"),s.Sb(),s.Tb(9,"div"),s.Tb(10,"input",1),s.bc("ngModelChange",(function(t){return e.chooseForm=t})),s.Sb(),s.Tb(11,"label"),s.Ac(12,"\u5143\u4ef6\u4e00"),s.Sb(),s.Sb(),s.Tb(13,"div"),s.Tb(14,"input",2),s.bc("ngModelChange",(function(t){return e.chooseForm=t})),s.Sb(),s.Tb(15,"label"),s.Ac(16,"\u5143\u4ef6\u4e8c"),s.Sb(),s.Sb(),s.Tb(17,"div"),s.Tb(18,"input",3),s.bc("ngModelChange",(function(t){return e.chooseForm=t})),s.Sb(),s.Tb(19,"label"),s.Ac(20,"\u5143\u4ef6\u4e09"),s.Sb(),s.Sb(),s.Tb(21,"div"),s.Tb(22,"input",4),s.bc("ngModelChange",(function(t){return e.chooseForm=t})),s.Sb(),s.Tb(23,"label"),s.Ac(24,"\u5143\u4ef6\u56db"),s.Sb(),s.Sb(),s.yc(25,U,1,0,"ng-container",5)),2&t&&(s.Bb(3),s.Cc(" ",s.fc(4,8,e.counter$),"\n"),s.Bb(2),s.jc("ngIf",s.fc(6,10,e.todos$))("ngIfElse",e.asyncLoad),s.Bb(5),s.jc("ngModel",e.chooseForm),s.Bb(4),s.jc("ngModel",e.chooseForm),s.Bb(4),s.jc("ngModel",e.chooseForm),s.Bb(4),s.jc("ngModel",e.chooseForm),s.Bb(3),s.jc("ngComponentOutlet",e.mapping.get(e.chooseForm)))},directives:[o.o,r.m,r.a,r.i,r.l,o.m,o.n],pipes:[o.b],styles:[""]}),t})(),W=(()=>{class t{constructor(t){this.globalService=t,this.name="A",console.log(this.globalService)}ngOnInit(){Object(L.a)(document.getElementById("plus"),"click").pipe(t=>t.lift(new R(1)),Object(Q.a)((t,e)=>+t+ +e)).subscribe(t=>console.log("\u52a0\u6e1b\u8a08\u6578\u5668 : "+t))}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(P.a))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-component-a"]],features:[s.Ab([P.a])],decls:7,vars:1,consts:[["id","plus"],["id","minus"]],template:function(t,e){1&t&&(s.Tb(0,"div"),s.Tb(1,"p"),s.Ac(2),s.Sb(),s.Tb(3,"button",0),s.Ac(4,"+"),s.Sb(),s.Tb(5,"button",1),s.Ac(6,"-"),s.Sb(),s.Sb()),2&t&&(s.Bb(2),s.Cc("This is Template ",e.name,""))},encapsulation:2}),t})(),Y=(()=>{class t{constructor(t,e){this.globalService=t,this.changeDetectorRef=e,this.name="B",this.i=0,console.log(this.globalService.globalValObj)}detach(){this.changeDetectorRef.detach()}reattach(){this.changeDetectorRef.reattach()}toggle(){this.changeDetectorRef.detectChanges()}add(){this.i++}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(P.a),s.Nb(s.h))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-component-b"]],decls:12,vars:2,consts:[[3,"click"]],template:function(t,e){1&t&&(s.Tb(0,"div"),s.Ac(1),s.Sb(),s.Tb(2,"button",0),s.bc("click",(function(){return e.detach()})),s.Ac(3,"Detach"),s.Sb(),s.Tb(4,"button",0),s.bc("click",(function(){return e.reattach()})),s.Ac(5,"Reattach"),s.Sb(),s.Tb(6,"button",0),s.bc("click",(function(){return e.toggle()})),s.Ac(7,"Toggle"),s.Sb(),s.Tb(8,"button",0),s.bc("click",(function(){return e.add()})),s.Ac(9,"Add"),s.Sb(),s.Tb(10,"div"),s.Ac(11),s.Sb()),2&t&&(s.Bb(1),s.Cc("This is Template ",e.name,""),s.Bb(10),s.Cc("\u73fe\u5728\u6578\u503c : ",e.i,""))},encapsulation:2}),t})();const Z=new s.r("",{providedIn:"root",factory:()=>({LogLevel:"Default"})}),tt=new s.r(""),et=new s.r("");let nt=(()=>{class t{constructor(t,e,n){this.configToken=t,this.stringToken=e,this.numberToken=n,this.name="C",console.log(t.LogLevel),console.log(e),console.log(n)}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(Z),s.Nb(tt),s.Nb(et))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-component-c"]],features:[s.Ab([{provide:Z,useValue:{LogLevel:"Hello Your"}},{provide:tt,useValue:"World"},{provide:et,useValue:100}])],decls:2,vars:1,template:function(t,e){1&t&&(s.Tb(0,"div"),s.Ac(1),s.Sb()),2&t&&(s.Bb(1),s.Cc("This is Template ",e.name,""))},encapsulation:2}),t})(),ot=(()=>{class t{constructor(t){this.ajaxService=t,this.testdata1=[],this.ajaxService.getAPI("/testData1").then(t=>{console.log(t.response)}),this.ajaxService.getAPI("/testData2").then(t=>{console.log(t.response)})}ngOnInit(){Object(F.a)([1,2,3,4,5]).pipe(Object(G.a)(t=>console.log(t)),Object(_.a)(t=>t+10),Object(G.a)(t=>this.testdata1.push(t))).subscribe(t=>console.log(t)),console.log(this.testdata1)}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(K.a))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-component-d"]],decls:2,vars:0,template:function(t,e){1&t&&(s.Tb(0,"div"),s.Ac(1,"This is Template D"),s.Sb())},encapsulation:2}),t})();const ct=[{path:"form",component:a},{path:"playground",component:H},{path:"testground",component:X}];let rt=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(e){return new(e||t)},imports:[[c.h.forChild(ct)],c.h]}),t})();var st=n("tR1z"),it=n("RtG9");let lt=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(e){return new(e||t)},imports:[[o.c]]}),t})(),at=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(e){return new(e||t)},imports:[[o.c]]}),t})(),bt=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(e){return new(e||t)},imports:[[at,o.c,lt,i.R,i.u,st.a,r.f,r.n,it.a,rt]]}),t})()}}]);