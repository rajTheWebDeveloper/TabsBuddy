import React from 'react'
import styled from 'styled-components';

const Buttons = ({tabsData,setActiveTab,activeTab}) => {
  return (
    <StyledButton>
      <div className="company flex justify-between w-[300px] max- mx-auto flex-row md:flex md:flex-col md:items-start md:justify-start md:w-[100px]">
        {tabsData.map((items, idx) => {
          let { company } = items;
          return (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`port-side cursor-pointer mb-6 text-gray-500 hover:text-black ${ activeTab === idx ? "text-sky-500": null}`}
            >
            {console.log(activeTab===idx,activeTab,idx)}
              {company}
            </button>
          )
        })}
      </div>
    </StyledButton>
  );
}


let StyledButton = styled.section`


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



`;

export default Buttons