(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{528:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),o=a(2),i=a.n(o),s=a(534),c=a(542),m=a(533),d=a(535),u=a(537),y=a(540),b=a(536),f=function(e){var t=e.normalize,a=e.warHistory,n=a.wins,r=a.losses,o=a.missed,i=e.clanHistory.donations;return l.a.createElement("div",{className:"charts"},l.a.createElement(s.a,{scale:{x:"time"},animate:{delay:0,duration:1e3}},l.a.createElement(c.a,null,o.some(function(e){return 0<e.y})&&l.a.createElement(m.a,{style:{data:{fill:"red"}},data:o}),r.some(function(e){return 0<e.y})&&l.a.createElement(m.a,{style:{data:{fill:"orange"}},data:r}),n.some(function(e){return 0<e.y})&&l.a.createElement(m.a,{style:{data:{fill:"green"}},data:n})),l.a.createElement(d.a,{alignment:"start",labels:function(e){return e.y?(e.y*t.scale).toFixed(0):""},labelComponent:l.a.createElement(u.a,{dx:40/i.length}),style:{data:{opacity:.62}},data:i}),l.a.createElement(y.a,{tickFormat:function(e){return new Date(e).toDateString().slice(4,10)}}),l.a.createElement(y.a,{domain:[0,t.max],tickFormat:function(e){return e.toFixed(0)},tickCount:t.max,dependentAxis:!0,label:"Battles"})),l.a.createElement(b.a,{height:75,x:60,title:"Legend",centerTitle:!0,gutter:20,orientation:"horizontal",colorScale:["black","green","orange","red"],style:{border:{stroke:"black"},title:{fontSize:20}},data:[{name:"Donations",symbol:{type:"square"}},{name:"Wins"},{name:"Losses"},{name:"Missed"}]}))};f.propTypes={normalize:i.a.number,warHistory:i.a.object,clanHistory:i.a.object},t.default=Object(r.b)(function(e){return e.individualMember.history})(f)}}]);
//# sourceMappingURL=3.js.map