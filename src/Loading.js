import React from 'react'
import { Blocks } from "react-loader-spinner";



const Loading = () => {
  return (
    <section className='h-screen w-[100vw] flex justify-center items-center'>
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