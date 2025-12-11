import Navbar from "./components/shared/Navbar.jsx"
import { Routes,Route } from "react-router"
import Login from "./components/auth/login.jsx"
import { BrowserRouter} from "react-router-dom"
import SignUp from "./components/auth/SignUp.jsx"
import { HomepagesContainer } from "./components/home/homepagesContainer.jsx"
import JobsPageContainer from "./components/JobPage/JobsPageContainer.jsx"
import Profile from "./components/Profile/profile.jsx"
import CardDetails from "./components/JobPage/CardDetails.jsx"
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/login" element={<Login/>}/>
       <Route path="/signUp" element={<SignUp/>}/>
    <Route path="/" element={ <HomepagesContainer/> }/>
   <Route path="/job" element={ <JobsPageContainer/> }/>
    <Route path="/profile" element={ <Profile/> }/>
    <Route path="/details/:id" element={<CardDetails/>}/>
    </Routes>
       </BrowserRouter>
    </>
  )
}

export default App