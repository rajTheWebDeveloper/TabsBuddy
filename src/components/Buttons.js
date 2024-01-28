import React from 'react'

const Buttons = ({tabsData,setActiveTab,activeTab}) => {
  return (
    <div className="company flex justify-between w-[300px] max- mx-auto flex-row md:flex md:flex-col md:items-start md:justify-start md:w-[100px]">
      {tabsData.map((items, idx) => {
        let { company } = items;
        return (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`port-side cursor-pointer mb-6 text-gray-500 hover:text-black ${
              activeTab === idx ? "text-[#0ea5e9]" : null
            }`}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
}

export default Buttons