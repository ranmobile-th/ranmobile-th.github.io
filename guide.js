(function(){
var G=window.GUIDE||{bosses:[],spots:[],events:[]};
var $=function(id){return document.getElementById(id)};
var fmt=function(n){return n.toLocaleString('en-US')};
var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
function respawn(s){if(s>=86400)return Math.round(s/86400)+' วัน';if(s>=3600){var h=s/3600;return (h%1?h.toFixed(1):h)+' ชม.'}return Math.round(s/60)+' นาที'}
function tier(b){if(b.lv>195)return{k:'ตำนาน',c:'#ff6b6b',g:'rgba(255,70,70,.34)'};if(b.lv>=160)return{k:'สูง',c:'#ff8a3d',g:'rgba(255,138,61,.32)'};if(b.lv>=80)return{k:'กลาง',c:'#f6dc9a',g:'rgba(226,184,92,.30)'};return{k:'เริ่มต้น',c:'#63c995',g:'rgba(99,201,149,.28)'}}
/* bosses */
var maxHp=Math.max.apply(null,G.bosses.map(function(b){return b.hp}).concat([1]));
var tiers=['ทั้งหมด','เริ่มต้น','กลาง','สูง','ตำนาน'],cur='ทั้งหมด';
function drawBoss(){
 $('bossGrid').innerHTML=G.bosses.filter(function(b){return cur==='ทั้งหมด'||tier(b).k===cur}).map(function(b){var t=tier(b);
  return '<article class="boss" data-id="'+b.id+'" style="--glow:'+t.g+';--tierc:'+t.c+'"><div class="art"><img loading="lazy" src="img/boss/'+b.id+'.webp" alt="'+esc(b.name)+'"><span class="lv">Lv '+b.lv+'</span><span class="tier">'+t.k+'</span></div>'+
  '<div class="body"><h3>'+esc(b.name)+'</h3><div class="hpbar"><i style="width:'+Math.max(4,Math.round(Math.log(b.hp)/Math.log(maxHp)*100))+'%"></i></div>'+
  '<div class="meta"><div>พลังชีวิต<b>'+fmt(b.hp)+'</b></div><div>เกิดใหม่ทุก<b>'+respawn(b.respawn)+'</b></div></div>'+
  '<div class="where">📍 '+b.maps.map(esc).join(' · ')+'</div></div></article>'}).join('');
}
$('bossTier').innerHTML=tiers.map(function(t){return '<button class="chip'+(t===cur?' on':'')+'" data-t="'+t+'">'+t+'</button>'}).join('');
$('bossTier').addEventListener('click',function(e){var t=e.target.closest('.chip');if(!t)return;cur=t.dataset.t;[].forEach.call(this.children,function(c){c.classList.toggle('on',c===t)});drawBoss()});
$('bossGrid').addEventListener('click',function(e){var c=e.target.closest('.boss');if(!c)return;var b=G.bosses.filter(function(x){return x.id===c.dataset.id})[0];if(!b)return;var t=tier(b);
 $('mImg').src='img/boss/'+b.id+'.webp';$('mImg').alt=b.name;$('mArt').style.setProperty('--glow',t.g);$('mTier').textContent='BOSS · ระดับ'+t.k;$('mName').textContent=b.name;
 $('mDl').innerHTML='<dt>เลเวล</dt><dd>'+b.lv+'</dd><dt>พลังชีวิต</dt><dd>'+fmt(b.hp)+'</dd><dt>เกิดใหม่ทุก</dt><dd>'+respawn(b.respawn)+'</dd><dt>พบที่</dt><dd>'+b.maps.map(esc).join('<br>')+'</dd>';
 $('bossModal').hidden=false});
function closeM(){$('bossModal').hidden=true}
$('mClose').onclick=closeM;$('bossModal').addEventListener('click',function(e){if(e.target===this)closeM()});document.addEventListener('keydown',function(e){if(e.key==='Escape')closeM()});
drawBoss();$('sBoss').textContent=G.bosses.length;
/* levelling */
var spots=G.spots.filter(function(s){return s.map&&s.map.replace(/\u0000/g,'').trim()&&s.lo<=195});
$('sSpot').textContent=spots.length;
function drawRoute(L){
 $('route').className='route'+(L>1?' filtered':'');
 $('route').innerHTML=spots.map(function(s){var hit=L>=s.lo-3&&L<=s.hi+2;var a=(s.lo-1)/194*100,w=Math.max(1.5,(Math.min(195,s.hi)-s.lo)/194*100);
  return '<div class="spot'+(hit?' hit':'')+'"><div class="rng">'+s.lo+(s.hi>s.lo?'–'+s.hi:'')+'<small>เลเวลมอนสเตอร์</small></div><div><h4>'+esc(s.map)+'</h4><div class="mobs">'+s.mobs.map(esc).join(' · ')+'</div>'+
  '<div class="track"><i style="left:'+a+'%;width:'+w+'%"></i>'+(L>1?'<span class="me" style="left:'+((L-1)/194*100)+'%"></span>':'')+'</div></div></div>'}).join('');
}
$('lvIn').addEventListener('input',function(){$('lvOut').textContent='Lv '+this.value;drawRoute(+this.value)});drawRoute(1);
/* events */
var colors={tyranny:'#ff8a3d',emperium:'#73aef0',clubwar:'#e2b85c'};
var days=['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์'];
function bkk(){var d=new Date();return new Date(d.getTime()+d.getTimezoneOffset()*60000+7*3600000)}
var slots=[];G.events.forEach(function(e){e.times.forEach(function(t){slots.push({e:e,d:t[0]-1,h:t[1],m:t[2]})})});
$('sWar').textContent=slots.length;
var now=bkk(),today=now.getDay();
$('wHead').innerHTML='<th>กิจกรรม</th>'+days.map(function(d,i){return '<th class="'+(i===today?'td':'')+'">'+d+'</th>'}).join('');
$('wBody').innerHTML=G.events.map(function(e){return '<tr style="--evc:'+colors[e.id]+'"><th><b style="color:'+colors[e.id]+'">'+esc(e.name)+'</b><span>'+esc(e.th)+' · Lv '+e.lv+'+</span></th>'+days.map(function(_,i){
 return '<td class="'+(i===today?'td':'')+'">'+e.times.filter(function(t){return t[0]-1===i}).map(function(t){return '<span class="tm">'+('0'+t[1]).slice(-2)+':'+('0'+t[2]).slice(-2)+'</span>'}).join('')+'</td>'}).join('')+'</tr>'}).join('');
$('evDesc').innerHTML=G.events.map(function(e){return '<div class="evd" style="--evc:'+colors[e.id]+'"><b>'+esc(e.th)+'</b><p>เลเวล '+e.lv+' ขึ้นไป · ลงทะเบียน '+e.reg+' นาที · รบ '+e.battle+' นาที</p></div>'}).join('');
function tick(){
 var n=bkk(),best=null;
 slots.forEach(function(s){var t=new Date(n);t.setHours(s.h,s.m,0,0);var diff=(s.d-n.getDay()+7)%7;t.setDate(t.getDate()+diff);var end=new Date(t.getTime()+(s.e.reg+s.e.battle)*60000);
  if(end<=n){t.setDate(t.getDate()+7);end=new Date(t.getTime()+(s.e.reg+s.e.battle)*60000)}
  if(!best||t<best.t)best={s:s,t:t,end:end}});
 slots.forEach(function(s){var t=new Date(n);t.setHours(s.h,s.m,0,0);var diff=(s.d-n.getDay()+7)%7;t.setDate(t.getDate()+diff);var end=new Date(t.getTime()+(s.e.reg+s.e.battle)*60000);if(t<=n&&n<end)best={s:s,t:t,end:end,live:true}});
 if(best){var ms=best.live?best.end-n:best.t-n,h=Math.floor(ms/3600000),m=Math.floor(ms%3600000/60000),sec=Math.floor(ms%60000/1000);
  $('nK').textContent=best.live?'กำลังแข่งขันอยู่ · เหลือเวลา':'รอบถัดไปเริ่มใน';$('nName').textContent=best.s.e.th;$('nName').style.color=colors[best.s.e.id];
  $('nCount').textContent=(h>23?Math.floor(h/24)+' วัน ':'')+('0'+h%24).slice(-2)+':'+('0'+m).slice(-2)+':'+('0'+sec).slice(-2);
  $('nWhen').textContent='วัน'+days[best.t.getDay()]+' '+('0'+best.s.h).slice(-2)+':'+('0'+best.s.m).slice(-2)+' น. · Lv '+best.s.e.lv+'+'}
 var td=slots.filter(function(s){return s.d===n.getDay()}).sort(function(a,b){return a.h*60+a.m-b.h*60-b.m});
 $('tTitle').textContent='วันนี้ · วัน'+days[n.getDay()];
 $('tList').innerHTML=td.map(function(s){var st=s.h*60+s.m,cm=n.getHours()*60+n.getMinutes(),en=st+s.e.reg+s.e.battle;var cls=cm>=en?' past':cm>=st?' live':'';
  return '<div class="trow'+cls+'"><span style="color:'+colors[s.e.id]+'">'+esc(s.e.name)+'</span><span>'+('0'+s.h).slice(-2)+':'+('0'+s.m).slice(-2)+(cls===' live'?' · กำลังแข่ง':'')+'</span></div>'}).join('')||'<div class="trow">ไม่มีกิจกรรม</div>';
}
tick();setInterval(tick,1000);
/* tabs follow scroll */
var tabs=document.querySelectorAll('.gtabs a');
window.addEventListener('scroll',function(){var y=window.scrollY+140,on=tabs[0];tabs.forEach(function(a){var s=document.querySelector(a.getAttribute('href'));if(s&&s.offsetTop<=y)on=a});tabs.forEach(function(a){a.classList.toggle('on',a===on)})},{passive:true});
})();
