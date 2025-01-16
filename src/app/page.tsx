import React from 'react' 
import Header from './components/Header'
import CardPeriod from './components/CardPeriod'

const page = () => {
  return (
    <div className='bg-custombg'><Header/> 
    <CardPeriod/>
    </div>
  )
}

export default page