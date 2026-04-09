import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Searchbar} from "./components";
import { Subjects } from "./Pages";
import "./App.css";
import Supabase from "./SupabaseClient"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Welcome to Drop it or not</h1>

                <div className="searchbar">
                  <Searchbar />
                </div>
              </>
            }
          />

          <Route path="/subjects" element={<Subjects />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;