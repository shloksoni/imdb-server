(this["webpackJsonpimdb-frontend"]=this["webpackJsonpimdb-frontend"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),i=a.n(c),l=(a(13),a(3)),s=a(4),o=a(6),u=a(5),m=(a(14),a(15),function(e){e.handleChange;var t=e.fireQuery;e.input;return r.a.createElement("div",{className:"header"},r.a.createElement("input",{className:"search-input",type:"text",onKeyPress:t,placeholder:"Search and press ENTER"}))}),h=(a(16),a(17),function(e){var t=e.Ratings.slice(0,2);return r.a.createElement("div",{className:"bar-chart"},t.map((function(e){return e.OriginalVal=e.Value,e.Source.includes("Int")&&(e.Value=10*Number(e.Value.split("/")[0])+"%",console.log(e.Value)),r.a.createElement("div",{className:"bar-container"},r.a.createElement("div",{className:"skills ".concat(e.Source.substr(0,3)),style:{width:"".concat(e.Value)}},e.Source,": ",e.OriginalVal," "))})))}),v=function(e){var t=e.movie;return console.log(t),r.a.createElement("div",{className:"movie-display"},r.a.createElement("img",{src:t.Poster,className:"img",alt:t.Title}),r.a.createElement("div",{className:"movie-content"},r.a.createElement("h1",null,t.Title),r.a.createElement("div",null,r.a.createElement("span",null,t.Year),"N/A"!==t.Director?r.a.createElement("span",null,", By ",t.Director):null),r.a.createElement("div",{className:"cast"},r.a.createElement("span",{className:"key"},"Cast:")," ",t.Actors),r.a.createElement(h,{Ratings:t.Ratings})))},d=a(7),f=(a(18),a(19),function(e){var t=e.Poster,a=e.Title,n=e.Year,c=e.showMovie,i=e.id;return r.a.createElement("div",{className:"card",onClick:function(){return c(i)}},r.a.createElement("img",{src:t,alt:"Avatar",className:"img"}),r.a.createElement("div",{className:"container"},r.a.createElement("h4",null,r.a.createElement("b",null,a)),r.a.createElement("p",null,n)))}),E=function(e){var t=e.data,a=e.showMovie;return console.log(t.Response),r.a.createElement("div",{className:"view-cards"},0!==Object.keys(t).length?t.Search?t.Search.map((function(e){var t=e.imdbID,n=Object(d.a)(e,["imdbID"]);return r.a.createElement(f,Object.assign({key:t,id:t},n,{showMovie:a}))})):r.a.createElement("h1",null,t.Error):null)},p=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).fireQuery=function(e){13===e.which&&fetch("http://shlok.tech:3020/search?search=".concat(e.target.value)).then((function(e){return e.json()})).then((function(e){n.setState({result:e,currentMovie:{}})}))},n.showMovie=function(e){fetch("http://shlok.tech:3020/search/".concat(e)).then((function(e){return e.json()})).then((function(e){return n.setState({currentMovie:e})}))},n.state={result:[],currentMovie:{}},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,{handleChange:this.handleChange,fireQuery:this.fireQuery,input:this.state.input}),0===Object.keys(this.state.currentMovie).length?r.a.createElement(E,{data:this.state.result,showMovie:this.showMovie}):r.a.createElement(v,{movie:this.state.currentMovie}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.5834d9e5.chunk.js.map