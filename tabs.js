"use client"

import { useState } from "react"

export default function Tabs({tabsContent, onChange}) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0)

  function handleOnClick(getCurrentIndex){
    setCurrentTabIndex(getCurrentIndex)
    onChange(getCurrentIndex)
  }

  return (
    <div className="wrapper">
      <div className="flex">
        {
          tabsContent.map((tabItem, index) => (
            <div 
              onClick={() => handleOnClick(index)} 
              key={tabItem.label}
              className={`px-4 py-2 cursor-pointer ${currentTabIndex === index ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"} rounded-tl rounded-tr`}
            >
              <span className="label">
                {tabItem.label}
              </span>
            </div>
          ))
        }
      </div>
      <div className="p-4 text-white bg-blue-400">
        {
          tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
        }
      </div>
    </div>
  )
}
