import React from 'react' 
import Header from './components/Header'
import First from '../app/FirstPage/Firstpage'
import Period from '../app/FirstPage/component/Dashboardcomponents/period'




const page = () => {
  return (
    <div className='bg-slate-50'> 
    <Header/>
    <First/> 
    <Period/>

    
    
    </div>
  )
}

export default page