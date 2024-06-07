"use client"

import Tabs from "./tabs"

function RandomComponent() {
  return <h1>Random content for Tab 3</h1>;
}

export default function TabsParent() {
  const tabs = [
    {
      label: 'Tab 1',
      content: <div>Content for Tab 1</div>
    },
    {
      label: 'Tab 2',
      content: <div>Content for Tab 2</div>
    },
    {
      label: 'Tab 3',
      content: <RandomComponent />
    },
  ]

  function handleChange(currentTabIndex){
    console.log(currentTabIndex);
  }

  return (
    <Tabs tabsContent={tabs} onChange={handleChange} />
  )
}
