!function(e){function t(t){for(var r,l,i=t[0],s=t[1],u=t[2],f=0,d=[];f<i.length;f++)l=i[f],o[l]&&d.push(o[l][0]),o[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(c&&c(t);d.length;)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={0:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=s;a.push([264,1]),n()}({135:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.capitalizeRole=function(e){return e.role.charAt(0).toUpperCase()+e.role.slice(1)},t.checkDonations=function(e){return 0===e.donations&&0===e.donationsReceived?"none":0==e.donationsReceived?e.donations+" - 0":0==e.donations?"0 - "+e.donationsReceived:e.donations+" ("+(e.donations/e.donationsReceived*100).toFixed(1)+"%)"},t.getMemberColor=function(e){return"leader"===e.role?"leader":"coleader"===e.role?"coleader":e.eligibleForPromotion?"promotion":e.onProbation?"probation":e.dangerOfDemotion?"demotion":"elder"===e.role?"elder":"member"}},259:function(e,t,n){},260:function(e){e.exports={index:{sampleText:"Hello World?"}}},264:function(e,t,n){n(265),n(467),e.exports=n(259)},46:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setOrder=t.setFilter=t.setQuery=t.setCurrent=void 0;var r=o(n(478));function o(e){return e&&e.__esModule?e:{default:e}}o(n(480)).default.polyfill();t.setCurrent=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(n){return(0,r.default)("https://drageniix.github.io/api"+e[t].url).then(function(e){return e.json()}).then(function(e){return n(function(e,t){return{type:"SET_WEEK",json:e,current:t}}(e,t)),e})}},t.setQuery=function(){return{type:"SET_QUERY",query:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}},t.setFilter={byNone:function(){return{type:"SET_FILTER",filter:"none"}},byPromotion:function(){return{type:"SET_FILTER",filter:"promotion"}},byProbation:function(){return{type:"SET_FILTER",filter:"probation"}},byDemotion:function(){return{type:"SET_FILTER",filter:"demotion"}}},t.setOrder={byRank:function(){return{type:"SET_ORDER",order:"rank"}},byName:function(){return{type:"SET_ORDER",order:"name"}},byDonations:function(){return{type:"SET_ORDER",order:"donations"}},byWars:function(){return{type:"SET_ORDER",order:"wars"}},byWarBattles:function(){return{type:"SET_ORDER",order:"warBattles"}},byLosses:function(){return{type:"SET_ORDER",order:"losses"}},byWins:function(){return{type:"SET_ORDER",order:"wins"}},byMissed:function(){return{type:"SET_ORDER",order:"missed"}},byRole:function(){return{type:"SET_ORDER",order:"role"}}}},467:function(e,t,n){"use strict";var r=h(n(11)),o=h(n(469)),a=h(n(473)),l=h(n(477)),i=h(n(482)),s=h(n(483)),u=h(n(485)),c=h(n(486)),f=h(n(487)),d=h(n(488)),p=h(n(489)),m=h(n(490)),y=n(25),b=h(n(493));function h(e){return e&&e.__esModule?e:{default:e}}n(259),function(e){e.keys().map(e)}(n(498));var j=(0,b.default)();o.default.render(r.default.createElement(function(){return r.default.createElement(y.Provider,{store:j},r.default.createElement("div",null,r.default.createElement(i.default,null),r.default.createElement("main",{className:"main"},r.default.createElement("section",{className:"flex-content"},r.default.createElement("section",{className:"half"},r.default.createElement(a.default,null),r.default.createElement(l.default,null),r.default.createElement("section",{className:"topPlayers"},r.default.createElement(d.default,{order:"wins",title:"Most Wins"}),r.default.createElement(d.default,{order:"donations",title:"Top Donators"}))),r.default.createElement("section",{className:"half"},r.default.createElement(u.default,null),r.default.createElement(s.default,null)),r.default.createElement("section",{className:"whole"},r.default.createElement(p.default,null),r.default.createElement("table",{className:"clanMembers"},r.default.createElement(f.default,null),r.default.createElement(c.default,null))))),r.default.createElement(m.default,null)))},null),document.getElementById("content"))},473:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClanDescription=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(11)),o=n(25);var a=t.ClanDescription=function(e){var t=e.admin;return r.default.createElement("section",{className:"description"},r.default.createElement("div",{className:"description__reqs"},r.default.createElement("h2",null,"Clan Requirements"),r.default.createElement("p",null,r.default.createElement("strong",null,"Member:")," Donate at least ",t.minDonations," cards weekly and participate in ",t.minWarBattles,"/10 war battles, missing a maximum of 1 war day battle when you participated in collection day."),r.default.createElement("p",null,r.default.createElement("strong",null,"Elder:")," Have at least ",t.minTrophies," trophies and donate more than ",t.elderDonations," cards. Must participate in at least ",t.elderWarBattles,"/10 wars. Kicking members and sending invitations to those below basic member requirements requires permission.")))};t.default=(0,o.connect)(function(e){return{admin:e.api.admin}})(a)},477:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChooseWeek=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(11)),a=n(46),l=n(25);function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=t.ChooseWeek=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.setCurrent=function(e){var t=parseInt(e.target.value);r.props.setCurrent(r.props.lastWeeks,t)},i(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){return o.default.createElement("section",{className:"weekSelection"},o.default.createElement("select",{onChange:this.setCurrent,value:this.props.current},this.props.lastWeeks.map(function(e,t){return o.default.createElement("option",{className:"weekSelection__option",value:t,key:t},e.display)})))}}]),t}();t.default=(0,l.connect)(function(e){return{current:e.current,lastWeeks:e.api.lastWeeks}},function(e){return{setCurrent:function(t,n){return e((0,a.setCurrent)(t,n))}}})(s)},482:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(11)),o=n(25);var a=t.Header=function(e){var t=e.name,n=e.discord;return r.default.createElement("header",{className:"header"},r.default.createElement("div",{className:"header__content"},r.default.createElement("img",{src:"./favicon.png"}),r.default.createElement("div",{className:"header__text"},r.default.createElement("h1",null,t),r.default.createElement("p",null,"2+ Years Strong! Come chat with us on ",r.default.createElement("a",{href:n},"Discord"),"."))))};t.default=(0,o.connect)(function(e){return{name:e.api.clan.name,discord:e.api.discord}})(a)},483:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SearchResult=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(11)),o=n(135),a=n(51),l=n(25);var i=t.SearchResult=function(e){var t=e.member;return t?r.default.createElement("section",{className:"searchResult",id:(0,o.getMemberColor)(t)},r.default.createElement("table",{className:"searchResult__table"},r.default.createElement("tbody",null,r.default.createElement("tr",null,r.default.createElement("td",null,"Name"),r.default.createElement("td",null,t.name)),r.default.createElement("tr",null,r.default.createElement("td",null,"Tag"),r.default.createElement("td",null,t.tag)),r.default.createElement("tr",null,r.default.createElement("td",null,"Trophies"),r.default.createElement("td",null,t.trophies)),r.default.createElement("tr",null,r.default.createElement("td",null,"Role"),r.default.createElement("td",null,(0,o.capitalizeRole)(t))),r.default.createElement("tr",null,r.default.createElement("td",null,"Donations"),r.default.createElement("td",null,t.donations)),r.default.createElement("tr",null,r.default.createElement("td",null,"Donations Received"),r.default.createElement("td",null,t.donationsReceived)),r.default.createElement("tr",null,r.default.createElement("td",null,"War Battles (Last 10)"),r.default.createElement("td",null,t.wins,"W - ",t.warBattles-t.wins,"L")),r.default.createElement("tr",null,r.default.createElement("td",null,"Missed War Battles"),r.default.createElement("td",null,t.missedWarBattles))))):r.default.createElement("section",null)};t.default=(0,l.connect)(function(e){return{member:(0,a.getSearchResult)(e.query,e.api.members)}})(i)},484:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.firstBy=function(){function e(e){return e}function t(e){return"string"==typeof e?e.toLowerCase():e}function n(r,o){var a="function"==typeof this&&!this.firstBy&&this,l=function(n,r){if(r="number"==typeof r?{direction:r}:r||{},"function"!=typeof n){var o=n;n=function(e){return e[o]?e[o]:""}}if(1===n.length){var a=n,l=r.ignoreCase?t:e,i=r.cmp||function(e,t){return e<t?-1:e>t?1:0};n=function(e,t){return i(l(a(e)),l(a(t)))}}return-1===r.direction?function(e,t){return-n(e,t)}:n}(r,o),i=a?function(e,t){return a(e,t)||l(e,t)}:l;return i.thenBy=n,i}return n.firstBy=n,n}()},485:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Search=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(11)),a=n(46),l=n(25);function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=t.Search=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.setQuery=function(e){var t=e.target.value;r.props.setQuery(t)},i(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){return o.default.createElement("div",{className:"form form__group"},o.default.createElement("input",{onChange:this.setQuery,value:this.props.query,type:"text",placeholder:"Member Search",id:"search",className:"form__input",spellCheck:!1,autoFocus:!0}),o.default.createElement("label",{htmlFor:"search",className:"form__label"},"Member Search"))}}]),t}();t.default=(0,l.connect)(function(e){return{query:e.query}},function(e){return{setQuery:function(t){return e((0,a.setQuery)(t))}}})(s)},486:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MemberTable=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(11)),a=n(135),l=n(51),i=n(46),s=n(25);function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=t.MemberTable=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return n=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.onClick=function(e){return function(t){r.props.onClick(e)}},u(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){var e=this;return o.default.createElement("tbody",null,this.props.members.map(function(t,n){return o.default.createElement("tr",{key:n,className:"clanMembers__"+(t.eligibleForPromotion?"promotion":t.onProbation?"probation":t.dangerOfDemotion?"demotion":"row")},o.default.createElement("td",{className:"align-left"}," #",t.clanRank," (",t.trophies,")"),o.default.createElement("td",{className:"align-right"},(0,a.capitalizeRole)(t)),o.default.createElement("td",{className:"pointer align-left member-link",onClick:e.onClick(t.tag)},t.name),o.default.createElement("td",{className:"align-right"},(0,a.checkDonations)(t)),o.default.createElement("td",{className:"align-right"},t.warBattles,t.missedWarBattles?" ("+t.missedWarBattles+"M)":""))}))}}]),t}();t.default=(0,s.connect)(function(e){return{members:(0,l.getMembers)(e.api.members,e.filters)}},function(e){return{onClick:function(t){window.scroll({top:200,left:0,behavior:"smooth"}),e((0,i.setQuery)(t))}}})(c)},487:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SortOptions=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(11)),a=n(25),l=n(51),i=n(46);function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=t.SortOptions=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.onSort=function(e){return function(t){r.props.onSort(e)}},s(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){return o.default.createElement("thead",{className:"clanMembers__header"},o.default.createElement("tr",null,o.default.createElement("th",{className:"pointer align-left",onClick:this.onSort("byRank")},this.props.getDirectionIndicator("rank")),o.default.createElement("th",{className:"pointer align-right",onClick:this.onSort("byRole")},this.props.getDirectionIndicator("role")),o.default.createElement("th",{className:"pointer align-left",onClick:this.onSort("byName")},this.props.getDirectionIndicator("name")),o.default.createElement("th",{className:"pointer align-right",onClick:this.onSort("byDonations")},this.props.getDirectionIndicator("donations")),o.default.createElement("th",{className:"pointer align-right",onClick:this.onSort("byWars")},this.props.getDirectionIndicator("wars"))))}}]),t}();t.default=(0,a.connect)(function(e){return{getDirectionIndicator:function(t){return(0,l.getDirectionIndicator)(e.filters,t)}}},function(e){return{onSort:function(t){return e(i.setOrder[t]())}}})(u)},488:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TopPlayers=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(11)),a=n(25),l=n(51),i=n(46);function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=t.TopPlayers=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.onClick=function(e){return function(t){r.props.onClick(e)}},s(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){var e=this;return o.default.createElement("div",{className:"topPlayers__type"},o.default.createElement("h4",null,this.props.title),o.default.createElement("table",null,o.default.createElement("tbody",null,this.props.members.map(function(t,n){return o.default.createElement("tr",{key:n},o.default.createElement("td",null,n+1,"."),o.default.createElement("td",{className:"pointer member-link",onClick:e.onClick(t.tag)},t.name))}))))}}]),t}();t.default=(0,a.connect)(function(e,t){var n=t.order;return{members:(0,l.getMembers)(e.api.members,{order:n}).slice(0,3)}},function(e){return{onClick:function(t){return e((0,i.setQuery)(t))}}})(u)},489:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FilterOptions=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(11)),a=n(51),l=n(46),i=n(25);function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=t.FilterOptions=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.onFilter=function(e){return function(t){r.props.onFilter(e)}},s(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){return o.default.createElement("ul",{className:"filter__list"},o.default.createElement("li",{className:this.props.getSelectedFilterClass("none"),onClick:this.onFilter("byNone")},"All Members"),o.default.createElement("li",{className:this.props.getSelectedFilterClass("promotion"),onClick:this.onFilter("byPromotion")},"Promotions"),o.default.createElement("li",{className:this.props.getSelectedFilterClass("probation"),onClick:this.onFilter("byProbation")},"Probation"),o.default.createElement("li",{className:this.props.getSelectedFilterClass("demotion"),onClick:this.onFilter("byDemotion")},"Demotions"))}}]),t}();t.default=(0,i.connect)(function(e){return{getSelectedFilterClass:function(t){return(0,a.getSelectedFilterClass)(e.filters.filter,t)}}},function(e){return{onFilter:function(t){return e(l.setFilter[t]())}}})(u)},490:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Footer=void 0;var r=i(n(1)),o=i(n(11)),a=n(25),l=n(51);function i(e){return e&&e.__esModule?e:{default:e}}var s=t.Footer=function(e){var t=e.pastDate,n=e.time,a=e.discord;return o.default.createElement("footer",{className:"footer"},o.default.createElement("div",{className:"footer__links"},o.default.createElement("a",{href:a},o.default.createElement("div",{className:"icon--discord"}))),t?o.default.createElement("p",{className:"footer__updated"},"Clan data from ",t):o.default.createElement("p",{className:"footer__updated"},"Clan data last updated ",n&&r.default.unix(n).fromNow(),"."),o.default.createElement("p",{className:"footer__credits"},"@meliaesc"))};t.default=(0,a.connect)(function(e){return{pastDate:(0,l.isPastDate)(e.current,e.api.lastWeeks),time:e.api.time,discord:e.api.discord}})(s)},492:function(e,t,n){var r={"./af":136,"./af.js":136,"./ar":137,"./ar-dz":138,"./ar-dz.js":138,"./ar-kw":139,"./ar-kw.js":139,"./ar-ly":140,"./ar-ly.js":140,"./ar-ma":141,"./ar-ma.js":141,"./ar-sa":142,"./ar-sa.js":142,"./ar-tn":143,"./ar-tn.js":143,"./ar.js":137,"./az":144,"./az.js":144,"./be":145,"./be.js":145,"./bg":146,"./bg.js":146,"./bm":147,"./bm.js":147,"./bn":148,"./bn.js":148,"./bo":149,"./bo.js":149,"./br":150,"./br.js":150,"./bs":151,"./bs.js":151,"./ca":152,"./ca.js":152,"./cs":153,"./cs.js":153,"./cv":154,"./cv.js":154,"./cy":155,"./cy.js":155,"./da":156,"./da.js":156,"./de":157,"./de-at":158,"./de-at.js":158,"./de-ch":159,"./de-ch.js":159,"./de.js":157,"./dv":160,"./dv.js":160,"./el":161,"./el.js":161,"./en-au":162,"./en-au.js":162,"./en-ca":163,"./en-ca.js":163,"./en-gb":164,"./en-gb.js":164,"./en-ie":165,"./en-ie.js":165,"./en-il":166,"./en-il.js":166,"./en-nz":167,"./en-nz.js":167,"./eo":168,"./eo.js":168,"./es":169,"./es-do":170,"./es-do.js":170,"./es-us":171,"./es-us.js":171,"./es.js":169,"./et":172,"./et.js":172,"./eu":173,"./eu.js":173,"./fa":174,"./fa.js":174,"./fi":175,"./fi.js":175,"./fo":176,"./fo.js":176,"./fr":177,"./fr-ca":178,"./fr-ca.js":178,"./fr-ch":179,"./fr-ch.js":179,"./fr.js":177,"./fy":180,"./fy.js":180,"./gd":181,"./gd.js":181,"./gl":182,"./gl.js":182,"./gom-latn":183,"./gom-latn.js":183,"./gu":184,"./gu.js":184,"./he":185,"./he.js":185,"./hi":186,"./hi.js":186,"./hr":187,"./hr.js":187,"./hu":188,"./hu.js":188,"./hy-am":189,"./hy-am.js":189,"./id":190,"./id.js":190,"./is":191,"./is.js":191,"./it":192,"./it.js":192,"./ja":193,"./ja.js":193,"./jv":194,"./jv.js":194,"./ka":195,"./ka.js":195,"./kk":196,"./kk.js":196,"./km":197,"./km.js":197,"./kn":198,"./kn.js":198,"./ko":199,"./ko.js":199,"./ky":200,"./ky.js":200,"./lb":201,"./lb.js":201,"./lo":202,"./lo.js":202,"./lt":203,"./lt.js":203,"./lv":204,"./lv.js":204,"./me":205,"./me.js":205,"./mi":206,"./mi.js":206,"./mk":207,"./mk.js":207,"./ml":208,"./ml.js":208,"./mn":209,"./mn.js":209,"./mr":210,"./mr.js":210,"./ms":211,"./ms-my":212,"./ms-my.js":212,"./ms.js":211,"./mt":213,"./mt.js":213,"./my":214,"./my.js":214,"./nb":215,"./nb.js":215,"./ne":216,"./ne.js":216,"./nl":217,"./nl-be":218,"./nl-be.js":218,"./nl.js":217,"./nn":219,"./nn.js":219,"./pa-in":220,"./pa-in.js":220,"./pl":221,"./pl.js":221,"./pt":222,"./pt-br":223,"./pt-br.js":223,"./pt.js":222,"./ro":224,"./ro.js":224,"./ru":225,"./ru.js":225,"./sd":226,"./sd.js":226,"./se":227,"./se.js":227,"./si":228,"./si.js":228,"./sk":229,"./sk.js":229,"./sl":230,"./sl.js":230,"./sq":231,"./sq.js":231,"./sr":232,"./sr-cyrl":233,"./sr-cyrl.js":233,"./sr.js":232,"./ss":234,"./ss.js":234,"./sv":235,"./sv.js":235,"./sw":236,"./sw.js":236,"./ta":237,"./ta.js":237,"./te":238,"./te.js":238,"./tet":239,"./tet.js":239,"./tg":240,"./tg.js":240,"./th":241,"./th.js":241,"./tl-ph":242,"./tl-ph.js":242,"./tlh":243,"./tlh.js":243,"./tr":244,"./tr.js":244,"./tzl":245,"./tzl.js":245,"./tzm":246,"./tzm-latn":247,"./tzm-latn.js":247,"./tzm.js":246,"./ug-cn":248,"./ug-cn.js":248,"./uk":249,"./uk.js":249,"./ur":250,"./ur.js":250,"./uz":251,"./uz-latn":252,"./uz-latn.js":252,"./uz.js":251,"./vi":253,"./vi.js":253,"./x-pseudo":254,"./x-pseudo.js":254,"./yo":255,"./yo.js":255,"./zh-cn":256,"./zh-cn.js":256,"./zh-hk":257,"./zh-hk.js":257,"./zh-tw":258,"./zh-tw.js":258};function o(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=492},493:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(98),o=i(n(494)),a=i(n(495)),l=n(46);function i(e){return e&&e.__esModule?e:{default:e}}var s=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.compose;t.default=function(){var e=(0,r.createStore)(a.default,s((0,r.applyMiddleware)(o.default)));e.dispatch((0,l.setCurrent)(e.getState().api.lastWeeks,0));var t=window.location.href.split("#");return t.length>1&&e.dispatch((0,l.setQuery)(t[1])),e}},495:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a={current:0,api:{time:0,discord:"",admin:{},clan:{},members:[],lastWeeks:[{url:"/clan.json",display:"Current Week"}]},query:"",filters:{filter:"none",order:"rank",dir:"ascending"}};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1];switch(t.type){case"SET_WEEK":return r({},e,{current:t.current,api:r({},t.json,{lastWeeks:1==e.api.lastWeeks.length&&t.json.lastWeeks?[].concat(o(e.api.lastWeeks),o(t.json.lastWeeks)):e.api.lastWeeks})});case"SET_QUERY":return r({},e,{query:t.query});case"SET_FILTER":return r({},e,{filters:r({},e.filters,{filter:t.filter})});case"SET_ORDER":return r({},e,{filters:r({},e.filters,{order:t.order,dir:e.filters.order===t.order&&"ascending"==e.filters.dir?"descending":"ascending"})});default:return e}}},498:function(e,t,n){var r={"./data/data":260,"./data/data.json":260,"./view/sprite.scss":499,"./view/sprite.svg":501};function o(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=498},499:function(e,t,n){},501:function(e,t,n){e.exports=n.p+"./assets/images/sprite.svg"},51:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSelectedFilterClass=t.getDirectionIndicator=t.getSearchResult=t.getMembers=t.isPastDate=void 0;var r=n(484),o={none:function(e){return e},promotion:function(e){return e.eligibleForPromotion},probation:function(e){return e.onProbation},demotion:function(e){return e.dangerOfDemotion}},a={rank:{ascending:function(e,t){return e.clanRank-t.clanRank},descending:function(e,t){return t.clanRank-e.clanRank}},name:{ascending:function(e,t){var n=e.name.toLowerCase(),r=t.name.toLowerCase();return n<r?-1:n>r?1:0},descending:function(e,t){var n=e.name.toLowerCase(),r=t.name.toLowerCase();return n<r?1:n>r?-1:0}},donations:{ascending:function(e,t){return t.donations-e.donations},descending:function(e,t){return e.donations-t.donations}},warBattles:{ascending:function(e,t){return t.warBattles-e.warBattles},descending:function(e,t){return e.warBattles-t.warBattles}},wins:{ascending:function(e,t){return t.wins-e.wins},descending:function(e,t){return e.wins-t.wins}},losses:{ascending:function(e,t){return t.losses-e.losses},descending:function(e,t){return e.losses-t.losses}},missed:{ascending:function(e,t){return t.missedWarBattles-e.missedWarBattles},descending:function(e,t){return e.missedWarBattles-t.missedWarBattles}},role:{ascending:function(e,t){return l(e.role)-l(t.role)},descending:function(e,t){var n=l(e.role);return l(t.role)-n}}};function l(e){switch(e){case"leader":return 1;case"coleader":return 2;case"elder":return 3;case"member":return 4;case"new":return 5}}a.wars={ascending:(0,r.firstBy)(a.warBattles.ascending).thenBy(a.wins.ascending),descending:(0,r.firstBy)(a.missed.ascending).thenBy(a.warBattles.descending).thenBy(a.losses.ascending)};t.isPastDate=function(e,t){return 0===e?void 0:t[e].display},t.getMembers=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.filter,r=void 0===n?"none":n,l=t.order,i=void 0===l?"rank":l,s=t.dir,u=void 0===s?"ascending":s;return e.filter(o[r]).sort(a[i][u])},t.getSearchResult=function(e,t){return e?t.find(function(t){return t.name.toLowerCase().includes(e.toLowerCase().trim())||t.tag===e}):void 0},t.getDirectionIndicator=function(e,t){var n=e.order,r=e.dir;return t.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()})+(n===t?"ascending"===r?" ▼":" ▲":"")},t.getSelectedFilterClass=function(e,t){return"pointer filter__list--item"+(e===t?" filter__list--item--selected":"")}}});
//# sourceMappingURL=index.js.map