import React from 'react'
import Signup from './content/Signup.js'
import Signin from './content/Signin.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signin' element={<Signin />}/>
        </Routes>
        </Router>
    </div>
  )
}

export default App
