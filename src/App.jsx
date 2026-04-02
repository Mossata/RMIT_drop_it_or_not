import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Navbar, MainPage } from "./components";
// import './App.css'
// DO NOT TOUCH SUPABASE
// import supabase from './superbase_backend_client'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <div>
          <h1>Welcome to Drop it or not</h1>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;