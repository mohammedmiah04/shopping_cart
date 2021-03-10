(this.webpackJsonpshopping_cart=this.webpackJsonpshopping_cart||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),o=(a(10),a(1)),m=a(4),u=function(e,t){if("CLEAR_CART"===t.type)return Object(o.a)(Object(o.a)({},e),{},{cart:[]});if("REMOVE"===t.type)return Object(o.a)(Object(o.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload}))});if("INCREASE"===t.type){var a=e.cart.map((function(e){return e.id===t.payload?Object(o.a)(Object(o.a)({},e),{},{amount:e.amount+1}):e}));return Object(o.a)(Object(o.a)({},e),{},{cart:a})}if("DECREASE"===t.type){var n=e.cart.map((function(e){return e.id===t.payload?Object(o.a)(Object(o.a)({},e),{},{amount:e.amount-1}):e})).filter((function(e){return 0!==e.amount}));return Object(o.a)(Object(o.a)({},e),{},{cart:n})}if("GET_TOTALS"===t.type){var r=e.cart.reduce((function(e,t){var a=t.price,n=t.amount,r=a*n;return e.total+=r,e.amount+=n,e}),{total:0,amount:0}),c=r.total,l=r.amount;return c=parseFloat(c.toFixed(2)),Object(o.a)(Object(o.a)({},e),{},{total:c,amount:l})}return e},i=r.a.createContext(),s={loading:!1,cart:[{id:1,title:"Samsung Galaxy S7",price:599.99,img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png",amount:1},{id:2,title:"google pixel ",price:499.99,img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png",amount:1},{id:3,title:"Xiaomi Redmi Note 2",price:699.99,img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368224/phone-3_h2s6fo.png",amount:1}],total:0},E=function(e){var t=e.children,a=Object(n.useReducer)(u,s),c=Object(m.a)(a,2),l=c[0],E=c[1];return Object(n.useEffect)((function(){E({type:"GET_TOTALS"})}),[l.cart]),r.a.createElement(i.Provider,{value:Object(o.a)(Object(o.a)({},l),{},{clearCart:function(){E({type:"CLEAR_CART"})},remove:function(e){E({type:"REMOVE",payload:e})},increase:function(e){E({type:"INCREASE",payload:e})},decrease:function(e){E({type:"DECREASE",payload:e})}})},t)},p=function(){return Object(n.useContext)(i)},d=function(){var e=p().amount;return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-center"},r.a.createElement("h3",null,"useReducer"),r.a.createElement("div",{className:"nav-container"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z"})),r.a.createElement("div",{className:"amount-container"},r.a.createElement("p",{className:"total-amount"},e)))))},v=function(e){var t=e.id,a=e.img,n=e.title,c=e.price,l=e.amount,o=p(),m=o.remove,u=o.increase,i=o.decrease;return r.a.createElement("article",{className:"cart-item"},r.a.createElement("img",{src:a,alt:n}),r.a.createElement("div",null,r.a.createElement("h4",null,n),r.a.createElement("h4",{className:"item-price"},"\xa3",c),r.a.createElement("button",{className:"remove-btn",onClick:function(){return m(t)}},"remove")),r.a.createElement("div",null,r.a.createElement("button",{className:"amount-btn",onClick:function(){return u(t)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"}))),r.a.createElement("p",{className:"amount"},l),r.a.createElement("button",{className:"amount-btn",onClick:function(){return i(t)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))))},f=function(){var e=p(),t=e.cart,a=e.total,n=e.clearCart;return 0===t.length?r.a.createElement("section",{className:"cart"},r.a.createElement("header",null,r.a.createElement("h2",null,"your bag"),r.a.createElement("h4",{className:"empty-cart"},"is currently empty"))):r.a.createElement("section",{className:"cart"},r.a.createElement("header",null,r.a.createElement("h2",null,"your bag")),r.a.createElement("div",null,t.map((function(e){return r.a.createElement(v,Object.assign({key:e.id},e))}))),r.a.createElement("footer",null,r.a.createElement("hr",null),r.a.createElement("div",{className:"cart-total"},r.a.createElement("h4",null,"total ",r.a.createElement("span",null,"\xa3",a))),r.a.createElement("button",{className:"btn clear-btn",onClick:n},"clear cart")))};var h=function(){return p().loading?r.a.createElement("div",{className:"loading"},r.a.createElement("h1",null,"Loading...")):r.a.createElement("main",null,r.a.createElement(d,null),r.a.createElement(f,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null,r.a.createElement(h,null))),document.getElementById("root"))},5:function(e,t,a){e.exports=a(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.b00086dc.chunk.js.map