!function(e){function t(t){for(var r,i,c=t[0],l=t[1],u=t[2],f=0,p=[];f<c.length;f++)i=c[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;a.push([123,1]),n()}({123:function(e,t,n){n(124),n(299),e.exports=n(298)},298:function(e,t,n){},299:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(119),i=n.n(a),c=n(8),l=n(46),u=n(122);function s(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){p(e,t,n[t])})}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m={current:0,api:{time:0,discord:"",admin:{},clan:{},members:[],lastWeeks:[{url:"/clan.json",display:"Current Week"}]},query:"",filters:{filter:"none",order:"rank",dir:"ascending"}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WEEK":return f({},e,{current:t.current,api:f({},t.json,{lastWeeks:1==e.api.lastWeeks.length&&t.json.lastWeeks?s(e.api.lastWeeks).concat(s(t.json.lastWeeks)):e.api.lastWeeks})});case"SET_QUERY":return f({},e,{query:t.query});case"SET_FILTER":return f({},e,{filters:f({},e.filters,{filter:t.filter})});case"SET_ORDER":return f({},e,{filters:f({},e.filters,{order:t.order,dir:e.filters.order===t.order&&"ascending"==e.filters.dir?"descending":"ascending"})});default:return e}},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(n){var r=" ./assets/data"+e[t].url;fetch(r).then(function(e){return e.json()}).then(function(e){return n(function(e,t){return{type:"SET_WEEK",json:e,current:t}}(e,t)),e})}},y=function(){return{type:"SET_QUERY",query:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}},h={byNone:function(){return{type:"SET_FILTER",filter:"none"}},byPromotion:function(){return{type:"SET_FILTER",filter:"promotion"}},byProbation:function(){return{type:"SET_FILTER",filter:"probation"}},byDemotion:function(){return{type:"SET_FILTER",filter:"demotion"}}},E={byRank:function(){return{type:"SET_ORDER",order:"rank"}},byName:function(){return{type:"SET_ORDER",order:"name"}},byDonations:function(){return{type:"SET_ORDER",order:"donations"}},byWars:function(){return{type:"SET_ORDER",order:"wars"}},byWarBattles:function(){return{type:"SET_ORDER",order:"warBattles"}},byLosses:function(){return{type:"SET_ORDER",order:"losses"}},byWins:function(){return{type:"SET_ORDER",order:"wins"}},byMissed:function(){return{type:"SET_ORDER",order:"missed"}},byRole:function(){return{type:"SET_ORDER",order:"role"}}},v=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,g=n(2),w=n.n(g);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var R=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(k(k(n=function(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?k(e):t}(this,(e=S(t)).call.apply(e,[this].concat(o))))),"setQuery",function(e){var t=e.target.value;n.props.setQuery(t)}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,o.a.Component),function(e,t,n){t&&O(e.prototype,t),n&&O(e,n)}(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"form"},o.a.createElement("form",{className:"form__content",onSubmit:function(){return!1}},o.a.createElement("input",{onChange:this.setQuery,value:this.props.query,type:"text",placeholder:"Member Search",id:"search",className:"form__input",spellCheck:!1,autoFocus:!0}),o.a.createElement("button",{className:"form__button"},o.a.createElement("svg",{className:"form__icon",viewBox:"0 0 20 20"},o.a.createElement("title",null,"Search Members"),o.a.createElement("path",{d:"M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z"})))))}}]),t}();R.propTypes={query:w.a.string.isRequired,setQuery:w.a.func.isRequired};var N=Object(c.b)(function(e){return{query:e.query}},function(e){return{setQuery:function(t){return e(y(t))}}})(R),P=function(){function e(e){return e}function t(e){return"string"==typeof e?e.toLowerCase():e}function n(r,o){var a="function"==typeof this&&!this.firstBy&&this,i=function(n,r){if(r="number"==typeof r?{direction:r}:r||{},"function"!=typeof n){var o=n;n=function(e){return e[o]?e[o]:""}}if(1===n.length){var a=n,i=r.ignoreCase?t:e,c=r.cmp||function(e,t){return e<t?-1:e>t?1:0};n=function(e,t){return c(i(a(e)),i(a(t)))}}return-1===r.direction?function(e,t){return-n(e,t)}:n}(r,o),c=a?function(e,t){return a(e,t)||i(e,t)}:i;return c.thenBy=n,c}return n.firstBy=n,n}(),T={none:function(e){return e},promotion:function(e){return e.eligibleForPromotion},probation:function(e){return e.onProbation},demotion:function(e){return e.dangerOfDemotion}},C={rank:{ascending:function(e,t){return e.clanRank-t.clanRank},descending:function(e,t){return t.clanRank-e.clanRank}},name:{ascending:function(e,t){var n=e.name.toLowerCase(),r=t.name.toLowerCase();return n<r?-1:n>r?1:0},descending:function(e,t){var n=e.name.toLowerCase(),r=t.name.toLowerCase();return n<r?1:n>r?-1:0}},donations:{ascending:function(e,t){return t.donations-e.donations},descending:function(e,t){return e.donations-t.donations}},warBattles:{ascending:function(e,t){return t.warBattles-e.warBattles},descending:function(e,t){return e.warBattles-t.warBattles}},wins:{ascending:function(e,t){return t.wins-e.wins},descending:function(e,t){return e.wins-t.wins}},losses:{ascending:function(e,t){return t.losses-e.losses},descending:function(e,t){return e.losses-t.losses}},missed:{ascending:function(e,t){return t.missedWarBattles-e.missedWarBattles},descending:function(e,t){return e.missedWarBattles-t.missedWarBattles}},role:{ascending:function(e,t){return W(e.role)-W(t.role)},descending:function(e,t){var n=W(e.role);return W(t.role)-n}}};function W(e){switch(e){case"leader":return 1;case"coleader":return 2;case"elder":return 3;case"member":return 4;case"new":return 5}}C.wars={ascending:P(C.warBattles.ascending).thenBy(C.wins.ascending),descending:P(C.missed.ascending).thenBy(C.warBattles.descending).thenBy(C.losses.ascending)};var D=function(e,t){return e?t.find(function(t){return t.name.toLowerCase().includes(e.toLowerCase().trim())||t.tag===e}):void 0},B=function(e){return e.role.charAt(0).toUpperCase()+e.role.slice(1)},q=function(e){var t=e.member;return o.a.createElement("section",{className:"searchResult"},o.a.createElement("div",{className:"searchResult__content",id:t&&function(e){return"leader"===e.role?"leader":"coleader"===e.role?"coleader":e.eligibleForPromotion?"promotion":e.onProbation?"probation":e.dangerOfDemotion?"demotion":"elder"===e.role?"elder":"member"}(t)},o.a.createElement("div",{className:"searchResult__table--wrapper"},t&&o.a.createElement("table",{className:"searchResult__table"},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Name"),o.a.createElement("td",null,t.name)),o.a.createElement("tr",null,o.a.createElement("td",null,"Tag"),o.a.createElement("td",null,t.tag)),o.a.createElement("tr",null,o.a.createElement("td",null,"Trophies"),o.a.createElement("td",null,t.trophies)),o.a.createElement("tr",null,o.a.createElement("td",null,"Role"),o.a.createElement("td",null,B(t))),o.a.createElement("tr",null,o.a.createElement("td",null,"Donations"),o.a.createElement("td",null,t.donations)),o.a.createElement("tr",null,o.a.createElement("td",null,"Donations Received"),o.a.createElement("td",null,t.donationsReceived)),o.a.createElement("tr",null,o.a.createElement("td",null,"War Battles (Last 10)"),o.a.createElement("td",null,"".concat(t.wins,"W - ").concat(t.warBattles-t.wins,"L"))),o.a.createElement("tr",null,o.a.createElement("td",null,"Missed War Battles"),o.a.createElement("td",null,t.missedWarBattles)))))))};q.propTypes={member:w.a.object};var M=Object(c.b)(function(e){return{member:D(e.query,e.api.members)}})(q),F=function(e){var t=e.admin,n=e.member;return o.a.createElement("section",{className:"description",id:"description"},o.a.createElement(N,null),n?o.a.createElement(M,null):o.a.createElement("div",{className:"description__reqs"},o.a.createElement("p",null,o.a.createElement("strong",null,"Member:")," Donate at least"," ",t.minDonations," cards weekly and participate in"," ",t.minWarBattles,"/10 war battles, missing a maximum of 1 war day battle when you participated in collection day."),o.a.createElement("p",null,o.a.createElement("strong",null,"Elder:")," Have at least ",t.minTrophies," ","trophies and donate more than ",t.elderDonations," cards. Must participate in at least ",t.elderWarBattles,"/10 wars. Kicking members and sending invitations to those below basic member requirements requires permission.")))};F.propTypes={admin:w.a.object.isRequired,member:w.a.object};var L=Object(c.b)(function(e){return{admin:e.api.admin,member:D(e.query,e.api.members)}})(F);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Q=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(V(V(n=function(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?V(e):t}(this,(e=I(t)).call.apply(e,[this].concat(o))))),"setNewWeek",function(e){return function(){n.props.setNewWeek(n.props.lastWeeks,e)}}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,o.a.Component),function(e,t,n){t&&z(e.prototype,t),n&&z(e,n)}(t,[{key:"render",value:function(){var e=this;return o.a.createElement("span",{className:"weekSelection"},o.a.createElement("a",null,"History"),o.a.createElement("div",{className:"weekSelection__weeks"},this.props.lastWeeks.map(function(t,n){return o.a.createElement("li",{className:e.props.current===n?"selectedWeek":"",key:n,onClick:e.setNewWeek(n)},t.display)})))}}]),t}();Q.propTypes={setNewWeek:w.a.func.isRequired,current:w.a.number.isRequired,lastWeeks:w.a.array.isRequired};var U=Object(c.b)(function(e){return{current:e.current,lastWeeks:e.api.lastWeeks}},function(e){return{setNewWeek:function(t,n){return e(b(t,n))}}})(Q),H=function(e){var t=e.name,n=e.discord;return o.a.createElement("header",{className:"header"},o.a.createElement("div",{className:"header__content"},o.a.createElement("div",{className:"header__brand"},o.a.createElement("img",{className:"header__brand--logo",src:"./favicon.png"}),o.a.createElement("h1",{className:"header__brand--title"},t)),o.a.createElement("div",{className:"header__links"},o.a.createElement(U,null),o.a.createElement("a",{href:n},"Discord"),o.a.createElement("a",{href:"https://royaleapi.com/clan/PGVRPVG"},"All Stats"))))};H.propTypes={name:w.a.string.isRequired,discord:w.a.string.isRequired};var K=Object(c.b)(function(e){return{name:e.api.clan.name,discord:e.api.discord}})(H),G=function(e){var t=e.pastDate,n=e.time,r=e.discord;return o.a.createElement("footer",{className:"footer"},o.a.createElement("div",{className:"footer__links"},o.a.createElement("a",{href:r},o.a.createElement("svg",{className:"footer__discord",viewBox:"0 0 800 272.1"},o.a.createElement("path",{d:"M142.8 120.1c-5.7 0-10.2 4.9-10.2 11s4.6 11 10.2 11c5.7 0 10.2-4.9 10.2-11s-4.6-11-10.2-11zM106.3 120.1c-5.7 0-10.2 4.9-10.2 11s4.6 11 10.2 11c5.7 0 10.2-4.9 10.2-11 .1-6.1-4.5-11-10.2-11z"}),o.a.createElement("path",{d:"M191.4 36.9h-134c-11.3 0-20.5 9.2-20.5 20.5v134c0 11.3 9.2 20.5 20.5 20.5h113.4l-5.3-18.3 12.8 11.8 12.1 11.1 21.6 18.7V57.4c-.1-11.3-9.3-20.5-20.6-20.5zm-38.6 129.5s-3.6-4.3-6.6-8c13.1-3.7 18.1-11.8 18.1-11.8-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.4-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.6-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.2-1.8-1-2.8-1.7-2.8-1.7s4.8 7.9 17.5 11.7c-3 3.8-6.7 8.2-6.7 8.2-22.1-.7-30.5-15.1-30.5-15.1 0-31.9 14.4-57.8 14.4-57.8 14.4-10.7 28-10.4 28-10.4l1 1.2c-18 5.1-26.2 13-26.2 13s2.2-1.2 5.9-2.8c10.7-4.7 19.2-5.9 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.5 0 0-7.9-7.5-24.9-12.6l1.4-1.6s13.7-.3 28 10.4c0 0 14.4 25.9 14.4 57.8 0-.1-8.4 14.3-30.5 15zM303.8 79.7h-33.2V117l22.1 19.9v-36.2h11.8c7.5 0 11.2 3.6 11.2 9.4v27.7c0 5.8-3.5 9.7-11.2 9.7h-34v21.1h33.2c17.8.1 34.5-8.8 34.5-29.2v-29.8c.1-20.8-16.6-29.9-34.4-29.9zm174 59.7v-30.6c0-11 19.8-13.5 25.8-2.5l18.3-7.4c-7.2-15.8-20.3-20.4-31.2-20.4-17.8 0-35.4 10.3-35.4 30.3v30.6c0 20.2 17.6 30.3 35 30.3 11.2 0 24.6-5.5 32-19.9l-19.6-9c-4.8 12.3-24.9 9.3-24.9-1.4zM417.3 113c-6.9-1.5-11.5-4-11.8-8.3.4-10.3 16.3-10.7 25.6-.8l14.7-11.3c-9.2-11.2-19.6-14.2-30.3-14.2-16.3 0-32.1 9.2-32.1 26.6 0 16.9 13 26 27.3 28.2 7.3 1 15.4 3.9 15.2 8.9-.6 9.5-20.2 9-29.1-1.8l-14.2 13.3c8.3 10.7 19.6 16.1 30.2 16.1 16.3 0 34.4-9.4 35.1-26.6 1-21.7-14.8-27.2-30.6-30.1zm-67 55.5h22.4V79.7h-22.4v88.8zM728 79.7h-33.2V117l22.1 19.9v-36.2h11.8c7.5 0 11.2 3.6 11.2 9.4v27.7c0 5.8-3.5 9.7-11.2 9.7h-34v21.1H728c17.8.1 34.5-8.8 34.5-29.2v-29.8c0-20.8-16.7-29.9-34.5-29.9zm-162.9-1.2c-18.4 0-36.7 10-36.7 30.5v30.3c0 20.3 18.4 30.5 36.9 30.5 18.4 0 36.7-10.2 36.7-30.5V109c0-20.4-18.5-30.5-36.9-30.5zm14.4 60.8c0 6.4-7.2 9.7-14.3 9.7-7.2 0-14.4-3.1-14.4-9.7V109c0-6.5 7-10 14-10 7.3 0 14.7 3.1 14.7 10v30.3zM682.4 109c-.5-20.8-14.7-29.2-33-29.2h-35.5v88.8h22.7v-28.2h4l20.6 28.2h28L665 138.1c10.7-3.4 17.4-12.7 17.4-29.1zm-32.6 12h-13.2v-20.3h13.2c14.1 0 14.1 20.3 0 20.3z"})))),t?o.a.createElement("p",{className:"footer__updated"},"Clan data from ",n):o.a.createElement("p",{className:"footer__updated"},"Clan data last updated ",n,"."),o.a.createElement("p",{className:"footer__credits"},"@meliaesc"))};G.propTypes={time:w.a.string.isRequired,pastDate:w.a.boolean,discord:w.a.string.isRequired};var J=Object(c.b)(function(e){return{pastDate:function(e){return 0===e}(e.current,e.api.lastWeeks),time:e.api.lastWeeks[e.current].display,discord:e.api.discord}})(G);function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ee(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var te=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(ee(ee(n=function(e,t){return!t||"object"!==X(t)&&"function"!=typeof t?ee(e):t}(this,(e=Z(t)).call.apply(e,[this].concat(o))))),"onFilter",function(e){return function(){n.props.onFilter(e)}}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(t,o.a.Component),function(e,t,n){t&&Y(e.prototype,t),n&&Y(e,n)}(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"filter"},o.a.createElement("div",{className:"filter__vaporware"}),o.a.createElement("ul",{className:"filter__list"},o.a.createElement("li",{className:this.props.getSelectedFilterClass("none"),onClick:this.onFilter("byNone")},"All Members"),o.a.createElement("li",{className:this.props.getSelectedFilterClass("promotion"),onClick:this.onFilter("byPromotion")},"Promotion"),o.a.createElement("li",{className:this.props.getSelectedFilterClass("probation"),onClick:this.onFilter("byProbation")},"Probation"),o.a.createElement("li",{className:this.props.getSelectedFilterClass("demotion"),onClick:this.onFilter("byDemotion")},"Demotion")))}}]),t}();te.propTypes={getSelectedFilterClass:w.a.func.isRequired,onFilter:w.a.func.isRequired};var ne=Object(c.b)(function(e){return{getSelectedFilterClass:function(t){return function(e,t){return"pointer filter__list--item"+(e===t?" filter__list--item--selected":"")}(e.filters.filter,t)}}},function(e){return{onFilter:function(t){return e(h[t]())}}})(te);function re(e){return(re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ae(e){return(ae=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ie(e,t){return(ie=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ce(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var le=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(ce(ce(n=function(e,t){return!t||"object"!==re(t)&&"function"!=typeof t?ce(e):t}(this,(e=ae(t)).call.apply(e,[this].concat(o))))),"onSort",function(e){return function(){n.props.onSort(e)}}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ie(e,t)}(t,o.a.Component),function(e,t,n){t&&oe(e.prototype,t),n&&oe(e,n)}(t,[{key:"render",value:function(){return o.a.createElement("thead",{className:"clanMembers__header"},o.a.createElement("tr",null,o.a.createElement("th",{className:"pointer align-left",onClick:this.onSort("byRank")},this.props.getDirectionIndicator("rank")),o.a.createElement("th",{className:"pointer align-right",onClick:this.onSort("byRole")},this.props.getDirectionIndicator("role")),o.a.createElement("th",{className:"pointer align-left",onClick:this.onSort("byName")},this.props.getDirectionIndicator("name")),o.a.createElement("th",{className:"pointer align-right",onClick:this.onSort("byDonations")},this.props.getDirectionIndicator("donations")),o.a.createElement("th",{className:"'pointer align-right",onClick:this.onSort("byWars")},this.props.getDirectionIndicator("wars"))))}}]),t}();le.propTypes={getDirectionIndicator:w.a.func.isRequired,onSort:w.a.func.isRequired};var ue=Object(c.b)(function(e){return{getDirectionIndicator:function(t){return function(e,t){var n=e.order,r=e.dir;return t.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()})+(n===t?"ascending"===r?" ▼":" ▲":"")}(e.filters,t)}}},function(e){return{onSort:function(t){return e(E[t]())}}})(le);function se(e){return(se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function fe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pe(e){return(pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function me(e,t){return(me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function de(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var be=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(de(de(n=function(e,t){return!t||"object"!==se(t)&&"function"!=typeof t?de(e):t}(this,(e=pe(t)).call.apply(e,[this].concat(o))))),"onClick",function(e){return function(){n.props.onClick(e)}}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&me(e,t)}(t,o.a.Component),function(e,t,n){t&&fe(e.prototype,t),n&&fe(e,n)}(t,[{key:"render",value:function(){var e=this;return o.a.createElement("tbody",null,this.props.members.map(function(t,n){return o.a.createElement("tr",{key:n,className:"clanMembers__"+(t.eligibleForPromotion?"promotion":t.onProbation?"probation":t.dangerOfDemotion?"demotion":"row")},o.a.createElement("td",{className:"align-left"}," ","#",t.clanRank," (",t.trophies,")"),o.a.createElement("td",{className:"align-right"},B(t)),o.a.createElement("td",{className:"pointer align-left member-link",onClick:e.onClick(t.tag)},t.name),o.a.createElement("td",{className:"align-right"},function(e){return 0===e.donations&&0===e.donationsReceived?"none":0==e.donationsReceived?"".concat(e.donations," - 0"):0==e.donations?"0 - ".concat(e.donationsReceived):"".concat(e.donations," (").concat((e.donations/e.donationsReceived*100).toFixed(1),"%)")}(t)),o.a.createElement("td",{className:"align-right"},t.warBattles,t.missedWarBattles?" ("+t.missedWarBattles+"M)":""))}))}}]),t}();be.propTypes={members:w.a.array.isRequired,onClick:w.a.func.isRequired};var ye=Object(c.b)(function(e){return{members:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.filter,r=void 0===n?"none":n,o=t.order,a=void 0===o?"rank":o,i=t.dir,c=void 0===i?"ascending":i;return e.filter(T[r]).sort(C[a][c])}(e.api.members,e.filters)}},function(e){return{onClick:function(t){window.scroll({top:150,left:0,behavior:"smooth"}),e(y(t))}}})(be),he=function(){return o.a.createElement("div",{className:"body"},o.a.createElement(K,null),o.a.createElement("main",null,o.a.createElement("div",{className:"hero"},o.a.createElement(L,null)),o.a.createElement(ne,{id:"members"}),o.a.createElement("table",{className:"clanMembers"},o.a.createElement(ue,null),o.a.createElement(ye,null))),o.a.createElement(J,null))},Ee=function(){var e=Object(l.d)(d,v(Object(l.a)(u.a)));e.dispatch(b(e.getState().api.lastWeeks,0));var t=window.location.href.split("#");return t.length>1&&e.dispatch(y(t[1])),e}();i.a.render(o.a.createElement(function(){return o.a.createElement(c.a,{store:Ee},o.a.createElement(he,null))},null),document.getElementById("content"))}});
//# sourceMappingURL=index.js.map