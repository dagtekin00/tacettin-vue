import{B as m}from"./basket.31026f70.js";import{_ as y,i as _,c,a as t,t as o,b as f,f as a,g as b,j as k,v,F as p,r as g,d,o as n}from"./entry.f11adf92.js";const I={data(){return{categories:{},jsonProducts:{products:[],basketItems:[]},itemId:null,productsLoaded:!1,selectedCategory:localStorage.getItem("selectedCategory")||"all",basketItems:[],itemAdded:!1,basketItemCount:0}},methods:{filterForm(){return console.log(this.selectedCategory),localStorage.setItem("selectedCategory",this.selectedCategory.toString()),this.$router.push({path:`/products${this.selectedCategory}`})},openProduct(e){console.log("hello tacettin how are you")},toggleIcerik(e){console.log(e),this.itemId===e?this.itemId=null:this.itemId=e},addToBasket(e){const l=m();l.localInit(),l.addToBasket(e),l.writeToLocalStorage(),this.itemAdded=!0,this.basketItemCount+=1,setTimeout(()=>{this.itemAdded=!1},2e3)},fetchProducts(){const e=this.selectedCategory==="all"?"https://dummyjson.com/products":`https://dummyjson.com/products/category/${this.$route.params.category}`;fetch(e).then(l=>l.json()).finally(()=>this.productsLoaded=!1).then(l=>{this.jsonProducts=l,this.productsLoaded=!0}).catch(l=>console.log(l))},togglePopup(){const e=document.getElementById("popup");e.style.display="block"}},async mounted(){console.log("konsol");try{const e=await fetch("https://dummyjson.com/products/categories");this.categories=await e.json()}catch(e){console.log(e)}this.fetchProducts()}},j=t("link",{href:"https://fonts.googleapis.com/css?family=Raleway",rel:"stylesheet"},null,-1),P=t("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"},null,-1),C={class:"mid"},w={class:"right"},S={class:"productstxt"},B={class:"abouttxt"},T=t("br",null,null,-1),L=t("div",{class:"productshr"},[t("hr",{style:{border:"none","border-top":"2px solid rgb(0, 0, 0)"}})],-1),F={key:0},V={for:"category",class:"categorytxt"},A=["value"],N={type:"submit",class:"submit"},x={id:"productTitle",ref:"productTitle"},z={key:0,class:"icerik",style:{"text-align":"center"}},D=["src"],E=t("br",null,null,-1),M={key:1,class:"products-grid"},R=["onClick"],U={class:"containerid"},q=["src"],G={class:"product-title"},H={key:0,class:"basket-notification"},J={key:2,style:{display:"flex","justify-content":"center","align-items":"center"}},K=t("div",{class:"progress progress-striped"},[t("div",{class:"progress-bar"})],-1),O=[K];function Q(e,l,W,X,s,i){const h=_("loading-overlay");return n(),c(p,null,[j,P,t("div",C,[t("div",w,[t("b",null,[t("div",S,[t("span",B,o(e.$t("products")),1),T,L])]),t("div",null,[f(h,{active:e.loading,"can-cancel":!1},null,8,["active"]),e.loading?a("",!0):(n(),c("div",F,[t("p",null,o(e.veri),1)]))]),t("form",{class:"filter-form",onSubmit:l[1]||(l[1]=b((...r)=>i.filterForm&&i.filterForm(...r),["prevent"]))},[t("label",V,o(e.$t("category")),1),k(t("select",{id:"category",name:"category",ref:"categorySelecter",class:"select","onUpdate:modelValue":l[0]||(l[0]=r=>s.selectedCategory=r)},[(n(!0),c(p,null,g(s.categories,(r,u)=>(n(),c("option",{key:u,value:r},o(r),9,A))),128))],512),[[v,s.selectedCategory]]),t("button",N,o(e.$t("tosort")),1)],32),t("h1",x,null,512),s.itemId!=null?(n(),c("div",z,[t("h1",null,o(s.jsonProducts.products[s.itemId].title),1),t("h2",null,o(s.jsonProducts.products[s.itemId].price)+"$",1),t("p",null,o(s.jsonProducts.products[s.itemId].description),1),t("p",null,[t("b",null,o(e.$t("category"))+": ",1),d(o(s.jsonProducts.products[s.itemId].category),1)]),t("p",null,[t("b",null,o(e.$t("brand"))+": ",1),d(o(s.jsonProducts.products[s.itemId].brand),1)]),t("p",null,[t("b",null,o(e.$t("discountPercentage"))+": ",1),d(o(s.jsonProducts.products[s.itemId].discountPercentage),1)]),t("p",null,[t("b",null,o(e.$t("rating"))+": ",1),d(o(s.jsonProducts.products[s.itemId].rating),1)]),t("img",{src:s.jsonProducts.products[s.itemId].thumbnail,style:{width:"50%",height:"200px"}},null,8,D),E,t("button",{onClick:l[2]||(l[2]=r=>i.toggleIcerik(s.itemId)),class:"historygo"},o(e.$t("goback")),1),t("button",{class:"addtobasket",onClick:l[3]||(l[3]=r=>i.addToBasket(s.jsonProducts.products[s.itemId])),style:{"z-index":"2"}},o(e.$t("addtobasket")),1)])):a("",!0),s.productsLoaded==!0?(n(),c("div",M,[(n(!0),c(p,null,g(s.jsonProducts.products,(r,u)=>(n(),c("div",{style:{"z-index":"1"},key:r.id,class:"product",onClick:Y=>i.toggleIcerik(u)},[t("div",U,[t("img",{src:r.thumbnail,class:"product-img"},null,8,q)]),t("h2",G,o(r.title),1),s.itemAdded?(n(),c("div",H,o(e.$t("addedtocart")),1)):a("",!0)],8,R))),128))])):(n(),c("div",J,O))])])],64)}const tt=y(I,[["render",Q]]);export{tt as default};