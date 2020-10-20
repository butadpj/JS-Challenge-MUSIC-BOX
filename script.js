/*! keydrown - v1.2.7 - 2018-12-19 - http://jeremyckahn.github.com/keydrown */
/*! keydrown - v1.2.7 - 2018-12-19 - http://jeremyckahn.github.com/keydrown */

!function(a){var f=function(){var n={forEach:function(n,e){var t;for(t in n)n.hasOwnProperty(t)&&e(n[t],t)}},e=n.forEach;n.getTranspose=function(n){var t={};return e(n,function(n,e){t[n]=e}),t},n.indexOf=function(n,e){if(n.indexOf)return n.indexOf(e);var t,o=n.length;for(t=0;t<o;t++)if(n[t]===e)return t;return-1};var o=n.indexOf;return n.pushUnique=function(n,e){return-1===o(n,e)&&(n.push(e),!0)},n.removeValue=function(n,e){var t=o(n,e);if(-1!==t)return n.splice(t,1)[0]},n.documentOn=function(n,e){a.addEventListener?a.addEventListener(n,e,!1):document.attachEvent&&document.attachEvent("on"+n,e)},n.requestAnimationFrame=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||function(n){a.setTimeout(n,1e3/60)},n.noop=function(){},n}(),n={ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,ENTER:13,SHIFT:16,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,BACKSPACE:8,DELETE:46,TAB:9,TILDE:192},p=f.getTranspose(n),e=[],t=function(){"use strict";function n(n){this.keyCode=n,this.cachedKeypressEvent=null}function t(n,e,t,o){t?n[e]=t:n[e](o)}return n.prototype._downHandler=f.noop,n.prototype._upHandler=f.noop,n.prototype._pressHandler=f.noop,n.prototype.isDown=function(){return-1!==f.indexOf(e,this.keyCode)},n.prototype.down=function(n){t(this,"_downHandler",n,this.cachedKeypressEvent)},n.prototype.up=function(n,e){t(this,"_upHandler",n,e)},n.prototype.press=function(n,e){this.cachedKeypressEvent=e,t(this,"_pressHandler",n,e)},n.prototype.unbindDown=function(){this._downHandler=f.noop},n.prototype.unbindUp=function(){this._upHandler=f.noop},n.prototype.unbindPress=function(){this._pressHandler=f.noop},n}(),o=function(i){"use strict";var c={};c.Key=t;var o=!1,r=Date.now?Date.now:function(){return+new Date},u=r();return c.tick=function(){var n,e=i.length;for(n=0;n<e;n++){var t=i[n],o=p[t];o&&c[o].down()}},c.run=function(n){o=!0;var e=r(),t=e-u;f.requestAnimationFrame.call(a,function(){o&&(c.run(n),n(t,e))}),u=e},c.stop=function(){o=!1},f.forEach(n,function(n,e){c[e]=new t(n)}),f.documentOn("keydown",function(n){var e=n.keyCode,t=p[e],o=f.pushUnique(i,e),r=c[t];if(r){var u=r.cachedKeypressEvent||{};(u.ctrlKey||u.shiftKey||u.metaKey)&&(o=!0),o&&r.press(null,n)}}),f.documentOn("keyup",function(n){var e=f.removeValue(i,n.keyCode),t=p[e];t&&c[t].up(null,n)}),f.documentOn("blur",function(n){f.forEach(i,function(n){var e=p[n];e&&c[e].up()}),i.length=0}),c}(e);"object"==typeof module&&"object"==typeof module.exports?module.exports=o:"function"==typeof define&&define.amd?define(function(){return o}):a.kd=o}(window);
// END OF KEYDROWN


const boxes = document.querySelectorAll('.box')
const notes = document.querySelector('.notes').children

for (let i = 0; i < notes.length; i++) {
    notes[i].volume = 0.2
}

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mousedown', ()=>{
        let style = window.getComputedStyle(boxes[i]).backgroundColor
        let opacity = `, 0.5)`
        let newStyle = style.substring(0, style.length-1) + opacity
        boxes[i].style.backgroundColor = newStyle 
        notes[i].play()
        notes[i].currentTime = 0
    })
}

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseup', ()=>{
        let style = window.getComputedStyle(boxes[i]).backgroundColor
        let opacity = `1)`
        let newStyle = style.substring(0, style.length-4) + opacity
        boxes[i].style.backgroundColor = newStyle 
        setTimeout(function(){notes[i].pause()}, 800) 
        setTimeout(function(){notes[i].currentTime = 0}, 800) 

    })
}


kd.ONE.down(function(){
    let style = window.getComputedStyle(boxes[0]).backgroundColor
    let opacity = `, 0.5)`
    let newStyle = style.substring(0, style.length-1) + opacity
    boxes[0].style.backgroundColor = newStyle 
    notes[0].play()
})

kd.ONE.up(function(){
    let style = window.getComputedStyle(boxes[0]).backgroundColor
    let opacity = `1)`
    let newStyle = style.substring(0, style.length-4) + opacity
    boxes[0].style.backgroundColor = newStyle 
    notes[0].pause()
    notes[0].currentTime = 0
})

kd.TWO.down(function(){
    let style = window.getComputedStyle(boxes[1]).backgroundColor
    let opacity = `, 0.5)`
    let newStyle = style.substring(0, style.length-1) + opacity
    boxes[1].style.backgroundColor = newStyle 
    notes[1].play()
})

kd.TWO.up(function(){
    let style = window.getComputedStyle(boxes[1]).backgroundColor
    let opacity = `1)`
    let newStyle = style.substring(0, style.length-4) + opacity
    boxes[1].style.backgroundColor = newStyle 
    notes[1].pause()
    notes[1].currentTime = 0
})

kd.THREE.down(function(){
    let style = window.getComputedStyle(boxes[2]).backgroundColor
    let opacity = `, 0.5)`
    let newStyle = style.substring(0, style.length-1) + opacity
    boxes[2].style.backgroundColor = newStyle 
    notes[2].play()
})

kd.THREE.up(function(){
    let style = window.getComputedStyle(boxes[2]).backgroundColor
    let opacity = `1)`
    let newStyle = style.substring(0, style.length-4) + opacity
    boxes[2].style.backgroundColor = newStyle 
    notes[2].pause()
    notes[2].currentTime = 0
})

kd.FOUR.down(function(){
    let style = window.getComputedStyle(boxes[3]).backgroundColor
    let opacity = `, 0.5)`
    let newStyle = style.substring(0, style.length-1) + opacity
    boxes[3].style.backgroundColor = newStyle 
    notes[3].play()
})

kd.FOUR.up(function(){
    let style = window.getComputedStyle(boxes[3]).backgroundColor
    let opacity = `1)`
    let newStyle = style.substring(0, style.length-4) + opacity
    boxes[3].style.backgroundColor = newStyle 
    notes[3].pause()
    notes[3].currentTime = 0
})

kd.FIVE.down(function(){
    let style = window.getComputedStyle(boxes[4]).backgroundColor
    let opacity = `, 0.5)`
    let newStyle = style.substring(0, style.length-1) + opacity
    boxes[4].style.backgroundColor = newStyle 
    notes[4].play()
})

kd.FIVE.up(function(){
    let style = window.getComputedStyle(boxes[4]).backgroundColor
    let opacity = `1)`
    let newStyle = style.substring(0, style.length-4) + opacity
    boxes[4].style.backgroundColor = newStyle 
    notes[4].pause()
    notes[4].currentTime = 0
})

kd.SIX.down(function(){
    let style = window.getComputedStyle(boxes[5]).backgroundColor
    let opacity = `, 0.5)`
    let newStyle = style.substring(0, style.length-1) + opacity
    boxes[5].style.backgroundColor = newStyle 
    notes[5].play()
})

kd.SIX.up(function(){
    let style = window.getComputedStyle(boxes[5]).backgroundColor
    let opacity = `1)`
    let newStyle = style.substring(0, style.length-4) + opacity
    boxes[5].style.backgroundColor = newStyle 
    notes[5].pause()
    notes[5].currentTime = 0
})

kd.SEVEN.down(function(){
    let style = window.getComputedStyle(boxes[6]).backgroundColor
    let opacity = `, 0.5)`
    let newStyle = style.substring(0, style.length-1) + opacity
    boxes[6].style.backgroundColor = newStyle 
    notes[6].play()
})

kd.SEVEN.up(function(){
    let style = window.getComputedStyle(boxes[1]).backgroundColor
    let opacity = `1)`
    let newStyle = style.substring(0, style.length-4) + opacity
    boxes[6].style.backgroundColor = newStyle 
    notes[6].pause()
    notes[6].currentTime = 0
})

kd.run(function () {
    kd.tick();
});

