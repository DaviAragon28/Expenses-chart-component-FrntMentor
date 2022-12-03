import React from 'react'
import data from '../../data/data.json'


export const Day = ({ day, amount, bg, styles}) => {
  return (
    <div className=' flex flex-col-reverse  h-[230px] gap-3'>
      <div className=' cursor-pointer container hover:opacity-60'>
        <div className={` ${styles} w-[40px] mx-auto  rounded-md  ${bg ? 'bg-cyan' : 'bg-softRed'}`}></div>
        <p className='text-center text-sm text-mediumBrown pt-2'>{day}</p>
      </div>
      <p className=' price hidden text-[11px] text-center mb-2 bg-darkBrown text-veryPaleOrange py-1 rounded-md md:text-[12px]'>${amount}</p>
    </div>
  )
}
