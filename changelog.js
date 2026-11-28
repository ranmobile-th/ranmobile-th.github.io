// Release notes, newest first. t: new | imp | fix. Text in Thai (th) and English (en); other languages show English.
window.CHANGELOG = [
 {v:"1.1.400", date:"2026-11-28", items:[
  {t:"fix", c:{th:"AUTO",en:"AUTO"}, th:["AUTO วิ่งไปตีมอนเหมือนเดิม","เข้าแมพแล้วตัวละครอยู่โหมดวิ่งเสมอ AUTO จึงวิ่งไปหามอนในวง ไม่เดินช้า"], en:["AUTO runs to monsters again","Characters always enter a map running, so AUTO runs to monsters in its circle instead of walking."]}
 ]},
 {v:"1.1.399", date:"2026-11-28", items:[
  {t:"imp", c:{th:"หน้าจอ",en:"Screen"}, th:["ปุ่มเข้าชุดกัน","ปุ่มออโต้ปั้มยาและปุ่มย่อแชทเป็นพื้นกระจกขอบทองแบบเดียวกับปุ่มขี่พาหนะและปุ่ม F1"], en:["Matching buttons","The auto-potion and chat buttons now use the same gold-rimmed glass style as the ride and F1 buttons."]}
 ]},
 {v:"1.1.398", date:"2026-11-28", items:[
  {t:"fix", c:{th:"หน้าจอ",en:"Screen"}, th:["หน้าเลือกตัวละครเรียบร้อยขึ้น","ชื่อเซิร์ฟอยู่ในกรอบบรรทัดเดียว และป้ายเลเวลในการ์ดตัวละครเห็นครบ"], en:["Tidier character select","The server name fits its pill on one line and the level badge on character cards shows in full."]}
 ]},
 {v:"1.1.397", date:"2026-11-28", items:[
  {t:"fix", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["แก้กระตุกในตลาดคนเยอะ","ตอนคนจำนวนมากเปลี่ยนท่าพร้อมกัน เกมไม่ค้างแวบทุก 1-2 วินาทีแล้ว"], en:["No more stalls in crowded markets","Many players switching poses at once no longer freezes the game every second or two."]},
  {t:"imp", c:{th:"หน้าจอ",en:"Screen"}, th:["ตัวหนังสืออ่านง่ายขึ้น","ขยายตัวหนังสือที่เล็กเกินในหน้าตั้งค่า เติมเงิน กิลด์ กาชา และ HUD"], en:["Easier to read text","Small text in settings, top-up, guild, gacha and the HUD is larger."]},
  {t:"imp", c:{th:"ภาษา",en:"Language"}, th:["แปลครบขึ้น","แปลเพิ่ม 104 ข้อความในทั้ง 8 ภาษา เช่น หน้าช่วยเหลือ บัญชี อุปกรณ์ กาชา และถังขยะ"], en:["More complete translations","104 more texts translated in all 8 languages, including help, account, device, gacha and the recycle bin."]}
 ]},
 {v:"1.1.396", date:"2026-11-27", items:[
  {t:"imp", c:{th:"หน้าจอ",en:"Screen"}, th:["พื้นหลังหน้าเลือกตัวละครใหม่","ภาพปราสาทยามค่ำคืนเต็มจอ ปราสาทอยู่กลางจอ"], en:["New character select background","A full-screen night castle picture with the castle in the middle."]}
 ]},
 {v:"1.1.395", date:"2026-11-27", items:[
  {t:"fix", c:{th:"PK",en:"PK"}, th:["ชื่อสีฟ้าเซฟไทม์ตรงกับเซิร์ฟ","ชื่อสีฟ้าหลังเข้าแมพ 10 วินาที นับตามเวลาที่เซิร์ฟแจ้ง ไม่ค้างสีฟ้านานเกินตอนคนเยอะ"], en:["Safe-time cyan names match the server","The 10-second cyan name after entering a map now follows the server's clock and no longer stays cyan too long in crowds."]}
 ]},
 {v:"1.1.394", date:"2026-11-27", items:[
  {t:"fix", c:{th:"แชท",en:"Chat"}, th:["แชทตรงกับ PC มากขึ้น","ซ่อนช่องใน ⚙ มีผลเฉพาะแท็บทั้งหมด ประกาศ GM ขึ้นในแท็บระบบ แชทพื้นที่เสีย 50,000 เหมือน PC กระซิบหาตัวเองไม่ได้ และแจ้งเตือนเมื่อพิมพ์เร็วเกิน 3 ข้อความใน 5 วินาที"], en:["Chat closer to the PC client","Hiding a channel in ⚙ affects only the All tab, GM notices appear under System, regional chat costs 50,000 like PC, no whispers to yourself, and a warning when sending more than 3 messages in 5 seconds."]}
 ]},
 {v:"1.1.393", date:"2026-11-27", items:[
  {t:"imp", c:{th:"หน้าจอ",en:"Screen"}, th:["ธงอยู่ระหว่างตราสถาบันกับชื่อ","ลำดับป้ายชื่อเป็น ตราสถาบัน - ธงชาติ - ชื่อ ธงสูงเท่าตราสถาบัน บอทก็มีธงด้วย"], en:["Flag between school mark and name","Name plates read school mark - flag - name, the flag as tall as the mark; bots show flags too."]}
 ]},
 {v:"1.1.392", date:"2026-11-27", items:[
  {t:"new", c:{th:"หน้าจอ",en:"Screen"}, th:["ธงประเทศหน้าชื่อ","ธงหน้าชื่อผู้เล่นตามภาษาที่แต่ละคนเลือกในแอป"], en:["Country flag by names","A flag in front of each player's name, from the language that player picked in the app."]}
 ]},
 {v:"1.1.391", date:"2026-11-26", items:[
  {t:"fix", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["แก้อาการค้างแวบในตลาด","คนไกลที่เปลี่ยนท่าใหม่ไม่ทำให้เกมค้างแล้ว และคนที่เพิ่งเดินเข้าจอจะสร้างตัวทีละขั้น ไม่ค้างทีเดียว"], en:["Fewer hitches in the market","Far players switching to a new pose no longer freeze the game, and players walking into view are built one step at a time."]}
 ]},
 {v:"1.1.390", date:"2026-11-26", items:[
  {t:"imp", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["ลดอาการกระตุกตอนคนโผล่เยอะ","ป้ายชื่อทยอยขึ้นแทนการค้างทีเดียวตอนเข้าตลาดหรือที่คนเยอะ ป้ายร้านค้าในตลาดไม่คำนวณซ้ำตอนกล้องนิ่ง"], en:["Fewer hitches when crowds appear","Name plates appear over a few frames instead of freezing when entering a crowded market, and shop signs do no work while the camera stands still."]}
 ]},
 {v:"1.1.389", date:"2026-11-26", items:[
  {t:"imp", c:{th:"หน้าจอ",en:"Screen"}, th:["มุมกล้องใกล้ขึ้น ป้ายชื่ออ่านง่ายขึ้น","ซูมออกได้สุด 12 เมตร ไอคอน MMR ใหญ่และคมขึ้น พื้นหลังป้ายชื่อเข้มขึ้น"], en:["Closer camera, clearer names","Zoom out to 12 m at most, a larger and sharper MMR icon, and darker name plates."]}
 ]},
 {v:"1.1.388", date:"2026-11-26", items:[
  {t:"new", c:{th:"กราฟิก",en:"Graphics"}, th:["ชุดกราฟิก \"แบบ PC\"","ภาพเรียบแบบแรน PC: ไม่มีเงาคนอื่น ไม่มีแสงเรือง/โพสต์ แสดงเต็มตัว 50 คนใกล้สุด FPS สูงสุดตามจอ"], en:["\"PC style\" graphics preset","A plain picture like the PC client: no other players' shadows, no glow or post effects, the nearest 50 players in full, the screen's top frame rate."]}
 ]},
 {v:"1.1.387", date:"2026-11-26", items:[
  {t:"imp", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["คนไกลวาดด้วยการ์ดจอ","มือถือ RAM 8 GB ขึ้นไป: คนที่อยู่ไกลในที่คนเยอะให้การ์ดจอขยับท่าเอง CPU เบาลง ภาพเหมือนเดิม"], en:["Far players drawn by the GPU","Phones with 8 GB+ RAM: far players in crowds are animated by the graphics chip, lighter on the CPU with the same look."]}
 ]},
 {v:"1.1.386", date:"2026-11-26", items:[
  {t:"new", c:{th:"กระเป๋า",en:"Bag"}, th:["ถังขยะรีไซเคิล","บัตรถังขยะมีปุ่มใช้แล้ว เปิดหน้าต่าง 5 ช่องแบบ PC เลือกไอเทมที่ทิ้งได้แล้วยืนยันลบ"], en:["Recycle bin","The trash card now has a use button and opens the PC-style 5-slot window: pick trashable items and confirm."]},
  {t:"fix", c:{th:"การเดิน",en:"Movement"}, th:["วิ่งเร็วแล้วไม่โดนดึงกลับ","ความเร็วที่แอปคุมไม่แกว่งแล้ว และระยะคลาดเล็กน้อยค่อยๆ เลื่อนเข้าแทนการกระตุก"], en:["No pull-back at high speed","The app keeps a steady speed and small corrections slide in instead of jumping."]},
  {t:"imp", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["ลื่นขึ้นตอนคนเยอะ","ไม่ลบรอยหยักซ้ำซ้อน และป้ายชื่อ/ป้ายร้านคำนวณตำแหน่งเร็วขึ้น ภาพเหมือนเดิม"], en:["Smoother in crowds","No double anti-aliasing, and name tags and shop signs are placed faster, same picture."]}
 ]},
 {v:"1.1.385", date:"2026-11-26", items:[
  {t:"imp", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["ลื่นขึ้นตอนคนเยอะ","คนที่เดินออกแล้วกลับเข้ามาโผล่ทันที รวมโมเดลคนไกลเร็วขึ้น และเอฟเฟกต์/ป้ายชื่อที่ซ่อนอยู่ใช้เครื่องน้อยลง"], en:["Smoother in crowds","Players walking back into view appear at once, far players merge faster, and hidden effects and name tags cost less."]},
  {t:"new", c:{th:"กราฟิก",en:"Graphics"}, th:["ปิดแสงเรืองตอนคนเยอะ","ตัวเลือกใหม่: เมื่อมีคน 150+ ปิดแสงเรืองและปรับสีชั่วคราวเพื่อให้ลื่นขึ้น (ค่าเริ่มต้นปิด)"], en:["Glow off in crowds","New option: with 150+ players around, glow and colour grading pause for a smoother game (off by default)."]}
 ]},
 {v:"1.1.384", date:"2026-11-26", items:[
  {t:"fix", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["ไม่กระตุกตอนคนเดิน/วิ่งเยอะ","ระบบท่าทางคนไกลไม่สร้างข้อมูลทุกคนใหม่ทุกครั้งที่มีคนเข้าออกระยะ และจำการจับคู่ท่าไว้ใช้ซ้ำ"], en:["No stutter when crowds walk or run","Far players' pose system no longer rebuilds everyone when someone comes or goes, and reuses each clip's bone match."]}
 ]},
 {v:"1.1.383", date:"2026-11-26", items:[
  {t:"fix", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["ไม่กระตุกตอนคนเดินเยอะ","งานจัดการฝูงชนแบ่งทำทีละส่วนทุกเฟรม แทนการทำทั้งหมดในเฟรมเดียว"], en:["No stutter when crowds walk","Crowd upkeep is spread over frames instead of landing in a single one."]},
  {t:"imp", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["ลื่นขึ้นในตลาด","คนและป้ายชื่อที่อยู่ไกลในที่คนเยอะอัปเดตทุก 2 เฟรม โดยยังเดินถึงที่ตรงเวลา"], en:["Smoother in the market","Far players and their name tags in crowds update every other frame and still arrive on time."]}
 ]},
 {v:"1.1.382", date:"2026-11-26", items:[
  {t:"imp", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["ภาพนิ่งกว่าบนจอ 120Hz","ถ้าเครื่องวิ่ง 120 FPS ไม่ไหว จะสลับจอเป็น 80Hz และวิ่ง 80 นิ่งทุกเฟรม แทนการสลับ 120/60 แล้วลอง 120 ใหม่เป็นระยะ"], en:["Steadier picture on 120 Hz screens","When a phone cannot hold 120 FPS it switches the screen to 80 Hz and runs an even 80 instead of jumping between 120 and 60, trying 120 again now and then."]},
  {t:"fix", c:{th:"หน้าจอ",en:"Screen"}, th:["ไม่กระตุกตอนเปิดหน้าต่าง","การเตรียมตัวอักษรทำเฉพาะตอนหน้าโหลดแมพ"], en:["No stutter when opening windows","Letters are prepared only behind the map loading screen."]}
 ]},
 {v:"1.1.381", date:"2026-11-26", items:[
  {t:"imp", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["FPS สูงขึ้นบนจอ 90/120Hz","เครื่องกลาง-แรงใช้ FPS สูงสุดตามจอเป็นค่าเริ่มต้น และตอนเครื่องอุ่นจะสลับจอไปโหมดที่รองรับ (เช่น 80Hz) แทนการตกไป 60"], en:["Higher FPS on 90/120 Hz screens","Mid and strong phones default to the screen's top frame rate, and when warm the screen moves to a rate it supports (such as 80 Hz) instead of dropping to 60."]},
  {t:"fix", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["ระบบลดภาระไม่ค้าง","ลดภาระอัตโนมัติและการจำกัด FPS กลับมาปกติเมื่อเครื่องไม่ร้อน และไม่ลดความละเอียดเองตอนหน้าโหลดแมพ"], en:["Load guard no longer sticks","Automatic load reduction and the FPS limit step back once the phone is not hot, and the loading screen no longer lowers resolution."]},
  {t:"fix", c:{th:"เข้าเกม",en:"Joining"}, th:["ไม่กระตุกหลังเข้าแมพ","โมเดลและท่าทางมอนเตรียมไว้ระหว่างหน้าโหลด"], en:["No stutter after entering a map","Monster models and animations are prepared during the loading screen."]},
  {t:"fix", c:{th:"หน้าจอ",en:"Screen"}, th:["ข้อความไม่ทำให้กระตุก","ตัวอักษรไทยเตรียมไว้ล่วงหน้า และการล้างหน่วยความจำหนักทำไม่เกินนาทีละครั้ง"], en:["Text no longer causes stutters","Thai letters are prepared in advance, and heavy memory cleanup runs at most once a minute."]},
  {t:"imp", c:{th:"กราฟิก",en:"Graphics"}, th:["เงาในที่คนเยอะ","เงาจริงถึง 24 เมตร คนที่ไกลกว่านั้นได้เงาวงกลม ทุกคนยังมีเงา"], en:["Shadows in crowds","Real shadows reach 24 m and players further away get round shadows, so everyone keeps a shadow."]}
 ]},
 {v:"1.1.380", date:"2026-11-26", items:[
  {t:"imp", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["เงาวงกลมสำหรับคนไกล","คนที่อยู่นอก 40 คนใกล้สุดมีเงากลมนุ่มใต้เท้า วาดรวมครั้งเดียว ไม่กินเครื่อง"], en:["Round shadows for far players","Players outside the nearest 40 get a soft round shadow under their feet, drawn all at once at almost no cost."]},
  {t:"imp", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["แมพเบาลง","ชิ้นส่วนแมพที่ใช้ลายเดียวกันวาดรวมกัน และของชิ้นเล็กที่อยู่หลังหมอกไม่ถูกวาด ภาพเหมือนเดิม"], en:["Lighter maps","Map pieces with the same texture are drawn together, and small objects hidden by the fog are skipped, with the same picture."]}
 ]},
 {v:"1.1.379", date:"2026-11-26", items:[
  {t:"imp", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["ลื่นขึ้นมากตอนคนเยอะ","วาดเงาเฉพาะ 40 คนที่ใกล้ที่สุด และรวมโมเดลคนไกลได้มากขึ้น FPS สูงขึ้นในเมืองและตอนตีบอส"], en:["Much smoother in crowds","Shadows are drawn for the 40 nearest players only and more far players are merged, for higher FPS in towns and boss fights."]},
  {t:"imp", c:{th:"กราฟิก",en:"Graphics"}, th:["วาดตัวละครเร็วขึ้น ภาพคมเหมือนเดิม","มือถือ RAM 8 GB ขึ้นไปรวมลายชุดของคนไกลเป็นแผ่นเดียว ลดงานวาดลงครึ่งหนึ่ง"], en:["Faster character drawing, same sharpness","Phones with 8 GB+ RAM combine far players' outfit textures into one, halving the draw work."]},
  {t:"fix", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["ท่าทางคนไกลไม่เริ่มใหม่ทุกเฟรม","แก้ท่ายืนของบางคนที่ถูกเริ่มใหม่ซ้ำๆ ทำให้เปลือง CPU"], en:["Far poses no longer restart every frame","Fixed idle animations that kept restarting and wasted CPU."]},
  {t:"fix", c:{th:"หน้าจอ",en:"Screen"}, th:["ปุ่มกดง่ายขึ้น","ปุ่มปิดของกาชา เติมเงิน และคลังเก็บของใหญ่ขึ้น ป้ายใต้ปุ่มฟลัด·เต้นและไมค์ไม่โดนแถบด้านล่างบัง"], en:["Easier buttons","Larger close buttons on gacha, top-up and storage, and the flood/dance and mic labels are no longer cut off by the bottom bar."]}
 ]},
 {v:"1.1.378", date:"2026-11-26", items:[
  {t:"fix", c:{th:"เข้าเกม",en:"Joining"}, th:["เห็นตัวละครทันทีหลังเข้าเกม","หน้าโหลดรอจนคนและมอนรอบตัวพร้อม พอเข้าแมพหรือวาร์ปจึงเห็นทุกคนเลย ไม่ค่อยๆ โผล่"], en:["Characters visible right away","The loading screen waits until nearby players and monsters are ready, so maps and warps no longer start empty."]},
  {t:"imp", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["คนโผล่ไม่สะดุด","ท่าทางพื้นฐานของทุกคลาสเตรียมไว้ตอนโหลด และเครื่องสเปกต่ำสร้างคนที่เพิ่งโผล่ทีละจังหวะ ไม่ค้าง"], en:["No hitch when players appear","Base animations of every class are prepared while loading, and low-end phones build arriving players gradually."]},
  {t:"imp", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["ลื่นขึ้นในตลาด","ป้ายร้านค้าใช้ CPU น้อยลง และท่าทางคนไกลคำนวณเร็วขึ้นด้วย Burst"], en:["Smoother in the market","Shop signs use less CPU and far players' poses are computed faster with Burst."]}
 ]},
 {v:"1.1.377", date:"2026-11-25", items:[
  {t:"imp", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["มือถือสเปกต่ำลื่นขึ้น","เครื่องสเปกต่ำเริ่มลดจำนวนคนที่วาดทันทีที่ FPS ตก และอัปเดตคนที่ซ่อนอยู่น้อยลง"], en:["Smoother on low-end phones","Low-end phones start limiting drawn players as soon as FPS drops, and hidden players update less often."]},
  {t:"imp", c:{th:"กราฟิก",en:"Graphics"}, th:["ตั้งค่าเบาสำหรับเครื่องสเปกต่ำ","เครื่องสเปกต่ำใช้ชุดเบา 30 FPS นิ่ง ปิดแสงชุดและเงาคนอื่น เห็นสกิลเฉพาะของเรา (ปรับขึ้นเองได้ในตั้งค่า)"], en:["Light settings for low-end phones","Low-end phones use a light set at a steady 30 FPS, other players' outfit effects and shadows off, own skills only (can be raised in Options)."]},
  {t:"imp", c:{th:"เซิร์ฟเวอร์",en:"Server"}, th:["เซิร์ฟตอบสนองไวขึ้น","เซิร์ฟประมวลผลเร็วขึ้นราว 2 เท่าตอนคนเยอะ ตีและใช้สกิลแล้วเห็นผลไวขึ้น"], en:["Faster server response","The server works about twice as fast in crowds, so hits and skills land sooner."]}
 ]},
 {v:"1.1.376", date:"2026-11-25", items:[
  {t:"fix", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["ท่าทางคนรอบตัวไม่กระตุก","ตอนมีคนเดินเข้ามาใกล้หรือถูกเลือกเป็นเป้า คนรอบข้างไม่สลับท่าเพี้ยนอีก"], en:["No pose glitches in crowds","Nearby players no longer jump to a wrong pose when someone walks up or is targeted."]},
  {t:"fix", c:{th:"ตลาด",en:"Market"}, th:["ชื่อร้านค้าปลอดภัย","ชื่อร้านค้าส่วนตัวแสดงตามตัวอักษร ใช้โค้ดตกแต่งบังจอคนอื่นไม่ได้"], en:["Safe stall titles","Private shop titles show as plain text and can no longer cover other players' screens."]},
  {t:"fix", c:{th:"กิลด์",en:"Guild"}, th:["คำขอเข้ากิลด์ปลอดภัยขึ้น","รับ/ปฏิเสธนับเฉพาะจากหัวกิลด์ที่ขอไป และไม่เด้งป็อปอัปซ้ำเมื่อขอซ้ำ"], en:["Safer guild requests","Accept/decline only counts from the master you asked, and repeated requests no longer spam popups."]},
  {t:"fix", c:{th:"บอส",en:"Boss"}, th:["บอสไม่ขึ้นผิดแมพ","หน้าต่างติดตามบอสโหมดตามบอสแสดงบอสตรงแมพเสมอ"], en:["Bosses on the right map","The boss tracker's by-boss view always lists bosses under the right map."]},
  {t:"fix", c:{th:"เกม",en:"Game"}, th:["เกมเสถียรขึ้น","กระเป๋าไม่หายจากจอเมื่อข้อมูลมาไม่ครบ ประกาศสงครามไม่หาย และไม่เข้าเกมซ้ำสองรอบ"], en:["More stable","Bag items no longer vanish on partial data, war notices are kept, and no double join."]},
  {t:"fix", c:{th:"หน้าจอ",en:"Screen"}, th:["ปุ่ม Back ฉลาดขึ้น","ไม่ไปปิดหน้าต่างข้างใต้ตอนหน้าตายหรือขาดการเชื่อมต่อ และใช้ได้ทุกภาษา"], en:["Smarter Back button","No longer closes hidden windows under the death or disconnect screen, and works in every language."]}
 ]},
 {v:"1.1.375", date:"2026-11-25", items:[
  {t:"imp", c:{th:"ความลื่น",en:"Performance"}, th:["ลื่นขึ้นตอนคนเยอะ","คำนวณท่าทางตัวละครรอบตัวด้วยหลายคอร์ และลดงานของผู้เล่นที่ยืนอยู่ไกล"], en:["Smoother in crowds","Nearby characters' poses are computed on several cores, and far idle players cost less."]},
  {t:"imp", c:{th:"กาชา",en:"Gacha"}, th:["กล่องกาชาโฉมใหม่","คาดทองเงาสะท้อนแสง และลายไม้วอลนัทสมจริงขึ้น"], en:["New gacha chest look","Polished reflective gold bands and realistic walnut wood."]},
  {t:"fix", c:{th:"เกม",en:"Game"}, th:["แอปเด้งปิดเอง","แก้สาเหตุแอปปิดตัวเองเมื่อมีตัวละครรอบตัวมาก"], en:["App closing itself","Fixed the cause of the app closing itself around many characters."]},
  {t:"imp", c:{th:"เมนู",en:"Menu"}, th:["เอาป็อกเด้งออก","ปิดปุ่มและเมนูป็อกเด้ง"], en:["Pok Deng removed","The Pok Deng button and menu entry are gone."]}
 ]},
 {v:"1.1.374", date:"2026-11-25", items:[
  {t:"new", c:{th:"เติมเงิน",en:"Top-up"}, th:["ประวัติเติมเงิน","ดูยอดเติมรวม พ้อยที่ได้ สถานะแต่ละรายการ และยอดโปรสะสม 1K/3K/4K/6K"], en:["Top-up history","Lifetime total, points received, each payment's status and the 1K/3K/4K/6K promo progress."]},
  {t:"fix", c:{th:"เกม",en:"Game"}, th:["แอปเด้งปิดเอง","แก้แอปปิดตัวเองระหว่างเล่นใน 1.1.373"], en:["App closing itself","Fixed the app closing itself in game on 1.1.373."]}
 ]},
 {v:"1.1.373", date:"2026-11-25", items:[
  {t:"new", c:{th:"กาชา",en:"Gacha"}, th:["กาชาเข็มขัดวิญญาณมังกร","ตู้ใหม่ในหมวดเข็มขัด แทนตู้ต่างหูเดิม"], en:["Dragon Spirit belt gacha","A new belt gacha replaces the old earring gachas."]},
  {t:"imp", c:{th:"ตลาด",en:"Market"}, th:["แลกเกลือ 7 สูตร","NPC แลกเกลือมีสูตรแลกกล่องเพิ่ม และย้ายมายืนที่ใหม่"], en:["Scale exchange: 7 recipes","The scale exchange NPC has more box recipes and a new spot."]},
  {t:"imp", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["ท่าทางคนไกลใช้หลายแกน CPU","ในที่คนเยอะ ท่ายืน/เดินของคนที่อยู่ไกลคำนวณพร้อมกันหลายแกน ลื่นขึ้น"], en:["Multi-core poses for far players","In crowds, far players' stand/walk poses are worked out on several CPU cores."]},
  {t:"fix", c:{th:"กาชา",en:"Gacha"}, th:["เอาตู้ที่ปิดออก","ตู้อาวุธอัคคีพิพากษาและตู้ต่างหูเอาออกจากหน้าต่างกาชา"], en:["Removed gachas","The Akkhi weapon gacha and the earring gachas are gone from the gacha window."]}
 ]},
 {v:"1.1.372", date:"2026-11-25", items:[
  {t:"new", c:{th:"กราฟิก",en:"Graphics"}, th:["กราฟิกสำเร็จรูป \"ลื่นสุด\"","เห็นทุกคนเต็มตัว ปิดเงา แสงเรือง ผลหลังภาพ และแสงชุดของคนอื่น (ของเรายังแสดง) ไม่จำกัด FPS"], en:["\"Smoothest\" preset","Everyone drawn in full; shadows, glow, post effects and other players' outfit effects off (yours stay); no FPS cap."]},
  {t:"new", c:{th:"กราฟิก",en:"Graphics"}, th:["สวิตช์แสงชุดของผู้เล่นอื่น","ปิดแสงชุด อาวุธ และออร่าของคนอื่นได้ ของเรายังแสดง"], en:["Other players' outfit effects switch","Turn off other players' outfit, weapon and aura effects; yours stay."]},
  {t:"imp", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["แสงชุดตีบวกเบาลง","แสงกระพริบของชุดตีบวกคำนวณบนการ์ดจอ ลดภาระ CPU ตอนคนเยอะ"], en:["Lighter grade glow","The enhancement glow pulse runs on the GPU, easing the CPU in crowds."]}
 ]},
 {v:"1.1.371", date:"2026-11-25", items:[
  {t:"imp", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["ผู้เล่นอื่นโผล่เร็วขึ้น","ตอนเข้าเกมหรือเข้าที่คนเยอะ ตัวละครคนอื่นปรากฏเร็วขึ้นหลายเท่า คนในจอมาก่อน"], en:["Other players appear faster","After joining or in crowds other players show up several times faster, on-screen ones first."]},
  {t:"imp", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["ไม่สร้างตัวที่ไม่แสดง","คนไกลที่เกินจำนวนผู้เล่นที่แสดง จะสร้างเมื่อมีที่ว่างหรือเข้ามาใกล้"], en:["No hidden builds","Far players beyond the shown limit are built only when there is room or they come closer."]}
 ]},
 {v:"1.1.370", date:"2026-11-25", items:[
  {t:"fix", c:{th:"เข้าเกม",en:"Joining"}, th:["ลองเข้าเกมใหม่อัตโนมัติ","ถ้าตัวละครยังค้างออนไลน์จากรอบก่อน แอปจะลองเข้าเกมให้อีกครั้งเอง"], en:["Automatic retry","If your character was still online from a previous session, the app tries again by itself."]},
  {t:"imp", c:{th:"หน้าจอ",en:"Screen"}, th:["ข้อความภาษาไทยล้วน","ข้อความเข้าเกม/ล็อกอินไม่สำเร็จไม่มีภาษาอังกฤษต่อท้ายแล้ว"], en:["Thai-only messages","Join and sign-in failure messages no longer carry English text."]}
 ]},
 {v:"1.1.369", date:"2026-11-25", items:[
  {t:"new", c:{th:"กิลด์",en:"Guild"}, th:["ป็อปอัปคำขอเข้ากิลด์","หัวกิลด์ได้ป็อปอัปทันทีทุกแมพ กดรับเข้ากิลด์หรือปฏิเสธได้เลย ผู้สมัครได้คำตอบทันที"], en:["Guild request popup","Guild masters get a popup on any map to accept or decline; applicants hear back at once."]},
  {t:"imp", c:{th:"กิลด์",en:"Guild"}, th:["เข้ากิลด์อัตโนมัติ","ถ้ารับแล้วแต่อยู่คนละที่ จะเชิญอัตโนมัติเมื่อเจอกันในแชนแนลเดียวกัน และผู้สมัครไม่ต้องกดยืนยันซ้ำ"], en:["Automatic join","If accepted while apart, the invite goes out automatically when you meet on the same channel, with no second confirm."]}
 ]},
 {v:"1.1.368", date:"2026-11-25", items:[
  {t:"imp", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["ลื่นขึ้นในที่คนเยอะ","เอฟเฟคชุดและท่าทางของคนที่อยู่ไกลอัปเดตน้อยลง คนขี่พาหนะใช้เครื่องน้อยลงมาก"], en:["Smoother in crowds","Outfit effects and poses of far players update less often; riders cost far less."]},
  {t:"fix", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["กระตุกเป็นจังหวะในตลาด","ไม่สะดุดตอนผู้เล่นจำนวนมากเปลี่ยนท่ายืนหรือโผล่กลับมาพร้อมกัน"], en:["Regular stutter in the market","No hitch when many players change stance or come back into view together."]},
  {t:"fix", c:{th:"ไอเท็มช็อป",en:"Item shop"}, th:["ตะกร้าล้างหลังซื้อ","ซื้อจากตะกร้าแล้วตะกร้าว่างทุกครั้ง"], en:["Cart empties after buying","Buying from the cart always empties it."]},
  {t:"fix", c:{th:"ไอเท็มช็อป",en:"Item shop"}, th:["หน้าต่างยืนยันไม่หาย","หน้าต่างยืนยัน ตะกร้า และของขวัญไม่ถูกหน้าร้านทับ"], en:["Confirm window stays","The confirm, cart and gift windows are no longer covered by the shop."]}
 ]},
 {v:"1.1.367", date:"2026-11-25", items:[
  {t:"new", c:{th:"พาหนะ",en:"Vehicles"}, th:["พาหนะใหม่ 2 คัน","Kawasaki Z800 และสิงโต Cabal ขี่ได้แล้ว พร้อมแอนิเมชันและเอฟเฟคไฟ/ล้อ"], en:["Two more vehicles","The Kawasaki Z800 and the Cabal lion can be ridden, with their animations and light/wheel effects."]},
  {t:"new", c:{th:"GM",en:"GM"}, th:["ป้าย [GM]","GM มีป้าย [GM] สีเขียวหน้าชื่อ และเห็นชื่อตัวเองเป็นสีเขียวเหมือน PC"], en:["[GM] tag","GMs carry a green [GM] tag before their name and see their own name in green, as on PC."]},
  {t:"fix", c:{th:"กิลด์",en:"Guild"}, th:["จำนวนสมาชิกสูงสุด","หน้าต่างกิลด์แสดงสมาชิกสูงสุด 24 คนตรงกับเซิร์ฟเวอร์"], en:["Member limit","The guild window shows the real limit of 24 members."]},
  {t:"fix", c:{th:"หน้าต่าง",en:"Windows"}, th:["โมเดลไม่กระพริบ","หน้าต่างสัตว์เลี้ยงและพาหนะไม่กระพริบอีก"], en:["No more blinking models","The pet and vehicle windows no longer blink."]},
  {t:"fix", c:{th:"พาหนะ",en:"Vehicles"}, th:["เท็กซ์เจอร์ Ninja 2017","เติมเท็กซ์เจอร์ตัวถังที่ขาด"], en:["Ninja 2017 texture","Added a missing body texture."]}
 ]},
 {v:"1.1.366", date:"2026-11-24", items:[
  {t:"new", c:{th:"เซิร์ฟเวอร์",en:"Server"}, th:["เปิดเซิร์ฟทดสอบรอบใหม่","ล้างข้อมูลทั้งหมด ทุกคนเริ่มใหม่พร้อมกัน อันดับโลกและกิลด์เริ่มจากศูนย์"], en:["Fresh test server","All data was reset: everyone starts together, and the world ranking and guilds start from zero."]},
  {t:"imp", c:{th:"ตัวละคร",en:"Character"}, th:["เลเวลสูงสุด 195","เลเวลสูงสุดกลับมาเป็น 195"], en:["Level cap 195","The level cap is back to 195."]},
  {t:"imp", c:{th:"บัญชี",en:"Account"}, th:["ปุ่มเว็บไซต์","ปุ่มในหน้าบัญชีเปิดหน้าเว็บหลักของเกม"], en:["Website button","The button on the Account page opens the game's website."]}
 ]},
 {v:"1.1.365", date:"2026-11-24", items:[
  {t:"new", c:{th:"บัญชี",en:"Account"}, th:["หน้าบัญชีใหม่","โปรไฟล์ตัวละคร เซิร์ฟเวอร์/แชนแนลจริง ความปลอดภัยบัญชี ช่วยเหลือ และข้อมูลมือถือพร้อมสเปกแนะนำ"], en:["New Account page","Character profile, real server/channel, account security, help, and your phone's details with recommended specs."]},
  {t:"new", c:{th:"บัตร",en:"Cards"}, th:["ทรงผมครบตาม PC","บัตรเปลี่ยนทรงผมเลือกได้ทุกแบบเหมือน PC (9–25 แบบตามอาชีพ)"], en:["Every hair style from PC","The hair style card offers every style the PC has (9–25 by class)."]},
  {t:"imp", c:{th:"ไอเท็มช็อป",en:"Item shop"}, th:["ตะกร้าเลื่อนดูได้","ตะกร้าแสดง 5 แถว ที่เหลือเลื่อนดูและเอาออกได้ปกติ"], en:["Scrolling cart","The cart shows 5 rows; the rest scroll and can be removed as usual."]},
  {t:"imp", c:{th:"บัตร",en:"Cards"}, th:["หน้าต่างบัตรคิลฟีด","กรอบพอดีป้าย หน้าต่างกระชับ 6 แบบเรียงลงตัว"], en:["Kill feed card window","Frames hug the banners and the six styles fit neatly."]},
  {t:"imp", c:{th:"สัตว์เลี้ยง",en:"Pets"}, th:["เลือกสกิลและบัตรสกิลคู่","มีไอคอนหน้าชื่อ ปุ่มจัดใหม่ และบอกสกิลที่ใช้อยู่"], en:["Pet skill and dual-skill pickers","Icons before names, tidier buttons, and the skill in use is marked."]},
  {t:"fix", c:{th:"หน้าจอ",en:"Screen"}, th:["วงกลมเหลืองในหน้าต่าง","เอาวงกลมสีเหลืองออกจากหน้าต่างบัตรและหน้าต่างแจ้งผล"], en:["Yellow circles","Removed the yellow circles from card and result windows."]}
 ]},
 {v:"1.1.364", date:"2026-11-24", items:[
  {t:"new", c:{th:"บัญชี",en:"Account"}, th:["เข้าเกมด้วยบัญชี Google","กดปุ่ม Google ครั้งแรก เกมสร้างไอดีให้อัตโนมัติ ครั้งต่อไปกดปุ่มเดิมก็เข้าบัญชีเดิม เปลี่ยนเครื่องก็ไม่หาย"], en:["Sign in with Google","The first tap on Google creates your game ID; the same button returns to it every time, even on a new phone."]},
  {t:"new", c:{th:"บัญชี",en:"Account"}, th:["ตั้งไอดี / เชื่อม Google ในหน้าตั้งค่า","บัญชีที่เข้าด้วย Google ตั้งไอดีและรหัสผ่านไว้ใช้ทาง PC ได้ ไอดีเดิมก็เชื่อมกับ Google ได้ที่ ตั้งค่า > บัญชี"], en:["Set ID / link Google in Settings","Google accounts can set their own ID and password for the PC client; existing IDs can link Google in Settings > Account."]},
  {t:"imp", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["เครื่องสเปกต่ำในที่คนเยอะ","เมื่อระบบลดภาระทำงานหนัก จะแสดงเต็มตัวเฉพาะผู้เล่นใกล้ๆ ชั่วคราว (ต่ำสุด 20 คน) คนที่ไกลเห็นแค่ชื่อ"], en:["Low-end phones in crowds","When the load guard works hard, only nearby players are drawn in full for a while (at least 20); farther players show their name."]}
 ]},
 {v:"1.1.363", date:"2026-11-24", items:[
  {t:"new", c:{th:"หน้าจอ",en:"Screen"}, th:["ขนาด UI 60–150%","แถบเลื่อนทีละ 10% ใน ตั้งค่า > อินเตอร์เฟซ"], en:["UI size 60–150%","A slider in 10% steps in Settings > Interface."]},
  {t:"imp", c:{th:"หน้าจอ",en:"Screen"}, th:["หน้าต่างพอดีจอทุกขนาด","เมนู กระเป๋า ตัวละคร สกิล ตั้งค่า และหน้าต่าง NPC ใช้ขนาดที่พอดีจอเสมอ ปุ่มบนจอขยายได้โดยไม่ทับแถบภารกิจ"], en:["Windows fit at every size","Menu, bag, character, skills, settings and NPC windows always fit the screen; on-screen buttons grow without covering the quest list."]},
  {t:"imp", c:{th:"การควบคุม",en:"Controls"}, th:["พื้นที่จอยสติ๊กเล็กลง","พื้นที่แตะเพื่อเดินไม่ล้นมากลางจอและไม่ชนแถบภารกิจ"], en:["Smaller joystick area","The touch area for walking no longer reaches the middle of the screen or the quest list."]},
  {t:"imp", c:{th:"กราฟิก",en:"Graphics"}, th:["ตัวละครคมขึ้น","เท็กซ์เจอร์ตัวละครและชุดคมขึ้นบนเครื่องแรง"], en:["Sharper characters","Sharper character and outfit textures on strong phones."]},
  {t:"fix", c:{th:"หน้าจอ",en:"Screen"}, th:["ข้อความถูกตัด","ข้อความเงื่อนไขในหน้าสกิล และปุ่ม รายละเอียด ในแถบภารกิจแสดงครบ"], en:["Cut-off text","The skill requirements text and the quest list Details button show in full."]},
  {t:"fix", c:{th:"หน้าจอ",en:"Screen"}, th:["คู่มือผู้เล่นใหม่","กรอบไฮไลต์ชี้ปุ่มตรงตำแหน่งทุกขนาด UI"], en:["New-player guide","The highlight frame points at the right button at every UI size."]},
  {t:"fix", c:{th:"หน้าจอ",en:"Screen"}, th:["หน้าต่างสกิลบนจอ 16:9","หน้าต่างช่องลัดสกิลไม่ล้นขอบขวาบนจอ 16:9"], en:["Skill window on 16:9","The skill slot window no longer runs off the right edge on 16:9 screens."]}
 ]},
 {v:"1.1.362", date:"2026-11-23", items:[
  {t:"imp", c:{th:"กราฟิก",en:"Graphics"}, th:["ภาพคมในที่คนเยอะ","เครื่องแรงลดความละเอียดได้ไม่ต่ำกว่า 80% และไม่ปิดการลบขอบหยักกับแสงฟุ้ง"], en:["Sharp picture in crowds","Strong phones never drop below 80% resolution and keep anti-aliasing and bloom."]}
 ]},
 {v:"1.1.361", items:[
  {t:"fix", c:{th:"หน้าจอ",en:"Screen"}, th:["ไอคอนหน้าต่างเป้าหมาย","ไอคอนในแถบเป้าหมายกลับมาขนาดปกติ"], en:["Target window icons","Icons in the target bar are back to their normal size."]}
 ]},
 {v:"1.1.360", items:[
  {t:"new", c:{th:"การควบคุม",en:"Controls"}, th:["จอยตามนิ้ว","แตะตรงไหนในพื้นที่ด้านซ้าย จอยสติ๊กจะขึ้นใต้นิ้วทันที"], en:["Floating joystick","Touch anywhere in the left area and the joystick appears under your finger."]},
  {t:"imp", c:{th:"หน้าจอ",en:"Screen"}, th:["แถบเป้าหมาย","ขยับลงมา กว้างขึ้น ตัวหนังสือครบ ไอคอนสี่เหลี่ยมเต็มรูป"], en:["Target bar","Moved lower and wider, with full labels and square icons."]},
  {t:"imp", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["กระตุกน้อยลงหลังอัปเดต","ข้อมูลเตรียมกราฟิกถูกเก็บข้ามเวอร์ชัน และเอฟเฟกต์ที่ใช้บ่อยถูกเตรียมไว้ตอนโหลด"], en:["Fewer hitches after updates","Graphics warm-up data now carries over between versions and common effects are prepared while loading."]},
  {t:"fix", c:{th:"ดวล",en:"Duel"}, th:["หน้าตายหลังดวล","จบการดวลแล้วไม่ขึ้นหน้าต่างตายผิดๆ"], en:["Death panel after a duel","The death panel no longer appears wrongly when a duel ends."]}
 ]},
 {v:"1.1.359", items:[
  {t:"imp", c:{th:"กราฟิก",en:"Graphics"}, th:["แมพสว่างขึ้น","ทุกแมพสว่างขึ้นอีกระดับ"], en:["Brighter maps","Every map is a step brighter."]}
 ]},
 {v:"1.1.358", items:[
  {t:"new", c:{th:"ดวล",en:"Duel"}, th:["ท่าทางจบการดวล","ผู้ชนะชูมือ ผู้แพ้ก้มหัว แบบเดียวกับ PC"], en:["Duel end poses","The winner raises a hand and the loser bows, as on PC."]}
 ]},
 {v:"1.1.357", items:[
  {t:"imp", c:{th:"คลัง",en:"Locker"}, th:["ช่องคลังเท่ากระเป๋า","ช่องคลังขนาดเท่ากระเป๋า 5 แถวต่อหน้า มีปุ่มเปลี่ยนหน้า"], en:["Locker cells like the bag","Locker cells match the bag, 5 rows per page with page buttons."]},
  {t:"imp", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["ลื่นขึ้นในที่คนเยอะ","ลดงานต่อเฟรมของชุดและเอฟเฟกต์ตัวละคร ป้ายชื่อ และป้ายร้านค้า"], en:["Smoother in crowds","Less work per frame for outfits, character effects, name tags and shop signs."]},
  {t:"new", c:{th:"ประสิทธิภาพ",en:"Performance"}, th:["ลดภาระระดับ 3","เมื่อ FPS ต่ำมากต่อเนื่อง เกมลดภาระเพิ่มอีกขั้นอัตโนมัติ"], en:["Load guard step 3","When FPS stays very low, the game steps down one more level by itself."]}
 ]},
 {v:"1.1.356", items:[
  {t:"new", c:{th:"กระเป๋า & คลัง",en:"Bag & Locker"}, th:["ลากวางระหว่างกระเป๋ากับคลัง","จิ้มค้างแล้วลากไอเทมไปวางที่ช่องที่ต้องการ"], en:["Drag between bag and locker","Press and drag an item to the cell you want."]},
  {t:"new", c:{th:"กระเป๋า & คลัง",en:"Bag & Locker"}, th:["ลากใส่ช่องสวมใส่","ลากของจากกระเป๋าไปช่องสวมใส่ หรือลากของที่ใส่อยู่กลับเข้ากระเป๋า"], en:["Drag to equipment","Drag from the bag onto equipment slots, or a worn item back to the bag."]},
  {t:"new", c:{th:"กระเป๋า & คลัง",en:"Bag & Locker"}, th:["ย้ายในคลัง","ย้ายของในคลังและข้ามแท็บคลังได้"], en:["Move inside the locker","Move items within the locker and across locker tabs."]},
  {t:"new", c:{th:"ตีบวก",en:"Forge"}, th:["ลากของเข้าช่องตีบวก","ลากไอเทมใส่หน้าต่างตีบวกได้เลย"], en:["Drag into the Forge","Drag an item straight into the Forge window."]},
  {t:"imp", c:{th:"สงคราม",en:"War"}, th:["หน้าต่างสงครามและป้ายประกาศ","หัวหน้าต่างสงครามจัดใหม่ ป้ายประกาศกิจกรรมเปลี่ยนเป็นแบบการ์ด"], en:["War window and banners","The war window header is redone and event banners use the card style."]}
 ]},
 {v:"1.1.355", items:[
  {t:"fix", c:{th:"เอฟเฟกต์",en:"Effects"}, th:["เอฟเฟกต์ไฟ","เอฟเฟกต์ธาตุไฟใช้ภาพที่ถูกต้องเหมือน PC"], en:["Fire effects","Fire element effects use the correct textures, as on PC."]}
 ]},
 {v:"1.1.354", items:[
  {t:"fix", c:{th:"ไอเทม",en:"Items"}, th:["บัตรปรับเรทและบัตรคลัง","กดใช้แล้วหน้าต่างเปิดขึ้นตามปกติ"], en:["Rate card and locker card","Using them opens their windows as expected."]}
 ]},
 {v:"1.1.353", items:[
  {t:"imp", c:{th:"เอฟเฟกต์",en:"Effects"}, th:["เอฟเฟกต์โจมตีระยะประชิด","เอฟเฟกต์ตอนโจมตีเกิดที่จุดฟันของผู้โจมตี"], en:["Melee hit effects","Hit effects appear at the attacker's strike point."]},
  {t:"imp", c:{th:"ออโต้",en:"AUTO"}, th:["ปุ่มบันทึกในตั้งค่าออโต้","ปุ่มเริ่ม/หยุดเปลี่ยนเป็นปุ่มบันทึก"], en:["Save button in AUTO settings","The start/stop button is now a Save button."]},
  {t:"fix", c:{th:"หน้าจอ",en:"Screen"}, th:["หมุนจอ","หมุนโทรศัพท์แล้ว UI ด้านขวาชิดขอบจอทั้งสองฝั่ง"], en:["Rotating the phone","After rotating, the right-hand UI sits flush with the edge on either side."]},
  {t:"imp", c:{th:"กราฟิก",en:"Graphics"}, th:["แมพสว่างขึ้น","ทุกแมพสว่างขึ้นเล็กน้อย"], en:["Brighter maps","Every map is slightly brighter."]}
 ]},
 {v:"1.1.352", items:[
  {t:"new", c:{th:"ไอเทม",en:"Items"}, th:["หน้าต่างบัตรปรับเรท","ใช้บัตรปรับเรทเปิดหน้าต่างปรับค่าไอเทมได้จากกระเป๋า"], en:["Rate card window","The rate card opens the item remodel window from the bag."]}
 ]}
];
