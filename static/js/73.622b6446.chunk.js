"use strict";(self.webpackChunkpets_support=self.webpackChunkpets_support||[]).push([[73],{4117:function(e,t,r){r.d(t,{r:function(){return u}});var n,a,i=r(2791),s=["title","titleId"];function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function c(e,t){var r=e.title,c=e.titleId,u=o(e,s);return i.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:985,height:1024,viewBox:"0 0 985 1024",ref:t,"aria-labelledby":c},u),r?i.createElement("title",{id:c},r):null,n||(n=i.createElement("g",{id:"icomoon-ignore"})),a||(a=i.createElement("path",{fill:"none",strokeLinejoin:"miter",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:39.3846,stroke:"#000",d:"M492.308 988.134v-478.326M492.308 509.808v-478.328M492.308 509.808h472.615M492.308 509.808h-472.615"})))}var u=i.forwardRef(c);r.p},6774:function(e,t,r){r.d(t,{AC:function(){return u},IG:function(){return i},Q5:function(){return o},Xn:function(){return a},je:function(){return l},k6:function(){return c},nL:function(){return d},sE:function(){return n},sM:function(){return s},tQ:function(){return p}});var n={name:"email",type:"email",placeholder:"Email",required:!0,requiredMessage:"Email is required",pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,patternMessage:"Invalid email address"},a={name:"password",type:"password",placeholder:"Password",required:!0,requiredMessage:"Password is required",pattern:/^\S{7,32}$/i,patternMessage:"Min 7 max 32 symbols"},i={name:"passwordConfirm",type:"password",placeholder:"Confirm Password",required:!0,requiredMessage:"Confirm your password",confirmPassword:!0},s={name:"name",type:"text",placeholder:"Name",required:!0,requiredMessage:"Enter your name, please",pattern:/^[a-zA-Z]+$/i,patternMessage:"Invalid name"},l={name:"city",type:"text",placeholder:"City, Region",required:!0,requiredMessage:"Enter your city and region, please",pattern:/^\s*(?:\w+\s*,\s*){1,}(?:\w+\s*)$/i,patternMessage:"Format: Brovary, Kyiv"},o={name:"phone",type:"tel",placeholder:"Phone",required:!0,requiredMessage:"Enter your phone, please",pattern:/^(0[5-9][0-9]\d{7})$/i,patternMessage:"Phone format: 0971234567"},c={label:"Name pet",name:"petName",type:"text",placeholder:"Type pet name",required:!0,requiredMessage:"Enter your pet's name",pattern:/^[A-Za-z0-9\s!@#$%^&*()_+=-`~\\\][{}|';:/.,?><]*$/i,patternMessage:"Latin only, min 2, max 16",maxLength:16,minLength:2},u={label:"Date of Birth",name:"petBirth",type:"text",placeholder:"Type date of birth",required:!0,requiredMessage:"Enter the date of birth",pattern:/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/i,patternMessage:"Latin symbols only"},d={label:"Breed",name:"petBreed",type:"text",placeholder:"Type breed",required:!0,requiredMessage:"Enter your pet's breed",pattern:/^[A-Za-z0-9\s!@#$%^&*()_+=-`~\\\][{}|';:/.,?><]*$/i,patternMessage:"Latin only, min 2, max 16",maxLength:16,minLength:2},p={label:"Comments",name:"petComment",type:"text",placeholder:"Type comments",required:!0,requiredMessage:"Enter your comment",pattern:/^[A-Za-z0-9\s!@#$%^&*()_+=-`~\\\][{}|';:/.,?><]*$/i,patternMessage:"Latin only, min 8, max 120",maxLength:120,minLength:8}},2737:function(e,t,r){r.d(t,{p:function(){return i}});var n="ValidationError_error__A4hq2",a=r(3329),i=function(e){var t=e.children;return(0,a.jsx)("p",{className:n,children:t})}},2241:function(e,t,r){r.d(t,{z:function(){return o}});r(2791);var n="Button_disabled__ANlFe",a="Button_transparent__hAA0E",i="Button_white__BF2bO",s="Button_orange__64B20",l=r(3329),o=function(e){var t=e.text,r=e.colorType,o=e.type,c=void 0===o?"button":o,u=e.onClickFunc,d=void 0===u?function(){console.log("Your func!")}:u;switch(r){case"orange":return(0,l.jsx)("button",{type:c,onClick:function(){return d()},className:s,children:t});case"white":return(0,l.jsx)("button",{type:c,onClick:function(){return d()},className:i,children:t});case"transparent":return(0,l.jsx)("button",{type:c,onClick:function(){return d()},className:a,children:t});case"disabled":return(0,l.jsx)("button",{type:c,disabled:!0,className:n,children:t});default:return}}},8073:function(e,t,r){r.r(t),r.d(t,{default:function(){return ft}});var n,a,i=r(9439),s=r(2791),l=r(9434),o=r(9010),c=function(e){return e.user.isLoadingUpdate},u=function(e){return e.user.isDisabledFields},d=function(e){return e.user.user.userInfo},p=function(e){var t=e.user;return null===t||void 0===t?void 0:t.user.avatarURL},m=function(e){return e.user.user.pets},h=r(5987),f=r(7475),g=r(4805),_=r(9479),v="CardImg_card__imgThumb__ym4L0",x=r(3329),y=function(e){var t=e.petImg,r=(0,g.useMediaQuery)({query:"(min-width: 768px)"});return(0,x.jsx)("div",{className:v,children:r?(0,x.jsx)("img",{src:t||_,alt:"cat",width:160,height:160}):(0,x.jsx)("img",{src:t||_,alt:"cat",width:240,height:240})})},b=r(4886),j={iconThumb:"TrashButton_iconThumb__fU2hj"},w=function(e){var t=e.id,r=e.onDeletePet,n=(0,g.useMediaQuery)({query:"(min-width: 768px)"});return(0,x.jsx)(x.Fragment,{children:n?(0,x.jsx)("button",{id:t,type:"button",className:j.iconThumb,onClick:function(e){return r(e)},children:(0,x.jsx)(b.r,{className:j.trashIcon,fill:"rgba(17, 17, 17, 0.6)",width:24,height:24})}):(0,x.jsx)("button",{id:t,onClick:function(e){return r(e)},type:"button",className:j.iconThumb,children:(0,x.jsx)(b.r,{className:j.trashIcon,fill:"rgba(17, 17, 17, 0.6)",width:15,height:15})})})},O="CardMarkUp_card__meta__UWUbX",k="CardMarkUp_card__metaInfo__zK6Ee",E="CardMarkUp_card__metaHeading__mVitE",N="CardMarkUp_card__metaText__2fP+p",P=function(e){var t,r=e.cardData,n=e.id;return(0,x.jsx)("ul",{className:O,children:null===(t=Object.entries(r))||void 0===t?void 0:t.map((function(e,t){var r=(0,i.Z)(e,2),a=r[0],s=r[1];return(0,x.jsx)("li",{id:n,className:k,children:(0,x.jsxs)("p",{className:N,children:[(0,x.jsxs)("span",{className:E,children:[a," :"]}),"\xa0",s]})},"".concat(n,"+ ").concat(t))}))})},M="Card_card__list__r4wG2",L="Card_card__item__QTfBi",I=["avatarURL","_id","owner","createdAt","updatedAt"],F=function(e){var t=e.userPets,r=e.onDeletePet;return(0,x.jsx)(f.W,{children:(0,x.jsx)("ul",{className:M,children:null===t||void 0===t?void 0:t.map((function(e){var t=e.avatarURL,n=e._id,a=(e.owner,e.createdAt),i=(e.updatedAt,(0,h.Z)(e,I));return(0,x.jsxs)("li",{className:L,children:[(0,x.jsx)(y,{petImg:t}),(0,x.jsx)(w,{id:n,onDeletePet:r}),(0,x.jsx)(P,{cardData:i,id:n})]},a)}))})})},U=function(e){var t=e.title,r=e.className;return(0,x.jsx)("h3",{className:"".concat(r),children:t})},C=r(3887),S=r(1134),A=r(8724),B=["title","titleId"];function q(){return q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},q.apply(this,arguments)}function T(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function Z(e,t){var r=e.title,i=e.titleId,l=T(e,B);return s.createElement("svg",q({xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",ref:t,"aria-labelledby":i},l),r?s.createElement("title",{id:i},r):null,n||(n=s.createElement("g",{id:"icomoon-ignore"})),a||(a=s.createElement("path",{strokeLinejoin:"miter",strokeLinecap:"butt",strokeMiterlimit:4,strokeWidth:56.8889,d:"M870.679 373.837l0.011-0.010c4.506-4.507 11.816-4.515 16.338 0.005l89.572 89.57c27.881 27.884 27.881 73.312 0 101.196l-89.572 89.568c-2.27 2.27-5.171 3.391-8.175 3.391-2.992 0-5.899-1.121-8.169-3.391h-0.006c-4.511-4.511-4.511-11.822 0-16.327l112.27-112.283h-548.949c-6.385 0-11.556-5.171-11.556-11.555s5.171-11.556 11.556-11.556h548.949l-112.27-112.282c-4.511-4.508-4.511-11.818 0-16.326zM695.558 783.997v80.003c0 72.516-59.039 131.556-131.558 131.556h-402c-72.517 0-131.556-59.039-131.556-131.556v-704c0-72.517 59.038-131.556 131.556-131.556h402c72.519 0 131.558 59.038 131.558 131.556v80c0 6.384-5.171 11.556-11.56 11.556-6.383 0-11.554-5.172-11.554-11.556v-80c0-59.819-48.623-108.444-108.444-108.444h-402c-59.819 0-108.445 48.626-108.445 108.444v704c0 59.819 48.625 108.447 108.445 108.447h402c59.821 0 108.444-48.629 108.444-108.447v-80.003c0-6.383 5.171-11.554 11.554-11.554 6.389 0 11.56 5.171 11.56 11.554z"})))}var z,R,D,V=s.forwardRef(Z),W=(r.p,"LogOut_LogOut__s7gfT"),$="LogOut_LogOut__text__IcLV-",Q=function(){var e=(0,l.I0)();return(0,x.jsxs)("button",{type:"button",onClick:function(){return e((0,A.kS)())},className:W,children:[(0,x.jsx)(V,{fill:"#F59256",width:18,height:18}),(0,x.jsx)("p",{className:$,children:"Log Out"})]})},H=r(1413),K=r(50),G=["title","titleId"];function X(){return X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},X.apply(this,arguments)}function J(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function Y(e,t){var r=e.title,n=e.titleId,a=J(e,G);return s.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",width:970,height:1024,viewBox:"0 0 970 1024",ref:t,"aria-labelledby":n},a),r?s.createElement("title",{id:n},r):null,z||(z=s.createElement("g",{id:"icomoon-ignore"})),R||(R=s.createElement("path",{d:"M485.070 415.421c-80.615 0-145.965 65.351-145.965 145.963 0 80.616 65.351 145.969 145.965 145.969s145.967-65.353 145.967-145.969c0-80.612-65.353-145.963-145.967-145.963z"})),D||(D=s.createElement("path",{d:"M361.561 11.211c-62.011 0-112.281 50.27-112.281 112.281v8.020c0 20.375-16.518 36.892-36.893 36.892-116.049 0-210.125 94.076-210.125 210.125v207.081c0 72.014-0.001 128.463 4.288 173.568 4.371 45.967 13.433 83.607 33.767 116.79 21.294 34.751 50.51 63.962 85.258 85.256 33.182 20.334 70.823 29.4 116.793 33.77 45.1 4.285 101.552 4.285 173.562 4.285h138.274c72.014 0 128.469 0 173.568-4.285 45.967-4.371 83.607-13.436 116.79-33.77 34.751-21.294 63.968-50.505 85.261-85.256 20.334-33.183 29.394-70.823 33.765-116.79 4.29-45.105 4.29-101.554 4.29-173.563v-207.086c0-116.049-94.079-210.125-210.13-210.125-20.372 0-36.891-16.517-36.891-36.892v-8.020c0-62.011-50.268-112.281-112.279-112.281h-247.018zM271.737 561.384c0-117.819 95.513-213.331 213.334-213.331 117.823 0 213.335 95.512 213.335 213.331 0 117.825-95.512 213.337-213.335 213.337-117.821 0-213.334-95.512-213.334-213.337zM754.542 426.649c-24.802 0-44.91-20.108-44.91-44.912s20.108-44.913 44.91-44.913c24.808 0 44.916 20.108 44.916 44.913s-20.108 44.912-44.916 44.912z"})))}var ee,te=s.forwardRef(Y),re=(r.p,["title","titleId"]);function ne(){return ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ne.apply(this,arguments)}function ae(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function ie(e,t){var r=e.title,n=e.titleId,a=ae(e,re);return s.createElement("svg",ne({fill:"#111111",width:"256px",height:"256px",viewBox:"-2.4 -2.4 28.80 28.80",id:"upload-alt-3","data-name":"Flat Line",xmlns:"http://www.w3.org/2000/svg",className:"icon flat-line",stroke:"#111111",transform:"matrix(1, 0, 0, 1, 0, 0)",ref:t,"aria-labelledby":n},a),r?s.createElement("title",{id:n},r):null,ee||(ee=s.createElement("g",{id:"SVGRepo_bgCarrier",strokeWidth:0})),s.createElement("g",{id:"SVGRepo_iconCarrier"},s.createElement("path",{id:"secondary",d:"M21,13v7a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V13H8a4,4,0,0,0,8,0Z",style:{fill:"#F59256",strokeWidth:1.344}}),s.createElement("polyline",{id:"primary",points:"15 6 12 3 9 6",style:{fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.344}}),s.createElement("line",{id:"primary-2","data-name":"primary",x1:21,y1:13,x2:18,y2:4,style:{fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.344}}),s.createElement("line",{id:"primary-3","data-name":"primary",x1:3,y1:13,x2:6,y2:4,style:{fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.344}}),s.createElement("path",{id:"primary-4","data-name":"primary",d:"M12,11V3m4,10a4,4,0,0,1-8,0H3v7a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V13Z",style:{fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.344}})))}var se,le,oe=s.forwardRef(ie),ce=(r.p,"UserForm_thumb__Cuo4y"),ue="UserForm_avatar__thumb__lEVRn",de="UserForm_user__oLWif",pe="UserForm_user__uploadThumb__bKblo",me="UserForm_user__uploadLabel__2F-LK",he="UserForm_user__uploadSubmit__-ty1v",fe="UserForm_user__uploadInput__VtnIB",ge="UserForm_user__uploadText__+7x2k",_e="UserForm_user__form__BtXgM",ve="UserForm_user__meta__CxuzD",xe="UserForm_user__avatar__4LEkp",ye="UserForm_user__label__TlD5D",be="UserForm_user__text__QNJ-p",je="UserForm_user__input__xrJt4",we="UserForm_user__button__L-1eC",Oe=function(e){var t=e.avatar,r=e.watch,n=e.register,a=(0,s.useState)(!1),o=(0,i.Z)(a,2),u=o[0],d=o[1],p=(0,l.v9)(c),m=(0,l.I0)(),h=r("avatar");(0,s.useEffect)((function(){p&&d(!1)}),[p]),(0,s.useEffect)((function(){h&&h[0]&&(d(!0),m((0,K.s)()))}),[h]);return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:ue,children:[(0,x.jsx)("div",{className:ce,children:(0,x.jsx)("img",{className:xe,src:h&&h[0]?URL.createObjectURL(h[0]):function(e){return e||"https://icdn.kiwico.com/site/reviews/avatar-sailor.png"}(t),alt:"default avatar",width:233,height:233})}),(0,x.jsx)("div",{className:pe,children:h&&h[0]&&u?(0,x.jsxs)("button",{type:"submit",className:he,children:[(0,x.jsx)(oe,{fill:"#F59256",width:23,height:23}),(0,x.jsx)("p",{className:ge,children:"submit"})]}):(0,x.jsxs)("div",{children:[(0,x.jsxs)("label",{htmlFor:"avatar",className:me,children:[(0,x.jsx)(te,{fill:"#F59256",width:18,height:18}),(0,x.jsx)("p",{className:ge,children:"edit Photo"})]}),(0,x.jsx)("input",(0,H.Z)((0,H.Z)({type:"file",name:"avatar"},n("avatar")),{},{id:"avatar",className:fe}))]})})]})})},ke=["title","titleId"];function Ee(){return Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ee.apply(this,arguments)}function Ne(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function Pe(e,t){var r=e.title,n=e.titleId,a=Ne(e,ke);return s.createElement("svg",Ee({xmlns:"http://www.w3.org/2000/svg",width:1339,height:1024,viewBox:"0 0 1339 1024",ref:t,"aria-labelledby":n},a),r?s.createElement("title",{id:n},r):null,se||(se=s.createElement("g",{id:"icomoon-ignore"})),le||(le=s.createElement("path",{d:"M1302.394 32.578c47.262 44.994 49.097 119.782 4.104 167.044l-749.882 787.695c-22.302 23.426-53.232 36.683-85.576 36.683s-63.274-13.257-85.576-36.683l-352.886-370.681c-44.994-47.262-43.155-122.051 4.108-167.044s122.051-43.155 167.045 4.108l267.31 280.788 664.308-697.802c44.993-47.262 119.784-49.101 167.046-4.108z"})))}var Me,Le,Ie=s.forwardRef(Pe),Fe=(r.p,["title","titleId"]);function Ue(){return Ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ue.apply(this,arguments)}function Ce(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function Se(e,t){var r=e.title,n=e.titleId,a=Ce(e,Fe);return s.createElement("svg",Ue({xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",ref:t,"aria-labelledby":n},a),r?s.createElement("title",{id:n},r):null,Me||(Me=s.createElement("g",{id:"icomoon-ignore"})),Le||(Le=s.createElement("path",{d:"M101.395 972.74c-6.964-0.012-13.849-1.47-20.219-4.289-6.369-2.813-12.082-6.927-16.776-12.071-4.779-5.102-8.425-11.156-10.7-17.763s-3.127-13.625-2.501-20.588l12.298-135.228 568.118-567.918 177.544 177.494-567.967 567.865-135.228 12.3c-1.519 0.139-3.043 0.205-4.568 0.199zM844.601 356.887l-177.495-177.494 106.466-106.466c4.662-4.667 10.198-8.369 16.294-10.895 6.090-2.526 12.625-3.826 19.221-3.826s13.125 1.3 19.221 3.826c6.096 2.526 11.631 6.228 16.294 10.895l106.466 106.466c4.662 4.662 8.367 10.198 10.891 16.292 2.53 6.094 3.831 12.625 3.831 19.222s-1.301 13.128-3.831 19.222c-2.524 6.094-6.228 11.63-10.891 16.292l-106.466 106.466z"})))}var Ae=s.forwardRef(Se),Be=(r.p,function(e){var t=e.data,r=e.type,n=void 0===r?"text":r,a=e.register,o=e.field,d=e.text,p=(0,l.v9)(c),m=(0,l.v9)(u),h=(0,l.I0)(),f=(0,s.useState)(!1),g=(0,i.Z)(f,2),_=g[0],v=g[1];(0,s.useEffect)((function(){p&&v(!1)}),[p]);return(0,x.jsxs)("label",{htmlFor:t,className:ye,children:[(0,x.jsxs)("p",{className:be,children:[d,":"]}),_?(0,x.jsx)("input",(0,H.Z)((0,H.Z)({},a(o)),{},{className:je,type:n,id:t})):(0,x.jsx)("p",{children:t}),_?(0,x.jsx)("button",{className:we,type:"submit",children:(0,x.jsx)(Ie,{fill:"currentColor",width:"20px",height:"20px"})}):(0,x.jsx)("div",{className:we,onClick:function(){m||(h((0,K.s)()),v(!0))},children:(0,x.jsx)(Ae,{fill:"currentColor",width:"20px",height:"20px"})})]})}),qe=r(3060),Te=function(e){var t=e.userInfo,r=e.userAvatar,n=(0,S.cI)({}),a=n.register,i=n.handleSubmit,s=n.watch,c=(0,l.I0)(),u=function(e){if(e){var t=(0,qe.k)(e);c((0,o.Al)(t))}};return(0,x.jsxs)("div",{className:de,children:[(0,x.jsxs)("div",{className:_e,children:[(0,x.jsx)("form",{onSubmit:i(u),children:(0,x.jsx)(Oe,{watch:s,avatar:r,register:a})}),(0,x.jsxs)("div",{className:ve,children:[(0,x.jsx)("form",{onSubmit:i(u),children:(0,x.jsx)(Be,{data:t.name,text:"Name",field:"name",register:a})}),(0,x.jsx)("form",{onSubmit:i(u),children:(0,x.jsx)(Be,{data:t.email,text:"Email",type:"email",field:"email",register:a})}),(0,x.jsx)("form",{onSubmit:i(u),children:(0,x.jsx)(Be,{data:t.birthday,text:"Birthday",field:"birthday",register:a})}),(0,x.jsx)("form",{onSubmit:i(u),children:(0,x.jsx)(Be,{data:t.phone,text:"Phone",field:"phone",register:a})}),(0,x.jsx)("form",{onSubmit:i(u),children:(0,x.jsx)(Be,{data:t.city,text:"City",field:"city",register:a})})]})]}),(0,x.jsx)(Q,{})]})},Ze=r(2241),ze="Buttons_wrapper__qijK+",Re="Buttons_submitBtn__ubGsy",De=function(e){var t=e.onTogglePage,r=e.isFirstPage,n=e.onSubmit,a=e.onCloseModal;return(0,x.jsxs)("div",{className:ze,children:[r&&(0,x.jsx)(Ze.z,{text:"cancel",colorType:"white",type:"button",onClickFunc:a}),(0,x.jsx)(Ze.z,{text:r?"next":"back",colorType:"orange",type:"button",onClickFunc:t}),!r&&(0,x.jsx)("button",{type:"submit",onSubmit:n,className:Re,children:"Done"})]})},Ve=r(2737),We="AddPetInput_label__Peypu",$e="AddPetInput_label__text__0Utcs",Qe="AddPetInput_label__textarea__IIj66",He="AddPetInput_input__pDpb2",Ke="AddPetInput_textarea__1NOPV",Ge=function(e){var t,r=e.register,n=e.errors,a=e.settings,i=e.textarea,s=a.label,l=a.name,o=a.type,c=a.placeholder,u=a.required,d=a.requiredMessage,p=a.pattern,m=void 0===p?null:p,h=a.patternMessage,f=void 0===h?null:h,g=a.maxLength,_=void 0===g?null:g,v=a.minLength,y=void 0===v?null:v;return(0,x.jsxs)("label",{className:We,children:[(0,x.jsx)("p",{className:i?Qe:$e,children:s}),i?(0,x.jsx)("textarea",(0,H.Z)((0,H.Z)({type:o},r(l,{required:{value:u,message:d},pattern:m&&{value:m,message:f},maxLength:{value:_,message:f},minLength:{value:y,message:f}})),{},{placeholder:c,className:Ke})):(0,x.jsx)("input",(0,H.Z)((0,H.Z)({type:o},r(l,{required:{value:u,message:d},pattern:m&&{value:m,message:f},maxLength:{value:_,message:f},minLength:{value:y,message:f}})),{},{placeholder:c,className:He})),n[l]&&(0,x.jsx)(Ve.p,{children:null===(t=n[l])||void 0===t?void 0:t.message})]})},Xe=r(6774),Je=function(e){var t=e.register,r=e.errors;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Ge,{register:t,errors:r,settings:Xe.k6}),(0,x.jsx)(Ge,{register:t,errors:r,settings:Xe.AC}),(0,x.jsx)(Ge,{register:t,errors:r,settings:Xe.nL})]})},Ye=r(4117),et="AddPetFormSecondPage_petUploadLabel__115uv",tt="AddPetFormSecondPage_petUploadLabel__text__M0ZY6",rt="AddPetFormSecondPage_crossWrapper__Oo2fs",nt="AddPetFormSecondPage_uploadThumb__7DLkc",at="AddPetFormSecondPage_uploadInput__MkBk0",it="AddPetFormSecondPage_image__EtDR8",st=function(e){var t=e.register,r=e.watch,n=e.errors,a=e.uploadError,i=r("petUpload");return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:nt,children:(0,x.jsxs)("label",{htmlFor:"petUpload",className:et,children:[(0,x.jsx)("p",{className:tt,children:"Add photo and some comments"}),(0,x.jsx)("div",{className:rt,children:i?(0,x.jsx)("img",{className:it,src:URL.createObjectURL(i[0]),alt:"poster"}):(0,x.jsx)(Ye.r,{width:48,height:48,fill:"gba(17, 17, 17, 0.6)"})}),(0,x.jsx)("input",(0,H.Z)((0,H.Z)({type:"file"},t("petUpload")),{},{id:"petUpload",placeholder:"Type name pet",className:at})),a&&!i[0]&&(0,x.jsx)(Ve.p,{children:"Add an image"})]})}),(0,x.jsx)(Ge,{register:t,textarea:!0,errors:n,settings:Xe.tQ})]})},lt="AddPetForm_form__ixt61",ot=function(e){var t=e.onCloseModal,r=(0,s.useState)(!1),n=(0,i.Z)(r,2),a=n[0],c=n[1],u=(0,S.cI)({mode:"onBlur",defaultValues:{petBirth:"01.01.2020",petUpload:""}}),d=u.register,p=u.handleSubmit,m=u.watch,h=u.formState,f=h.errors,g=h.isValid,_=(0,l.I0)(),v=(0,s.useState)(!0),y=(0,i.Z)(v,2),b=y[0],j=y[1],w=function(e){var r=e.petName,n=e.petBirth,a=e.petBreed,i=e.petUpload,s=e.petComment,l=new FormData;l.append("name",r),l.append("birthday",n),l.append("breed",a),l.append("comments",s),i?(c(!1),l.append("avatar",i[0]),_((0,o.Ab)(l)),t()):c(!0)};return(0,x.jsxs)("form",{onSubmit:p(w),autoComplete:"off",className:lt,children:[b?(0,x.jsx)(Je,{errors:f,register:d}):(0,x.jsx)(st,{errors:f,uploadError:a,watch:m,register:d}),(0,x.jsx)(De,{onTogglePage:function(){!g&&b||j((function(e){return!e}))},onSubmit:w,onCloseModal:t,isFirstPage:b})]})},ct="UserPage_general__XA5Oa",ut="UserPage_desktop__7aHly",dt="UserPage_tablet__6fJXK",pt="UserPage_titleUser__FfJ0l",mt="UserPage_titleUpload__cPlCE",ht="UserPage_title__+I+vh",ft=function(){var e=(0,s.useState)(!1),t=(0,i.Z)(e,2),r=t[0],n=t[1],a=(0,l.I0)();(0,s.useEffect)((function(){a((0,o.is)())}),[a]);var c=function(){n(!1)};(0,s.useEffect)((function(){var e=function(e){"Escape"===e.code&&c()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[]);var u=(0,l.v9)(d),h=(0,l.v9)(p),f=(0,l.v9)(m);return(0,x.jsxs)("div",{className:ct,children:[(0,x.jsxs)("div",{children:[(0,x.jsx)(U,{title:"My information:",className:pt}),(0,x.jsx)(Te,{userInfo:u,userAvatar:h})]}),(0,x.jsxs)("div",{className:ut,children:[(0,x.jsxs)("div",{className:dt,children:[(0,x.jsx)(U,{title:"My pets:",className:ht}),(0,x.jsxs)(C.u,{btnType:null!==f&&void 0!==f&&f.length?"circle-info":"empty",isShowModal:r,setIsShowModal:n,handleBackdropClick:function(e){e.currentTarget===e.target&&c()},children:[(0,x.jsx)(U,{title:"Add Pet",className:mt}),(0,x.jsx)(ot,{onCloseModal:c})]})]}),(0,x.jsx)(F,{userPets:f,onDeletePet:function(e){console.log(e.currentTarget.id);var t=e.currentTarget.id;a((0,o.y1)(t)),console.log("success",t)}})]})]})}},3060:function(e,t,r){r.d(t,{k:function(){return n}});var n=function(e){for(var t=new FormData,r=Object.keys(e),n=Object.values(e),a=0;a<r.length;a++)"avatar"!==r[a]?n[a].trim()&&t.append(r[a],n[a]):void 0!==n[a][0]&&t.append(r[a],n[a][0]);return t}},9479:function(e,t,r){e.exports=r.p+"static/media/anonymousCat.6457419bd698bcac29a6.png"}}]);
//# sourceMappingURL=73.622b6446.chunk.js.map