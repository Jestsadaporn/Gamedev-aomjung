export class Input {
 constructor(){this.keys=new Set();this.pointers=new Map();this.pressed=new Set();this.map={w:'up',arrowup:'up',s:'down',arrowdown:'down',a:'left',arrowleft:'left',d:'right',arrowright:'right',j:'attack',k:'dodge',e:'interact',enter:'confirm',escape:'pause'};this.down=e=>{const a=this.map[e.key.toLowerCase()];if(!a)return;e.preventDefault();if(!this.keys.has(a))this.pressed.add(a);this.keys.add(a)};this.up=e=>{const a=this.map[e.key.toLowerCase()];if(a){e.preventDefault();this.keys.delete(a)}};window.addEventListener('keydown',this.down);window.addEventListener('keyup',this.up);window.addEventListener('blur',()=>this.clear());document.addEventListener('visibilitychange',()=>{if(document.hidden)this.clear()});document.querySelectorAll('[data-action]').forEach(b=>{b.addEventListener('pointerdown',e=>{e.preventDefault();b.setPointerCapture(e.pointerId);this.pointers.set(e.pointerId,b.dataset.action);this.pressed.add(b.dataset.action)});['pointerup','pointercancel','lostpointercapture'].forEach(ev=>b.addEventListener(ev,e=>this.pointers.delete(e.pointerId)))}); }
 has(a){return this.keys.has(a)||[...this.pointers.values()].includes(a)}
 take(a){const has=this.pressed.has(a);this.pressed.delete(a);return has}
 clear(){this.keys.clear();this.pointers.clear();this.pressed.clear()}
 endFrame(){this.pressed.clear()}
}
