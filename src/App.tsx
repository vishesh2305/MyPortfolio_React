import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Landing from './pages/Landing/Landing'

function App() {

  return (
    <>

<Router>
  <Routes>
    <Route path='' element={<Landing />}></Route>
  </Routes>
</Router>


    </>
  )
}

export default App