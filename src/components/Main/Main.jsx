import React from 'react'
import { MyBalance } from '../MyBalance/MyBalance'
import { ThisWeek } from '../ThisWeek/ThisWeek'

export const Main = () => {
  return (
    <main className='flex flex-col gap-2'>
        <MyBalance />
        <ThisWeek />
    </main>
  )
}
