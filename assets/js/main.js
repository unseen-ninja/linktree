;(function (){

  const socialCards   = document.querySelectorAll('.card')
  const cursorWrapper = document.querySelector('.cursor-wrapper')

  cursorWrapper.style.setProperty('--cursor-opacity', .8)

  document.addEventListener('mousemove', event => {
      cursorWrapper.style.setProperty('--cursorX', `${event.clientX}px`)
      cursorWrapper.style.setProperty('--cursorY', `${event.clientY}px`)
      return
    }
  )

  socialCards.forEach(card => {

    card.addEventListener('mouseenter', () => {
      const colour = card.style.getPropertyValue('--gradient-colour')
      return cursorWrapper.style.setProperty('--cursor-colour', colour)
    })

    card.addEventListener('mouseleave', () => cursorWrapper.style.setProperty('--cursor-colour', 'var(--blue-raw)'))

  })


})()
