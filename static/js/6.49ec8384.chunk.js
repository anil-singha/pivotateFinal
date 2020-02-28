(this["webpackJsonpno-stack-base"]=this["webpackJsonpno-stack-base"]||[]).push([[6],{558:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"dialog__backdrop",onClick:e.onClose}),r.a.createElement("div",{className:"dialog text-center\n         ".concat(e.progress?" dialog__bordered":"","\n         ").concat(e.fullScreen?" dialog__fullscreen":"","\n      ")},r.a.createElement("div",{className:"dialog__close"},r.a.createElement("button",{onClick:e.onClose,type:"button","aria-label":"Close Account Info Modal Box"},"\xd7")),e.progress&&r.a.createElement("div",{className:"dialog__progress",style:{width:e.progress}}),e.children))}},596:function(e,a,t){"use strict";t.r(a);var n=t(559),r=t(560),l=t(565),c=t(561),o=t(566),s=t(0),i=t.n(s),m=t(43),u=t(562),d=t(61),p=t(563),b=t.n(p),E=t(557),h=t(75),f=t(567),v=t(36);function g(){var e=Object(f.a)(["\n  \n  }\n"]);return g=function(){return e},e}function N(){var e=Object(f.a)(["\n  font-size: 0.75rem;\n  color: tomato;\n"]);return N=function(){return e},e}function w(){var e=Object(f.a)(["\n  width: 250px;\n\n  padding: 1em 0;\n\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 10px 10px 10px 10px;\n  box-shadow: 10px 10px 8px -1px rgba(0, 0, 0, 0.6);\n"]);return w=function(){return e},e}v.a.div(w());var y=v.a.div(N()),x=v.a.div(g()),S=t(572),O=t(91),C=function(e){e.fieldLabel;var a=e.type,t=e.name,n=e.as,r=e.placeholder,l=e.options,c=void 0===l?[]:l;e.value;return i.a.createElement(x,null,"checkbox"!==a&&i.a.createElement("label",{style:{width:"100%"}},!n&&i.a.createElement(O.b,{className:"form__input",type:a,name:t,placeholder:r}),n&&i.a.createElement(O.b,{name:t,as:n,placeholder:r},0!==c.length&&c.map((function(e,a){return i.a.createElement("option",{key:a,value:e.value},e.label)})))),"checkbox"===a&&i.a.createElement(O.b,{name:t},(function(e){var a=e.field;e.form;return i.a.createElement("label",null,i.a.createElement("input",Object.assign({},a,{type:"checkbox"})),"I agree to our",i.a.createElement("b",null,i.a.createElement("a",{href:"/terms-and-conditions",target:"_blank"},"\xa0 Terms of Use \xa0")),"and",i.a.createElement("b",null,i.a.createElement("a",{href:"/privacy-policy",target:"_blank"},"\xa0 Privacy Policy \xa0")),"by signing up")})),i.a.createElement(y,null,i.a.createElement(O.a,{name:t})))},_=function(e){var a=e.initialValues,t=e.validationSchema,n=e.onSubmit,r=e.formError,l=Object(S.a)(e,["initialValues","validationSchema","onSubmit","formError"]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(O.d,{initialValues:a,validationSchema:t,onSubmit:n},(function(e){var a=e.isSubmitting,t=e.isValid,n=e.dirty,c=e.isValidating;return i.a.createElement(O.c,{className:"form"},i.a.createElement("div",{className:"form__input"},i.a.createElement(C,{placeholder:"Username",type:"text",name:"username"})),i.a.createElement("div",{className:"form__input"},i.a.createElement(C,{placeholder:"First Name",type:"text",name:"firstName"})),i.a.createElement("div",{className:"form__input"},i.a.createElement(C,{placeholder:"Last Name",type:"text",name:"lastName"})),i.a.createElement("div",{className:"form__input"},i.a.createElement(C,{placeholder:"Email",type:"email",name:"email"})),i.a.createElement("div",{className:"form__input"},i.a.createElement(C,{placeholder:"Password",type:"password",name:"password"})),i.a.createElement("div",{className:"form__input"},i.a.createElement(C,{placeholder:"Confirm Password",type:"password",name:"passwordConfirmation"})),i.a.createElement("div",{className:"form__input"},i.a.createElement("button",{className:"button button--yellow",type:"submit",disabled:a||!t||c||!n},"SIGN UP"),r&&i.a.createElement(y,null,r)),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("small",null,"Already have an account?",i.a.createElement("a",{href:"javascript:void(0);",className:"teal--text",onClick:l.onSwitch},"\xa0Log In")))})))},j=function(e){var a=e.initialValues,t=e.validationSchema,n=e.onSubmit,r=e.formError;return i.a.createElement(i.a.Fragment,null,i.a.createElement(O.d,{initialValues:a,validationSchema:t,onSubmit:n},(function(e){var a=e.isSubmitting,t=e.isValid,n=e.dirty,l=e.isValidating;return i.a.createElement(O.c,{className:"form"},i.a.createElement("div",{className:"form__input"},i.a.createElement(C,{placeholder:"App Name:",type:"text",name:"app"})),i.a.createElement("div",{className:"form__input"},i.a.createElement(C,{placeholder:"Description:",as:"textarea",name:"description"})),i.a.createElement("br",null),i.a.createElement("div",{className:""},i.a.createElement(C,{name:"terms",type:"checkbox",fieldLabel:"I agree to our Terms of Use and Privacy Policy by signing up"})),i.a.createElement("div",{className:"form__input"},i.a.createElement("button",{className:"button button--yellow",type:"submit",disabled:a||!t||l||!n},"MAKE MY APP NOW"),r&&i.a.createElement(y,null,r)))})))},k=t(45),P=t(573),I=t.n(P),L=t(586),R=t.n(L),T=k.b().shape({username:k.d().label("username").required("Please enter desired username."),firstName:k.d().label("firstName").required("Please enter your first name."),lastName:k.d().label("lastName").required("Please enter your last name."),email:k.d().label("email").email("Enter a valid email.").required("Please enter your email."),password:k.d().label("password").matches(/[a-z]/,"at least one lowercase char").matches(/[A-Z]/,"at least one uppercase char").matches(/[a-zA-Z]+[^a-zA-Z\s]+/,"at least 1 number or special char (@,!,#, etc).").min(8,"Must be at least 8 characters.").required("Please enter your desired password."),passwordConfirmation:k.d().oneOf([k.c("password"),"",null],"Passwords must match.").required("Please confirm your password.")}),H=k.b().shape({app:k.d().label("app").required("Please enter desired app name."),description:k.d().label("description").required("Please enter app description."),terms:k.a().label("terms").oneOf([!0],"Must Accept Terms and Conditions").required("Please click agree on terms before you can proceed")}),V=k.b().shape({cardNumber:k.d().label("Card number").max(16).test("test-number","Credit Card number is invalid",(function(e){return I.a.number(e).isValid})).required(),cardName:k.d().label("Name on card").required(),cvc:k.d().label("CVC").min(3).max(4).required(),expiryMonth:k.d().label("Expiry month").min(2).max(2).required(),expiryYear:k.d().label("Expiry year").min(4).max(4).required()}),A=function(){for(var e=[],a=R()(),t=R()().add(10,"y");t.diff(a,"years")>=0;){var n=a.format("YYYY");e.push({value:n,label:n}),a.add(1,"year")}return e},M=function(){for(var e=[],a=R()(),t=R()().add(11,"month");t.diff(a,"months")>=0;){var n=a.format("MM"),r=a.format("MMMM");e.push({value:n,label:r}),a.add(1,"month")}return e},D=function(e){var a=e.initialValues,t=e.validationSchema,n=e.onSubmit,r=e.formError;return i.a.createElement(O.d,{initialValues:a,validationSchema:t,onSubmit:n},(function(e){var a=e.isSubmitting,t=e.isValid,n=e.dirty,l=e.isValidating;return i.a.createElement(O.c,{className:"form"},i.a.createElement("div",{className:"form__input"},i.a.createElement(C,{placeholder:"Name on Card:",type:"text",name:"cardName"})),i.a.createElement("div",{className:"form__input flex-row"},i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"form__input",style:{width:"300px"}},i.a.createElement(C,{placeholder:"Card Number:",type:"text",name:"cardNumber"})),i.a.createElement("div",{className:"",style:{width:"100px",marginLeft:"8px"}},i.a.createElement(C,{placeholder:"CVC:",type:"text",name:"cvc"})))),i.a.createElement("div",{className:"form__input flex-row"},i.a.createElement("div",{className:"flex items-center"},i.a.createElement("div",null,"Expiration Date"),i.a.createElement("div",{className:"",style:{marginLeft:"8px"}},i.a.createElement(C,{placeholder:"Month",as:"select",name:"expiryMonth",options:M()})),i.a.createElement("div",{className:"",style:{marginLeft:"8px"}},i.a.createElement(C,{placeholder:"Year",as:"select",name:"expiryYear",options:A()})))),i.a.createElement("div",{className:"form__input"},i.a.createElement("button",{type:"submit",className:"button button--yellow",disabled:a||!t||l||!n},"Sign Up!")),r&&i.a.createElement(y,null,r))}))},Y=t(558),U=new Date,q={name:"",username:"",firstName:"",lastName:"",email:"",password:"",passwordConfirmation:"",app:"",description:"",cardName:"",cardNumber:"",cvc:"",expiryMonth:(U.getMonth()+1).toString().padStart(2,"0"),expiryYear:U.getFullYear()},F=function(e,a){a.userClassId;var t=a.onSuccess,n=Object(h.a)(d.d),r=Object(E.a)(n,1)[0],l=Object(s.useState)(!1),c=Object(E.a)(l,2),o=c[0],m=c[1],u=Object(s.useState)(""),p=Object(E.a)(u,2),f=p[0],v=p[1],g=Object(s.useState)(1),N=Object(E.a)(g,2),w=N[0],y=N[1],x=Object(s.useState)(""),S=Object(E.a)(x,2),O=S[0],C=S[1],k=Object(s.useState)(""),P=Object(E.a)(k,2),I=P[0],L=P[1],R=Object(s.useState)(""),A=Object(E.a)(R,2),M=A[0],U=A[1],F=Object(s.useState)(""),W=Object(E.a)(F,2),G=W[0],B=W[1],K=Object(s.useState)(""),z=Object(E.a)(K,2),Q=z[0],J=z[1],Z=Object(s.useState)(""),X=Object(E.a)(Z,2),$=X[0],ee=X[1],ae=Object(s.useState)(""),te=Object(E.a)(ae,2),ne=te[0],re=te[1],le=function(a,n){var l,c;return b.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(l=n.setSubmitting,v(""),a.password===a.passwordConfirmation){o.next=4;break}return o.abrupt("return");case 4:return c={app:$,description:ne,creditCardNumber:a.cardNumber,creditCardName:a.cardName,expirationDate:"".concat(a.expiryMonth,"/").concat(a.expiryYear),csv:a.cvc},o.prev=5,o.next=8,b.a.awrap(r({variables:{userClassId:e.userClassId,name:O,firstName:I,lastName:M,email:G,password:Q,formValues:JSON.stringify(c)}}));case 8:m(!0),t&&(ce(),t()),o.next=17;break;case 12:o.prev=12,o.t0=o.catch(5),console.log(o.t0),console.log(o.t0.graphQLErrors),v("Something went wrong. Please try again.");case 17:l(!1);case 18:case"end":return o.stop()}}),null,null,[[5,12]])};if(o)return i.a.createElement(Y.a,{onClose:e.onClose},i.a.createElement("div",{className:"dialog__title"},i.a.createElement("h3",null,"Thank you!")),i.a.createElement("p",{className:"text-center"},"We will be contacting you shortly. Looking forward working with you!"),i.a.createElement("br",null),i.a.createElement("p",null,"If you got questions you can email us at \xa0",i.a.createElement("a",{className:"teal--text",href:"mailto:info@pivotate.com"},"info@pivotate.com")),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("button",{className:"button button--yellow",type:"button",onClick:e.onClose},"DONE")));var ce=function(){y(w+1)},oe=function(e,a){var t=a.setSubmitting;v(""),e.password===e.passwordConfirmation&&(C(e.username),L(e.firstName),U(e.lastName),B(e.email),J(e.password),t(!1),ce())},se=function(e,a){var t=a.setSubmitting;v(""),ee(e.app),re(e.description),t(!1),ce()},ie=function(){switch(w){case 1:return{enterText:"ENTER DETAILS",buttonText:"SIGN UP",progressWidth:"33%"};case 2:return{enterText:"ENTER APP DESCRIPTION",buttonText:"MAKE MY APP NOW",progressWidth:"66%"};case 3:return{enterText:"CREDIT CARD DETAILS",buttonText:"MAKE MY APP NOW",progressWidth:"100%"}}};return i.a.createElement(i.a.Fragment,null,i.a.createElement(Y.a,{progress:ie().progressWidth,onClose:e.onClose},i.a.createElement("div",{className:"dialog__title"},i.a.createElement("div",{className:"dialog__step"},"STEP ",i.a.createElement("span",{className:"teal--text"}," ",w," ")," of 3"),i.a.createElement("h3",null,ie().enterText)),3==w&&i.a.createElement("p",{className:"dialog__text"},"You won\u2019t be charged a thing until you commit to it explicitly. In fact, the initial consultation is"," ",i.a.createElement("strong",{className:"teal--text"},"FREE"),".",i.a.createElement("br",null),i.a.createElement("br",null),"We just need your credit card in advance to cover ourselves."),function(){switch(w){case 1:return i.a.createElement(_,{onSwitch:e.onSwitch,initialValues:q,validationSchema:T,onSubmit:oe,formError:f});case 2:return i.a.createElement(j,{initialValues:q,validationSchema:H,onSubmit:se,formError:f});case 3:return i.a.createElement(D,{initialValues:q,validationSchema:V,onSubmit:le,formError:f});default:return i.a.createElement(_,{initialValues:q,validationSchema:T,onSubmit:oe,formError:f})}}()))},W=t(588),G=t(587),B=t.n(G),K=function(e){var a=e.onSubmit,t=e.onCancel,n=e.error,r=e.disabled,l=Object(s.useState)(""),c=Object(E.a)(l,2),o=c[0],m=c[1];return i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(o)}},i.a.createElement("h3",null,"Reset Password"),i.a.createElement("div",null,"Your Username/Email:",i.a.createElement("input",{type:"text",onChange:function(e){e.preventDefault(),m(e.target.value)},disabled:r})),i.a.createElement("div",null,i.a.createElement("button",{type:"submit",disabled:r||!o},"Send Code"),i.a.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),t()},disabled:r},"Cancel")),n&&i.a.createElement("div",null,n))},z=function(e){var a=e.onSubmit,t=e.onCancel,n=e.disabled,r=e.error,l=Object(s.useState)(""),c=Object(E.a)(l,2),o=c[0],m=c[1],u=Object(s.useState)(""),d=Object(E.a)(u,2),p=d[0],b=d[1],h=Object(s.useState)(""),f=Object(E.a)(h,2),v=f[0],g=f[1],N=Object(s.useState)(""),w=Object(E.a)(N,2),y=w[0],x=w[1],S=!o||!p||!v;return i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),x(""),o===p?a(o,v):x("New password and confirmation must match.")}},i.a.createElement("h3",null,"Reset Password"),i.a.createElement("p",null,"A password reset code has been sent to your email. Enter the code below."),i.a.createElement("div",null,"New Password:",i.a.createElement("input",{type:"password",onChange:function(e){e.preventDefault(),m(e.target.value)},disabled:n})),i.a.createElement("div",null,"Confirm Password:",i.a.createElement("input",{type:"password",onChange:function(e){e.preventDefault(),b(e.target.value)},disabled:n})),i.a.createElement("div",null,"Password Reset Code:",i.a.createElement("input",{type:"password",onChange:function(e){e.preventDefault(),g(e.target.value)},disabled:n})),i.a.createElement("div",null,i.a.createElement("button",{type:"submit",disabled:n||S},"Change Password"),i.a.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),t()},disabled:n},"Cancel")),r&&i.a.createElement("div",null,r),y&&i.a.createElement("div",null,y))};function Q(){var e=Object(f.a)(["\n  border: none;\n  text-decoration: underline;\n  background: none;\n  cursor: pointer;\n\n  &:hover {\n    text-decoration: none;\n  }\n"]);return Q=function(){return e},e}var J=v.a.button(Q()),Z=(B()(Object(W.a)(d.a,{name:"getPasswordResetCode"}),Object(W.a)(d.e,{name:"resetPassword"}),d.h)((function(e){var a=e.getPasswordResetCode,t=e.resetPassword,n=e.platformId,r=Object(s.useState)(!1),l=Object(E.a)(r,2),c=l[0],o=l[1],m=Object(s.useState)(""),u=Object(E.a)(m,2),d=u[0],p=u[1],h=Object(s.useState)(!1),f=Object(E.a)(h,2),v=f[0],g=f[1],N=Object(s.useState)(""),w=Object(E.a)(N,2),y=w[0],x=w[1],S=Object(s.useState)(!1),O=Object(E.a)(S,2),C=O[0],_=O[1],j=function(){x(""),_(!1),g(!1),o(!1),p("")};return c?d?d&&!v?i.a.createElement(z,{onSubmit:function(e,a){return b.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return x(""),_(!0),r.prev=2,r.next=5,b.a.awrap(t({variables:{userNameOrEmail:d,password:e,code:a,stackId:n}}));case 5:g(!0),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(2),x("Something went wrong. Please try again.");case 11:_(!1);case 12:case"end":return r.stop()}}),null,null,[[2,8]])},onCancel:j,disabled:C,error:y}):i.a.createElement("p",null,"Your password has been reset. You may now login.",i.a.createElement(J,{type:"button",onClick:j},"Ok.")):i.a.createElement(K,{onSubmit:function(e){return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return x(""),_(!0),t.prev=2,t.next=5,b.a.awrap(a({variables:{userNameOrEmail:e,stackId:n}}));case 5:p(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),x("Something went wrong. Please try again.");case 11:_(!1);case 12:case"end":return t.stop()}}),null,null,[[2,8]])},onCancel:j,disabled:C,error:y}):i.a.createElement(J,{type:"button",onClick:function(){return o(!0)}},"Forgot Password?")})),Object(d.h)((function(e,a){var t=a.loading,n=a.currentUser,r=a.login,l=Object(s.useState)(""),c=Object(E.a)(l,2),o=c[0],m=c[1],u=Object(s.useState)(""),d=Object(E.a)(u,2),p=d[0],h=d[1],f=Object(s.useState)(!1),v=Object(E.a)(f,2),g=v[0],N=v[1],w=Object(s.useState)(""),y=Object(E.a)(w,2),x=y[0],S=y[1];if(t||n)return null;return i.a.createElement(Y.a,{onClose:e.onClose},i.a.createElement("div",{className:"dialog__title"},i.a.createElement("img",{src:"images/Pivotate Logo.png"}),i.a.createElement("h3",null,"LOGIN")),i.a.createElement("form",{onSubmit:function(e){return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),N(!0),a.prev=2,a.next=5,b.a.awrap(r({username:o,password:p}));case 5:a.next=11;break;case 7:a.prev=7,a.t0=a.catch(2),S(a.t0.message||a.t0.graphQLErrors&&a.t0.graphQLErrors.length&&a.t0.graphQLErrors[0]||a.t0),N(!1);case 11:case"end":return a.stop()}}),null,null,[[2,7]])},className:"form"},i.a.createElement("div",{className:"form__input"},i.a.createElement("label",{htmlFor:"nostack-username"},i.a.createElement("input",{id:"nostack-username",type:"text",name:"username",placeholder:"Username",disabled:g,value:o,onChange:function(e){return m(e.target.value)}}))),i.a.createElement("div",{className:"form__input"},i.a.createElement("label",{htmlFor:"nostack-password"},i.a.createElement("input",{id:"nostack-password",type:"password",placeholder:"Password",name:"password",disabled:g,value:p,onChange:function(e){return h(e.target.value)}}))),i.a.createElement("div",{className:"form__input"},i.a.createElement("button",{className:"button button--yellow",type:"submit",disabled:g||!o||!p},"Log In")),x&&i.a.createElement("div",{className:"form__input"},x),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("small",null,"Dont have an account?",i.a.createElement("a",{href:"javascript:void(0);",className:"teal--text",onClick:e.onSwitch},"\xa0 Sign Up"))))}))),X=t(92),$=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(t=Object(l.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(o)))).state={modalRegistration:t.props.modalRegistration,modalLogin:!1,checkbox:!1},t.howItWorks=function(){var e=document.getElementById("how-it-works");return setTimeout((function(){e.scrollIntoView()}),100),i.a.createElement(m.c,{to:"/",push:!0})},t.about=function(){var e=document.getElementById("about");return setTimeout((function(){e.scrollIntoView()}),100),i.a.createElement(m.c,{to:"/",push:!0})},t.modalHandlerRegistration=function(){t.setState({modalRegistration:!t.state.modalRegistration})},t.modalHandlerLogin=function(){t.setState({modalLogin:!t.state.modalLogin})},t.modalHandlerSwitchForm=function(){t.modalHandlerRegistration(),t.modalHandlerLogin()},t.checkboxHandler=function(){t.setState({checkbox:!t.state.checkbox})},t}return Object(o.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("header",{className:"container header flex items-center"},i.a.createElement("div",{className:"header__logo"},i.a.createElement("a",{href:"/"},i.a.createElement("img",{src:"images/Pivotate Logo-min.png",alt:"Pivotate Logo"}))),this.state.modalRegistration&&i.a.createElement(F,{platformId:X.a,userClassId:X.b,onSwitch:this.modalHandlerSwitchForm,onClose:this.modalHandlerRegistration}),this.state.modalLogin&&i.a.createElement(Z,{onSwitch:this.modalHandlerSwitchForm,onClose:this.modalHandlerLogin}),i.a.createElement("nav",{className:"hide-tablet"},i.a.createElement("ul",{className:"flex header__nav"},i.a.createElement("li",null,i.a.createElement(u.HashLink,{to:"/pricing"},"PRICING")),i.a.createElement("li",null,i.a.createElement(u.HashLink,{to:"/#how-it-works"}," HOW IT WORKS ")),i.a.createElement("li",null,i.a.createElement(u.HashLink,{to:"/#about-us"}," ABOUT US ")))),i.a.createElement("div",{className:"grow-12 text-right hide-tablet"},i.a.createElement("a",{onClick:this.modalHandlerLogin}," LOGIN "),i.a.createElement(d.b,null),i.a.createElement("a",{onClick:this.modalHandlerRegistration,className:"button button--yellow button__sign-up"},"SIGN UP")),i.a.createElement("div",{className:"show-tablet"},i.a.createElement("div",{id:"amp-burger",onClick:this.checkboxHandler},i.a.createElement("div",{className:"lines"},i.a.createElement("input",{type:"checkbox",checked:this.state.checkbox,id:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"lines-icon","data-menu":""},i.a.createElement("div",{className:"icon-left"}),i.a.createElement("div",{className:"icon-right"})),i.a.createElement("div",{className:"mobile-menu__wrapper"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(u.HashLink,{to:"/pricing"},"PRICING")),i.a.createElement("li",null,i.a.createElement(u.HashLink,{onClick:this.checkboxHandler,to:"/#how-it-works"},"HOW IT WORKS"," ")),i.a.createElement("li",null,i.a.createElement(u.HashLink,{onClick:this.checkboxHandler,to:"/#about-us"},"ABOUT US"," ")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:void(0);",onClick:this.modalHandlerLogin}," ","LOGIN"," ")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:void(0);",onClick:this.modalHandlerRegistration,className:"button button--yellow button__sign-up"},"FREE CONSULTATION"))))))))}}]),a}(s.Component);a.default=$}}]);
//# sourceMappingURL=6.49ec8384.chunk.js.map