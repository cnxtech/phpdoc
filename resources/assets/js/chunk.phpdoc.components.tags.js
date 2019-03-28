(window.webpackJsonp=window.webpackJsonp||[]).push([["phpdoc.components.tags"],{"./src/phpdoc/components/tags/PhpdocTags.tsx":function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"PhpdocTags",function(){return d});var n=a("../node_modules/react/index.js"),s=a.n(n),r=a("../node_modules/mobx-react/index.module.js"),o=a("@codex/core"),c=a("../node_modules/typestyle/lib.es2015/index.js"),l=(a("./src/phpdoc/components/tags/tags.scss"),a("./src/phpdoc/components/type/index.tsx")),p=a("../node_modules/react-hot-loader/index.js"),i=function(){var e=function(t,a){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(t,a)};return function(t,a){function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}(),u=function(e,t,a,n){var s,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(o=(r<3?s(o):r>3?s(t,a,o):s(t,a))||o);return r>3&&o&&Object.defineProperty(t,a,o),o},m=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},d=(a("./node_modules/debug/src/browser.js")("components:PhpdocTags"),function(t){function a(){var e=null!==t&&t.apply(this,arguments)||this;return e.classNames=function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return c.classes.apply(void 0,t.filter(Boolean).map(function(t){return Object(o.strEnsureLeft)(t,e.props.prefixCls+"-")}))},e}var d;return i(a,t),Object.defineProperty(a.prototype,"filteredTags",{get:function(){var e=this.props,t=e.onlyTags,a=e.withoutTags;return t&&t.length>0?this.props.tags.whereIn("name",t):a&&a.length>0?this.props.tags.whereNotIn("name",a):this.props.tags},enumerable:!0,configurable:!0}),a.prototype.render=function(){var e=this,t=this.props,a=t.style,n=t.className,r=t.prefixCls;return s.a.createElement("div",{style:a,className:Object(c.classes)(r,n)},this.filteredTags.map(function(t,a){return e.renderTag(t,a)}))},a.prototype.renderTag=function(e,t){void 0===t&&(t=null);var a=this.classNames,n=this.props,r=n.size,l=n.color;return s.a.createElement("div",{className:a("tag"),key:t||e.name+e.line,style:{fontSize:r,color:Object(o.getColor)(l)}},s.a.createElement("span",{className:a("tag-left")},s.a.createElement("span",{className:Object(c.classes)("tag-at")},"@"),s.a.createElement("span",{className:Object(c.classes)("tag-name")},e.name)),s.a.createElement("span",{className:a("tag-right")},this.renderTagContent(e)))},a.prototype.renderTagContent=function(e){this.classNames;var t=this.props,a=(t.size,t.color,e.variable),r=e.refers,p=e.link,i=(e.line,e.description),u=(e.type,e.name),m=e.types;a=s.a.createElement("span",{className:Object(c.classes)("tag-variable")},a);try{i=this.htmlParser.parse(i)}catch(d){}switch(i=s.a.createElement("span",{className:Object(c.classes)("tag-description")},i),u){case"example":return s.a.createElement(o.CodeHighlight,{language:"php",withLineNumbers:!0,code:e.description});case"see":if(p)return s.a.createElement(n.Fragment,null,s.a.createElement(l.a,{type:p}),i);case"return":case"throws":return s.a.createElement(n.Fragment,null,s.a.createElement(l.a,{type:m}),i);case"param":return s.a.createElement(n.Fragment,null,s.a.createElement(l.a,{type:m}),a,i)}return s.a.createElement(n.Fragment,null,i,p?s.a.createElement("a",{className:Object(c.classes)("tag-link"),href:p,target:"_blank"},p):null,r?s.a.createElement("span",{className:Object(c.classes)("tag-refers")},r):null)},a.displayName="PhpdocTags",a.defaultProps={size:11,prefixCls:"phpdoc-tags"},u([Object(o.lazyInject)("htmlparser"),m("design:type","function"===typeof(d="undefined"!==typeof o.HtmlParser&&o.HtmlParser)?d:Object)],a.prototype,"htmlParser",void 0),a=u([Object(p.hot)(e),r.observer],a)}(s.a.Component))}.call(this,a("../node_modules/webpack/buildin/harmony-module.js")(e))},"./src/phpdoc/components/tags/tags.scss":function(e,t,a){}}]);