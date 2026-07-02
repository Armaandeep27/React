import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <br/>
        <Routes>
          <Route path='/' element={<Home />}>

          </Route>
          <Route path='/about' element={<About />}>

          </Route>
          <Route path='/contact' element={<Contact />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Home() {
  return <>
    Welcome to Home!!
  </>
}

function About() {
  return <>
    Welcome to About!!
  </>
}

function Contact() {
  return <>
    Welcome to Contacts!!
  </>
}
export default App


// also if we want to do somethere where a variable is going to be used
// but on the change of it we dont want the component to reRender we can use 
// a useRef hook which basically gives us a reference to that HTML component OR Value
// we can access it change it by accessing .current in it and we can save a reRender