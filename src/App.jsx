import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Navbar, MainPage } from "./components";
// import './App.css'
// DO NOT TOUCH SUPABASE
// import supabase from './superbase_backend_client'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
          <Navbar />
          <MainPage />
      </div>
    </BrowserRouter>
  );
}

export default App;