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
    ***************************************************************************** */function e(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}function t(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}var n="ΔTrackable",r="ΔChangeVersion",i="ΔDefFactories",o="ΔΔProxy",a="ΔIsProxy",s=!1;function d(e){return e&&e.ΔTrackable?e.ΔMd?e.ΔMd:e.ΔMd={parents:void 0,refreshCtxt:void 0,watchers:void 0}:null}var c=Array.isArray;function l(e,t){e&&(c(e)&&!e[a]?e.forEach(t):t(e))}function u(e,t){if(e&&t){if(e===t)return;if(c(e)){var n=e;if(1===n.length){if(n[0]===t)return}else{var r=n.indexOf(t);if(r>-1)return n.splice(r,1),1===n.length?n[0]:n}}}return e}function f(e,t){return e?c(e)&&!e[a]?(e.push(t),e):[e,t]:t}function p(e){return e&&!0===e[n]?e[r]:0}function h(e,t){return!(!e||"object"!=typeof e)&&"ΔΔ"+t in e}function v(e){return!(!e||!0!==e[n])}function m(e){return p(e)%2==1}function g(e,t){var n=d(e);return n&&t?(n.watchers=f(n.watchers,t),m(e)&&P.register(e),t):null}function b(e,t){var n=e?e.ΔMd:void 0;n&&t&&(n.watchers=u(n.watchers,t))}function y(e){var t=e.prototype;t[n]=!0,t[r]=0}function w(){return""}w["ΔIsFactory"]=!0;var N=w;function C(){return 0}C["ΔIsFactory"]=!0;var x=C;function $(){return null}function I(){}function E(e,t){if(t){var n=d(t);n&&(n.parents=f(n.parents,e))}}$["ΔIsFactory"]=!0,I["ΔIsFactory"]=!0;var O=0,k=function(){function e(){this.id=++O}return e.prototype.register=function(e){var t=this,n=d(e);n&&!n.refreshCtxt&&(this.objects?this.objects.push(e):(this.objects=[e],Promise.resolve().then((function(){t.refresh()}))),n.refreshCtxt=this)},e.prototype.refresh=function(e){void 0===e&&(e=!0);var t=this.objects,n=t?t.length:0;if(n){A();for(var r,i,o=[],a=0;n>a;a++)(i=(r=t[a]).ΔMd).refreshCtxt&&(r.ΔChangeVersion%2&&(r.ΔChangeVersion+=1),i.refreshCtxt&&i.watchers&&o.push({dataNode:r,watchers:i.watchers})),i.refreshCtxt=void 0;this.objects=void 0,o.length&&(e?j(o):Promise.resolve().then((function(){j(o)})))}},e}();function j(e){for(var t=function(e){l(e.watchers,(function(t){t(e.dataNode)}))},n=0,r=e;n<r.length;n++){t(r[n])}}var P=new k;function A(){P.objects&&(P=new k)}var D=0,T={log:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.log.apply(console,arguments)},error:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.error.apply(console,arguments)}};function V(e,t){for(var n=e,r=[];n;){if(n.template){var i=n.template;r.push('\n>> Template: "'+i.templateName+'" - File: "'+i.filePath+'"')}n=n.parentView}T.error("IVY: "+t+r.join(""))}var R=void 0,H=/^ΔΔ(\w+)Emitter$/,M=/^ΔΔ/,F=/([^ ]+)\s([^ ]+)/,L="ΔIsAPI",S="ΔIsController",W="ΔDefaultParam",q="ΔIoParams",K="ΔRequiredProps",z={$targetApi:"$1 cannot be used on DOM nodes",$targetElt:"$1 cannot be used on components that don't define #main elements"},U=0,_=function(){function e(e,t,n,r,i){this.templateName=e,this.filePath=t,this.staticCache=n,this.renderFn=r,this.$Class=i,this._uid=++U,this.tplApi=void 0,this.tplCtl=void 0,this.forceRefresh=!1,this.activeWatch=!1,this.lastRefreshVersion=0,this.processing=!1,this.rendering=!1,this.initialized=!1,this.labels=void 0,this.hasCtlClass=!1,this.view=function(e,t,n,r){var i={kind:"#view",uid:"view"+ ++D,attached:!1,nodes:null,namespace:void 0,namespaces:void 0,doc:null,parentView:e,cm:!0,cmAppends:null,lastRefresh:0,container:null,projectionHost:null,template:r,rootDomNode:null,anchorNode:null,expressions:void 0,oExpressions:void 0,instructions:void 0,paramNode:void 0,createElement:Y,isEmpty:G};e?function(e,t,n){if(e.parentView=t,e.doc=t.doc,e.container=n,e.rootDomNode=t.rootDomNode,t.namespace){var r=t.namespace;e.namespace=r,e.namespaces=[r]}}(i,e,t):i.doc="undefined"!=typeof document?document:null;return i}(null,null,0,this);var o=this;this.watchCb=function(){o.notifyChange()},this.watchCb.$templateId=this._uid,this.$Class!==R&&(be(this.$Class,S)?this.hasCtlClass=!0:be(this.$Class,L)||v(this.$Class.prototype)||V(this.view,"Type of $ argument must be either a @Controller, an @API or a @Data class"))}return e.prototype.dispose=function(e){void 0===e&&(e=!1);var t=this.view;this.disconnectObserver(),X(t,this.tplCtl,"$dispose",this.templateName),e&&t&&t.nodes&&t.nodes.length&&le(t,t.nodes[0])},Object.defineProperty(e.prototype,"uid",{get:function(){return this._uid},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"document",{get:function(){return this.view.doc},set:function(e){this.view.doc=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"api",{get:function(){if(!this.tplApi)if(this.hasCtlClass){var e=this.controller;e&&e.$api&&(this.tplApi=e.$api)}else this.$Class&&(this.tplApi=new this.$Class,B(this.view,this.tplApi,this.staticCache));return this.tplApi},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"controller",{get:function(){if(!this.tplCtl&&this.hasCtlClass){var e=this.tplCtl=new this.$Class;if(h(e,"$template")&&(e.$template=this),h(e,"$logger")){var t=this.view;e.$logger={log:T.log,error:function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];V(t,e+(n.length?" "+n.join(" "):""))}}}e.$api&&B(this.view,e.$api,this.staticCache)}return this.tplCtl},enumerable:!0,configurable:!0}),e.prototype.attach=function(e){if(this.view.rootDomNode)V(this.view,"Template host cannot be changed once set");else{var t=this.view;if(!t.doc)throw new Error("[iv] Template.document must be defined before calling Template.attach()");t.rootDomNode=e,t.anchorNode=t.doc.createComment("template anchor"),$e(t.anchorNode,e)}return this},e.prototype.registerLabel=function(e,t){this.labels||(this.labels={});var n=this.labels[e];n?n.push(t):n=this.labels[e]=[t]},e.prototype.query=function(e,t){if(void 0===t&&(t=!1),this.rendering)return null;if(e&&"#"!==e.charAt(0))return V(this.view,"[$template.query()] Invalid label argument: '"+e+"' (labels must start with #)"),null;var n=this.labels&&this.labels[e]||null;return n&&n.length?t?n:n[0]:null},e.prototype.notifyChange=function(){this.render()},e.prototype.disconnectObserver=function(){this.activeWatch&&(b(this.api,this.watchCb),b(this.controller,this.watchCb),this.activeWatch=!1)},e.prototype.render=function(e){if(this.processing)return this;this.processing=!0;var t=this.api,n=this.controller,r=this.view;if(n&&!v(n)&&(V(r,"Template controller must be a @Controller Object - please check: "+this.$Class.name),this.tplCtl=this.$Class=void 0),t&&e)for(var i in m(t)||A(),this.disconnectObserver(),e)e.hasOwnProperty(i)&&(t[i]=e[i]);var o=!this.forceRefresh,a=r.nodes;if(a&&a[0]&&a[0].attached||(o=!1),o&&p(t)+p(n)>this.lastRefreshVersion&&(o=!1),!o){n&&(this.initialized||(X(r,n,"$init","controller"),this.initialized=!0),X(r,n,"$beforeRender","controller")),this.rendering=!0,this.labels=void 0,r.lastRefresh++,r.instructions=void 0;try{this.renderFn(r,this.hasCtlClass?n:t,t,this)}catch(e){V(r,"Template execution error\n"+(e.message||e))}this.rendering=!1,n&&X(r,n,"$afterRender","controller"),function(e,t){if(void 0===t&&(t=!1),e){var n=e.ΔMd;n&&n.refreshCtxt?n.refreshCtxt.refresh(!0):t&&A()}}(t),this.forceRefresh=!1,this.lastRefreshVersion=p(t)+p(n)}return this.activeWatch||(g(t,this.watchCb),n&&g(n,this.watchCb),this.activeWatch=!0),this.processing=!1,this},e}();function B(e,t,n){var r=n.events;if(void 0===r){var i=void 0;for(var o in t)if(o.match(H)){var a=RegExp.$1;i||(i=[]),"function"!=typeof t[a+"Emitter"].init?V(e,"Invalid EventEmitter: "+a+"Emitter"):(i.push(a+"Emitter"),i.push(a),t[a+"Emitter"].init(a,t))}n.events=i||null}else if(null!==r)for(var s=r.length,d=0;s>d;d+=2)t[r[d]].init(r[d+1],t)}function X(e,t,n,r){if(t&&"function"==typeof t[n])try{t[n]()}catch(t){V(e,r+" "+n+" hook execution error\n"+(t.message||t))}}function Y(e,t){return(t=t||this.namespace)?this.doc.createElementNS(t,e):this.doc.createElement(e)}function G(){return function(e){if(e!==R&&null!==e){var t=!0;return function e(t,n,r){if(t!==R&&null!==t){if(!r(t))return!1;if(null!==t.nodes&&t.nodes.length)for(var i=0,o=t.nodes;i<o.length;i++){if(!a(o[i]))return!1}}return!0;function a(t){var i=t.kind;if("#fragment"===i)return!!r(t)&&e(t.contentView,n,r);if("#container"!==i)return r(t);if(!r(t))return!1;var o=t,a=o.subKind;if("##block"===a){var s=o.views;if(null!==s)for(var d=0,c=s;d<c.length;d++){var l=c[d];if(!e(l,n,r))return!1}if(n&&o.viewPool)for(var u=0,f=o.viewPool;u<f.length;u++){var p=f[u];if(!e(p,n,r))return!1}}else if("##cpt"===a){var h=o.template;if(null!==h)return e(h.view,n,r)}else"##async"===a&&console.log("TODO: support scanNode for @async block");return!0}}(e,!1,(function(e){if(!t)return!1;var n=e.kind;if("#view"===n){var r=e;if(r.cm){var i=r.doc.createDocumentFragment();r.domNode=i,r.cmAppends=[function(e){e.domNode?$e(e.domNode,i):e.domNode=i}]}!function(e){if(e.instructions){var t=e.instructions.slice(0),n=t.length;if(e.instructions.splice(0,n),e.instructions=void 0,n)for(var r=0;n>r;r+=2)t[r].apply(null,t[r+1])}}(r)}else if("#element"===n||"#text"===n)return t=!1;return!0})),t}return!0}(this)}function J(e,t,n){if(n){var r=function(e){var t=e;for(;t&&!t.template;)t=t.parentView;return t}(e);if(r!==R&&null!==r)for(var i=r.template,o=n.length,a=0;o>a;a++)i.registerLabel(n[a],t)}}var Q=[];function Z(e,t,n){var r=e.nodes[t];if(r&&"##block"===r.subKind){var i=r,o=i.lastRefresh;if(n||o===e.lastRefresh){var a=i.views.length;if(!n){if(a!==i.previousNbrOfViews)for(var s=i.viewPool,d=s.length,c=void 0,l=0;d>l;l++)le(c=s[l],c.nodes[0]),c.attached=!1;i.previousNbrOfViews=a}}else le(e,i)}}function ee(e,t,n,r,i,o,a,s,d){if(t){var c=e.createElement(i);if(s)for(var l=s.length,u=0;l>u;u+=2)c.setAttribute(s[u],s[u+1]);if(d){l=d.length;for(var f=0;l>f;f+=2)c[d[f]]=d[f+1]}var p={kind:"#element",uid:"elt"+ ++D,idx:n,parentIdx:-1,ns:"",domNode:c,attached:!0,nextSibling:void 0,firstChild:void 0,lastChild:void 0,contentView:null};e.nodes[n]=p,J(e,c,a),e.cmAppends[r](p,!1),o&&(e.cmAppends[r+1]=function(e,t){e.domNode?$e(e.domNode,c):e.domNode=c,t||te(p,e)})}else a&&J(e,e.nodes[n].domNode,a)}function te(e,t){e.firstChild?(e.lastChild.nextSibling=t,e.lastChild=t):(e.firstChild=e.lastChild=t,t.nextSibling=void 0),t.parentIdx=e.idx}function ne(e,t,n,r,i,o,a,s){for(var d,c=[],l=8;l<arguments.length;l++)c[l-8]=arguments[l];if(s){var u=void 0,f=void 0,p=!1;u=t?a.slice(0):(d=e.nodes[r]).pieces;for(var h=0;s>h;h++)(f=re(e,n,c[h]))!==Q&&(p=!0,u[1+2*h]=null==f?"":f);if(!t)return p&&(d.domNode.textContent=u.join("")),void J(e,d.domNode,o);d=v(e.doc.createTextNode(u.join("")),u),J(e,d.domNode,o)}else{if(!t)return void(o&&J(e,e.nodes[r].domNode,o));d=v(e.doc.createTextNode(a),void 0),J(e,d.domNode,o)}function v(e,t){return{kind:"#text",uid:"txt"+ ++D,domNode:e,attached:!0,idx:r,parentIdx:-1,pieces:t,nextSibling:void 0}}e.nodes[r]=d,e.cmAppends[i](d,!1)}function re(e,t,n){if(t){if(n[2]){var r=e.oExpressions;return r[2*n[0]]?Q:(r[2*n[0]]=1,n[1])}return function(e,t,n){if(e.expressions){var r=e.expressions;if(r.length>t&&r[t]===n)return Q;r[t]=n}else e.expressions=[],e.expressions[t]=n;return n}(e,n[0],n[1])}return n}function ie(e,t,n,r,i,o,a,s){var d,c=e.nodes[r],l=c.kind,u=R;if(a!==R&&s!==R&&null!==a&&"object"==typeof a&&(t&&"string"==typeof s&&v(a)&&!h(a,s)&&V(e,"Invalid property: '"+s+"'"),u=a[s]),"#container"===l)(function(e,t,n,r,i){if(r&&(!e.cm||h(r,i)))return!0;var o="";return n.template&&(o=" on <*"+n.template.templateName+"/>"),V(e,"Invalid parameter '"+i+"'"+o),!1})(e,0,c,d=c.data,o)&&(t&&xe(e,d,o),d[o]=u);else if("#param"===l)if(0===o){var f=c;f.dataHolder&&(f.dataHolder[f.dataName]=u,d=f.dataHolder,o=f.dataName,t&&xe(e,d,o,"."+o,!1,!0))}else d=function(e,t,n,r,i){if(0===i){if(n.dataHolder)return n.dataHolder[n.dataName]=r,n.dataHolder}else{if(n.data)return t&&!h(n.data,i)&&V(e,"Invalid param node parameter: "+i),n.data[i]=r,n.data;V(e,"Invalid param node parameter: "+i)}return null}(e,t,c,u,o),t&&xe(e,d,o,"."+c.dataName);else if("#decorator"===l){var m=c;d=m.api,0===o?(o=se(e,m,u),t&&o&&xe(e,d,o,m.refName,!0)):t&&!ae(e,m,o)||(t&&xe(e,d,o,m.refName),d[o]=u)}var b=c.bindings;if(b===R&&(b=c.bindings=[]),b[i]===R){if(d){var y={propertyHolder:a,propertyName:s,watchFn:g(d,(function(){var e=d[o],t=y.propertyHolder;if(t!==R&&null!==t&&y.propertyName!==R&&t[y.propertyName]!==e){var n=p(t);0===n||n%2==1?Promise.resolve().then((function(){t[y.propertyName]=e})):t[y.propertyName]=e}}))};b[i]=y}}else{var w=b[i];w.propertyHolder=a,w.propertyName=s}}function oe(e,t,n,r,i,o,a,s,d,c,l){var u;if(t){var f=e.nodes;if(void 0===a)V(e,"Undefined decorator reference: @"+o);else if("function"!=typeof a&&!0!==a.$isDecorator)V(e,"Invalid decorator reference: @"+o);else{var p=new a.$apiClass,h=a(p);if(u={kind:"#decorator",uid:"deco"+ ++D,idx:r,parentIdx:i,attached:!0,nextSibling:void 0,domNode:void 0,instance:h,api:p,refName:"@"+o,validProps:!0},f[r]=u,c)for(var v=c.length,m=0;v>m;m+=2)ae(e,u,c[m]),p[c[m]]=c[m+1]}}else u=e.nodes[r];if(u!==R){p=u.api;1===s&&se(e,u,d),J(e,p,l)}}function ae(e,t,n){return!!h(t.api,n)||(V(e,"Invalid decorator parameter '"+n+"' on "+t.refName),!1)}function se(e,t,n){var r=t.api,i=r[W];return i===R?(V(e,t.refName+" doesn't define any default parameter"),""):(r[i]=n,i)}function de(e,t,n){if(t){var r=n.api,i=e.nodes[n.parentIdx],o=null,a=null;if(void 0===i.kind)o=i;else if("#element"===i.kind)o=i.domNode;else if("#container"===i.kind&&"##cpt"===i.subKind){var s=i.template;a=s.api,o=s.query("#main")}else V(e,"Invalid decorator target for "+n.refName);null!==o&&h(r,"$targetElt")&&(r.$targetElt=o),null!==a&&h(r,"$targetApi")&&(r.$targetApi=a),n.validProps=function(e,t,n,r){if(t[K]!==R){var i=t[K],o=void 0,a=!0;for(var s in i)if((o=t[i[s]])===R||null===o){var d=ge(i[s]);r!==R&&r[d]!==R?V(e,(n+" "+d).replace(F,r[d])):V(e,d+" property is required for "+n),a=!1}return a}return!0}(e,n.api,n.refName,z),n.validProps&&X(e,n.instance,"$init",n.refName)}n.validProps&&X(e,n.instance,"$render",n.refName)}function ce(e,t,n,r){var i=e.nodes[r];i!==R&&de(e,t,i)}function le(e,t){if(t&&t.attached)if("#text"===t.kind||"#element"===t.kind){var n=function e(t,n){if(0===n.idx&&t.projectionHost){if(!n.attached)return null;var r=t.projectionHost.hostNode;return"#element"===r.kind?r.domNode:e(t.projectionHost.view,r)}return 0===n.idx?t.parentView?e(t.parentView,t.container):t.rootDomNode:t.nodes[n.parentIdx].domNode}(e,t);t.attached=!1,n?n.removeChild(t.domNode):V(e,"Internal error - parent not found for: "+t.uid)}else if("#container"===t.kind){if("##block"===t.subKind){for(var r=t,i=r.views,o=i.length,a=void 0,s=0;o>s;s++)a=i[s].nodes[0],le(i[s],a),i[s].attached=a.attached=!1,"#container"!==a.kind&&"#fragment"!==a.kind||(a.domNode=void 0);r.views=[],r.previousNbrOfViews=0,r.viewPool=i.concat(r.viewPool)}else if("##cpt"===t.subKind){var d=t.template;a=d.view.nodes[0];le(d.view,a),d.view.attached=a.attached=!1,"#container"!==a.kind&&"#fragment"!==a.kind||(a.domNode=void 0)}}else if("#fragment"===t.kind){var c=t;if(c.attached=!1,c.contentView)le(c.contentView,c.contentView.nodes[0]);else if(c.firstChild)for(var l=c.firstChild;l;)le(e,l),l=l.nextSibling;c.domNode=void 0}else"#param"===t.kind?console.warn("TODO removeFromDom for param nodes"):console.warn("RemoveFromDom for "+t.kind)}var ue=y,fe=function(e,t){return e||(e=$,t=3),function(n,r){var a="ΔΔ"+r,d=n[i];d||(d=n[i]={}),d[r]=t?1===t?$:I:e,n[a]=void 0,function(e,t,n,r){r&&delete e[t]&&Object.defineProperty(e,t,r)}(n,r,0,{get:function(){return function(e,t,n,r,i){e.ΔComputeDependencies&&(e.ΔComputeDependencies[n]=!0);var o=e[t];(void 0===o||s&&null===o)&&(o=e[t]=!s&&i?i>1?void 0:null:r(),E(e,o));return o}(this,a,r,e,t)},set:function(t){!function(e,t,n,r,i,a){var s=v(r);if(e.ΔComputeDependencies)return void console.error("[Trax] @computed properties must not mutate the Data object when calculated");r&&!s&&i.ΔCreateProxy&&(r=i.ΔCreateProxy(r)||r,s=v(r));var d=!1,c=a[n];m(e)?d=c!==r:c!==r&&(!function e(t){if(!v(t))return;var n=!0;m(t)?n=!1:t.ΔChangeVersion+=1;if(P.register(t),n){var r=t.ΔMd;r&&r.parents&&l(r.parents,(function(t){e(t)}))}}(e),d=!0);d&&(s&&void 0===r&&(r=null),(s||c&&v(c))&&function(e,t,n){(function(e,t){if(t){var n=t.ΔMd;n&&n.parents&&(n.parents=u(n.parents,e))}})(e,t),E(e,n)}(e,c,r),a[n]=r,function(e,t,n,r,i){var a=e?e.ΔMd:void 0;if(a&&a.trackers){var s=e[o]||e;l(a.trackers,(function(e){e(s,t,n,r,i)}))}}(e,"set",t,c,r))}(this,r,a,t,e,this)},enumerable:!0,configurable:!0})}},pe=N,he=x,ve={};function me(e){e.prototype[L]=!0,y(e)}function ge(e){return e.replace(M,"")}function be(e,t){return!0===e.prototype[t]}function ye(e,t){return t.$apiClass=e,t.$isDecorator=!0,t}function we(e,t){e[W]=ge(t)}function Ne(e,t){var n=e[q];t="/"+ge(t),e[q]=n===R?t:n+t}function Ce(e,t){var n=e[K];n===R&&(n=e[K]=[]),n.push(t)}function xe(e,t,n,r,i,o){var a=t[q];if(a!==R){var s="/"+n;if(a===s||a.indexOf(s)>-1)return!0}return V(e,r!==R?i?"Invalid I/O binding expression on "+r+" (@defaultParam is not an @io param)":o?"Invalid I/O binding expression on "+r+"@paramValue (not an @io param)":"Invalid I/O binding expression on "+r+"."+n+" (not an @io param)":"Invalid I/O binding expression on '"+n+"' (not an @io param)"),!1}function $e(e,t,n){t.appendChild(e)}var Ie="value",Ee="checked",Oe="data",ke=["text","radio","checkbox","number"],je={passive:!0},Pe=ye(function(){function n(){this.ΔΔevents="input",this.ΔΔdebounce=0}return n.prototype.ΔDefault=function(e){switch(e){case"events":return"input";case"debounce":return 0}return ve},e([Ce,we,Ne,t("design:type",Object)],n.prototype,"ΔΔdata",void 0),e([fe(),t("design:type",Object)],n.prototype,"data",void 0),e([Ce,t("design:type",Object)],n.prototype,"ΔΔ$targetElt",void 0),e([fe(),t("design:type",Object)],n.prototype,"$targetElt",void 0),e([fe(pe),t("design:type",String)],n.prototype,"events",void 0),e([fe(0,2),t("design:type",Object)],n.prototype,"input2data",void 0),e([fe(0,2),t("design:type",Object)],n.prototype,"data2input",void 0),e([fe(he),t("design:type",Number)],n.prototype,"debounce",void 0),n=e([me],n)}(),(function(e){var t,n,r="",i="",o="",a={};function s(t){if("number"===r&&"input"===t.type){var i=t[Oe];if("e"===i||"E"===i||"-"===i||"+"===i)return}e.debounce<=0?d():(n||(n=new Ae("@value error")),n.duration=e.debounce,n.process(d))}function d(){var n;if("text"===r||"number"===r)n=t[Ie];else if("checkbox"===r)n=t[Ee];else if("radio"===r){if(!t[Ee])return;n=t[Ie]}e.data=e.input2data(n)}return{$init:function(){if("INPUT"!==(t=e.$targetElt).tagName&&"TEXTAREA"!==t.tagName&&"SELECT"!==t.tagName)throw"@value can only be used on input, textarea and select elements";if(r="text","INPUT"===t.tagName&&(r=t.getAttribute("type"),-1===ke.indexOf(r)))throw"Invalid input type '"+r+"': @value can only be used on types '"+ke.join("', '")+"'";t.addEventListener("change",s,je)},$render:function(){if(void 0===e.input2data&&(e.input2data=function(e){if("number"===r){if(""===e)return 0;try{e=parseFloat(e)}catch(e){return console.log("@value conversion error: ",e),0}}return e}),void 0===e.data2input&&(e.data2input=Te),i!==e.data){i=e.data;var n=e.data2input(i);"text"===r||"number"===r?t[Ie]=n:"checkbox"===r?t[Ee]=!!n:"radio"===r&&(t[Ee]=n===t[Ie])}if(o!==e.events){for(var d=e.events.split(";"),c=0,l=o.split(";");c<l.length;c++){"change"!==(p=l[c])&&(d.indexOf(p)<0&&a[p]&&(t.removeEventListener(p,s,je),a[p]=!1))}for(var u=0,f=d;u<f.length;u++){var p;"change"!==(p=f[u])&&(a[p]||(t.addEventListener(p,s,je),a[p]=!0))}o=e.events}},$dispose:function(){if(t){if(t.removeEventListener("change",s),""!==o)for(var e=0,r=o.split(";");e<r.length;e++){var i=r[e];"change"!==i&&t.removeEventListener(i,s,je)}o="",n=void 0}}}})),Ae=function(){function e(e){void 0===e&&(e="Error in callback"),this.errContext=e,this.timeoutId=null,this.duration=100}return e.prototype.process=function(e){var t=this;this.duration<=0?De(e,this.errContext):(null!==this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout((function(){t.timeoutId=null,De(e,t.errContext)}),this.duration))},e}();function De(e,t){try{e()}catch(e){throw"Debounce - "+t+"\n"+(e.message?e.message:e)}}function Te(e){return e}var Ve,Re,He,Me,Fe,Le,Se,We,qe=ye(function(){function n(){this.ΔΔhtml=""}return n.prototype.ΔDefault=function(e){switch(e){case"html":return""}return ve},e([we,t("design:type",String)],n.prototype,"ΔΔhtml",void 0),e([fe(pe),t("design:type",String)],n.prototype,"html",void 0),e([Ce,t("design:type",Object)],n.prototype,"ΔΔ$targetElt",void 0),e([fe(),t("design:type",Object)],n.prototype,"$targetElt",void 0),n=e([me],n)}(),(function(e){var t="";return{$render:function(){e.html!==t&&(e.$targetElt.innerHTML=t=e.html)}}}));(Le={},Se=["class","output"],We=function(){function n(){}return e([fe(pe),t("design:type",String)],n.prototype,"html",void 0),n=e([ue],n)}(),Ve="main",Re="innerHTML/innerHTML.ts",He=Le,Me=function(e,t,n){var r,i,o,a=n.html,s=(i=9,(o=(r=e).cm)?(r.nodes=new Array(i),r.cmAppends||(r.cmAppends=[],r.anchorNode&&(r.cmAppends[0]=function(e,t){var n,i;e.domNode?(n=e.domNode,i=r.anchorNode,r.rootDomNode.insertBefore(n,i)):e.domNode=r.rootDomNode}))):r.cmAppends=null,o);!function(e,t,n,r){if(t){var i={kind:"#fragment",uid:"fra"+ ++D,idx:n,parentIdx:-1,ns:"",domNode:void 0,attached:!0,nextSibling:void 0,firstChild:void 0,lastChild:void 0,contentView:null};e.nodes[n]=i;var o=e.cmAppends[r];o(i,!1),e.cmAppends[r+1]=function(e,t){o(e,!0),t||te(i,e)}}}(e,s,0,0),ee(e,s,1,1,"div",1),ne(e,s,0,2,2,0,"Enter some HTML: ",0),ee(e,s,3,1,"textarea",0),oe(e,s,0,4,3,"value",Pe,2),ie(e,s,0,4,0,0,n,"html"),ce(e,s,0,4),ee(e,s,5,1,"div",1,0,Se),ne(e,s,0,6,2,0," Output: ",0),ee(e,s,7,1,"div",0),oe(e,s,0,8,7,"unsafeInnerHTML",qe,1,a),ce(e,s,0,8),function(e,t,n){if(n)for(var r=n.length,i=0;r>i;i++)Z(e,n[i],e.cm);e.cm&&(e.cm=!1,e.cmAppends=null)}(e)},Fe=We,function(){return new _(Ve,Re,He,Me,Fe)})().attach(document.body).render({html:'<div class="blue"> \n    Hello <b> World </b> \n</div>\n'})}();
