(this["webpackJsonpbeginners.course.template.vorlage"]=this["webpackJsonpbeginners.course.template.vorlage"]||[]).push([[0],{20:function(e,t,s){},21:function(e){e.exports=JSON.parse('{"processEngineConfig":{"processModelId":"example","uri":"http://localhost:8000"}}')},95:function(e,t,s){},96:function(e,t,s){"use strict";s.r(t);s(29);var r=s(27),n=s(4),a=s(5),i=s(7),o=s(6),c=s(1),u=s.n(c),l=s(14),h=s(15),b=(s(20),s(0)),d=function(e){Object(i.a)(s,e);var t=Object(o.a)(s);function s(e){var r;return Object(n.a)(this,s),(r=t.call(this,e)).userInput=void 0,r.userInput=u.a.createRef(),r}return Object(a.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"test-class",children:[Object(b.jsxs)("h1",{children:["Du hast noch ",this.props.userTask.tokens[0].payload.leftTries," Versuche"]}),Object(b.jsx)("br",{}),Object(b.jsxs)("h2",{children:["Deine Zahl liegt zwischen ",this.props.userTask.tokens[0].payload.lowestNumber," und ",this.props.userTask.tokens[0].payload.highestNumber," "]}),Object(b.jsx)("label",{children:"Gib eine Zahl ein: "}),Object(b.jsx)("input",{type:"number",ref:this.userInput}),Object(b.jsx)("button",{onClick:this._handleFormSubmit.bind(this),children:"Confirm"})]})}},{key:"_handleFormSubmit",value:function(){var e;this.props.finishUserTask({input:null===(e=this.userInput.current)||void 0===e?void 0:e.value,tries:this.props.userTask.tokens[0].payload.tries+=1,leftTries:this.props.userTask.tokens[0].payload.leftTries-=1})}}]),s}(u.a.Component),m=function(e){Object(i.a)(s,e);var t=Object(o.a)(s);function s(e){var r;return Object(n.a)(this,s),(r=t.call(this,e)).guess=void 0,r.randomNumber=void 0,r.text=void 0,r.range=void 0,r.tries=void 0,r.distance=void 0,r.range=10,r.guess=r.props.userTask.tokens[0].payload.guess,r.randomNumber=r.props.userTask.tokens[0].payload.randomNumber,r.distance=Math.abs(r.randomNumber-r.guess),r.tries=r.props.userTask.tokens[0].payload.tries,r.text=r.showText(),r}return Object(a.a)(s,[{key:"showText",value:function(){if(1===this.tries)return this.distance<this.range?"Warm!":"Kalt!";var e=Math.abs(this.randomNumber-this.props.userTask.tokens[0].payload.lastGuess);return this.distance<e?"W\xe4rmer":"K\xe4lter"}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"test-class",children:[Object(b.jsx)("h1",{children:this.text}),Object(b.jsx)("br",{}),Object(b.jsx)("h2",{children:"Deine Zahl war zu Hoch!  "}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:this._handleFormSubmit.bind(this),children:"OK"})]})}},{key:"_handleFormSubmit",value:function(){this.props.finishUserTask({input:null})}}]),s}(u.a.Component),p=function(e){Object(i.a)(s,e);var t=Object(o.a)(s);function s(e){var r;return Object(n.a)(this,s),(r=t.call(this,e)).guess=void 0,r.randomNumber=void 0,r.text=void 0,r.range=void 0,r.tries=void 0,r.distance=void 0,r.range=10,r.guess=r.props.userTask.tokens[0].payload.guess,r.randomNumber=r.props.userTask.tokens[0].payload.randomNumber,r.distance=Math.abs(r.randomNumber-r.guess),r.tries=r.props.userTask.tokens[0].payload.tries,r.text=r.showText(),r}return Object(a.a)(s,[{key:"showText",value:function(){if(1===this.tries)return this.distance<this.range?"Warm!":"Kalt!";var e=Math.abs(this.randomNumber-this.props.userTask.tokens[0].payload.lastGuess);return this.distance<e?"W\xe4rmer":"K\xe4lter"}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"test-class",children:[Object(b.jsx)("h1",{children:this.text}),Object(b.jsx)("br",{}),Object(b.jsx)("h2",{children:"Deine Zahl war zu Niedrig!  "}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:this._handleFormSubmit.bind(this),children:"OK"})]})}},{key:"_handleFormSubmit",value:function(){this.props.finishUserTask({input:null})}}]),s}(u.a.Component),j=function(e){Object(i.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(n.a)(this,s);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={targetComponent:null,userTask:null,suspendState:null},e.components={ZahlenratenCustomForm:d,ZahlZuHochCustomForm:m,ZahlZuNiedrigCustomForm:p},e.customFormService=null,e.updateComponent=function(t,s,r){var n=t.userTaskConfig.customForm;if(!n)throw new Error("No preferredControl set in usertask: ".concat(JSON.stringify(t)));var a=e.components[n];if(!a)throw new Error("No component found for usertask ".concat(JSON.stringify(t)));e.setState({targetComponent:a,userTask:t,suspendState:r})},e.suspendUserTask=function(t){var s;null===(s=e.customFormService)||void 0===s||s.suspendUserTask(t)},e.abortUserTask=function(){var t;null===(t=e.customFormService)||void 0===t||t.terminateProcessInstance()},e.finishUserTask=function(t){var s;null===(s=e.customFormService)||void 0===s||s.finishUserTask(t)},e}return Object(a.a)(s,[{key:"componentDidMount",value:function(){this.customFormService=new h.CustomFormService,this.customFormService.onUserTaskReceived(this.updateComponent),this.components=Object(l.a)(Object(l.a)({},this.components),this.props.components)}},{key:"componentWillUnmount",value:function(){this.customFormService&&this.customFormService.destroy()}},{key:"render",value:function(){return this.state.targetComponent?u.a.createElement(this.state.targetComponent,{userTask:this.state.userTask,suspendState:this.state.suspendState,suspendUserTask:this.suspendUserTask,abortUserTask:this.abortUserTask,finishUserTask:this.finishUserTask}):null}}]),s}(u.a.Component),v=s(98),f=function(e){Object(i.a)(s,e);var t=Object(o.a)(s);function s(e){var r;return Object(n.a)(this,s),(r=t.call(this,e)).userName=void 0,r.lowestNumber=void 0,r.highestNumber=void 0,r.userName=u.a.createRef(),r.lowestNumber=u.a.createRef(),r.highestNumber=u.a.createRef(),r}return Object(a.a)(s,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Willkommen zu Zahlenraten! Errate die richtige Zahl"}),Object(b.jsx)("label",{children:"Wie lautet dein Name? "}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",ref:this.userName}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:" Gib den Zahlenbereich an:"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"lowest Number"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"number",ref:this.lowestNumber}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"highest Number"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"number",ref:this.highestNumber}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:function(){return e._handleOnClick()},children:"Zahlenraten starten"})]})}},{key:"_handleOnClick",value:function(){var e,t,s;this.props.startProcess("Zahlenraten",{userName:null===(e=this.userName.current)||void 0===e?void 0:e.value,lowestNumber:null===(t=this.lowestNumber.current)||void 0===t?void 0:t.value,highestNumber:null===(s=this.highestNumber.current)||void 0===s?void 0:s.value})}}]),s}(u.a.Component),g=function(e){Object(i.a)(s,e);var t=Object(o.a)(s);function s(e){var r;return Object(n.a)(this,s),(r=t.call(this,e)).startDialogService=null,r.components={ZahlenratenStartDialog:f},r.displayStartDialog=function(e,t){var s=r.components[e.id];if(!s)throw new Error("No component found for usertask ".concat(JSON.stringify(e)));r.setState({targetComponent:s,targetIdentity:t,targetStartDialogConfiguration:e})},r.state={targetComponent:null,targetIdentity:null,targetStartDialogConfiguration:null,currentLanguage:"de"},r}return Object(a.a)(s,[{key:"componentDidMount",value:function(){this.startDialogService=new h.StartDialogService,this.startDialogService.onStartDialogDisplayed(this.displayStartDialog),this.components=Object(l.a)(Object(l.a)({},this.components),this.props.components)}},{key:"componentWillUnmount",value:function(){this.startDialogService&&this.startDialogService.destroy()}},{key:"render",value:function(){var e=this;if(!this.state.targetComponent||!this.state.targetStartDialogConfiguration||!this.state.targetIdentity)return null;var t={language:"de",closeStartDialog:function(){var t;return null===(t=e.startDialogService)||void 0===t?void 0:t.closeStartDialog()},openStartDialog:function(t){var s;return null===(s=e.startDialogService)||void 0===s?void 0:s.openStartDialog(t)},identity:this.state.targetIdentity,startDialogConfiguration:this.state.targetStartDialogConfiguration,startProcess:function(t,s,r){var n;null===(n=e.startDialogService)||void 0===n||n.startProcess(t,s,r)},config:this.props.config};return u.a.createElement(this.state.targetComponent,t)}}]),s}(u.a.Component),O=Object(v.a)()(g),k=s(21),x=(s(95),function(e){Object(i.a)(s,e);var t=Object(o.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{style:{height:"100%"},children:[Object(b.jsx)(j,{config:k}),Object(b.jsx)(O,{config:k})]})}}]),s}(c.Component));x.displayName=x.name;var y=document.getElementById("root");Object(r.createRoot)(y).render(Object(b.jsx)(x,{}))}},[[96,1,2]]]);
//# sourceMappingURL=main.180f52b7.chunk.js.map