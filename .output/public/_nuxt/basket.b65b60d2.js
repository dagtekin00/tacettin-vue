import{B as n}from"./basket.31026f70.js";import{_ as m,c as a,a as e,t as r,F as h,r as d,f as u,o as l}from"./entry.f11adf92.js";const _={data(){return{basket:[]}},created(){this.fetchBasketFromLocalStorage()},methods:{fetchBasketFromLocalStorage(){const t=n();t.fetchFromLocalStorage(),this.basket=t.items},removeFromCart(t){this.basket.splice(t,1);const s=n();s.localInit(),s.removeFromBasket(t),s.writeToLocalStorage(),this.updateLocalStorage()},updateLocalStorage(){localStorage.setItem("basketItems",JSON.stringify(this.basket))},incrementQuantity(t){this.basket[t].quantity++,this.updateLocalStorage()},decrementQuantity(t){this.basket[t].quantity>1&&(this.basket[t].quantity--,this.updateLocalStorage())}},computed:{totalPrice(){let t=0;for(const s of this.basket)t+=s.price;return t}},mounted(){this.fetchBasketFromLocalStorage()}},f=e("link",{href:"https://fonts.googleapis.com/css?family=Raleway",rel:"stylesheet"},null,-1),k=e("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"},null,-1),p={key:0,class:"basket",style:{display:"flex","flex-direction":"column","align-items":"center"}},b={class:"totalPrice"},g={style:{"font-size":"80%","margin-left":"15px"}},y=["src"],S={style:{"font-size":"80%","margin-left":"20px"}},x=["onClick"],L=e("i",{class:"fa fa-trash-o"},null,-1),v=[L];function B(t,s,F,w,c,i){return l(),a(h,null,[f,k,c.basket?(l(),a("div",p,[e("div",b,[e("h3",null,r(t.$t("totalPrice"))+" "+r(i.totalPrice)+"$",1)]),(l(!0),a(h,null,d(c.basket,(o,C)=>(l(),a("div",{key:o.id,class:"basketicerik"},[e("h1",g,r(o.title),1),e("img",{src:o.thumbnail,alt:"",style:{width:"35%",height:"100px","margin-left":"20px"}},null,8,y),e("h1",S,r(o.price)+"$",1),e("button",{onClick:I=>i.removeFromCart(o),style:{"margin-left":"4%","background-color":"rgba(128, 128, 128, 0.747)",color:"black","font-size":"20px",border:"none","border-radius":"5px"}},v,8,x)]))),128))])):u("",!0)],64)}const q=m(_,[["render",B]]);export{q as default};
