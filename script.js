(function(){var b=document.querySelector('.burger'),m=document.getElementById('menu');if(!b||!m)return;
b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded','false')}})})();
