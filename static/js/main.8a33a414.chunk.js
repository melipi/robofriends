(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t(1),i=t(7),c=t.n(i),a=(t(13),t(2)),s=t(3),h=t(5),l=t(4),d=function(e){var n=e.name,t=e.email,r=e.id;return Object(o.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(o.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:n}),Object(o.jsx)("p",{children:t})]})]})},u=function(e){var n=e.robots;return Object(o.jsx)("div",{children:n.map((function(e,t){return Object(o.jsx)(d,{id:n[t].id,name:n[t].name,email:n[t].email},t)}))})},f=function(e){e.searchfield;var n=e.searchChange;return Object(o.jsx)("div",{className:"pa2",children:Object(o.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},b=function(e){return Object(o.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},j=function(e){Object(h.a)(t,e);var n=Object(l.a)(t);function t(e){var o;return Object(a.a)(this,t),(o=n.call(this,e)).state={hasError:!1},o}return Object(s.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(o.jsx)("h1",{children:"Oops! Something went wrong."}):this.props.children}}]),t}(r.Component),g=(t(14),function(e){Object(h.a)(t,e);var n=Object(l.a)(t);function t(){var e;return Object(a.a)(this,t),(e=n.call(this)).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={robots:[],searchfield:""},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){e.setState({robots:n})}))}},{key:"render",value:function(){var e=this.state,n=e.robots,t=e.searchfield,r=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return n.length?Object(o.jsxs)("div",{className:"tc",children:[Object(o.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(o.jsx)(f,{searchChange:this.onSearchChange}),Object(o.jsx)(b,{children:Object(o.jsx)(j,{children:Object(o.jsx)(u,{robots:r})})})]}):Object(o.jsx)("h1",{children:"Loading"})}}]),t}(r.Component)),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(15);c.a.render(Object(o.jsx)(g,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robofriends","/service-worker.js");v?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):p(e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.8a33a414.chunk.js.map