(function(){"use strict";var t={594:function(t,e,n){var o=n(963),s=n(252);function l(t,e){const n=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(n)}var a=n(744);const c={},i=(0,a.Z)(c,[["render",l]]);var r=i,u=n(201),d=n(577);const b={class:"welcome-block"},m={class:"container"},h=(0,s._)("div",{class:"block-for-avatar"},[(0,s._)("div",{class:"avatar"})],-1),k={class:"hello-animation"},v={class:"text"},p=(0,s._)("span",{id:"stick",class:"stick show",style:{height:"76px"}},null,-1),f={class:"welcome-text-block"},g={class:"welcome-text"},w={class:"welcome-text"},H={class:"about-me-block"},_={class:"container"},y=(0,s._)("h1",{class:"about-me-header"},"Обо мне",-1),x={class:"text-about-animation"},T={style:{display:"flex","align-items":"center"}},B={class:"text-about"},C=(0,s._)("span",{class:"stick",id:"second-stick"},null,-1),S={class:"text-about"},A={class:"text-about"},M={class:"text-about"},L={class:"text-about"},q={class:"text-about"},O={class:"text-about"},z=(0,s._)("div",{class:"my-projects"},[(0,s._)("div",{class:"container"},[(0,s._)("h1",{class:"my-projects-header"},"Мои проекты")])],-1);function j(t,e,n,o,l,a){const c=(0,s.up)("nav-bar");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(c),(0,s._)("div",b,[(0,s._)("div",m,[h,(0,s._)("div",k,[(0,s._)("span",v,(0,d.zw)(t.content),1),p]),(0,s._)("div",f,[(0,s._)("div",g,(0,d.zw)(t.welcomeText[0]),1),(0,s._)("div",w,(0,d.zw)(t.welcomeText[1]),1),(0,s._)("div",{class:"arrow-button",onClick:e[0]||(e[0]=e=>t.scrollToAbout())})])])]),(0,s._)("div",H,[(0,s._)("div",_,[y,(0,s._)("div",x,[(0,s._)("div",T,[(0,s._)("span",B,[(0,s.Uk)((0,d.zw)(t.blocks[0]),1),C])]),(0,s._)("div",S,(0,d.zw)(t.blocks[1]),1),(0,s._)("div",A,(0,d.zw)(t.blocks[2]),1),(0,s._)("div",M,(0,d.zw)(t.blocks[3]),1),(0,s._)("div",L,(0,d.zw)(t.blocks[4]),1),(0,s._)("div",q,(0,d.zw)(t.blocks[5]),1),(0,s._)("div",O,(0,d.zw)(t.blocks[6]),1)])])]),z],64)}const J={class:"navbar"},N={class:"container"},E={class:"navbar-links"},P=(0,s._)("div",{class:"navbar-main"},[(0,s._)("a",{href:""},"Главная")],-1),Z={class:"navbar-right"},D={class:"navbar-link-with-underline"},F=(0,s._)("span",{class:"navbar-underline"},null,-1),I=(0,s.uE)('<span class="navbar-link-with-underline"><a href="">Мой опыт</a><span class="navbar-underline"></span></span><span class="navbar-link-with-underline"><a href="">Проекты</a><span class="navbar-underline"></span></span><span class="navbar-link-with-underline"><a href="">Контакты</a><span class="navbar-underline"></span></span>',3),Y=(0,s._)("div",{class:"navbar-links-mobile"},[(0,s._)("div",{class:"navbar-main"},[(0,s._)("a",{href:""},"Главная")]),(0,s._)("div",{class:"navbar-button"})],-1);function G(t,e,n,l,a,c){return(0,s.wg)(),(0,s.iD)("div",J,[(0,s._)("div",N,[(0,s._)("div",E,[P,(0,s._)("div",Z,[(0,s._)("span",D,[(0,s._)("a",{href:"",onClick:e[0]||(e[0]=(0,o.iM)((()=>{}),["prevent"]))},"Обо мне"),F]),I])]),Y])])}var U={};const V=(0,a.Z)(U,[["render",G]]);var W=V,K={components:{NavBar:W},data(){return{aboutMeBlockChanged:!1,content:"",contentHello:["П","Пр","При","Прив","Приве","Привет","Привет!","Привет","Приве","Прив","При","Пр","П","","H","He","Hel","Hell","Hello","Hello!","Hello","Hell","Hel","He","H",""],incrementHello:[2e3,150,150,150,150,150,150,2e3,150,150,150,150,150,150,1e3,150,150,150,150,150,2e3,150,150,150,150,150],timeHello:0,contentBlock1:["a","ab","abo","abou","about","about-","about-m","about-me","< about-me ></ about-me >","< about-me >","< about-me c>","< about-me cl>","< about-me cla>","< about-me clas>","< about-me class>","< about-me class=>",'< about-me class="">','< about-me class="J">','< about-me class="Ju">','< about-me class="Jun">','< about-me class="Juni">','< about-me class="Junio">','< about-me class="Junior">'],incrementBlock1:[3e3,150,150,150,150,150,500,150,1e3,1e3,15e3,150,150,150,150,150,1e3,150,150,150,150,150,150],timeBlock1:0,contentBlock2:["d","di","div","div*","div*5","div*5{}","div*5{l}","div*5{lo}","div*5{lor}","div*5{lore}","div*5{lorem}","div*5{lorem2}","div*5{lorem20}"],incrementBlock2:[7550,150,150,500,150,500,150,150,500,150,150,500,150],timeBlock2:0,contentBlock3:["</ about-me >"],incrementBlock3:[6400],timeBlock3:0,blocks:["","","","","","",""],welcomeText:["< Меня зовут Данил! Я начинающий Front-end разработчик. />","< Здесь ты можешь ознакомиться с моими актуальными проектами и узнать меня немного получше. />"]}},methods:{scrollToAbout(){const t=document.querySelector(".about-me-block").offsetTop-100;window.scrollTo({top:t,behavior:"smooth"})},stickHider(){return setInterval((()=>{const t=document.querySelectorAll(".stick");for(let e=0;t.length>e;e++)"stick hiden"===t[e].className?t[e].className="stick show":t[e].className="stick hiden"}),610)},contentHandler(){for(let t=0;t<this.contentHello.length;t++)this.changingContent(this.contentHello[t],this.timeHello+=this.incrementHello[t]);this.timeHello=0,setInterval((()=>{for(let t=0;t<this.contentHello.length;t++)this.changingContent(this.contentHello[t],this.timeHello+=this.incrementHello[t]);this.timeHello=0}),10450)},changingContent(t,e){setTimeout((()=>{this.content=t}),e)},stickMoving(){setTimeout((()=>{document.querySelectorAll(".text-about")[0].innerHTML='&lt; about-me &gt;<span id="second-stick" class="stick hiden"></span>&lt;/ about-me &gt;'}),5651),setTimeout((()=>{document.querySelectorAll(".text-about")[0].innerHTML="&lt; about-me &gt;",document.querySelectorAll(".text-about")[1].innerHTML='<span id="second-stick" class="stick hiden"></span>'}),6201)},changingBlockContentAll(t,e,n,o,s,l,a,c){setTimeout((()=>{this.blocks[0]=t,this.blocks[1]=e,this.blocks[2]=n,this.blocks[3]=o,this.blocks[4]=s,this.blocks[5]=l,this.blocks[6]=a;const c=document.querySelectorAll(".text-about");for(let t=1;t<c.length-1;t++)c[t].classList.add("mrgn-left")}),c)},blockContentHandlerAll(){this.changingBlockContentAll("< about-me >","< Занимаюсь разработкой 1 месяц. За это время успел изучить основы работы с HTML, CSS, SCSS, JavaScript, VueJS, Git />","< Сделал несколько проектов, реализующих мои персональные запросы по организации дневных задач />","< Тратил на учебный процесс в среднем по 10 часов в день />","< Познал Познаю тайные техники “чтобы заработало” />","< Посмотрел 200 серий Наруто />","< about-me />",11550)},blockContentHandler(t,e,n,o){for(let s=0;s<t.length;s++)this.changingBlocksContent(o,t[s],n+=e[s])},changingBlocksContent(t,e,n){setTimeout((()=>{this.blocks[t]=e}),n)},block2ContentHandler(t,e,n){for(let o=0;o<t.length;o++)this.changingBlock2Content(t[o],n+=e[o])},changingBlock2Content(t,e){setTimeout((()=>{document.querySelectorAll(".text-about")[1].innerHTML=t}),e)},selectingAndLining(){setTimeout((()=>{document.querySelectorAll(".text-about")[5].innerHTML='&lt;  Посмотрел 200 серий Наруто</span><span id="second-stick" class="stick show"></span> /&gt;'}),12500),setTimeout((()=>{document.querySelectorAll(".text-about")[5].innerHTML='&lt;  <span id="second-stick" class="stick show"></span><span class="back">Посмотрел 200 серий Наруто</span> /&gt;'}),13e3),setTimeout((()=>{document.querySelectorAll(".text-about")[5].innerHTML='&lt;  <span class="back">Посмотрел 200 серий Наруто</span><span id="second-stick" class="stick show"></span>/&gt;'}),13500),setTimeout((()=>{document.querySelectorAll(".text-about")[5].innerHTML='&lt;  <span class="line">Посмотрел 200 серий Наруто</span><span id="second-stick" class="stick show"></span>/&gt;'}),14500)},onScrollHandler(){this.blockContentHandler(this.contentBlock1,this.incrementBlock1,this.timeBlock1,0),this.block2ContentHandler(this.contentBlock2,this.incrementBlock2,this.timeBlock2),this.blockContentHandler(this.contentBlock3,this.incrementBlock3,this.timeBlock3,2),this.blockContentHandlerAll(),this.selectingAndLining(),this.stickMoving()}},mounted(){this.contentHandler(),this.stickHider(),window.addEventListener("scroll",(()=>{let t=window.scrollY;const e=document.querySelector(".about-me-block");t<100?document.querySelector(".arrow-button").classList.remove("opacity"):document.querySelector(".arrow-button").classList.add("opacity"),t>e.offsetTop-400&&!this.aboutMeBlockChanged&&(this.onScrollHandler(),this.aboutMeBlockChanged=!0)}))}},Q=K;const R=(0,a.Z)(Q,[["render",j]]);var X=R;const $=[{path:"/",alias:"/main",component:X}],tt=(0,u.p7)({history:(0,u.PO)("/portfolio/"),routes:$});var et=tt,nt=n(907),ot=(0,nt.MT)({state:{content:"Привет"},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(r).use(ot).use(et).mount("#app")}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var l=e[o]={exports:{}};return t[o](l,l.exports,n),l.exports}n.m=t,function(){var t=[];n.O=function(e,o,s,l){if(!o){var a=1/0;for(u=0;u<t.length;u++){o=t[u][0],s=t[u][1],l=t[u][2];for(var c=!0,i=0;i<o.length;i++)(!1&l||a>=l)&&Object.keys(n.O).every((function(t){return n.O[t](o[i])}))?o.splice(i--,1):(c=!1,l<a&&(a=l));if(c){t.splice(u--,1);var r=s();void 0!==r&&(e=r)}}return e}l=l||0;for(var u=t.length;u>0&&t[u-1][2]>l;u--)t[u]=t[u-1];t[u]=[o,s,l]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,l,a=o[0],c=o[1],i=o[2],r=0;if(a.some((function(e){return 0!==t[e]}))){for(s in c)n.o(c,s)&&(n.m[s]=c[s]);if(i)var u=i(n)}for(e&&e(o);r<a.length;r++)l=a[r],n.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return n.O(u)},o=self["webpackChunkmy_own_site"]=self["webpackChunkmy_own_site"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(594)}));o=n.O(o)})();
//# sourceMappingURL=app.bfaf2149.js.map