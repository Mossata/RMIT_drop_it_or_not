import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// import supabase from './superbase_backend_client'
function App() {
  const [count, setCount] = useState(0)

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
          <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;