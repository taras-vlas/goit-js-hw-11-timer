const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
  clockFace: document.querySelector('#timer-1'),
  //clockFace: document.querySelector('.js-clockFace'),

   startBtn: document.querySelector('button[data-action="start"]'),
   stopBtn: document.querySelector('button[data-action="stop"]'),
};

const timer = {
    intervalId: null,
    isActive: false,   // щоб не накопичувати багаторазову активацію start
    start() {
        //console.log(this);
        if (this.isActive) {
            return;
        }

        this.isActive = true; // якщо вже активний start
        const targetTime = new Date('May 18, 2021');   //*****targetTime
           
        updateClockFace(0);

        this.intervalId = setInterval(() => { // для метода вписую  intervalId
            const currentTime = Date.now();

            //  console.log('targetTime: ', targetTime ); //*****targetTime
            //  console.log('currentTime: ', currentTime);

            const deltaTime = targetTime - currentTime; //*****targetTime

            //  console.log('deltaTime: ', deltaTime);
            
            updateClockFace(deltaTime);
        }, 1000);
    },

    stop() {
        //console.log(this);
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.isActive = false;
        updateClockFace(0);
    },
};


/* *** прив'язка таймера до інтерфейса */
// refs.startBtn.addEventListener('click', timer.start);
// refs.stopBtn.addEventListener('click', timer.stop);
refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

timer.start();


function updateClockFace(time) {  //можна підключити плагін/бібліотеку Countdown Timer
    /**
     * Копіпаста зі стека
     */
  const days =
    pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = 
    pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = 
    pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = 
    pad(Math.floor((time % (1000 * 60)) / 1000));
    
  // console.log(`${days}:${hours}:${mins}:${secs}`);

  //refs.clockFace.textContent = `${days}:${hours}:${mins}:${secs}`;
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}





















// Alexander Serzhenko  
// const timer = new CountdownTimer(referal, targetDate) ;
// timer.start(); 

// Служебное слово new создает экземпляр класса, выделяет под него память,
// и что бы иметь к нему доступ необходимо его присвоить переменной,
// которая, собственно будет хранить в себе адресс этого экземпляра.
// И только имея доступ, через переменную, к этому экземпляру можно делать
// с ним все, в пределах разумного  

// const refs = {
//   days: document.querySelector('.value[data-value="days"]'),
//   hours: document.querySelector('.value[data-value="hours"]'),
//   mins: document.querySelector('.value[data-value="mins"]'),
//   secs: document.querySelector('.value[data-value="secs"]'),
//   timerFace: document.getElementById("timer-1"),
// };

// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this.selector = selector;
//     this.targetDate = targetDate;
//   }

//   setInt = setInterval(() => {
//     const nowDate = Date.now();
//     const time = this.targetDate - nowDate;
//     this.updateClockface(time);
// this.timeFinish(time);
//   }, 1000);

//   updateClockface(time) {
//     const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = this.pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//     );
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
//     refs.days.textContent = `${days}`;
//     refs.hours.textContent = `${hours}`;
//     refs.mins.textContent = `${mins}`;
//     refs.secs.textContent = `${secs}`;
//   }

//   pad(value) {
//     return String(value).padStart(2, "0");
//   }
//   timeFinish(time) {
//     if (time < 0) {
//       clearInterval(this.setInt);
//       refs.timerFace.textContent = "Finish";
//     }
//   }
// };
// new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("May 18, 2021"),
// });

