
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import MainRoute from './components/MainRoute'
import PaymentRoute from './components/PaymentRoute'

const  App=()=> {
 

  return (
    <>
     <div >
     <Header/>
     
      <Routes>
        <Route path='/' element={<MainRoute/>}/>
        <Route path='/product' element={<PaymentRoute/>}/>
    
    
      </Routes>
     </div>

    
        
    </>
  )
}

export default App
