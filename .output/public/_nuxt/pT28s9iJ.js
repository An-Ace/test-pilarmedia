import{d as ue,E as D,G as X,H as Q,J as P,K as Be,M as zt,O as Ht,P as rt,r as he,j as ke,Q as Gt,R as it,S as Ft,U as jt,V as st,W as Kt,X as Zt,Y as we,Z as Wt,$ as ot,a0 as Ae,a1 as Xt,a2 as Oe,a3 as Yt,a4 as Vt,a5 as qt,a6 as Jt,a7 as Xe,a8 as Ye,a9 as Qt,aa as en,ab as tn,ac as nn,c as an,ad as rn,w as A,e as fe,o as De,b as K,A as sn,g as _,ae as on,af as le,n as Ne,m as lt,D as ct,p as ln,q as cn,_ as dn,h as j,t as re}from"./D0exQMQl.js";const un=ue({name:"ChevronLeft",render(){return D("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},D("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}}),gn=X("collapse","width: 100%;",[X("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[Q("disabled",[P("header","cursor: not-allowed;",[P("header-main",`
 color: var(--n-title-text-color-disabled);
 `),X("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),X("collapse-item","margin-left: 32px;"),Be("&:first-child","margin-top: 0;"),Be("&:first-child >",[P("header","padding-top: 0;")]),Q("left-arrow-placement",[P("header",[X("collapse-item-arrow","margin-right: 4px;")])]),Q("right-arrow-placement",[P("header",[X("collapse-item-arrow","margin-left: 4px;")])]),P("content-wrapper",[P("content-inner","padding-top: 16px;"),zt({duration:"0.15s"})]),Q("active",[P("header",[Q("active",[X("collapse-item-arrow","transform: rotate(90deg);")])])]),Be("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),Ht("disabled",[Q("trigger-area-main",[P("header",[P("header-main","cursor: pointer;"),X("collapse-item-arrow","cursor: default;")])]),Q("trigger-area-arrow",[P("header",[X("collapse-item-arrow","cursor: pointer;")])]),Q("trigger-area-extra",[P("header",[P("header-extra","cursor: pointer;")])])]),P("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `,[P("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),P("header-extra",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),X("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),pn=Object.assign(Object.assign({},it.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},triggerAreas:{type:Array,default:()=>["main","extra","arrow"]},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),dt=Zt("n-collapse"),bn=ue({name:"Collapse",props:pn,setup(e,{slots:t}){const{mergedClsPrefixRef:n,inlineThemeDisabled:a,mergedRtlRef:d}=rt(e),g=he(e.defaultExpandedNames),i=ke(()=>e.expandedNames),r=Gt(i,g),u=it("Collapse","-collapse",gn,Ft,e,n);function c(x){const{"onUpdate:expandedNames":w,onUpdateExpandedNames:$,onExpandedNamesChange:L}=e;$&&we($,x),w&&we(w,x),L&&we(L,x),g.value=x}function h(x){const{onItemHeaderClick:w}=e;w&&we(w,x)}function m(x,w,$){const{accordion:L}=e,{value:G}=r;if(L)x?(c([w]),h({name:w,expanded:!0,event:$})):(c([]),h({name:w,expanded:!1,event:$}));else if(!Array.isArray(G))c([w]),h({name:w,expanded:!0,event:$});else{const T=G.slice(),U=T.findIndex(R=>w===R);~U?(T.splice(U,1),c(T),h({name:w,expanded:!1,event:$})):(T.push(w),c(T),h({name:w,expanded:!0,event:$}))}}jt(dt,{props:e,mergedClsPrefixRef:n,expandedNamesRef:r,slots:t,toggleItem:m});const S=st("Collapse",d,n),C=ke(()=>{const{common:{cubicBezierEaseInOut:x},self:{titleFontWeight:w,dividerColor:$,titlePadding:L,titleTextColor:G,titleTextColorDisabled:T,textColor:U,arrowColor:R,fontSize:te,titleFontSize:Y,arrowColorDisabled:z,itemMargin:q}}=u.value;return{"--n-font-size":te,"--n-bezier":x,"--n-text-color":U,"--n-divider-color":$,"--n-title-padding":L,"--n-title-font-size":Y,"--n-title-text-color":G,"--n-title-text-color-disabled":T,"--n-title-font-weight":w,"--n-arrow-color":R,"--n-arrow-color-disabled":z,"--n-item-margin":q}}),I=a?Kt("collapse",void 0,C,e):void 0;return{rtlEnabled:S,mergedTheme:u,mergedClsPrefix:n,cssVars:a?void 0:C,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),D("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),mn=ue({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:Wt(ot(e,"show"))}},render(){return D(Xt,null,{default:()=>{const{show:e,displayDirective:t,onceTrue:n,clsPrefix:a}=this,d=t==="show"&&n,g=D("div",{class:`${a}-collapse-item__content-wrapper`},D("div",{class:`${a}-collapse-item__content-inner`},this.$slots));return d?Ae(g,[[Oe,e]]):e?g:null}})}}),hn={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},fn=ue({name:"CollapseItem",props:hn,setup(e){const{mergedRtlRef:t}=rt(e),n=Yt(),a=Vt(()=>{var m;return(m=e.name)!==null&&m!==void 0?m:n}),d=qt(dt);d||Jt("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:g,props:i,mergedClsPrefixRef:r,slots:u}=d,c=ke(()=>{const{value:m}=g;if(Array.isArray(m)){const{value:S}=a;return!~m.findIndex(C=>C===S)}else if(m){const{value:S}=a;return S!==m}return!0});return{rtlEnabled:st("Collapse",t,r),collapseSlots:u,randomName:n,mergedClsPrefix:r,collapsed:c,triggerAreas:ot(i,"triggerAreas"),mergedDisplayDirective:ke(()=>{const{displayDirective:m}=e;return m||i.displayDirective}),arrowPlacement:ke(()=>i.arrowPlacement),handleClick(m){let S="main";Xe(m,"arrow")&&(S="arrow"),Xe(m,"extra")&&(S="extra"),i.triggerAreas.includes(S)&&d&&!e.disabled&&d.toggleItem(c.value,a.value,m)}}},render(){const{collapseSlots:e,$slots:t,arrowPlacement:n,collapsed:a,mergedDisplayDirective:d,mergedClsPrefix:g,disabled:i,triggerAreas:r}=this,u=Ye(t.header,{collapsed:a},()=>[this.title]),c=t["header-extra"]||e["header-extra"],h=t.arrow||e.arrow;return D("div",{class:[`${g}-collapse-item`,`${g}-collapse-item--${n}-arrow-placement`,i&&`${g}-collapse-item--disabled`,!a&&`${g}-collapse-item--active`,r.map(m=>`${g}-collapse-item--trigger-area-${m}`)]},D("div",{class:[`${g}-collapse-item__header`,!a&&`${g}-collapse-item__header--active`]},D("div",{class:`${g}-collapse-item__header-main`,onClick:this.handleClick},n==="right"&&u,D("div",{class:`${g}-collapse-item-arrow`,key:this.rtlEnabled?0:1,"data-arrow":!0},Ye(h,{collapsed:a},()=>{var m;return[D(en,{clsPrefix:g},{default:(m=e.expandIcon)!==null&&m!==void 0?m:()=>this.rtlEnabled?D(un,null):D(tn,null)})]})),n==="left"&&u),Qt(c,{collapsed:a},m=>D("div",{class:`${g}-collapse-item__header-extra`,onClick:this.handleClick,"data-extra":!0},m))),D(mn,{clsPrefix:g,displayDirective:d,show:!a},t))}});function ut(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const n=e[t],a=typeof n;(a==="object"||a==="function")&&!Object.isFrozen(n)&&ut(n)}),e}class Ve{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function gt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function ee(e,...t){const n=Object.create(null);for(const a in e)n[a]=e[a];return t.forEach(function(a){for(const d in a)n[d]=a[d]}),n}const kn="</span>",qe=e=>!!e.scope,En=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map((a,d)=>`${a}${"_".repeat(d+1)}`)].join(" ")}return`${t}${e}`};class _n{constructor(t,n){this.buffer="",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=gt(t)}openNode(t){if(!qe(t))return;const n=En(t.scope,{prefix:this.classPrefix});this.span(n)}closeNode(t){qe(t)&&(this.buffer+=kn)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const Je=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class $e{constructor(){this.rootNode=Je(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const n=Je({scope:t});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n=="string"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(a=>this._walk(t,a)),t.closeNode(n)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(n=>typeof n=="string")?t.children=[t.children.join("")]:t.children.forEach(n=>{$e._collapse(n)}))}}class Sn extends $e{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,n){const a=t.root;n&&(a.scope=`language:${n}`),this.add(a)}toHTML(){return new _n(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function Ee(e){return e?typeof e=="string"?e:e.source:null}function pt(e){return se("(?=",e,")")}function vn(e){return se("(?:",e,")*")}function yn(e){return se("(?:",e,")?")}function se(...e){return e.map(n=>Ee(n)).join("")}function wn(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function Ue(...e){return"("+(wn(e).capture?"":"?:")+e.map(a=>Ee(a)).join("|")+")"}function bt(e){return new RegExp(e.toString()+"|").exec("").length-1}function Nn(e,t){const n=e&&e.exec(t);return n&&n.index===0}const xn=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function ze(e,{joinWith:t}){let n=0;return e.map(a=>{n+=1;const d=n;let g=Ee(a),i="";for(;g.length>0;){const r=xn.exec(g);if(!r){i+=g;break}i+=g.substring(0,r.index),g=g.substring(r.index+r[0].length),r[0][0]==="\\"&&r[1]?i+="\\"+String(Number(r[1])+d):(i+=r[0],r[0]==="("&&n++)}return i}).map(a=>`(${a})`).join(t)}const An=/\b\B/,mt="[a-zA-Z]\\w*",He="[a-zA-Z_]\\w*",ht="\\b\\d+(\\.\\d+)?",ft="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",kt="\\b(0b[01]+)",On="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Tn=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=se(t,/.*\b/,e.binary,/\b.*/)),ee({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(n,a)=>{n.index!==0&&a.ignoreMatch()}},e)},_e={begin:"\\\\[\\s\\S]",relevance:0},Rn={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[_e]},Mn={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[_e]},Cn={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Me=function(e,t,n={}){const a=ee({scope:"comment",begin:e,end:t,contains:[]},n);a.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const d=Ue("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return a.contains.push({begin:se(/[ ]+/,"(",d,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),a},In=Me("//","$"),Ln=Me("/\\*","\\*/"),Bn=Me("#","$"),Pn={scope:"number",begin:ht,relevance:0},Dn={scope:"number",begin:ft,relevance:0},$n={scope:"number",begin:kt,relevance:0},Un={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[_e,{begin:/\[/,end:/\]/,relevance:0,contains:[_e]}]},zn={scope:"title",begin:mt,relevance:0},Hn={scope:"title",begin:He,relevance:0},Gn={begin:"\\.\\s*"+He,relevance:0},Fn=function(e){return Object.assign(e,{"on:begin":(t,n)=>{n.data._beginMatch=t[1]},"on:end":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})};var xe=Object.freeze({__proto__:null,APOS_STRING_MODE:Rn,BACKSLASH_ESCAPE:_e,BINARY_NUMBER_MODE:$n,BINARY_NUMBER_RE:kt,COMMENT:Me,C_BLOCK_COMMENT_MODE:Ln,C_LINE_COMMENT_MODE:In,C_NUMBER_MODE:Dn,C_NUMBER_RE:ft,END_SAME_AS_BEGIN:Fn,HASH_COMMENT_MODE:Bn,IDENT_RE:mt,MATCH_NOTHING_RE:An,METHOD_GUARD:Gn,NUMBER_MODE:Pn,NUMBER_RE:ht,PHRASAL_WORDS_MODE:Cn,QUOTE_STRING_MODE:Mn,REGEXP_MODE:Un,RE_STARTERS_RE:On,SHEBANG:Tn,TITLE_MODE:zn,UNDERSCORE_IDENT_RE:He,UNDERSCORE_TITLE_MODE:Hn});function jn(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function Kn(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function Zn(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=jn,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function Wn(e,t){Array.isArray(e.illegal)&&(e.illegal=Ue(...e.illegal))}function Xn(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Yn(e,t){e.relevance===void 0&&(e.relevance=1)}const Vn=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach(a=>{delete e[a]}),e.keywords=n.keywords,e.begin=se(n.beforeMatch,pt(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},qn=["of","and","for","in","not","or","if","then","parent","list","value"],Jn="keyword";function Et(e,t,n=Jn){const a=Object.create(null);return typeof e=="string"?d(n,e.split(" ")):Array.isArray(e)?d(n,e):Object.keys(e).forEach(function(g){Object.assign(a,Et(e[g],t,g))}),a;function d(g,i){t&&(i=i.map(r=>r.toLowerCase())),i.forEach(function(r){const u=r.split("|");a[u[0]]=[g,Qn(u[0],u[1])]})}}function Qn(e,t){return t?Number(t):ea(e)?0:1}function ea(e){return qn.includes(e.toLowerCase())}const Qe={},ie=e=>{console.error(e)},et=(e,...t)=>{console.log(`WARN: ${e}`,...t)},ce=(e,t)=>{Qe[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),Qe[`${e}/${t}`]=!0)},Te=new Error;function _t(e,t,{key:n}){let a=0;const d=e[n],g={},i={};for(let r=1;r<=t.length;r++)i[r+a]=d[r],g[r+a]=!0,a+=bt(t[r-1]);e[n]=i,e[n]._emit=g,e[n]._multi=!0}function ta(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw ie("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Te;if(typeof e.beginScope!="object"||e.beginScope===null)throw ie("beginScope must be object"),Te;_t(e,e.begin,{key:"beginScope"}),e.begin=ze(e.begin,{joinWith:""})}}function na(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw ie("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Te;if(typeof e.endScope!="object"||e.endScope===null)throw ie("endScope must be object"),Te;_t(e,e.end,{key:"endScope"}),e.end=ze(e.end,{joinWith:""})}}function aa(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function ra(e){aa(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),ta(e),na(e)}function ia(e){function t(i,r){return new RegExp(Ee(i),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(r?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(r,u){u.position=this.position++,this.matchIndexes[this.matchAt]=u,this.regexes.push([u,r]),this.matchAt+=bt(r)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const r=this.regexes.map(u=>u[1]);this.matcherRe=t(ze(r,{joinWith:"|"}),!0),this.lastIndex=0}exec(r){this.matcherRe.lastIndex=this.lastIndex;const u=this.matcherRe.exec(r);if(!u)return null;const c=u.findIndex((m,S)=>S>0&&m!==void 0),h=this.matchIndexes[c];return u.splice(0,c),Object.assign(u,h)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(r){if(this.multiRegexes[r])return this.multiRegexes[r];const u=new n;return this.rules.slice(r).forEach(([c,h])=>u.addRule(c,h)),u.compile(),this.multiRegexes[r]=u,u}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(r,u){this.rules.push([r,u]),u.type==="begin"&&this.count++}exec(r){const u=this.getMatcher(this.regexIndex);u.lastIndex=this.lastIndex;let c=u.exec(r);if(this.resumingScanAtSamePosition()&&!(c&&c.index===this.lastIndex)){const h=this.getMatcher(0);h.lastIndex=this.lastIndex+1,c=h.exec(r)}return c&&(this.regexIndex+=c.position+1,this.regexIndex===this.count&&this.considerAll()),c}}function d(i){const r=new a;return i.contains.forEach(u=>r.addRule(u.begin,{rule:u,type:"begin"})),i.terminatorEnd&&r.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&r.addRule(i.illegal,{type:"illegal"}),r}function g(i,r){const u=i;if(i.isCompiled)return u;[Kn,Xn,ra,Vn].forEach(h=>h(i,r)),e.compilerExtensions.forEach(h=>h(i,r)),i.__beforeBegin=null,[Zn,Wn,Yn].forEach(h=>h(i,r)),i.isCompiled=!0;let c=null;return typeof i.keywords=="object"&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),c=i.keywords.$pattern,delete i.keywords.$pattern),c=c||/\w+/,i.keywords&&(i.keywords=Et(i.keywords,e.case_insensitive)),u.keywordPatternRe=t(c,!0),r&&(i.begin||(i.begin=/\B|\b/),u.beginRe=t(u.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(u.endRe=t(u.end)),u.terminatorEnd=Ee(u.end)||"",i.endsWithParent&&r.terminatorEnd&&(u.terminatorEnd+=(i.end?"|":"")+r.terminatorEnd)),i.illegal&&(u.illegalRe=t(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(h){return sa(h==="self"?i:h)})),i.contains.forEach(function(h){g(h,u)}),i.starts&&g(i.starts,r),u.matcher=d(u),u}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=ee(e.classNameAliases||{}),g(e)}function St(e){return e?e.endsWithParent||St(e.starts):!1}function sa(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return ee(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:St(e)?ee(e,{starts:e.starts?ee(e.starts):null}):Object.isFrozen(e)?ee(e):e}var oa="11.9.0";class la extends Error{constructor(t,n){super(t),this.name="HTMLInjectionError",this.html=n}}const Pe=gt,tt=ee,nt=Symbol("nomatch"),ca=7,vt=function(e){const t=Object.create(null),n=Object.create(null),a=[];let d=!0;const g="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let r={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Sn};function u(s){return r.noHighlightRe.test(s)}function c(s){let o=s.className+" ";o+=s.parentNode?s.parentNode.className:"";const b=r.languageDetectRe.exec(o);if(b){const E=z(b[1]);return E||(et(g.replace("{}",b[1])),et("Falling back to no-highlight mode for this block.",s)),E?b[1]:"no-highlight"}return o.split(/\s+/).find(E=>u(E)||z(E))}function h(s,o,b){let E="",v="";typeof o=="object"?(E=s,b=o.ignoreIllegals,v=o.language):(ce("10.7.0","highlight(lang, code, ...args) has been deprecated."),ce("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),v=s,E=o),b===void 0&&(b=!0);const O={code:E,language:v};J("before:highlight",O);const H=O.result?O.result:m(O.language,O.code,b);return H.code=O.code,J("after:highlight",H),H}function m(s,o,b,E){const v=Object.create(null);function O(l,p){return l.keywords[p]}function H(){if(!f.keywords){M.addText(N);return}let l=0;f.keywordPatternRe.lastIndex=0;let p=f.keywordPatternRe.exec(N),k="";for(;p;){k+=N.substring(l,p.index);const y=W.case_insensitive?p[0].toLowerCase():p[0],B=O(f,y);if(B){const[V,$t]=B;if(M.addText(k),k="",v[y]=(v[y]||0)+1,v[y]<=ca&&(ye+=$t),V.startsWith("_"))k+=p[0];else{const Ut=W.classNameAliases[V]||V;Z(p[0],Ut)}}else k+=p[0];l=f.keywordPatternRe.lastIndex,p=f.keywordPatternRe.exec(N)}k+=N.substring(l),M.addText(k)}function Se(){if(N==="")return;let l=null;if(typeof f.subLanguage=="string"){if(!t[f.subLanguage]){M.addText(N);return}l=m(f.subLanguage,N,!0,We[f.subLanguage]),We[f.subLanguage]=l._top}else l=C(N,f.subLanguage.length?f.subLanguage:null);f.relevance>0&&(ye+=l.relevance),M.__addSublanguage(l._emitter,l.language)}function F(){f.subLanguage!=null?Se():H(),N=""}function Z(l,p){l!==""&&(M.startScope(p),M.addText(l),M.endScope())}function Fe(l,p){let k=1;const y=p.length-1;for(;k<=y;){if(!l._emit[k]){k++;continue}const B=W.classNameAliases[l[k]]||l[k],V=p[k];B?Z(V,B):(N=V,H(),N=""),k++}}function je(l,p){return l.scope&&typeof l.scope=="string"&&M.openNode(W.classNameAliases[l.scope]||l.scope),l.beginScope&&(l.beginScope._wrap?(Z(N,W.classNameAliases[l.beginScope._wrap]||l.beginScope._wrap),N=""):l.beginScope._multi&&(Fe(l.beginScope,p),N="")),f=Object.create(l,{parent:{value:f}}),f}function Ke(l,p,k){let y=Nn(l.endRe,k);if(y){if(l["on:end"]){const B=new Ve(l);l["on:end"](p,B),B.isMatchIgnored&&(y=!1)}if(y){for(;l.endsParent&&l.parent;)l=l.parent;return l}}if(l.endsWithParent)return Ke(l.parent,p,k)}function It(l){return f.matcher.regexIndex===0?(N+=l[0],1):(Le=!0,0)}function Lt(l){const p=l[0],k=l.rule,y=new Ve(k),B=[k.__beforeBegin,k["on:begin"]];for(const V of B)if(V&&(V(l,y),y.isMatchIgnored))return It(p);return k.skip?N+=p:(k.excludeBegin&&(N+=p),F(),!k.returnBegin&&!k.excludeBegin&&(N=p)),je(k,l),k.returnBegin?0:p.length}function Bt(l){const p=l[0],k=o.substring(l.index),y=Ke(f,l,k);if(!y)return nt;const B=f;f.endScope&&f.endScope._wrap?(F(),Z(p,f.endScope._wrap)):f.endScope&&f.endScope._multi?(F(),Fe(f.endScope,l)):B.skip?N+=p:(B.returnEnd||B.excludeEnd||(N+=p),F(),B.excludeEnd&&(N=p));do f.scope&&M.closeNode(),!f.skip&&!f.subLanguage&&(ye+=f.relevance),f=f.parent;while(f!==y.parent);return y.starts&&je(y.starts,l),B.returnEnd?0:p.length}function Pt(){const l=[];for(let p=f;p!==W;p=p.parent)p.scope&&l.unshift(p.scope);l.forEach(p=>M.openNode(p))}let ve={};function Ze(l,p){const k=p&&p[0];if(N+=l,k==null)return F(),0;if(ve.type==="begin"&&p.type==="end"&&ve.index===p.index&&k===""){if(N+=o.slice(p.index,p.index+1),!d){const y=new Error(`0 width match regex (${s})`);throw y.languageName=s,y.badRule=ve.rule,y}return 1}if(ve=p,p.type==="begin")return Lt(p);if(p.type==="illegal"&&!b){const y=new Error('Illegal lexeme "'+k+'" for mode "'+(f.scope||"<unnamed>")+'"');throw y.mode=f,y}else if(p.type==="end"){const y=Bt(p);if(y!==nt)return y}if(p.type==="illegal"&&k==="")return 1;if(Ie>1e5&&Ie>p.index*3)throw new Error("potential infinite loop, way more iterations than matches");return N+=k,k.length}const W=z(s);if(!W)throw ie(g.replace("{}",s)),new Error('Unknown language: "'+s+'"');const Dt=ia(W);let Ce="",f=E||Dt;const We={},M=new r.__emitter(r);Pt();let N="",ye=0,ae=0,Ie=0,Le=!1;try{if(W.__emitTokens)W.__emitTokens(o,M);else{for(f.matcher.considerAll();;){Ie++,Le?Le=!1:f.matcher.considerAll(),f.matcher.lastIndex=ae;const l=f.matcher.exec(o);if(!l)break;const p=o.substring(ae,l.index),k=Ze(p,l);ae=l.index+k}Ze(o.substring(ae))}return M.finalize(),Ce=M.toHTML(),{language:s,value:Ce,relevance:ye,illegal:!1,_emitter:M,_top:f}}catch(l){if(l.message&&l.message.includes("Illegal"))return{language:s,value:Pe(o),illegal:!0,relevance:0,_illegalBy:{message:l.message,index:ae,context:o.slice(ae-100,ae+100),mode:l.mode,resultSoFar:Ce},_emitter:M};if(d)return{language:s,value:Pe(o),illegal:!1,relevance:0,errorRaised:l,_emitter:M,_top:f};throw l}}function S(s){const o={value:Pe(s),illegal:!1,relevance:0,_top:i,_emitter:new r.__emitter(r)};return o._emitter.addText(s),o}function C(s,o){o=o||r.languages||Object.keys(t);const b=S(s),E=o.filter(z).filter(oe).map(F=>m(F,s,!1));E.unshift(b);const v=E.sort((F,Z)=>{if(F.relevance!==Z.relevance)return Z.relevance-F.relevance;if(F.language&&Z.language){if(z(F.language).supersetOf===Z.language)return 1;if(z(Z.language).supersetOf===F.language)return-1}return 0}),[O,H]=v,Se=O;return Se.secondBest=H,Se}function I(s,o,b){const E=o&&n[o]||b;s.classList.add("hljs"),s.classList.add(`language-${E}`)}function x(s){let o=null;const b=c(s);if(u(b))return;if(J("before:highlightElement",{el:s,language:b}),s.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",s);return}if(s.children.length>0&&(r.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(s)),r.throwUnescapedHTML))throw new la("One of your code blocks includes unescaped HTML.",s.innerHTML);o=s;const E=o.textContent,v=b?h(E,{language:b,ignoreIllegals:!0}):C(E);s.innerHTML=v.value,s.dataset.highlighted="yes",I(s,b,v.language),s.result={language:v.language,re:v.relevance,relevance:v.relevance},v.secondBest&&(s.secondBest={language:v.secondBest.language,relevance:v.secondBest.relevance}),J("after:highlightElement",{el:s,result:v,text:E})}function w(s){r=tt(r,s)}const $=()=>{T(),ce("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function L(){T(),ce("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let G=!1;function T(){if(document.readyState==="loading"){G=!0;return}document.querySelectorAll(r.cssSelector).forEach(x)}function U(){G&&T()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",U,!1);function R(s,o){let b=null;try{b=o(e)}catch(E){if(ie("Language definition for '{}' could not be registered.".replace("{}",s)),d)ie(E);else throw E;b=i}b.name||(b.name=s),t[s]=b,b.rawDefinition=o.bind(null,e),b.aliases&&q(b.aliases,{languageName:s})}function te(s){delete t[s];for(const o of Object.keys(n))n[o]===s&&delete n[o]}function Y(){return Object.keys(t)}function z(s){return s=(s||"").toLowerCase(),t[s]||t[n[s]]}function q(s,{languageName:o}){typeof s=="string"&&(s=[s]),s.forEach(b=>{n[b.toLowerCase()]=o})}function oe(s){const o=z(s);return o&&!o.disableAutodetect}function pe(s){s["before:highlightBlock"]&&!s["before:highlightElement"]&&(s["before:highlightElement"]=o=>{s["before:highlightBlock"](Object.assign({block:o.el},o))}),s["after:highlightBlock"]&&!s["after:highlightElement"]&&(s["after:highlightElement"]=o=>{s["after:highlightBlock"](Object.assign({block:o.el},o))})}function be(s){pe(s),a.push(s)}function me(s){const o=a.indexOf(s);o!==-1&&a.splice(o,1)}function J(s,o){const b=s;a.forEach(function(E){E[b]&&E[b](o)})}function ne(s){return ce("10.7.0","highlightBlock will be removed entirely in v12.0"),ce("10.7.0","Please use highlightElement now."),x(s)}Object.assign(e,{highlight:h,highlightAuto:C,highlightAll:T,highlightElement:x,highlightBlock:ne,configure:w,initHighlighting:$,initHighlightingOnLoad:L,registerLanguage:R,unregisterLanguage:te,listLanguages:Y,getLanguage:z,registerAliases:q,autoDetection:oe,inherit:tt,addPlugin:be,removePlugin:me}),e.debugMode=function(){d=!1},e.safeMode=function(){d=!0},e.versionString=oa,e.regex={concat:se,lookahead:pt,either:Ue,optional:yn,anyNumberOfTimes:vn};for(const s in xe)typeof xe[s]=="object"&&ut(xe[s]);return Object.assign(e,xe),e},de=vt({});de.newInstance=()=>vt({});var da=de;de.HighlightJS=de;de.default=de;const ge=nn(da),at="[A-Za-z$_][0-9A-Za-z$_]*",ua=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],ga=["true","false","null","undefined","NaN","Infinity"],yt=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],wt=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Nt=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],pa=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],ba=[].concat(Nt,yt,wt);function ma(e){const t=e.regex,n=(o,{after:b})=>{const E="</"+o[0].slice(1);return o.input.indexOf(E,b)!==-1},a=at,d={begin:"<>",end:"</>"},g=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(o,b)=>{const E=o[0].length+o.index,v=o.input[E];if(v==="<"||v===","){b.ignoreMatch();return}v===">"&&(n(o,{after:E})||b.ignoreMatch());let O;const H=o.input.substring(E);if(O=H.match(/^\s*=/)){b.ignoreMatch();return}if((O=H.match(/^\s+extends\s+/))&&O.index===0){b.ignoreMatch();return}}},r={$pattern:at,keyword:ua,literal:ga,built_in:ba,"variable.language":pa},u="[0-9](_?[0-9])*",c=`\\.(${u})`,h="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",m={className:"number",variants:[{begin:`(\\b(${h})((${c})|\\.)?|(${c}))[eE][+-]?(${u})\\b`},{begin:`\\b(${h})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},S={className:"subst",begin:"\\$\\{",end:"\\}",keywords:r,contains:[]},C={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,S],subLanguage:"xml"}},I={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,S],subLanguage:"css"}},x={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,S],subLanguage:"graphql"}},w={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,S]},L={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},G=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,C,I,x,w,{match:/\$\d+/},m];S.contains=G.concat({begin:/\{/,end:/\}/,keywords:r,contains:["self"].concat(G)});const T=[].concat(L,S.contains),U=T.concat([{begin:/\(/,end:/\)/,keywords:r,contains:["self"].concat(T)}]),R={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:U},te={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,t.concat(a,"(",t.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},Y={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...yt,...wt]}},z={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},q={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[R],illegal:/%/},oe={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function pe(o){return t.concat("(?!",o.join("|"),")")}const be={match:t.concat(/\b/,pe([...Nt,"super","import"]),a,t.lookahead(/\(/)),className:"title.function",relevance:0},me={begin:t.concat(/\./,t.lookahead(t.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},J={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},R]},ne="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",s={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(ne)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[R]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:r,exports:{PARAMS_CONTAINS:U,CLASS_REFERENCE:Y},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),z,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,C,I,x,w,L,{match:/\$\d+/},m,Y,{className:"attr",begin:a+t.lookahead(":"),relevance:0},s,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[L,e.REGEXP_MODE,{className:"function",begin:ne,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:U}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:d.begin,end:d.end},{match:g},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},q,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[R,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},me,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[R]},be,oe,te,J,{match:/\$[(.]/}]}}const Re="[A-Za-z$_][0-9A-Za-z$_]*",xt=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],At=["true","false","null","undefined","NaN","Infinity"],Ot=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Tt=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Rt=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Mt=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Ct=[].concat(Rt,Ot,Tt);function ha(e){const t=e.regex,n=(o,{after:b})=>{const E="</"+o[0].slice(1);return o.input.indexOf(E,b)!==-1},a=Re,d={begin:"<>",end:"</>"},g=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(o,b)=>{const E=o[0].length+o.index,v=o.input[E];if(v==="<"||v===","){b.ignoreMatch();return}v===">"&&(n(o,{after:E})||b.ignoreMatch());let O;const H=o.input.substring(E);if(O=H.match(/^\s*=/)){b.ignoreMatch();return}if((O=H.match(/^\s+extends\s+/))&&O.index===0){b.ignoreMatch();return}}},r={$pattern:Re,keyword:xt,literal:At,built_in:Ct,"variable.language":Mt},u="[0-9](_?[0-9])*",c=`\\.(${u})`,h="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",m={className:"number",variants:[{begin:`(\\b(${h})((${c})|\\.)?|(${c}))[eE][+-]?(${u})\\b`},{begin:`\\b(${h})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},S={className:"subst",begin:"\\$\\{",end:"\\}",keywords:r,contains:[]},C={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,S],subLanguage:"xml"}},I={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,S],subLanguage:"css"}},x={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,S],subLanguage:"graphql"}},w={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,S]},L={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},G=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,C,I,x,w,{match:/\$\d+/},m];S.contains=G.concat({begin:/\{/,end:/\}/,keywords:r,contains:["self"].concat(G)});const T=[].concat(L,S.contains),U=T.concat([{begin:/\(/,end:/\)/,keywords:r,contains:["self"].concat(T)}]),R={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:U},te={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,t.concat(a,"(",t.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},Y={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Ot,...Tt]}},z={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},q={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[R],illegal:/%/},oe={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function pe(o){return t.concat("(?!",o.join("|"),")")}const be={match:t.concat(/\b/,pe([...Rt,"super","import"]),a,t.lookahead(/\(/)),className:"title.function",relevance:0},me={begin:t.concat(/\./,t.lookahead(t.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},J={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},R]},ne="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",s={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(ne)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[R]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:r,exports:{PARAMS_CONTAINS:U,CLASS_REFERENCE:Y},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),z,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,C,I,x,w,L,{match:/\$\d+/},m,Y,{className:"attr",begin:a+t.lookahead(":"),relevance:0},s,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[L,e.REGEXP_MODE,{className:"function",begin:ne,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:U}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:d.begin,end:d.end},{match:g},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},q,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[R,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},me,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[R]},be,oe,te,J,{match:/\$[(.]/}]}}function fa(e){const t=ha(e),n=Re,a=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],d={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[t.exports.CLASS_REFERENCE]},g={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:a},contains:[t.exports.CLASS_REFERENCE]},i={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},r=["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"],u={$pattern:Re,keyword:xt.concat(r),literal:At,built_in:Ct.concat(a),"variable.language":Mt},c={className:"meta",begin:"@"+n},h=(S,C,I)=>{const x=S.contains.findIndex(w=>w.label===C);if(x===-1)throw new Error("can not find mode to replace");S.contains.splice(x,1,I)};Object.assign(t.keywords,u),t.exports.PARAMS_CONTAINS.push(c),t.contains=t.contains.concat([c,d,g]),h(t,"shebang",e.SHEBANG()),h(t,"use_strict",i);const m=t.contains.find(S=>S.label==="func.def");return m.relevance=0,Object.assign(t,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),t}function ka(e){const t=e.regex,n=t.concat(/[\p{L}_]/u,t.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),a=/[\p{L}0-9._:-]+/u,d={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},g={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},i=e.inherit(g,{begin:/\(/,end:/\)/}),r=e.inherit(e.APOS_STRING_MODE,{className:"string"}),u=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),c={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:a,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[d]},{begin:/'/,end:/'/,contains:[d]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[g,u,r,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[g,i,u,r]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},d,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[u]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:t.concat(/</,t.lookahead(t.concat(n,t.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:c}]},{className:"tag",begin:t.concat(/<\//,t.lookahead(t.concat(n,/>/))),contains:[{className:"name",begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const Ea=e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),_a=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],Sa=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],va=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],ya=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],wa=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse();function Na(e){const t=Ea(e),n=ya,a=va,d="@[a-z-]+",g="and or not only",r={className:"variable",begin:"(\\$"+"[a-zA-Z-][a-zA-Z0-9_-]*"+")\\b",relevance:0};return{name:"SCSS",case_insensitive:!0,illegal:"[=/|']",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,t.CSS_NUMBER_MODE,{className:"selector-id",begin:"#[A-Za-z0-9_-]+",relevance:0},{className:"selector-class",begin:"\\.[A-Za-z0-9_-]+",relevance:0},t.ATTRIBUTE_SELECTOR_MODE,{className:"selector-tag",begin:"\\b("+_a.join("|")+")\\b",relevance:0},{className:"selector-pseudo",begin:":("+a.join("|")+")"},{className:"selector-pseudo",begin:":(:)?("+n.join("|")+")"},r,{begin:/\(/,end:/\)/,contains:[t.CSS_NUMBER_MODE]},t.CSS_VARIABLE,{className:"attribute",begin:"\\b("+wa.join("|")+")\\b"},{begin:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"},{begin:/:/,end:/[;}{]/,relevance:0,contains:[t.BLOCK_COMMENT,r,t.HEXCOLOR,t.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,t.IMPORTANT,t.FUNCTION_DISPATCH]},{begin:"@(page|font-face)",keywords:{$pattern:d,keyword:"@page @font-face"}},{begin:"@",end:"[{;]",returnBegin:!0,keywords:{$pattern:/[a-z-]+/,keyword:g,attribute:Sa.join(" ")},contains:[{begin:d,className:"keyword"},{begin:/[a-z-]+(?=:)/,className:"attribute"},r,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,t.HEXCOLOR,t.CSS_NUMBER_MODE]},t.FUNCTION_DISPATCH]}}const xa=e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),Aa=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],Oa=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],Ta=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],Ra=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],Ma=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse();function Ca(e){const t=e.regex,n=xa(e),a={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},d="and or not only",g=/@-?\w[\w]*(-\w+)*/,i="[a-zA-Z-][a-zA-Z0-9_-]*",r=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[n.BLOCK_COMMENT,a,n.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+i,relevance:0},n.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+Ta.join("|")+")"},{begin:":(:)?("+Ra.join("|")+")"}]},n.CSS_VARIABLE,{className:"attribute",begin:"\\b("+Ma.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[n.BLOCK_COMMENT,n.HEXCOLOR,n.IMPORTANT,n.CSS_NUMBER_MODE,...r,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...r,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},n.FUNCTION_DISPATCH]},{begin:t.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:g},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:d,attribute:Oa.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...r,n.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+Aa.join("|")+")\\b"}]}}ge.registerLanguage("javascript",ma);ge.registerLanguage("typescript",fa);ge.registerLanguage("html",ka);ge.registerLanguage("scss",Na);ge.registerLanguage("css",Ca);function Ia(e){var t;if(e){let n=(t=e.innerHTML)==null?void 0:t.split(`
`);if(n!=null&&n.length){n[0]===""&&n.shift();const a=/^[\s\t]+/.exec(n[0]),d=a!==null?a[0]:null;d&&(n=n.map(g=>(g=g.replace(d,""),g.replace(/\t/g,"    "))),e.innerHTML=n.join(`
`).trim())}}}const Ge=e=>(ln("data-v-e4577559"),e=e(),cn(),e),La={class:"content"},Ba={key:0,class:"description"},Pa={class:"code-container"},Da={class:"code-box"},$a=Ge(()=>_("div",{class:"label"},"Template",-1)),Ua={class:"code-box"},za=Ge(()=>_("div",{class:"label"},"TypeScript",-1)),Ha={class:"code-box"},Ga=Ge(()=>_("div",{class:"label"},"Style",-1)),Fa="carbon:code",ja=ue({__name:"CardCodeExample",setup(e){const t=he(null),n=he(null),a=he(null),d=he({html:!1,ts:!1,css:!1});function g(c,h){let m=null;h==="html"&&(m=t.value),h==="ts"&&(m=n.value),h==="css"&&(m=a.value),m&&(m.innerHTML=ge.highlightAuto(c).value,Ia(m),d.value[h]=!0)}function i(c){c&&g(c,"html")}function r(c){c&&g(c,"ts")}function u(c){c&&g(c,"css")}return(c,h)=>(De(),an(fe(ct),{class:"card"},rn({default:A(()=>[_("div",La,[c.$slots.description?(De(),lt("div",Ba,[le(c.$slots,"description",{},void 0,!0)])):Ne("",!0),le(c.$slots,"default",{},void 0,!0)])]),_:2},[c.$slots.html||c.$slots.ts||c.$slots.css||c.$slots.code?{name:"action",fn:A(()=>[K(fe(bn),null,{"header-extra":A(()=>[K(sn,{name:Fa})]),default:A(()=>[K(fe(fn),{title:"Contoh Code",name:"code"},{default:A(()=>[_("div",Pa,[K(fe(on),{"x-scrollable":"",style:{"max-width":"100%","max-height":"400px"}},{default:A(()=>[c.$slots.html?le(c.$slots,"html",{key:0},void 0,!0):Ne("",!0),c.$slots.ts?le(c.$slots,"ts",{key:1},void 0,!0):Ne("",!0),c.$slots.css?le(c.$slots,"css",{key:2},void 0,!0):Ne("",!0),le(c.$slots,"code",{html:i,ts:r,css:u},void 0,!0),Ae(_("div",Da,[$a,_("pre",{ref_key:"refHTML",ref:t},null,512)],512),[[Oe,d.value.html]]),Ae(_("div",Ua,[za,_("pre",{ref_key:"refTS",ref:n},null,512)],512),[[Oe,d.value.ts]]),Ae(_("div",Ha,[Ga,_("pre",{ref_key:"refCSS",ref:a},null,512)],512),[[Oe,d.value.css]])]),_:3})])]),_:3})]),_:3})]),key:"0"}:void 0]),1024))}}),Ka=dn(ja,[["__scopeId","data-v-e4577559"]]),Za={class:"page"},Wa=_("div",{class:"page-header"},[_("div",{class:"title"},"1. OOP (Pemrograman Berorientasi Objek)")],-1),Xa={class:"grid grid-cols-1 gap-12"},Ya=_("p",null,'Pemrograman Berorientasi Objek (Object-Oriented Programming, OOP) adalah paradigma pemrograman yang menggunakan "objek" - yang dapat berupa data dalam bentuk field (disebut atribut atau properti) dan kode dalam bentuk prosedur (disebut metode). OOP adalah cara untuk merancang program dengan memodelkan data dan perilaku sebagai objek dunia nyata.',-1),Va=_("br",null,null,-1),qa=_("h4",null,"Mengapa OOP Penting dalam Pengembangan Perangkat Lunak?",-1),Ja=_("ol",null,[_("li",null,"Pemeliharaan yang Lebih Mudah: Kode yang menggunakan OOP lebih mudah dipelihara dan diperbarui karena struktur modularnya."),_("li",null,"Reusability: Kelas dapat digunakan kembali di berbagai bagian program atau di program lain, mengurangi duplikasi kode."),_("li",null,"Flexibilitas dan Skalabilitas: Memungkinkan pengembangan yang lebih fleksibel dan dapat dengan mudah dikembangkan atau diubah sesuai kebutuhan."),_("li",null,"Kolaborasi: Memudahkan kerja tim, karena setiap bagian dari proyek dapat dipisah menjadi kelas-kelas yang berbeda.")],-1),Qa=_("h4",null,"Enkapsulasi",-1),er=_("p",null,"Enkapsulasi dicapai dengan menjadikan properti kelas bersifat privat dan menyediakan metode untuk mengakses dan memodifikasi properti tersebut.",-1),tr=_("br",null,null,-1),nr=_("h4",null,"Pewarisan (Inheritance)",-1),ar=_("p",null,"Pewarisan memungkinkan sebuah kelas untuk mewarisi properti dan metode dari kelas lain.",-1),rr=_("br",null,null,-1),ir=_("h4",null,"Polimorfisme (Polymorphism)",-1),sr=_("p",null,"Polimorfisme memungkinkan penggunaan metode yang sama pada kelas yang berbeda dengan cara yang berbeda.",-1),or=_("br",null,null,-1),lr=_("br",null,null,-1),cr=_("br",null,null,-1),dr=_("br",null,null,-1),ur=_("br",null,null,-1),gr=_("br",null,null,-1),pr=_("br",null,null,-1),br=_("br",null,null,-1),mr=`// Kelas Barang hanya bertanggung jawab untuk menyimpan data barang
class Barang {
	private nama: string;
	private harga: number;
	private stok: number;

	constructor(nama: string, harga: number, stok: number) {
		this.nama = nama;
		this.harga = harga;
		this.stok = stok;
	}

	public getNama(): string {
		return this.nama;
	}

	public getHarga(): number {
		return this.harga;
	}

	public getStok(): number {
		return this.stok;
	}

	public setStok(stok: number): void {
		this.stok = stok;
	}
}

// Kelas BarangService bertanggung jawab untuk logika bisnis terkait barang
class BarangService {
	public deskripsi(barang: Barang): string {
		return \`Nama: \${barang.getNama()}, Harga: \${barang.getHarga()}, Stok: \${barang.getStok()}\`;
	}

	public beli(barang: Barang, jumlah: number): string {
		if (jumlah <= barang.getStok()) {
			barang.setStok(barang.getStok() - jumlah);
			return \`Anda membeli \${jumlah} \${barang.getNama()}. Sisa stok: \${barang.getStok()}\`;
		} else {
			return "Stok tidak cukup";
		}
	}
}

// Penggunaan
const barang = new Barang("Laptop", 15000000, 10);
const barangService = new BarangService();

console.log(barangService.deskripsi(barang));
console.log(barangService.beli(barang, 3));
console.log(barangService.beli(barang, 8));
`,hr=`// Kelas Barang (tidak perlu diubah untuk menambah tipe barang baru)
class Barang {
  constructor(
    private nama: string,
    private harga: number,
    private stok: number
  ) {}

  public getNama(): string {
    return this.nama;
  }

  public getHarga(): number {
    return this.harga;
  }

  public getStok(): number {
    return this.stok;
  }

  public setStok(stok: number): void {
    this.stok = stok;
  }
}

// Interface untuk metode deskripsi
interface DeskripsiBarang {
  deskripsi(): string;
}

// Implementasi deskripsi untuk Elektronik
class Elektronik extends Barang implements DeskripsiBarang {
  constructor(
    nama: string,
    harga: number,
    stok: number,
    private garansi: number
  ) {
    super(nama, harga, stok);
  }

  public deskripsi(): string {
    return \`Nama: \${this.getNama()}, Harga: \${this.getHarga()}, Stok: \${this.getStok()}, Garansi: \${
      this.garansi
    } bulan\`;
  }
}

// Implementasi deskripsi untuk Pakaian
class Pakaian extends Barang implements DeskripsiBarang {
  constructor(
    nama: string,
    harga: number,
    stok: number,
    private ukuran: string
  ) {
    super(nama, harga, stok);
  }

  public deskripsi(): string {
    return \`Nama: \${this.getNama()}, Harga: \${this.getHarga()}, Stok: \${this.getStok()}, Ukuran: \${
      this.ukuran
    }\`;
  }
}

// Penggunaan
const barang1 = new Elektronik("Laptop", 15000000, 10, 24);
const barang2 = new Pakaian("Kaos", 150000, 50, "L");

const barangList: DeskripsiBarang[] = [barang1, barang2];
barangList.forEach((barang) => {
  console.log(barang.deskripsi());
});
`,fr=`// Kelas Barang dan kelas turunannya mengikuti LSP
abstract class Barang {
  constructor(
    private nama: string,
    private harga: number,
    private stok: number
  ) {}

  public getNama(): string {
    return this.nama;
  }

  public getHarga(): number {
    return this.harga;
  }

  public getStok(): number {
    return this.stok;
  }

  public setStok(stok: number): void {
    this.stok = stok;
  }

  abstract deskripsi(): string;
}

class Elektronik extends Barang {
  constructor(
    nama: string,
    harga: number,
    stok: number,
    private garansi: number
  ) {
    super(nama, harga, stok);
  }

  public deskripsi(): string {
    return \`Nama: \${this.getNama()}, Harga: \${this.getHarga()}, Stok: \${this.getStok()}, Garansi: \${
      this.garansi
    } bulan\`;
  }
}

class Pakaian extends Barang {
  constructor(
    nama: string,
    harga: number,
    stok: number,
    private ukuran: string
  ) {
    super(nama, harga, stok);
  }

  public deskripsi(): string {
    return \`Nama: \${this.getNama()}, Harga: \${this.getHarga()}, Stok: \${this.getStok()}, Ukuran: \${
      this.ukuran
    }\`;
  }
}

// Penggunaan
const barangList: Barang[] = [
  new Elektronik("Laptop", 15000000, 10, 24),
  new Pakaian("Kaos", 150000, 50, "L"),
];

barangList.forEach((barang) => {
  console.log(barang.deskripsi());
});

`,kr=`// Antarmuka yang spesifik untuk deskripsi
interface DeskripsiBarang {
  deskripsi(): string;
}

// Kelas Barang dan kelas turunannya mengikuti ISP
abstract class Barang implements DeskripsiBarang {
  constructor(
    private nama: string,
    private harga: number,
    private stok: number
  ) {}

  public getNama(): string {
    return this.nama;
  }

  public getHarga(): number {
    return this.harga;
  }

  public getStok(): number {
    return this.stok;
  }

  public setStok(stok: number): void {
    this.stok = stok;
  }

  abstract deskripsi(): string;
}

class Elektronik extends Barang {
  constructor(
    nama: string,
    harga: number,
    stok: number,
    private garansi: number
  ) {
    super(nama, harga, stok);
  }

  public deskripsi(): string {
    return \`Nama: \${this.getNama()}, Harga: \${this.getHarga()}, Stok: \${this.getStok()}, Garansi: \${
      this.garansi
    } bulan\`;
  }
}

class Pakaian extends Barang {
  constructor(
    nama: string,
    harga: number,
    stok: number,
    private ukuran: string
  ) {
    super(nama, harga, stok);
  }

  public deskripsi(): string {
    return \`Nama: \${this.getNama()}, Harga: \${this.getHarga()}, Stok: \${this.getStok()}, Ukuran: \${
      this.ukuran
    }\`;
  }
}

// Penggunaan
const barangList: DeskripsiBarang[] = [
  new Elektronik("Laptop", 15000000, 10, 24),
  new Pakaian("Kaos", 150000, 50, "L"),
];

barangList.forEach((barang) => {
  console.log(barang.deskripsi());
});

`,Er=`// Antarmuka untuk operasi barang
interface OperasiBarang {
  deskripsi(): string;
  beli(jumlah: number): string;
}

// Kelas Barang menerapkan antarmuka OperasiBarang
class Barang implements OperasiBarang {
  constructor(
    private nama: string,
    private harga: number,
    private stok: number
  ) {}

  public deskripsi(): string {
    return \`Nama: \${this.nama}, Harga: \${this.harga}, Stok: \${this.stok}\`;
  }

  public beli(jumlah: number): string {
    if (jumlah <= this.stok) {
      this.stok -= jumlah;
      return \`Anda membeli \${jumlah} \${this.nama}. Sisa stok: \${this.stok}\`;
    } else {
      return "Stok tidak cukup";
    }
  }
}

// Kelas BarangService bergantung pada antarmuka, bukan pada implementasi konkret
class BarangService {
  private barang: OperasiBarang;

  constructor(barang: OperasiBarang) {
    this.barang = barang;
  }

  public tampilkanDeskripsi(): void {
    console.log(this.barang.deskripsi());
  }

  public beliBarang(jumlah: number): void {
    console.log(this.barang.beli(jumlah));
  }
}

// Penggunaan
const barang = new Barang("Laptop", 15000000, 10);
const barangService = new BarangService(barang);

barangService.tampilkanDeskripsi();
barangService.beliBarang(3);
barangService.beliBarang(8);

`,Sr=ue({__name:"OOPConcept",setup(e){return(t,n)=>{const a=Ka;return De(),lt("div",Za,[Wa,_("div",Xa,[K(a,{title:"1. Apa itu OOP (Pemrograman Berorientasi Objek) dan mengapa itu penting dalam pengembangan perangkat lunak? berikan contoh implementasi dalam koding."},{description:A(()=>[Ya,Va,qa,Ja]),code:A(({ts:d})=>[j(re(d(`
					// Mendefinisikan kelas 'Barang'
					class Barang {
						// Properti
						nama: string;
						harga: number;
						stok: number;

						// Konstruktor
						constructor(nama: string, harga: number, stok: number) {
							this.nama = nama;
							this.harga = harga;
							this.stok = stok;
						}

						// Metode untuk mendapatkan deskripsi barang
						deskripsi(): string {
							return \`Nama: \${this.nama}, Harga: \${this.harga}, Stok: \${this.stok}\`;
						}

						// Metode untuk membeli barang
						beli(jumlah: number): string {
							if (jumlah <= this.stok) {
								this.stok -= jumlah;
								return \`Anda membeli \${jumlah} \${this.nama}. Sisa stok: \${this.stok}\`;
							} else {
								return "Stok tidak cukup";
							}
						}
					}

					// Membuat objek dari kelas 'Barang'
					const barang1 = new Barang("Laptop", 15000000, 10);

					// Menggunakan metode 'deskripsi' dan 'beli'
					console.log(barang1.deskripsi());  // Output: Nama: Laptop, Harga: 15000000, Stok: 10
					console.log(barang1.beli(3));      // Output: Anda membeli 3 Laptop. Sisa stok: 7
					console.log(barang1.beli(8));      // Output: Stok tidak cukup
					`)),1)]),_:1}),K(a,{title:"2. Jelaskan konsep utama dalam OOP seperti encapsulation, inheritance, dan polymorphism. berikan contoh implementasi dalam koding."},{description:A(()=>[Qa,er,tr,nr,ar,rr,ir,sr]),code:A(({ts:d})=>[j(re(d(`
					// Mendefinisikan kelas dasar 'Barang'
					class Barang {
						// Properti yang di-enkapsulasi (privat) <ENCAPSULATION>
						private nama: string;
						private harga: number;
						private stok: number;

						// Konstruktor
						constructor(nama: string, harga: number, stok: number) {
							this.nama = nama;
							this.harga = harga;
							this.stok = stok;
						}

						// Metode untuk mendapatkan deskripsi barang
						public deskripsi(): string {
							return \`Nama: \${this.nama}, Harga: \${this.harga}, Stok: \${this.stok}\`;
						}

						// Metode untuk membeli barang
						public beli(jumlah: number): string {
							if (jumlah <= this.stok) {
								this.stok -= jumlah;
								return \`Anda membeli \${jumlah} \${this.nama}. Sisa stok: \${this.stok}\`;
							} else {
								return "Stok tidak cukup";
							}
						}

						// Getter dan setter untuk properti 'nama'
						public getNama(): string {
							return this.nama;
						}

						public setNama(nama: string): void {
							this.nama = nama;
						}

						// Getter dan setter untuk properti 'harga'
						public getHarga(): number {
							return this.harga;
						}

						public setHarga(harga: number): void {
							this.harga = harga;
						}

						// Getter dan setter untuk properti 'stok'
						public getStok(): number {
							return this.stok;
						}

						public setStok(stok: number): void {
							this.stok = stok;
						}
					}

					// Mendefinisikan kelas 'Elektronik' yang mewarisi <INHERITANCE> dari 'Barang'
					class Elektronik extends Barang {
						private garansi: number; // dalam bulan

						constructor(nama: string, harga: number, stok: number, garansi: number) {
							super(nama, harga, stok);
							this.garansi = garansi;
						}

						// Override metode deskripsi untuk menambahkan informasi garansi
						public deskripsi(): string {
							return \`\${super.deskripsi()}, Garansi: \${this.garansi} bulan\`;
						}
					}

					// Mendefinisikan kelas 'Pakaian' yang mewarisi <INHERITANCE> dari 'Barang'
					class Pakaian extends Barang {
						private ukuran: string;

						constructor(nama: string, harga: number, stok: number, ukuran: string) {
							super(nama, harga, stok);
							this.ukuran = ukuran;
						}

						// Override metode deskripsi untuk menambahkan informasi ukuran
						public deskripsi(): string {
							return \`\${super.deskripsi()}, Ukuran: \${this.ukuran}\`;
						}
					}

					// Demonstrasi penggunaan kelas dan polimorfisme <POLYMORPHISM>
					const barang1 = new Elektronik("Laptop", 15000000, 10, 24);
					const barang2 = new Pakaian("Kaos", 150000, 50, "L");

					console.log(barang1.deskripsi());  // Output: Nama: Laptop, Harga: 15000000, Stok: 10, Garansi: 24 bulan
					console.log(barang2.deskripsi());  // Output: Nama: Kaos, Harga: 150000, Stok: 50, Ukuran: L

					// Polimorfisme <POLYMORPHISM>: menggunakan metode yang sama pada objek dari kelas yang berbeda
					const barangList: Barang[] = [barang1, barang2];
					barangList.forEach(barang => {
						console.log(barang.deskripsi());
					});
					`)),1)]),_:1}),K(fe(ct),{title:"3. Berikan contoh penggunaan OOP encapsulation, inheritance, polimorphism juga menerapkan SOLID principles dalam bahasa pemrograman yang Anda kuasai. berikan contoh implementasi dalam koding."},{default:A(()=>[K(a,{title:"Single Responsibility Principle (SRP)"},{code:A(({ts:d})=>[j(re(d(mr)),1)]),description:A(()=>[j(" Setiap kelas hanya memiliki satu alasan untuk berubah, yaitu hanya memiliki satu tanggung jawab atau tugas. ")]),_:1}),or,lr,K(a,{title:"Open/Closed Principle (OCP)"},{code:A(({ts:d})=>[j(re(d(hr)),1)]),description:A(()=>[j(" Kelas harus terbuka untuk ekstensi tetapi tertutup untuk modifikasi. ")]),_:1}),cr,dr,K(a,{title:"Liskov Substitution Principle (LSP)"},{code:A(({ts:d})=>[j(re(d(fr)),1)]),description:A(()=>[j(" Objek dari kelas turunan harus dapat menggantikan objek dari kelas dasar tanpa mengubah sifat program. ")]),_:1}),ur,gr,K(a,{title:"Interface Segregation Principle (ISP)"},{code:A(({ts:d})=>[j(re(d(kr)),1)]),description:A(()=>[j(" Buat antarmuka yang spesifik untuk klien, sehingga klien tidak perlu bergantung pada metode yang tidak mereka gunakan. ")]),_:1}),pr,br,K(a,{title:"Dependency Inversion Principle (DIP)"},{code:A(({ts:d})=>[j(re(d(Er)),1)]),description:A(()=>[j(" Modul tingkat tinggi tidak boleh bergantung pada modul tingkat rendah. Keduanya harus bergantung pada abstraksi. ")]),_:1})]),_:1})])])}}});export{Sr as default};
