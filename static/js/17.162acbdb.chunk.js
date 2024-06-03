"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[17],{6017:function(n,t,e){e.r(t),e.d(t,{default:function(){return M}});var r=e(2791),i=e(4420),o=e(4270),a="ContactsList_list__mmE3Y",c="ContactsList_list_item__vxZgU",u="ContactsList_button_delete__os7eD",s=e(3634),l=function(n){return n.contacts.items},d=function(n){return n.filter},f=function(n){return n.contacts.loading},m=e(1538),v=e(184),p=function(){var n=(0,i.v9)(l),t=(0,i.v9)(d),e=(0,i.I0)();(0,r.useEffect)((function(){e((0,s.yF)())}),[e]);var o=null===n||void 0===n?void 0:n.filter((function(n){var e;return null===n||void 0===n||null===(e=n.name)||void 0===e?void 0:e.toLowerCase().includes(t.toLowerCase())}));return null!==o&&void 0!==o&&o.length?(0,v.jsx)("ul",{className:a,children:o.map((function(n){var t=n.id,r=n.name,i=n.phone;return(0,v.jsxs)("li",{className:c,children:[(0,v.jsxs)("p",{children:[r," ",(0,v.jsx)("span",{children:" "}),i]}),(0,v.jsx)("button",{className:u,type:"submit",onClick:function(){return function(n){e((0,m.GK)(n))}(t)},children:"Delete"})]},t)}))}):"No contacts found"},h="ContactForm_form__dhl+T",g="ContactForm_button__eSwX9",_="ContactForm_input__Bl93P",y="ContactForm_paragraph__nRyTj",x=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",e=crypto.getRandomValues(new Uint8Array(n));n--;){var r=63&e[n];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t},b=(e(4925),e(1413)),C=e(3433),E=function(n){return"number"==typeof n&&!isNaN(n)},I=function(n){return"string"==typeof n},j=function(n){return"function"==typeof n},w=function(n){return(0,r.isValidElement)(n)||I(n)||j(n)||E(n)};function L(n){var t=n.enter,e=n.exit,i=n.appendPosition,o=void 0!==i&&i,a=n.collapse,c=void 0===a||a,u=n.collapseDuration,s=void 0===u?300:u;return function(n){var i=n.children,a=n.position,u=n.preventExitTransition,l=n.done,d=n.nodeRef,f=n.isIn,m=n.playToast,v=o?"".concat(t,"--").concat(a):t,p=o?"".concat(e,"--").concat(a):e,h=(0,r.useRef)(0);return(0,r.useLayoutEffect)((function(){var n,t=d.current,e=v.split(" "),r=function n(r){var i;r.target===d.current&&(m(),t.removeEventListener("animationend",n),t.removeEventListener("animationcancel",n),0===h.current&&"animationcancel"!==r.type&&(i=t.classList).remove.apply(i,(0,C.Z)(e)))};(n=t.classList).add.apply(n,(0,C.Z)(e)),t.addEventListener("animationend",r),t.addEventListener("animationcancel",r)}),[]),(0,r.useEffect)((function(){var n=d.current,t=function t(){n.removeEventListener("animationend",t),c?function(n,t,e){void 0===e&&(e=300);var r=n.scrollHeight,i=n.style;requestAnimationFrame((function(){i.minHeight="initial",i.height=r+"px",i.transition="all ".concat(e,"ms"),requestAnimationFrame((function(){i.height="0",i.padding="0",i.margin="0",setTimeout(t,e)}))}))}(n,l,s):l()};f||(u?t():(h.current=1,n.className+=" ".concat(p),n.addEventListener("animationend",t)))}),[f]),r.createElement(r.Fragment,null,i)}}var Z=new Map,T=[],N=new Set,k=function(){return Z.size>0};function F(n,t){var e;if(t)return!(null==(e=Z.get(t))||!e.isToastActive(n));var r=!1;return Z.forEach((function(t){t.isToastActive(n)&&(r=!0)})),r}function A(n,t){w(n)&&(k()||T.push({content:n,options:t}),Z.forEach((function(e){e.buildToast(n,t)})))}function q(n,t){Z.forEach((function(e){null!=t&&null!=t&&t.containerId?(null==t?void 0:t.containerId)===e.id&&e.toggle(n,null==t?void 0:t.id):e.toggle(n,null==t?void 0:t.id)}))}var R=1,S=function(){return""+R++};function B(n){return n&&(I(n.toastId)||E(n.toastId))?n.toastId:S()}function D(n,t){return A(n,t),t.toastId}function P(n,t){return(0,b.Z)((0,b.Z)({},t),{},{type:t&&t.type||n,toastId:B(t)})}function z(n){return function(t,e){return D(t,P(n,e))}}function U(n,t){return D(n,P("default",t))}U.loading=function(n,t){return D(n,P("default",(0,b.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},U.promise=function(n,t,e){var r,i=t.pending,o=t.error,a=t.success;i&&(r=I(i)?U.loading(i,e):U.loading(i.render,(0,b.Z)((0,b.Z)({},e),i)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=function(n,t,i){if(null!=t){var o=(0,b.Z)((0,b.Z)((0,b.Z)({type:n},c),e),{},{data:i}),a=I(t)?{render:t}:t;return r?U.update(r,(0,b.Z)((0,b.Z)({},o),a)):U(a.render,(0,b.Z)((0,b.Z)({},o),a)),i}U.dismiss(r)},s=j(n)?n():n;return s.then((function(n){return u("success",a,n)})).catch((function(n){return u("error",o,n)})),s},U.success=z("success"),U.info=z("info"),U.error=z("error"),U.warning=z("warning"),U.warn=U.warning,U.dark=function(n,t){return D(n,P("default",(0,b.Z)({theme:"dark"},t)))},U.dismiss=function(n){!function(n){var t;if(k()){if(null==n||I(t=n)||E(t))Z.forEach((function(t){t.removeToast(n)}));else if(n&&("containerId"in n||"id"in n)){var e;(null==(e=Z.get(n.containerId))?void 0:e.removeToast(n.id))||Z.forEach((function(t){t.removeToast(n.id)}))}}else T=T.filter((function(t){return null!=n&&t.options.toastId!==n}))}(n)},U.clearWaitingQueue=function(n){void 0===n&&(n={}),Z.forEach((function(t){!t.props.limit||n.containerId&&t.id!==n.containerId||t.clearQueue()}))},U.isActive=F,U.update=function(n,t){void 0===t&&(t={});var e=function(n,t){var e,r=t.containerId;return null==(e=Z.get(r||1))?void 0:e.toasts.get(n)}(n,t);if(e){var r=e.props,i=e.content,o=(0,b.Z)((0,b.Z)((0,b.Z)({delay:100},r),t),{},{toastId:t.toastId||n,updateId:S()});o.toastId!==n&&(o.staleId=n);var a=o.render||i;delete o.render,D(a,o)}},U.done=function(n){U.update(n,{progress:1})},U.onChange=function(n){return N.add(n),function(){N.delete(n)}},U.play=function(n){return q(!0,n)},U.pause=function(n){return q(!1,n)};"undefined"!=typeof window?r.useLayoutEffect:r.useEffect;var H=function(n,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(n,"-enter"),exit:"Toastify--animate Toastify__".concat(n,"-exit"),appendPosition:t}};L(H("bounce",!0)),L(H("slide",!0)),L(H("zoom")),L(H("flip"));var K=function(){var n=(0,i.I0)(),t=(0,i.v9)(l);return(0,v.jsxs)("form",{className:h,onSubmit:function(e){e.preventDefault();var r={id:x(),name:e.currentTarget.elements.name.value,number:e.currentTarget.elements.number.value};if(t.find((function(n){return n.name.toLowerCase()===r.name.toLowerCase()})))return U.warn("".concat(r.name," is already in contacts."));n((0,m.uK)(r)),e.currentTarget.reset()},children:[(0,v.jsxs)("label",{children:[(0,v.jsx)("p",{className:y,children:"Name"}),(0,v.jsx)("input",{className:_,id:x(),type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,v.jsxs)("label",{children:[(0,v.jsx)("p",{className:y,children:"Number"}),(0,v.jsx)("input",{className:_,id:x(),type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,v.jsx)("button",{className:g,type:"submit",children:"Add contact"})]})};function M(){var n=(0,i.I0)(),t=(0,i.v9)(f);return(0,r.useEffect)((function(){n((0,s.yF)())}),[n]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o.q,{children:(0,v.jsx)("title",{children:"Your contacts"})}),(0,v.jsx)(K,{}),(0,v.jsx)("div",{children:t&&"Request in progress..."}),(0,v.jsx)(p,{})]})}}}]);
//# sourceMappingURL=17.162acbdb.chunk.js.map