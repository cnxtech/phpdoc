(window.webpackJsonpcodex_name_=window.webpackJsonpcodex_name_||[]).push([["phpdoc.tree"],{"./src/phpdoc/components/tree/PhpdocTree.scss":function(e,t,n){},"./src/phpdoc/components/tree/PhpdocTree.tsx":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=b(n("./node_modules/react/index.js")),s=n("./node_modules/mobx-react/index.module.js"),l=n("codex_core"),c=n("./node_modules/typestyle/lib.es2015/index.js"),i=b(n("./node_modules/antd/lib/button/index.js"));n("./node_modules/antd/lib/button/style/index.js");var a=b(n("./node_modules/antd/lib/checkbox/index.js"));n("./node_modules/antd/lib/checkbox/style/index.js");var d=b(n("./node_modules/antd/lib/input/index.js"));n("./node_modules/antd/lib/input/style/index.js");var u=b(n("./node_modules/antd/lib/popover/index.js"));n("./node_modules/antd/lib/popover/style/index.js");var p=b(n("./node_modules/antd/lib/tooltip/index.js"));n("./node_modules/antd/lib/tooltip/style/index.js");var f=b(n("./src/phpdoc/components/tree/Tree.tsx")),h=n("./src/mobx.js"),y=n("./node_modules/react-dom/index.js"),m=n("./node_modules/lodash-decorators/index.js");function b(e){return e&&e.__esModule?e:{default:e}}n("./src/phpdoc/components/tree/PhpdocTree.scss");var _=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),v=function(){return(v=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},g=function(e,t,n,r){var s,l=arguments.length,c=l<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":o(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(c=(l<3?s(c):l>3?s(t,n,c):s(t,n))||c);return l>3&&c&&Object.defineProperty(t,n,c),c},j=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":o(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},x=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n},O=d.default.Search,N=n("./node_modules/debug/src/browser.js")("components:PhpdocTree"),w=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.treeFilters={search:null,class:!1,trait:!1,interface:!1},e}return _(n,t),Object.defineProperty(n.prototype,"tree",{get:function(){return this._tree.tree},enumerable:!0,configurable:!0}),n.prototype.setTreeFilter=function(e,t){var n=this;this.treeFilters[e]=t,this.tree.search(function(e){return!["class","trait","interface"].includes(e.type)||!1===n.treeFilters[e.type]})},n.prototype.searchInTree=function(e){if(e=null===e?null:0===e.length?null:e,this.treeFilters.search!==e&&(this.treeFilters.search=e),N("searchInTree",{search:e,selected:this.tree.selected(),lastSelectedNode:this.tree.lastSelectedNode()}),null===e&&this.tree.selected().length>0){var t=this.tree.selected().get(0);this.tree.clearSearch().node(t.id).expandParents()}else this.tree.search(e)},n.prototype.componentDidMount=function(){var e=this;this.tree.on("node.selected",function(t){if(e.props.scrollToSelected){var n=$('li[data-uid="'+t.id+'"]');if(1===n.length){var o=(0,y.findDOMNode)(e),r=n.get(0),s=r.offsetTop-o.offsetHeight/2;N("selected offset top",{offsetTop:r.offsetTop,$li:n,el:o,of:s}),e.scrollbar.scrollbars.scrollTop(s)}}})},n.prototype.render=function(){var e=this,t=this.props,n=t.nodes,o=t.searchable,s=t.filterable,c=(t.style,t.className,x(t,["nodes","searchable","filterable","style","className"]));return r.default.createElement("div",{className:this.getClassName()},o&&s?r.default.createElement("div",{style:{padding:5,textAlign:"right",borderBottom:"1px solid rgba(0, 0, 0, 0.2)",marginBottom:5,display:"flex"}},o?r.default.createElement(O,{ref:function(t){return e.search=t},key:"search",size:"small",placeholder:"Search",style:{width:"auto",flexBasis:0,flexGrow:1,minWidth:50},onSearch:function(t){return e.searchInTree(t)},onChange:function(t){(0,h.runInAction)(function(){return e.treeFilters.search=t.target.value}),e.searchInTree(t.target.value)},value:this.treeFilters.search}):null,o?r.default.createElement(p.default,{title:"Clear search",key:"search-clean"},r.default.createElement(i.default,{icon:"close-circle-o",size:"small",onClick:function(){return e.searchInTree(null)}})):null,s?r.default.createElement(u.default,{title:"Filters",key:"filters",content:["class","trait","interface"].map(function(t){return r.default.createElement(a.default,{name:t,key:t,checked:!1===e.treeFilters[t],onChange:function(n){return e.setTreeFilter(t,!n.target.checked)},style:{display:"block",marginLeft:0}},(0,l.ucfirst)(t))})},r.default.createElement(i.default,{icon:"filter",size:"small",style:{marginLeft:3}})):null):null,r.default.createElement(l.Scrollbar,{ref:function(t){return e.scrollbar=t}},r.default.createElement(f.default,v({},c,{ref:function(t){return e._tree=t},style:{marginRight:8,paddingBottom:40},nodes:n}))))},n.prototype.getClassName=function(){return(0,c.classes)("phpdoc-tree",(0,c.style)({marginBottom:"0 !important"}),(0,c.style)(this.props.style),this.props.className)},n.displayName="PhpdocTree",n.defaultProps={},g([h.observable,j("design:type",Object)],n.prototype,"treeFilters",void 0),g([h.action,j("design:type",Function),j("design:paramtypes",[String,Boolean]),j("design:returntype",void 0)],n.prototype,"setTreeFilter",null),g([(0,m.debounce)(400),h.action,j("design:type",Function),j("design:paramtypes",[String]),j("design:returntype",void 0)],n.prototype,"searchInTree",null),n=g([(0,l.Hot)(e),s.observer],n)}(r.default.Component);t.default=w}).call(this,n("./node_modules/webpack/buildin/module.js")(e))},"./src/phpdoc/components/tree/Tree.tsx":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=p(n("./node_modules/react/index.js")),s=p(n("./node_modules/inspire-tree/dist/inspire-tree.js")),l=p(n("./src/phpdoc/components/tree/TreeNodes.tsx"));n("./src/phpdoc/styles/vendor/inspire-tree/light.scss");var c=p(n("./node_modules/lodash/camelCase.js")),i=p(n("./node_modules/lodash/isFunction.js")),a=p(n("./node_modules/lodash/upperFirst.js")),d=n("codex_core"),u=n("./node_modules/typestyle/lib.es2015/index.js");function p(e){return e&&e.__esModule?e:{default:e}}var f=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),h=function(e,t,n,r){var s,l=arguments.length,c=l<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":o(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(c=(l<3?s(c):l>3?s(t,n,c):s(t,n))||c);return l>3&&c&&Object.defineProperty(t,n,c),c},y=(n("./node_modules/debug/src/browser.js")("components:inspire-tree:Tree"),function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={nodes:[]},e.tree=null,e}return f(n,t),n.prototype.componentDidMount=function(){var e=this;this.props.tree?this.tree=this.props.tree:this.tree=new s.default({data:this.props.nodes}),this.tree.on("model.loaded",function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];e.syncNodes()}),this.tree.on("changes.applied",function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];e.syncNodes()}),this.tree.onAny(function(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var r="on"+(0,a.default)((0,c.default)(t.toString()));(0,i.default)(e.props[r])&&e.props[r].apply(e,n)}),this.syncNodes()},n.prototype.componentWillUnmount=function(){this.tree.removeAllListeners()},n.prototype.syncNodes=function(){this.setState({nodes:this.tree.nodes()})},n.prototype.render=function(){return window.tree=this,r.default.createElement("div",{className:this.getClassName()},r.default.createElement(l.default,{nodes:this.state.nodes}))},n.prototype.getClassName=function(){return(0,u.classes)("inspire-tree",(0,u.style)(this.props.style),this.props.className)},n=h([(0,d.Hot)(e)],n)}(r.default.Component));t.default=y}).call(this,n("./node_modules/webpack/buildin/module.js")(e))},"./src/phpdoc/components/tree/TreeNode.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=p(n("./node_modules/react/index.js")),r=p(n("./src/phpdoc/components/tree/TreeNodes.tsx")),s=p(n("./node_modules/lodash/clone.js")),l=p(n("./node_modules/lodash/each.js")),c=p(n("./node_modules/lodash/isArray.js")),i=p(n("./node_modules/lodash/isEmpty.js")),a=p(n("./node_modules/lodash/isFunction.js")),d=p(n("./node_modules/lodash/isString.js")),u=n("./src/phpdoc/components/tree/TreeNodeAnchor.tsx");function p(e){return e&&e.__esModule?e:{default:e}}var f=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),h=function(){return(h=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return f(t,e),t.prototype.renderToggle=function(e){if(e.children)return o.default.createElement("a",{className:"toggle icon "+(e.expanded()?"icon-collapse":"icon-expand"),onClick:e.toggleCollapse.bind(e)})},t.prototype.renderChildren=function(e){if(e.expanded()&&e.hasChildren())return o.default.createElement(r.default,{nodes:e.children})},t.prototype.getClassNames=function(){var e=this.props.node,t=e.itree.state,n=e.itree.li.attributes,o=[];(0,l.default)(Object.keys(t),function(e){t[e]&&o.push(e)}),!e.hidden()&&e.removed()&&o.push("hidden"),e.expanded()&&o.push("expanded"),o.push(e.hasOrWillHaveChildren()?"folder":"leaf");var r=n.className||n.className;return(0,a.default)(r)&&(r=r(e)),(0,i.default)(r)||((0,d.default)(r)?o=o.concat(r.split(/[\s\.]+/)):(0,c.default)(r)&&(o=o.concat(r))),o.join(" ")},t.prototype.getAttributes=function(){var e=this.props.node,t=(0,s.default)(e.itree.li.attributes)||{};return t.className=this.getClassNames(),t["data-uid"]=e.id,t},t.prototype.render=function(){var e=this.props.node;return e.available()?o.default.createElement("li",h({},this.getAttributes()),o.default.createElement("div",{className:"title-wrap"},this.renderToggle(e),o.default.createElement(u.TreeNodeAnchor,{expanded:e.expanded(),node:e,text:e.text})),o.default.createElement("div",{className:"wholerow"}),this.renderChildren(e)):null},t}(o.default.Component);t.default=y},"./src/phpdoc/components/tree/TreeNodeAnchor.tsx":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.TreeNodeAnchor=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=n("codex_core"),s=function(e){return e&&e.__esModule?e:{default:e}}(n("./node_modules/react/index.js"));var l=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),c=function(){return(c=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},i=function(e,t,n,r){var s,l=arguments.length,c=l<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":o(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(c=(l<3?s(c):l>3?s(t,n,c):s(t,n))||c);return l>3&&c&&Object.defineProperty(t,n,c),c},a=n("./node_modules/debug/src/browser.js")("phpdoc:components:tree-node-anchor"),d=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.onBlur=function(t){a("blur",{self:e,node:e.props.node}),e.props.node.blur()},e.onClick=function(t){var n=e.props.node,o=n.tree();a("click",{self:e,event:t,node:e.props.node});var r=function(){if(t.preventDefault(),(t.metaKey||t.ctrlKey||t.shiftKey)&&o.disableDeselection(),t.shiftKey){o.deselect();var e=o.lastSelectedNode();if(e){var r=o.boundingNodes(e,n),s=r[0],l=r[1];o.selectBetween(s,l)}}n.selected()?o.config.selection.disableDirectDeselection||n.deselect():n.select(),o.enableDeselection()};o.emit("node.click",n,r),t.treeDefaultPrevented||r()},e.onContextMenu=function(t){e.props.node.tree().emit("node.contextmenu",e.props.node)},e.onDoubleClick=function(t){var n=e.props.node;a("click",{self:e,event:t,node:e.props.node});var o=function(){n.tree().deselect(),n.toggleCollapse()};n.tree().emit("node.dblclick",n,o),t.treeDefaultPrevented||o()},e.onFocus=function(t){a("click",{self:e,event:t,node:e.props.node}),e.props.node.focus()},e}return l(n,t),n.prototype.render=function(){var e=this.props.node,t=e.itree.a.attributes||{};t.className=t.className||"",!1===t.className.includes("title")&&(t.className+=" title"),!1===t.className.includes("icon")&&(t.className+=" icon"),t.tabIndex=1,t.unselectable="on";var n,o=this.props.text;if(e.type){var r="phpdoc-type-"+e.type;!1===t.className.includes(r)&&(t.className+=" "+r),n=s.default.createElement("i",{className:r+" on-left"})}return s.default.createElement("a",c({"data-uid":e.id,onBlur:this.onBlur,onClick:this.onClick,onContextMenu:this.onContextMenu,onDoubleClick:this.onDoubleClick,onFocus:this.onFocus},t),n||"",o)},n=i([(0,r.Hot)(e)],n)}(s.default.Component);t.TreeNodeAnchor=d}).call(this,n("./node_modules/webpack/buildin/module.js")(e))},"./src/phpdoc/components/tree/TreeNodes.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(n("./node_modules/react/index.js")),r=s(n("./src/phpdoc/components/tree/TreeNode.tsx"));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e=this.props.nodes.map(function(e){return o.default.createElement(r.default,{key:e.id,node:e})});return o.default.createElement("ol",null,e)},t}(o.default.Component);t.default=c},"./src/phpdoc/styles/vendor/inspire-tree/light.scss":function(e,t,n){}}]);