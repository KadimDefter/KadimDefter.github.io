(async()=>{const q=(new URLSearchParams(location.search).get('q')||'').trim().toLocaleLowerCase('tr');
document.getElementById('qs').textContent=q?'“'+q+'” için sonuçlar':'Arama';if(!q)return;
const o=document.getElementById('res'),d=await(await fetch('/search.json')).json();
const l=d.filter(p=>(p.t+' '+p.e).toLocaleLowerCase('tr').includes(q));
o.innerHTML=l.length?l.map(p=>'<article class="card"><div class="t"><div class="meta">'+p.c+'</div><h3><a href="'+p.u+'">'+p.t+'</a></h3><p>'+p.e+'</p></div></article>').join(''):'<p>Sonuç bulunamadı.</p>'})();
