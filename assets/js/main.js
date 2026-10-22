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

  // 画面に入ったら動かす（JSが動かないときは最初から表示される）
  var tgt=document.querySelectorAll('.js-inview');
  if(tgt.length){
    document.documentElement.classList.add('anim');
    if('IntersectionObserver' in window){
      var io2=new IntersectionObserver(function(es){
        es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('is-in'); io2.unobserve(e.target); } });
      },{threshold:.3});
      Array.prototype.forEach.call(tgt,function(el){ io2.observe(el); });
    } else {
      Array.prototype.forEach.call(tgt,function(el){ el.classList.add('is-in'); });
    }
  }
})();
