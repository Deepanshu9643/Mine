import React, { useState } from 'react'

// Made this for my girlfriend - works on phone too! :)
const Proposal = () => {
  const [saidYes, setSaidYes] = useState(false)
  
  // Move button when someone tries to tap/hover No
  const moveNoButton = (e) => {
    // Prevent the button from getting "stuck"
    e.preventDefault()
    
    // Keep button within visible screen area
    const maxWidth = window.innerWidth - 100
    const maxHeight = window.innerHeight - 100
    
    const x = Math.random() * maxWidth
    const y = Math.random() * maxHeight
    
    const btn = e.target
    btn.style.position = 'fixed'
    btn.style.left = `${x}px`
    btn.style.top = `${y}px`
  }

  if (!saidYes) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8 text-pink-500">
            Will You Be Mine Forever? 💍
          </h1>
          
          <div className="flex justify-center gap-8">
            <button 
              onClick={() => setSaidYes(true)}
              className="text-2xl text-green-500 font-bold hover:scale-110 transition-transform"
            >
              Yes
            </button>

            {/* Added touch events for mobile */}
            <button 
              onTouchStart={moveNoButton}
              onMouseOver={moveNoButton}
              onTouchMove={moveNoButton}
              className="text-2xl text-red-500 font-bold transition-all duration-300"
              style={{position: 'relative'}} // Start with relative positioning
            >
              No
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-pink-500 animate-bounce">
        I love you! ❤️
      </h1>
    </div>
  )
}

export default Proposal