import React from 'react'
import './App.css'

function App() {
  return (
    <div className='flex min-h-screen justify-center items-center bg-bg'>
      <div className='flex flex-col justify-center items-center'>
          <h1 className='text-3xl'>Our Pricing</h1>
          <div className='flex flex-row items-center justify-center'>
            <div className='text-text text-[12px] mr-4'>Annually</div>
            <input type="checkbox" id="toggle-switch" hidden/>
            <label htmlFor="toggle-switch" className="switch hover:cursor-pointer md:hover:opacity-50"></label>
            <div className='text-text text-[12px] ml-2.5 mr-2'>Monthly</div>
          </div>
      </div>
    </div>
  )
}

export default App
