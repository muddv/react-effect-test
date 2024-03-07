import { useState, useEffect, useLayoutEffect } from 'react'

function App() {

  const [renderTime, setRenderTime] = useState(performance.now())

  useEffect(() => {
    const now = performance.now()
    console.info('useEffect at ', now)
    setRenderTime(now)
  },
    [])

  useLayoutEffect(() => {
    let now = performance.now()
    console.info('useLayoutEffect at', now)
    setRenderTime(now)
  }, [])

  useEffect(() => {
    let now = performance.now()
    console.info('useEffect no deps', now)
  })

  function reRender() {
  }


  return (
    <>
      <p>rendered at {renderTime}</p>
      <button onClick={reRender}> rerender</button>
    </>
  )
}

export default App
