import React, { CSSProperties } from 'react'
import { Link } from 'react-router-dom'


const wrapperStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem"
}


export default function Home() {
  return (
    <div style={wrapperStyle}>
      <Link to={"/hoc"}>HOC component</Link>
      <Link to={"/render-props"}>Render props component</Link>
      {/* <Link to={"/hoc"}>HOC component</Link> */}
    </div>
  )
}