(window.webpackJsonp=window.webpackJsonp||[]).push([["phpdoc.components.docblock"],{"./src/phpdoc/components/docblock/PhpdocDocblock.tsx":function(e,o,t){"use strict";t.r(o),function(e){t.d(o,"PhpdocDocblock",function(){return y});var n=t("../node_modules/react/index.js"),c=t.n(n),r=t("../node_modules/mobx-react/index.module.js"),s=t("../node_modules/typestyle/lib.es2015/index.js"),l=t("./node_modules/lodash/isString.js"),i=t.n(l),p=t("@codex/core"),a=(t("./src/phpdoc/components/docblock/docblock.scss"),t("./src/phpdoc/components/tags/index.tsx")),d=t("../node_modules/react-hot-loader/index.js"),u=function(){var e=function(o,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var t in o)o.hasOwnProperty(t)&&(e[t]=o[t])})(o,t)};return function(o,t){function n(){this.constructor=o}e(o,t),o.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),f=function(){return(f=Object.assign||function(e){for(var o,t=1,n=arguments.length;t<n;t++)for(var c in o=arguments[t])Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c]);return e}).apply(this,arguments)},b=function(e,o,t,n){var c,r=arguments.length,s=r<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,t):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,o,t,n);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(s=(r<3?c(s):r>3?c(o,t,s):c(o,t))||s);return r>3&&s&&Object.defineProperty(o,t,s),s},h=function(e,o){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,o)},y=(t("./node_modules/debug/src/browser.js")("components:PhpdocDocblock"),function(o){function t(){return null!==o&&o.apply(this,arguments)||this}var n;return u(t,o),Object.defineProperty(t.prototype,"docblock",{get:function(){return this.props.docblock},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tags",{get:function(){return this.docblock.tags},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasLongDescription",{get:function(){return i()(this.docblock.long_description)&&this.docblock.long_description.length>0},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e=this.props,o=e.boxed,t=e.size,n=e.color,r=e.style,l=this.props,i=l.tagColor,d=l.tagSize,u=l.withoutTags,b=l.onlyTags,h=this.docblock;if(!h)return null;var y=h.description,g=(h.line,h.tags,h.long_description);try{y=this.htmlParser.parse(y),this.hasLongDescription&&(g=this.htmlParser.parse(g))}catch(m){}return c.a.createElement("div",{style:f({fontSize:t,color:Object(p.getColor)(n)},r),className:s.classes.apply(void 0,[o?"boxed":null].concat(["phpdoc-docblock",this.props.className]))},c.a.createElement("div",{style:{fontSize:t,color:Object(p.getColor)(n)},className:Object(s.classes)("phpdoc-docblock-description")},y,this.hasLongDescription?g:null),c.a.createElement(a.a,{size:d,color:i,tags:this.tags,withoutTags:u,onlyTags:b}))},t.prototype.getClassName=function(){return Object(s.classes)(Object(s.style)(this.props.style),this.props.className)},t.displayName="PhpdocDocblock",t.defaultProps={boxed:!1,size:11,tagSize:11,color:"green-8",tagColor:"green-8",withoutTags:["param","example","return","inherited_from"]},b([Object(p.lazyInject)("htmlparser"),h("design:type","function"===typeof(n="undefined"!==typeof p.HtmlParser&&p.HtmlParser)?n:Object)],t.prototype,"htmlParser",void 0),t=b([Object(d.hot)(e),r.observer],t)}(c.a.Component))}.call(this,t("../node_modules/webpack/buildin/harmony-module.js")(e))},"./src/phpdoc/components/docblock/docblock.scss":function(e,o,t){}}]);