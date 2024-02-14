import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Hoc from "./pages/HOC"
import RenderProps from "./pages/RenderProps"
import CompoundPattern from "./pages/CompoundPattern"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hoc" element={<Hoc />} />
      <Route path="/render-props" element={<RenderProps />} />
      <Route path="/compound-pattern" element={<CompoundPattern />} />
    </Routes>
  )
}

export default App
