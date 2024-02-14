import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Hoc from "./pages/HOC"
import RenderProps from "./pages/RenderProps"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hoc" element={<Hoc />} />
      <Route path="/render-props" element={<RenderProps />} />
    </Routes>
  )
}

export default App
