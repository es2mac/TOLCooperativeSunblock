(function(e){function t(t){for(var i,a,s=t[0],c=t[1],u=t[2],p=0,m=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(m.length)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},o={app:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("85ec"),o=n.n(i);o.a},1:function(e,t){},"1abf":function(e,t,n){"use strict";var i=n("8486"),o=n.n(i);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n(e.currentSection,{tag:"component",attrs:{customData:e.customData},on:{proceed:e.onProceed}})],1)},r=[],a=(n("c975"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section1context"}},[n("h1",[e._v("Before eveything begins, let’s learn some contexts about sunblocks.")]),e.customData?n("NamesDisplay",{attrs:{names:e.customData}}):e._e(),e.customData&&e.customData.partner?n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v(" Let's start ")]):n("p",[e._v(" (If you're testing, you can use two browser windows) ")])],1)}),s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{directives:[{name:"show",rawName:"v-show",value:e.names,expression:"names"}],attrs:{id:"namesdisplay"}},[e._v(" You are "),n("span",{staticClass:"user-name"},[e._v(e._s(e.names.me))]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.names.partner,expression:"names.partner"}]},[e._v(", and your partner is ")]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.names.partner,expression:"names.partner"}],staticClass:"user-name"},[e._v(e._s(e.names.partner))])])},u=[],l={name:"NamesDisplay",props:["names"]},p=l,m=(n("1abf"),n("2877")),h=Object(m["a"])(p,c,u,!1,null,null,null),d=h.exports,v={name:"Section1Context",components:{NamesDisplay:d},props:["customData"]},f=v,b=Object(m["a"])(f,a,s,!1,null,"59207fca",null),_=b.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section1video"}},[n("iframe",{attrs:{width:"720",height:"405",src:"https://www.youtube.com/embed/iokXPuCA2c0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Continue")])])},k=[],y={name:"Section1Video"},x=y,w=Object(m["a"])(x,g,k,!1,null,"771555ea",null),S=w.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section1welcome"}},[n("h1",[e._v("Welcome to the JigSaw activity!")]),n("p",[e._v(" In this video, you will watch three clips different from your partner. After each clip, you will discuss and share what you have learned with your partner. As your partner is totally dependent on you to understand the knowledge component, make sure you can deliver the key content to him / her in a clear and correct way. ")]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Let's start")])])},$=[],A={name:"Section1Welcome"},O=A,Q=Object(m["a"])(O,D,$,!1,null,"68449c6e",null),j=Q.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section2cover"}},[n("h1",[e._v("Section 2")]),"A"==e.customData.assignment?n("h1",[e._v("How does UVA harm the skin?")]):n("h1",[e._v("How does UVB harm the skin?")]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Let's start")])])},T=[],P={name:"Section2Cover",props:["customData"]},C=P,V=Object(m["a"])(C,E,T,!1,null,"0188f70a",null),W=V.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section2video"}},[n("iframe",{attrs:{width:"720",height:"405",src:e.videoUrl,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Continue")])])},q=[],F={name:"Section2Video",props:["customData"],computed:{videoUrl:function(){return"A"==this.customData.assignment?"https://www.youtube.com/embed/J4b7MgMvsnU":"https://www.youtube.com/embed/DHN_JxiXx0Q"}}},H=F,M=Object(m["a"])(H,U,q,!1,null,"6abc6488",null),N=M.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section2q1"}},[n("h1",[e._v("Question 1/2")]),"A"==e.customData.assignment?n("div",[n("p",[e._v("What effect would UVA bring to our skin?")]),n("input",{attrs:{type:"checkbox",name:"tanning",id:"uva-checkbox"}}),n("label",{attrs:{for:"tanning"}},[e._v("Tanning")]),n("input",{attrs:{type:"checkbox",name:"wrinkling",id:"uva-checkbox"}}),n("label",{attrs:{for:"wrinkling"}},[e._v("Wrinkling")]),n("input",{attrs:{type:"checkbox",name:"sunburn",id:"uva-checkbox"}}),n("label",{attrs:{for:"sunburn"}},[e._v("Sunburn")]),n("input",{attrs:{type:"checkbox",name:"aging",id:"uva-checkbox"}}),n("label",{attrs:{for:"aging"}},[e._v("Aging")])]):n("div",[n("p",[e._v("What effect would UVB bring to our skin?")]),n("input",{attrs:{type:"checkbox",name:"tanning",id:"uva-checkbox"}}),n("label",{attrs:{for:"tanning"}},[e._v("Tanning")]),n("input",{attrs:{type:"checkbox",name:"wrinkling",id:"uva-checkbox"}}),n("label",{attrs:{for:"wrinkling"}},[e._v("Wrinkling")]),n("input",{attrs:{type:"checkbox",name:"sunburn",id:"uva-checkbox"}}),n("label",{attrs:{for:"sunburn"}},[e._v("Sunburn")]),n("input",{attrs:{type:"checkbox",name:"aging",id:"uva-checkbox"}}),n("label",{attrs:{for:"aging"}},[e._v("Aging")])]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Submit")])])},z=[],B={name:"Section2Q1",props:["customData"]},J=B,R=Object(m["a"])(J,I,z,!1,null,"19664f4f",null),Y=R.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section2q2"}},[n("h1",[e._v("Question 2/2")]),(e.customData.assignment,n("div",[n("p",[e._v(" Inside ultraviolet light, there are three different types of UV radiation: UVA, UVB, and UVC, which one has the longest wavelength? ")]),n("input",{attrs:{type:"checkbox",name:"tanning",id:"uva-checkbox"}}),n("label",{attrs:{for:"tanning"}},[e._v("UVA")]),n("input",{attrs:{type:"checkbox",name:"wrinkling",id:"uva-checkbox"}}),n("label",{attrs:{for:"wrinkling"}},[e._v("UVB")]),n("input",{attrs:{type:"checkbox",name:"sunburn",id:"uva-checkbox"}}),n("label",{attrs:{for:"sunburn"}},[e._v("UVC")])])),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Submit")])])},X=[],Z={name:"Section2Q2",props:["customData"]},G=Z,K=Object(m["a"])(G,L,X,!1,null,"66bdd418",null),ee=K.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section2prepare"}},[n("h1",[e._v("Prepare for discussion")]),n("p",[e._v(" Now, you will have 10-minutes to prepare the 20 minutes discussion. How would you organize the next 10-min discussion to make the most of it? You can brainstorm some questions for the discussion such as: ")]),n("p",[e._v("What you have learned in the previous clip?")]),n("p",[e._v("How is your method of protection the same & different from your partner's method?")]),n("p",[e._v("What’s the relative strength & weakness of each?")]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v(e._s(e.timerText))])])},ne=[],ie={name:"Section2Prepare",data:function(){return{remainingTime:11,interval:""}},computed:{timerText:function(){if(this.remainingTime<=0)return"Continue";var e=Math.floor(this.remainingTime/60),t=this.remainingTime%60;return e=e<10?"0"+e:e,t=t<10?"0"+t:t,e+":"+t}},created:function(){this.interval=setInterval(function(){this.remainingTime-=1}.bind(this),1e3)},beforeDestroy:function(){clearInterval(this.interval)}},oe=ie,re=Object(m["a"])(oe,te,ne,!1,null,"c0c086ba",null),ae=re.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"section2discussion"}},[n("h1",[e._v("Free discussion")]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Finish")])])},ce=[],ue={name:"Section2Discussion"},le=ue,pe=Object(m["a"])(le,se,ce,!1,null,"624954b0",null),me=pe.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section3cover"}},[n("h1",[e._v("Section 3")]),"A"==e.customData.assignment?n("h1",[e._v("How chemical blockers work by absorbing the sunlight")]):n("h1",[e._v("How physical blockers work by reflecting the sunlight")]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Let's start")])])},de=[],ve={name:"Section3Cover",props:["customData"]},fe=ve,be=Object(m["a"])(fe,he,de,!1,null,"834dda04",null),_e=be.exports,ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section3video"}},[n("iframe",{attrs:{width:"720",height:"405",src:e.videoUrl,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Continue")])])},ke=[],ye={name:"Section3Video",props:["customData"],computed:{videoUrl:function(){return"A"==this.customData.assignment?"https://www.youtube.com/embed/EBqEhc2t5C8":"https://www.youtube.com/embed/zcPTSQtlxyY"}}},xe=ye,we=Object(m["a"])(xe,ge,ke,!1,null,"072808da",null),Se=we.exports,De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section3q1"}},[n("h1",[e._v("Question 1/3")]),"A"==e.customData.assignment?n("div",[n("p",[e._v("What are the advantages of chemical sunblock?")]),n("input",{attrs:{type:"checkbox",name:"tanning",id:"uva-checkbox"}}),n("label",{attrs:{for:"tanning"}},[e._v("safe to the skin")]),n("input",{attrs:{type:"checkbox",name:"wrinkling",id:"uva-checkbox"}}),n("label",{attrs:{for:"wrinkling"}},[e._v("suitable for sensitive skin")]),n("input",{attrs:{type:"checkbox",name:"sunburn",id:"uva-checkbox"}}),n("label",{attrs:{for:"sunburn"}},[e._v("light texture")]),n("input",{attrs:{type:"checkbox",name:"aging",id:"uva-checkbox"}}),n("label",{attrs:{for:"aging"}},[e._v("refreshing user experience")])]):n("div",[n("p",[e._v("What are the advantages of physical sunblock?")]),n("input",{attrs:{type:"checkbox",name:"tanning",id:"uva-checkbox"}}),n("label",{attrs:{for:"tanning"}},[e._v("safe to the skin")]),n("input",{attrs:{type:"checkbox",name:"wrinkling",id:"uva-checkbox"}}),n("label",{attrs:{for:"wrinkling"}},[e._v("suitable for sensitive skin")]),n("input",{attrs:{type:"checkbox",name:"sunburn",id:"uva-checkbox"}}),n("label",{attrs:{for:"sunburn"}},[e._v("light texture")]),n("input",{attrs:{type:"checkbox",name:"aging",id:"uva-checkbox"}}),n("label",{attrs:{for:"aging"}},[e._v("refreshing user experience")])]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Submit")])])},$e=[],Ae={name:"Section3Q1",props:["customData"]},Oe=Ae,Qe=Object(m["a"])(Oe,De,$e,!1,null,"265f8753",null),je=Qe.exports,Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section3q2"}},[n("h1",[e._v("Question 2/3")]),"A"==e.customData.assignment?n("div",[n("p",[e._v("What might be the potential drawback of chemical blockers?")]),n("input",{attrs:{type:"checkbox",name:"tanning",id:"uva-checkbox"}}),n("label",{attrs:{for:"tanning"}},[e._v("pale skin")]),n("input",{attrs:{type:"checkbox",name:"wrinkling",id:"uva-checkbox"}}),n("label",{attrs:{for:"wrinkling"}},[e._v("oily skin")]),n("input",{attrs:{type:"checkbox",name:"sunburn",id:"uva-checkbox"}}),n("label",{attrs:{for:"sunburn"}},[e._v("unstable")]),n("input",{attrs:{type:"checkbox",name:"aging",id:"uva-checkbox"}}),n("label",{attrs:{for:"aging"}},[e._v("sensitive to some skin types")])]):n("div",[n("p",[e._v("What might be the potential drawback of physical blockers?")]),n("input",{attrs:{type:"checkbox",name:"tanning",id:"uva-checkbox"}}),n("label",{attrs:{for:"tanning"}},[e._v("pale skin")]),n("input",{attrs:{type:"checkbox",name:"wrinkling",id:"uva-checkbox"}}),n("label",{attrs:{for:"wrinkling"}},[e._v("oily skin")]),n("input",{attrs:{type:"checkbox",name:"sunburn",id:"uva-checkbox"}}),n("label",{attrs:{for:"sunburn"}},[e._v("unstable")]),n("input",{attrs:{type:"checkbox",name:"aging",id:"uva-checkbox"}}),n("label",{attrs:{for:"aging"}},[e._v("sensitive to some skin types")])]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Submit")])])},Te=[],Pe={name:"Section3Q2",props:["customData"]},Ce=Pe,Ve=Object(m["a"])(Ce,Ee,Te,!1,null,"21b49f67",null),We=Ve.exports,Ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section3q3"}},[n("h1",[e._v("Question 3/3")]),"A"==e.customData.assignment?n("div",[n("p",[e._v("What are the active ingredients of chemical sunblock for absorption?")]),n("input",{attrs:{type:"checkbox",name:"tanning",id:"uva-checkbox"}}),n("label",{attrs:{for:"tanning"}},[e._v("zinc oxide")]),n("input",{attrs:{type:"checkbox",name:"wrinkling",id:"uva-checkbox"}}),n("label",{attrs:{for:"wrinkling"}},[e._v("titanium oxide")]),n("input",{attrs:{type:"checkbox",name:"sunburn",id:"uva-checkbox"}}),n("label",{attrs:{for:"sunburn"}},[e._v("oxybenzone")]),n("input",{attrs:{type:"checkbox",name:"aging",id:"uva-checkbox"}}),n("label",{attrs:{for:"aging"}},[e._v("octinoxate")])]):n("div",[n("p",[e._v("What are the active ingredients of physical sunblock for reflection?")]),n("input",{attrs:{type:"checkbox",name:"tanning",id:"uva-checkbox"}}),n("label",{attrs:{for:"tanning"}},[e._v("zinc oxide")]),n("input",{attrs:{type:"checkbox",name:"wrinkling",id:"uva-checkbox"}}),n("label",{attrs:{for:"wrinkling"}},[e._v("titanium oxide")]),n("input",{attrs:{type:"checkbox",name:"sunburn",id:"uva-checkbox"}}),n("label",{attrs:{for:"sunburn"}},[e._v("oxybenzone")]),n("input",{attrs:{type:"checkbox",name:"aging",id:"uva-checkbox"}}),n("label",{attrs:{for:"aging"}},[e._v("octinoxate")])]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Submit")])])},qe=[],Fe={name:"Section3Q3",props:["customData"]},He=Fe,Me=Object(m["a"])(He,Ue,qe,!1,null,"63e8dc85",null),Ne=Me.exports,Ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section3prepare"}},[n("h1",[e._v("Prepare for discussion")]),n("p",[e._v(" Now, you will have 10-minutes to prepare the 20 minutes discussion. How would you organize the next 10-min discussion to make the most of it? You can brainstorm some questions for the discussion such as: ")]),n("p",[e._v("What you have learned in the previous clip?")]),n("p",[e._v("How is your method of protection the same & different from your partner's method?")]),n("p",[e._v("What’s the relative strength & weakness of each?")]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v(e._s(e.timerText))])])},ze=[],Be={name:"Section3Prepare",data:function(){return{remainingTime:11,interval:""}},computed:{timerText:function(){if(this.remainingTime<=0)return"Continue";var e=Math.floor(this.remainingTime/60),t=this.remainingTime%60;return e=e<10?"0"+e:e,t=t<10?"0"+t:t,e+":"+t}},created:function(){this.interval=setInterval(function(){this.remainingTime-=1}.bind(this),1e3)},beforeDestroy:function(){clearInterval(this.interval)}},Je=Be,Re=Object(m["a"])(Je,Ie,ze,!1,null,"44be9c26",null),Ye=Re.exports,Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"section3discussion"}},[n("h1",[e._v("Free discussion")]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Finish")])])},Xe=[],Ze={name:"Section3Discussion"},Ge=Ze,Ke=Object(m["a"])(Ge,Le,Xe,!1,null,"dea4dd32",null),et=Ke.exports,tt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section4cover"}},[n("h1",[e._v("Section 4")]),"A"==e.customData.assignment?n("h1",[e._v("What is SPF and how does it work?")]):n("h1",[e._v("What is PA and how does it work?")]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Let's start")])])},nt=[],it={name:"Section4Cover",props:["customData"]},ot=it,rt=Object(m["a"])(ot,tt,nt,!1,null,"1a4aa442",null),at=rt.exports,st=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section4video"}},[n("iframe",{attrs:{width:"720",height:"405",src:e.videoUrl,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Continue")])])},ct=[],ut={name:"Section4Video",props:["customData"],computed:{videoUrl:function(){return"A"==this.customData.assignment?"https://www.youtube.com/embed/MBFm4q9JpMU":"https://www.youtube.com/embed/phwlz6Zw_QQ"}}},lt=ut,pt=Object(m["a"])(lt,st,ct,!1,null,"df4ae574",null),mt=pt.exports,ht=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section4q1"}},["A"==e.customData.assignment?n("h1",[e._v("Question 1/3")]):n("h1",[e._v("Question 1/2")]),"A"==e.customData.assignment?n("div",[n("p",[e._v("What does SPF mean?")]),n("input",{attrs:{type:"text",name:"section4entry",id:"section4entry"}})]):n("div",[n("p",[e._v("What does PA mean?")]),n("input",{attrs:{type:"text",name:"section4entry",id:"section4entry"}})]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Submit")])])},dt=[],vt={name:"Section4Q1",props:["customData"]},ft=vt,bt=Object(m["a"])(ft,ht,dt,!1,null,"5d313e4a",null),_t=bt.exports,gt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section4q2"}},["A"==e.customData.assignment?n("h1",[e._v("Question 2/3")]):n("h1",[e._v("Question 2/2")]),"A"==e.customData.assignment?n("div",[n("p",[e._v("True or false: the higher the number behind the SPF, the stronger the blocking ability would be")]),n("input",{attrs:{type:"radio",name:"true",id:"spf-q2"}}),n("label",{attrs:{for:"true"}},[e._v("True")]),n("input",{attrs:{type:"radio",name:"false",id:"spf-q2"}}),n("label",{attrs:{for:"false"}},[e._v("False")])]):n("div",[n("p",[e._v("True or false: PA is generally marked from one plus to triple plus. The more the plus sign, the weaker it will be to block UVA.")]),n("input",{attrs:{type:"radio",name:"true",id:"pa-q2"}}),n("label",{attrs:{for:"true"}},[e._v("True")]),n("input",{attrs:{type:"radio",name:"false",id:"pa-q2"}}),n("label",{attrs:{for:"false"}},[e._v("False")])]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Submit")])])},kt=[],yt={name:"Section4Q2",props:["customData"]},xt=yt,wt=Object(m["a"])(xt,gt,kt,!1,null,"6cfc6d85",null),St=wt.exports,Dt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section4q3"}},["A"==e.customData.assignment?n("h1",[e._v("Question 3/3")]):e._e(),"A"==e.customData.assignment?n("div",[n("p",[e._v(" For Alice if she doesn’t apply sunscreen, it only takes 20 minutes for her to get sunburn. After applying sunscreen with an SPF value of 30, how long can she stay in sunshine? ")]),n("input",{attrs:{type:"radio",name:"pa-q3",id:"3h"}}),n("label",{attrs:{for:"3h"}},[e._v("3 hours")]),n("input",{attrs:{type:"radio",name:"pa-q3",id:"5h"}}),n("label",{attrs:{for:"5h"}},[e._v("5 hours")]),n("input",{attrs:{type:"radio",name:"pa-q3",id:"9h"}}),n("label",{attrs:{for:"9h"}},[e._v("9 hours")]),n("input",{attrs:{type:"radio",name:"pa-q3",id:"10h"}}),n("label",{attrs:{for:"10h"}},[e._v("10 hours")])]):e._e(),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Submit")])])},$t=[],At={name:"Section4Q3",props:["customData"],created:function(){"A"!=this.customData.assignment&&this.$emit("proceed")}},Ot=At,Qt=Object(m["a"])(Ot,Dt,$t,!1,null,"395597c6",null),jt=Qt.exports,Et=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section4prepare"}},[n("h1",[e._v("Prepare for discussion")]),n("p",[e._v(" Now, you will have 10-minutes to prepare the 20 minutes discussion. How would you organize the next 10-min discussion to make the most of it? You can brainstorm some questions for the discussion such as: ")]),n("p",[e._v("What you have learned in the previous clip?")]),n("p",[e._v("How is your method of protection the same & different from your partner's method?")]),n("p",[e._v("What’s the relative strength & weakness of each?")]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v(e._s(e.timerText))])])},Tt=[],Pt={name:"Section4Prepare",data:function(){return{remainingTime:11,interval:""}},computed:{timerText:function(){if(this.remainingTime<=0)return"Continue";var e=Math.floor(this.remainingTime/60),t=this.remainingTime%60;return e=e<10?"0"+e:e,t=t<10?"0"+t:t,e+":"+t}},created:function(){this.interval=setInterval(function(){this.remainingTime-=1}.bind(this),1e3)},beforeDestroy:function(){clearInterval(this.interval)}},Ct=Pt,Vt=Object(m["a"])(Ct,Et,Tt,!1,null,"2c4508ae",null),Wt=Vt.exports,Ut=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"section4discussion"}},[n("h1",[e._v("Free discussion")]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Finish")])])},qt=[],Ft={name:"Section4Discussion"},Ht=Ft,Mt=Object(m["a"])(Ht,Ut,qt,!1,null,"527fcd26",null),Nt=Mt.exports,It=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"sectionfinalassessment"}},[n("h1",[e._v("Final Assessment")]),e.customData.me?n("h1",[e._v("Your score: "+e._s(this.score))]):e._e(),e.customData.partner?n("h1",[e._v(e._s(e.customData.partner)+"'s score: "+e._s(this.partnerScore))]):e._e(),n("button",{on:{click:e.onScoreSubmit}},[e._v("End")])])},zt=[],Bt={name:"SectionFinalAssessment",props:["customData"],data:function(){return{score:0,partnerScore:0}},methods:{onScoreSubmit:function(){this.score+=1,this.customData.socket.emit("UPDATE_SCORE",this.score)}},mounted:function(){var e=this;this.customData.socket.on("PARTNER_SCORE",(function(t){e.partnerScore=t.score}))}},Jt=Bt,Rt=Object(m["a"])(Jt,It,zt,!1,null,"23a6a7c7",null),Yt=Rt.exports,Lt=n("8055"),Xt=n.n(Lt),Zt={name:"App",components:{Section1Context:_,Section1Video:S,Section1Welcome:j,Section2Cover:W,Section2Video:N,Section2Q1:Y,Section2Q2:ee,Section2Prepare:ae,Section2Discussion:me,Section3Cover:_e,Section3Video:Se,Section3Q1:je,Section3Q2:We,Section3Q3:Ne,Section3Prepare:Ye,Section3Discussion:et,Section4Cover:at,Section4Video:mt,Section4Q1:_t,Section4Q2:St,Section4Q3:jt,Section4Prepare:Wt,Section4Discussion:Nt,SectionFinalAssessment:Yt},data:function(){var e=Xt()("wss://mighty-dawn-11508.herokuapp.com");return{socket:e,currentSection:"Section1Context",sections:["Section1Context","Section1Video","Section1Welcome","Section2Cover","Section2Video","Section2Q1","Section2Q2","Section2Prepare","Section2Discussion","Section3Cover","Section3Video","Section3Q1","Section3Q2","Section3Q3","Section3Prepare","Section3Discussion","Section4Cover","Section4Video","Section4Q1","Section4Q2","Section4Q3","Section4Prepare","Section4Discussion","SectionFinalAssessment"],customData:{socket:e}}},methods:{onProceed:function(){var e=this.sections.indexOf(this.currentSection),t=this.sections.length;e<t-1&&(this.currentSection=this.sections[(e+1)%t])}},mounted:function(){var e=this;this.socket.on("USER_PAIR",(function(t){e.customData=t,t.me&&t.partner&&(e.customData.assignment=t.me>t.partner?"A":"B"),e.customData.socket=e.socket}))}},Gt=Zt,Kt=(n("034f"),Object(m["a"])(Gt,o,r,!1,null,null,null)),en=Kt.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(en)}}).$mount("#app")},8486:function(e,t,n){},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.56e56bfe.js.map