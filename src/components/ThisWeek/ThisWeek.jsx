import React from 'react'
import { AllDays } from '../../containers/AllDays'

export const ThisWeek = () => {
  return (
    <section className='bg-veryPaleOrange rounded-2xl py-5 px-3 flex flex-col gap-4'>
      <p className='text-darkBrown font-bold text-xl'>Spending - Last 7 days</p>
      <AllDays />
      <div>

        <p className='text-mediumBrown text-sm'>Total this month</p>
        <div className='flex justify-between items-center'>
          <p className='text-4xl font-bold text-darkBrown'>$478.33</p>
          <div>
            <p className='font-bold text-darkBrown text-right'>+2.4%</p>
            <p className='text-mediumBrown text-sm'>from last month</p>
          </div>
        </div>
      </div>

    </section>
  )
}
