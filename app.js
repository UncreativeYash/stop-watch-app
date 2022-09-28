let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let miliseconds = document.getElementById("miliseconds");

let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");

let hr = min = sec = ms = 0;

const startTimer = () => {
  
  interval = setInterval(()=>{
    ms = +ms + 1
    ms = ms < 10 ? "0" + ms : ms
    miliseconds.innerText = ms;
    

    if (ms == 100) { 
        
        sec = +sec + 1 
        sec = sec < 10 ? "0" + sec : sec
        ms = 0
        seconds.innerText = sec;
    }
    if (sec == 60) { 
        
        min = +min + 1 
        min = min < 10 ? "0" + min : min
        sec = 0
        minutes.innerText = min; 
    }
    if (min == 60) { 
        hr = +hr + 1 
        hr = hr < 10 ? "0" + hr : hr
        hours.innerText = hr;
    }
  }, 10); 
};

const pauseTimer = () => {
  clearInterval(interval);
};

const resetTimer = () => {
  hr = 0;
  min = 0; 
  sec = 0;
  ms = 0

  clearInterval(interval);
  
  hours.innerHTML = "0" + hr;
  minutes.innerHTML = "0" + min;
  seconds.innerHTML = "0" + sec;
  miliseconds.innerHTML = "0" + ms

  
};


