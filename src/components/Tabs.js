import React, { useState } from 'react'

function Tabs() {
  const [activeTab, setActiveTab] = useState(0)
  const tabs = [
    {
      name: 'Tab 1',
      content: 'this content tab 1'
    },
    {
      name: 'Tab 2',
      content: 'this content tab 2'
    },
    {
      name: 'Tab 3',
      content: 'this content tab 3'
    }
  ]

  return (
    <div className='p-4 w-full'>
      <div className='flex items-center mb-4'>
        {tabs.map((tab, index) => (
          <button
          key={index}
          className={`px-4 py-2 mx-2 rounded-lg ${activeTab === index ? 'text-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className='p-4 border border-gray-400 rounded'>
        {tabs[activeTab] && <p>{tabs[activeTab].content}</p>}
      </div>
    </div>
  )
}

export default Tabs;