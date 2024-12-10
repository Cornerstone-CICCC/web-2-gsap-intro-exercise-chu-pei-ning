// PUT YOUR CODE HERE

const boxTimeline = gsap.timeline()

boxTimeline
  .from('.red', { x: '-100vw', y: '-100vh', duration: .8})
  .from('.green', { x: '100vw', y: '-100vh', duration: .8 })
  .from('.blue', { x: '100vw', y: '100vh', duration: .8 })
  .from('.yellow', { x: '-100vw', y: '100vh', duration: .8 })

  .to('.red', { x: '-100%', left: '100%', borderRadius: '50%', backgroundColor: 'green', duration: .8 })
  .to('.green', { y: '-100%', top:'100%', borderRadius: '50%', backgroundColor: 'blue', duration: .8 },'<')
  .to('.blue', { x: 0, left: 0, borderRadius: '50%', backgroundColor: 'yellow', duration: .8 },'<')
  .to('.yellow', { y: 0, top: 0, borderRadius: '50%', backgroundColor: 'red', duration: .8 },'<')
  
  .to('.yellow', { x: '-100%', left:0, duration: 1})
  .to('.red', { left: 'calc(100vw + 100%)', duration: 1}, '<')
  .to('.green', { x: '100%', left:'100%', duration: 1},'<')
  .to('.blue', { left: 'calc(-100vw - 100%)', duration: 1},'<')

