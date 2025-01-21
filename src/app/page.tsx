import React from 'react' 
import Header from './components/Header'
import First from '../app/FirstPage/Firstpage'
import App from './FirstPage/dashboard/components/app'



const page = () => {
  return (
    <div className='bg-slate-50'> 
    <Header/>
    <First/> 
    <App/>
    
    </div>
  )
}

export default page