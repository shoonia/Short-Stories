webpackJsonp([3],{112:function(e,t,a){"use strict";function n(e){return{type:y.a,payload:e}}function r(){return function(e){return b.a.post("/page/init").then(function(t){e(n({isFirstVisit:!1,pageCount:t.data.pageCount}))})}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var p=a(0),f=a.n(p),d=a(32),g=a(82),m=a.n(g),h=a(59),b=a.n(h),y=a(38),v=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),P=function(e){function t(){var e,a,n,r;s(this,t);for(var o=arguments.length,l=Array(o),u=0;u<o;u++)l[u]=arguments[u];return a=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.onPageChange=function(e){var t=e.selected;n.props.history.push("/page/"+(t+1))},r=a,i(n,r)}return o(t,e),v(t,[{key:"componentDidMount",value:function(){this.props.isFirstVisit&&this.props.setPagination()}},{key:"render",value:function(){var e=this.props,t=e.pageCount,a=e.index;return f.a.createElement("nav",{className:"row justify-content-center pt-3 pb-3","aria-label":"Page navigation"},f.a.createElement(m.a,{pageCount:t,forcePage:a-1,onPageChange:this.onPageChange,pageRangeDisplayed:2,marginPagesDisplayed:1,containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",activeClassName:"active",disabledClassName:"disabled",previousClassName:"page-item",nextClassName:"page-item",previousLabel:f.a.createElement("span",null,"«"),nextLabel:f.a.createElement("span",null,"»"),previousLinkClassName:"page-link",nextLinkClassName:"page-link",breakLabel:f.a.createElement("span",{className:"page-link"},"..."),breakClassName:"page-item disabled"}))}}]),t}(f.a.PureComponent),C=function(e){return{isFirstVisit:e.pagination.isFirstVisit,pageCount:e.pagination.pageCount}},k={setPagination:r},N=Object(d.b)(C,k)(P),x=a(5),E=a.n(x),j=a(65),O=a(6),_=a(35),w=a(44),L=a(66),R=function(e){var t=e.id,a=e.title,n=e.author,r=e.text,s=e.created_at,i="/post/"+t,o=r.slice(0,136)+" ...";return f.a.createElement(w.a,{className:"col-md-6"},f.a.createElement("section",{className:"card mb-4"},f.a.createElement("div",{className:"card-header"},f.a.createElement("h3",{className:"card-title"},f.a.createElement(_.b,{to:i},a)),f.a.createElement("span",{className:"lead"},n)),f.a.createElement("div",{className:"card-body"},f.a.createElement("p",null,o),f.a.createElement("time",{className:"text-muted",dateTime:s},Object(L.a)(s)))))},D=R,S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},A=function(e){var t=e.items;return f.a.createElement("div",{className:"row",role:"group"},t.map(function(e){return f.a.createElement(D,S({key:e.id},e))}))},M=A,T=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),B=E()({loader:function(){return a.e(2).then(a.bind(null,113))},loading:O.a}),I=function(e){function t(){var e,a,n,r;l(this,t);for(var s=arguments.length,i=Array(s),o=0;o<s;o++)i[o]=arguments[o];return a=n=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.state={isPageExist:!0,currentPage:[]},n.findPage=function(e){var t=n.props.posts;e in t?n.setState({currentPage:t[e],isPageExist:!0}):n.props.fetchPostsByPageIndex(e).then(function(e){null!==e?n.setState({currentPage:e,isPageExist:!0}):n.setState({isPageExist:!1})})},r=a,u(n,r)}return c(t,e),T(t,[{key:"componentDidMount",value:function(){this.findPage(this.props.index)}},{key:"componentWillReceiveProps",value:function(e){this.props.index!==e.index&&this.findPage(e.index)}},{key:"render",value:function(){var e=this.state,t=e.isPageExist,a=e.currentPage;return t?f.a.createElement(M,{items:a}):f.a.createElement(B,null)}}]),t}(f.a.PureComponent),V=function(e){return{posts:e.posts}},F={fetchPostsByPageIndex:j.b},$=Object(d.b)(V,F)(I),q=function(e){var t=e.match,a=e.history,n=parseInt(t.params.index),r=!isNaN(n)&&n>0?n:1;return f.a.createElement("div",{className:"container"},f.a.createElement(N,{index:r,history:a}),f.a.createElement($,{index:r,history:a}))};t.default=q},82:function(e,t,a){"use strict";var n=a(83),r=function(e){return e&&e.__esModule?e:{default:e}}(n);e.exports=r.default},83:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(0),c=n(u),p=a(4),f=n(p),d=a(84),g=n(d),m=a(85),h=n(m),b=a(87),y=n(b),v=a(88),P=n(v),C=function(e){function t(e){s(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handlePreviousPage=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,a.state.selected>0&&a.handlePageSelected(a.state.selected-1,e)},a.handleNextPage=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,a.state.selected<a.props.pageCount-1&&a.handlePageSelected(a.state.selected+1,e)},a.handlePageSelected=function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))},a.callCallback=function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})},a.pagination=function(){var e={};if(a.props.pageCount<=a.props.pageRangeDisplayed)for(var t=0;t<a.props.pageCount;t++)e["key"+t]=a.getPageElement(t);else{var n=a.props.pageRangeDisplayed/2,r=a.props.pageRangeDisplayed-n;a.state.selected>a.props.pageCount-a.props.pageRangeDisplayed/2?(r=a.props.pageCount-a.state.selected,n=a.props.pageRangeDisplayed-r):a.state.selected<a.props.pageRangeDisplayed/2&&(n=a.state.selected,r=a.props.pageRangeDisplayed-n);var s=void 0,i=void 0,o=void 0,l=function(e){return a.getPageElement(e)};for(s=0;s<a.props.pageCount;s++)if((i=s+1)<=a.props.marginPagesDisplayed)e["key"+s]=l(s);else if(i>a.props.pageCount-a.props.marginPagesDisplayed)e["key"+s]=l(s);else if(s>=a.state.selected-n&&s<=a.state.selected+r)e["key"+s]=l(s);else{var u=Object.keys(e),p=u[u.length-1],f=e[p];a.props.breakLabel&&f!==o&&(o=c.default.createElement(P.default,{breakLabel:a.props.breakLabel,breakClassName:a.props.breakClassName}),e["key"+s]=o)}}return e},a.state={selected:e.initialPage?e.initialPage:e.forcePage?e.forcePage:0},a}return o(t,e),l(t,[{key:"componentDidMount",value:function(){void 0===this.props.initialPage||this.props.disableInitialCallback||this.callCallback(this.props.initialPage)}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:e.forcePage})}},{key:"hrefBuilder",value:function(e){if(this.props.hrefBuilder&&e!==this.state.selected&&e>=0&&e<this.props.pageCount)return this.props.hrefBuilder(e+1)}},{key:"getPageElement",value:function(e){return c.default.createElement(y.default,{onClick:this.handlePageSelected.bind(null,e),selected:this.state.selected===e,pageClassName:this.props.pageClassName,pageLinkClassName:this.props.pageLinkClassName,activeClassName:this.props.activeClassName,extraAriaContext:this.props.extraAriaContext,href:this.hrefBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props.disabledClassName,t=(0,g.default)(this.props.previousClassName,r({},e,0===this.state.selected)),a=(0,g.default)(this.props.nextClassName,r({},e,this.state.selected===this.props.pageCount-1));return c.default.createElement("ul",{className:this.props.containerClassName},c.default.createElement("li",{className:t},c.default.createElement("a",{onClick:this.handlePreviousPage,className:this.props.previousLinkClassName,href:this.hrefBuilder(this.state.selected-1),tabIndex:"0",onKeyPress:this.handlePreviousPage},this.props.previousLabel)),(0,h.default)(this.pagination()),c.default.createElement("li",{className:a},c.default.createElement("a",{onClick:this.handleNextPage,className:this.props.nextLinkClassName,href:this.hrefBuilder(this.state.selected+1),tabIndex:"0",onKeyPress:this.handleNextPage},this.props.nextLabel)))}}]),t}(u.Component);C.propTypes={pageCount:f.default.number.isRequired,pageRangeDisplayed:f.default.number.isRequired,marginPagesDisplayed:f.default.number.isRequired,previousLabel:f.default.node,nextLabel:f.default.node,breakLabel:f.default.node,hrefBuilder:f.default.func,onPageChange:f.default.func,initialPage:f.default.number,forcePage:f.default.number,disableInitialCallback:f.default.bool,containerClassName:f.default.string,pageClassName:f.default.string,pageLinkClassName:f.default.string,activeClassName:f.default.string,previousClassName:f.default.string,nextClassName:f.default.string,previousLinkClassName:f.default.string,nextLinkClassName:f.default.string,disabledClassName:f.default.string,breakClassName:f.default.string},C.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},t.default=C},84:function(e,t,a){var n,r;!function(){"use strict";function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===r)for(var i in n)s.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}var s={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=a:(n=[],void 0!==(r=function(){return a}.apply(t,n))&&(e.exports=r))}()},85:function(e,t,a){"use strict";function n(e){var t=e&&(C&&e[C]||e[k]);if("function"==typeof t)return t}function r(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}function s(e,t){return e&&"object"==typeof e&&null!=e.key?r(e.key):t.toString(36)}function i(e,t,a,r){var o=typeof e;if("undefined"!==o&&"boolean"!==o||(e=null),null===e||"string"===o||"number"===o||"object"===o&&e.$$typeof===m)return a(r,e,""===t?v+s(e,0):t),1;var l,u,c=0,p=""===t?v:t+P;if(Array.isArray(e))for(var f=0;f<e.length;f++)l=e[f],u=p+s(l,f),c+=i(l,u,a,r);else{var d=n(e);if(d)for(var g,h=d.call(e),y=0;!(g=h.next()).done;)l=g.value,u=p+s(l,y++),c+=i(l,u,a,r);else if("object"===o){var C="",k=""+e;b(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===k?"object with keys {"+Object.keys(e).join(", ")+"}":k,C)}}return c}function o(e,t,a){return null==e?0:i(e,"",t,a)}function l(e){return(""+e).replace(N,"$&/")}function u(e,t){return g.cloneElement(e,{key:t},void 0!==e.props?e.props.children:void 0)}function c(e,t,a,n){this.result=e,this.keyPrefix=t,this.func=a,this.context=n,this.count=0}function p(e,t,a){var n=e.result,r=e.keyPrefix,s=e.func,i=e.context,o=s.call(i,t,e.count++);Array.isArray(o)?f(o,n,a,h.thatReturnsArgument):null!=o&&(g.isValidElement(o)&&(o=u(o,r+(!o.key||t&&t.key===o.key?"":l(o.key)+"/")+a)),n.push(o))}function f(e,t,a,n,r){var s="";null!=a&&(s=l(a)+"/");var i=c.getPooled(t,s,n,r);o(e,p,i),c.release(i)}function d(e){if("object"!=typeof e||!e||Array.isArray(e))return y(!1,"React.addons.createFragment only accepts a single object. Got: %s",e),e;if(g.isValidElement(e))return y(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;b(1!==e.nodeType,"React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");var t=[];for(var a in e)f(e[a],t,a,h.thatReturnsArgument);return t}var g=a(0),m="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,h=a(1),b=a(7),y=a(86),v=".",P=":",C="function"==typeof Symbol&&Symbol.iterator,k="@@iterator",N=/\/+/g,x=E,E=function(e){var t=this;if(t.instancePool.length){var a=t.instancePool.pop();return t.call(a,e),a}return new t(e)},j=function(e){var t=this;b(e instanceof t,"Trying to release an instance into a pool of a different type."),e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},O=function(e,t,a,n){var r=this;if(r.instancePool.length){var s=r.instancePool.pop();return r.call(s,e,t,a,n),s}return new r(e,t,a,n)};c.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},function(e,t){var a=e;a.instancePool=[],a.getPooled=t||x,a.poolSize||(a.poolSize=10),a.release=j}(c,O);e.exports=d},86:function(e,t,a){"use strict";var n=a(1),r=n;e.exports=r},87:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=function(e){return e&&e.__esModule?e:{default:e}}(n),s=function(e){var t=e.pageClassName,a=e.pageLinkClassName,n=e.onClick,s=e.href,i="Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),o=null;return e.selected&&(o="page",i="Page "+e.page+" is your current page",t=void 0!==t?t+" "+e.activeClassName:e.activeClassName),r.default.createElement("li",{className:t},r.default.createElement("a",{onClick:n,className:a,href:s,tabIndex:"0","aria-label":i,"aria-current":o,onKeyPress:n},e.page))};t.default=s},88:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=function(e){return e&&e.__esModule?e:{default:e}}(n),s=function(e){var t=e.breakLabel,a=e.breakClassName||"break";return r.default.createElement("li",{className:a},t)};t.default=s}});