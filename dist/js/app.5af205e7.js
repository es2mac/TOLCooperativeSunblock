(function(e){function t(t){for(var i,c,a=t[0],r=t[1],u=t[2],d=0,h=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&h.push(o[c][0]),o[c]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);l&&l(t);while(h.length)h.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,a=1;a<n.length;a++){var r=n[a];0!==o[r]&&(i=!1)}i&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},o={app:0},s=[];function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],r=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=r;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("85ec"),o=n.n(i);o.a},"0ec6":function(e,t,n){},1:function(e,t){},1299:function(e,t,n){},1866:function(e,t,n){"use strict";var i=n("79f1"),o=n.n(i);o.a},"1a41":function(e,t,n){"use strict";var i=n("89b9"),o=n.n(i);o.a},"1abf":function(e,t,n){"use strict";var i=n("8486"),o=n.n(i);o.a},"35d8":function(e,t,n){"use strict";var i=n("a8f8"),o=n.n(i);o.a},"3c8e":function(e,t,n){},"3db9":function(e,t,n){"use strict";var i=n("bebe"),o=n.n(i);o.a},"492b":function(e,t,n){"use strict";var i=n("8438"),o=n.n(i);o.a},"565e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n(e.currentSection,{tag:"component",attrs:{customData:e.customData},on:{proceed:e.onProceed}}),e.customData.partner?e._e():n("div",{attrs:{id:"tester-message"}},[n("p",[e._v(" (If you're testing, you can open this page in two browser windows, or bypass the automatic matching and proceed as learner "),n("button",{staticClass:"learner-button",on:{click:e.setLearnerA}},[e._v("A")]),e._v(" or learner "),n("button",{staticClass:"learner-button",on:{click:e.setLearnerB}},[e._v("B")]),e._v(") ")])])],1)},s=[],c=(n("c975"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section1context"}},[n("h1",[e._v("Before eveything begins, let’s learn some contexts about sunblocks.")]),e.customData&&e.customData.partner?n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Let's start")]):e._e(),e.customData?n("NamesDisplay",{attrs:{names:e.customData}}):e._e()],1)}),a=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{directives:[{name:"show",rawName:"v-show",value:e.names,expression:"names"}],attrs:{id:"namesdisplay"}},[e._v(" You are "),n("span",{staticClass:"user-name"},[e._v(e._s(e.names.me))]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.names.partner,expression:"names.partner"}]},[e._v(", and your partner is ")]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.names.partner,expression:"names.partner"}],staticClass:"user-name"},[e._v(e._s(e.names.partner))])])},u=[],l={name:"NamesDisplay",props:["names"]},d=l,h=(n("1abf"),n("2877")),m=Object(h["a"])(d,r,u,!1,null,null,null),b=m.exports,f={name:"Section1Context",components:{NamesDisplay:b},props:["customData"]},p=f,v=Object(h["a"])(p,c,a,!1,null,"b854fbb4",null),k=v.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section1video"}},[n("Youtube",{ref:"youtube",attrs:{width:"720",height:"405","video-id":"iokXPuCA2c0"},on:{paused:e.onStopped,ended:e.onStopped}}),n("button",{attrs:{disabled:!e.watched},on:{click:function(t){return e.$emit("proceed")}}},[e._v("Continue")])],1)},_=[],w=(n("96cf"),n("1da1")),y=n("e0ec"),x={name:"Section1Video",components:{Youtube:y["Youtube"]},data:function(){return{watched:!1}},methods:{onStopped:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){var t,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$refs.youtube.player,e.next=3,t.getDuration();case 3:return n=e.sent,e.next=6,t.getCurrentTime();case 6:i=e.sent,i>.9*n&&(this.watched=!0);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},S=x,q=Object(h["a"])(S,g,_,!1,null,"90fba9a0",null),A=q.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section1welcome"}},[n("h1",[e._v("Welcome to the JigSaw activity!")]),n("p",[e._v(" In this video, you will watch three clips different from your partner. After each clip, you will discuss and share what you have learned with your partner. As your partner is totally dependent on you to understand the knowledge component, make sure you can deliver the key content to him / her in a clear and correct way. ")]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Let's start")])])},C=[],F={name:"Section1Welcome"},P=F,Q=Object(h["a"])(P,D,C,!1,null,"68449c6e",null),W=Q.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section2cover"}},[n("h1",[e._v("Section 2")]),"A"==e.customData.assignment?n("h1",[e._v("How does UVA harm the skin?")]):n("h1",[e._v("How does UVB harm the skin?")]),"A"==e.customData.assignment?n("div",[n("p",[e._v("In the video, please try to think about the following two questions and you are going to discuss them with your partner. Please remeber to take notes:")]),n("p",[e._v("1. What is the harm of UVA on skins?")]),n("p",[e._v("2. Why does UVA have different harm from UVB on skins?")])]):n("div",[n("p",[e._v("In the video, please try to think about the following two questions and you are going to discuss them with your partner. Please remeber to take notes:")]),n("p",[e._v("1. What is the harm of UVB on skins?")]),n("p",[e._v("2. Why does UVB have different harm from UVA on skins?")])]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Let's start")])])},T=[],V={name:"Section2Cover",props:["customData"]},O=V,U=Object(h["a"])(O,$,T,!1,null,"31258265",null),j=U.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section2video"}},[n("Youtube",{ref:"youtube",attrs:{width:"720",height:"405","video-id":e.videoID},on:{paused:e.onStopped,ended:e.onStopped}}),n("button",{attrs:{disabled:!e.watched},on:{click:function(t){return e.$emit("proceed")}}},[e._v("Continue")])],1)},M=[],E={name:"Section2Video",components:{Youtube:y["Youtube"]},props:["customData"],data:function(){return{watched:!1}},methods:{onStopped:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){var t,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$refs.youtube.player,e.next=3,t.getDuration();case 3:return n=e.sent,e.next=6,t.getCurrentTime();case 6:i=e.sent,i>.9*n&&(this.watched=!0);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},computed:{videoID:function(){return"A"==this.customData.assignment?"J4b7MgMvsnU":"DHN_JxiXx0Q"}}},I=E,z=Object(h["a"])(I,B,M,!1,null,"371105c0",null),H=z.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section2q1"}},[n("h1",[e._v("Question 1/2")]),"A"==e.customData.assignment?n("MultipleSelectQuestion",{attrs:{questionData:e.s2q1A},on:{feedback:e.onFeedback}}):n("MultipleSelectQuestion",{attrs:{questionData:e.s2q1B},on:{feedback:e.onFeedback}}),e.submitted?n("p",[e._v(e._s(e.feedback))]):e._e(),e.submitted?e._e():n("button",{on:{click:e.onSubmit}},[e._v("Submit")]),e.submitted?n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Continue")]):e._e()],1)},L=[],N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"multi-select-question",attrs:{id:e.questionData.qid}},[n("h2",[e._v(e._s(e.questionData.questionText))]),n("div",{staticClass:"multi-select-choices"},e._l(e.choices,(function(t){return n("div",{key:e.questionData.qid+t.cid,staticClass:"multi-select-choice"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedChoices,expression:"selectedChoices"}],attrs:{type:"checkbox",id:e.questionData.qid+t.text,name:e.questionData.qid+"input"},domProps:{value:t.cid,checked:Array.isArray(e.selectedChoices)?e._i(e.selectedChoices,t.cid)>-1:e.selectedChoices},on:{change:function(n){var i=e.selectedChoices,o=n.target,s=!!o.checked;if(Array.isArray(i)){var c=t.cid,a=e._i(i,c);o.checked?a<0&&(e.selectedChoices=i.concat([c])):a>-1&&(e.selectedChoices=i.slice(0,a).concat(i.slice(a+1)))}else e.selectedChoices=s}}}),n("label",{attrs:{for:e.questionData.qid+t.text}},[e._v(e._s(t.text))])])})),0)])},R=[],J=(n("99af"),n("a15b"),n("fb6a"),{name:"MultipleSelectQuestion",props:["questionData"],data:function(){return{selectedChoices:[]}},computed:{choices:function(){if(this.questionData.choices.length<4)return this.questionData.choices;for(var e=this.questionData.choices.slice(),t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),i=[e[n],e[t]];e[t]=i[0],e[n]=i[1]}return e}},watch:{selectedChoices:function(){var e="";e=this.questionData.correctChoices.sort().join(",")==this.selectedChoices.concat().sort().join(",")?this.questionData.correctFeedback:this.questionData.incorrectFeedback,this.$emit("feedback",{qid:this.questionData.qid,feedback:e})}}}),X=J,Z=(n("5dd9"),Object(h["a"])(X,N,R,!1,null,null,null)),G=Z.exports,K={name:"Section2Q1",components:{MultipleSelectQuestion:G},props:["customData"],data:function(){return{feedback:"Please select.",submitted:!1,s2q1A:{qid:"s2q1-a",questionText:"What effect would UVA bring to our skin?",choices:[{cid:"tanning",text:"Tanning"},{cid:"wrinkling",text:"Wrinkling"},{cid:"sunburn",text:"Sunburn"},{cid:"aging",text:"Aging"}],correctChoices:["tanning","wrinkling","aging"],correctFeedback:"Answer: Correct! UVA will cause tanning, wrinkling and aging because it has higher wavelength and can reach the deeper layer of the skin.",incorrectFeedback:"Answer: Wrong. UVA will cause tanning, wrinkling and aging because it has higher wavelength and can reach the deeper layer of the skin."},s2q1B:{qid:"s2q1-b",questionText:"What effect would UVB bring to our skin?",choices:[{cid:"tanning",text:"Tanning"},{cid:"wrinkling",text:"Wrinkling"},{cid:"sunburn",text:"Sunburn"},{cid:"aging",text:"Aging"}],correctChoices:["sunburn"],correctFeedback:"Answer: Correct! UVB can only reach the top layer of the skin and cause sunburn.",incorrectFeedback:"Answer: Wrong. UVB can only reach the top layer of the skin and cause sunburn."}}},methods:{onSubmit:function(){this.submitted=!0},onFeedback:function(e){this.submitted=!1,this.feedback=e.feedback}}},ee=K,te=(n("b8df"),Object(h["a"])(ee,Y,L,!1,null,"67107f30",null)),ne=te.exports,ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section2q2"}},[n("h1",[e._v("Question 2/2")]),"A"==e.customData.assignment?n("MultipleChoiceQuestion",{attrs:{questionData:e.s2q2A},on:{feedback:e.onFeedback}}):n("MultipleChoiceQuestion",{attrs:{questionData:e.s2q2B},on:{feedback:e.onFeedback}}),e.submitted?n("p",[e._v(e._s(e.feedback))]):e._e(),e.submitted?e._e():n("button",{on:{click:e.onSubmit}},[e._v("Submit")]),e.submitted?n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Continue")]):e._e()],1)},oe=[],se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"multiple-choice-question",attrs:{id:e.questionData.qid}},[n("h2",[e._v(e._s(e.questionData.questionText))]),n("div",{staticClass:"multiple-choice-choices"},e._l(e.questionData.choices,(function(t){return n("div",{key:e.questionData.qid+t.cid,staticClass:"multiple-choice-choice"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedChoice,expression:"selectedChoice"}],attrs:{type:"radio",id:e.questionData.qid+t.text,name:e.questionData.qid+"input"},domProps:{value:t.cid,checked:e._q(e.selectedChoice,t.cid)},on:{change:function(n){e.selectedChoice=t.cid}}}),n("label",{attrs:{for:e.questionData.qid+t.text}},[e._v(e._s(t.text))])])})),0)])},ce=[],ae={name:"MultipleSelectQuestion",props:["questionData"],data:function(){return{selectedChoice:""}},watch:{selectedChoice:function(){var e="";e=this.questionData.correctChoice==this.selectedChoice?this.questionData.correctFeedback:this.questionData.incorrectFeedback,this.$emit("feedback",{qid:this.questionData.qid,feedback:e})}}},re=ae,ue=(n("c2f4"),Object(h["a"])(re,se,ce,!1,null,null,null)),le=ue.exports,de={name:"Section2Q2",components:{MultipleChoiceQuestion:le},props:["customData"],data:function(){return{feedback:"Please select.",submitted:!1,s2q2A:{qid:"s2q2-a",questionText:"Paul went to the beach without taking sunblocks. 2 hours later, his skin got tanned. Which type of UV caused the problem?",choices:[{cid:"uva",text:"UVA"},{cid:"uvb",text:"UVB"},{cid:"uvc",text:"UVC"}],correctChoice:"uva",correctFeedback:"Answer: Correct. UVA can reach deeper layer of the skin and cause tanning.",incorrectFeedback:"Answer: Wrong. UVA can reach deeper layer of the skin and cause tanning."},s2q2B:{qid:"s2q2-a",questionText:"Paul went to the beach without taking sunblocks. 2 hours later, his skin got sunburned. Which type of UV caused the problem?",choices:[{cid:"uva",text:"UVA"},{cid:"uvb",text:"UVB"},{cid:"uvc",text:"UVC"}],correctChoice:"uvb",correctFeedback:"Answer: Correct. UVB reaches the top layer of the skin and causes sunburn. ",incorrectFeedback:"Answer: Wrong. UVB reaches the top layer of the skin and causes sunburn. "}}},methods:{onSubmit:function(){this.submitted=!0},onFeedback:function(e){this.submitted=!1,this.feedback=e.feedback}}},he=de,me=(n("b0d6"),Object(h["a"])(he,ie,oe,!1,null,"6fd94c83",null)),be=me.exports,fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section2prepare"}},[n("h1",[e._v("Prepare for discussion")]),"A"==e.customData.assignment?n("div",[n("p",[e._v(" Now, you will have 1 minute to prepare for a 5-minute discussion. How would you organize the discussion to make the most of it? You can brainstorm some questions for the discussion such as: ")]),n("p",[e._v("1. What is the harm of UVA on skins?")]),n("p",[e._v("2. Why does UVA have different effect on skins compared to UVB?")])]):n("div",[n("p",[e._v(" Now, you will have 1 minute to prepare for a 5-minute discussion. How would you organize the discussion to make the most of it? You can brainstorm some questions for the discussion such as: ")]),n("p",[e._v("1. What is the harm of UVB on skins?")]),n("p",[e._v("2. Why does UVB have different effect on skins compared to UVA?")])]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v(e._s(e.timerText))])])},pe=[],ve={name:"Section2Prepare",props:["customData"],data:function(){return{remainingTime:60,interval:""}},computed:{timerText:function(){if(this.remainingTime<=0)return"Continue";var e=Math.floor(this.remainingTime/60),t=this.remainingTime%60;return e=e<10?"0"+e:e,t=t<10?"0"+t:t,e+":"+t}},created:function(){this.interval=setInterval(function(){this.remainingTime-=1}.bind(this),1e3)},beforeDestroy:function(){clearInterval(this.interval)}},ke=ve,ge=(n("1a41"),Object(h["a"])(ke,fe,pe,!1,null,"20265096",null)),_e=ge.exports,we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section2discussion"}},[n("h1",[e._v("Free discussion")]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Finish")])])},ye=[],xe={name:"Section2Discussion"},Se=xe,qe=Object(h["a"])(Se,we,ye,!1,null,"15de1280",null),Ae=qe.exports,De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section3cover"}},[n("h1",[e._v("Section 3")]),"A"==e.customData.assignment?n("h1",[e._v("How chemical blocks work by absorbing the sunlight")]):n("h1",[e._v("How physical blocks work by reflecting the sunlight")]),"A"==e.customData.assignment?n("div",[n("p",[e._v(" In the video, please try to think about the following questions and you are going to discuss them with your partner. Please remember to take notes: ")]),n("p",[e._v("1. How do chemical blocks work to protect skins?")]),n("p",[e._v("2. What are the main ingredients in chemical sunblocks?")]),n("p",[e._v("3. What are traits of chemical sunblocks?")])]):n("div",[n("p",[e._v(" In the video, please try to think about the following questions and you are going to discuss them with your partner. Please remember to take notes: ")]),n("p",[e._v("1. How do physical blocks work to protect skins?")]),n("p",[e._v("2. What are the main ingredients in physical sunblocks?")]),n("p",[e._v("3. What are traits of physical sunblocks?")])]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Let's start")])])},Ce=[],Fe={name:"Section3Cover",props:["customData"]},Pe=Fe,Qe=Object(h["a"])(Pe,De,Ce,!1,null,"71f2aea1",null),We=Qe.exports,$e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section3video"}},[n("Youtube",{ref:"youtube",attrs:{width:"720",height:"405","video-id":e.videoID},on:{paused:e.onStopped,ended:e.onStopped}}),n("button",{attrs:{disabled:!e.watched},on:{click:function(t){return e.$emit("proceed")}}},[e._v("Continue")])],1)},Te=[],Ve={name:"Section3Video",components:{Youtube:y["Youtube"]},props:["customData"],data:function(){return{watched:!1}},methods:{onStopped:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){var t,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$refs.youtube.player,e.next=3,t.getDuration();case 3:return n=e.sent,e.next=6,t.getCurrentTime();case 6:i=e.sent,i>.9*n&&(this.watched=!0);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},computed:{videoID:function(){return"A"==this.customData.assignment?"EBqEhc2t5C8":"zcPTSQtlxyY"}}},Oe=Ve,Ue=Object(h["a"])(Oe,$e,Te,!1,null,"17e7f88b",null),je=Ue.exports,Be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section3q1"}},[n("h1",[e._v("Question 1/3")]),"A"==e.customData.assignment?n("MultipleSelectQuestion",{attrs:{questionData:e.s3q1A},on:{feedback:e.onFeedback}}):n("MultipleSelectQuestion",{attrs:{questionData:e.s3q1B},on:{feedback:e.onFeedback}}),e.submitted?n("p",[e._v(e._s(e.feedback))]):e._e(),e.submitted?e._e():n("button",{on:{click:e.onSubmit}},[e._v("Submit")]),e.submitted?n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Continue")]):e._e()],1)},Me=[],Ee={name:"Section3Q1",components:{MultipleSelectQuestion:G},props:["customData"],data:function(){return{feedback:"Please select.",submitted:!1,s3q1A:{qid:"s3q1-a",questionText:"What are the advantages of chemical sunblock?",choices:[{cid:"safe-skin",text:"safe to the skin"},{cid:"sensitive-skin",text:"suitable for sensitive skin"},{cid:"light-texture",text:"light texture"},{cid:"refreshing",text:"refreshing user experience"}],correctChoices:["light-texture","refreshing"],correctFeedback:"Answer: Correct! Chemical sunblocks have light texture and people feel refreshing when using them.",incorrectFeedback:"Answer: Wrong.  Chemical sunblocks have light texture and people feel refreshing when using them."},s3q1B:{qid:"s3q1-b",questionText:"What are the advantages of physical sunblock?",choices:[{cid:"safe-skin",text:"safe to the skin"},{cid:"sensitive-skin",text:"suitable for sensitive skin"},{cid:"light-texture",text:"light texture"},{cid:"refreshing",text:"refreshing user experience"}],correctChoices:["safe-skin","sensitive-skin"],correctFeedback:"Answer: Correct! Physical sunblocks only reflect sunlight, so they are safe to the skin and suitable for sensitive skin but they are heavy in texture and are not refreshing.",incorrectFeedback:"Answer: Wrong.  Physical sunblocks only reflect sunlight, so they are safe to the skin and suitable for sensitive skin but they are heavy in texture and are not refreshing."}}},methods:{onSubmit:function(){this.submitted=!0},onFeedback:function(e){this.submitted=!1,this.feedback=e.feedback}}},Ie=Ee,ze=(n("35d8"),Object(h["a"])(Ie,Be,Me,!1,null,"a8acffbe",null)),He=ze.exports,Ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section3q2"}},[n("h1",[e._v("Question 2/3")]),"A"==e.customData.assignment?n("MultipleSelectQuestion",{attrs:{questionData:e.s3q2A},on:{feedback:e.onFeedback}}):n("MultipleSelectQuestion",{attrs:{questionData:e.s3q2B},on:{feedback:e.onFeedback}}),e.submitted?n("p",[e._v(e._s(e.feedback))]):e._e(),e.submitted?e._e():n("button",{on:{click:e.onSubmit}},[e._v("Submit")]),e.submitted?n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Continue")]):e._e()],1)},Le=[],Ne={name:"Section3Q2",components:{MultipleSelectQuestion:G},props:["customData"],data:function(){return{feedback:"Please select.",submitted:!1,s3q2A:{qid:"s3q2-a",questionText:"What might be the potential drawbacks of chemical blocks?",choices:[{cid:"pale-skin",text:"pale skin"},{cid:"oily-skin",text:"oily skin"},{cid:"unstable",text:"unstable"},{cid:"allergic",text:"may cause allergic reactions"}],correctChoices:["unstable","allergic"],correctFeedback:"Answer: Correct! Chemical blocks aborb sunlight. They are unstable in chemical structure and are sensitive to some skins.",incorrectFeedback:"Answer: Wrong. Chemical blocks aborb sunlight. They are unstable in chemical structure and are sensitive to some skins."},s3q2B:{qid:"s3q2-b",questionText:"What might be the potential drawbacks of physical blocks?",choices:[{cid:"pale-skin",text:"pale skin"},{cid:"oily-skin",text:"oily skin"},{cid:"unstable",text:"unstable"},{cid:"allergic",text:"may cause allergic reactions"}],correctChoices:["pale-skin","oily-skin"],correctFeedback:"Answer: Correct!  Physical blockers will cause oily and pale skin because they are heavy in texture and are not refreshing. However, they are stable and suitble for sensitive skins.",incorrectFeedback:"Answer: Wrong. Physical blockers will cause oily and pale skin because they are heavy in texture and are not refreshing. However, they are stable and suitble for sensitive skins."}}},methods:{onSubmit:function(){this.submitted=!0},onFeedback:function(e){this.submitted=!1,this.feedback=e.feedback}}},Re=Ne,Je=(n("492b"),Object(h["a"])(Re,Ye,Le,!1,null,"902a13c2",null)),Xe=Je.exports,Ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section3q3"}},[n("h1",[e._v("Question 3/3")]),"A"==e.customData.assignment?n("MultipleSelectQuestion",{attrs:{questionData:e.s3q3A},on:{feedback:e.onFeedback}}):n("MultipleSelectQuestion",{attrs:{questionData:e.s3q3B},on:{feedback:e.onFeedback}}),e.submitted?n("p",[e._v(e._s(e.feedback))]):e._e(),e.submitted?e._e():n("button",{on:{click:e.onSubmit}},[e._v("Submit")]),e.submitted?n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Continue")]):e._e()],1)},Ge=[],Ke={name:"Section3Q3",components:{MultipleSelectQuestion:G},props:["customData"],data:function(){return{feedback:"Please select.",submitted:!1,s3q3A:{qid:"s3q3-a",questionText:"What are the active ingredients of chemical sunblocks for absorption?",choices:[{cid:"zinc-oxide",text:"zinc oxide"},{cid:"titanium-oxide",text:"titanium oxide"},{cid:"oxybenzone",text:"oxybenzone"},{cid:"octinoxate",text:"octinoxate"}],correctChoices:["oxybenzone","octinoxate"],correctFeedback:"Answer: Correct!",incorrectFeedback:"Answer: Wrong. The correct answers are oxybenzone and octinoxate."},s3q3B:{qid:"s3q3-b",questionText:"What are the active ingredients of physical sunblocks for reflection?",choices:[{cid:"zinc-oxide",text:"zinc oxide"},{cid:"titanium-oxide",text:"titanium oxide"},{cid:"oxybenzone",text:"oxybenzone"},{cid:"octinoxate",text:"octinoxate"}],correctChoices:["zinc-oxide","titanium-oxide"],correctFeedback:"Answer: Correct!",incorrectFeedback:"Answer: Wrong. The correct answers are zinc oxide and titanium oxide."}}},methods:{onSubmit:function(){this.submitted=!0},onFeedback:function(e){this.submitted=!1,this.feedback=e.feedback}}},et=Ke,tt=(n("cd2a"),Object(h["a"])(et,Ze,Ge,!1,null,"ccc7a97e",null)),nt=tt.exports,it=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section3prepare"}},[n("h1",[e._v("Prepare for discussion")]),"A"==e.customData.assignment?n("div",[n("p",[e._v(" Now, you will have 1 minute to prepare for a 5-minute discussion. How would you organize the discussion to make the most of it? You can brainstorm some questions for the discussion such as: ")]),n("p",[e._v("1. How do chemical blocks work to protect skins?")]),n("p",[e._v("2. What is the main ingredients in chemical sunblocks?")]),n("p",[e._v("3. What are traits of chemical sunblocks?")])]):n("div",[n("p",[e._v(" Now, you will have 1 minute to prepare for a 5-minute discussion. How would you organize the discussion to make the most of it? You can brainstorm some questions for the discussion such as: ")]),n("p",[e._v("1. How do physical blocks work to protect skins?")]),n("p",[e._v("2. What is the main ingredients in physical sunblocks?")]),n("p",[e._v("3. What are traits of physical sunblocks?")])]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v(e._s(e.timerText))])])},ot=[],st={name:"Section3Prepare",props:["customData"],data:function(){return{remainingTime:60,interval:""}},computed:{timerText:function(){if(this.remainingTime<=0)return"Continue";var e=Math.floor(this.remainingTime/60),t=this.remainingTime%60;return e=e<10?"0"+e:e,t=t<10?"0"+t:t,e+":"+t}},created:function(){this.interval=setInterval(function(){this.remainingTime-=1}.bind(this),1e3)},beforeDestroy:function(){clearInterval(this.interval)}},ct=st,at=(n("1866"),Object(h["a"])(ct,it,ot,!1,null,"4c13e7db",null)),rt=at.exports,ut=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section3discussion"}},[n("h1",[e._v("Free discussion")]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Finish")])])},lt=[],dt={name:"Section3Discussion"},ht=dt,mt=Object(h["a"])(ht,ut,lt,!1,null,"c0261282",null),bt=mt.exports,ft=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section4cover"}},[n("h1",[e._v("Section 4")]),"A"==e.customData.assignment?n("h1",[e._v("What is SPF and how does it work?")]):n("h1",[e._v("What is PA and how does it work?")]),"A"==e.customData.assignment?n("div",[n("p",[e._v(" In the video, please try to think about the following questions and you are going to discuss them with your partner. Please remember to take notes: ")]),n("p",[e._v("1. What is SPF? What UV does SPF work on?")]),n("p",[e._v("2. How does SPF work on the skin?")])]):n("div",[n("p",[e._v(" In the video, please try to think about the following questions and you are going to discuss them with your partner. Please remember to take notes: ")]),n("p",[e._v("1. What is PA? What UV does PA work on?")]),n("p",[e._v("2. How does PA work on the skin?")])]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Let's start")])])},pt=[],vt={name:"Section4Cover",props:["customData"]},kt=vt,gt=Object(h["a"])(kt,ft,pt,!1,null,"aa0e10c2",null),_t=gt.exports,wt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section4video"}},[n("Youtube",{ref:"youtube",attrs:{width:"720",height:"405","video-id":e.videoID},on:{paused:e.onStopped,ended:e.onStopped}}),n("button",{attrs:{disabled:!e.watched},on:{click:function(t){return e.$emit("proceed")}}},[e._v("Continue")])],1)},yt=[],xt={name:"Section4Video",components:{Youtube:y["Youtube"]},props:["customData"],data:function(){return{watched:!1}},methods:{onStopped:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){var t,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$refs.youtube.player,e.next=3,t.getDuration();case 3:return n=e.sent,e.next=6,t.getCurrentTime();case 6:i=e.sent,i>.9*n&&(this.watched=!0);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},computed:{videoID:function(){return"A"==this.customData.assignment?"MBFm4q9JpMU":"phwlz6Zw_QQ"}}},St=xt,qt=Object(h["a"])(St,wt,yt,!1,null,"af4a8d04",null),At=qt.exports,Dt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section4q1"}},["A"==e.customData.assignment?n("h1",[e._v("Question 1/3")]):n("h1",[e._v("Question 1/2")]),"A"==e.customData.assignment?n("div",[n("p",[e._v("What does SPF mean?")]),n("textarea",{attrs:{name:"section4entry",id:"section4entry"}})]):n("div",[n("p",[e._v("What does PA mean?")]),n("textarea",{attrs:{name:"section4entry",id:"section4entry"}})]),e.submitted?n("p",[e._v(e._s(e.feedback))]):e._e(),e.submitted?e._e():n("button",{on:{click:e.onSubmit}},[e._v("Submit")]),e.submitted?n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Continue")]):e._e()])},Ct=[],Ft={name:"Section4Q1",props:["customData"],data:function(){return{submitted:!1}},computed:{feedback:function(){return"A"==this.customData.assignment?"Answer: SPF is essentially a measure of the protection that the sunblock will provide from UVB rays before one begins to get sunburned.":"Answer: PA refers to the blocking ability of sunblock to UVA, which can prevent skin tanning and aging."}},methods:{onSubmit:function(){this.submitted=!0}}},Pt=Ft,Qt=(n("3db9"),Object(h["a"])(Pt,Dt,Ct,!1,null,"e406b654",null)),Wt=Qt.exports,$t=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section4q2"}},["A"==e.customData.assignment?n("h1",[e._v("Question 2/3")]):n("h1",[e._v("Question 2/2")]),"A"==e.customData.assignment?n("MultipleChoiceQuestion",{attrs:{questionData:e.s4q2A},on:{feedback:e.onFeedback}}):n("MultipleChoiceQuestion",{attrs:{questionData:e.s4q2B},on:{feedback:e.onFeedback}}),e.submitted?n("p",[e._v(e._s(e.feedback))]):e._e(),e.submitted?e._e():n("button",{on:{click:e.onSubmit}},[e._v("Submit")]),e.submitted?n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Continue")]):e._e()],1)},Tt=[],Vt={name:"Section4Q2",components:{MultipleChoiceQuestion:le},props:["customData"],data:function(){return{feedback:"Please select.",submitted:!1,s4q2A:{qid:"s4q2-a",questionText:"True or false: the higher the number behind the SPF, the stronger the blocking ability would be",choices:[{cid:"true",text:"True"},{cid:"false",text:"False"}],correctChoice:"true",correctFeedback:"Answer: Correct.  The higher the number behind SPF, the higher its ability of blocking the sunlight.",incorrectFeedback:"Answer: Wrong.  The higher the number behind SPF, the higher its ability of blocking the sunlight."},s4q2B:{qid:"s4q2-b",questionText:"True or false: PA is generally marked from one plus to triple plus. The more the plus sign, the weaker it will be to block UVA.",choices:[{cid:"true",text:"True"},{cid:"false",text:"False"}],correctChoice:"false",correctFeedback:"Answer: Correct. PA can block UVA and its ability will be stronger with more plus signs.",incorrectFeedback:"Answer: Wrong. PA can block UVA and its ability will be stronger with more plus signs."}}},methods:{onSubmit:function(){this.submitted=!0},onFeedback:function(e){this.submitted=!1,this.feedback=e.feedback}}},Ot=Vt,Ut=(n("cae3"),Object(h["a"])(Ot,$t,Tt,!1,null,"731a85f5",null)),jt=Ut.exports,Bt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section4q3"}},["A"==e.customData.assignment?n("h1",[e._v("Question 3/3")]):e._e(),n("MultipleChoiceQuestion",{attrs:{questionData:e.s4q3A},on:{feedback:e.onFeedback}}),e.submitted?n("p",[e._v(e._s(e.feedback))]):e._e(),e.submitted?e._e():n("button",{on:{click:e.onSubmit}},[e._v("Submit")]),e.submitted?n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Continue")]):e._e()],1)},Mt=[],Et={name:"Section4Q3",components:{MultipleChoiceQuestion:le},props:["customData"],created:function(){"A"!=this.customData.assignment&&this.$emit("proceed")},data:function(){return{feedback:"Please select.",submitted:!1,s4q3A:{qid:"s4q3-a",questionText:"For Alice if she doesn’t apply sunscreen, it only takes 20 minutes for her to get sunburn. After applying sunscreen with an SPF value of 30, how long can she stay in sunshine?",choices:[{cid:"3h",text:"3 hours"},{cid:"5h",text:"5 hours"},{cid:"9h",text:"9 hours"},{cid:"10h",text:"10 hours"}],correctChoice:"10h",correctFeedback:"Answer: Correct. With a SPF value of 30, the prolonged protecting time will be 20*30 = 600 min = 10 hours.",incorrectFeedback:"Answer: Wrong. The correct answer is 10 hours. With a SPF value of 30, the prolonged protecting time will be 20*30 = 600 min = 10 hours."}}},methods:{onSubmit:function(){this.submitted=!0},onFeedback:function(e){this.submitted=!1,this.feedback=e.feedback}}},It=Et,zt=(n("c4f5"),Object(h["a"])(It,Bt,Mt,!1,null,"2b1d179b",null)),Ht=zt.exports,Yt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section4prepare"}},[n("h1",[e._v("Prepare for discussion")]),"A"==e.customData.assignment?n("div",[n("p",[e._v(" Now, you will have 1 minute to prepare for a 5-minute discussion. How would you organize the discussion to make the most of it? You can brainstorm some questions for the discussion such as: ")]),n("p",[e._v("1. What is SPF? What UV does SPF work on?")]),n("p",[e._v("2. How does SPF work on the skin?")])]):n("div",[n("p",[e._v(" Now, you will have 1 minute to prepare for a 5-minute discussion. How would you organize the discussion to make the most of it? You can brainstorm some questions for the discussion such as: ")]),n("p",[e._v("1. What is PA? What UV does PA work on?")]),n("p",[e._v("2. How does PA work on the skin?")])]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v(e._s(e.timerText))])])},Lt=[],Nt={name:"Section4Prepare",props:["customData"],data:function(){return{remainingTime:60,interval:""}},computed:{timerText:function(){if(this.remainingTime<=0)return"Continue";var e=Math.floor(this.remainingTime/60),t=this.remainingTime%60;return e=e<10?"0"+e:e,t=t<10?"0"+t:t,e+":"+t}},created:function(){this.interval=setInterval(function(){this.remainingTime-=1}.bind(this),1e3)},beforeDestroy:function(){clearInterval(this.interval)}},Rt=Nt,Jt=(n("be59"),Object(h["a"])(Rt,Yt,Lt,!1,null,"2b35f291",null)),Xt=Jt.exports,Zt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"section4discussion"}},[n("h1",[e._v("Free discussion")]),n("button",{on:{click:function(t){return e.$emit("proceed")}}},[e._v("Finish")])])},Gt=[],Kt={name:"Section4Discussion"},en=Kt,tn=Object(h["a"])(en,Zt,Gt,!1,null,"29fbdafe",null),nn=tn.exports,on=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},sn=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"sectionfinalassessment"}},[n("h1",[e._v("Final Quiz")]),n("p",[e._v(" Please complete the following quiz to see how well you've learned about sunscreen. When you're done, scroll back up, view your score, and check with your parter how well you both did! ")]),n("iframe",{attrs:{src:"https://docs.google.com/forms/d/e/1FAIpQLScgUPCwTxIgXUfObbIEgF42xg9yeO9OO3Jv2waf3I-qRc7fmA/viewform?embedded=true",width:"640",height:"2714",frameborder:"0",marginheight:"0",marginwidth:"0"}},[e._v("Loading…")])])}],cn={name:"SectionFinalAssessment",props:["customData"],data:function(){return{score:0,partnerScore:0}},methods:{onScoreSubmit:function(){this.score+=1}}},an=cn,rn=Object(h["a"])(an,on,sn,!1,null,"2fe60b90",null),un=rn.exports,ln=n("8055"),dn=n.n(ln),hn={name:"App",components:{Section1Context:k,Section1Video:A,Section1Welcome:W,Section2Cover:j,Section2Video:H,Section2Q1:ne,Section2Q2:be,Section2Prepare:_e,Section2Discussion:Ae,Section3Cover:We,Section3Video:je,Section3Q1:He,Section3Q2:Xe,Section3Q3:nt,Section3Prepare:rt,Section3Discussion:bt,Section4Cover:_t,Section4Video:At,Section4Q1:Wt,Section4Q2:jt,Section4Q3:Ht,Section4Prepare:Xt,Section4Discussion:nn,SectionFinalAssessment:un},data:function(){var e=dn()("wss://mighty-dawn-11508.herokuapp.com");return{socket:e,currentSection:"Section1Context",sections:["Section1Context","Section1Video","Section1Welcome","Section2Cover","Section2Video","Section2Q1","Section2Q2","Section2Prepare","Section2Discussion","Section3Cover","Section3Video","Section3Q1","Section3Q2","Section3Q3","Section3Prepare","Section3Discussion","Section4Cover","Section4Video","Section4Q1","Section4Q2","Section4Q3","Section4Prepare","Section4Discussion","SectionFinalAssessment"],customData:{socket:e}}},methods:{onProceed:function(){var e=this.sections.indexOf(this.currentSection),t=this.sections.length;e<t-1&&(this.currentSection=this.sections[(e+1)%t])},setLearnerA:function(){this.customData={me:"Learner A",partner:"Learner B",assignment:"A"}},setLearnerB:function(){this.customData={me:"Learner B",partner:"Learner A",assignment:"B"}}},mounted:function(){var e=this;this.socket.on("USER_PAIR",(function(t){e.customData=t,t.me&&t.partner&&(e.customData.assignment=t.me>t.partner?"A":"B")}))}},mn=hn,bn=(n("034f"),Object(h["a"])(mn,o,s,!1,null,null,null)),fn=bn.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(fn)}}).$mount("#app")},"5dd9":function(e,t,n){"use strict";var i=n("ccea"),o=n.n(i);o.a},"744c":function(e,t,n){},"79f1":function(e,t,n){},8438:function(e,t,n){},8486:function(e,t,n){},"85ec":function(e,t,n){},"89b9":function(e,t,n){},"8a76":function(e,t,n){},9312:function(e,t,n){},a8f8:function(e,t,n){},b0d6:function(e,t,n){"use strict";var i=n("9312"),o=n.n(i);o.a},b8df:function(e,t,n){"use strict";var i=n("1299"),o=n.n(i);o.a},be59:function(e,t,n){"use strict";var i=n("565e"),o=n.n(i);o.a},bebe:function(e,t,n){},c2f4:function(e,t,n){"use strict";var i=n("8a76"),o=n.n(i);o.a},c4f5:function(e,t,n){"use strict";var i=n("3c8e"),o=n.n(i);o.a},cae3:function(e,t,n){"use strict";var i=n("744c"),o=n.n(i);o.a},ccea:function(e,t,n){},cd2a:function(e,t,n){"use strict";var i=n("0ec6"),o=n.n(i);o.a}});
//# sourceMappingURL=app.5af205e7.js.map