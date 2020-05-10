const fontStyles = {
  fontOne: 'Apercu-Bold',
  fontTwo: 'Apercu-Bold-Italic',
  fontThree: 'Apercu-Italic',
  fontFour: 'Apercu-Light',
  fontFive: 'Apercu-Light-Italic',
  fontSix: 'Apercu-Medium',
  fontSeven: 'Apercu-Medium-Italic',
  fontEight: 'Apercu-Mono-Bold',
  fontNine: 'Apercu-Regular'
}

// detect which button got clicked, insert new font-family
document.getElementById('font-buttons').addEventListener('click', (evt) => {

  switch(evt.target.id) {
    case 'font-1':
      document.body.style.fontFamily = fontStyles.fontOne
      break;
    case 'font-2':
      document.body.style.fontFamily = fontStyles.fontTwo
      break;
    case 'font-3':
      document.body.style.fontFamily = fontStyles.fontThree
      break;
    case 'font-4':
      document.body.style.fontFamily = fontStyles.fontFour
      break;
    case 'font-5':
      document.body.style.fontFamily = fontStyles.fontFive
      break;
    case 'font-6':
      document.body.style.fontFamily = fontStyles.fontSix
      break;      
    case 'font-7':
      document.body.style.fontFamily = fontStyles.fontSeven
      break;
    case 'font-8':
      document.body.style.fontFamily = fontStyles.fontEight
      break;
    case 'font-9':
      document.body.style.fontFamily = fontStyles.fontNine
      break;            
  }  
})