"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[454],{6454:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var a=n(2791),r=n(9434),s=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",n=crypto.getRandomValues(new Uint8Array(t));t--;){var a=63&n[t];e+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return e},c=n(1429),i=n(208),o=n(9439),l="ContactForm_wrapper__-Umw-",u="ContactForm_label__-cVXI",m="ContactForm_input__Bl93P",d="ContactForm_btn__wll+u",p=n(184),f=function(){var t=(0,r.I0)(),e=(0,a.useState)(""),n=(0,o.Z)(e,2),s=n[0],c=n[1],f=(0,a.useState)(""),_=(0,o.Z)(f,2),h=_[0],v=_[1],b=function(t){"name"===t.target.name?c(t.target.value):"number"===t.target.name&&v(t.target.value)};return(0,p.jsxs)("form",{className:l,onSubmit:function(e){e.preventDefault(),t((0,i.uK)({name:s,number:h})),c(""),v("")},children:[(0,p.jsx)("label",{className:u,htmlFor:"nameInput",children:"Name"}),(0,p.jsx)("input",{className:m,type:"text",id:"nameInput",name:"name",value:s,onChange:b,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,p.jsx)("label",{className:u,htmlFor:"numberInput",children:"Number"}),(0,p.jsx)("input",{className:m,type:"tel",id:"numberInput",name:"number",value:h,onChange:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,p.jsx)("button",{className:d,type:"submit",children:"Add contact"})]})},_={list:"ContactsList_list__mmE3Y",items:"ContactsList_items__TY5P-",contetnt:"ContactsList_contetnt__BDngG",btn:"ContactsList_btn__GccuV"},h=function(t){var e=t.contacts,n=(0,r.I0)();return(0,p.jsx)("ul",{className:_.list,children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return(0,p.jsxs)("li",{className:_.items,children:[(0,p.jsxs)("p",{className:_.content,children:[a,": ",r]}),(0,p.jsx)("button",{className:_.btn,type:"button",onClick:function(){return function(t){n((0,i.GK)(t))}(e)},children:"Delete"})]},e)}))})},v={label:"Filter_label__vEd1E",input:"Filter_input__N7T3z",wraper:"Filter_wraper__AZn8H"},b=function(t){t.filteredContacts;var e=(0,r.I0)(),n=(0,r.v9)((function(t){return t.filter}));return(0,p.jsxs)("div",{className:v.wrapper,children:[(0,p.jsx)("label",{className:v.label,children:"Search contact"}),(0,p.jsx)("input",{className:v.input,type:"text",name:"filter",value:n,onChange:function(t){var n=t.target.value;e((0,c.T)(n))}})]})},C=function(t){return t.contacts.isLoading},x=function(t){return t.contacts.error},g=function(){var t=(0,r.I0)(),e=(0,r.v9)(C),n=(0,r.v9)(x),o=(0,r.v9)((function(t){return t.contacts.items})),l=(0,r.v9)((function(t){return t.filter}));(0,a.useEffect)((function(){t((0,i.K2)())}),[t]);var u=o.filter((function(t){var e;return null===(e=t.name)||void 0===e?void 0:e.toLowerCase().includes((null===l||void 0===l?void 0:l.toLowerCase())||"")}));return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(f,{onFormSubmit:function(e,n){if(o.find((function(t){return e.toLowerCase()===t.name.toLowerCase()})))alert("".concat(e," is already in contacts."));else{var a={id:s(),name:e,number:n};t((0,i.uK)(a))}}}),(0,p.jsx)(b,{handleFilterChange:function(e){t((0,c.T)(e.target.value))}}),e&&!n&&(0,p.jsx)("b",{children:"Request in progress..."}),(0,p.jsx)("h2",{children:"Contacts"}),(0,p.jsx)(h,{contacts:u,onDelete:function(e){t((0,i.GK)(e))}})]})}}}]);
//# sourceMappingURL=454.1e6775e5.chunk.js.map