import React from 'react' 
import Header from './components/Header'
import First from '../app/FirstPage/Firstpage'
import Dashboard from './FirstPage/Dashboard'


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