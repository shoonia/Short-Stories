webpackJsonp([2],{111:function(e,t,a){"use strict";function n(e){return{type:y.a,payload:e}}function r(){return function(e){return h.a.post("/page/init").then(function(t){e(n({isFirstVisit:!1,pageCount:t.data.pageCount}))})}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var f=a(0),p=a.n(f),d=a(33),g=a(82),m=a.n(g),b=a(66),v=a(67),h=a.n(v),y=a(15),P=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),C=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n"],["\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n"]),k=b.a.nav(C),N=function(e){function t(){var e,a,n,r;i(this,t);for(var s=arguments.length,l=Array(s),u=0;u<s;u++)l[u]=arguments[u];return a=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.onPageChange=function(e){var t=e.selected;n.props.history.push("/page/"+(t+1))},r=a,o(n,r)}return s(t,e),P(t,[{key:"componentDidMount",value:function(){this.props.isFirstVisit&&this.props.setPagination()}},{key:"render",value:function(){var e=this.props,t=e.pageCount,a=e.index;return p.a.createElement(k,{className:"row justify-content-center pt-3 pb-3","aria-label":"Page navigation"},p.a.createElement(m.a,{pageCount:t,forcePage:a-1,onPageChange:this.onPageChange,pageRangeDisplayed:2,marginPagesDisplayed:1,containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",activeClassName:"active",disabledClassName:"disabled",previousClassName:"page-item",nextClassName:"page-item",previousLabel:p.a.createElement("span",null,"«"),nextLabel:p.a.createElement("span",null,"»"),previousLinkClassName:"page-link",nextLinkClassName:"page-link",breakLabel:p.a.createElement("span",{className:"page-link"},"..."),breakClassName:"page-item disabled"}))}}]),t}(p.a.PureComponent),x=function(e){return{isFirstVisit:e.pagination.isFirstVisit,pageCount:e.pagination.pageCount}},E={setPagination:r},j=Object(d.b)(x,E)(N),O=a(35),_=a.n(O),w=a(73),L=a(36),S=a(14),R=a(64),D=a(74),A=function(e){var t=e.id,a=e.title,n=e.author,r=e.text,i=e.created_at,o="/post/"+t,s=r.slice(0,136)+" ...";return p.a.createElement(R.a,{className:"col-md-6"},p.a.createElement("section",{className:"card mb-4"},p.a.createElement("div",{className:"card-header"},p.a.createElement("h3",{className:"card-title"},p.a.createElement(S.b,{to:o},a)),p.a.createElement("span",{className:"lead"},n)),p.a.createElement("div",{className:"card-body"},p.a.createElement("p",null,s),p.a.createElement("time",{className:"text-muted",dateTime:i},Object(D.a)(i)))))},M=A,T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},I=function(e){var t=e.items;return p.a.createElement("div",{className:"row",role:"group"},t.map(function(e){return p.a.createElement(M,T({key:e.id},e))}))},V=I,B=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),z=_()({loader:function(){return a.e(1).then(a.bind(null,112))},loading:L.a}),F=function(e){function t(){var e,a,n,r;l(this,t);for(var i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s];return a=n=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.state={isPageExist:!0,currentPage:[]},n.findPage=function(e){var t=n.props.posts;e in t?n.setState({currentPage:t[e],isPageExist:!0}):n.props.fetchPostsByPageIndex(e).then(function(e){null!==e?n.setState({currentPage:e,isPageExist:!0}):n.setState({isPageExist:!1})})},r=a,u(n,r)}return c(t,e),B(t,[{key:"componentDidMount",value:function(){this.findPage(this.props.index)}},{key:"componentWillReceiveProps",value:function(e){this.props.index!==e.index&&this.findPage(e.index)}},{key:"render",value:function(){var e=this.state,t=e.isPageExist,a=e.currentPage;return t?p.a.createElement(V,{items:a}):p.a.createElement(z,null)}}]),t}(p.a.PureComponent),$=function(e){return{posts:e.posts}},q={fetchPostsByPageIndex:w.b},K=Object(d.b)($,q)(F),W=function(e){var t=e.match,a=e.history,n=parseInt(t.params.index),r=!isNaN(n)&&n>0?n:1;return p.a.createElement("div",{className:"container"},p.a.createElement(j,{index:r,history:a}),p.a.createElement(K,{index:r,history:a}))};t.default=W},82:function(e,t,a){"use strict";var n=a(83),r=function(e){return e&&e.__esModule?e:{default:e}}(n);e.exports=r.default},83:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(0),c=n(u),f=a(2),p=n(f),d=a(84),g=n(d),m=a(85),b=n(m),v=a(87),h=n(v),y=a(88),P=n(y),C=function(e){function t(e){i(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handlePreviousPage=function(e){var t=a.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&a.handlePageSelected(t-1,e)},a.handleNextPage=function(e){var t=a.state.selected,n=a.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<n-1&&a.handlePageSelected(t+1,e)},a.handlePageSelected=function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))},a.callCallback=function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})},a.pagination=function(){var e={},t=a.props,n=t.pageRangeDisplayed,r=t.pageCount,i=t.marginPagesDisplayed,o=t.breakLabel,s=t.breakClassName,l=a.state.selected;if(r<=n)for(var u=0;u<r;u++)e["key"+u]=a.getPageElement(u);else{var f=n/2,p=n-f;l>r-n/2?(p=r-l,f=n-p):l<n/2&&(f=l,p=n-f);var d=void 0,g=void 0,m=void 0,b=function(e){return a.getPageElement(e)};for(d=0;d<r;d++)if((g=d+1)<=i)e["key"+d]=b(d);else if(g>r-i)e["key"+d]=b(d);else if(d>=l-f&&d<=l+p)e["key"+d]=b(d);else{var v=Object.keys(e),h=v[v.length-1],y=e[h];o&&y!==m&&(m=c.default.createElement(P.default,{breakLabel:o,breakClassName:s}),e["key"+d]=m)}}return e},a.state={selected:e.initialPage?e.initialPage:e.forcePage?e.forcePage:0},a}return s(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback;void 0===t||a||this.callCallback(t)}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:e.forcePage})}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<n)return a(e+1)}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,n=a.pageClassName,r=a.pageLinkClassName,i=a.activeClassName,o=a.extraAriaContext;return c.default.createElement(h.default,{onClick:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:n,pageLinkClassName:r,activeClassName:i,extraAriaContext:o,href:this.hrefBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.previousClassName,n=e.nextClassName,i=e.pageCount,o=e.containerClassName,s=e.previousLinkClassName,l=e.previousLabel,u=e.nextLinkClassName,f=e.nextLabel,p=this.state.selected,d=t,m=(0,g.default)(a,r({},d,0===p)),v=(0,g.default)(n,r({},d,p===i-1));return c.default.createElement("ul",{className:o},c.default.createElement("li",{className:m},c.default.createElement("a",{onClick:this.handlePreviousPage,className:s,href:this.hrefBuilder(p-1),tabIndex:"0",onKeyPress:this.handlePreviousPage},l)),(0,b.default)(this.pagination()),c.default.createElement("li",{className:v},c.default.createElement("a",{onClick:this.handleNextPage,className:u,href:this.hrefBuilder(p+1),tabIndex:"0",onKeyPress:this.handleNextPage},f)))}}]),t}(u.Component);C.propTypes={pageCount:p.default.number.isRequired,pageRangeDisplayed:p.default.number.isRequired,marginPagesDisplayed:p.default.number.isRequired,previousLabel:p.default.node,nextLabel:p.default.node,breakLabel:p.default.node,hrefBuilder:p.default.func,onPageChange:p.default.func,initialPage:p.default.number,forcePage:p.default.number,disableInitialCallback:p.default.bool,containerClassName:p.default.string,pageClassName:p.default.string,pageLinkClassName:p.default.string,activeClassName:p.default.string,previousClassName:p.default.string,nextClassName:p.default.string,previousLinkClassName:p.default.string,nextLinkClassName:p.default.string,disabledClassName:p.default.string,breakClassName:p.default.string},C.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},t.default=C},84:function(e,t,a){var n,r;!function(){"use strict";function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===r)for(var o in n)i.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}var i={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=a:(n=[],void 0!==(r=function(){return a}.apply(t,n))&&(e.exports=r))}()},85:function(e,t,a){"use strict";function n(e){var t=e&&(C&&e[C]||e[k]);if("function"==typeof t)return t}function r(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}function i(e,t){return e&&"object"==typeof e&&null!=e.key?r(e.key):t.toString(36)}function o(e,t,a,r){var s=typeof e;if("undefined"!==s&&"boolean"!==s||(e=null),null===e||"string"===s||"number"===s||"object"===s&&e.$$typeof===m)return a(r,e,""===t?y+i(e,0):t),1;var l,u,c=0,f=""===t?y:t+P;if(Array.isArray(e))for(var p=0;p<e.length;p++)l=e[p],u=f+i(l,p),c+=o(l,u,a,r);else{var d=n(e);if(d)for(var g,b=d.call(e),h=0;!(g=b.next()).done;)l=g.value,u=f+i(l,h++),c+=o(l,u,a,r);else if("object"===s){var C="",k=""+e;v(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===k?"object with keys {"+Object.keys(e).join(", ")+"}":k,C)}}return c}function s(e,t,a){return null==e?0:o(e,"",t,a)}function l(e){return(""+e).replace(N,"$&/")}function u(e,t){return g.cloneElement(e,{key:t},void 0!==e.props?e.props.children:void 0)}function c(e,t,a,n){this.result=e,this.keyPrefix=t,this.func=a,this.context=n,this.count=0}function f(e,t,a){var n=e.result,r=e.keyPrefix,i=e.func,o=e.context,s=i.call(o,t,e.count++);Array.isArray(s)?p(s,n,a,b.thatReturnsArgument):null!=s&&(g.isValidElement(s)&&(s=u(s,r+(!s.key||t&&t.key===s.key?"":l(s.key)+"/")+a)),n.push(s))}function p(e,t,a,n,r){var i="";null!=a&&(i=l(a)+"/");var o=c.getPooled(t,i,n,r);s(e,f,o),c.release(o)}function d(e){if("object"!=typeof e||!e||Array.isArray(e))return h(!1,"React.addons.createFragment only accepts a single object. Got: %s",e),e;if(g.isValidElement(e))return h(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;v(1!==e.nodeType,"React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");var t=[];for(var a in e)p(e[a],t,a,b.thatReturnsArgument);return t}var g=a(0),m="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,b=a(5),v=a(37),h=a(86),y=".",P=":",C="function"==typeof Symbol&&Symbol.iterator,k="@@iterator",N=/\/+/g,x=E,E=function(e){var t=this;if(t.instancePool.length){var a=t.instancePool.pop();return t.call(a,e),a}return new t(e)},j=function(e){var t=this;v(e instanceof t,"Trying to release an instance into a pool of a different type."),e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},O=function(e,t,a,n){var r=this;if(r.instancePool.length){var i=r.instancePool.pop();return r.call(i,e,t,a,n),i}return new r(e,t,a,n)};c.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},function(e,t){var a=e;a.instancePool=[],a.getPooled=t||x,a.poolSize||(a.poolSize=10),a.release=j}(c,O);e.exports=d},86:function(e,t,a){"use strict";var n=a(5),r=n;e.exports=r},87:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=function(e){return e&&e.__esModule?e:{default:e}}(n),i=function(e){var t=e.pageClassName,a=e.pageLinkClassName,n=e.onClick,i=e.href,o="Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),s=null;return e.selected&&(s="page",o="Page "+e.page+" is your current page",t=void 0!==t?t+" "+e.activeClassName:e.activeClassName),r.default.createElement("li",{className:t},r.default.createElement("a",{onClick:n,className:a,href:i,tabIndex:"0","aria-label":o,"aria-current":s,onKeyPress:n},e.page))};t.default=i},88:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=function(e){return e&&e.__esModule?e:{default:e}}(n),i=function(e){var t=e.breakLabel,a=e.breakClassName||"break";return r.default.createElement("li",{className:a},t)};t.default=i}});