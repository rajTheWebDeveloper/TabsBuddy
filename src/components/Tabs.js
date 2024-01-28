import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Buttons from './Buttons';
import Info from './Info';
import Loading from '../Loading';



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
        return <Loading/>
    }

    let { id,title,duties,company,dates} = tabsData[activeTab]

  return (
      <section
        className="w-[90vw] max-w-[800px] mx-auto mt-20 md:grid md:grid-cols-2 justify-start pb-8"
        style={{ gridTemplateColumns: "1fr 4fr" }}
      >
        <Buttons tabsData={tabsData} activeTab={activeTab} setActiveTab={setActiveTab}/>
        <Info id={id} title={title} duties={duties} company={company} dates={dates}/>
      </section>
  );
}

;

export default Tabs