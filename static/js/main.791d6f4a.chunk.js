(this.webpackJsonpclicky=this.webpackJsonpclicky||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"images/eagle1.png","name":"eagle1"},{"id":2,"image":"images/eagle2.png","name":"eagle2"},{"id":3,"image":"images/eagle3.png","name":"eagle3"},{"id":4,"image":"images/eagle4.png","name":"eagle5"},{"id":5,"image":"images/eagle5.png","name":"eagle5"},{"id":6,"image":"images/owl1.png","name":"owl1"},{"id":7,"image":"images/owl2.png","name":"owl2"},{"id":8,"image":"images/owl3.png","name":"owl3"},{"id":9,"image":"images/owl4.png","name":"owl4"},{"id":10,"image":"images/owl5.png","name":"owl5"},{"id":11,"image":"images/owl6.png","name":"owl6"},{"id":12,"image":"images/parrot1.png","name":"parrot1"},{"id":13,"image":"images/parrot2.png","name":"parrot2"},{"id":14,"image":"images/parrot3.png","name":"parrot3"},{"id":15,"image":"images/parrot4.png","name":"parrot4"},{"id":16,"image":"images/parrot5.png","name":"parrot5"},{"id":17,"image":"images/parrot6.png","name":"parrot5"},{"id":18,"image":"images/parrot7.png","name":"parrot5"}]')},,,,,,,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(3),i=t.n(c),o=(t(14),t(4)),s=t(5),l=t(7),m=t(6),g=t(8),d=t(1);t(15);var p=function(e){return n.a.createElement("header",{className:"scoreB"},n.a.createElement("div",{className:"row"},n.a.createElement("h1",null,"Clicky Game")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 col-ctr"},n.a.createElement("h2",null,"Click each bird only once to gather scores or to beat the highest score!"))),n.a.createElement("div",{className:"row"},n.a.createElement("p",null,"(Game over if you click an image twice!)")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"score"},n.a.createElement("h6",null,"Current Score: ",e.score)),n.a.createElement("div",{className:"score"},n.a.createElement("h6",null,"High Score: ",e.topScore))))},u=(t(16),function(e){return n.a.createElement("div",{className:"card",onClick:function(){return e.clickedImage(e.id)}},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image}),n.a.createElement("div",{className:"overlay"})))});function h(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),r=[e[t],e[a]];e[a]=r[0],e[t]=r[1]}return e}var w=function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={pictures:d,score:0,topScore:0,showAlert:0,showSuccess:0,clickedpictures:[]},t.clickedImage=function(e){var a=t.state.clickedpictures,r=t.state.score,n=t.state.topScore;t.setState({showAlert:0}),-1===a.indexOf(e)?(a.push(e),console.log(a),t.handleIncrement(),t.makeShuffle()):18===t.state.score?t.setState({showSuccess:1,score:0,clickedpictures:[]}):(t.setState({score:0,clickedpictures:[]}),console.log("duplicate"),t.setState({showAlert:1})),r>n&&t.setState({topScore:r})},t.handleIncrement=function(){t.setState({score:t.state.score+1})},t.makeShuffle=function(){t.setState({pictures:h(d)})},t}return Object(g.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement(p,{title:"clicky Game",score:this.state.score,topScore:this.state.topScore}),n.a.createElement("div",{className:"alert",style:{opacity:this.state.showAlert}},"You already clicked that, Game over!"),n.a.createElement("div",{className:"row"},this.state.pictures.map((function(a){return n.a.createElement(u,{id:a.id,image:a.image,clickedImage:e.clickedImage})}))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.791d6f4a.chunk.js.map