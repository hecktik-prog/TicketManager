import { Layout } from "./components/Layout"
import { Route, Routes } from 'react-router-dom'
import { RequestPage } from "./pages/RequestPage"
import { LoginPage } from "./pages/LoginPage"
import { SubmitPage } from "./pages/SubmitPage"
import { CreateReqPage } from "./pages/CreateReqPage"


function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<RequestPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='submit' element={<SubmitPage />} />
        <Route path='create' element={<CreateReqPage />} />
      </Routes>
    </Layout>
  )
}

export default App