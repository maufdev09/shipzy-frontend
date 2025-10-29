
import { Outlet } from 'react-router'
import CommonLayOut from './components/LayOut/CommonLayOut'

function App() {

  return (
    <>
     <CommonLayOut>
      <Outlet />
     </CommonLayOut>
    </>
  )
}

export default App
