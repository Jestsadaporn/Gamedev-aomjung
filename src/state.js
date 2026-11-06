export const initialState = () => ({ mode:'Exploring', previous:'Exploring', hp:3, maxHp:3, quest:'meet', outfit:'leader', enemyHp:3, defeated:false });
export const objective = s => ({meet:'ไปคุยกับเพื่อนใกล้มอเตอร์ไซค์ [E]',dress:'ไปที่ตู้เสื้อผ้าแล้วเลือกชุด [E]',fight:'ไปยังสนามฝึกทางขวา แล้วเอาชนะเงาปริศนา',return:'กลับไปคุยกับเพื่อนใกล้มอเตอร์ไซค์ [E]',done:'ภารกิจสำเร็จ'})[s.quest];
export const canMove = s => s.mode === 'Exploring' || s.mode === 'Combat';
