(window.webpackJsonpcodex_name_=window.webpackJsonpcodex_name_||[]).push([["phpdoc.entity"],{"./node_modules/lodash/isNumber.js":function(e,t,o){var n=o("./node_modules/lodash/_baseGetTag.js"),r=o("./node_modules/lodash/isObjectLike.js"),i="[object Number]";e.exports=function(e){return"number"==typeof e||r(e)&&n(e)==i}},"./src/phpdoc/components/PhpdocCode.tsx":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=o("codex_core"),i=u(o("./node_modules/react/index.js")),s=o("./node_modules/mobx-react/index.module.js"),l=u(o("./src/phpdoc/components/PhpdocComponent.tsx")),c=u(o("./node_modules/classnames/index.js"));function u(e){return e&&e.__esModule?e:{default:e}}var p=function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),a=function(e,t,o,r){var i,s=arguments.length,l=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===("undefined"==typeof Reflect?"undefined":n(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(l=(s<3?i(l):s>3?i(t,o,l):i(t,o))||l);return s>3&&l&&Object.defineProperty(t,o,l),l},d=(o("./node_modules/debug/src/browser.js")("components:PhpdocCode"),function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return p(o,t),o.prototype.render=function(){var e=this;return this.renderWithLoader(function(){return i.default.createElement(r.CodeHighlight,{className:(0,c.default)("phpdoc-code",e.props.className),style:e.props.style,language:"php",withLineNumbers:!0,code:e.file.source})})},o.displayName="PhpdocCode",o.defaultProps={},o=a([(0,r.Hot)(e),s.observer],o)}(l.default));t.default=d}).call(this,o("./node_modules/webpack/buildin/module.js")(e))},"./src/phpdoc/components/PhpdocComponent.tsx":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=d(o("./node_modules/react/index.js")),i=o("./src/mobx.js"),s=o("codex_core"),l=o("./src/phpdoc/logic/index.ts"),c=d(o("./node_modules/antd/lib/spin/index.js"));o("./node_modules/antd/lib/spin/style/index.js");var u=d(o("./node_modules/lodash/isNumber.js")),p=o("./node_modules/lodash-es/lodash.js"),a=d(o("./node_modules/classnames/index.js"));function d(e){return e&&e.__esModule?e:{default:e}}var f=function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),y=function(){return(y=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},m=function(e,t,o,r){var i,s=arguments.length,l=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===("undefined"==typeof Reflect?"undefined":n(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(l=(s<3?i(l):s>3?i(t,o,l):i(t,o))||l);return s>3&&l&&Object.defineProperty(t,o,l),l},h=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":n(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},b=function(e,t,o,n){return new(o||(o=Promise))(function(r,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function l(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){e.done?r(e.value):new o(function(t){t(e.value)}).then(s,l)}c((n=n.apply(e,t||[])).next())})},_=function(e,t){var o,n,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],n=0}finally{o=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},g=(o("./node_modules/debug/src/browser.js")("phpdoc:components:PhpdocComponent"),function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.file=null,t.isLoading=!0,t.state={query:null},t}var o,n,d,g,v;return f(t,e),Object.defineProperty(t.prototype,"manifest",{get:function(){return this.store.manifest},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fileJS",{get:function(){return(0,i.toJS)(this.file)},enumerable:!0,configurable:!0}),t.prototype.setLoading=function(e){this.isLoading=e},t.prototype.setFile=function(e){this.file=e,this.onFileChange()},t.getDerivedStateFromProps=function(e,t){var o=t||{},n=e.query;return!n&&e.file&&(n=l.Query.from(e.file.entity.full_name)),t&&t.query&&t.query===n&&n||(o.query=(0,p.isString)(n)?l.Query.from(n):l.Query.fromHash()),o},t.prototype.onFileChange=function(){},t.prototype.onQueryChange=function(){},t.prototype.componentDidMount=function(){this._updateFile()},t.prototype.componentDidUpdate=function(e,t,o){this.props.query===e.query&&this.props.file===e.file||this._updateFile(),this.props.query&&e.query&&this.props.query!==e.query&&this.onQueryChange()},t.prototype.className=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return a.default.apply(void 0,[this.props.className,{boxed:this.props.boxed}].concat(e))},t.prototype._updateFile=function(){return b(this,void 0,void 0,function(){var e,t;return _(this,function(o){switch(o.label){case 0:if(!this.props.file&&!this.state.query)return[2,!1];if(this.setLoading(!0),this.props.file)return this.setFile(this.props.file),this.setLoading(!1),[2,(0,s.resolve)()];if(this.manifest.hasFullName(this.state.query.entityName)&&(e=this.manifest.getFileByFullName(this.state.query.entityName)),!e||!e.hash)throw new Error("Cannot update file, query entity does not exist in manifest files: "+this.state.query.entityName);return[4,this.store.fetchFile(e.hash)];case 1:return t=o.sent(),this.setFile(t),this.setLoading(!1),[2,(0,s.resolve)()]}})})},t.prototype.renderWithLoader=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var o=e[e.length-1];if(!(e.length>1&&e[0]||this.isLoading))return(0,p.isFunction)(o)?o(this.props):o;var n=this.props.loader||{};return n.delay=(0,u.default)(n.delay)?n.delay:0,r.default.createElement(c.default,y({},n))},m([(0,s.inject)("PhpdocStore"),h("design:type","function"==typeof(o=void 0!==l.PhpdocStore&&l.PhpdocStore)?o:Object)],t.prototype,"store",void 0),m([i.observable,h("design:type","function"==typeof(n=void 0!==l.File&&l.File)?n:Object)],t.prototype,"file",void 0),m([i.observable,h("design:type",Boolean)],t.prototype,"isLoading",void 0),m([i.computed,h("design:type","function"==typeof(d=void 0!==l.Manifest&&l.Manifest)?d:Object),h("design:paramtypes",[])],t.prototype,"manifest",null),m([i.computed,h("design:type","function"==typeof(g=void 0!==l.File&&l.File)?g:Object),h("design:paramtypes",[])],t.prototype,"fileJS",null),m([i.action,h("design:type",Function),h("design:paramtypes",[Boolean]),h("design:returntype",void 0)],t.prototype,"setLoading",null),m([i.action,h("design:type",Function),h("design:paramtypes",["function"==typeof(v=void 0!==l.File&&l.File)?v:Object]),h("design:returntype",void 0)],t.prototype,"setFile",null),m([i.action,h("design:type",Function),h("design:paramtypes",[]),h("design:returntype",Promise)],t.prototype,"_updateFile",null),t}(r.default.Component));t.default=g},"./src/phpdoc/components/PhpdocEntity.scss":function(e,t,o){},"./src/phpdoc/components/PhpdocEntity.tsx":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=f(o("./node_modules/react/index.js")),i=o("codex_core"),s=o("./node_modules/typestyle/lib.es2015/index.js"),l=o("./src/mobx.js"),c=f(o("./src/phpdoc/logic/Type.ts")),u=f(o("./src/phpdoc/components/PhpdocType.tsx")),p=f(o("./src/phpdoc/components/PhpdocComponent.tsx")),a=o("./node_modules/mobx-react/index.module.js"),d=o("./node_modules/lodash-es/lodash.js");function f(e){return e&&e.__esModule?e:{default:e}}o("./src/phpdoc/components/PhpdocEntity.scss");var y=function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),m=function(e,t,o,r){var i,s=arguments.length,l=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===("undefined"==typeof Reflect?"undefined":n(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(l=(s<3?i(l):s>3?i(t,o,l):i(t,o))||l);return s>3&&l&&Object.defineProperty(t,o,l),l},h=(o("./node_modules/debug/src/browser.js")("components:PhpdocHeader"),function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return y(o,t),o.prototype.render=function(){var e=this.file,t=this.props,o=t.size,n=t.style,i=t.className,p=t.titleStyle;return(0,d.isString)(o),this.renderWithLoader(function(){return r.default.createElement("header",{style:n,className:(0,s.classes)("phpdoc-entity",i)},r.default.createElement("h3",{style:p,className:"header-title"},r.default.createElement("i",{className:"mr-xs phpdoc-type-"+e.type}),r.default.createElement("span",{className:"phpdoc-type-"+e.type},c.default.stripStartSlash(e.entity.full_name)),e.entity.extends?r.default.createElement("small",{className:"pl-xs fs-13"},"extends"):null,e.entity.extends?r.default.createElement(u.default,{className:"pl-xs",type:e.entity.extends}):null,e.entity.implements&&e.entity.implements.length>0?r.default.createElement("small",{className:"pl-xs fs-13"},"implements"):null,e.entity.implements&&e.entity.implements.length>0?r.default.createElement(u.default,{className:"pl-xs",type:(0,l.toJS)(e.entity.implements)}):null))})},o.displayName="PhpdocEntity",o.defaultProps={},o=m([(0,i.Hot)(e),a.observer],o)}(p.default));t.default=h}).call(this,o("./node_modules/webpack/buildin/module.js")(e))}}]);