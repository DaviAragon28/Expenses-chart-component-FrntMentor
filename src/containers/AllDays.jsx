import React from 'react'
import { Day } from '../components/Day/Day'
import data from '../data/data.json'


export const AllDays = () => {
  return (
    <div className='flex gap-3 border-b pb-4 border-mediumBrown'>

      <Day
        day='mon'
        amount='17.45'
        styles={'h-14'}
      />
      <Day
        day='tue'
        amount='34.91'
        styles={'h-24'}
      />
      <Day
        day='wed'
        amount='52.36'
        bg
        styles={'h-36'}
      />
      <Day
        day='thu'
        amount='31.07'
        styles={'h-20'}
      />
      <Day
        day='fri'
        amount='23.39'
        styles={'h-16'}
      />
      <Day
        day='sat'
        amount='43.28'
        styles={'h-28'}
      />
      <Day
        day='sun'
        amount='25.48'
        styles={'h-20'}
      />

    </div>
  )
}
