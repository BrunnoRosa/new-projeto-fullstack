import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import CadastroPage from './pages/CadastroPage'
import HomePage from './pages/HomePage'
import ListaUsuariosPage from './pages/ListaUsuariosPage'

function App() {

  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/cadastro' element={<CadastroPage/>}/>
          <Route path='/lista-usuarios' element={<ListaUsuariosPage/>}/>
        </Routes>

      </main>
      <Footer/>
    </>
  )
}

export default App
