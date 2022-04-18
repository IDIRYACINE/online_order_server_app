(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var n,c,r=a(0),o=a.n(r),l=a(29),i=a.n(l),u=(a(94),a(95),a(7)),s=a(53),m=function(){return Object(s.b)()},d=s.c,p=a(1),f=a(54),g=a(27),E=a(6),y=a(12),h=a.n(y),b=a(28),v=a(22),C=a.n(v),I=a(87),N=a(42),O=Object(N.b)({name:"orders",initialState:{orders:{}},reducers:{update:function(e,t){},remove:function(e,t){delete e.orders[t.payload]},add:function(e,t){e.orders[t.payload.id]=t.payload},registerExtras:function(e,t){var a=t.payload.id,n=e.orders[a];e.orders[a]=Object(p.a)(Object(p.a)({},n),t.payload)},loadOrders:function(e,t){e.orders=t.payload}}}),S=O.actions,j=(S.update,S.remove),P=S.add,x=S.loadOrders,k=S.registerExtras,z=O.reducer,w=Object(N.b)({name:"categories",initialState:{categories:{}},reducers:{createCategory:function(e,t){e.categories[t.payload.category.Id]=t.payload.category},removeCategory:function(e,t){delete e.categories[t.payload.category.Id]},updateCategory:function(e,t){var a=t.payload.updatedValues,n=t.payload.oldCategory.Id;e.categories[n]=Object(p.a)(Object(p.a)({},e.categories[n]),a)},loadCategory:function(e,t){var a={};t.payload.categories.forEach(function(e){a[e.Id]=e}),e.categories=Object(p.a)(Object(p.a)({},e.categories),a)}}}),F=w.actions,A=(F.createCategory,F.updateCategory),L=F.removeCategory,U=F.loadCategory,D=w.reducer,B=Object(N.b)({name:"products",initialState:{},reducers:{updateProduct:function(e,t){var a=e[t.payload.categoryKey],n=t.payload.updatedValues,c=t.payload.oldProduct.Index,r=a[c];a[c]=Object(p.a)(Object(p.a)({},r),n)},removeProduct:function(e,t){e[t.payload.categoryKey].splice(t.payload.product.Index)},addProduct:function(e,t){var a=e[t.payload.categoryKey];t.payload.product.Index=a.length,a.push(t.payload.product)},loadProduct:function(e,t){var a=t.payload.categoryKey,n=e[a].length;t.payload.products.forEach(function(e){e.Index=n,e.Price=JSON.parse(e.Price),e.Size=JSON.parse(e.Size),n++}),e[a]=e[a].concat(t.payload.products)},registerCategory:function(e,t){t.payload.categories.forEach(function(t){e[t.Id]=[]})}}}),T=B.actions,V=T.addProduct,X=T.updateProduct,K=T.removeProduct,W=T.loadProduct,G=T.registerCategory,q=B.reducer,H=Object(N.a)({reducer:{product:q,category:D,order:z}}),J="https://orsnodejs.herokuapp.com/",R=J+"FetchCategory",M=J+"UpdateCategory",Q=J+"CreateCategory",Y=J+"DeleteCategory",Z=J+"FetchProduct",_=J+"UpdateProduct",$=J+"DeleteProduct",ee=J+"CreateProduct",te=J+"GetCustomerExtras",ae=J+"SynchroniseDatabase",ne="idir",ce=!1;var re={loginWithUsernameAndPassword:function(e,t){(n=Object(I.a)(J,{autoConnect:!0,reconnection:!1,extraHeaders:{"my-custom-header":"abcd"},query:{username:e,password:t}})).on("connect",function(){ce=!0,c()}),n.on("newOrder",function(e){null!==e&&H.dispatch(P(e))}),n.on("onConnectOrders",function(e){H.dispatch(x(e))})},setOnConnectAction:function(e){c=e},isLoggedIn:function(){return ce}};function oe(){return(oe=Object(b.a)(h.a.mark(function e(t,a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:C.a.get(te,{params:{id:t},headers:{"X-Auth-key":ne}}).then(a.onSuccess).catch(a.onFail);case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}var le;a(122);function ie(e){var t=d(function(t){return t.order.orders[e.index]}),a=Object(E.g)(),n=m();function c(){t.loaded?a("/OrderDetails/".concat(t.id),{replace:!0}):function(e,t){oe.apply(this,arguments)}(t.id,{onSuccess:function(e){n(k(Object(p.a)(Object(p.a)({},e.data),{},{loaded:!0}))),a("/OrderDetails/".concat(t.id),{replace:!0})},onFail:function(e){console.log(e)}})}return o.a.createElement(f.a,{className:"py-2 px-2"},o.a.createElement(f.a.Header,null,"Order#",t.id),o.a.createElement(f.a.Body,null,o.a.createElement(f.a.Text,null,"Customer Name : ",t.FullName),o.a.createElement(f.a.Text,null,"PhoneNumber : ",t.PhoneNumber),o.a.createElement(g.a,{variant:"primary",onClick:function(){c()}},"Full Details"),o.a.createElement(f.a.Footer,{className:"text-muted"},"Sent At : 12:35 ")))}!function(e){e[e.Pending=0]="Pending"}(le||(le={}));function ue(){var e=d(function(e){return e.order.orders}),t=m();return o.a.createElement("div",{className:"OrdersList"},o.a.createElement("p",null,"OrdersList"),o.a.createElement("button",{onClick:function(){!function(){0;var e={id:"f21",State:le.Pending,items:[],PhoneNumber:"052222",Email:"idir@gmail",BanStatus:"Normal",FullName:"idir",Latitude:2,Longitude:3,Address:"bba",loaded:!1};t(P(e))}()}},"Add"),o.a.createElement("button",{onClick:function(){t(j("f21"))}},"Remove"),Object.entries(e).map(function(e){var t=Object(u.a)(e,2),a=t[0],n=t[1];return o.a.createElement(ie,{key:"#"+n.id,index:a})}))}var se=a(14),me=a(34);function de(){return(de=Object(b.a)(h.a.mark(function e(t,a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:C.a.get(R,{params:Object(p.a)({},t),headers:{"X-Auth-key":ne}}).then(a.onSuccess).catch(a.onFail);case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function pe(){return(pe=Object(b.a)(h.a.mark(function e(t,a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:C.a.post(M,{options:t},{headers:{"X-Auth-key":ne}}).then(a.onSuccess).catch(a.onFail);case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function fe(){return(fe=Object(b.a)(h.a.mark(function e(t,a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:C.a.post(Q,{options:t}).then(a.onSuccess).catch(a.onFail);case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function ge(){return(ge=Object(b.a)(h.a.mark(function e(t,a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:C.a.get(Y,{params:Object(p.a)({},t),headers:{"X-Auth-key":ne}}).then(a.onSuccess).catch(a.onFail);case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Ee(e){var t=d(function(t){return t.category.categories[e.id]}),a=Object(E.g)(),n=m();function c(){!function(e,t){ge.apply(this,arguments)}({categoryId:t.Id},{onSuccess:function(){n(L({category:t}))},onFail:function(e){console.log(e)}})}return o.a.createElement(f.a,{className:"py-5 px-5"},o.a.createElement(f.a.Img,{variant:"top",src:t.ImageUrl}),o.a.createElement(f.a.Text,null,t.Name),o.a.createElement(f.a.Text,null,t.ProductCount),o.a.createElement(me.a,{className:"g-3"},o.a.createElement(se.a,{className:"col-sm"},o.a.createElement(g.a,{variant:"primary",onClick:function(){c()}},"Delete")),o.a.createElement(se.a,{className:"col-sm"},o.a.createElement(g.a,{variant:"primary",onClick:function(){a("/EditCategory/".concat(e.id),{replace:!0})}},"Edit")),o.a.createElement(se.a,{className:"col-sm"},o.a.createElement(g.a,{variant:"primary",onClick:function(){a("/Category/".concat(e.id),{replace:!0})}},"Explore"))))}function ye(){var e=d(function(e){return e.category.categories}),t=m(),a=Object(E.g)();function n(){!function(e,t){de.apply(this,arguments)}({startIndex:"0",count:"2"},{onSuccess:function(e){t(U({categories:e.data})),t(G({categories:e.data}))},onFail:function(e){console.log("failed")}})}return o.a.createElement("div",{className:"Catalogue"},o.a.createElement("button",{className:"CreateCategoryButton",onClick:function(){a("/CreateCategory",{replace:!0})}},"New Category"),o.a.createElement("button",{className:"CreateCategoryButton",onClick:function(){n()}},"Load Categories"),Object.entries(e).map(function(e){var t=Object(u.a)(e,2),a=t[0],n=t[1];return o.a.createElement(Ee,{key:a,data:n,id:a})}))}var he=a(62),be=a(13);function ve(e){var t="",a="";return o.a.createElement(be.a,{className:"px-5 py-5"},o.a.createElement(be.a.Group,null,o.a.createElement(me.a,{className:"g-3"},o.a.createElement(se.a,{className:"col-sm-2"},o.a.createElement(be.a.Label,null,"Email")),o.a.createElement(se.a,{className:"col-sm-8"},o.a.createElement(be.a.Control,{placeholder:"example@something.com",onChange:function(e){return a=e.target.value,void(t=a);var a}})))),o.a.createElement(be.a.Group,null,o.a.createElement(me.a,{className:"g-3"},o.a.createElement(se.a,{className:"col-sm-2"},o.a.createElement(be.a.Label,null,"Password")),o.a.createElement(se.a,{className:"col-sm-8"},o.a.createElement(be.a.Control,{placeholder:"Password",onChange:function(e){return t=e.target.value,void(a=t);var t}})))),o.a.createElement(g.a,{className:"py-3",onClick:function(){e.login(t,a)}},"Login"))}function Ce(){var e=Object(E.g)();function t(){e("/Orders",{replace:!0})}return o.a.createElement(he.a,null,o.a.createElement(ve,{login:function(e,a){re.setOnConnectAction(t),re.loginWithUsernameAndPassword(e,a)}}))}a(126);var Ie=a(45),Ne="Category",Oe=0,Se=[],je={Category:{Name:{Set:!1,Index:-1},ImageUrl:{Set:!1,Index:-1}},Product:{Name:{Set:!1,Index:-1},ImageUrl:{Set:!1,Index:-1},Description:{Set:!1,Index:-1},Price:{Set:!1,Index:-1},Size:{Set:!1,Index:-1}}};var Pe={cacheAttribute:function(e,t){var a=je[Ne][e];!1===a.Set&&(a.Index=Oe,Oe++,a.Set=!0),function(e,t,a){Se[a]={name:e,value:t}}(e,t,a.Index)},getCachedValues:function(){return Object(Ie.a)(Se)},setTargetAttributes:function(e){Ne=e},resetCache:function(){Se=[],Oe=0,je={Category:{Name:{Set:!1,Index:-1},ImageUrl:{Set:!1,Index:-1}},Product:{Name:{Set:!1,Index:-1},ImageUrl:{Set:!1,Index:-1},Description:{Set:!1,Index:-1},Price:{Set:!1,Index:-1},Size:{Set:!1,Index:-1}}}}};function xe(){var e=Object(E.h)(),t=d(function(t){return t.category.categories[e.categoryId]}),a=Object(E.g)(),n=Object(r.useState)(t.Name),c=Object(u.a)(n,2),l=c[0],i=c[1],s=Object(r.useState)(t.ImageUrl),p=Object(u.a)(s,2),f=p[0],g=p[1],y=m();function h(){!function(e,t){pe.apply(this,arguments)}({categoryId:t.Id,updatedValues:Pe.getCachedValues()},{onSuccess:function(){y(A({oldCategory:t,updatedValues:Pe.getCachedValues()})),Pe.resetCache(),a("/Catalogue",{replace:!0})},onFail:function(){Pe.resetCache(),console.log("failed")}})}return o.a.createElement("div",{className:"CategoryEdit"},o.a.createElement("div",{className:"Image"},o.a.createElement("img",{src:f,id:"CategoryImage"}),o.a.createElement("input",{id:"CategoryImageUrl",value:f,onChange:function(e){var t;t=e.target.value,Pe.cacheAttribute("ImageUrl",t),g(t)}})),o.a.createElement("div",{className:"CategoryInfos"},o.a.createElement("p",{id:"CategoryNameLabel"},"Category Name"),o.a.createElement("input",{id:"CategoryName",value:l,onChange:function(e){var t;t=e.target.value,Pe.cacheAttribute("Name",t),i(t)}}),o.a.createElement("p",{id:"CategoryDescriptionLabel"},"Description"),o.a.createElement("input",{id:"CategoryDescription"})),o.a.createElement("div",{className:"Actions"},o.a.createElement("button",{id:"SaveButton",onClick:function(){h()}},"Save"),o.a.createElement("button",{id:"CancelButton",onClick:function(){}},"Cancel")))}var ke=a(84),ze=a(83);function we(e){return o.a.createElement(be.a,{className:"px-5 py-5"},o.a.createElement(be.a.Group,null,o.a.createElement(me.a,{className:"g-3"},o.a.createElement(se.a,{className:"col-sm-5"},o.a.createElement(ze.a,{src:e.ImageUrl})),o.a.createElement(se.a,{className:"col-sm-5"},o.a.createElement(be.a.Control,{type:"Url",placeholder:"Image Url",value:e.ImageUrl,onChange:function(t){e.updateImageUrl(t.target.value)}})))),o.a.createElement(be.a.Group,null,o.a.createElement(me.a,{className:"g-3"},o.a.createElement(se.a,{className:"col-sm-2"},o.a.createElement(be.a.Label,null,"Name")),o.a.createElement(se.a,{className:"col-sm-8"},o.a.createElement(be.a.Control,{placeholder:"Name",value:e.name,onChange:function(t){return e.updateName(t.target.value)}})))),o.a.createElement(be.a.Group,null,o.a.createElement(me.a,{className:"g-3"},o.a.createElement(se.a,{className:"col-sm-2"},o.a.createElement(be.a.Label,null,"Description")),o.a.createElement(se.a,{className:"col-sm-8"},o.a.createElement(be.a.Control,{placeholder:"Description",value:e.description,onChange:function(t){return e.updateDescription(t.target.value)}})))),o.a.createElement(ke.a,{className:"py-3"},o.a.createElement(g.a,{onClick:function(){e.save()}},"Save")))}a(127);function Fe(){var e=Object(E.g)(),t=Object(r.useState)("https://static.remove.bg/remove-bg-web/a6eefcd21dff1bbc2448264c32f7b48d7380cb17/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"),a=Object(u.a)(t,2),n=a[0],c=a[1],l="idir";return o.a.createElement(he.a,{className:"bg-white"},o.a.createElement(we,{updateImageUrl:c,updateName:function(e){l=e},updateDescription:function(e){e},save:function(){!function(e,t){fe.apply(this,arguments)}({category:{Id:l,Name:l,ImageUrl:n,Index:-1,ProductCount:0}},{onSuccess:function(){e("/Catalogue",{replace:!0})},onFail:function(){}})},ImageUrl:n}),o.a.createElement(g.a,{id:"CancelButton",onClick:function(){e("/Catalogue",{replace:!0})}},"Cancel"))}function Ae(){return(Ae=Object(b.a)(h.a.mark(function e(t,a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:C.a.get(Z,{params:Object(p.a)({},t),headers:{"X-Auth-key":ne}}).then(a.onSuccess).catch(a.onFail);case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Le(){return(Le=Object(b.a)(h.a.mark(function e(t,a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:C.a.post(_,{options:JSON.stringify(t)},{headers:{"Content-Type":"application/json","X-Auth-key":ne}}).then(a.onSuccess).catch(a.onFail);case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Ue(){return(Ue=Object(b.a)(h.a.mark(function e(t,a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:C.a.post(ee,{options:t},{headers:{"X-Auth-key":ne}}).then(a.onSuccess).catch(a.onFail);case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function De(){return(De=Object(b.a)(h.a.mark(function e(t,a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:C.a.get($,{params:Object(p.a)({},t),headers:{"X-Auth-key":ne}}).then(a.onSuccess).catch(a.onFail);case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Be(e){var t=d(function(t){return t.product[e.categoryId][e.index]}),a=m(),n=Object(E.g)();function c(){!function(e,t){De.apply(this,arguments)}({productId:t.Id,categoryId:e.categoryId},{onSuccess:function(){a(K({product:t,categoryKey:e.categoryId}))},onFail:function(){console.log("fail")}})}return o.a.createElement(f.a,null,o.a.createElement(f.a.Header,null,t.Name),o.a.createElement(f.a.Body,null,o.a.createElement(f.a.Img,{src:t.ImageUrl}),o.a.createElement(f.a.Text,null,"Default Size : ",t.Size[0]),o.a.createElement(f.a.Text,null,"Price : ",t.Price[0]),o.a.createElement(g.a,{onClick:function(){n("/EditProduct/".concat(e.categoryId,"/").concat(e.index),{replace:!0})}},"Edit"),o.a.createElement(g.a,{onClick:function(){c()}},"Delete")))}function Te(){var e=Object(E.h)(),t=d(function(t){return t.product[e.categoryId]}),a=Object(E.g)(),n=m();function c(){!function(e,t){Ae.apply(this,arguments)}({startIndex:"0",count:"2",categoryId:e.categoryId},{onSuccess:function(t){n(W({categoryKey:e.categoryId,products:t.data}))},onFail:function(e){console.log(e)}})}return o.a.createElement("div",{className:"Category"},o.a.createElement("button",{className:"CreateProductButton",onClick:function(){a("/CreateProduct/".concat(e.categoryId),{replace:!0})}},"New Product"),o.a.createElement("button",{className:"LoadProductsButton",onClick:function(){c()}},"Load Product"),t.map(function(t,a){return o.a.createElement(Be,{key:a,data:t,categoryId:e.categoryId,index:a})}))}function Ve(e){return o.a.createElement(be.a.Group,{className:"my-2"},o.a.createElement(me.a,{className:"g-3"},o.a.createElement(se.a,{className:"col-sm"},o.a.createElement(be.a.Control,{placeholder:"Price",value:e.price,onChange:function(t){return e.updatePrice(e.index,t.target.value)}})),o.a.createElement(se.a,{className:"col-sm"},o.a.createElement(be.a.Control,{placeholder:"Size",value:e.size,onChange:function(t){return e.updateSize(e.index,t.target.value)}})),o.a.createElement(se.a,{className:"col-sm"},o.a.createElement(g.a,{onClick:function(){e.remove(e.index)}},"Remove"))))}function Xe(e){return o.a.createElement(be.a,{className:"bg-white px-5 py-5 overflow-auto w-80 h-70 max-vh-20"},e.sizePriceFormList.map(function(t,a){return o.a.createElement(Ve,{key:a,index:a,size:e.sizeList[a],price:e.priceList[a],remove:e.removeSizePriceForm,updateSize:e.updateSize,updatePrice:e.updatePrice})}),o.a.createElement(g.a,{className:"my-2",onClick:function(){return e.addSize()}},"Add Size"))}function Ke(){var e=Object(E.h)(),t=Object(r.useState)(""),a=Object(u.a)(t,2),n=a[0],c=a[1],l=Object(r.useState)([0]),i=Object(u.a)(l,2),s=i[0],d=i[1],p=m(),f=Object(E.g)(),g={Id:"",Name:"",ImageUrl:n,Description:"",Price:[],Size:[],Index:-1};return o.a.createElement(he.a,{className:"bg-white"},o.a.createElement(me.a,null,o.a.createElement(se.a,null,o.a.createElement(we,{updateImageUrl:function(e){c(e),g.ImageUrl=e},updateName:function(e){g.Name=e,g.Id=e},updateDescription:function(e){},save:function(){!function(e,t){Ue.apply(this,arguments)}({product:g,categoryId:e.categoryId},{onSuccess:function(){p(V({product:g,categoryKey:e.categoryId})),f("/Category/".concat(e.categoryId),{replace:!0})},onFail:function(e){console.log(e)}})},ImageUrl:n})),o.a.createElement(se.a,null,o.a.createElement(Xe,{sizeList:g.Size,priceList:g.Price,sizePriceFormList:s,removeSizePriceForm:function(e){g.Price.splice(e),g.Size.splice(e),d(s.filter(function(t,a){return a!==e}))},addSize:function(){g.Price.push(""),g.Size.push(""),d(s.concat([1]))},updatePrice:function(e,t){g.Price[e]=t},updateSize:function(e,t){g.Size[e]=t}}))))}function We(){var e=m(),t=Object(E.h)(),a=d(function(e){return e.product[t.categoryId][parseInt(t.productId)]}),n=Object(E.g)(),c=Object(r.useState)(a.ImageUrl),l=Object(u.a)(c,2),i=l[0],s=l[1],p=Object(r.useState)([0]),f=Object(u.a)(p,2),g=f[0],y=f[1],h=Object(r.useState)(a.Price),b=Object(u.a)(h,2),v=b[0],C=b[1],I=Object(r.useState)(a.Size),N=Object(u.a)(I,2),O=N[0],S=N[1],j=Object(r.useState)(a.Name),P=Object(u.a)(j,2),x=P[0],k=P[1];return Pe.setTargetAttributes("Product"),o.a.createElement(he.a,{className:"bg-white"},o.a.createElement(me.a,null,o.a.createElement(se.a,null,o.a.createElement(we,{name:x,description:a.Description,updateImageUrl:function(e){s(e),Pe.cacheAttribute("ImageUrl",e)},updateName:function(e){k(e),Pe.cacheAttribute("Name",e)},updateDescription:function(e){Pe.cacheAttribute("Description",e)},save:function(){!function(e,t){Le.apply(this,arguments)}({categoryId:t.categoryId,productId:a.Id,updatedValues:Pe.getCachedValues()},{onSuccess:function(){e(X({oldProduct:a,categoryKey:t.categoryId,updatedValues:Pe.getCachedValues()})),Pe.resetCache(),n("/Category/".concat(t.categoryId),{replace:!0})},onFail:function(e){console.log(e),Pe.resetCache()}})},ImageUrl:i})),o.a.createElement(se.a,null,o.a.createElement(Xe,{sizePriceFormList:g,sizeList:O,priceList:v,removeSizePriceForm:function(e){C(v.filter(function(t,a){return a!==e})),S(O.filter(function(t,a){return a!==e})),y(g.filter(function(t,a){return a!==e})),Pe.cacheAttribute("Price",a.Price),Pe.cacheAttribute("Size",a.Size)},addSize:function(){C(v.concat([""])),S(O.concat([""])),y(g.concat([1]))},updatePrice:function(e,t){var a=Object(Ie.a)(v);a[e]=t,C(a),Pe.cacheAttribute("Price",a)},updateSize:function(e,t){var a=Object(Ie.a)(O);a[e]=t,S(a),Pe.cacheAttribute("Size",a)}}))))}var Ge=a(142),qe=a(143),He=a(19);a(128);function Je(){return o.a.createElement(he.a,{fluid:!0},o.a.createElement(Ge.a,{id:"NavBar",bg:"dark",variant:"dark"},o.a.createElement(qe.a,{className:"flex-column"},o.a.createElement(qe.a.Link,{as:He.b,to:"/Orders"},"Orders"),o.a.createElement(qe.a.Link,{as:He.b,to:"/Catalogue"},"Catalogue"),o.a.createElement(qe.a.Link,{as:He.b,to:"/Settings"},"Settings"))))}var Re=a(86),Me=function(e){return o.a.createElement("h3",null,e," ..")},Qe={height:"100vh"};function Ye(e){var t=e.center,a=e.zoom,n=Object(r.useRef)(null);return Object(r.useEffect)(function(){new window.google.maps.Map(n.current,{center:t,zoom:a})}),o.a.createElement("div",{ref:n,style:Qe,id:"map"})}function Ze(e){return o.a.createElement(Re.Wrapper,{apiKey:"AIzaSyBQb9BWP3LVE4eRRmFMC97MsFW1Qze-7j8",render:Me},o.a.createElement(Ye,{center:e.center,zoom:e.zoom}))}function _e(e){return e.items.length>0?o.a.createElement(he.a,null,e.items.map(function(e,t){return o.a.createElement($e,{key:t,infos:e})})):o.a.createElement(he.a,null)}function $e(e){return console.log(e),o.a.createElement(he.a,null,o.a.createElement(me.a,{className:"g-3"},o.a.createElement(se.a,{className:"col-sm-4"},o.a.createElement(be.a.Label,null,e.infos.name)),o.a.createElement(se.a,{className:"col-sm-3"},o.a.createElement(be.a.Label,null,"X",e.infos.quantity)),o.a.createElement(se.a,{className:"col-sm-3"},o.a.createElement(be.a.Label,null,e.infos.price))))}function et(e){return o.a.createElement(f.a,null,o.a.createElement(f.a.Header,null,e.id),o.a.createElement(f.a.Body,null,o.a.createElement(f.a.Text,null,e.order.FullName+"  -  "+e.order.PhoneNumber),o.a.createElement(f.a.Text,null,e.order.Address),o.a.createElement(_e,{items:e.order.items})),o.a.createElement(f.a.Footer,null,"Total Price : ",function(e){var t=0;return e.forEach(function(e){t+=e.price*e.quantity}),t}(e.order.items)," Da"))}function tt(){var e=Object(E.h)(),t=d(function(t){return t.order.orders[e.orderId]});return o.a.createElement(he.a,null,o.a.createElement(me.a,{className:"g-3"},o.a.createElement(se.a,{className:"col-sm-5"},o.a.createElement(et,{order:t})),o.a.createElement(se.a,{className:"col-sm-5"},o.a.createElement(Ze,{center:{lat:t.Latitude,lng:t.Longitude},zoom:8}))))}var at={synchroniseDatabase:function(e){C.a.get(ae,{headers:{"X-Auth-key":ne}}).then(e.onSuccess).catch(e.onFail)}};function nt(e){return o.a.createElement(he.a,null,o.a.createElement("button",{onClick:function(){at.synchroniseDatabase({onSucess:function(){},onFail:function(){}})}},"Synchronise Database"))}function ct(e){var t=e.children,a=Object(E.f)();return re.isLoggedIn()?t:o.a.createElement(E.a,{to:"/Login",replace:!0,state:{from:a}})}var rt=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"App-header"},o.a.createElement(Je,null)),o.a.createElement("div",{className:"App-body"},o.a.createElement(E.d,null,o.a.createElement(E.b,{path:"/Login",element:o.a.createElement(Ce,null)}),o.a.createElement(E.b,{path:"/Orders",element:o.a.createElement(ct,null,o.a.createElement(ue,null))}),o.a.createElement(E.b,{path:"/Catalogue",element:o.a.createElement(ct,null,o.a.createElement(ye,null))}),o.a.createElement(E.b,{path:"/Category/:categoryId",element:o.a.createElement(ct,null,o.a.createElement(Te,null))}),o.a.createElement(E.b,{path:"/EditCategory/:categoryId",element:o.a.createElement(ct,null,o.a.createElement(xe,null))}),o.a.createElement(E.b,{path:"/CreateCategory",element:o.a.createElement(ct,null,o.a.createElement(Fe,null))}),o.a.createElement(E.b,{path:"/CreateProduct/:categoryId",element:o.a.createElement(ct,null,o.a.createElement(Ke,null))}),o.a.createElement(E.b,{path:"/EditProduct/:categoryId/:productId",element:o.a.createElement(ct,null,o.a.createElement(We,null))}),o.a.createElement(E.b,{path:"/Settings",element:o.a.createElement(ct,null,o.a.createElement(nt,null))}),o.a.createElement(E.b,{path:"/OrderDetails/:orderId",element:o.a.createElement(ct,null,o.a.createElement(tt,null))}))),o.a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",integrity:"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",crossOrigin:"anonymous"}))};i.a.render(o.a.createElement(He.a,null,o.a.createElement(s.a,{store:H},o.a.createElement(rt,null))),document.getElementById("root"))},89:function(e,t,a){e.exports=a(140)},94:function(e,t,a){},95:function(e,t,a){}},[[89,1,2]]]);
//# sourceMappingURL=main.43eaf77f.chunk.js.map