(this.webpackJsonppointage=this.webpackJsonppointage||[]).push([[0],{165:function(e,t,n){e.exports=n(322)},170:function(e,t,n){},322:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(3),r=n.n(i),s=(n(170),n(49)),c=n(50),l=n(54),u=n(51),p=n(55),d=(n(116),n(84)),f=n(34),v=n(161),h=n(324),g=n(79),m=n.n(g);n(323),n(171);m.a.initializeApp({apiKey:"AIzaSyA0x29pPnGdDxJTg9BkwgAer13JQw9Lq8A",authDomain:"pointageapp-3bf1f.firebaseapp.com",databaseURL:"https://pointageapp-3bf1f.firebaseio.com",projectId:"pointageapp-3bf1f",storageBucket:"pointageapp-3bf1f.appspot.com",messagingSenderId:"242803300074",appId:"1:242803300074:web:aa7401e2c5a6cdabf32993",measurementId:"G-0081JXN4MV"});m.a.storage();var b=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={data:[],users:[],disp:[]},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=m.a.database().ref("pointage"),n=[],a=[];t.on("value",(function(t){e.setState({data:Object.values(t.val())}),t.forEach((function(e){n.includes(Object.getOwnPropertyNames(e.val()))||n.push(Object.getOwnPropertyNames(e.val())),e.forEach((function(e){console.log(e.val())}))}));var o=Object(v.a)(new Set(n.flat())),i=1;t.forEach((function(e){var n=Object.values(t.val()).length;o.forEach((function(t){Object.getOwnPropertyNames(e.val())[0]===t&&i===n&&e.forEach((function(e){var n,o,i,r;a.push({user:t,Jour:null===(n=e.val())||void 0===n?void 0:null===(o=n.Jour)||void 0===o?void 0:o.time,Soir:null===(i=e.val())||void 0===i?void 0:null===(r=i.Soir)||void 0===r?void 0:r.time})}))})),i++})),e.setState({users:o,disp:a})}))}},{key:"render",value:function(){return o.a.createElement(h.a,{dataSource:this.state.disp,columns:[{title:"Nom Prenom",dataIndex:"user",key:"user"},{title:"Jour",dataIndex:"Jour",key:"Jour"},{title:"Soir",dataIndex:"Soir",key:"Soir"}]})}}]),t}(a.Component),w=n(65),j=n.n(w),O=(n(319),n(325)),y=function(e){function t(e){var n;return Object(s.a)(this,t),n=Object(l.a)(this,Object(u.a)(t).call(this,e)),j.a.accessToken="pk.eyJ1Ijoic2ttZXJjdXIiLCJhIjoiY2pzZ2V4ZWVoMDlpbTN5cGt6aG9ybG9kMCJ9.gM0FxuT6iOwSrRGpCjJOLA",n.state={lng:4.756171,lat:36.054363,zoom:10,sellsmans:[],markers:[]},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new j.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/streets-v11",center:[this.state.lng,this.state.lat],zoom:this.state.zoom});t.flyTo({center:[4.756171,36.054363],speed:.4,essential:!0,zoom:15});var n=[],a=[];m.a.database().ref("position").on("value",(function(o){var i=Object.values(o.val());console.log("positions"),console.log(o.val()),o.forEach((function(e){if(0==n.length){var a=0;Object.getOwnPropertyNames(o.val()).forEach((function(e){var o,r;console.log(e);var s=(null===(o=i[a])||void 0===o?void 0:o.van)?null===(r=i[a])||void 0===r?void 0:r.van:e,c=i[a].lat,l=i[a].log;if(i[a].speed>=70){var u={message:"Attention vitesse",description:"Le van "+s+" vitesse : "+i[a].speed,duration:60,onClick:function(){t.flyTo({center:[l,c],speed:.4,essential:!0,zoom:15})}};O.a.warning(u)}n.push({van:s,lat:i[a].lat,lon:i[a].log,speed:i[a].speed,date:i[a].date?i[a].date:"No date"}),a++}))}})),console.log(n),0===e.state.sellsmans.length&&e.setState({sellsmans:n}),console.log(e.state.sellsmans.length),e.state.sellsmans.length>0&&a.forEach((function(e){e.remove()})),e.state.sellsmans.forEach((function(e){console.log(e);var n=new j.a.Popup({offset:25,closeButton:!1}).setHTML("<h3> VAN : "+e.van+"</h3><h4> Vitesse : "+Math.round(3.6*e.speed)+"</h4><h4> Date : "+e.date+"</h4>"),o=(new j.a.Marker).setLngLat([e.lon,e.lat]).setPopup(n).addTo(t);a.push(o)}))}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{width:"100%",height:"100%",position:"fixed"},ref:function(t){return e.mapContainer=t}})}}]),t}(a.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("main",null,o.a.createElement(d.b,{basename:"/"},o.a.createElement(f.a,{path:"/",component:b,exact:!0}),o.a.createElement(f.a,{path:"/map",component:y})))}}]),t}(a.Component),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(d.a,null,o.a.createElement(k,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pointage",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/pointage","/service-worker.js");E?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()}},[[165,1,2]]]);
//# sourceMappingURL=main.4b8c036f.chunk.js.map