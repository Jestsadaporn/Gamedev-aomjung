# Sprint 1 — รายงานทีม (6 พ.ย. 2569, Asia/Bangkok)

Producer: ขอบเขต top-down, 2 ชุด, ศัตรู 1 แบบ และแนวนอนยังเป็น Proposed; กันระบุ iPhone ใช้ Google (สมมติ Chrome) และให้ทีมออกแบบส่วนที่เหลือ เวลาส่ง รุ่นเครื่อง และข้อความส่วนตัวยังไม่ทราบ

Designer → Developer/QA: ดู MINI_GDD.md และ CONTENT_AND_ASSETS.md; เนื้อเรื่องและภาพเป็น placeholder

Developer → QA: รุ่น 0.1 เป็น vertical slice ฉากเดียว: คุย เลือกชุด สู้ แพ้ลองใหม่ กลับคุยและจบ; ไม่ใช่ประสบการณ์ 15 นาที และยังไม่มี save/เสียง ระบบภาพชั่วคราวไม่มี animation เต็มรูปแบบ

QA: ยังไม่มีหลักฐานทดสอบเส้นทางจบบนอุปกรณ์จริง, iPhone Chrome หรือ URL สาธารณะ ทั้งหมด Untested; ยังไม่มีเวลา playtest จริง ห้ามถือว่า viewport จำลองแทนมือถือจริง

Backlog: PB01 In progress (ขอบเขตเสนอและเครื่องหลักยังไม่ครบ); PB02 In progress; PB03–07 In progress; PB08 Todo/Should; PB09–12 Todo. ไม่ระบุ Done ก่อนมีหลักฐาน

ก่อนส่ง: ยืนยันข้อความฉากจบ สิทธิ์และภาพสุดท้าย, ทดสอบ build จริงบนคอมและ iPhone Chrome, จับเวลา, แก้ critical/high, deploy และตรวจ URL จริง, เก็บ build สำรองและวิธี rollback

## ตรวจโดย Developer
- `npm install` สำเร็จ และ `npm run build` ผ่านด้วย Vite 7.3.7; bundle หลักประมาณ 1.22 MB ก่อน gzip (336 kB หลัง gzip) พร้อม warning เรื่องขนาด chunk
- ตรวจ state พื้นฐานด้วย Node ผ่าน; ยังไม่ได้ smoke test เกมใน browser หรือเล่นจนจบ จึงยังไม่อ้างว่าเส้นทางทำงานครบจริง
- ไม่ได้ทดสอบ iPhone จริง ภาษาไทยบนหน้าจอจริง หรือ public URL; ยังไม่พร้อมส่ง
