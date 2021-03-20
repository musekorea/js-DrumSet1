const drumSound = new Audio();

/* const snare = document.querySelector('.snare');
const kick = document.querySelector('.kick');
const hh = document.querySelector('.hh');
const tom1 = document.querySelector('.tom1');
const tom2 = document.querySelector('.tom2');
const tom3 = document.querySelector('.tom3');
const crash = document.querySelector('.crash');
const ride = document.querySelector('.ride'); */
const drumset = document.querySelectorAll('.drum');

/* function hitReset() {
  drumset.forEach((drum) => {
    drum.classList.remove('hit');
  });
} */

drumset.forEach((drum) => {
  drum.addEventListener('click', (event) => {
    event.target.classList.toggle('hit');
    event.target.classList.add('rehit');
    console.log(event.target.id);
    const drumName = event.target.id;
    const drumSrc = `audio/${drumName}.wav`;
    stroke(drumSrc);
  });
});

function stroke(target, name) {
  drumSound.src = target;
  drumSound.play();
  drumSound.currentTime = 0;
  //hitReset();
}
