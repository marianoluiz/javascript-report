// DOM manipulation

// Reveal Event



const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content')

function revealContent() { 

  if (hiddenContent.classList.contains('reveal-btn')) { 
  hiddenContent.classList.remove('reveal-btn');
}  else {
  hiddenContent.classList.add('reveal-btn');
 }
}
//basically chinecheck niya kung may class na reveal-btn (display: block) yung hidden content at tatangalin niya ito if meron. so magiging hidden sha.

//if wala naman, lalagyan niya ng (display: block) at magshshow up na yung hidden content.
revealBtn.addEventListener('click', revealContent);