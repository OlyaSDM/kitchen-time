function start() {

    const time = Number(document.querySelector("#min").value);
    let timeGo = (time * 60) + Number(document.querySelector("#sec").value);
 
    function calculateTime() {
       const count = document.querySelector("#countTime");
 
       let min = Math.floor(timeGo / 60);
       let sec = timeGo % 60;
 
       timeGo--;
 
       if (sec < 10) {
          sec = "0" + sec;
       }
       console.log(timeGo);
 
       count.textContent = `${min} : ${sec}`;
       if (timeGo < 0) {
          stopTimer();
          timeGo = 0;
       }
 
       function stopTimer() {
          clearInterval(timerSt);
       }
    }
    let timerSt = setInterval(calculateTime, 1000);
 
 }
 const button = document.querySelector("#btnTime");
 button.addEventListener("click", function () {
    start();
 })
 
 clock();
  
 setInterval(clock, 1000);