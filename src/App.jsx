import { useEffect, useState } from "react"

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})

  useEffect(() => {
    console.log('effect', { enabled })
    
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x:clientX, y:clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    return() => {
      window.removeEventListener('pointermove', handleMove)
    }
    
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#87D0E4',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}>
      </div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Deactivate" : "Active"} Follow mouse
      </button>
    </>
  )
}

export default App
