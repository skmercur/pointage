(this.webpackJsonppointage=this.webpackJsonppointage||[]).push([[0],{19:function(e,t,n){e.exports=n(37)},24:function(e,t,n){},26:function(e,t,n){},33:function(e,t){},34:function(e,t){},35:function(e,t){},37:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),o=n(12),i=n.n(o),c=(n(24),n(4)),s=n.n(c),u=n(7),l=n(13),d=n(14),p=n(17),h=n(15),f=n(18),m=n(16),v=n.n(m),g=(n(26),n(2)),w=(document.getElementById("imageUpload"),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={person:"chargement"},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.loadModels()}},{key:"loadModels",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Loading"),e.t0=Promise,e.next=4,g.i.faceRecognitionNet.loadFromUri("/pointage/models");case 4:return e.t1=e.sent,e.next=7,g.i.faceLandmark68Net.loadFromUri("/pointage/models");case 7:return e.t2=e.sent,e.next=10,g.i.ssdMobilenetv1.loadFromUri("/pointage/models");case 10:e.t3=e.sent,e.t4=[e.t1,e.t2,e.t3],e.t5=function(){t.start(),alert("Done")},e.t0.all.call(e.t0,e.t4).then(e.t5);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"start",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t,n,a,r,o,i,c,u=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=document.createElement("div")).style.position="relative",document.body.append(t),e.next=5,this.loadLabeledImages();case 5:n=e.sent,a=new g.a(n,.8),console.log("Started"),r&&r.remove(),o&&o.remove(),i=!0,c=s.a.mark((function e(){var t,n,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.g(u.refs.video.getScreenshot());case 2:return r=e.sent,o=g.c(r),t={width:r.width,height:r.height},g.h(o,t),u.setState({person:"checking for a new face"}),e.next=9,g.d(r).withFaceLandmarks().withFaceDescriptors();case 9:n=e.sent,i=g.j(n,t),i.map((function(e){return a.findBestMatch(e.descriptor)})).forEach((function(e,t){var n=i[t].detection.box;new g.f.DrawBox(n,{label:e.toString()}).draw(o),e.distance>.5&&(alert(e.label),u.setState({person:e.label}))})),u.setState({person:"end"});case 14:case"end":return e.stop()}}),e)}));case 12:if(!i){e.next=16;break}return e.delegateYield(c(),"t0",14);case 14:e.next=12;break;case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadLabeledImages",value:function(){return Promise.all(["Black Widow","Captain America","Captain Marvel","Hawkeye","Jim Rhodes","Thor","Tony Stark","Sofiane Khoudour"].map(function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],a=1;case 2:if(!(a<=1)){e.next=13;break}return e.next=5,g.g("/pointage"+"/labeled_images/".concat(t,"/").concat(a,".jpg"));case 5:return r=e.sent,e.next=8,g.e(r).withFaceLandmarks().withFaceDescriptor();case 8:o=e.sent,n.push(o.descriptor);case 10:a++,e.next=2;break;case 13:return e.abrupt("return",new g.b(t,n));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v.a,{audio:!1,videoConstraints:{width:640,height:640,facingMode:"user"},ref:"video"}),r.a.createElement("div",null,this.state.person))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.8e436df2.chunk.js.map