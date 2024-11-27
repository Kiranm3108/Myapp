import {BrowserRouter, Route, Link, Routes} from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import SignUp from './components/signup'

function Header(){
  return(
    <div>
<ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/signup">SignUp</Link></li>
</ul>
    </div>
  )
}
function App(){
  return(
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}>Home</Route>
      <Route path="/about" element={<About/>}>About</Route>
      <Route path="/signup" element={<SignUp/>}>SignUp</Route>
      </Routes>      
      </BrowserRouter>
    </div>
  )
}
export default App;