import React, { useEffect, useState } from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import styled from 'styled-components';


const Tabs = () => {
    let [loading,setLoading]=useState(true)
    let [tabsData,setTabsData]=useState([])
    let [activeTab,setActiveTab]=useState(0)
    let url = "https://course-api.com/react-tabs-project";

    let fetchTabsData=async (url)=>
    {
        let response=await fetch(url);
        let data=await response.json();
        setLoading(false)
        setTabsData(data)
    }

    useEffect(()=>
    {
        fetchTabsData(url)
    },[])

    if(loading)
    {
        return <h2>Loading...</h2>
    }

    let { id,title,duties,company,dates} = tabsData[activeTab]

  return (
    <StyledTab>
      <section
        className="w-[90vw] max-w-[800px] mx-auto mt-20 md:grid md:grid-cols-2 justify-start pb-8"
        style={{ gridTemplateColumns: "1fr 4fr" }}
      >
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
        <div className="info">
          <h2 className="text-3xl font-light tracking-wide">{title}</h2>
          <button className="star-board px-4 py-1 bg-sky-500 text-base my-4 text-white tracking-wider">
            {company}
          </button>
          <p>{dates}</p>
          <div className="duties mt-6 leading-6">
            {duties.map((items) => {
              return (
                <p className="flex items-center leading-7 text-sm text-gray-500">
                  <p className="mr-4">
                    <MdKeyboardDoubleArrowRight size={20} />
                  </p>
                  {items}
                </p>
              );
            })}
          </div>
        </div>
      </section>
    </StyledTab>
  );
}


let StyledTab = styled.section`
  .port-side {
    position: relative;
  }

  .port-side:hover::before {
    content: "";
    position: absolute;
    height: 2px;
    background-color: #0ea5e9;
    bottom: -30%;
    animation: hover-bar 0.5s forwards;
    color: #0ea5e9;
  }

  @keyframes hover-bar 
  {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }

  .star-board 
  {
    position: relative;
    z-index: 30;
    border-radius: 5px;
  }
  .star-board:hover::before 
  {
    content: "";
    position: absolute;
    /* width: 100%; */
    height: 100%;
    top:0;
    left: 0;
    background:linear-gradient(to left,magenta,blue);
    animation: hover-button 0.4s forwards;
    z-index: -1;
    border-radius: 5px;
  }

  @keyframes hover-button {
    0% 
    {
        width: 0%;
    }
    100% 
    {
        width: 100%;
    }
  }



`;

export default Tabs