import React from 'react'
import { Blocks } from "react-loader-spinner";



const Loading = () => {
  return (
    <section className='fixed top-[45%] left-[50%] translate-[-50%,-50%]'>
      <Blocks
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </section>
  );
}

export default Loading