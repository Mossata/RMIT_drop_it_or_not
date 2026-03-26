import {BrowserRouter} from "react-router-dom"
import { Navbar } from "./components";
// import './App.css'
// DO NOT TOUCH SUPABASE
// import supabase from './superbase_backend_client'

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