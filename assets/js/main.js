(function(){
  'use strict';
  var hd=document.querySelector('.hd'), bg=document.querySelector('.burger');
  if(hd&&bg){ bg.addEventListener('click',function(){ hd.classList.toggle('open'); }); }
  // スクロールでヘッダーを縮める（固定ヘッダー）
  if(hd){
    var onScroll=function(){ hd.classList.toggle('is-stuck', (window.scrollY||window.pageYOffset) > 40); };
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }
  var dots=document.querySelectorAll('.mv__dots li');
  Array.prototype.forEach.call(dots,function(d){ d.addEventListener('click',function(){
    Array.prototype.forEach.call(dots,function(x){x.classList.remove('current')}); d.classList.add('current'); }); });
  Array.prototype.forEach.call(document.querySelectorAll('.pagetop'),function(a){
    a.addEventListener('click',function(e){ e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}); }); });
  var f=document.getElementById('contactForm');
  if(f){ f.addEventListener('submit',function(e){ e.preventDefault();
    var m=document.getElementById('formMsg');
    if(m){ m.hidden=false; m.textContent='これはサンプルです。送信先が決まり次第、実際に届く形に設定します。'; } }); }

  // ---- 画面に入ったらふわっと出す（JSが動かないときは最初から表示される）----
  var SEL='.ttl,.cars,.cta,.lendsec,.area,.trb__ph,.rep,.cards__in,'+
          '.pcards>li,.pts>li,.fee3>li,.flow>li,.tlist--grid>li,.area__map';
  var list=Array.prototype.slice.call(document.querySelectorAll(SEL));
  if(list.length){
    document.documentElement.classList.add('anim');
    list.forEach(function(el){
      el.setAttribute('data-rv','');
      var sib=el.parentNode?Array.prototype.indexOf.call(el.parentNode.children,el):0;
      el.style.setProperty('--ri', sib>7?7:sib);
    });
    var vh=window.innerHeight||800;
    var rest=[];
    list.forEach(function(el){
      // 最初から画面に入っているもの（FV直下など）は動かさずに出す＝電話番号を待たせない
      if(el.getBoundingClientRect().top < vh-40){ el.classList.add('rv-now'); }
      else { rest.push(el); }
    });
    if('IntersectionObserver' in window){
      var io2=new IntersectionObserver(function(es){
        es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('is-in'); io2.unobserve(e.target); } });
      },{threshold:.15, rootMargin:'0px 0px -8% 0px'});
      rest.forEach(function(el){ io2.observe(el); });
    } else {
      rest.forEach(function(el){ el.classList.add('rv-now'); });
    }
  }
})();
