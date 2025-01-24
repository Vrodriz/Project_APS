import React from 'react' 
import Header from './components/Header'
import First from '../app/FirstPage/Firstpage'
import Dashboard from '../app/FirstPage/component/Dashboardcomponents/index'




const page = () => {
  return (
    <div className='bg-slate-50'> 
    <Header/>
    <First/> 
    <Dashboard/>
  

    
    
    </div>
  )
}

export default page