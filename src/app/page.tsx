import React from 'react' 
import Header from './components/Header'
import First from '../app/FirstPage/Firstpage'
import ProductionCalendar from './components/ProductionCalendar/ProductionCalendar'




const page = () => {
  return (
    <div className='bg-slate-50'> 
    <Header/>
    <First/> 
    <ProductionCalendar/>
    </div>
  )
}

export default page