;(function (){

  document.body.style.setProperty('--cursor-opacity', .8)

  document.addEventListener(
    'mousemove',
    event => {
      document.body.style.setProperty('--cursorX', `${event.clientX}px`)
      document.body.style.setProperty('--cursorY', `${document.documentElement.scrollTop + event.clientY}px`)
      return
    }
  )

})()
