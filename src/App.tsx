import { useState, useEffect, useLayoutEffect } from 'react'

function getTime(): string {
  const date = new Date()
  const time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds()
  return time
}

function wait(ms: number) {
  let start = Date.now(),
    now = start;
  while (now - start < ms) {
    now = Date.now();
  }
}

function App() {

  const [renderTime, setRenderTime] = useState(getTime)

  useEffect(() => {
    wait(1)
    let now = getTime()
    console.info('useEffect at ', now)
    setRenderTime(now)
  },
    [])

  useLayoutEffect(() => {
    wait(1)
    let now = getTime()
    console.info('useLayoutEffect at', now)
    setRenderTime(now)
  }, [])

  useEffect(() => {
    wait(1)
    let now = getTime()
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
