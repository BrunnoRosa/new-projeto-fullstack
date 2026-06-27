import { Link } from 'react-router-dom'
import './style.css'

export default function Header() {
  return (
    <header className="header">
      <h1>Gerenciamento de Usários</h1>

      <p className="subtitulo">
                Projeto Full Stack - React + Spring Boot
      </p>
      <nav>
        <Link to='/'>Inicio</Link>
        <Link to='/cadastro'>Cadastrar</Link>
        <Link to='/lista-usuarios'>Lista de usuários</Link>
      </nav>
    </header>
  )
}