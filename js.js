
var count = parseInt(window.localStorage.getItem('count'))
if (isNaN(count)) {
  count = 1
  count = window.localStorage.setItem('count', count)
} else {
  count = count + 1
  $('span').html(count);
  count = window.localStorage.setItem('count', count)
}

$(document).ready(function () {
  var theme = window.localStorage.getItem('theme')
  console.log('' + theme)
  if (theme === 'night') {
    $('div > button:last-child').trigger('click');
    // console.log('night theme go!')
  } else {
    $('div > button:first-child').trigger('click');
    // console.log('DAY theme go!')
  }
});

$('div > button:first-child').click(function DayTheme () {
  $('body').css('background', '');
  $('body').css('color', '');
  $('main').css('color', '');
  var theme = 'day'
  window.localStorage.setItem('theme', theme)
});

$('div > button:last-child').click(function NightTheme () {
  $('body').css('background', 'black');
  $('body').css('color', 'white');
  $('main').css('color', 'white');
  var theme = 'night'
  window.localStorage.setItem('theme', theme)
});
