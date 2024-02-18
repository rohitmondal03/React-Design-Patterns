import React, { useState } from 'react'

import Tabs from '../components/compound/tabs'


export default function CompoundPattern() {
  const [index, setIndex] = useState(0);

  const handleIndexChange = (newIndex) => setIndex(newIndex);

  return (
    <>
      <h2>Made a tabs component</h2>

      <Tabs idx={index} handleIdxChange={handleIndexChange}>
        <Tabs.TitleContainer>
          <Tabs.Title label={"Tab 1"} index={0} />
          <Tabs.Title label={"Tab 2"} index={1} />
          <Tabs.Title label={"Tab 3"} index={2} />
        </Tabs.TitleContainer>
        <Tabs.ItemsContainer>
          <Tabs.Items description={"this is tab number 1"} index={0} />
          <Tabs.Items description={"this is tab number 2"} index={1} />
          <Tabs.Items description={"this is tab number 3"} index={2} />
        </Tabs.ItemsContainer>
      </Tabs>
    </>
  )
}
