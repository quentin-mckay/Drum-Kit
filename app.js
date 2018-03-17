
// ===== Play <audio> depending on which key pressed =====
window.addEventListener('keypress', playSound)

function playSound(e) {
  // e.key  is  "a" or "s" etc.  (e.keyCode is deprecated and changes between keydown and keypress)
  const audio = document.querySelector(`audio[data-key="${e.key}"]`)
  const key = document.querySelector(`.key[data-key="${e.key}"]`)
  
  if (!audio) return;
  audio.currentTime = 0  // rewind to start  (otherwise audio.play() doesn't really do anything)
  audio.play()

  key.classList.add('playing')  // add momentary '.playing' css styles
  // jQuery would be key.addClass('playing')
  // also have vanilla key.classList.remove('playing')
  // also have vanilla key.classList.toggle('playing')
}


// ===== Remove Transition class on transition end event =====
const keys = document.querySelectorAll('.key')

keys.forEach(key => key.addEventListener('transitionend', removeTransition))  

function removeTransition(e) {
  // we get a transitionend event for EVERY property that transitions
  // so we pick the longest one (in this case they are all the same)
  // and abort the function if it's not the longest one

  // if (e.propertyName !== 'transform') return;  
  // BUG: it means the '.playing' class get stuck (i think because they're all at the same time)
  this.classList.remove('playing')  // this will refer to the <div class="key>" transitioning
}
