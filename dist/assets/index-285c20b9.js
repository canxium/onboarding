import{_ as pe}from"./index-06a81a86.js";const fe=Symbol(),Z=Object.getPrototypeOf,F=new WeakMap,me=e=>e&&(F.has(e)?F.get(e):Z(e)===Object.prototype||Z(e)===Array.prototype),ge=e=>me(e)&&e[fe]||null,ee=(e,t=!0)=>{F.set(e,t)},J=e=>typeof e=="object"&&e!==null,C=new WeakMap,x=new WeakSet,he=(e=Object.is,t=(o,h)=>new Proxy(o,h),s=o=>J(o)&&!x.has(o)&&(Array.isArray(o)||!(Symbol.iterator in o))&&!(o instanceof WeakMap)&&!(o instanceof WeakSet)&&!(o instanceof Error)&&!(o instanceof Number)&&!(o instanceof Date)&&!(o instanceof String)&&!(o instanceof RegExp)&&!(o instanceof ArrayBuffer),r=o=>{switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:throw o}},l=new WeakMap,c=(o,h,w=r)=>{const b=l.get(o);if((b==null?void 0:b[0])===h)return b[1];const y=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o));return ee(y,!0),l.set(o,[h,y]),Reflect.ownKeys(o).forEach(_=>{if(Object.getOwnPropertyDescriptor(y,_))return;const L=Reflect.get(o,_),D={value:L,enumerable:!0,configurable:!0};if(x.has(L))ee(L,!1);else if(L instanceof Promise)delete D.value,D.get=()=>w(L);else if(C.has(L)){const[v,z]=C.get(L);D.value=c(v,z(),w)}Object.defineProperty(y,_,D)}),Object.preventExtensions(y)},m=new WeakMap,f=[1,1],W=o=>{if(!J(o))throw new Error("object required");const h=m.get(o);if(h)return h;let w=f[0];const b=new Set,y=(i,a=++f[0])=>{w!==a&&(w=a,b.forEach(n=>n(i,a)))};let _=f[1];const L=(i=++f[1])=>(_!==i&&!b.size&&(_=i,v.forEach(([a])=>{const n=a[1](i);n>w&&(w=n)})),w),D=i=>(a,n)=>{const g=[...a];g[1]=[i,...g[1]],y(g,n)},v=new Map,z=(i,a)=>{if(b.size){const n=a[3](D(i));v.set(i,[a,n])}else v.set(i,[a])},Y=i=>{var a;const n=v.get(i);n&&(v.delete(i),(a=n[1])==null||a.call(n))},de=i=>(b.add(i),b.size===1&&v.forEach(([n,g],P)=>{const k=n[3](D(P));v.set(P,[n,k])}),()=>{b.delete(i),b.size===0&&v.forEach(([n,g],P)=>{g&&(g(),v.set(P,[n]))})}),H=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o)),V=t(H,{deleteProperty(i,a){const n=Reflect.get(i,a);Y(a);const g=Reflect.deleteProperty(i,a);return g&&y(["delete",[a],n]),g},set(i,a,n,g){const P=Reflect.has(i,a),k=Reflect.get(i,a,g);if(P&&(e(k,n)||m.has(n)&&e(k,m.get(n))))return!0;Y(a),J(n)&&(n=ge(n)||n);let $=n;if(n instanceof Promise)n.then(A=>{n.status="fulfilled",n.value=A,y(["resolve",[a],A])}).catch(A=>{n.status="rejected",n.reason=A,y(["reject",[a],A])});else{!C.has(n)&&s(n)&&($=W(n));const A=!x.has($)&&C.get($);A&&z(a,A)}return Reflect.set(i,a,$,g),y(["set",[a],n,k]),!0}});m.set(o,V);const ue=[H,L,c,de];return C.set(V,ue),Reflect.ownKeys(o).forEach(i=>{const a=Object.getOwnPropertyDescriptor(o,i);"value"in a&&(V[i]=o[i],delete a.value,delete a.writable),Object.defineProperty(H,i,a)}),V})=>[W,C,x,e,t,s,r,l,c,m,f],[be]=he();function S(e={}){return be(e)}function M(e,t,s){const r=C.get(e);let l;const c=[],m=r[3];let f=!1;const o=m(h=>{if(c.push(h),s){t(c.splice(0));return}l||(l=Promise.resolve().then(()=>{l=void 0,f&&t(c.splice(0))}))});return f=!0,()=>{f=!1,o()}}function ye(e,t){const s=C.get(e),[r,l,c]=s;return c(r,l(),t)}const d=S({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),ce={state:d,subscribe(e){return M(d,()=>e(d))},push(e,t){e!==d.view&&(d.view=e,t&&(d.data=t),d.history.push(e))},reset(e){d.view=e,d.history=[e]},replace(e){d.history.length>1&&(d.history[d.history.length-1]=e,d.view=e)},goBack(){if(d.history.length>1){d.history.pop();const[e]=d.history.slice(-1);d.view=e}},setData(e){d.data=e}},p={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return p.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return p.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(p.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!p.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let r=e;r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(p.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(p.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=ce.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},ve=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),u=S({enabled:ve,userSessionId:"",events:[],connectedWalletId:void 0}),Ee={state:u,subscribe(e){return M(u.events,()=>e(ye(u.events[u.events.length-1])))},initialize(){u.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(u.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){u.connectedWalletId=e},click(e){if(u.enabled){const t={type:"CLICK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},track(e){if(u.enabled){const t={type:"TRACK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},view(e){if(u.enabled){const t={type:"VIEW",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}}},I=S({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),E={state:I,subscribe(e){return M(I,()=>e(I))},setChains(e){I.chains=e},setWalletConnectUri(e){I.walletConnectUri=e},setIsCustomDesktop(e){I.isCustomDesktop=e},setIsCustomMobile(e){I.isCustomMobile=e},setIsDataLoaded(e){I.isDataLoaded=e},setIsUiLoaded(e){I.isUiLoaded=e},setIsAuth(e){I.isAuth=e}},B=S({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),N={state:B,subscribe(e){return M(B,()=>e(B))},setConfig(e){var t,s;Ee.initialize(),E.setChains(e.chains),E.setIsAuth(!!e.enableAuthMode),E.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),E.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),p.setModalVersionInStorage(),Object.assign(B,e)}};var we=Object.defineProperty,te=Object.getOwnPropertySymbols,Ie=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,se=(e,t,s)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Le=(e,t)=>{for(var s in t||(t={}))Ie.call(t,s)&&se(e,s,t[s]);if(te)for(var s of te(t))Oe.call(t,s)&&se(e,s,t[s]);return e};const G="https://explorer-api.walletconnect.com",Q="wcm",X="js-2.6.2";async function K(e,t){const s=Le({sdkType:Q,sdkVersion:X},t),r=new URL(e,G);return r.searchParams.append("projectId",N.state.projectId),Object.entries(s).forEach(([l,c])=>{c&&r.searchParams.append(l,String(c))}),(await fetch(r)).json()}const U={async getDesktopListings(e){return K("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return K("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return K("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return K("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${G}/w3m/v1/getWalletImage/${e}?projectId=${N.state.projectId}&sdkType=${Q}&sdkVersion=${X}`},getAssetImageUrl(e){return`${G}/w3m/v1/getAssetImage/${e}?projectId=${N.state.projectId}&sdkType=${Q}&sdkVersion=${X}`}};var We=Object.defineProperty,oe=Object.getOwnPropertySymbols,Ae=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,ne=(e,t,s)=>t in e?We(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Se=(e,t)=>{for(var s in t||(t={}))Ae.call(t,s)&&ne(e,s,t[s]);if(oe)for(var s of oe(t))Ce.call(t,s)&&ne(e,s,t[s]);return e};const re=p.isMobile(),O=S({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),ke={state:O,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=N.state;if(e==="NONE"||t==="ALL"&&!e)return O.recomendedWallets;if(p.isArray(e)){const s={recommendedIds:e.join(",")},{listings:r}=await U.getAllListings(s),l=Object.values(r);l.sort((c,m)=>{const f=e.indexOf(c.id),W=e.indexOf(m.id);return f-W}),O.recomendedWallets=l}else{const{chains:s,isAuth:r}=E.state,l=s==null?void 0:s.join(","),c=p.isArray(t),m={page:1,sdks:r?"auth_v1":void 0,entries:p.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:f}=re?await U.getMobileListings(m):await U.getDesktopListings(m);O.recomendedWallets=Object.values(f)}return O.recomendedWallets},async getWallets(e){const t=Se({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:r}=N.state,{recomendedWallets:l}=O;if(r==="ALL")return O.wallets;l.length?t.excludedIds=l.map(w=>w.id).join(","):p.isArray(s)&&(t.excludedIds=s.join(",")),p.isArray(r)&&(t.excludedIds=[t.excludedIds,r].filter(Boolean).join(",")),E.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:m}=e,{listings:f,total:W}=re?await U.getMobileListings(t):await U.getDesktopListings(t),o=Object.values(f),h=m?"search":"wallets";return O[h]={listings:[...O[h].listings,...o],total:W,page:c??1},{listings:o,total:W}},getWalletImageUrl(e){return U.getWalletImageUrl(e)},getAssetImageUrl(e){return U.getAssetImageUrl(e)},resetSearch(){O.search={listings:[],total:0,page:1}}},R=S({open:!1}),q={state:R,subscribe(e){return M(R,()=>e(R))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:r}=E.state;if(p.removeWalletConnectDeepLink(),E.setWalletConnectUri(e==null?void 0:e.uri),E.setChains(e==null?void 0:e.chains),ce.reset("ConnectWallet"),s&&r)R.open=!0,t();else{const l=setInterval(()=>{const c=E.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),R.open=!0,t())},200)}})},close(){R.open=!1}};var De=Object.defineProperty,ae=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,ie=(e,t,s)=>t in e?De(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Me=(e,t)=>{for(var s in t||(t={}))Ue.call(t,s)&&ie(e,s,t[s]);if(ae)for(var s of ae(t))je.call(t,s)&&ie(e,s,t[s]);return e};function _e(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const T=S({themeMode:_e()?"dark":"light"}),le={state:T,subscribe(e){return M(T,()=>e(T))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(T.themeMode=t),s&&(T.themeVariables=Me({},s))}},j=S({open:!1,message:"",variant:"success"}),Te={state:j,subscribe(e){return M(j,()=>e(j))},openToast(e,t){j.open=!0,j.message=e,j.variant=t},closeToast(){j.open=!1}};class Pe{constructor(t){this.openModal=q.open,this.closeModal=q.close,this.subscribeModal=q.subscribe,this.setTheme=le.setThemeConfig,le.setThemeConfig(t),N.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await pe(()=>import("./index-faf80571.js"),["assets/index-faf80571.js","assets/index-06a81a86.js","assets/index-f645abdd.css"]);const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),E.setIsUiLoaded(!0)}}}const Ve=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:Pe},Symbol.toStringTag,{value:"Module"}));export{Ee as R,ce as T,p as a,Ve as i,le as n,Te as o,E as p,q as s,ke as t,N as y};
