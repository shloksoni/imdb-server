(this["webpackJsonpimdb-frontend"]=this["webpackJsonpimdb-frontend"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),i=(n(13),n(3)),s=n(4),l=n(6),u=n(5),h=(n(14),n(15),function(e){e.handleChange;var t=e.fireQuery;e.input;return r.a.createElement("div",{className:"header"},r.a.createElement("input",{className:"search-input",type:"text",onKeyPress:t,placeholder:"Search and press ENTER"}))}),m=(n(16),function(e){var t=e.movie;return console.log(t),r.a.createElement("div",{className:"movie-display"},r.a.createElement("img",{src:t.Poster,className:"img",alt:t.Title}),r.a.createElement("div",{className:"movie-content"},r.a.createElement("h1",null,t.Title)))}),v=n(7),d=(n(17),n(18),function(e){var t=e.Poster,n=e.Title,a=e.Year,c=e.showMovie,o=e.id;return r.a.createElement("div",{className:"card",onClick:function(){return c(o)}},r.a.createElement("img",{src:t,alt:"Avatar",className:"img"}),r.a.createElement("div",{className:"container"},r.a.createElement("h4",null,r.a.createElement("b",null,n)),r.a.createElement("p",null,a)))}),f=function(e){var t=e.data,n=e.showMovie;return console.log(t.Response),r.a.createElement("div",{className:"view-cards"},0!==Object.keys(t).length?t.Search?t.Search.map((function(e){var t=e.imdbID,a=Object(v.a)(e,["imdbID"]);return r.a.createElement(d,Object.assign({key:t,id:t},a,{showMovie:n}))})):r.a.createElement("h1",null,t.Error):null)},E=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).fireQuery=function(e){13===e.which&&fetch("http://localhost:3000/search?search=".concat(e.target.value)).then((function(e){return e.json()})).then((function(e){a.setState({result:e,currentMovie:{}})}))},a.showMovie=function(e){fetch("http://localhost:3000/search/".concat(e)).then((function(e){return e.json()})).then((function(e){return a.setState({currentMovie:e})}))},a.state={result:[],currentMovie:{}},a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,{handleChange:this.handleChange,fireQuery:this.fireQuery,input:this.state.input}),0===Object.keys(this.state.currentMovie).length?r.a.createElement(f,{data:this.state.result,showMovie:this.showMovie}):r.a.createElement(m,{movie:this.state.currentMovie}))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.f23e0e66.chunk.js.map