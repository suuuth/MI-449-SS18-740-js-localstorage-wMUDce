
var count = parseInt(window.localStorage.getItem('count'))
if (isNaN(count)) {
  count = 1
  count = window.localStorage.setItem('count', count)
} else {
  count = count + 1
  document.getElementById('counter').innerHTML = count
  window.localStorage.setItem('count', count)
}

var d = document.getElementById('daybtn')
var n = document.getElementById('nightbtn')

n.addEventListener('click', function NightTheme () {
  document.body.setAttribute('class', 'night')
  var theme = 'night'
  window.localStorage.setItem('theme', theme)
})

d.addEventListener('click', function DayTheme () {
  document.body.setAttribute('class', 'day')
  var theme = 'day'
  window.localStorage.setItem('theme', theme)
})

var theme = window.localStorage.getItem('theme')
console.log('' + theme)
if (theme === 'night') {
  document.body.setAttribute('class', 'night')
} else {
  document.body.setAttribute('class', 'day')
}
