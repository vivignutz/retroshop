import { useState } from 'react'
import shopLogo from './assets/shoplogo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Oldshop logo" />
        </a> */}
        
        <a href="http://www.w3.org/2000/svg" target="_blank">
          <img src={shopLogo} className="logo shop" alt="Oldshop logo" />
        </a>
      </div>
      <h1>Old Shop</h1>
      <h3>Your shop for old stuff.</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> 
        <p>
          {/* Edit <code>src/App.jsx</code> and save to test HMR */}
        </p>
      </div>
      <p className="read-the-docs">
        Project under construction. Stay tuned!
      </p>
    </>
  )
}

export default App
