(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"2uLe":function(e,t,a){"use strict";var n=a("mj2O"),c=a.n(n),r=a("7SM1"),i=a("VkHq"),o=a("Hvhg"),s=a("ERkP"),u=a("uDfI"),l=a("vTYT"),b=a("7oto");t.a=function useSetPreviewHeight(){var e=Object(s.useRef)(null),t=Object(u.c)(function(e){return!!e.conversations.activeConversation}),a=Object(u.c)(o.c).showBranding,n=void 0!==a&&a,f=Object(i.a)().noPolicy,O=Object(u.c)(function(e){return e.session.gdpr}),d=O.hasConsent,j=O.declinedConsent,v=Object(s.useCallback)(function(){var e=0,t=!n&&f;return j&&(e+=40),t&&(e+=18),d||(e+=t?14:7),e},[j,d,f,n]),h=Object(s.useCallback)(function(){return e.current?e.current.clientHeight:200},[e]),m=Object(s.useCallback)(function(){var e=Object(r.a)(c.a.mark(function _callee(e){var a,n,r,i,o=arguments;return c.a.wrap(function _callee$(c){for(;;)switch(c.prev=c.next){case 0:if(a=o.length>1&&void 0!==o[1]&&o[1],!t||!d){c.next=3;break}return c.abrupt("return");case 3:if(n=v(),r=h(),"205px"!==(i=e?"".concat(r+155-n,"px"):"0px")){c.next=8;break}return c.abrupt("return");case 8:Object(b.a)({topic:"set-frame-height",message:{height:i,name:l.c.CHAT,transition:!0,transitionHeight:a}});case 9:case"end":return c.stop()}},_callee)}));return function(t){return e.apply(this,arguments)}}(),[t,d,v,h]),p=Object(s.useCallback)(Object(r.a)(c.a.mark(function _callee2(){var e;return c.a.wrap(function _callee2$(t){for(;;)switch(t.prev=t.next){case 0:e=h(),Object(b.a)({topic:"set-frame-height",message:{height:"".concat(e+80,"px"),name:l.c.SLIDER,transition:!0,transitionHeight:!1}});case 2:case"end":return t.stop()}},_callee2)})),[h]),g=Object(s.useCallback)(Object(r.a)(c.a.mark(function _callee3(){var e;return c.a.wrap(function _callee3$(t){for(;;)switch(t.prev=t.next){case 0:e=h(),Object(b.a)({topic:"set-frame-height",message:{height:"".concat(e+35,"px"),name:l.c.EMAIL_CAPTURE,transition:!0,transitionHeight:!1}});case 2:case"end":return t.stop()}},_callee3)})),[h]);return{previewRef:e,setChatHeight:m,setSliderHeight:p,setEmailCaptureHeight:g}}},G5CQ:function(e,t,a){},Gxm1:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return s});var n=a("QtlZ"),c=a("LVcX"),r=a("0lfv"),i=a("CYoe"),o=function markTime(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();n.a.dispatch(Object(i.c)(e,t))},s=function measureTime(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now(),a=Object(c.a)(null,["metrics","timeByName",e],Object(n.b)());return a?(n.a.dispatch(Object(i.a)(e)),t-a):(Object(r.n)({type:"warn",data:['Tried to measure "'.concat(e,'" without mark')]}),null)}},SrLZ:function(e,t,a){"use strict";a.r(t);var n=a("mj2O"),c=a.n(n),r=a("7SM1"),i=a("s8DI"),o=a("OE2q"),s=a("O94r"),u=a.n(s),l=a("Rqwx"),b=a("fTFZ"),f=a("vkRn"),O=a("CwrG"),d=a("HXmn"),j=a("8eKL"),v=a("slYP"),h=a("BY8A"),m=a("+/Je"),p=a("Y0wo"),g=a("fw6E"),w=a("1b8i"),E=a("gRD2"),_=a("fpJs"),C=a("6wvX"),k=a("Sn8X"),T=a("fJrp"),S=a("VkHq"),y=a("lE29"),A=a("swFs"),H=a("+Kbs"),L=a("nQD+"),x=a("sxX9"),N=a("2uLe"),R=a("g6eD"),I=a("2XY6"),M=a("ERkP"),B=a.n(M),V=a("uDfI"),D=(a("SwvN"),function HeaderLayout(e){var t=e.chatHidden,a=e.isConversationHistoryOpen,n=void 0!==a&&a,c=e.isChatTakeover,r=void 0!==c&&c,o=Object(V.b)(),s=Object(y.a)(),l=s.backgroundStyles,b=s.conversationHeaderTextStyles,f=Object(V.c)(function(e){return e.session.gdpr}).hasConsent,O=Object(C.a)(),d=Object(N.a)(),j=d.setChatHeight,v=d.previewRef,h=Object(V.c)(function(e){return e.view}).chatOpen,m=Object(M.useState)(Object(V.c)(I.a)),p=Object(i.a)(m,2),g=p[0],w=p[1],E=Object(T.a)(g),_=g!==E;Object(M.useLayoutEffect)(function(){h&&!t&&j(h,_)},[h,t,j,_]);var k=Object(V.c)(I.a);Object(M.useEffect)(function(){k!==g&&w(k)},[k,g]);var S=x.a[g],D=g!==x.b.CONVERSATION,P=O&&!r&&!n;return B.a.createElement("header",{className:u()("drift-widget-header",{"drift-widget-header--collapsed":D,"drift-widget-header--gdpr-consent":!f})},B.a.createElement(A.a,{style:l}),B.a.createElement("div",{className:"drift-widget-header--content"},B.a.createElement(S,{previewRef:v,resetChatHeight:function resetChatHeight(){j(h,!0)}})),P&&B.a.createElement(L.a,{onClick:function doToggleChat(){o(Object(R.e)({chatOpen:!1}))},className:u()("drift-widget-mobile-close",{"drift-widget-mobile-close--chat-open":h}),"aria-label":"Close Drift Widget messenger",style:b},B.a.createElement(H.j,{width:16,height:16})))}),P=a("vjCh"),F=a("qixE"),X=a("K7i0"),G=a("bYXQ"),Y=a("Hvhg"),U=a("pu/X"),q=a("da4L"),J=a("Gxm1"),Q=a("LVcX"),$=a("TbSn"),K=a("kNJ0"),W=a("oPI6"),Z=a("MFhO"),z=a("6lNa"),ee=a("0lfv"),te=a("VpmR"),ae=a("7oto"),ne=a("4c+F"),ce=a("HSQL"),re=(a("sXTY"),null),ie=function ChatLayout(){var e=Object(V.b)(),t=Object(C.a)(),a=Object(M.useState)(!0),n=Object(i.a)(a,2),s=n[0],l=n[1];Object(k.a)();var A=Object(V.c)(function(e){return e.view}),H=A.chatOpen,L=A.isChatTakeover,x=Object(V.c)(Y.c).showBranding,N=void 0!==x&&x,R=Object(S.a)().noPolicy,I=!N&&R;Object(M.useLayoutEffect)(function(){L&&H&&Object(ae.a)({topic:"set-frame-width-and-height",message:{className:p.a,height:"100%",max:!0,name:"chat",width:"100%"}})},[L,H]);var W=Object(V.c)(function(e){return e.conversations.activeConversation}),te=Object(E.a)().fetchMessages,ie=Object(T.a)(W),oe=Object(V.c)(function(e){return e.conversations.conversations}),se=Object(V.c)(function(e){return e.conversations.messages}),ue=Object(V.c)(function(e){return Object(Q.a)({},["conversations","messages",e.conversations.activeConversation],e)}),le=Object(V.c)(function(e){return Object(Q.a)(!1,["conversations","conversationStatus",e.conversations.activeConversation,"permaclosed"],e)}),be=Object(M.useMemo)(function(){return Object(q.q)(ue)},[ue]),fe=Object(V.c)(function(e){return e.campaigns.activeCampaign}),Oe=Object(M.useMemo)(function(){return Object(Q.a)(null,["attributes","campaignDisplayType"],fe)===Z.a.WELCOME_MESSAGE},[fe]),de=Object(V.c)(function(e){return e.session.gdpr}).hasConsent,je=Object(V.c)(function(e){return Object(Q.a)(!1,["conversations","conversationStatus",W,"endUserResponded"],e)}),ve=Object(g.a)(),he=ve.conversationHistoryOpen,me=ve.conversationHistoryEnabled,pe=Object(y.a)().widgetBackgroundStyles;Object(M.useEffect)(function(){(function(){var t=Object(r.a)(c.a.mark(function _callee(){var t,a,n,r,i;return c.a.wrap(function _callee$(c){for(;;)switch(c.prev=c.next){case 0:if(t=!W||W===m.a,a=ie===W,n=!!oe[W]&&!!se[W],!(t||a||n||Object(G.d)(W))){c.next=5;break}return c.abrupt("return");case 5:return c.prev=5,c.next=8,Object(o.h)(W);case 8:r=c.sent,i=r.data,e(Object(X.h)({conversation:i})),te({}),c.next=17;break;case 14:c.prev=14,c.t0=c.catch(5),Object(ee.f)(U.a.MESSAGE.FETCH_MESSAGE_OR_ACTIVE_CONVO,c.t0,!0);case 17:case"end":return c.stop()}},_callee,null,[[5,14]])}));return function fetchInfoForActiveConversation(){return t.apply(this,arguments)}})()()},[W,e,te,ie,oe,se]),Object(M.useEffect)(function(){H?(function(){var e=Object(r.a)(c.a.mark(function _callee2(){return c.a.wrap(function _callee2$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ae.a)({topic:"focus-frame",message:{name:"chat"}});case 2:case"end":return e.stop()}},_callee2)}));return function focus(){return e.apply(this,arguments)}}()(),re&&clearTimeout(re),l(!1)):re=setTimeout(function delaySetReflowHidden(){l(!0)},350)},[H]);var ge=Object(M.useMemo)(function(){if(!de||!H)return!1;if(fe&&fe.id&&!W){var e=!!Object(Q.a)(null,["attributes","cta"],fe),t="CHAT_RESPONSE"!==Object(Q.a)(null,["attributes","cta","CtaType"],fe);if(e&&t)return!1}var a=be.length>0&&be.length<=2&&!Object(q.f)(be[0]);return!L||a||be.length>2},[fe,W,de,L,be,H]);Object(M.useEffect)(function(){Object(ce.b)("WIDGET_CHAT_FRAME.start")},[]);var we=Object(M.useRef)(!1);Object(M.useEffect)(function(){if(!we.current&&L&&be.length>0){var e=Object(J.b)("post_form_takeover_tti"),t=Object(J.b)("post_form_takeover_show");e&&Object(ne.d)("Post Form Takeover TTI",e),t&&Object(ne.d)("Post Form Takeover Show",t),we.current=!0}},[L,be]);var Ee=Object(M.useMemo)(function(){if(le)return b.a.UNAVAILABLE;var e=Object($.a)(be);if(!e)return b.a.AVAILABLE;var t=Object(K.a)(-2,be),a=Object(q.f)(t)&&Object(q.i)(e);return Object(q.f)(e)||a||Object(q.j)(e)?b.a.UNAVAILABLE_BUTTONS:Object(q.n)(e)||Object(q.n)(t)&&Object(q.i)(e)?b.a.AVAILABLE_BUTTONS:b.a.AVAILABLE},[be,le]),_e=Ee===b.a.AVAILABLE||Ee===b.a.AVAILABLE_BUTTONS,Ce=Object(w.a)(be,W),ke=Object(M.useMemo)(function(){return Object(q.d)(Ce)},[Ce]),Te=Object(M.useMemo)(function(){return B.a.createElement(j.a,{messageGroups:ke,messages:Ce,reflowHidden:s,disabled:he})},[ke,Ce,s,he]),Se=Object(_.a)(),ye=Object(M.useMemo)(function(){if(Ce&&Ce.length){var e=Object($.a)(Ce);if(e&&Object(q.k)(e))return e}return null},[Ce]),Ae=de&&(!!W||L),He=!ge||!_e;return B.a.createElement("main",{className:u()("drift-widget-chat-layout",{"drift-widget-chat-layout__takeover":L&&!t,"drift-widget-chat-layout__takeover--noResponse":L&&!t&&!je}),"aria-live":"polite"},B.a.createElement(h.a,null),B.a.createElement("div",{className:u()("drift-widget-chat-wrapper",{"drift-widget-chat-wrapper__open":H,"drift-widget-chat-wrapper__closed":!H,"drift-widget-chat-wrapper__reflow-hidden":s,"drift-widget-chat-wrapper__active-conversation":Ae,"drift-widget-chat-wrapper__no-footer-content":I&&He}),tabIndex:0},B.a.createElement(D,{isConversationHistoryOpen:he,chatHidden:s,isChatTakeover:L}),!L&&me&&B.a.createElement(f.a,null),Ae&&B.a.createElement("div",{className:u()("drift-widget-message-history",{"drift-widget-message-history--with-footer":Se,"drift-widget-message-history--no-composer":He}),style:pe},Te,0===be.length&&B.a.createElement(d.a,null)),B.a.createElement("div",{className:"drift-widget-chat-bottom"},ge&&B.a.createElement(b.b,{state:Ee,disabled:he,onSubmit:function doSendMessage(t){if((Oe||L)&&!W){var a=Object(Q.a)(null,["attributes","playbookId"],fe);!function sendSubmittedEventForChatResponseCampaign(){fe&&"CHAT_RESPONSE"===Object(Q.a)(null,["attributes","cta","CtaType"],fe)&&Object(F.a)(z.b.SUBMITTED)}(),Object(P.l)(fe.id,a)}e(Object(X.m)(t))},chatHidden:s,activeConversationId:W}),!he&&B.a.createElement(O.a,null)),W&&!!ye&&B.a.createElement(v.a,{message:ye})))};t.default=function(e){var t=Object(M.useState)(!1),a=Object(i.a)(t,2),n=a[0],o=a[1],s=Object(V.c)(function(e){return e.view.initComplete}),u=Object(V.c)(function(e){return Object(Q.a)("en",["embed","configuration","locale"],e)});return Object(M.useEffect)(function(){s&&!n&&function(){var e=Object(r.a)(c.a.mark(function _callee3(){return c.a.wrap(function _callee3$(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(te.b)(u);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),Object(ee.n)({data:["i18n failed to load - ".concat(e.t0.message),e.t0],type:"warn",internal:!0});case 8:o(!0);case 9:case"end":return e.stop()}},_callee3,null,[[0,5]])}));return function runAsync(){return e.apply(this,arguments)}}()()},[s,n,u]),B.a.createElement(W.a,null,s&&n?B.a.createElement(ie,e):B.a.createElement(l.a,null))}},SwvN:function(e,t,a){},sXTY:function(e,t,a){},swFs:function(e,t,a){"use strict";var n=a("ERkP"),c=a.n(n);a("G5CQ");t.a=function TopLine(e){var t=e.style;return c.a.createElement("div",{className:"drift-widget-header-top-line",style:t})}}}]);