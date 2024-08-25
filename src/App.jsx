import React from 'react'
import './App.css'

function App() {
  return (
    <div className='flex flex-col min-h-screen justify-center items-center bg-bg'>
      <div className='flex flex-col justify-center items-center mb-20'>
          <h1 className='text-[32px] text-primary-text mb-9'>Our Pricing</h1>
          <div className='flex flex-row items-center justify-center'>
            <div className='text-toggle-label text-[15px] mr-6'>Annually</div>
            <input type="checkbox" id="toggle-switch" hidden/>
            <label htmlFor="toggle-switch" className="switch hover:cursor-pointer md:hover:opacity-50"></label>
            <div className='text-toggle-label text-[15px] ml-6'>Monthly</div>
          </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center bg-white rounded-xl h-[452px] px-10'>
          <h2 className='text-primary-text text-lg mb-6'>Basic</h2>
          <div className='flex flex-row justify-center items-center text-price mb-8'>
            <div className='text-[40px] mr-1'>$</div>
            <div className='text-7xl tracking-tight'>199.99</div>
          </div>
          <hr className="solid"></hr>
          <div className='my-3.5 text-primary-text text-[15px]'>500 GB Storage</div>
          <hr className="solid"></hr>
          <div className='my-3.5 text-primary-text text-[15px]'>2 Users Allowed</div>
          <hr className="solid"></hr>
          <div className='my-3.5 text-primary-text text-[15px]'>Send up to 3 GB</div>
          <hr className="solid"></hr>
        </div>
      </div>
    </div>
  )
}

export default App
