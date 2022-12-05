// var iframeElementID = document.getElementById('myMusic')
// var widget          = SC.Widget(iframeElementID)

// function pauseMusic() {
//   widget.pause()
//   document.getElementById('buttonMusic').innerHTML = '<i class="fa fa-play"></i>'
//   document.getElementById('buttonMusic').setAttribute('onclick','playMusic()')
//   showCredit()
// }

// function playMusic() {
//   widget.play()
//   document.getElementById('buttonMusic').innerHTML = '<i class="fa fa-pause"></i>'
//   document.getElementById('buttonMusic').setAttribute('onclick','pauseMusic()')
//   showCredit()
// }

// function showCredit() {
//   document.getElementById('musicCredit').className = "music-credit show";
//   setTimeout(function(){
//     document.getElementById('musicCredit').className = "music-credit"
//   }, 3000)
// }

// window.addEventListener('scroll', throttle(parallax, 14))
// function throttle(fn, wait) {
//   var time = Date.now()
//   return function() {
//     if ((time + wait - Date.now()) < 0) {
//       fn();
//       time = Date.now()
//     }
//   }
// };

// function parallax() {
//   let scrolled = window.pageYOffset

//   let leaf1 = 100
//   let leaf2 = 0
//   let leaf3 = -200
//   let leaf4 = 170

//   document.querySelector('#leaf-1').style.bottom = leaf1 + (scrolled/11) + 'px'
//   document.querySelector('#leaf-2').style.bottom = leaf2 + (scrolled/9) + 'px'
//   document.querySelector('#leaf-3').style.bottom = leaf3 + (scrolled/6) + 'px'
//   document.querySelector('#leaf-4').style.bottom = leaf4 + (scrolled/15) + 'px'
// };

// window.onload = function() {
//   setTimeout(function(){
//     playMusic()
//     showCredit()
//   }, 2000)
// }