import { Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout"
import Home from "./pages/Home"
import Shows from "./pages/Shows"
import Episodes from "./pages/Episodes"
import Presenters from "./pages/Presenters"
import Profile from "./pages/Profile"
import Articles from "./pages/Articles"
import NigerianFarmer from "./pages/NigerianFarmer"
import ContactMe from "./pages/ContactMe"
import './App.css'





function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/presenters" element={<Presenters />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/nigerian-farmer" element={<NigerianFarmer />} />
        <Route path="/contact" element={<ContactMe />} />

        {/* add the rest: /live, /schedules, /presenters, /podcasts, /news, /contact */}
        <Route path="*" element={<p className="p-8">Page not found</p>} />
      </Route>
    </Routes>
  )
}


export default App
