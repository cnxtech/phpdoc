(window.webpackJsonpcodex_name_=window.webpackJsonpcodex_name_||[]).push([["views.phpdoc","phpdoc.app"],{"./src/phpdoc/components/PhpdocComponent.tsx":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=d(o("./node_modules/react/index.js")),i=o("./src/mobx.js"),s=o("codex_core"),l=o("./src/phpdoc/logic/index.ts"),c=d(o("./node_modules/antd/lib/spin/index.js"));o("./node_modules/antd/lib/spin/style/index.js");var a=d(o("./node_modules/lodash/isNumber.js")),p=o("./node_modules/lodash-es/lodash.js"),u=d(o("./node_modules/classnames/index.js"));function d(e){return e&&e.__esModule?e:{default:e}}var f=function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),y=function(){return(y=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},h=function(e,t,o,r){var i,s=arguments.length,l=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===("undefined"==typeof Reflect?"undefined":n(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(l=(s<3?i(l):s>3?i(t,o,l):i(t,o))||l);return s>3&&l&&Object.defineProperty(t,o,l),l},m=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":n(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},b=function(e,t,o,n){return new(o||(o=Promise))(function(r,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function l(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){e.done?r(e.value):new o(function(t){t(e.value)}).then(s,l)}c((n=n.apply(e,t||[])).next())})},v=function(e,t){var o,n,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],n=0}finally{o=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},g=(o("./node_modules/debug/src/browser.js")("phpdoc:components:PhpdocComponent"),function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.file=null,t.isLoading=!0,t.state={query:null},t}var o,n,d,g,_;return f(t,e),Object.defineProperty(t.prototype,"manifest",{get:function(){return this.store.manifest},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fileJS",{get:function(){return(0,i.toJS)(this.file)},enumerable:!0,configurable:!0}),t.prototype.setLoading=function(e){this.isLoading=e},t.prototype.setFile=function(e){this.file=e,this.onFileChange()},t.getDerivedStateFromProps=function(e,t){var o=t||{},n=e.query;return!n&&e.file&&(n=l.Query.from(e.file.entity.full_name)),t&&t.query&&t.query===n&&n||(o.query=(0,p.isString)(n)?l.Query.from(n):l.Query.fromHash()),o},t.prototype.onFileChange=function(){},t.prototype.onQueryChange=function(){},t.prototype.componentDidMount=function(){this._updateFile()},t.prototype.componentDidUpdate=function(e,t,o){this.props.query===e.query&&this.props.file===e.file||this._updateFile(),this.props.query&&e.query&&this.props.query!==e.query&&this.onQueryChange()},t.prototype.className=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return u.default.apply(void 0,[this.props.className,{boxed:this.props.boxed}].concat(e))},t.prototype._updateFile=function(){return b(this,void 0,void 0,function(){var e,t;return v(this,function(o){switch(o.label){case 0:if(!this.props.file&&!this.state.query)return[2,!1];if(this.setLoading(!0),this.props.file)return this.setFile(this.props.file),this.setLoading(!1),[2,(0,s.resolve)()];if(this.manifest.hasFullName(this.state.query.entityName)&&(e=this.manifest.getFileByFullName(this.state.query.entityName)),!e||!e.hash)throw new Error("Cannot update file, query entity does not exist in manifest files: "+this.state.query.entityName);return[4,this.store.fetchFile(e.hash)];case 1:return t=o.sent(),this.setFile(t),this.setLoading(!1),[2,(0,s.resolve)()]}})})},t.prototype.renderWithLoader=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var o=e[e.length-1];if(!(e.length>1&&e[0]||this.isLoading))return(0,p.isFunction)(o)?o(this.props):o;var n=this.props.loader||{};return n.delay=(0,a.default)(n.delay)?n.delay:0,r.default.createElement(c.default,y({},n))},h([(0,s.inject)("PhpdocStore"),m("design:type","function"==typeof(o=void 0!==l.PhpdocStore&&l.PhpdocStore)?o:Object)],t.prototype,"store",void 0),h([i.observable,m("design:type","function"==typeof(n=void 0!==l.File&&l.File)?n:Object)],t.prototype,"file",void 0),h([i.observable,m("design:type",Boolean)],t.prototype,"isLoading",void 0),h([i.computed,m("design:type","function"==typeof(d=void 0!==l.Manifest&&l.Manifest)?d:Object),m("design:paramtypes",[])],t.prototype,"manifest",null),h([i.computed,m("design:type","function"==typeof(g=void 0!==l.File&&l.File)?g:Object),m("design:paramtypes",[])],t.prototype,"fileJS",null),h([i.action,m("design:type",Function),m("design:paramtypes",[Boolean]),m("design:returntype",void 0)],t.prototype,"setLoading",null),h([i.action,m("design:type",Function),m("design:paramtypes",["function"==typeof(_=void 0!==l.File&&l.File)?_:Object]),m("design:returntype",void 0)],t.prototype,"setFile",null),h([i.action,m("design:type",Function),m("design:paramtypes",[]),m("design:returntype",Promise)],t.prototype,"_updateFile",null),t}(r.default.Component));t.default=g},"./src/phpdoc/components/PhpdocEntity.scss":function(e,t,o){},"./src/phpdoc/components/PhpdocEntity.tsx":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=f(o("./node_modules/react/index.js")),i=o("codex_core"),s=o("./node_modules/typestyle/lib.es2015/index.js"),l=o("./src/mobx.js"),c=f(o("./src/phpdoc/logic/Type.ts")),a=f(o("./src/phpdoc/components/PhpdocType.tsx")),p=f(o("./src/phpdoc/components/PhpdocComponent.tsx")),u=o("./node_modules/mobx-react/index.module.js"),d=o("./node_modules/lodash-es/lodash.js");function f(e){return e&&e.__esModule?e:{default:e}}o("./src/phpdoc/components/PhpdocEntity.scss");var y=function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),h=function(e,t,o,r){var i,s=arguments.length,l=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===("undefined"==typeof Reflect?"undefined":n(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(l=(s<3?i(l):s>3?i(t,o,l):i(t,o))||l);return s>3&&l&&Object.defineProperty(t,o,l),l},m=(o("./node_modules/debug/src/browser.js")("components:PhpdocHeader"),function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return y(o,t),o.prototype.render=function(){var e=this.file,t=this.props,o=t.size,n=t.style,i=t.className,p=t.titleStyle;return(0,d.isString)(o),this.renderWithLoader(function(){return r.default.createElement("header",{style:n,className:(0,s.classes)("phpdoc-entity",i)},r.default.createElement("h3",{style:p,className:"header-title"},r.default.createElement("i",{className:"mr-xs phpdoc-type-"+e.type}),r.default.createElement("span",{className:"phpdoc-type-"+e.type},c.default.stripStartSlash(e.entity.full_name)),e.entity.extends?r.default.createElement("small",{className:"pl-xs fs-13"},"extends"):null,e.entity.extends?r.default.createElement(a.default,{className:"pl-xs",type:e.entity.extends}):null,e.entity.implements&&e.entity.implements.length>0?r.default.createElement("small",{className:"pl-xs fs-13"},"implements"):null,e.entity.implements&&e.entity.implements.length>0?r.default.createElement(a.default,{className:"pl-xs",type:(0,l.toJS)(e.entity.implements)}):null))})},o.displayName="PhpdocEntity",o.defaultProps={},o=h([(0,i.Hot)(e),u.observer],o)}(p.default));t.default=m}).call(this,o("./node_modules/webpack/buildin/module.js")(e))},"./src/phpdoc/components/app/PhpdocApp.scss":function(e,t,o){},"./src/phpdoc/components/app/PhpdocApp.tsx":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=g(o("./node_modules/react/index.js")),i=o("./node_modules/mobx-react/index.module.js"),s=o("codex_core"),l=o("./node_modules/typestyle/lib.es2015/index.js"),c=o("./src/mobx.js"),a=g(o("./node_modules/react-split-pane/dist/index.esm.js")),p=o("./src/phpdoc/logic/index.ts"),u=g(o("./node_modules/antd/lib/input/index.js"));o("./node_modules/antd/lib/input/style/index.js");var d=g(o("./node_modules/antd/lib/tabs/index.js"));o("./node_modules/antd/lib/tabs/style/index.js");var f=o("./src/phpdoc/components/index.tsx"),y=g(o("./node_modules/inspire-tree/dist/inspire-tree.js")),h=o("./src/phpdoc/components/tree/TreeNodeBuilder.tsx"),m=g(o("./src/phpdoc/components/PhpdocEntity.tsx")),b=g(o("./node_modules/react-reveal/Fade.js"));o("./src/phpdoc/components/app/PhpdocApp.scss");var v=g(o("./node_modules/prop-types/index.js"));function g(e){return e&&e.__esModule?e:{default:e}}var _=function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),j=function(e,t,o,r){var i,s=arguments.length,l=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===("undefined"==typeof Reflect?"undefined":n(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(l=(s<3?i(l):s>3?i(t,o,l):i(t,o))||l);return s>3&&l&&Object.defineProperty(t,o,l),l},P=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":n(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},S=function(e,t,o,n){return new(o||(o=Promise))(function(r,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function l(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){e.done?r(e.value):new o(function(t){t(e.value)}).then(s,l)}c((n=n.apply(e,t||[])).next())})},w=function(e,t){var o,n,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],n=0}finally{o=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},x=(d.default.TabPane,u.default.Search,o("./node_modules/debug/src/browser.js")("phpdoc:PhpdocApp")),O=function(e){return"phpdoc.app.pane."+e},N=function(e,t){if(s.LocalStorage.has(O(e))){var o=s.LocalStorage.get.item(O(e));return o.toString().endsWith("%")?o:parseInt(o,10)}return t},T=function(e,t){return s.LocalStorage.set(O(e),t)},E=function(t){function o(e,o){var n=t.call(this,e,o)||this;return n.app=s.app.get(p.AppController),n.tree=null,n.tree=new y.default({data:new h.TreeNodeBuilder(o.manifest).buildNodes()}),n}var n,u,d,g;return _(o,t),Object.defineProperty(o.prototype,"manifest",{get:function(){return this.context.manifest},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"file",{get:function(){return this.app.file},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"query",{get:function(){return this.app.query},enumerable:!0,configurable:!0}),o.prototype.componentDidMount=function(){return S(this,void 0,void 0,function(){var e,t=this;return w(this,function(o){return this.app.on("navigate:entity",function(e){x("expand to tree node",{app:e,file:e.file,query:e.query,tree:t.tree});var o=t.tree.node(e.file.hash);t.tree.deselectDeep(),o.select(),o.expandParents(),t.tree.emit("node.selected",o,!1)}),this.app.on("navigate:method",function(e){if(e.file.hasMethod(e.query.memberName)){var o=e.file.getMethod(e.query.memberName);x("scroll to method",{method:o,app:e,file:e.file,query:e.query}),t.code&&(t.code.removeLineHighlights(),o.inherited_from||(t.code.highlightLine(o.line),t.code.getLine(o.line).then(function(e){return e?t.codeScrollbar.scrollbars.scrollTop(e.offsetTop):null})))}}),this.app.on("update",function(e){t.forceUpdate()}),e=p.Query.isValidHash(window.location.hash)?window.location.hash:this.manifest.config.default_class,this.props.query&&(e=p.Query.from(this.props.query).toString()),this.app.start(e),[2]})})},o.prototype.componentDidUpdate=function(e,t,o){this.props.query!==e.query&&this.app.navTo(e.query)},o.prototype.componentWillUnmount=function(){this.app.stop()},o.prototype.render=function(){var e=this;window.phpdoc=this,x("render",{manifest:this.manifest});var t=this.query,o=(0,l.classes)((0,l.style)(this.props.style),this.props.className,"phpdoc-app"),n=null;return this.file&&t.isMember&&(n=t.isMethod?this.file.getMethod(t.memberName):this.file.getProperty(t.memberName)),r.default.createElement("div",{className:o},r.default.createElement(a.default,{split:"vertical",defaultSize:N("10",250),onChange:function(e){return T("10",e)},maxSize:document.body.clientWidth/2,minSize:100},r.default.createElement(f.PhpdocTree,{searchable:!0,filterable:!0,scrollToSelected:!0,tree:this.tree,style:{height:"100%"},onNodeSelected:function(t){x("tree onNodeSelected",t),["interface","class","trait"].includes(t.type)&&e.app.navToEntity(t.fullName)}}),this.file&&!this.app.isLoading?r.default.createElement(a.default,{split:"horizontal",defaultSize:50,allowResize:!1},r.default.createElement(b.default,{when:!this.app.isLoading},r.default.createElement(m.default,{file:this.file})),this.props.showCodePane?this.renderCodePane(n):this.props.showMethodPane?this.renderMethodPane(n):this.renderMemberList(n)):r.default.createElement(s.Centered,null,r.default.createElement(s.Loader,{loading:!0,size:50,children:[]}))))},o.prototype.renderCodePane=function(e){var t=this;return r.default.createElement(a.default,{split:"horizontal",defaultSize:"80%",pane2Style:{display:"flex"}},this.props.showMethodPane?this.renderMethodPane(e):this.renderMemberList(e),r.default.createElement(s.Scrollbar,{ref:function(e){return t.codeScrollbar=e}},r.default.createElement(s.CodeHighlight,{ref:function(e){return t.code=e},withLineNumbers:!0,code:this.file.source,preStyle:{margin:0,border:"none"}})))},o.prototype.renderMethodPane=function(e){return r.default.createElement(a.default,{split:"vertical",minSize:100,defaultSize:N("30","30%"),onChange:function(e){return T("30",e)}},this.renderMemberList(e),r.default.createElement(s.Scrollbar,null,this.query&&this.query.isMethod?r.default.createElement(f.PhpdocMethod,{query:this.query.fullName,hide:{namespace:!0}}):null))},o.prototype.renderMemberList=function(e){var t=this;return r.default.createElement(s.Scrollbar,{className:"phpdoc-app-member-list-container"},r.default.createElement(f.PhpdocMemberList,{searchable:!0,selectable:!0,filterable:!0,clickableInherits:!0,gotoSource:!0,file:this.file,style:{marginBottom:0,height:"100%"},selected:e,onSelect:function(e){x("PhpdocMemberList onSelect",{member:e}),"method"===e.type&&t.app.navToMember(e.type,e.name)},onGotoSourceClick:function(e){x("PhpdocMemberList onGotoSourceClick",{line:e.line,item:e}),t.code&&(t.code.removeLineHighlights(),t.code.highlightLine(e.line),t.code.getLine(e.line).then(function(e){return t.codeScrollbar.scrollbars.scrollTop(e.offsetTop)}))},onInheritedClick:function(e){x("PhpdocMemberList onInheritedClick",{item:e}),t.app.navToEntity(e.fullName)}}))},o.displayName="PhpdocApp",o.defaultProps={},o.contextTypes={manifest:v.default.object},j([(0,s.inject)(s.Symbols.RootStore),P("design:type","function"==typeof(n=void 0!==s.RootStore&&s.RootStore)?n:Object)],o.prototype,"store",void 0),j([(0,s.inject)("PhpdocStore"),P("design:type","function"==typeof(u=void 0!==p.PhpdocStore&&p.PhpdocStore)?u:Object)],o.prototype,"phpdocStore",void 0),j([c.computed,P("design:type","function"==typeof(d=void 0!==p.File&&p.File)?d:Object),P("design:paramtypes",[])],o.prototype,"file",null),j([c.computed,P("design:type","function"==typeof(g=void 0!==p.Query&&p.Query)?g:Object),P("design:paramtypes",[])],o.prototype,"query",null),o=j([(0,s.Hot)(e),i.observer,P("design:paramtypes",[Object,Object])],o)}(r.default.Component);t.default=E}).call(this,o("./node_modules/webpack/buildin/module.js")(e))},"./src/phpdoc/components/tree/TreeBuilder.tsx":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TreeBuilder=void 0;var n=s(o("./node_modules/debug/src/browser.js")),r=s(o("./node_modules/lodash/cloneDeep.js")),i=s(o("./node_modules/inspire-tree/dist/inspire-tree.js"));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(){return(l=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},c=(0,n.default)("phpdoc:tree-builder"),a=function(){function e(e,t){void 0===t&&(t={data:[]}),this.manifest=e,this.config=t}return Object.defineProperty(e.prototype,"files",{get:function(){return this.manifest.files},enumerable:!0,configurable:!0}),e.prototype.build=function(){var e=this,t=this.getClassTree(),o=this.createTree();return Object.keys(t).forEach(function(n){var r=t[n],i=o.addNode(e.makeTreeNodeData(n,r));t[n]&&void 0===t[n].name&&function t(o,n){Object.keys(o).forEach(function(r){var i=o[r],s=n.addChild(e.makeTreeNodeData(r,i));i.type||t(i,s)})}(t[n],i)}),o},e.prototype.getClassTree=function(e){if(void 0===e&&(e=!1),void 0===this.classTree||!0===e){c("getTree new start",this.classTree);var t=Object.keys(this.files).map(function(e){return e.split("\\").splice(1)});this.classTree={};for(var o=0;o<t.length;o++)for(var n=t[o],i=this.classTree,s=0;s<n.length;s++){var a=n[s],p=s===n.length-1,u=void 0!==i[a];if(!1===p&&!1===u)i[a]={};else if(p){var d="\\"+n.join("\\"),f=this.files[d];i[a]=l({},f,{fullName:d,text:a,id:f.hash})}i=i[a]}}return c("getTree end",this.classTree),(0,r.default)(this.classTree)},e.prototype.makeTreeNodeData=function(e,t){var o={text:e};return t.type&&t.hash?o=l({},o,{type:t.type,hash:t.hash,id:t.hash,fullName:t.fullName}):o.type="namespace",o},e.prototype.createTree=function(){return new i.default((0,r.default)(this.config))},e}();t.TreeBuilder=a},"./src/phpdoc/components/tree/TreeNodeBuilder.tsx":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TreeNodeBuilder=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(o("./src/phpdoc/components/tree/sorter.ts")),r=o("./node_modules/inversify/lib/inversify.js"),i=o("./src/phpdoc/components/tree/TreeBuilder.tsx");var s=function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),l=function(){return(l=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.buildNodes=function(){var e=this;return function t(o){return Object.keys(o).map(function(r){var i=o[r],s=e.makeTreeNodeData(r,i);return o[r]&&void 0===o[r].type&&(s.children=t(i),s.children.sort(n.default)),s})}(this.getClassTree())},t.prototype.makeTreeNodeData=function(e,t){var o={text:e};return t.type&&t.hash?o=l({},o,{type:t.type,hash:t.hash,id:t.hash,fullName:t.fullName}):(o.type="namespace",o.id=(0,r.guid)(),o.children=[]),o},t}(i.TreeBuilder);t.TreeNodeBuilder=c},"./src/phpdoc/components/tree/sorter.ts":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return["class","trait","interface"].includes(e)};t.default=function(e,t){var o=0;return"namespace"===e.type&&(o=-1,"namespace"===t.type&&(o=0)),n(e.type)&&(o=1,n(t.type)&&(o=0)),o}},"./src/phpdoc/views/PhpdocView.tsx":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=a(o("./node_modules/react/index.js")),i=o("codex_core"),s=a(o("./src/phpdoc/components/app/PhpdocApp.tsx")),l=a(o("./src/phpdoc/components/PhpdocContent.tsx")),c=o("./node_modules/mobx-react/index.module.js");function a(e){return e&&e.__esModule?e:{default:e}}var p=function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),u=function(e,t,o,r){var i,s=arguments.length,l=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===("undefined"==typeof Reflect?"undefined":n(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(l=(s<3?i(l):s>3?i(t,o,l):i(t,o))||l);return s>3&&l&&Object.defineProperty(t,o,l),l},d=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":n(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=o("./node_modules/debug/src/browser.js")("phpdoc:PhpdocView"),y=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}var n,a;return p(o,t),o.prototype.render=function(){window.view=this;var e=this.props,t=e.project,o=e.revision;return f("render",{project:t,revision:o},this),r.default.createElement(i.ErrorBoundary,null,r.default.createElement(l.default,{project:t,revision:o,setLayout:!0},r.default.createElement(s.default,{showMethodPane:!0,showCodePane:!0})))},o.displayName="PhpdocView",u([(0,i.inject)(i.Symbols.RootStore),d("design:type","function"==typeof(n=void 0!==i.RootStore&&i.RootStore)?n:Object)],o.prototype,"store",void 0),u([(0,i.inject)(i.Symbols.LayoutStore),d("design:type","function"==typeof(a=void 0!==i.LayoutStore&&i.LayoutStore)?a:Object)],o.prototype,"layout",void 0),o=u([(0,i.Hot)(e),c.observer],o)}(r.default.Component);t.default=y}).call(this,o("./node_modules/webpack/buildin/module.js")(e))}}]);