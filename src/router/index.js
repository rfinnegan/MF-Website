import Contact from '../screens/contact/Contact'
import Home from '../screens/home/Home'

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'

const Router = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Navigate replace to="/home"></Navigate>}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Navigate replace to="/home"></Navigate>}></Route>
      </Routes>
    </BrowserRouter>)
}

export default Router
