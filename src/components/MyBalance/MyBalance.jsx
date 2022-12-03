import React from 'react'
import Logo from '../../assets/images/logo.svg'

export const MyBalance = () => {
  return (
    <div className='w-full h-24 bg-softRed rounded-2xl flex items-center justify-between px-4'>
        <div className='text-veryPaleOrange'>
            <p className='text-sm'>My balance</p>
            <p className='text-2xl font-bold'>$921.48</p>
        </div>
        <img src={Logo} alt="" className='w-16'/>
    </div>
  )
}
