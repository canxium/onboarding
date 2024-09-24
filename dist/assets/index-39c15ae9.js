import{S as j,_ as A,a as w,O as l,b as h,A as x,c as T,i as d,E as z,d as J,e as U,m as q,s as K,o as G,f as H,g,h as Y,p as X,j as Z,k as $,l as _,n as ee,q as ne,r as te,t as ae,u as W,v as re,w as ie,x as L,y as se,z as N,B as ue,C as O,D as oe}from"./zipWith-da8d0d75.js";import{Q as nn,H as tn,F as an,T as rn,N as sn,M as un,U as on,R as cn,K as fn,V as ln,L as vn,W as dn,X as mn,I as hn,J as pn,a9 as bn,aa as gn,ab as yn,ac as An,ad as wn,ae as En,af as In,ag as Fn,ah as xn,Y as Tn,ai as qn,aj as Sn,Z as kn,ak as Ln,al as Mn,am as Wn,an as On,a8 as Cn,ao as Vn,ap as Rn,aq as jn,ar as zn,as as Un,at as Nn,au as Pn,av as Dn,aw as Qn,ax as Bn,ay as Jn,az as Kn,$ as Gn,aA as Hn,aB as Yn,aC as Xn,aD as Zn,aE as $n,aF as _n,aG as et,aH as nt,aI as tt,aJ as at,aS as rt,aK as it,aL as st,a0 as ut,aM as ot,aN as ct,aO as ft,aP as lt,aQ as vt,aR as dt,aT as mt,aU as ht,aV as pt,aW as bt,aX as gt,G as yt,a1 as At,a2 as wt,aY as Et,aZ as It,P as Ft,a_ as xt,a$ as Tt,b0 as qt,b1 as St,b2 as kt,a3 as Lt,b3 as Mt,b4 as Wt,b9 as Ot,b5 as Ct,b6 as Vt,b7 as Rt,b8 as jt,ba as zt,bb as Ut,bc as Nt,a7 as Pt,bd as Dt,be as Qt,bf as Bt,bg as Jt,bh as Kt,bi as Gt,bj as Ht,bk as Yt,bl as Xt,bm as Zt,bn as $t,bo as _t,bp as ea,bq as na,br as ta,bs as aa,bt as ra,bu as ia,bv as sa,bw as ua,a4 as oa,bx as ca,by as fa,bz as la,bA as va,a5 as da,bB as ma,bC as ha,bD as pa,bE as ba,bF as ga,bG as ya,bH as Aa,bI as wa,a6 as Ea,bJ as Ia,bK as Fa}from"./zipWith-da8d0d75.js";var P={now:function(){return(P.delegate||performance).now()},delegate:void 0},b={schedule:function(n){var t=requestAnimationFrame,e=cancelAnimationFrame,r=b.delegate;r&&(t=r.requestAnimationFrame,e=r.cancelAnimationFrame);var a=t(function(i){e=void 0,n(i)});return new j(function(){return e==null?void 0:e(a)})},requestAnimationFrame:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=b.delegate;return((e==null?void 0:e.requestAnimationFrame)||requestAnimationFrame).apply(void 0,A([],w(n)))},cancelAnimationFrame:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=b.delegate;return((e==null?void 0:e.cancelAnimationFrame)||cancelAnimationFrame).apply(void 0,A([],w(n)))},delegate:void 0};function Oe(n){return n?D(n):ce}function D(n){return new l(function(t){var e=n||P,r=e.now(),a=0,i=function(){t.closed||(a=b.requestAnimationFrame(function(s){a=0;var u=e.now();t.next({timestamp:n?u:s,elapsed:u-r}),i()}))};return i(),function(){a&&b.cancelAnimationFrame(a)}})}var ce=D(),fe=1,S,k={};function C(n){return n in k?(delete k[n],!0):!1}var Q={setImmediate:function(n){var t=fe++;return k[t]=!0,S||(S=Promise.resolve()),S.then(function(){return C(t)&&n()}),t},clearImmediate:function(n){C(n)}},le=Q.setImmediate,ve=Q.clearImmediate,I={setImmediate:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=I.delegate;return((e==null?void 0:e.setImmediate)||le).apply(void 0,A([],w(n)))},clearImmediate:function(n){var t=I.delegate;return((t==null?void 0:t.clearImmediate)||ve)(n)},delegate:void 0},de=function(n){h(t,n);function t(e,r){var a=n.call(this,e,r)||this;return a.scheduler=e,a.work=r,a}return t.prototype.requestAsyncId=function(e,r,a){return a===void 0&&(a=0),a!==null&&a>0?n.prototype.requestAsyncId.call(this,e,r,a):(e.actions.push(this),e._scheduled||(e._scheduled=I.setImmediate(e.flush.bind(e,void 0))))},t.prototype.recycleAsyncId=function(e,r,a){var i;if(a===void 0&&(a=0),a!=null?a>0:this.delay>0)return n.prototype.recycleAsyncId.call(this,e,r,a);var s=e.actions;r!=null&&((i=s[s.length-1])===null||i===void 0?void 0:i.id)!==r&&(I.clearImmediate(r),e._scheduled===r&&(e._scheduled=void 0))},t}(x),me=function(n){h(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.flush=function(e){this._active=!0;var r=this._scheduled;this._scheduled=void 0;var a=this.actions,i;e=e||a.shift();do if(i=e.execute(e.state,e.delay))break;while((e=a[0])&&e.id===r&&a.shift());if(this._active=!1,i){for(;(e=a[0])&&e.id===r&&a.shift();)e.unsubscribe();throw i}},t}(T),he=new me(de),Ce=he,pe=function(n){h(t,n);function t(e,r){var a=n.call(this,e,r)||this;return a.scheduler=e,a.work=r,a}return t.prototype.schedule=function(e,r){return r===void 0&&(r=0),r>0?n.prototype.schedule.call(this,e,r):(this.delay=r,this.state=e,this.scheduler.flush(this),this)},t.prototype.execute=function(e,r){return r>0||this.closed?n.prototype.execute.call(this,e,r):this._execute(e,r)},t.prototype.requestAsyncId=function(e,r,a){return a===void 0&&(a=0),a!=null&&a>0||a==null&&this.delay>0?n.prototype.requestAsyncId.call(this,e,r,a):(e.flush(this),0)},t}(x),be=function(n){h(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t}(T),ge=new be(pe),Ve=ge,ye=function(n){h(t,n);function t(e,r){var a=n.call(this,e,r)||this;return a.scheduler=e,a.work=r,a}return t.prototype.requestAsyncId=function(e,r,a){return a===void 0&&(a=0),a!==null&&a>0?n.prototype.requestAsyncId.call(this,e,r,a):(e.actions.push(this),e._scheduled||(e._scheduled=b.requestAnimationFrame(function(){return e.flush(void 0)})))},t.prototype.recycleAsyncId=function(e,r,a){var i;if(a===void 0&&(a=0),a!=null?a>0:this.delay>0)return n.prototype.recycleAsyncId.call(this,e,r,a);var s=e.actions;r!=null&&((i=s[s.length-1])===null||i===void 0?void 0:i.id)!==r&&(b.cancelAnimationFrame(r),e._scheduled=void 0)},t}(x),Ae=function(n){h(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.flush=function(e){this._active=!0;var r=this._scheduled;this._scheduled=void 0;var a=this.actions,i;e=e||a.shift();do if(i=e.execute(e.state,e.delay))break;while((e=a[0])&&e.id===r&&a.shift());if(this._active=!1,i){for(;(e=a[0])&&e.id===r&&a.shift();)e.unsubscribe();throw i}},t}(T),we=new Ae(ye),Re=we,je=function(n){h(t,n);function t(e,r){e===void 0&&(e=Ee),r===void 0&&(r=1/0);var a=n.call(this,e,function(){return a.frame})||this;return a.maxFrames=r,a.frame=0,a.index=-1,a}return t.prototype.flush=function(){for(var e=this,r=e.actions,a=e.maxFrames,i,s;(s=r[0])&&s.delay<=a&&(r.shift(),this.frame=s.delay,!(i=s.execute(s.state,s.delay))););if(i){for(;s=r.shift();)s.unsubscribe();throw i}},t.frameTimeFactor=10,t}(T),Ee=function(n){h(t,n);function t(e,r,a){a===void 0&&(a=e.index+=1);var i=n.call(this,e,r)||this;return i.scheduler=e,i.work=r,i.index=a,i.active=!0,i.index=e.index=a,i}return t.prototype.schedule=function(e,r){if(r===void 0&&(r=0),Number.isFinite(r)){if(!this.id)return n.prototype.schedule.call(this,e,r);this.active=!1;var a=new t(this.scheduler,this.work);return this.add(a),a.schedule(e,r)}else return j.EMPTY},t.prototype.requestAsyncId=function(e,r,a){a===void 0&&(a=0),this.delay=e.frame+a;var i=e.actions;return i.push(this),i.sort(t.sortActions),1},t.prototype.recycleAsyncId=function(e,r,a){},t.prototype._execute=function(e,r){if(this.active===!0)return n.prototype._execute.call(this,e,r)},t.sortActions=function(e,r){return e.delay===r.delay?e.index===r.index?0:e.index>r.index?1:-1:e.delay>r.delay?1:-1},t}(x);function ze(n){return!!n&&(n instanceof l||d(n.lift)&&d(n.subscribe))}function Ue(n,t){var e=typeof t=="object";return new Promise(function(r,a){var i=!1,s;n.subscribe({next:function(u){s=u,i=!0},error:a,complete:function(){i?r(s):e?r(t.defaultValue):a(new z)}})})}function Ne(n,t){var e=typeof t=="object";return new Promise(function(r,a){var i=new J({next:function(s){r(s),i.unsubscribe()},error:a,complete:function(){e?r(t.defaultValue):a(new z)}});n.subscribe(i)})}function F(n,t,e,r){if(e)if(U(e))r=e;else return function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];return F(n,t,r).apply(this,a).pipe(q(e))};return r?function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];return F(n,t).apply(this,a).pipe(K(r),G(r))}:function(){for(var a=this,i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];var u=new H,o=!0;return new l(function(f){var c=u.subscribe(f);if(o){o=!1;var v=!1,E=!1;t.apply(a,A(A([],w(i)),[function(){for(var m=[],p=0;p<arguments.length;p++)m[p]=arguments[p];if(n){var y=m.shift();if(y!=null){u.error(y);return}}u.next(1<m.length?m:m[0]),E=!0,v&&u.complete()}])),E&&u.complete(),v=!0}return c})}}function Pe(n,t,e){return F(!1,n,t,e)}function De(n,t,e){return F(!0,n,t,e)}function M(n){return new l(function(t){g(n()).subscribe(t)})}var Ie={connector:function(){return new Y},resetOnDisconnect:!0};function Qe(n,t){t===void 0&&(t=Ie);var e=null,r=t.connector,a=t.resetOnDisconnect,i=a===void 0?!0:a,s=r(),u=new l(function(o){return s.subscribe(o)});return u.connect=function(){return(!e||e.closed)&&(e=M(function(){return n}).subscribe(s),i&&e.add(function(){return s=r()})),e},u}function Be(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=X(n),r=Z(n),a=r.args,i=r.keys,s=new l(function(u){var o=a.length;if(!o){u.complete();return}for(var f=new Array(o),c=o,v=o,E=function(p){var y=!1;g(a[p]).subscribe($(u,function(B){y||(y=!0,v--),f[p]=B},function(){return c--},void 0,function(){(!c||!y)&&(v||u.next(i?_(i,f):f),u.complete())}))},m=0;m<o;m++)E(m)});return e?s.pipe(q(e)):s}var Fe=["addListener","removeListener"],xe=["addEventListener","removeEventListener"],Te=["on","off"];function V(n,t,e,r){if(d(e)&&(r=e,e=void 0),r)return V(n,t,e).pipe(q(r));var a=w(ke(n)?xe.map(function(u){return function(o){return n[u](t,o,e)}}):qe(n)?Fe.map(R(n,t)):Se(n)?Te.map(R(n,t)):[],2),i=a[0],s=a[1];if(!i&&ee(n))return ne(function(u){return V(u,t,e)})(g(n));if(!i)throw new TypeError("Invalid event target");return new l(function(u){var o=function(){for(var f=[],c=0;c<arguments.length;c++)f[c]=arguments[c];return u.next(1<f.length?f:f[0])};return i(o),function(){return s(o)}})}function R(n,t){return function(e){return function(r){return n[e](t,r)}}}function qe(n){return d(n.addListener)&&d(n.removeListener)}function Se(n){return d(n.on)&&d(n.off)}function ke(n){return d(n.addEventListener)&&d(n.removeEventListener)}function Le(n,t,e){return e?Le(n,t).pipe(q(e)):new l(function(r){var a=function(){for(var s=[],u=0;u<arguments.length;u++)s[u]=arguments[u];return r.next(s.length===1?s[0]:s)},i=n(a);return d(t)?function(){return t(a,i)}:void 0})}function Je(n,t,e,r,a){var i,s,u,o;arguments.length===1?(i=n,o=i.initialState,t=i.condition,e=i.iterate,s=i.resultSelector,u=s===void 0?W:s,a=i.scheduler):(o=n,!r||U(r)?(u=W,a=r):u=r);function f(){var c;return ae(this,function(v){switch(v.label){case 0:c=o,v.label=1;case 1:return!t||t(c)?[4,u(c)]:[3,4];case 2:v.sent(),v.label=3;case 3:return c=e(c),[3,1];case 4:return[2]}})}return M(a?function(){return te(f(),a)}:f)}function Ke(n,t,e){return M(function(){return n()?t:e})}function Ge(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=re(n),r=ie(n,1/0),a=n;return a.length?a.length===1?g(a[0]):se(r)(N(a,e)):L}var Me=new l(ue);function He(){return Me}function Ye(n,t){return N(Object.entries(n),t)}function Xe(n,t,e){return[O(t,e)(g(n)),O(oe(t,e))(g(n))]}function Ze(n,t,e){if(t==null&&(t=n,n=0),t<=0)return L;var r=t+n;return new l(e?function(a){var i=n;return e.schedule(function(){i<r?(a.next(i++),this.schedule()):a.complete()})}:function(a){for(var i=n;i<r&&!a.closed;)a.next(i++);a.complete()})}function $e(n,t){return new l(function(e){var r=n(),a=t(r),i=a?g(a):L;return i.subscribe(e),function(){r&&r.unsubscribe()}})}export{nn as ArgumentOutOfRangeError,H as AsyncSubject,tn as BehaviorSubject,an as ConnectableObservable,L as EMPTY,z as EmptyError,Me as NEVER,rn as NotFoundError,sn as Notification,un as NotificationKind,on as ObjectUnsubscribedError,l as Observable,cn as ReplaySubject,fn as Scheduler,ln as SequenceError,Y as Subject,vn as Subscriber,j as Subscription,dn as TimeoutError,mn as UnsubscriptionError,Ee as VirtualAction,je as VirtualTimeScheduler,Re as animationFrame,we as animationFrameScheduler,Oe as animationFrames,Ce as asap,he as asapScheduler,hn as async,pn as asyncScheduler,bn as audit,gn as auditTime,Pe as bindCallback,De as bindNodeCallback,yn as buffer,An as bufferCount,wn as bufferTime,En as bufferToggle,In as bufferWhen,Fn as catchError,xn as combineAll,Tn as combineLatest,qn as combineLatestAll,Sn as combineLatestWith,kn as concat,Ln as concatAll,Mn as concatMap,Wn as concatMapTo,On as concatWith,Cn as config,Vn as connect,Qe as connectable,Rn as count,jn as debounce,zn as debounceTime,Un as defaultIfEmpty,M as defer,Nn as delay,Pn as delayWhen,Dn as dematerialize,Qn as distinct,Bn as distinctUntilChanged,Jn as distinctUntilKeyChanged,Kn as elementAt,Gn as empty,Hn as endWith,Yn as every,Xn as exhaust,Zn as exhaustAll,$n as exhaustMap,_n as expand,O as filter,et as finalize,nt as find,tt as findIndex,at as first,Ne as firstValueFrom,rt as flatMap,Be as forkJoin,N as from,V as fromEvent,Le as fromEventPattern,Je as generate,it as groupBy,W as identity,st as ignoreElements,Ke as iif,ut as interval,ot as isEmpty,ze as isObservable,ct as last,Ue as lastValueFrom,ft as map,lt as mapTo,vt as materialize,dt as max,Ge as merge,se as mergeAll,ne as mergeMap,mt as mergeMapTo,ht as mergeScan,pt as mergeWith,bt as min,gt as multicast,He as never,ue as noop,yt as observable,G as observeOn,At as of,wt as onErrorResumeNext,Et as onErrorResumeNextWith,Ye as pairs,It as pairwise,Xe as partition,Ft as pipe,xt as pluck,Tt as publish,qt as publishBehavior,St as publishLast,kt as publishReplay,Ve as queue,ge as queueScheduler,Lt as race,Mt as raceWith,Ze as range,Wt as reduce,Ot as refCount,Ct as repeat,Vt as repeatWhen,Rt as retry,jt as retryWhen,zt as sample,Ut as sampleTime,Nt as scan,Pt as scheduled,Dt as sequenceEqual,Qt as share,Bt as shareReplay,Jt as single,Kt as skip,Gt as skipLast,Ht as skipUntil,Yt as skipWhile,Xt as startWith,K as subscribeOn,Zt as switchAll,$t as switchMap,_t as switchMapTo,ea as switchScan,na as take,ta as takeLast,aa as takeUntil,ra as takeWhile,ia as tap,sa as throttle,ua as throttleTime,oa as throwError,ca as throwIfEmpty,fa as timeInterval,la as timeout,va as timeoutWith,da as timer,ma as timestamp,ha as toArray,$e as using,pa as window,ba as windowCount,ga as windowTime,ya as windowToggle,Aa as windowWhen,wa as withLatestFrom,Ea as zip,Ia as zipAll,Fa as zipWith};
