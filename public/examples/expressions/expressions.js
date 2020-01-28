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
    ***************************************************************************** */function e(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s}function t(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}var n="ΔTrackable",i="ΔChangeVersion",r="ΔDefFactories",o="ΔΔProxy",s="ΔIsProxy",a=!1;function c(e){return e&&e.ΔTrackable?e.ΔMd?e.ΔMd:e.ΔMd={parents:void 0,refreshCtxt:void 0,watchers:void 0}:null}var l=Array.isArray;function d(e,t){e&&(l(e)&&!e[s]?e.forEach(t):t(e))}function f(e,t){if(e&&t){if(e===t)return;if(l(e)){var n=e;if(1===n.length){if(n[0]===t)return}else{var i=n.indexOf(t);if(i>-1)return n.splice(i,1),1===n.length?n[0]:n}}}return e}function u(e,t){return e?l(e)&&!e[s]?(e.push(t),e):[e,t]:t}function h(e){return e&&!0===e[n]?e[i]:0}function p(e,t){return!(!e||"object"!=typeof e)&&"ΔΔ"+t in e}function v(e){return!(!e||!0!==e[n])}function m(e){return h(e)%2==1}function g(e,t){var n=c(e);return n&&t?(n.watchers=u(n.watchers,t),m(e)&&j.register(e),t):null}function b(e,t){var n=e?e.ΔMd:void 0;n&&t&&(n.watchers=f(n.watchers,t))}function w(){return null}function C(){}function x(e,t){if(t){var n=c(t);n&&(n.parents=u(n.parents,e))}}w["ΔIsFactory"]=!0,C["ΔIsFactory"]=!0;var y=0,N=function(){function e(){this.id=++y}return e.prototype.register=function(e){var t=this,n=c(e);n&&!n.refreshCtxt&&(this.objects?this.objects.push(e):(this.objects=[e],Promise.resolve().then((function(){t.refresh()}))),n.refreshCtxt=this)},e.prototype.refresh=function(e){void 0===e&&(e=!0);var t=this.objects,n=t?t.length:0;if(n){A();for(var i,r,o=[],s=0;n>s;s++)(r=(i=t[s]).ΔMd).refreshCtxt&&(i.ΔChangeVersion%2&&(i.ΔChangeVersion+=1),r.refreshCtxt&&r.watchers&&o.push({dataNode:i,watchers:r.watchers})),r.refreshCtxt=void 0;this.objects=void 0,o.length&&(e?k(o):Promise.resolve().then((function(){k(o)})))}},e}();function k(e){for(var t=function(e){d(e.watchers,(function(t){t(e.dataNode)}))},n=0,i=e;n<i.length;n++){t(i[n])}}var j=new N;function A(){j.objects&&(j=new N)}var $=0,P={log:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.log.apply(console,arguments)},error:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.error.apply(console,arguments)}};function V(e,t){for(var n=e,i=[];n;){if(n.template){var r=n.template;i.push('\n>> Template: "'+r.templateName+'" - File: "'+r.filePath+'"')}n=n.parentView}P.error("IVY: "+t+i.join(""))}var D=void 0,O=/^ΔΔ(\w+)Emitter$/,E="ΔIsAPI",R="ΔIsController",T=0,I=function(){function e(e,t,n,i,r){this.templateName=e,this.filePath=t,this.staticCache=n,this.renderFn=i,this.$Class=r,this._uid=++T,this.tplApi=void 0,this.tplCtl=void 0,this.forceRefresh=!1,this.activeWatch=!1,this.lastRefreshVersion=0,this.processing=!1,this.rendering=!1,this.initialized=!1,this.labels=void 0,this.hasCtlClass=!1,this.view=function(e,t,n,i){var r={kind:"#view",uid:"view"+ ++$,nodes:null,namespace:void 0,namespaces:void 0,doc:null,parentView:e,cm:!0,cmAppends:null,lastRefresh:0,container:null,projectionHost:null,template:i,rootDomNode:null,anchorNode:null,expressions:void 0,oExpressions:void 0,instructions:void 0,paramNode:void 0,createElement:S,isEmpty:H};e?function(e,t,n){if(e.parentView=t,e.doc=t.doc,e.container=n,e.rootDomNode=t.rootDomNode,t.namespace){var i=t.namespace;e.namespace=i,e.namespaces=[i]}}(r,e,t):r.doc="undefined"!=typeof document?document:null;return r}(null,null,0,this);var o=this;this.watchCb=function(){o.notifyChange()},this.watchCb.$templateId=this._uid,this.$Class!==D&&(Z(this.$Class,R)?this.hasCtlClass=!0:Z(this.$Class,E)||v(this.$Class.prototype)||V(this.view,"Type of $ argument must be either a @Controller, an @API or a @Data class"))}return Object.defineProperty(e.prototype,"uid",{get:function(){return this._uid},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"document",{get:function(){return this.view.doc},set:function(e){this.view.doc=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"api",{get:function(){if(!this.tplApi)if(this.hasCtlClass){var e=this.controller;e&&e.$api&&(this.tplApi=e.$api)}else this.$Class&&(this.tplApi=new this.$Class,F(this.view,this.tplApi,this.staticCache));return this.tplApi},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"controller",{get:function(){if(!this.tplCtl&&this.hasCtlClass){var e=this.tplCtl=new this.$Class;if(p(e,"$template")&&(e.$template=this),p(e,"$logger")){var t=this.view;e.$logger={log:P.log,error:function(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];V(t,e+(n.length?" "+n.join(" "):""))}}}e.$api&&F(this.view,e.$api,this.staticCache)}return this.tplCtl},enumerable:!0,configurable:!0}),e.prototype.attach=function(e){if(this.view.rootDomNode)V(this.view,"Template host cannot be changed once set");else{var t=this.view;if(!t.doc)throw new Error("[iv] Template.document must be defined before calling Template.attach()");t.rootDomNode=e,t.anchorNode=t.doc.createComment("template anchor"),ee(t.anchorNode,e)}return this},e.prototype.registerLabel=function(e,t){this.labels||(this.labels={});var n=this.labels[e];n?n.push(t):n=this.labels[e]=[t]},e.prototype.query=function(e,t){if(void 0===t&&(t=!1),this.rendering)return null;if(e&&"#"!==e.charAt(0))return V(this.view,"[$template.query()] Invalid label argument: '"+e+"' (labels must start with #)"),null;var n=this.labels&&this.labels[e]||null;return n&&n.length?t?n:n[0]:null},e.prototype.notifyChange=function(){this.render()},e.prototype.disconnectObserver=function(){this.activeWatch&&(b(this.api,this.watchCb),b(this.controller,this.watchCb),this.activeWatch=!1)},e.prototype.render=function(e){if(this.processing)return this;this.processing=!0;var t=this.api,n=this.controller,i=this.view;if(n&&!v(n)&&(V(i,"Template controller must be a @Controller Object - please check: "+this.$Class.name),this.tplCtl=this.$Class=void 0),t&&e)for(var r in m(t)||A(),this.disconnectObserver(),e)e.hasOwnProperty(r)&&(t[r]=e[r]);var o=!this.forceRefresh,s=i.nodes;if(s&&s[0]&&s[0].attached||(o=!1),o&&h(t)+h(n)>this.lastRefreshVersion&&(o=!1),!o){n&&(this.initialized||(M(i,n,"$init","controller"),this.initialized=!0),M(i,n,"$beforeRender","controller")),this.rendering=!0,this.labels=void 0,i.lastRefresh++,i.instructions=void 0;try{this.renderFn(i,this.hasCtlClass?n:t,t,this)}catch(e){V(i,"Template execution error\n"+(e.message||e))}this.rendering=!1,n&&M(i,n,"$afterRender","controller"),function(e,t){if(void 0===t&&(t=!1),e){var n=e.ΔMd;n&&n.refreshCtxt?n.refreshCtxt.refresh(!0):t&&A()}}(t),this.forceRefresh=!1,this.lastRefreshVersion=h(t)+h(n)}return this.activeWatch||(g(t,this.watchCb),n&&g(n,this.watchCb),this.activeWatch=!0),this.processing=!1,this},e}();function F(e,t,n){var i=n.events;if(void 0===i){var r=void 0;for(var o in t)if(o.match(O)){var s=RegExp.$1;r||(r=[]),"function"!=typeof t[s+"Emitter"].init?V(e,"Invalid EventEmitter: "+s+"Emitter"):(r.push(s+"Emitter"),r.push(s),t[s+"Emitter"].init(s,t))}n.events=r||null}else if(null!==i)for(var a=i.length,c=0;a>c;c+=2)t[i[c]].init(i[c+1],t)}function M(e,t,n,i){if("function"==typeof t[n])try{t[n]()}catch(t){V(e,i+" "+n+" hook execution error\n"+(t.message||t))}}function S(e,t){return(t=t||this.namespace)?this.doc.createElementNS(t,e):this.doc.createElement(e)}function H(){return function(e){if(e!==D&&null!==e){var t=!0;return function e(t,n,i){if(t!==D&&null!==t){if(!i(t))return!1;if(null!==t.nodes&&t.nodes.length)for(var r=0,o=t.nodes;r<o.length;r++){if(!s(o[r]))return!1}}return!0;function s(t){var r=t.kind;if("#fragment"===r)return!!i(t)&&e(t.contentView,n,i);if("#container"!==r)return i(t);if(!i(t))return!1;var o=t,s=o.subKind;if("##block"===s){var a=o.views;if(null!==a)for(var c=0,l=a;c<l.length;c++){var d=l[c];if(!e(d,n,i))return!1}if(n&&o.viewPool)for(var f=0,u=o.viewPool;f<u.length;f++){var h=u[f];if(!e(h,n,i))return!1}}else if("##cpt"===s){var p=o.template;if(null!==p)return e(p.view,n,i)}else"##async"===s&&console.log("TODO: support scanNode for @async block");return!0}}(e,!1,(function(e){if(!t)return!1;var n=e.kind;if("#view"===n){var i=e;if(i.cm){var r=i.doc.createDocumentFragment();i.domNode=r,i.cmAppends=[function(e){e.domNode?ee(e.domNode,r):e.domNode=r}]}!function(e){if(e.instructions){var t=e.instructions.slice(0),n=t.length;if(e.instructions.splice(0,n),e.instructions=void 0,n)for(var i=0;n>i;i+=2)t[i].apply(null,t[i+1])}}(i)}else if("#element"===n||"#text"===n)return t=!1;return!0})),t}return!0}(this)}function W(e,t,n){if(n){var i=function(e){var t=e;for(;t&&!t.template;)t=t.parentView;return t}(e);if(i!==D&&null!==i)for(var r=i.template,o=n.length,s=0;o>s;s++)r.registerLabel(n[s],t)}}var K=[];function z(e,t,n){var i=e.nodes[t];if(i&&"##block"===i.subKind){var r=i,o=r.lastRefresh;if(n||o===e.lastRefresh){var s=r.views.length;if(!n){if(s!==r.previousNbrOfViews)for(var a=r.viewPool,c=a.length,l=void 0,d=0;c>d;d++)J(l=a[d],l.nodes[0]);r.previousNbrOfViews=s}}else J(e,r)}}function L(e,t,n,i,r,o,s,a,c){if(t){var l=e.createElement(r);if(a)for(var d=a.length,f=0;d>f;f+=2)l.setAttribute(a[f],a[f+1]);if(c){d=c.length;for(var u=0;d>u;u+=2)l[c[u]]=c[u+1]}var h={kind:"#element",uid:"elt"+ ++$,idx:n,parentIdx:-1,ns:"",domNode:l,attached:!0,nextSibling:void 0,firstChild:void 0,lastChild:void 0,contentView:null};e.nodes[n]=h,W(e,l,s),e.cmAppends[i](h,!1),o&&(e.cmAppends[i+1]=function(e,t){e.domNode?ee(e.domNode,l):e.domNode=l,t||_(h,e)})}else s&&W(e,e.nodes[n].domNode,s)}function _(e,t){e.firstChild?(e.lastChild.nextSibling=t,e.lastChild=t):(e.firstChild=e.lastChild=t,t.nextSibling=void 0),t.parentIdx=e.idx}function q(e,t,n,i,r,o,s,a){for(var c,l=[],d=8;d<arguments.length;d++)l[d-8]=arguments[d];if(a){var f=void 0,u=void 0,h=!1;f=t?s.slice(0):(c=e.nodes[i]).pieces;for(var p=0;a>p;p++)(u=Y(e,n,l[p]))!==K&&(h=!0,f[1+2*p]=null==u?"":u);if(!t)return h&&(c.domNode.textContent=f.join("")),void W(e,c.domNode,o);c=v(e.doc.createTextNode(f.join("")),f),W(e,c.domNode,o)}else{if(!t)return void(o&&W(e,e.nodes[i].domNode,o));c=v(e.doc.createTextNode(s),void 0),W(e,c.domNode,o)}function v(e,t){return{kind:"#text",uid:"txt"+ ++$,domNode:e,attached:!0,idx:i,parentIdx:-1,pieces:t,nextSibling:void 0}}e.nodes[i]=c,e.cmAppends[r](c,!1)}function B(e,t,n){if(e.expressions){var i=e.expressions;if(i.length>t&&i[t]===n)return K;i[t]=n}else e.expressions=[],e.expressions[t]=n;return n}function Y(e,t,n){if(t){if(n[2]){var i=e.oExpressions;return i[2*n[0]]?K:(i[2*n[0]]=1,n[1])}return B(e,n[0],n[1])}return n}function G(e,t,n,i,r){if(r!==K){var o=Y(e,t,r);if(o!==K){var s=e.nodes[n].domNode;void 0===o?s.removeAttribute(i):s.setAttribute(i,o)}}}function J(e,t){if(t&&t.attached)if("#text"===t.kind||"#element"===t.kind){var n=function e(t,n){if(0===n.idx&&t.projectionHost){if(!n.attached)return null;var i=t.projectionHost.hostNode;return"#element"===i.kind?i.domNode:e(t.projectionHost.view,i)}return 0===n.idx?t.parentView?e(t.parentView,t.container):t.rootDomNode:t.nodes[n.parentIdx].domNode}(e,t);t.attached=!1,n?n.removeChild(t.domNode):V(e,"Internal error - parent not found for: "+t.uid)}else if("#container"===t.kind){if("##block"===t.subKind){for(var i=t,r=i.views,o=r.length,s=void 0,a=0;o>a;a++)s=r[a].nodes[0],J(r[a],s),s.attached=!1,"#container"!==s.kind&&"#fragment"!==s.kind||(s.domNode=void 0);i.views=[],i.previousNbrOfViews=0,i.viewPool=r.concat(i.viewPool)}else if("##cpt"===t.subKind){var c=t.template;s=c.view.nodes[0];J(c.view,s),s.attached=!1,"#container"!==s.kind&&"#fragment"!==s.kind||(s.domNode=void 0)}}else if("#fragment"===t.kind){var l=t;if(l.attached=!1,l.contentView)J(l.contentView,l.contentView.nodes[0]);else if(l.firstChild)for(var d=l.firstChild;d;)J(e,d),d=d.nextSibling;l.domNode=void 0}else"#param"===t.kind?console.warn("TODO removeFromDom for param nodes"):console.warn("RemoveFromDom for "+t.kind)}var Q=function(e){var t=e.prototype;t[n]=!0,t[i]=0},U=function(e,t){return e||(e=w,t=3),function(n,i){var s="ΔΔ"+i,c=n[r];c||(c=n[r]={}),c[i]=t?1===t?w:C:e,n[s]=void 0,function(e,t,n,i){i&&delete e[t]&&Object.defineProperty(e,t,i)}(n,i,0,{get:function(){return function(e,t,n,i,r){e.ΔComputeDependencies&&(e.ΔComputeDependencies[n]=!0);var o=e[t];(void 0===o||a&&null===o)&&(o=e[t]=!a&&r?r>1?void 0:null:i(),x(e,o));return o}(this,s,i,e,t)},set:function(t){!function(e,t,n,i,r,s){var a=v(i);if(e.ΔComputeDependencies)return void console.error("[Trax] @computed properties must not mutate the Data object when calculated");i&&!a&&r.ΔCreateProxy&&(i=r.ΔCreateProxy(i)||i,a=v(i));var c=!1,l=s[n];m(e)?c=l!==i:l!==i&&(!function e(t){if(!v(t))return;var n=!0;m(t)?n=!1:t.ΔChangeVersion+=1;if(j.register(t),n){var i=t.ΔMd;i&&i.parents&&d(i.parents,(function(t){e(t)}))}}(e),c=!0);c&&(a&&void 0===i&&(i=null),(a||l&&v(l))&&function(e,t,n){(function(e,t){if(t){var n=t.ΔMd;n&&n.parents&&(n.parents=f(n.parents,e))}})(e,t),x(e,n)}(e,l,i),s[n]=i,function(e,t,n,i,r){var s=e?e.ΔMd:void 0;if(s&&s.trackers){var a=e[o]||e;d(s.trackers,(function(e){e(a,t,n,i,r)}))}}(e,"set",t,l,i))}(this,i,s,t,e,this)},enumerable:!0,configurable:!0})}},X={};function Z(e,t){return!0===e.prototype[t]}function ee(e,t,n){t.appendChild(e)}function te(e){return"~ "+e+" ~"}var ne,ie,re,oe,se,ae,ce,le,de,fe,ue,he,pe=(ae={},ce=["",""],le=["class","dynamic","title",123],de=[" This is also dynamic: ",""," "],fe=[" This will be set only once: ",""," "],ue=["class","info blue"],he=function(){function n(){this.ΔΔtext="[no text]"}return n.prototype.ΔDefault=function(e){switch(e){case"text":return"[no text]"}return X},e([U(),t("design:type",Object)],n.prototype,"data",void 0),e([U(),t("design:type",Object)],n.prototype,"text",void 0),n=e([Q],n)}(),ne="samples",ie="expressions/expressions.ts",re=ae,oe=function(e,t,n){var i,r,o,s=n.data,a=n.text,c=(r=15,(o=(i=e).cm)?(i.nodes=new Array(r),i.cmAppends||(i.cmAppends=[],i.anchorNode&&(i.cmAppends[0]=function(e,t){var n,r;e.domNode?(n=e.domNode,r=i.anchorNode,i.rootDomNode.insertBefore(n,r)):e.domNode=i.rootDomNode}))):i.cmAppends=null,o);!function(e,t,n,i){if(t){var r={kind:"#fragment",uid:"fra"+ ++$,idx:n,parentIdx:-1,ns:"",domNode:void 0,attached:!0,nextSibling:void 0,firstChild:void 0,lastChild:void 0,contentView:null};e.nodes[n]=r;var o=e.cmAppends[i];o(r,!1),e.cmAppends[i+1]=function(e,t){o(e,!0),t||_(r,e)}}}(e,c,0,0),L(e,c,1,1,"div",1),G(e,0,1,"title",B(e,0,s.title)),q(e,c,0,2,2,0," This text has a dynamic tooltip ",0),L(e,c,3,1,"div",1),function(e,t,n,i,r){if(r!==K){var o=Y(e,t,r);o!==K&&(e.nodes[n].domNode[i]=o)}}(e,0,3,"className",B(e,1,s.className)),q(e,c,0,4,2,0," This text should be blue ",0),L(e,c,5,1,"div",1),G(e,0,5,"class",B(e,2,s.cls)),q(e,c,0,6,2,0," This text should be green ",0),L(e,c,7,1,"div",1),q(e,c,0,8,2,0,ce,1,B(e,3,s.txt+"!")),L(e,c,9,1,"div",1,0,le),q(e,c,0,10,2,0,de,1,B(e,4,te(a))),L(e,c,11,1,"div",1),q(e,c,0,12,2,0,fe,1,function(e,t,n,i){var r=e.oExpressions;if(r||(r=e.oExpressions=[]),i){if(r[2*t])return r[1+2*t];var o=[t,n,1];return r[2*t]=0,r[1+2*t]=o,o}return r[2*t]?K:(r[2*t]=1,n)}(e,0,c?te(a):K)),L(e,c,13,1,"div",1,0,ue),q(e,c,0,14,2,0," >>> Click to refresh ",0),function(e,t,n){if(n)for(var i=n.length,r=0;i>r;r++)z(e,n[r],e.cm);e.cm&&(e.cm=!1,e.cmAppends=null)}(e)},se=he,function(){return new I(ne,ie,re,oe,se)}),ve={title:"Hello World",className:"blue",cls:"green",txt:"Dynamic text"},me=pe().attach(document.body).render({data:ve,text:"Hello ivy"}),ge=0;document.addEventListener("click",(function(){ge++,ve.title+=" +"+ge,ve.txt+=" +"+ge,me.api.text+=" +"+ge,me.render()}))}();
