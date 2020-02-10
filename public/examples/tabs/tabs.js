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
    ***************************************************************************** */function e(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a}function t(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}var n="ΔTrackable",i="ΔChangeVersion",o="ΔFactory",r="ΔDefFactories",a="ΔIsFactory",s="ΔΔProxy",d="ΔIsProxy",l="ΔDefault",c="ΔCreateProxy",f="$newItem",u=!1;function p(e){return e&&e.ΔTrackable?e.ΔMd?e.ΔMd:e.ΔMd={parents:void 0,refreshCtxt:void 0,watchers:void 0}:null}var v=Array.isArray;function h(e,t){e&&(v(e)&&!e[d]?e.forEach(t):t(e))}function m(e,t){if(e&&t){if(e===t)return;if(v(e)){var n=e;if(1===n.length){if(n[0]===t)return}else{var i=n.indexOf(t);if(i>-1)return n.splice(i,1),1===n.length?n[0]:n}}}return e}function g(e,t){return e?v(e)&&!e[d]?(e.push(t),e):[e,t]:t}function w(e){return e&&!0===e[n]?e[i]:0}function b(e,t){return!(!e||"object"!=typeof e)&&"ΔΔ"+t in e}function N(e){return!(!e||!0!==e[n])}function y(e){return w(e)%2==1}function x(e,t){var n=p(e);return n&&t?(n.watchers=g(n.watchers,t),y(e)&&K.register(e),t):null}function C(e,t){var n=e?e.ΔMd:void 0;n&&t&&(n.watchers=m(n.watchers,t))}function I(e,t){if(e&&void 0!==t){if(e[f])return e[f](t);u=!0;var n=e[t];return u=!1,n}}function k(e,t){if(e&&t){var n=e[l];if(n){var i=n(t);if(i!==$)return e[t]=i}var o=e[r],a=o?o[t]:null;if(a)return e[t]=a()}}function V(e){var t=e.prototype;t[n]=!0,t[i]=0}function P(e,t){return e||(e=O,t=3),function(n,i){var o="ΔΔ"+i,a=n[r];a||(a=n[r]={}),a[i]=t?1===t?O:S:e,n[o]=void 0,function(e,t,n,i){i&&delete e[t]&&Object.defineProperty(e,t,i)}(n,i,0,{get:function(){return function(e,t,n,i,o){e.ΔComputeDependencies&&(e.ΔComputeDependencies[n]=!0);var r=e[t];(void 0===r||u&&null===r)&&(r=e[t]=!u&&o?o>1?void 0:null:i(),H(e,r));return r}(this,o,i,e,t)},set:function(t){j(this,i,o,t,e,this)},enumerable:!0,configurable:!0})}}var $={};function A(){return""}A[a]=!0;var D=A;function O(){return null}O[a]=!0;var R=O;function S(){}function j(e,t,n,i,o,r){var a=N(i);if(e.ΔComputeDependencies)console.error("[Trax] @computed properties must not mutate the Data object when calculated");else{i&&!a&&o.ΔCreateProxy&&(a=N(i=o.ΔCreateProxy(i)||i));var s=!1,d=r[n];y(e)?s=d!==i:d!==i&&(E(e),s=!0),s&&(a&&void 0===i&&(i=null),(a||d&&N(d))&&function(e,t,n){T(e,t),H(e,n)}(e,d,i),r[n]=i,L(e,"set",t,d,i))}}function L(e,t,n,i,o){var r=e?e.ΔMd:void 0;if(r&&r.trackers){var a=e[s]||e;h(r.trackers,(function(e){e(a,t,n,i,o)}))}}function E(e){if(N(e)){var t=!0;if(y(e)?t=!1:e.ΔChangeVersion+=1,K.register(e),t){var n=e.ΔMd;n&&n.parents&&h(n.parents,(function(e){E(e)}))}}}function T(e,t){if(t){var n=t.ΔMd;n&&n.parents&&(n.parents=m(n.parents,e))}}function H(e,t){if(t){var n=p(t);n&&(n.parents=g(n.parents,e))}}S[a]=!0;var F=0,M=function(){function e(){this.id=++F}return e.prototype.register=function(e){var t=this,n=p(e);n&&!n.refreshCtxt&&(this.objects?this.objects.push(e):(this.objects=[e],Promise.resolve().then((function(){t.refresh()}))),n.refreshCtxt=this)},e.prototype.refresh=function(e){void 0===e&&(e=!0);var t=this.objects,n=t?t.length:0;if(n){z();for(var i,o,r=[],a=0;n>a;a++)(o=(i=t[a]).ΔMd).refreshCtxt&&(i.ΔChangeVersion%2&&(i.ΔChangeVersion+=1),o.refreshCtxt&&o.watchers&&r.push({dataNode:i,watchers:o.watchers})),o.refreshCtxt=void 0;this.objects=void 0,r.length&&(e?X(r):Promise.resolve().then((function(){X(r)})))}},e}();function X(e){for(var t=function(e){h(e.watchers,(function(t){t(e.dataNode)}))},n=0,i=e;n<i.length;n++){t(i[n])}}var K=new M;function z(){K.objects&&(K=new M)}var B=["push","pop","shift","unshift","splice"],W=/^\d+$/,_=/^\Δ/,q=function(){function e(e){this.ΔTrackable=!0,this.ΔDataFactory=!0,this.ΔChangeVersion=0,this.ΔMd=void 0,this.ΔΔSelf=this,this.ΔIsProxy=!1,this.ΔItemFactory=e}return e.ΔNewProxy=function(t){var n=new Proxy([],new e(t));return n[s]=n,n},e.ΔCreateProxy=function(t,n){if(v(t)){var i=new Proxy(t,new e(n)),o=t.length;for(E(i);o--;)H(i,t[o]);return i}return null},e.prototype.$newItem=function(e){var t=this.ΔItemFactory();return void 0===e&&(e=this.ΔΔList.length),e>-1&&j(this.ΔΔSelf,e,e,t,this.ΔItemFactory,this.ΔΔList),t},e.prototype.$dispose=function(){for(var e=this.ΔΔList,t=e.length;t--;)T(this.ΔΔSelf,e[t]);return e},e.prototype.ΔToString=function(){return"Trax List ["+this.ΔΔList.join(", ")+"]"},e.prototype.set=function(e,t,n){if(this.ΔΔList||(this.ΔΔList=e),t.match(W)){var i=parseInt(t,10);j(this.ΔΔSelf,i,i,n,this.ΔItemFactory,this.ΔΔList)}else t.match(_)&&(this[t]=n);return!0},e.prototype.get=function(e,t){if(this.ΔΔList||(this.ΔΔList=e),t===d)return!0;if("string"===typeof t){if(t.match(_))return this[t];if(t.match(W))return this.ΔΔList[parseInt(t,10)];if("length"===t)return this.ΔΔList.length;if("push"===t)return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var i=this,o=t.length,r=i.ΔΔList.length,a=0;o>a;a++)i.set(e,r+a+"",t[a])};if("toString"===t)return this.ΔToString;if("function"==typeof e[t])return function(){var e=this,n=B.indexOf(t)>-1;if(n){E(e);for(var i=e.ΔΔList,o=0;i.length>o;o++)T(e,i[o])}var r=e.ΔΔList,a=r[t].apply(r,arguments);if(n){for(i=e.ΔΔList,o=0;i.length>o;o++)H(e,i[o]);L(this,t)}return a}}return t===Symbol.iterator?this.ΔΔList[Symbol.iterator]:this[t]},e}();var U=function(e){function t(){return q.ΔNewProxy(e)}return e=e||R,t[a]=!0,t[c]=function(t){return q.ΔCreateProxy(t,e)},t},Y=0,G={log:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.log.apply(console,arguments)},error:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.error.apply(console,arguments)}};function J(e,t){for(var n=e,i=[];n;){if(n.template){var o=n.template;i.push('\n>> Template: "'+o.templateName+'" - File: "'+o.filePath+'"')}n=n.parentView}G.error("IVY: "+t+i.join(""))}var Q=void 0,Z=11,ee="$api",te=/^ΔΔ(\w+)Emitter$/,ne=/^ΔΔ/,ie=/^ΔΔ(.+)$/,oe="ΔIsAPI",re="ΔIsController",ae="ΔDefaultParam",se="ΔIoParams",de=0,le=function(){function e(e,t,n,i,o){this.templateName=e,this.filePath=t,this.staticCache=n,this.renderFn=i,this.$Class=o,this._uid=++de,this.tplApi=void 0,this.tplCtl=void 0,this.forceRefresh=!1,this.activeWatch=!1,this.lastRefreshVersion=0,this.processing=!1,this.rendering=!1,this.initialized=!1,this.labels=void 0,this.hasCtlClass=!1,this.view=ve(null,null,1,this);var r=this;this.watchCb=function(){r.notifyChange()},this.watchCb.$templateId=this._uid,this.$Class!==Q&&(ot(this.$Class,re)?this.hasCtlClass=!0:ot(this.$Class,oe)||N(this.$Class.prototype)||J(this.view,"Type of $ argument must be either a @Controller, an @API or a @Data class"))}return e.prototype.dispose=function(e){void 0===e&&(e=!1);var t=this.view;this.disconnectObserver(),fe(t,this.tplCtl,"$dispose",this.templateName),e&&t&&t.nodes&&t.nodes.length&&Ge(t,t.nodes[0])},Object.defineProperty(e.prototype,"uid",{get:function(){return this._uid},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"document",{get:function(){return this.view.doc},set:function(e){this.view.doc=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"api",{get:function(){if(!this.tplApi)if(this.hasCtlClass){var e=this.controller;e&&e.$api&&(this.tplApi=e.$api)}else this.$Class&&(this.tplApi=new this.$Class,ce(this.view,this.tplApi,this.staticCache));return this.tplApi},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"controller",{get:function(){if(!this.tplCtl&&this.hasCtlClass){var e=this.tplCtl=new this.$Class;if(b(e,"$template")&&(e.$template=this),b(e,"$logger")){var t=this.view;e.$logger={log:G.log,error:function(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];J(t,e+(n.length?" "+n.join(" "):""))}}}e[ee]&&ce(this.view,e[ee],this.staticCache)}return this.tplCtl},enumerable:!0,configurable:!0}),e.prototype.attach=function(e){if(this.view.rootDomNode)J(this.view,"Template host cannot be changed once set");else{var t=this.view;if(!t.doc)throw new Error("[iv] Template.document must be defined before calling Template.attach()");t.rootDomNode=e,t.anchorNode=t.doc.createComment("template anchor"),st(t.anchorNode,e)}return this},e.prototype.registerLabel=function(e,t){this.labels||(this.labels={});var n=this.labels[e];n?n.push(t):n=this.labels[e]=[t]},e.prototype.query=function(e,t){if(void 0===t&&(t=!1),this.rendering)return null;if(e&&"#"!==e.charAt(0))return J(this.view,"[$template.query()] Invalid label argument: '"+e+"' (labels must start with #)"),null;var n=this.labels&&this.labels[e]||null;return n&&n.length?t?n:n[0]:null},e.prototype.notifyChange=function(){this.render()},e.prototype.disconnectObserver=function(){this.activeWatch&&(C(this.api,this.watchCb),C(this.controller,this.watchCb),this.activeWatch=!1)},e.prototype.render=function(e){if(this.processing)return this;this.processing=!0;var t=this.api,n=this.controller,i=this.view;if(n&&!N(n)&&(J(i,"Template controller must be a @Controller Object - please check: "+this.$Class.name),this.tplCtl=this.$Class=void 0),t&&e)for(var o in y(t)||z(),this.disconnectObserver(),e)e.hasOwnProperty(o)&&(t[o]=e[o]);var r=!this.forceRefresh,a=i.nodes;if(a&&a[0]&&a[0].attached||(r=!1),r&&w(t)+w(n)>this.lastRefreshVersion&&(r=!1),!r){n&&(this.initialized||(fe(i,n,"$init","controller"),this.initialized=!0),fe(i,n,"$beforeRender","controller")),this.rendering=!0,this.labels=void 0,i.lastRefresh++,i.instructions=void 0;try{this.renderFn(i,this.hasCtlClass?n:t,t,this)}catch(e){J(i,"Template execution error\n"+(e.message||e))}this.rendering=!1,n&&fe(i,n,"$afterRender","controller"),function(e,t){if(void 0===t&&(t=!1),e){var n=e.ΔMd;n&&n.refreshCtxt?n.refreshCtxt.refresh(!0):t&&z()}}(t),this.forceRefresh=!1,this.lastRefreshVersion=w(t)+w(n)}return this.activeWatch||(x(t,this.watchCb),n&&x(n,this.watchCb),this.activeWatch=!0),this.processing=!1,this},e}();function ce(e,t,n){var i=n.events;if(void 0===i){var o=void 0;for(var r in t)if(r.match(te)){var a=RegExp.$1;o||(o=[]),"function"!=typeof t[a+"Emitter"].init?J(e,"Invalid EventEmitter: "+a+"Emitter"):(o.push(a+"Emitter"),o.push(a),t[a+"Emitter"].init(a,t))}n.events=o||null}else if(null!==i)for(var s=i.length,d=0;s>d;d+=2)t[i[d]].init(i[d+1],t)}function fe(e,t,n,i){if(t&&"function"==typeof t[n])try{t[n]()}catch(t){J(e,i+" "+n+" hook execution error\n"+(t.message||t))}}function ue(e,t){return(t=t||this.namespace)?this.doc.createElementNS(t,e):this.doc.createElement(e)}function pe(){return function(e){if(e!==Q&&null!==e){var t=!0;return lt(e,!1,(function(e){if(!t)return!1;var n=e.kind;if("#view"===n){var i=e;if(i.cm){var o=i.doc.createDocumentFragment();i.domNode=o,i.cmAppends=[function(e){e.domNode?st(e.domNode,o):e.domNode=o}]}Ie(i)}else if("#element"===n||"#text"===n)return t=!1;return!0})),t}return!0}(this)}function ve(e,t,n,i){var o={kind:"#view",uid:"view"+ ++Y,attached:!1,nodes:null,namespace:void 0,namespaces:void 0,doc:null,parentView:e,cm:!0,cmAppends:null,lastRefresh:0,container:null,projectionHost:null,template:i,rootDomNode:null,anchorNode:null,expressions:void 0,oExpressions:void 0,instructions:void 0,paramNode:void 0,createElement:ue,isEmpty:pe};return e?me(o,e,t):o.doc="undefined"!=typeof document?document:null,o}function he(e,t,n){if(n){var i=function(e){var t=e;for(;t&&!t.template;)t=t.parentView;return t}(e);if(i!==Q&&null!==i)for(var o=i.template,r=n.length,a=0;r>a;a++)o.registerLabel(n[a],t)}}function me(e,t,n){if(e.parentView=t,e.doc=t.doc,e.container=n,e.rootDomNode=t.rootDomNode,t.namespace){var i=t.namespace;e.namespace=i,e.namespaces=[i]}}function ge(e,t,n,i,o){return function(){return new le(e,t,n,i,o)}}var we=[];function be(e,t,n){var i=e.cm;return i?(e.nodes=new Array(n),e.cmAppends||(e.cmAppends=[],e.anchorNode&&(e.cmAppends[0]=function(t,n){t.domNode?dt(t.domNode,e.anchorNode,e.rootDomNode):t.domNode=e.rootDomNode}))):e.cmAppends=null,i}function Ne(e,t,n,i,o){var r,a=e.nodes[n];if(a&&a.attached||J(e,"Invalid ζview call: container must be attached ("+(a?a.uid:"XX")+") - pview: "+e.uid+" containerIdx: "+n),"#container"===a.kind)if("##block"===a.subKind){var s=(d=a).views;1===o&&(d.insertFn=null),1===o&&d.views.length>1?(d.previousNbrOfViews=s.length,r=s.shift(),d.viewPool.length?d.viewPool=s.concat(d.viewPool):d.viewPool=s,d.views=[r]):(r=d.views[o-1])||(d.viewPool.length>0?(d.insertFn||(d.insertFn=ke(e,d)),Pe((r=s[o-1]=d.viewPool.shift()).nodes[0],d.insertFn),r.attached=!0):((r=s[o-1]=ve(e,d)).nodes=new Array(i),e.cm&&d.cmAppend?r.cmAppends=[d.cmAppend]:e.cm||(r.cmAppends=[ke(e,d)]))),d.lastRefresh=r.lastRefresh=e.lastRefresh}else{var d;(r=(d=a).contentView)||((r=d.contentView=ve(e,d)).nodes=new Array(i)),r.lastRefresh=e.lastRefresh}else if("#param"===a.kind){var l=a;(r=l.contentView)||(r=l.contentView=ve(e,null),l.viewPool&&(l.viewPool[l.viewInstanceIdx]=r),r.nodes=new Array(i),r.paramNode=l),r.lastRefresh=e.lastRefresh}return r}function ye(e,t,n,i,o,r){var a=r||Ne(e,0,n,i,o);if(1===t)a.instructions=[];else{for(var s=a,d=t-1;d>0;)s=s.parentView,d--;s.instructions||(s.instructions=[]),a.instructions=s.instructions}return a.cm&&!a.cmAppends&&Ce(a,xe,[a,e,n]),a}function xe(e,t,n){var i=t.nodes[n];"#container"===i.kind&&!e.cmAppends&&i.cmAppend&&(e.cmAppends=[i.cmAppend])}function Ce(e,t,n){e.instructions.push(t),e.instructions.push(n)}function Ie(e){if(e.instructions){var t=e.instructions.slice(0),n=t.length;if(e.instructions.splice(0,n),e.instructions=void 0,n)for(var i=0;n>i;i+=2)t[i].apply(null,t[i+1])}}function ke(e,t){var n=function e(t,n){for(;;){if(n||J(t,"Internal error - findNextSiblingDomNd: nd cannot be undefined"),0===n.idx){if(!n.attached)return{position:"defer",parentDomNd:void 0};if(n.domNode.nodeType===Z)return{position:"lastChild",parentDomNd:n.domNode};var i=t.parentView;if(i){if(t.projectionHost){var o=t.projectionHost.hostNode;return"#element"===o.kind?{position:"lastChild",parentDomNd:o.domNode}:e(t.projectionHost.view,o)}if(t.container&&"##block"===t.container.subKind){var r=t.container,a=r.views.indexOf(t);if(a>-1)for(var s=void 0,d=void 0,l=a+1;l<r.views.length;l++)if((s=r.views[l]).nodes&&s.nodes.length&&(d=m(s,s.nodes[0],r.domNode)))return d;for(var c=r.viewPool,f=void 0,u=0,p=c;u<p.length;u++){if((s=p[u]).nodes&&s.nodes.length&&s.attached&&(f=m(s,s.nodes[0],r.domNode)))return f}}return e(i,t.container)}return{position:"lastOnRoot",parentDomNd:t.rootDomNode,nextDomNd:t.anchorNode}}if(!n.nextSibling){var v=t.nodes[n.parentIdx];return"#element"===v.kind?{position:"lastChild",parentDomNd:Ye(t,n)}:e(t,v)}var h=m(t,n.nextSibling,Ye(t,n));if(h)return h;n=n.nextSibling}function m(e,t,n){if(!t)return null;if("#element"===t.kind||"#text"===t.kind)return{position:"beforeChild",nextDomNd:t.domNode,parentDomNd:n};if("#fragment"===t.kind){for(var i=void 0,o=t.firstChild;o;){if(i=m(e,o,n))return i;o=o.nextSibling}if(t.contentView){var r=t.contentView;if(r.nodes)return m(r,r.nodes[0],n)}return null}if("#container"===t.kind){var a=t;i=null;if("##block"===a.subKind)for(var s=a.views,d=s.length,l=0;d>l&&!(i=m(s[l],s[l].nodes[0],n));l++);else if("##cpt"===a.subKind){var c=a.template.view;i=m(c,c.nodes[0],n)}return i||null}throw new Error("TODO findFirstDomNd: "+t.kind)}}(e,t),i=n.position,o=n.nextDomNd,r=n.parentDomNd;return"beforeChild"===i||"lastOnRoot"===i?function(e,t){e.domNode?dt(e.domNode,o,r):e.domNode=r}:"lastChild"===i?function(e,t){e.domNode?st(e.domNode,r):e.domNode=r}:function(){console.warn("TODO: VALIDATE VIEW APPEND: ",i),function(e,t,n){void 0===t&&(t="");n&&e.uid!==n||(console.log(""),console.log(ct),t&&console.log(t+":"),function e(t,n){void 0===n&&(n="");if(!t.nodes)return void console.log(""+n+t.uid+" - no nodes");var i=t.parentView?t.parentView.uid:"XX",o=t.projectionHost,r=o?" >>> projection host: "+o.hostNode.uid+" in "+o.view.uid:"";console.log(n+"*"+t.uid+"* cm:"+t.cm+" isTemplate:"+(void 0!==t.template)+" parentView:"+i+r);for(var a,s=t.nodes.length,d="",l=0;s>l;l++)if(a=t.nodes[l])if(d=a.uid.length<5?["     ","    ","   ","  "," "][a.uid.length]:"","#container"===a.kind){var c=a,f=c.domNode?c.domNode.uid:"XX";if(console.log(n+"["+l+"] "+a.uid+d+" "+f+" attached:"+(a.attached?1:0)+" parent:"+C(a.parentIdx)+" nextSibling:"+(a.nextSibling?a.nextSibling.uid:"X")),"##block"===c.subKind){var u=c,p=u.views.length;if(p)for(var v=0;p>v;v++)if(u.views[v]){var h=u.views[v];f=h.rootDomNode?h.rootDomNode.$uid:"XX",console.log(n+"  - view #"+v),e(u.views[v],"    "+n)}else console.log(n+"  - view #"+v+" UNDEFINED");else console.log(n+"  - no child views")}else if("##cpt"===c.subKind){var m=c,g=m.template,w=m.contentView;w?(console.log(n+"  - light DOM:"),e(w,"    "+n)):console.log(n+"  - light DOM: none"),g?(console.log(n+"  - shadow DOM:"),e(g.view,"    "+n)):console.log(n+"  - no template")}else console.log(n+"  - "+c.subKind+" container")}else{f=a.domNode?a.domNode.uid:"XX";var b="";if(a.domNode&&"#text"===a.kind)b=" text=#"+a.domNode._textContent+"#";else if("#fragment"===a.kind||"#element"===a.kind){for(var N=[],y=a.firstChild;y;)N.push(y.uid),y=y.nextSibling;b=" children:["+N.join(", ")+"]";var x=a.contentView;x&&(b+=" >>> content view: "+x.uid)}console.log(n+"["+a.idx+"] "+a.uid+d+" "+f+" attached:"+(a.attached?1:0)+" parent:"+C(a.parentIdx)+" nextSibling:"+(a.nextSibling?a.nextSibling.uid:"X")+b)}else console.log(n+"["+l+"] XX");function C(e){return e<0?"X":e}}(e))}(e,"getViewInsertFunction for "+t.uid)}}function Ve(e,t,n){var i=e.nodes[t];if(i&&"##block"===i.subKind){var o=i,r=o.lastRefresh;if(n||r===e.lastRefresh){var a=o.views.length;if(!n){if(a!==o.previousNbrOfViews)for(var s=o.viewPool,d=s.length,l=void 0,c=0;d>c;c++)Ge(l=s[c],l.nodes[0]),l.attached=!1;o.previousNbrOfViews=a}}else Ge(e,o)}}function Pe(e,t,n){if(!e.attached){if(t(e,!0),e.attached=!0,"#fragment"===e.kind)for(var i=e.firstChild;i;)Pe(i,t),i=i.nextSibling;else if("#container"===e.kind){var o=e.subKind;if("##cpt"===o){var r=e.template,a=r?r.view.nodes[0]:null;r&&(r.forceRefresh=!0),a&&(Pe(a,t),r.view.attached=!0)}else if("##block"===o)for(var s=e.views,d=0;s.length>d;d++)Pe(s[d].nodes[0],t),s[d].attached=!0}if("#fragment"===e.kind||"#element"===e.kind){var l=e.contentView;l&&(Pe(l.nodes[0],t),l.attached=!0)}}}function $e(e,t,n){if(n)for(var i=n.length,o=0;i>o;o++)Ve(e,n[o],e.cm);e.cm&&(e.cm=!1,e.cmAppends=null)}function Ae(e,t,n){if(e.paramNode){var i=e.paramNode;i.dataHolder?(Ce(e,$e,[e,t,n]),i.data&&"#view"!==i.data.kind?i.data?i.data.$content=e:console.warn("TODO: ζendD no data"):i.dataHolder[i.dataName]=e):J(e,"ζendD dataHoler should be defined")}else Ce(e,$e,[e,t,n])}function De(e,t,n,i,o,r,a,s,d){if(t){var l=e.createElement(o);if(s)for(var c=s.length,f=0;c>f;f+=2)l.setAttribute(s[f],s[f+1]);if(d){c=d.length;for(var u=0;c>u;u+=2)l[d[u]]=d[u+1]}var p={kind:"#element",uid:"elt"+ ++Y,idx:n,parentIdx:-1,ns:"",domNode:l,attached:!0,nextSibling:void 0,firstChild:void 0,lastChild:void 0,contentView:null};e.nodes[n]=p,he(e,l,a),e.cmAppends[i](p,!1),r&&(e.cmAppends[i+1]=function(e,t){e.domNode?st(e.domNode,l):e.domNode=l,t||Re(p,e)})}else a&&he(e,e.nodes[n].domNode,a)}function Oe(e,t,n,i,o,r,a,s,d){t&&Ce(e,De,[e,t,n,i,o,r,a,s,d])}function Re(e,t){e.firstChild?(e.lastChild.nextSibling=t,e.lastChild=t):(e.firstChild=e.lastChild=t,t.nextSibling=void 0),t.parentIdx=e.idx}function Se(e,t,n,i,o,r,a,s){for(var d,l=[],c=8;c<arguments.length;c++)l[c-8]=arguments[c];if(s){var f=void 0,u=void 0,p=!1;f=t?a.slice(0):(d=e.nodes[i]).pieces;for(var v=0;s>v;v++)(u=Ee(e,n,l[v]))!==we&&(p=!0,f[1+2*v]=null==u?"":u);if(!t)return p&&(d.domNode.textContent=f.join("")),void he(e,d.domNode,r);d=h(e.doc.createTextNode(f.join("")),f),he(e,d.domNode,r)}else{if(!t)return void(r&&he(e,e.nodes[i].domNode,r));d=h(e.doc.createTextNode(a),void 0),he(e,d.domNode,r)}function h(e,t){return{kind:"#text",uid:"txt"+ ++Y,domNode:e,attached:!0,idx:i,parentIdx:-1,pieces:t,nextSibling:void 0}}e.nodes[i]=d,e.cmAppends[o](d,!1)}function je(e,t,n,i,o,r,a,s){for(var d=[],l=8;l<arguments.length;l++)d[l-8]=arguments[l];for(var c=[e,t,n,i,o,r,a,s],f=0;s>f;f++)c.push(d[f]);Ce(e,Se,c)}function Le(e,t,n){if(e.expressions){var i=e.expressions;if(i.length>t&&i[t]===n)return we;i[t]=n}else e.expressions=[],e.expressions[t]=n;return n}function Ee(e,t,n){if(t){if(n[2]){var i=e.oExpressions;return i[2*n[0]]?we:(i[2*n[0]]=1,n[1])}return Le(e,n[0],n[1])}return n}function Te(e,t,n,i){if(t){var o={kind:"#fragment",uid:"fra"+ ++Y,idx:n,parentIdx:-1,ns:"",domNode:void 0,attached:!0,nextSibling:void 0,firstChild:void 0,lastChild:void 0,contentView:null};e.nodes[n]=o;var r=e.cmAppends[i];r(o,!1),e.cmAppends[i+1]=function(e,t){r(e,!0),t||Re(o,e)}}}function He(e,t,n,i){Ce(e,Te,[e,t,n,i])}function Fe(e,t,n,i,o){if(t){var r=function(e,t,n){var i;if(1===n)i={kind:"#container",subKind:"##block",uid:"cnb"+ ++Y,idx:e,parentIdx:-1,ns:"",domNode:void 0,attached:!0,nextSibling:void 0,views:[],viewPool:[],cmAppend:t,lastRefresh:0,previousNbrOfViews:0,insertFn:null};else{if(2!==n)return console.warn("TODO: new cnt type"),null;i={kind:"#container",subKind:"##cpt",uid:"cnc"+ ++Y,idx:e,parentIdx:-1,ns:"",domNode:void 0,attached:!0,nextSibling:void 0,cmAppend:t,cptRef:null,template:null,data:null,contentView:null,dynamicParams:void 0}}return i}(n,null,o);return e.nodes[n]=r,Me(e,r,i),r}}function Me(e,t,n){if(e.cmAppends){var i=e.cmAppends[n];i?(t.cmAppend=function(e,t){i(e,!0)},i(t,!1)):console.log("ERROR?",i===Q)}}function Xe(e,t,n,i,o,r,a,s,d,l){var c;n=n||0,t?c=e.nodes[i]||Fe(e,t,i,o,2):(c=e.nodes[i]).lists&&(c.lists.sizes={});var f=Ee(e,n,r);if(c.template){if(f!==we&&c.cptRef!==f){var u=c.data;c.template.dispose(!0),m();var p=c.data;for(var v in u)if(u.hasOwnProperty(v)&&v.match(ie)){var h=RegExp.$1;b(p,h)&&(p[h]=u[h])}}}else{if(f===we)return void J(e,"Invalid component ref");m()}function m(){var t=c.template=f();c.cptRef=f,me(t.view,e,c),t.disconnectObserver(),c.data=t.api,function(t){if(d){var n=d.length;if(!t&&n)J(e,"Invalid parameter: "+d[0]);else for(var i=0;n>i;i+=2)b(t,d[i])?t[d[i]]=d[i+1]:J(e,"Invalid parameter: "+d[i])}}(t.api)}l&&(c.dynamicParams={}),0===n&&a&&ze(e,i,c,s,l)}function Ke(e,t,n,i,o,r,a,s,d,l){Xe(e,t,n,i,o,r,a,s,d,l),Ce(e,Me,[e,e.nodes[i],o]),a&&Ce(e,ze,[e,i,0,s,l])}function ze(e,t,n,i,o){var r=(n=n||e.nodes[t])?n.template:void 0;if(void 0!==r){if(r.view.lastRefresh=e.lastRefresh-1,We(n),n.contentView){r.api.$content=n.contentView;var a=n.contentView.instructions;a&&a.length&&(r.forceRefresh=!0)}if(r.view.cm)r.view.cmAppends=[n.cmAppend];else{if(o)for(var s=o.length,d=(n?n.dynamicParams:{})||{},l=r.api,c=0;s>c;c++)d[o[c]]||k(l,o[c]);var f=r.view.nodes[0];if(!f.attached)r.forceRefresh=!0,Pe(f,ke(e,n))}i&&he(e,r.api,i),r.render()}}function Be(e,t,n,i,o,r,a,s,d,l){var c,f=e.nodes,u=!1;if(f[i]){var p=(c=f[i]).viewPool;a>0&&!p&&((p=c.viewPool=[])[c.viewInstanceIdx]=c.contentView),p&&(c.contentView=p[a]),c.viewInstanceIdx=a,c.dataHolder=c.data=void 0,u=!0}else c={kind:"#param",uid:"pnd"+ ++Y,idx:i,parentIdx:o,nextSibling:void 0,domNode:void 0,attached:!0,dataName:r,dataHolder:void 0,data:void 0,dataIsList:void 0,contentView:void 0,dynamicParams:void 0,viewInstanceIdx:a,viewPool:void 0},f[i]=c;l&&(c.dynamicParams={});var v,h=f[o],m=r,g=void 0,w=h.data;if(w){if(c.dataHolder=w,void 0===c.dataIsList&&function(e,t,n,i){b(i,n)?t.dataIsList=!1:b(i,n+"List")?(t.dataIsList=!0,t.dataName=n+"List"):J(e,"Invalid parameter node: <."+n+">")}(e,c,m,w),m=c.dataName,g=c.data,c.dataIsList){var N=h.lists;N||(N=h.lists={sizes:{},listNames:[],listMap:{}}),N.listMap[m]||(N.listMap[m]=1,N.listNames.push(m));var y=N.sizes[m];y||(y=N.sizes[m]=0),(v=w[m][y])||(v=I(w[m],y)),N.sizes[m]+=1,c.data=v}else c.data=v=w[m],void 0===v&&(c.data=v=I(w,m));u&&v&&v["ΔΔ$content"]&&(c.contentView=v["ΔΔ$content"])}else J(e,"Invalid parameter node <."+r+"/>: no param node can be used in this context");c.lists&&(c.lists.sizes={});var x=h.dynamicParams;if(x&&(x[m]=1),d)if(v){if(g!==v)for(var C=d.length,k=0;C>k;k+=2)t&&!b(v,d[k])&&J(e,"Invalid param node parameter: "+d[k]),v[d[k]]=d[k+1]}else J(e,"Invalid param node parameter: "+d[0])}function We(e){if(e.lists)for(var t=e.lists,n=t.listNames,i=void 0,o=void 0,r=void 0,a=void 0,s=0;n.length>s;s++)i=n[s],(o=t.sizes[i]||0)<(a=(r=e.data[i]).length)&&r.splice(o,a-o)}function _e(e,t,n,i,o,r){var a=e.nodes[i];if(We(a),r)for(var s=r.length,d=a.dynamicParams,l=0;s>l;l++)d&&!d[r[l]]&&k(a.data,r[l]);void 0!==a.contentView&&E(a.dataHolder)}function qe(e,t,n,i,o,r,a,s){var d,l=e.nodes[i],c=l.kind,f=Q;if(a!==Q&&s!==Q&&null!==a&&"object"==typeof a&&(t&&"string"==typeof s&&N(a)&&!b(a,s)&&J(e,"Invalid property: '"+s+"'"),f=a[s]),"#container"===c)(function(e,t,n,i,o){if(i&&(!e.cm||b(i,o)))return!0;var r="";return n.template&&(r=" on <*"+n.template.templateName+"/>"),J(e,"Invalid parameter '"+o+"'"+r),!1})(e,0,l,d=l.data,r)&&(t&&at(e,d,r),d[r]=f);else if("#param"===c)if(0===r){var u=l;u.dataHolder&&(u.dataHolder[u.dataName]=f,d=u.dataHolder,r=u.dataName,t&&at(e,d,r,"."+r,!1,!0))}else d=function(e,t,n,i,o){if(0===o){if(n.dataHolder)return n.dataHolder[n.dataName]=i,n.dataHolder}else{if(n.data)return t&&!b(n.data,o)&&J(e,"Invalid param node parameter: "+o),n.data[o]=i,n.data;J(e,"Invalid param node parameter: "+o)}return null}(e,t,l,f,r),t&&at(e,d,r,"."+l.dataName);else if("#decorator"===c){var p=l;d=p.api,0===r?(r=function(e,t,n){var i=t.api,o=i[ae];return o===Q?(J(e,t.refName+" doesn't define any default parameter"),""):(i[o]=n,o)}(e,p,f),t&&r&&at(e,d,r,p.refName,!0)):t&&!function(e,t,n){if(!b(t.api,n))return J(e,"Invalid decorator parameter '"+n+"' on "+t.refName),!1;return!0}(e,p,r)||(t&&at(e,d,r,p.refName),d[r]=f)}var v=l.bindings;if(v===Q&&(v=l.bindings=[]),v[o]===Q){if(d){var h={propertyHolder:a,propertyName:s,watchFn:x(d,(function(){var e=d[r],t=h.propertyHolder;if(t!==Q&&null!==t&&h.propertyName!==Q&&t[h.propertyName]!==e){var n=w(t);0===n||n%2==1?Promise.resolve().then((function(){t[h.propertyName]=e})):t[h.propertyName]=e}}))};v[o]=h}}else{var m=v[o];m.propertyHolder=a,m.propertyName=s}}function Ue(e,t,n,i,o){var r,a=e.nodes[n];if(1===o)if(i[re]){if(b(i,ee)){var s=i[ee];s!==Q&&(r=s.$content)}}else b(i,"$content")&&(r=i.$content);else r=Ee(e,t,i);if(r!==we&&void 0!==i||(r=a.contentView),r){var d=r.projectionHost;if(d&&d.hostNode!==a&&Ge(r,r.nodes[0]),a.contentView&&a.contentView!==r&&Ge(a.contentView,a.contentView.nodes[0]),a.contentView=r,r.projectionHost={view:e,hostNode:a},r.cm)if("#element"===a.kind){var l=a.domNode;r.cmAppends=[function(e){e.domNode?st(e.domNode,a.domNode):e.domNode=l}]}else r.cmAppends=[ke(e,a)];else{var c=void 0,f=!1;if(r.domNode!==Q&&null!==r.nodes&&r.domNode.nodeType===Z&&(st(r.nodes[0].domNode,a.domNode),function(e,t,n){if(!e||e.cm||!e.nodes||!e.nodes.length)return;n===Q&&(n=e.domNode);if(n===Q||t===n)return;lt(e,!0,(function(e){return"#view"!==e.kind&&"#fragment"!==e.kind&&"#container"!==e.kind||e.domNode===n&&(e.domNode=t),!0}))}(r,a.domNode),f=!0),!f){if("#element"===a.kind){var u=a.domNode;c=function(e,t){e.domNode?st(e.domNode,u):e.domNode=u}}else c=ke(e,a);Pe(r.nodes[0],c)}}r.container=a,Ie(r)}}function Ye(e,t){if(0===t.idx&&e.projectionHost){if(!t.attached)return null;var n=e.projectionHost.hostNode;return"#element"===n.kind?n.domNode:Ye(e.projectionHost.view,n)}return 0===t.idx?e.parentView?Ye(e.parentView,e.container):e.rootDomNode:e.nodes[t.parentIdx].domNode}function Ge(e,t){if(t&&t.attached)if("#text"===t.kind||"#element"===t.kind){var n=Ye(e,t);t.attached=!1,n?n.removeChild(t.domNode):J(e,"Internal error - parent not found for: "+t.uid)}else if("#container"===t.kind){if("##block"===t.subKind){for(var i=t,o=i.views,r=o.length,a=void 0,s=0;r>s;s++)a=o[s].nodes[0],Ge(o[s],a),o[s].attached=a.attached=!1,"#container"!==a.kind&&"#fragment"!==a.kind||(a.domNode=void 0);i.views=[],i.previousNbrOfViews=0,i.viewPool=o.concat(i.viewPool)}else if("##cpt"===t.subKind){var d=t.template;a=d.view.nodes[0];Ge(d.view,a),d.view.attached=a.attached=!1,"#container"!==a.kind&&"#fragment"!==a.kind||(a.domNode=void 0)}}else if("#fragment"===t.kind){var l=t;if(l.attached=!1,l.contentView)Ge(l.contentView,l.contentView.nodes[0]);else if(l.firstChild)for(var c=l.firstChild;c;)Ge(e,c),c=c.nextSibling;l.domNode=void 0}else"#param"===t.kind?console.warn("TODO removeFromDom for param nodes"):console.warn("RemoveFromDom for "+t.kind)}var Je=V,Qe=P,Ze=function(e){var t=e.ΔFactory;if(t)return t;function n(t){return new e}return n[a]=!0,e[o]=n,n},et=D,tt=U;function nt(e){e.prototype[oe]=!0,V(e)}function it(e){e.prototype[re]=!0,V(e)}function ot(e,t){return!0===e.prototype[t]}function rt(e,t){var n=e[se];t="/"+t.replace(ne,""),e[se]=n===Q?t:n+t}function at(e,t,n,i,o,r){var a=t[se];if(a!==Q){var s="/"+n;if(a===s||a.indexOf(s)>-1)return!0}return J(e,i!==Q?o?"Invalid I/O binding expression on "+i+" (@defaultParam is not an @io param)":r?"Invalid I/O binding expression on "+i+"@paramValue (not an @io param)":"Invalid I/O binding expression on "+i+"."+n+" (not an @io param)":"Invalid I/O binding expression on '"+n+"' (not an @io param)"),!1}function st(e,t,n){t.appendChild(e)}function dt(e,t,n,i){n.insertBefore(e,t)}function lt(e,t,n){if(e!==Q&&null!==e){if(!n(e))return!1;if(null!==e.nodes&&e.nodes.length)for(var i=0,o=e.nodes;i<o.length;i++){if(!r(o[i]))return!1}}return!0;function r(e){var i=e.kind;if("#fragment"===i)return!!n(e)&&lt(e.contentView,t,n);if("#container"!==i)return n(e);if(!n(e))return!1;var o=e,r=o.subKind;if("##block"===r){var a=o.views;if(null!==a)for(var s=0,d=a;s<d.length;s++){if(!lt(d[s],t,n))return!1}if(t&&o.viewPool)for(var l=0,c=o.viewPool;l<c.length;l++){if(!lt(c[l],t,n))return!1}}else if("##cpt"===r){var f=o.template;if(null!==f)return lt(f.view,t,n)}else"##async"===r&&console.log("TODO: support scanNode for @async block");return!0}}var ct="-------------------------------------------------------------------------------";var ft,ut,pt,vt,ht=function(){function n(){}return e([P(D),t("design:type",String)],n.prototype,"id",void 0),e([P(),t("design:type",Object)],n.prototype,"title",void 0),e([P(),t("design:type",Object)],n.prototype,"$content",void 0),n=e([V],n)}(),mt=function(){function n(){}return e([rt,t("design:type",String)],n.prototype,"ΔΔselection",void 0),e([Qe(et),t("design:type",String)],n.prototype,"selection",void 0),e([Qe(tt(Ze(ht))),t("design:type",Array)],n.prototype,"tabList",void 0),n=e([nt],n)}(),gt=function(){function n(){}return n.prototype.$beforeRender=function(){var e=this.$api.tabList;if(e.length>0){for(var t=!1,n=0,i=e;n<i.length;n++){if(i[n].id===this.$api.selection){t=!0;break}}t||(this.$api.selection=e[0].id)}},e([Qe(Ze(mt)),t("design:type",mt)],n.prototype,"$api",void 0),n=e([it],n)}(),wt=(ft=["class","tabs"],ut=["class","header"],pt=["class","content"],vt=[2],ge("tabs","tabs/tabset.ts",{},(function(e,t,n){var i,o,r=0,a=be(e,0,4),s=t.$api,d=s.tabList,l=null,c=!1;De(e,a,0,0,"div",1,0,ft),De(e,a,1,1,"ul",1,0,ut),Fe(e,a,2,2,1);for(var f=function(t){i=Ne(e,0,2,2,++r),o=i.cm,c=s.selection===t.id,De(i,o,0,0,"li",0),function(e,t,n,i,o){if(o!==we){var r=Ee(e,t,o);if(r!==we){var a=e.nodes[n].domNode;void 0===r?a.removeAttribute(i):a.setAttribute(i,r)}}}(i,0,0,"class",Le(i,0,"tab "+(c?"selected":""))),Ue(i,0,0,Le(i,1,t.title)),function(e,t,n,i,o,r,a,s){if(t){var d=e.nodes[i];if("#element"===d.kind){var l=d.domNode;if(!l)return void J(e,"Cannot set "+o+" event listener: undefined DOM node");var c=p(l);a&&!1!==(s=s||{}).passive&&(s.passive=!0),l.addEventListener(o,(function(e){c.callback&&c.callback(e)}),s)}else if("#container"===d.kind){var f=d.template;f?u(f.api,!1):J(e,"Cannot set "+o+" event listener: undefined component template")}else"#param"===d.kind?u(d.data,!0):"#decorator"===d.kind&&u(d.api,!0)}else e.nodes[n].callback=r;function u(t,n){if(t&&b(t,o+"Emitter")){var i=t[o+"Emitter"];if(i.addListener&&"function"==typeof i.addListener){var r=p(null);i.addListener((function(e){r.callback&&r.callback(e)})),n&&"function"==typeof i.init&&i.init(o,t)}else J(e,"Invalid event emitter for: "+o)}else J(e,"Unsupported event: "+o)}function p(t){var o={kind:"#listener",uid:"evt"+ ++Y,idx:n,parentIdx:i,nextSibling:void 0,domNode:t,attached:!0,callback:r};return e.nodes[n]=o,o}}(i,o,1,0,"click",(function(){return s.selection=t.id}),1),c&&(l=t.$content),$e(i)},u=0,p=d;u<p.length;u++)f(p[u]);De(e,a,3,1,"div",0,0,pt),Ue(e,0,3,Le(e,0,l)),$e(e,0,vt)}),gt)),bt=function(){function n(){}return e([Qe(et),t("design:type",String)],n.prototype,"id",void 0),n=e([nt],n)}(),Nt=function(){function n(){}return n.prototype.$init=function(){Ct("<div class='init'>init: heavyComponent "+this.$api.id+"</div>")},n.prototype.$beforeRender=function(){Ct("beforeRender: heavyComponent "+this.$api.id)},n.prototype.$afterRender=function(){Ct("afterRender: heavyComponent "+this.$api.id)},e([Qe(Ze(bt)),t("design:type",bt)],n.prototype,"$api",void 0),n=e([it],n)}(),yt=function(){var e={},t=["class","heavy"],n=[" heavy component '","","'"];return ge("heavyComponent","tabs/tabs.ts",e,(function(e,i,o){var r=be(e,0,2);Ct("render: heavyComponent "+i.$api.id),De(e,r,0,0,"div",1,0,t),Se(e,r,0,1,1,0,n,1,Le(e,0,i.$api.id)),$e(e)}),Nt)}(),xt="<div> Logs: </div>";function Ct(e){xt+="<div>"+e+"</div>",document.getElementById("logs").innerHTML=xt}(function(){var n={},i=["class","info"],o=[" Tab Selection: ",""," "],r=["id","tabA"],a=["id","cptA"],s=["id","tabB"],d=["id","cptB"],l=["id","tabC"],c=["id","cptC"],f=function(){function n(){}return e([Qe(et),t("design:type",String)],n.prototype,"tabSelection",void 0),n=e([Je],n)}();return ge("main","tabs/tabs.ts",n,(function(e,t,n){var f,u,p,v,h,m,g,w,b,N,y,x,C,I,k=n.tabSelection,V=be(e,0,10);f=v=0,Te(e,V,0,0),De(e,V,1,1,"div",1,0,i),Se(e,V,0,2,2,0,o,1,Le(e,0,k)),Xe(e,V,0,3,1,Le(e,1,wt),0),qe(e,V,0,3,0,"selection",t,"tabSelection"),Be(e,V,0,4,3,"tab",f++,0,r),p=(u=ye(e,1,4,1,0)).cm,Be(e,V,0,5,4,"title",v++),He(h=ye(e,1,5,4,0),m=h.cm,0,0),je(h,m,1,1,1,0," tab title ",0),Oe(h,m,2,1,"b",1),je(h,m,1,3,2,0," A ",0),Ae(h,m),_e(e,0,0,5),Ke(u,p,1,0,0,[0,yt],1,0,a),Ae(u,p),_e(e,0,0,4),Be(e,V,0,6,3,"tab",f++,0,s),w=(g=ye(e,1,6,1,0)).cm,Be(e,V,0,7,6,"title",v++),He(b=ye(e,1,7,4,0),N=b.cm,0,0),je(b,N,1,1,1,0," tab title ",0),Oe(b,N,2,1,"b",1),je(b,N,1,3,2,0," B ",0),Ae(b,N),_e(e,0,0,7),Ke(g,w,1,0,0,[0,yt],1,0,d),Ae(g,w),_e(e,0,0,6),Be(e,V,0,8,3,"tab",f++,0,l),x=(y=ye(e,1,8,1,0)).cm,Be(e,V,0,9,8,"title",v++),He(C=ye(e,1,9,4,0),I=C.cm,0,0),je(C,I,1,1,1,0," tab title ",0),Oe(C,I,2,1,"b",1),je(C,I,1,3,2,0," C ",0),Ae(C,I),_e(e,0,0,9),Ke(y,x,1,0,0,[0,yt],1,0,c),Ae(y,x),_e(e,0,0,8),ze(e,3),$e(e)}),f)})()().attach(document.getElementById("output")).render()}();
