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
})();
