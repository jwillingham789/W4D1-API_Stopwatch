var secTenth = 0,
    sec = 0,
    min = 0,
    hour = 0,
    changeTime,
    StopRestart,
    secTenthText = document.getElementById('secTenthText'),
    secText = document.getElementById('secText'),
    minText = document.getElementById('minText'),
    hourText = document.getElementById('hourText'),
    backColor = document.querySelector('.jumbotron'),
    timeText = document.querySelector('.time'),
    start = document.getElementById('start'),
    stop = document.getElementById('stop')

//this sets the beginning stop watch time to 00:00:00:00
secTenthText.innerHTML = '00'
secText.innerHTML = '00'
minText.innerHTML = '00'
hourText.innerHTML = '00'

//this function will create the ever-changing background-colors
function color (red, green, blue) {
  red = (red >= 230) ? (red % 230) : red
  green = (green >= 230) ? (green % 230) : green
  blue = (blue >= 230) ? (blue % 230) : blue
  return "rgb(" + red + ", " + green + ", " + blue + ")"
}

//this function with loop through each time and calculate the appropriate time
var addTime = function () {
  if (secTenth >= 100) {
      secTenth = 0
      sec++
    }
  else if (sec >= 60) {
       sec = 0
       min++
    }
  else if (min >= 60) {
       min = 0
       hour++
    }
  //these statements make sure that if a text field is less than 2 digits, then it will add a 0 before the number
  secTenthText.innerHTML = (secTenth > 9) ? secTenth : "0" + secTenth
  secText.innerHTML = (sec > 9) ? sec : "0" + sec
  minText.innerHTML = (min > 9) ? min : "0" + min
  hourText.innerHTML = (hour > 9) ? hour : "0" + hour
  //continues the loop each pass through
  secTenth++
  //calls the color function
  backColor.style.backgroundColor = color(50*sec, 10*sec, 20*sec)
}


document.getElementById('start').addEventListener('click', function (){
  changeTime = setInterval(addTime, 10)
  clearTimeout(StopRestart)
  timeText.classList.remove('blink')
})

document.getElementById('stop').addEventListener('click', function (){
  clearInterval(changeTime)
  //this will cause the timer to reset after 15 secs of no restart
  StopRestart = setTimeout((function(){
    secTenth = 0
    sec = 0
    min = 0
    hour = 0
    secTenthText.innerHTML = '00'
    secText.innerHTML = '00'
    minText.innerHTML = '00'
    hourText.innerHTML = '00'
    backColor.style.backgroundColor = color(0, 0, 0)
  }), 15000)

  //this will add the blink class to our html
  timeText.classList.add('blink')
})
