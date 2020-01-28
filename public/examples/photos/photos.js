!function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */function e(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s}function t(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function n(e,t,n,i){return new(n||(n=Promise))((function(o,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(s,a)}l((i=i.apply(e,t||[])).next())}))}function i(e,t){var n,i,o,r,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,i=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){s.label=r[1];break}if(6===r[0]&&s.label<o[1]){s.label=o[1],o=r;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(r);break}o[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(e){r=[6,e],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}}var o="ΔTrackable",r="ΔChangeVersion",s="ΔFactory",a="ΔDefFactories",l="ΔIsFactory",c="ΔΔProxy",d="ΔIsProxy",f="ΔDefault",u="ΔCreateProxy",h=!1;function p(e){return e&&e.ΔTrackable?e.ΔMd?e.ΔMd:e.ΔMd={parents:void 0,refreshCtxt:void 0,watchers:void 0}:null}var v=Array.isArray;function m(e,t){e&&(v(e)&&!e[d]?e.forEach(t):t(e))}function g(e,t){if(e&&t){if(e===t)return;if(v(e)){var n=e;if(1===n.length){if(n[0]===t)return}else{var i=n.indexOf(t);if(i>-1)return n.splice(i,1),1===n.length?n[0]:n}}}return e}function w(e,t){return e?v(e)&&!e[d]?(e.push(t),e):[e,t]:t}function b(e){return e&&!0===e[o]?e[r]:0}function y(e,t){return!(!e||"object"!=typeof e)&&"ΔΔ"+t in e}function N(e){return!(!e||!0!==e[o])}function x(e){return b(e)%2==1}function C(e,t){var n=p(e);return n&&t?(n.watchers=w(n.watchers,t),x(e)&&M.register(e),t):null}function k(e,t){var n=e?e.ΔMd:void 0;n&&t&&(n.watchers=g(n.watchers,t))}function D(e,t){if(e&&t){var n=e[f];if(n){var i=n(t);if(i!==V)return e[t]=i}var o=e[a],r=o?o[t]:null;if(r)return e[t]=r()}}function P(e){var t=e.prototype;t[o]=!0,t[r]=0}var V={};function A(){return""}A[l]=!0;var I=A;function R(){return null}R[l]=!0;var O=R;function j(){}function $(e,t,n,i,o,r){var s=N(i);if(e.ΔComputeDependencies)console.error("[Trax] @computed properties must not mutate the Data object when calculated");else{i&&!s&&o.ΔCreateProxy&&(s=N(i=o.ΔCreateProxy(i)||i));var a=!1,l=r[n];x(e)?a=l!==i:l!==i&&(E(e),a=!0),a&&(s&&void 0===i&&(i=null),(s||l&&N(l))&&function(e,t,n){T(e,t),F(e,n)}(e,l,i),r[n]=i,S(e,"set",t,l,i))}}function S(e,t,n,i,o){var r=e?e.ΔMd:void 0;if(r&&r.trackers){var s=e[c]||e;m(r.trackers,(function(e){e(s,t,n,i,o)}))}}function E(e){if(N(e)){var t=!0;if(x(e)?t=!1:e.ΔChangeVersion+=1,M.register(e),t){var n=e.ΔMd;n&&n.parents&&m(n.parents,(function(e){E(e)}))}}}function T(e,t){if(t){var n=t.ΔMd;n&&n.parents&&(n.parents=g(n.parents,e))}}function F(e,t){if(t){var n=p(t);n&&(n.parents=w(n.parents,e))}}j[l]=!0;var L=0,X=function(){function e(){this.id=++L}return e.prototype.register=function(e){var t=this,n=p(e);n&&!n.refreshCtxt&&(this.objects?this.objects.push(e):(this.objects=[e],Promise.resolve().then((function(){t.refresh()}))),n.refreshCtxt=this)},e.prototype.refresh=function(e){void 0===e&&(e=!0);var t=this.objects,n=t?t.length:0;if(n){H();for(var i,o,r=[],s=0;n>s;s++)(o=(i=t[s]).ΔMd).refreshCtxt&&(i.ΔChangeVersion%2&&(i.ΔChangeVersion+=1),o.refreshCtxt&&o.watchers&&r.push({dataNode:i,watchers:o.watchers})),o.refreshCtxt=void 0;this.objects=void 0,r.length&&(e?K(r):Promise.resolve().then((function(){K(r)})))}},e}();function K(e){for(var t=function(e){m(e.watchers,(function(t){t(e.dataNode)}))},n=0,i=e;n<i.length;n++){t(i[n])}}var M=new X;function H(){M.objects&&(M=new X)}var W=["push","pop","shift","unshift","splice"],_=/^\d+$/,z=/^\Δ/,q=function(){function e(e){this.ΔTrackable=!0,this.ΔDataFactory=!0,this.ΔChangeVersion=0,this.ΔMd=void 0,this.ΔΔSelf=this,this.ΔIsProxy=!1,this.ΔItemFactory=e}return e.ΔNewProxy=function(t){var n=new Proxy([],new e(t));return n[c]=n,n},e.ΔCreateProxy=function(t,n){if(v(t)){var i=new Proxy(t,new e(n)),o=t.length;for(E(i);o--;)F(i,t[o]);return i}return null},e.prototype.$newItem=function(e){var t=this.ΔItemFactory();return void 0===e&&(e=this.ΔΔList.length),e>-1&&$(this.ΔΔSelf,e,e,t,this.ΔItemFactory,this.ΔΔList),t},e.prototype.$dispose=function(){for(var e=this.ΔΔList,t=e.length;t--;)T(this.ΔΔSelf,e[t]);return e},e.prototype.ΔToString=function(){return"Trax List ["+this.ΔΔList.join(", ")+"]"},e.prototype.set=function(e,t,n){if(this.ΔΔList||(this.ΔΔList=e),t.match(_)){var i=parseInt(t,10);$(this.ΔΔSelf,i,i,n,this.ΔItemFactory,this.ΔΔList)}else t.match(z)&&(this[t]=n);return!0},e.prototype.get=function(e,t){if(this.ΔΔList||(this.ΔΔList=e),t===d)return!0;if("string"===typeof t){if(t.match(z))return this[t];if(t.match(_))return this.ΔΔList[parseInt(t,10)];if("length"===t)return this.ΔΔList.length;if("push"===t)return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var i=this,o=t.length,r=i.ΔΔList.length,s=0;o>s;s++)i.set(e,r+s+"",t[s])};if("toString"===t)return this.ΔToString;if("function"==typeof e[t])return function(){var e=this,n=W.indexOf(t)>-1;if(n){E(e);for(var i=e.ΔΔList,o=0;i.length>o;o++)T(e,i[o])}var r=e.ΔΔList,s=r[t].apply(r,arguments);if(n){for(i=e.ΔΔList,o=0;i.length>o;o++)F(e,i[o]);S(this,t)}return s}}return t===Symbol.iterator?this.ΔΔList[Symbol.iterator]:this[t]},e}();var B=function(e){function t(){return q.ΔNewProxy(e)}return e=e||O,t[l]=!0,t[u]=function(t){return q.ΔCreateProxy(t,e)},t},U=0,G={log:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.log.apply(console,arguments)},error:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.error.apply(console,arguments)}};function Y(e,t){for(var n=e,i=[];n;){if(n.template){var o=n.template;i.push('\n>> Template: "'+o.templateName+'" - File: "'+o.filePath+'"')}n=n.parentView}G.error("IVY: "+t+i.join(""))}var J=void 0,Q=11,Z=/^ΔΔ(\w+)Emitter$/,ee="ΔIsAPI",te="ΔIsController",ne=0,ie=function(){function e(e,t,n,i,o){this.templateName=e,this.filePath=t,this.staticCache=n,this.renderFn=i,this.$Class=o,this._uid=++ne,this.tplApi=void 0,this.tplCtl=void 0,this.forceRefresh=!1,this.activeWatch=!1,this.lastRefreshVersion=0,this.processing=!1,this.rendering=!1,this.initialized=!1,this.labels=void 0,this.hasCtlClass=!1,this.view=le(null,null,1,this);var r=this;this.watchCb=function(){r.notifyChange()},this.watchCb.$templateId=this._uid,this.$Class!==J&&(Se(this.$Class,te)?this.hasCtlClass=!0:Se(this.$Class,ee)||N(this.$Class.prototype)||Y(this.view,"Type of $ argument must be either a @Controller, an @API or a @Data class"))}return Object.defineProperty(e.prototype,"uid",{get:function(){return this._uid},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"document",{get:function(){return this.view.doc},set:function(e){this.view.doc=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"api",{get:function(){if(!this.tplApi)if(this.hasCtlClass){var e=this.controller;e&&e.$api&&(this.tplApi=e.$api)}else this.$Class&&(this.tplApi=new this.$Class,oe(this.view,this.tplApi,this.staticCache));return this.tplApi},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"controller",{get:function(){if(!this.tplCtl&&this.hasCtlClass){var e=this.tplCtl=new this.$Class;if(y(e,"$template")&&(e.$template=this),y(e,"$logger")){var t=this.view;e.$logger={log:G.log,error:function(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];Y(t,e+(n.length?" "+n.join(" "):""))}}}e.$api&&oe(this.view,e.$api,this.staticCache)}return this.tplCtl},enumerable:!0,configurable:!0}),e.prototype.attach=function(e){if(this.view.rootDomNode)Y(this.view,"Template host cannot be changed once set");else{var t=this.view;if(!t.doc)throw new Error("[iv] Template.document must be defined before calling Template.attach()");t.rootDomNode=e,t.anchorNode=t.doc.createComment("template anchor"),Ee(t.anchorNode,e)}return this},e.prototype.registerLabel=function(e,t){this.labels||(this.labels={});var n=this.labels[e];n?n.push(t):n=this.labels[e]=[t]},e.prototype.query=function(e,t){if(void 0===t&&(t=!1),this.rendering)return null;if(e&&"#"!==e.charAt(0))return Y(this.view,"[$template.query()] Invalid label argument: '"+e+"' (labels must start with #)"),null;var n=this.labels&&this.labels[e]||null;return n&&n.length?t?n:n[0]:null},e.prototype.notifyChange=function(){this.render()},e.prototype.disconnectObserver=function(){this.activeWatch&&(k(this.api,this.watchCb),k(this.controller,this.watchCb),this.activeWatch=!1)},e.prototype.render=function(e){if(this.processing)return this;this.processing=!0;var t=this.api,n=this.controller,i=this.view;if(n&&!N(n)&&(Y(i,"Template controller must be a @Controller Object - please check: "+this.$Class.name),this.tplCtl=this.$Class=void 0),t&&e)for(var o in x(t)||H(),this.disconnectObserver(),e)e.hasOwnProperty(o)&&(t[o]=e[o]);var r=!this.forceRefresh,s=i.nodes;if(s&&s[0]&&s[0].attached||(r=!1),r&&b(t)+b(n)>this.lastRefreshVersion&&(r=!1),!r){n&&(this.initialized||(re(i,n,"$init","controller"),this.initialized=!0),re(i,n,"$beforeRender","controller")),this.rendering=!0,this.labels=void 0,i.lastRefresh++,i.instructions=void 0;try{this.renderFn(i,this.hasCtlClass?n:t,t,this)}catch(e){Y(i,"Template execution error\n"+(e.message||e))}this.rendering=!1,n&&re(i,n,"$afterRender","controller"),function(e,t){if(void 0===t&&(t=!1),e){var n=e.ΔMd;n&&n.refreshCtxt?n.refreshCtxt.refresh(!0):t&&H()}}(t),this.forceRefresh=!1,this.lastRefreshVersion=b(t)+b(n)}return this.activeWatch||(C(t,this.watchCb),n&&C(n,this.watchCb),this.activeWatch=!0),this.processing=!1,this},e}();function oe(e,t,n){var i=n.events;if(void 0===i){var o=void 0;for(var r in t)if(r.match(Z)){var s=RegExp.$1;o||(o=[]),"function"!=typeof t[s+"Emitter"].init?Y(e,"Invalid EventEmitter: "+s+"Emitter"):(o.push(s+"Emitter"),o.push(s),t[s+"Emitter"].init(s,t))}n.events=o||null}else if(null!==i)for(var a=i.length,l=0;a>l;l+=2)t[i[l]].init(i[l+1],t)}function re(e,t,n,i){if("function"==typeof t[n])try{t[n]()}catch(t){Y(e,i+" "+n+" hook execution error\n"+(t.message||t))}}function se(e,t){return(t=t||this.namespace)?this.doc.createElementNS(t,e):this.doc.createElement(e)}function ae(){return function(e){if(e!==J&&null!==e){var t=!0;return function e(t,n,i){if(t!==J&&null!==t){if(!i(t))return!1;if(null!==t.nodes&&t.nodes.length)for(var o=0,r=t.nodes;o<r.length;o++){if(!s(r[o]))return!1}}return!0;function s(t){var o=t.kind;if("#fragment"===o)return!!i(t)&&e(t.contentView,n,i);if("#container"!==o)return i(t);if(!i(t))return!1;var r=t,s=r.subKind;if("##block"===s){var a=r.views;if(null!==a)for(var l=0,c=a;l<c.length;l++){var d=c[l];if(!e(d,n,i))return!1}if(n&&r.viewPool)for(var f=0,u=r.viewPool;f<u.length;f++){var h=u[f];if(!e(h,n,i))return!1}}else if("##cpt"===s){var p=r.template;if(null!==p)return e(p.view,n,i)}else"##async"===s&&console.log("TODO: support scanNode for @async block");return!0}}(e,!1,(function(e){if(!t)return!1;var n=e.kind;if("#view"===n){var i=e;if(i.cm){var o=i.doc.createDocumentFragment();i.domNode=o,i.cmAppends=[function(e){e.domNode?Ee(e.domNode,o):e.domNode=o}]}!function(e){if(e.instructions){var t=e.instructions.slice(0),n=t.length;if(e.instructions.splice(0,n),e.instructions=void 0,n)for(var i=0;n>i;i+=2)t[i].apply(null,t[i+1])}}(i)}else if("#element"===n||"#text"===n)return t=!1;return!0})),t}return!0}(this)}function le(e,t,n,i){var o={kind:"#view",uid:"view"+ ++U,nodes:null,namespace:void 0,namespaces:void 0,doc:null,parentView:e,cm:!0,cmAppends:null,lastRefresh:0,container:null,projectionHost:null,template:i,rootDomNode:null,anchorNode:null,expressions:void 0,oExpressions:void 0,instructions:void 0,paramNode:void 0,createElement:se,isEmpty:ae};return e?de(o,e,t):o.doc="undefined"!=typeof document?document:null,o}function ce(e,t,n){if(n){var i=function(e){var t=e;for(;t&&!t.template;)t=t.parentView;return t}(e);if(i!==J&&null!==i)for(var o=i.template,r=n.length,s=0;r>s;s++)o.registerLabel(n[s],t)}}function de(e,t,n){if(e.parentView=t,e.doc=t.doc,e.container=n,e.rootDomNode=t.rootDomNode,t.namespace){var i=t.namespace;e.namespace=i,e.namespaces=[i]}}function fe(e,t,n,i,o){return function(){return new ie(e,t,n,i,o)}}var ue=[];function he(e,t,n){var i=e.cm;return i?(e.nodes=new Array(n),e.cmAppends||(e.cmAppends=[],e.anchorNode&&(e.cmAppends[0]=function(t,n){t.domNode?Te(t.domNode,e.anchorNode,e.rootDomNode):t.domNode=e.rootDomNode}))):e.cmAppends=null,i}function pe(e,t,n,i,o){var r,s=e.nodes[n];if(s&&s.attached||Y(e,"Invalid ζview call: container must be attached ("+(s?s.uid:"XX")+") - pview: "+e.uid+" containerIdx: "+n),"#container"===s.kind)if("##block"===s.subKind){var a=(l=s).views;1===o&&(l.insertFn=null),1===o&&l.views.length>1?(l.previousNbrOfViews=a.length,r=a.shift(),l.viewPool.length?l.viewPool=a.concat(l.viewPool):l.viewPool=a,l.views=[r]):(r=l.views[o-1])||(l.viewPool.length>0?(l.insertFn||(l.insertFn=ve(e,l)),ge((r=a[o-1]=l.viewPool.shift()).nodes[0],l.insertFn)):((r=a[o-1]=le(e,l)).nodes=new Array(i),e.cm&&l.cmAppend?r.cmAppends=[l.cmAppend]:e.cm||(r.cmAppends=[ve(e,l)]))),l.lastRefresh=r.lastRefresh=e.lastRefresh}else{var l;(r=(l=s).contentView)||((r=l.contentView=le(e,l)).nodes=new Array(i)),r.lastRefresh=e.lastRefresh}else if("#param"===s.kind){var c=s;(r=c.contentView)||(r=c.contentView=le(e,null),c.viewPool&&(c.viewPool[c.viewInstanceIdx]=r),r.nodes=new Array(i),r.paramNode=c),r.lastRefresh=e.lastRefresh}return r}function ve(e,t){var n=function e(t,n){for(;;){if(n||Y(t,"Internal error - findNextSiblingDomNd: nd cannot be undefined"),0===n.idx){if(!n.attached)return{position:"defer",parentDomNd:void 0};if(n.domNode.nodeType===Q)return{position:"lastChild",parentDomNd:n.domNode};var i=t.parentView;if(i){if(t.projectionHost){var o=t.projectionHost.hostNode;return"#element"===o.kind?{position:"lastChild",parentDomNd:o.domNode}:e(t.projectionHost.view,o)}return e(i,t.container)}return{position:"lastOnRoot",parentDomNd:t.rootDomNode,nextDomNd:t.anchorNode}}if(!n.nextSibling){var r=t.nodes[n.parentIdx];return"#element"===r.kind?{position:"lastChild",parentDomNd:Pe(t,n)}:e(t,r)}var s=a(t,n.nextSibling,Pe(t,n));if(s)return s;n=n.nextSibling}function a(e,t,n){if(!t)return null;if("#element"===t.kind||"#text"===t.kind)return{position:"beforeChild",nextDomNd:t.domNode,parentDomNd:n};if("#fragment"===t.kind){for(var i=void 0,o=t.firstChild;o;){if(i=a(e,o,n))return i;o=o.nextSibling}if(t.contentView){var r=t.contentView;if(r.nodes)return a(r,r.nodes[0],n)}return null}if("#container"===t.kind){var s=t;i=null;if("##block"===s.subKind)for(var l=s.views,c=l.length,d=0;c>d&&!(i=a(l[d],l[d].nodes[0],n));d++);else if("##cpt"===s.subKind){var f=s.template.view;i=a(f,f.nodes[0],n)}return i||null}throw new Error("TODO findFirstDomNd: "+t.kind)}}(e,t),i=n.position,o=n.nextDomNd,r=n.parentDomNd;return"beforeChild"===i||"lastOnRoot"===i?function(e,t){e.domNode?Te(e.domNode,o,r):e.domNode=r}:"lastChild"===i?function(e,t){e.domNode?Ee(e.domNode,r):e.domNode=r}:function(){console.warn("TODO: VALIDATE VIEW APPEND: ",i),function(e,t,n){void 0===t&&(t="");n&&e.uid!==n||(console.log(""),console.log(Fe),t&&console.log(t+":"),function e(t,n){void 0===n&&(n="");if(!t.nodes)return void console.log(""+n+t.uid+" - no nodes");var i=t.parentView?t.parentView.uid:"XX",o=t.projectionHost,r=o?" >>> projection host: "+o.hostNode.uid+" in "+o.view.uid:"";console.log(n+"*"+t.uid+"* cm:"+t.cm+" isTemplate:"+(void 0!==t.template)+" parentView:"+i+r);for(var s,a=t.nodes.length,l="",c=0;a>c;c++)if(s=t.nodes[c])if(l=s.uid.length<5?["     ","    ","   ","  "," "][s.uid.length]:"","#container"===s.kind){var d=s,f=d.domNode?d.domNode.uid:"XX";if(console.log(n+"["+c+"] "+s.uid+l+" "+f+" attached:"+(s.attached?1:0)+" parent:"+C(s.parentIdx)+" nextSibling:"+(s.nextSibling?s.nextSibling.uid:"X")),"##block"===d.subKind){var u=d,h=u.views.length;if(h)for(var p=0;h>p;p++)if(u.views[p]){var v=u.views[p];f=v.rootDomNode?v.rootDomNode.$uid:"XX",console.log(n+"  - view #"+p),e(u.views[p],"    "+n)}else console.log(n+"  - view #"+p+" UNDEFINED");else console.log(n+"  - no child views")}else if("##cpt"===d.subKind){var m=d,g=m.template,w=m.contentView;w?(console.log(n+"  - light DOM:"),e(w,"    "+n)):console.log(n+"  - light DOM: none"),g?(console.log(n+"  - shadow DOM:"),e(g.view,"    "+n)):console.log(n+"  - no template")}else console.log(n+"  - "+d.subKind+" container")}else{f=s.domNode?s.domNode.uid:"XX";var b="";if(s.domNode&&"#text"===s.kind)b=" text=#"+s.domNode._textContent+"#";else if("#fragment"===s.kind||"#element"===s.kind){for(var y=[],N=s.firstChild;N;)y.push(N.uid),N=N.nextSibling;b=" children:["+y.join(", ")+"]";var x=s.contentView;x&&(b+=" >>> content view: "+x.uid)}console.log(n+"["+s.idx+"] "+s.uid+l+" "+f+" attached:"+(s.attached?1:0)+" parent:"+C(s.parentIdx)+" nextSibling:"+(s.nextSibling?s.nextSibling.uid:"X")+b)}else console.log(n+"["+c+"] XX");function C(e){return e<0?"X":e}}(e))}(e,"getViewInsertFunction for "+t.uid)}}function me(e,t,n){var i=e.nodes[t];if(i&&"##block"===i.subKind){var o=i,r=o.lastRefresh;if(n||r===e.lastRefresh){var s=o.views.length;if(!n){if(s!==o.previousNbrOfViews)for(var a=o.viewPool,l=a.length,c=void 0,d=0;l>d;d++)Ve(c=a[d],c.nodes[0]);o.previousNbrOfViews=s}}else Ve(e,o)}}function ge(e,t,n){if(!e.attached){if(t(e,!0),e.attached=!0,"#fragment"===e.kind)for(var i=e.firstChild;i;)ge(i,t),i=i.nextSibling;else if("#container"===e.kind){var o=e.subKind;if("##cpt"===o){var r=e.template,s=r?r.view.nodes[0]:null;r&&(r.forceRefresh=!0),s&&ge(s,t)}else if("##block"===o)for(var a=e.views,l=0;a.length>l;l++)ge(a[l].nodes[0],t)}if("#fragment"===e.kind||"#element"===e.kind){var c=e.contentView;c&&ge(c.nodes[0],t)}}}function we(e,t,n){if(n)for(var i=n.length,o=0;i>o;o++)me(e,n[o],e.cm);e.cm&&(e.cm=!1,e.cmAppends=null)}function be(e,t,n,i,o,r,s,a,l){if(t){var c=e.createElement(o);if(a)for(var d=a.length,f=0;d>f;f+=2)c.setAttribute(a[f],a[f+1]);if(l){d=l.length;for(var u=0;d>u;u+=2)c[l[u]]=l[u+1]}var h={kind:"#element",uid:"elt"+ ++U,idx:n,parentIdx:-1,ns:"",domNode:c,attached:!0,nextSibling:void 0,firstChild:void 0,lastChild:void 0,contentView:null};e.nodes[n]=h,ce(e,c,s),e.cmAppends[i](h,!1),r&&(e.cmAppends[i+1]=function(e,t){e.domNode?Ee(e.domNode,c):e.domNode=c,t||function(e,t){e.firstChild?(e.lastChild.nextSibling=t,e.lastChild=t):(e.firstChild=e.lastChild=t,t.nextSibling=void 0);t.parentIdx=e.idx}(h,e)})}else s&&ce(e,e.nodes[n].domNode,s)}function ye(e,t,n,i,o,r,s,a){for(var l,c=[],d=8;d<arguments.length;d++)c[d-8]=arguments[d];if(a){var f=void 0,u=void 0,h=!1;f=t?s.slice(0):(l=e.nodes[i]).pieces;for(var p=0;a>p;p++)(u=xe(e,n,c[p]))!==ue&&(h=!0,f[1+2*p]=null==u?"":u);if(!t)return h&&(l.domNode.textContent=f.join("")),void ce(e,l.domNode,r);l=v(e.doc.createTextNode(f.join("")),f),ce(e,l.domNode,r)}else{if(!t)return void(r&&ce(e,e.nodes[i].domNode,r));l=v(e.doc.createTextNode(s),void 0),ce(e,l.domNode,r)}function v(e,t){return{kind:"#text",uid:"txt"+ ++U,domNode:e,attached:!0,idx:i,parentIdx:-1,pieces:t,nextSibling:void 0}}e.nodes[i]=l,e.cmAppends[o](l,!1)}function Ne(e,t,n){if(e.expressions){var i=e.expressions;if(i.length>t&&i[t]===n)return ue;i[t]=n}else e.expressions=[],e.expressions[t]=n;return n}function xe(e,t,n){if(t){if(n[2]){var i=e.oExpressions;return i[2*n[0]]?ue:(i[2*n[0]]=1,n[1])}return Ne(e,n[0],n[1])}return n}function Ce(e,t,n,i,o){if(t){var r=function(e,t,n){var i;if(1===n)i={kind:"#container",subKind:"##block",uid:"cnb"+ ++U,idx:e,parentIdx:-1,ns:"",domNode:void 0,attached:!0,nextSibling:void 0,views:[],viewPool:[],cmAppend:t,lastRefresh:0,previousNbrOfViews:0,insertFn:null};else{if(2!==n)return console.warn("TODO: new cnt type"),null;i={kind:"#container",subKind:"##cpt",uid:"cnc"+ ++U,idx:e,parentIdx:-1,ns:"",domNode:void 0,attached:!0,nextSibling:void 0,cmAppend:t,template:null,data:null,contentView:null,dynamicParams:void 0}}return i}(n,null,o);return e.nodes[n]=r,function(e,t,n){if(e.cmAppends){var i=e.cmAppends[n];i?(t.cmAppend=function(e,t){i(e,!0)},i(t,!1)):console.log("ERROR?",i===J)}}(e,r,i),r}}function ke(e,t,n,i,o,r,s,a,l,c){var d;if(n=n||0,t){if(!(d=e.nodes[i]||Ce(e,t,i,o,2)).template){var f=xe(e,n,r);if(f===ue)return void Y(e,"Invalid component ref");var u=d.template=f();de(u.view,e,d),u.disconnectObserver();var h=d.data=u.api;if(l){var p=l.length;if(!h&&p)Y(e,"Invalid parameter: "+l[0]);else for(var v=0;p>v;v+=2)y(h,l[v])?h[l[v]]=l[v+1]:Y(e,"Invalid parameter: "+l[v])}}}else(d=e.nodes[i]).lists&&(d.lists.sizes={});c&&(d.dynamicParams={}),0===n&&s&&function(e,t,n,i,o){var r=(n=n||e.nodes[t])?n.template:void 0;if(void 0!==r){var s=e.cm;if(r.view.lastRefresh=e.lastRefresh-1,function(e){if(e.lists)for(var t=e.lists,n=t.listNames,i=void 0,o=void 0,r=void 0,s=void 0,a=0;n.length>a;a++)i=n[a],o=t.sizes[i]||0,r=e.data[i],s=r.length,o<s&&r.splice(o,s-o)}(n),n.contentView){r.api.$content=n.contentView;var a=n.contentView.instructions;a&&a.length&&(r.forceRefresh=!0)}if(s)r.view.cmAppends=[n.cmAppend];else{if(o)for(var l=o.length,c=(n?n.dynamicParams:{})||{},d=r.api,f=0;l>f;f++)c[o[f]]||D(d,o[f]);var u=r.view.nodes[0];if(!u.attached){r.forceRefresh=!0;var h=ve(e,n);ge(u,h)}}i&&ce(e,r.api,i),r.render()}}(e,i,d,a,c)}function De(e,t,n,i,o){if(o!==ue){var r=xe(e,t,o);if(r!==ue){var s=e.nodes[n].domNode;void 0===r?s.removeAttribute(i):s.setAttribute(i,r)}}}function Pe(e,t){if(0===t.idx&&e.projectionHost){if(!t.attached)return null;var n=e.projectionHost.hostNode;return"#element"===n.kind?n.domNode:Pe(e.projectionHost.view,n)}return 0===t.idx?e.parentView?Pe(e.parentView,e.container):e.rootDomNode:e.nodes[t.parentIdx].domNode}function Ve(e,t){if(t&&t.attached)if("#text"===t.kind||"#element"===t.kind){var n=Pe(e,t);t.attached=!1,n?n.removeChild(t.domNode):Y(e,"Internal error - parent not found for: "+t.uid)}else if("#container"===t.kind){if("##block"===t.subKind){for(var i=t,o=i.views,r=o.length,s=void 0,a=0;r>a;a++)s=o[a].nodes[0],Ve(o[a],s),s.attached=!1,"#container"!==s.kind&&"#fragment"!==s.kind||(s.domNode=void 0);i.views=[],i.previousNbrOfViews=0,i.viewPool=o.concat(i.viewPool)}else if("##cpt"===t.subKind){var l=t.template;s=l.view.nodes[0];Ve(l.view,s),s.attached=!1,"#container"!==s.kind&&"#fragment"!==s.kind||(s.domNode=void 0)}}else if("#fragment"===t.kind){var c=t;if(c.attached=!1,c.contentView)Ve(c.contentView,c.contentView.nodes[0]);else if(c.firstChild)for(var d=c.firstChild;d;)Ve(e,d),d=d.nextSibling;c.domNode=void 0}else"#param"===t.kind?console.warn("TODO removeFromDom for param nodes"):console.warn("RemoveFromDom for "+t.kind)}var Ae=function(e,t){return e||(e=R,t=3),function(n,i){var o="ΔΔ"+i,r=n[a];r||(r=n[a]={}),r[i]=t?1===t?R:j:e,n[o]=void 0,function(e,t,n,i){i&&delete e[t]&&Object.defineProperty(e,t,i)}(n,i,0,{get:function(){return function(e,t,n,i,o){e.ΔComputeDependencies&&(e.ΔComputeDependencies[n]=!0);var r=e[t];(void 0===r||h&&null===r)&&(r=e[t]=!h&&o?o>1?void 0:null:i(),F(e,r));return r}(this,o,i,e,t)},set:function(t){$(this,i,o,t,e,this)},enumerable:!0,configurable:!0})}},Ie=function(e){var t=e.ΔFactory;if(t)return t;function n(t){return new e}return n[l]=!0,e[s]=n,n},Re=I,Oe=B;function je(e){e.prototype[ee]=!0,P(e)}function $e(e){e.prototype[te]=!0,P(e)}function Se(e,t){return!0===e.prototype[t]}function Ee(e,t,n){t.appendChild(e)}function Te(e,t,n,i){n.insertBefore(e,t)}var Fe="-------------------------------------------------------------------------------";function Le(e){return void 0===e&&(e=100),n(this,void 0,void 0,(function(){return i(this,(function(t){return[2,new Promise((function(t){setTimeout(t,e)}))]}))}))}document.getElementById("reload").addEventListener("click",(function(){location.reload()}));var Xe,Ke,Me,He,We,_e,ze=function(){function n(){}return e([Ae(Re),t("design:type",String)],n.prototype,"url",void 0),n=e([je],n)}(),qe=function(){function o(){}return o.prototype.$init=function(){return n(this,void 0,void 0,(function(){var e,t;return i(this,(function(n){switch(n.label){case 0:return[4,Le(500)];case 1:return n.sent(),[4,fetch(this.$api.url)];case 2:return e=n.sent(),t=this,[4,e.json()];case 3:return t.photos=n.sent(),[2]}}))}))},e([Ae(Ie(ze)),t("design:type",ze)],o.prototype,"$api",void 0),e([Ae(Oe(),2),t("design:type",Array)],o.prototype,"photos",void 0),o=e([$e],o)}(),Be=(Xe=["class","photos"],Ke=["class","loading"],Me=["class","no_results"],He=["",""],We=[1,2,3],_e=[0],fe("photos","photos/photos.ts",{},(function(e,t,n){var i,o,r,s,a,l,c,d=0,f=0,u=0,h=0,p=he(e,0,4),v=t.photos;if(be(e,p,0,0,"div",1,0,Xe),Ce(e,p,1,1,1),Ce(e,p,2,1,1),Ce(e,p,3,1,1),void 0===v)be(i=pe(e,0,1,2,++d),o=i.cm,0,0,"div",1,0,Ke),ye(i,o,0,1,1,0," loading... ",0),we(i);else if(0===v.length)be(r=pe(e,0,2,2,++f),s=r.cm,0,0,"div",1,0,Me),ye(r,s,0,1,1,0," no photos ",0),we(r);else{h=0,Ce(a=pe(e,0,3,1,++u),a.cm,0,0,1);for(var m=0,g=v;m<g.length;m++){var w=g[m];be(l=pe(a,0,0,4,++h),c=l.cm,0,0,"figure",1),be(l,c,1,1,"img",0),De(l,0,1,"src",Ne(l,0,w.thumbnailUrl)),De(l,0,1,"alt",Ne(l,1,w.title)),be(l,c,2,1,"figcaption",1),ye(l,c,0,3,2,0,He,1,Ne(l,2,w.title)),we(l)}we(a,0,_e)}we(e,0,We)}),qe));(function(){var e={},t=["url","https://jsonplaceholder.typicode.com/photos?_limit=4"];return fe("main","photos/photos.ts",e,(function(e){ke(e,he(e,0,1),0,0,0,Ne(e,0,Be),1,0,t),we(e)}))})()().attach(document.body).render()}();
