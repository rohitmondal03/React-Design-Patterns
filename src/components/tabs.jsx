import { createContext, useContext, useState } from "react";


const TabsContext = createContext()


export default function Tabs({ children, idx, handleIdxChange }) {
  return (
    <TabsContext.Provider value={{ idx, handleIdxChange }}>
      {children}
    </TabsContext.Provider>
  )
}

Tabs.TitleContainer = ({ children }) => {
  return (
    <div className="title-container">{children}</div>
  )
}

Tabs.Title = ({ label, index }) => {
  const { idx, handleIdxChange } = useContext(TabsContext);

  return (
    <h3
      onClick={() => handleIdxChange(index)}
      style={idx === index ? { color: 'red' } : null}
      className="title"
    >
      {label}
    </h3>
  )
}

Tabs.ItemsContainer = ({ children }) => {
  return (
    <div className="items-container">{children}</div>
  )
}

Tabs.Items = ({ description, index }) => {
  const { idx } = useContext(TabsContext);

  return idx === index ? (
    <p className="items">{description}</p>
  ) : null
}