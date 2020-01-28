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
    ***************************************************************************** */function e(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s}function t(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}var n="ΔTrackable",i="ΔChangeVersion",r="ΔDefFactories",o="ΔΔProxy",s="ΔIsProxy",a=!1;function c(e){return e&&e.ΔTrackable?e.ΔMd?e.ΔMd:e.ΔMd={parents:void 0,refreshCtxt:void 0,watchers:void 0}:null}var l=Array.isArray;function d(e,t){e&&(l(e)&&!e[s]?e.forEach(t):t(e))}function f(e,t){if(e&&t){if(e===t)return;if(l(e)){var n=e;if(1===n.length){if(n[0]===t)return}else{var i=n.indexOf(t);if(i>-1)return n.splice(i,1),1===n.length?n[0]:n}}}return e}function u(e,t){return e?l(e)&&!e[s]?(e.push(t),e):[e,t]:t}function h(e){return e&&!0===e[n]?e[i]:0}function p(e,t){return!(!e||"object"!=typeof e)&&"ΔΔ"+t in e}function v(e){return!(!e||!0!==e[n])}function m(e){return h(e)%2==1}function b(e,t){var n=c(e);return n&&t?(n.watchers=u(n.watchers,t),m(e)&&j.register(e),t):null}function g(e,t){var n=e?e.ΔMd:void 0;n&&t&&(n.watchers=f(n.watchers,t))}function w(){return null}function C(){}function y(e,t){if(t){var n=c(t);n&&(n.parents=u(n.parents,e))}}w["ΔIsFactory"]=!0,C["ΔIsFactory"]=!0;var N=0,x=function(){function e(){this.id=++N}return e.prototype.register=function(e){var t=this,n=c(e);n&&!n.refreshCtxt&&(this.objects?this.objects.push(e):(this.objects=[e],Promise.resolve().then((function(){t.refresh()}))),n.refreshCtxt=this)},e.prototype.refresh=function(e){void 0===e&&(e=!0);var t=this.objects,n=t?t.length:0;if(n){$();for(var i,r,o=[],s=0;n>s;s++)(r=(i=t[s]).ΔMd).refreshCtxt&&(i.ΔChangeVersion%2&&(i.ΔChangeVersion+=1),r.refreshCtxt&&r.watchers&&o.push({dataNode:i,watchers:r.watchers})),r.refreshCtxt=void 0;this.objects=void 0,o.length&&(e?k(o):Promise.resolve().then((function(){k(o)})))}},e}();function k(e){for(var t=function(e){d(e.watchers,(function(t){t(e.dataNode)}))},n=0,i=e;n<i.length;n++){t(i[n])}}var j=new x;function $(){j.objects&&(j=new x)}var A=0,P={log:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.log.apply(console,arguments)},error:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.error.apply(console,arguments)}};function D(e,t){for(var n=e,i=[];n;){if(n.template){var r=n.template;i.push('\n>> Template: "'+r.templateName+'" - File: "'+r.filePath+'"')}n=n.parentView}P.error("IVY: "+t+i.join(""))}var O=void 0,V=/^ΔΔ(\w+)Emitter$/,E="ΔIsAPI",I="ΔIsController",R=0,T=function(){function e(e,t,n,i,r){this.templateName=e,this.filePath=t,this.staticCache=n,this.renderFn=i,this.$Class=r,this._uid=++R,this.tplApi=void 0,this.tplCtl=void 0,this.forceRefresh=!1,this.activeWatch=!1,this.lastRefreshVersion=0,this.processing=!1,this.rendering=!1,this.initialized=!1,this.labels=void 0,this.hasCtlClass=!1,this.view=function(e,t,n,i){var r={kind:"#view",uid:"view"+ ++A,nodes:null,namespace:void 0,namespaces:void 0,doc:null,parentView:e,cm:!0,cmAppends:null,lastRefresh:0,container:null,projectionHost:null,template:i,rootDomNode:null,anchorNode:null,expressions:void 0,oExpressions:void 0,instructions:void 0,paramNode:void 0,createElement:S,isEmpty:L};e?function(e,t,n){if(e.parentView=t,e.doc=t.doc,e.container=n,e.rootDomNode=t.rootDomNode,t.namespace){var i=t.namespace;e.namespace=i,e.namespaces=[i]}}(r,e,t):r.doc="undefined"!=typeof document?document:null;return r}(null,null,0,this);var o=this;this.watchCb=function(){o.notifyChange()},this.watchCb.$templateId=this._uid,this.$Class!==O&&(X(this.$Class,I)?this.hasCtlClass=!0:X(this.$Class,E)||v(this.$Class.prototype)||D(this.view,"Type of $ argument must be either a @Controller, an @API or a @Data class"))}return Object.defineProperty(e.prototype,"uid",{get:function(){return this._uid},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"document",{get:function(){return this.view.doc},set:function(e){this.view.doc=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"api",{get:function(){if(!this.tplApi)if(this.hasCtlClass){var e=this.controller;e&&e.$api&&(this.tplApi=e.$api)}else this.$Class&&(this.tplApi=new this.$Class,M(this.view,this.tplApi,this.staticCache));return this.tplApi},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"controller",{get:function(){if(!this.tplCtl&&this.hasCtlClass){var e=this.tplCtl=new this.$Class;if(p(e,"$template")&&(e.$template=this),p(e,"$logger")){var t=this.view;e.$logger={log:P.log,error:function(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];D(t,e+(n.length?" "+n.join(" "):""))}}}e.$api&&M(this.view,e.$api,this.staticCache)}return this.tplCtl},enumerable:!0,configurable:!0}),e.prototype.attach=function(e){if(this.view.rootDomNode)D(this.view,"Template host cannot be changed once set");else{var t=this.view;if(!t.doc)throw new Error("[iv] Template.document must be defined before calling Template.attach()");t.rootDomNode=e,t.anchorNode=t.doc.createComment("template anchor"),Z(t.anchorNode,e)}return this},e.prototype.registerLabel=function(e,t){this.labels||(this.labels={});var n=this.labels[e];n?n.push(t):n=this.labels[e]=[t]},e.prototype.query=function(e,t){if(void 0===t&&(t=!1),this.rendering)return null;if(e&&"#"!==e.charAt(0))return D(this.view,"[$template.query()] Invalid label argument: '"+e+"' (labels must start with #)"),null;var n=this.labels&&this.labels[e]||null;return n&&n.length?t?n:n[0]:null},e.prototype.notifyChange=function(){this.render()},e.prototype.disconnectObserver=function(){this.activeWatch&&(g(this.api,this.watchCb),g(this.controller,this.watchCb),this.activeWatch=!1)},e.prototype.render=function(e){if(this.processing)return this;this.processing=!0;var t=this.api,n=this.controller,i=this.view;if(n&&!v(n)&&(D(i,"Template controller must be a @Controller Object - please check: "+this.$Class.name),this.tplCtl=this.$Class=void 0),t&&e)for(var r in m(t)||$(),this.disconnectObserver(),e)e.hasOwnProperty(r)&&(t[r]=e[r]);var o=!this.forceRefresh,s=i.nodes;if(s&&s[0]&&s[0].attached||(o=!1),o&&h(t)+h(n)>this.lastRefreshVersion&&(o=!1),!o){n&&(this.initialized||(F(i,n,"$init","controller"),this.initialized=!0),F(i,n,"$beforeRender","controller")),this.rendering=!0,this.labels=void 0,i.lastRefresh++,i.instructions=void 0;try{this.renderFn(i,this.hasCtlClass?n:t,t,this)}catch(e){D(i,"Template execution error\n"+(e.message||e))}this.rendering=!1,n&&F(i,n,"$afterRender","controller"),function(e,t){if(void 0===t&&(t=!1),e){var n=e.ΔMd;n&&n.refreshCtxt?n.refreshCtxt.refresh(!0):t&&$()}}(t),this.forceRefresh=!1,this.lastRefreshVersion=h(t)+h(n)}return this.activeWatch||(b(t,this.watchCb),n&&b(n,this.watchCb),this.activeWatch=!0),this.processing=!1,this},e}();function M(e,t,n){var i=n.events;if(void 0===i){var r=void 0;for(var o in t)if(o.match(V)){var s=RegExp.$1;r||(r=[]),"function"!=typeof t[s+"Emitter"].init?D(e,"Invalid EventEmitter: "+s+"Emitter"):(r.push(s+"Emitter"),r.push(s),t[s+"Emitter"].init(s,t))}n.events=r||null}else if(null!==i)for(var a=i.length,c=0;a>c;c+=2)t[i[c]].init(i[c+1],t)}function F(e,t,n,i){if("function"==typeof t[n])try{t[n]()}catch(t){D(e,i+" "+n+" hook execution error\n"+(t.message||t))}}function S(e,t){return(t=t||this.namespace)?this.doc.createElementNS(t,e):this.doc.createElement(e)}function L(){return function(e){if(e!==O&&null!==e){var t=!0;return function e(t,n,i){if(t!==O&&null!==t){if(!i(t))return!1;if(null!==t.nodes&&t.nodes.length)for(var r=0,o=t.nodes;r<o.length;r++){if(!s(o[r]))return!1}}return!0;function s(t){var r=t.kind;if("#fragment"===r)return!!i(t)&&e(t.contentView,n,i);if("#container"!==r)return i(t);if(!i(t))return!1;var o=t,s=o.subKind;if("##block"===s){var a=o.views;if(null!==a)for(var c=0,l=a;c<l.length;c++){var d=l[c];if(!e(d,n,i))return!1}if(n&&o.viewPool)for(var f=0,u=o.viewPool;f<u.length;f++){var h=u[f];if(!e(h,n,i))return!1}}else if("##cpt"===s){var p=o.template;if(null!==p)return e(p.view,n,i)}else"##async"===s&&console.log("TODO: support scanNode for @async block");return!0}}(e,!1,(function(e){if(!t)return!1;var n=e.kind;if("#view"===n){var i=e;if(i.cm){var r=i.doc.createDocumentFragment();i.domNode=r,i.cmAppends=[function(e){e.domNode?Z(e.domNode,r):e.domNode=r}]}!function(e){if(e.instructions){var t=e.instructions.slice(0),n=t.length;if(e.instructions.splice(0,n),e.instructions=void 0,n)for(var i=0;n>i;i+=2)t[i].apply(null,t[i+1])}}(i)}else if("#element"===n||"#text"===n)return t=!1;return!0})),t}return!0}(this)}function W(e,t,n){if(n){var i=function(e){var t=e;for(;t&&!t.template;)t=t.parentView;return t}(e);if(i!==O&&null!==i)for(var r=i.template,o=n.length,s=0;o>s;s++)r.registerLabel(n[s],t)}}var H=[];function K(e,t,n){var i=e.nodes[t];if(i&&"##block"===i.subKind){var r=i,o=r.lastRefresh;if(n||o===e.lastRefresh){var s=r.views.length;if(!n){if(s!==r.previousNbrOfViews)for(var a=r.viewPool,c=a.length,l=void 0,d=0;c>d;d++)Y(l=a[d],l.nodes[0]);r.previousNbrOfViews=s}}else Y(e,r)}}function z(e,t,n,i,r,o,s,a,c){if(t){var l=e.createElement(r);if(a)for(var d=a.length,f=0;d>f;f+=2)l.setAttribute(a[f],a[f+1]);if(c){d=c.length;for(var u=0;d>u;u+=2)l[c[u]]=c[u+1]}var h={kind:"#element",uid:"elt"+ ++A,idx:n,parentIdx:-1,ns:"",domNode:l,attached:!0,nextSibling:void 0,firstChild:void 0,lastChild:void 0,contentView:null};e.nodes[n]=h,W(e,l,s),e.cmAppends[i](h,!1),o&&(e.cmAppends[i+1]=function(e,t){e.domNode?Z(e.domNode,l):e.domNode=l,t||function(e,t){e.firstChild?(e.lastChild.nextSibling=t,e.lastChild=t):(e.firstChild=e.lastChild=t,t.nextSibling=void 0);t.parentIdx=e.idx}(h,e)})}else s&&W(e,e.nodes[n].domNode,s)}function _(e,t,n,i,r,o,s,a){for(var c,l=[],d=8;d<arguments.length;d++)l[d-8]=arguments[d];if(a){var f=void 0,u=void 0,h=!1;f=t?s.slice(0):(c=e.nodes[i]).pieces;for(var p=0;a>p;p++)(u=B(e,n,l[p]))!==H&&(h=!0,f[1+2*p]=null==u?"":u);if(!t)return h&&(c.domNode.textContent=f.join("")),void W(e,c.domNode,o);c=v(e.doc.createTextNode(f.join("")),f),W(e,c.domNode,o)}else{if(!t)return void(o&&W(e,e.nodes[i].domNode,o));c=v(e.doc.createTextNode(s),void 0),W(e,c.domNode,o)}function v(e,t){return{kind:"#text",uid:"txt"+ ++A,domNode:e,attached:!0,idx:i,parentIdx:-1,pieces:t,nextSibling:void 0}}e.nodes[i]=c,e.cmAppends[r](c,!1)}function q(e,t,n){if(e.expressions){var i=e.expressions;if(i.length>t&&i[t]===n)return H;i[t]=n}else e.expressions=[],e.expressions[t]=n;return n}function B(e,t,n){if(t){if(n[2]){var i=e.oExpressions;return i[2*n[0]]?H:(i[2*n[0]]=1,n[1])}return q(e,n[0],n[1])}return n}function U(e,t,n,i,r,o,s,a){if(t){var c=e.nodes[i];if("#element"===c.kind){var l=c.domNode;if(!l)return void D(e,"Cannot set "+r+" event listener: undefined DOM node");var d=h(l);s&&!1!==(a=a||{}).passive&&(a.passive=!0),l.addEventListener(r,(function(e){d.callback&&d.callback(e)}),a)}else if("#container"===c.kind){var f=c.template;f?u(f.api,!1):D(e,"Cannot set "+r+" event listener: undefined component template")}else"#param"===c.kind?u(c.data,!0):"#decorator"===c.kind&&u(c.api,!0)}else e.nodes[n].callback=o;function u(t,n){if(t&&p(t,r+"Emitter")){var i=t[r+"Emitter"];if(i.addListener&&"function"==typeof i.addListener){var o=h(null);i.addListener((function(e){o.callback&&o.callback(e)})),n&&"function"==typeof i.init&&i.init(r,t)}else D(e,"Invalid event emitter for: "+r)}else D(e,"Unsupported event: "+r)}function h(t){var r={kind:"#listener",uid:"evt"+ ++A,idx:n,parentIdx:i,nextSibling:void 0,domNode:t,attached:!0,callback:o};return e.nodes[n]=r,r}}function Y(e,t){if(t&&t.attached)if("#text"===t.kind||"#element"===t.kind){var n=function e(t,n){if(0===n.idx&&t.projectionHost){if(!n.attached)return null;var i=t.projectionHost.hostNode;return"#element"===i.kind?i.domNode:e(t.projectionHost.view,i)}return 0===n.idx?t.parentView?e(t.parentView,t.container):t.rootDomNode:t.nodes[n.parentIdx].domNode}(e,t);t.attached=!1,n?n.removeChild(t.domNode):D(e,"Internal error - parent not found for: "+t.uid)}else if("#container"===t.kind){if("##block"===t.subKind){for(var i=t,r=i.views,o=r.length,s=void 0,a=0;o>a;a++)s=r[a].nodes[0],Y(r[a],s),s.attached=!1,"#container"!==s.kind&&"#fragment"!==s.kind||(s.domNode=void 0);i.views=[],i.previousNbrOfViews=0,i.viewPool=r.concat(i.viewPool)}else if("##cpt"===t.subKind){var c=t.template;s=c.view.nodes[0];Y(c.view,s),s.attached=!1,"#container"!==s.kind&&"#fragment"!==s.kind||(s.domNode=void 0)}}else if("#fragment"===t.kind){var l=t;if(l.attached=!1,l.contentView)Y(l.contentView,l.contentView.nodes[0]);else if(l.firstChild)for(var d=l.firstChild;d;)Y(e,d),d=d.nextSibling;l.domNode=void 0}else"#param"===t.kind?console.warn("TODO removeFromDom for param nodes"):console.warn("RemoveFromDom for "+t.kind)}var G=function(e){var t=e.prototype;t[n]=!0,t[i]=0},J=function(e,t){return e||(e=w,t=3),function(n,i){var s="ΔΔ"+i,c=n[r];c||(c=n[r]={}),c[i]=t?1===t?w:C:e,n[s]=void 0,function(e,t,n,i){i&&delete e[t]&&Object.defineProperty(e,t,i)}(n,i,0,{get:function(){return function(e,t,n,i,r){e.ΔComputeDependencies&&(e.ΔComputeDependencies[n]=!0);var o=e[t];(void 0===o||a&&null===o)&&(o=e[t]=!a&&r?r>1?void 0:null:i(),y(e,o));return o}(this,s,i,e,t)},set:function(t){!function(e,t,n,i,r,s){var a=v(i);if(e.ΔComputeDependencies)return void console.error("[Trax] @computed properties must not mutate the Data object when calculated");i&&!a&&r.ΔCreateProxy&&(i=r.ΔCreateProxy(i)||i,a=v(i));var c=!1,l=s[n];m(e)?c=l!==i:l!==i&&(!function e(t){if(!v(t))return;var n=!0;m(t)?n=!1:t.ΔChangeVersion+=1;if(j.register(t),n){var i=t.ΔMd;i&&i.parents&&d(i.parents,(function(t){e(t)}))}}(e),c=!0);c&&(a&&void 0===i&&(i=null),(a||l&&v(l))&&function(e,t,n){(function(e,t){if(t){var n=t.ΔMd;n&&n.parents&&(n.parents=f(n.parents,e))}})(e,t),y(e,n)}(e,l,i),s[n]=i,function(e,t,n,i,r){var s=e?e.ΔMd:void 0;if(s&&s.trackers){var a=e[o]||e;d(s.trackers,(function(e){e(a,t,n,i,r)}))}}(e,"set",t,l,i))}(this,i,s,t,e,this)},enumerable:!0,configurable:!0})}},Q={};function X(e,t){return!0===e.prototype[t]}function Z(e,t,n){t.appendChild(e)}function ee(){this.count=0}var te,ne,ie,re,oe,se,ae,ce,le,de,fe,ue,he=(se={},ae=["class","counter"],ce=["class","btn"],le=["class","val","tabIndex",0],de=["",""],fe=["class","btn"],ue=function(){function n(){this.ΔΔcount=42}return n.prototype.ΔDefault=function(e){switch(e){case"count":return 42}return Q},e([J(),t("design:type",Object)],n.prototype,"count",void 0),n=e([G],n)}(),te="counter",ne="events/events.ts",ie=se,re=function(e,t,n){var i,r,o,s=n.count,a=(r=11,(o=(i=e).cm)?(i.nodes=new Array(r),i.cmAppends||(i.cmAppends=[],i.anchorNode&&(i.cmAppends[0]=function(e,t){var n,r;e.domNode?(n=e.domNode,r=i.anchorNode,i.rootDomNode.insertBefore(n,r)):e.domNode=i.rootDomNode}))):i.cmAppends=null,o);z(e,a,0,0,"div",1,0,ae),U(e,a,1,0,"keydown",(function(e){return function(e,t){var n=parseInt(e.key,10);isNaN(n)||(t.count=n)}(e,t)})),z(e,a,2,1,"span",1,0,ce),U(e,a,3,2,"click",(function(){t.count--}),1),_(e,a,0,4,2,0," - ",0),z(e,a,5,1,"span",1,0,le),U(e,a,6,5,"dblclick",ee.bind(t)),_(e,a,0,7,2,0,de,1,q(e,0,s)),z(e,a,8,1,"span",1,0,fe),U(e,a,9,8,"click",(function(){return t.count++}),1,{capture:!0}),_(e,a,0,10,2,0," + ",0),function(e,t,n){if(n)for(var i=n.length,r=0;i>r;r++)K(e,n[r],e.cm);e.cm&&(e.cm=!1,e.cmAppends=null)}(e)},oe=ue,function(){return new T(te,ne,ie,re,oe)});he().attach(document.body).render(),he().attach(document.body).render({count:18})}();
