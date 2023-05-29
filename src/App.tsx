import Navbar from "./components/navbar/Navbar"
import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App