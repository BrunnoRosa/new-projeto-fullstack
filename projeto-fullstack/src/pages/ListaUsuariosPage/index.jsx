import { toast } from 'react-toastify'
import api from '../../services/api'
import './style.css'
import { useEffect, useState } from 'react'

export default function ListaUsuariosPage() {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        async function buscarUsuarios(){
            try {
                // Se der certo.
                const response = await api.get('/usuarios')
                setUsuarios(response.data)
            } catch (erro) {
                // Se der errado.
                toast.error('Erro ao buscar usuários:')
            }
        }
        buscarUsuarios()
    }, [])

    return (
        <div className="lista-usuarios-page">
            <h1>Lista de Usuários</h1>
            {usuarios.length === 0 ? (
                <p>Nenhum usuário cadastrado.</p>
            ) : (
                <table className="tabela-usuarios">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map(usuario=> (
                            <tr key={usuario.email}> // Usamos o email como chave única, pois é improvável que haja dois usuários com o mesmo email.
                                <td>{usuario.nome}</td>
                                <td>{usuario.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}