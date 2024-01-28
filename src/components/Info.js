import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import styled from 'styled-components';

const Info = ({ id, title, duties, company, dates }) => {
  return (
    <StyledInfoButton>
      <div className="info">
        <h2 className="text-3xl font-light tracking-wide">{title}</h2>
        <button className="star-board px-4 py-1 bg-sky-500 text-base my-4 text-white tracking-wider">
          {company}
        </button>
        <p>{dates}</p>
        <div className="duties mt-6 leading-6">
          {duties.map((items,idx) => {
            return (
              <div key={idx} className="flex items-center leading-7 text-sm text-gray-500">
                <p className="mr-4">
                  <MdKeyboardDoubleArrowRight size={20} />
                </p>
                {items}
              </div>
            );
          })}
        </div>
      </div>
    </StyledInfoButton>
  );
}

let StyledInfoButton = styled.section`
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
`

export default Info