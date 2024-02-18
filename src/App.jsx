import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Hoc from "./pages/HOC"
import RenderProps from "./pages/RenderProps"
import CompoundPattern from "./pages/CompoundPattern"
import ContainerPresentationalPattern from "./pages/ContainerPresentationalPattern"
import CustomHooks from "./pages/CustomHooks"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hoc" element={<Hoc />} />
      <Route path="/render-props" element={<RenderProps />} />
      <Route path="/compound-pattern" element={<CompoundPattern />} />
      <Route path="/container-presentational" element={<ContainerPresentationalPattern />} />
      <Route path="/custom-hooks" element={<CustomHooks />} />
    </Routes>
  )
}

export default App
