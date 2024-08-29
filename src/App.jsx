import React, {useState} from 'react'
import './App.css'

function App() {

  const[annualBasic, setAnnualBasic] = useState(199.99);
  const[annualProfessional, setAnnualProfessional] = useState(249.99);
  const[annualMaster, setAnnualMaster] = useState(399.99);
  const[toggle, setToggle] = useState(false);

  function handleClick(e){
    if (toggle) {
      setAnnualBasic(199.99);
      setAnnualProfessional(249.99);
      setAnnualMaster(399.99);
    } else {
      setAnnualBasic(19.99);
      setAnnualProfessional(24.99);
      setAnnualMaster(39.99);
    }
    setToggle(!toggle);
  }


  return (
    <div className='flex flex-col min-h-screen justify-center items-center bg-bg bg-bg-mobile bg-no-repeat bg-[194px_-36px] md:bg-bg-desktop md:bg-desktop'>
      <div className='flex flex-col justify-center items-center mb-20 md:mb-8 mt-[60px] md:mt-[68px]'>
          <h1 className='text-[32px] text-primary-text mb-9'>Our Pricing</h1>
          <div className='flex flex-row items-center justify-center'>
            <div className='text-toggle-label text-[15px] mr-6'>Annually</div>
            <input type="checkbox" id="toggle-switch" hidden/>
            <label htmlFor="toggle-switch" className="switch hover:cursor-pointer md:hover:opacity-50" onClick={handleClick}></label>
            <div className='text-toggle-label text-[15px] ml-6'>Monthly</div>
          </div>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center mb-[70px]'>
        <div className='flex flex-col justify-center items-center bg-white rounded-xl w-[326px] md:w-[350px] py-8 shadow-xl shadow-shadow'>
          <h2 className='text-primary-text text-lg mb-6'>Basic</h2>
          <div className='flex flex-row justify-center items-center text-price mb-8'>
            <div className='text-[40px] mr-1'>$</div>
            <div className='text-7xl tracking-tight'>{annualBasic}</div>
          </div>
          <hr className="solid"></hr>
          <div className='my-3.5 text-primary-text text-[15px]'>500 GB Storage</div>
          <hr className="solid"></hr>
          <div className='my-3.5 text-primary-text text-[15px]'>2 Users Allowed</div>
          <hr className="solid"></hr>
          <div className='my-3.5 text-primary-text text-[15px]'>Send up to 3 GB</div>
          <hr className="solid"></hr>
          <button className='bg-gradient-to-r from-light-purple to-dark-purple hover:bg-none border:opacity-0 hover:border-dark-purple border-[1px] px-20 md:px-24 py-3 rounded-lg text-white hover:text-dark-purple text-[13px] font-bold mt-8 tracking-widest'>LEARN MORE</button>
        </div>
        <div className='flex flex-col justify-center items-center bg-gradient-to-b from-light-purple to-dark-purple rounded-xl w-[326px] md:w-[350px] py-14 my-8 shadow-xl shadow-shadow'>
          <h2 className='text-white text-lg mb-6'>Professional</h2>
          <div className='flex flex-row justify-center items-center text-white mb-8'>
            <div className='text-[40px] mr-1'>$</div>
            <div className='text-7xl tracking-tight'>{annualProfessional}</div>
          </div>
          <hr className="solid"></hr>
          <div className='my-3.5 text-white text-[15px]'>1 TB Storage</div>
          <hr className="solid"></hr>
          <div className='my-3.5 text-white text-[15px]'>5 Users Allowed</div>
          <hr className="solid"></hr>
          <div className='my-3.5 text-white text-[15px]'>Send up to 10 GB</div>
          <hr className="solid"></hr>
          <button className='bg-white hover:bg-opacity-0 border-dark-purple hover:border-white border-[1px] hover:border-[1px] px-20 md:px-24 py-3 rounded-lg text-dark-purple hover:text-white text-[13px] mt-8 tracking-widest'>LEARN MORE</button>
        </div>
        <div className='flex flex-col justify-center items-center bg-white rounded-xl w-[326px] md:w-[350px] py-8 shadow-xl shadow-shadow'>
          <h2 className='text-primary-text text-lg mb-6'>Master</h2>
          <div className='flex flex-row justify-center items-center text-price mb-8'>
            <div className='text-[40px] mr-1'>$</div>
            <div className='text-7xl tracking-tight'>{annualMaster}</div>
          </div>
          <hr className="solid"></hr>
          <div className='my-3.5 text-primary-text text-[15px]'>2 TB Storage</div>
          <hr className="solid"></hr>
          <div className='my-3.5 text-primary-text text-[15px]'>10 Users Allowed</div>
          <hr className="solid"></hr>
          <div className='my-3.5 text-primary-text text-[15px]'>Send up to 20 GB</div>
          <hr className="solid"></hr>
          <button className='bg-gradient-to-r from-light-purple to-dark-purple hover:bg-none border:opacity-0 hover:border-dark-purple border-[1px] px-20 md:px-24 py-3 rounded-lg text-white hover:text-dark-purple text-[13px] font-bold mt-8 tracking-widest'>LEARN MORE</button>
        </div>
      </div>
    </div>
  )
}

export default App
