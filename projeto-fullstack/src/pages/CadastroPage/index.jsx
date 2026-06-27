import { toast } from 'react-toastify'
import './style.css'
import api from '../../services/api'
import { useState } from 'react'

export default function CadastroPage() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [estaEnviando, setEstaEnviando] = useState(false);

  // limpa os campos do formulário, voltando para o estado inicial.
  function limparCamposDoFormulario() {
    setNome('');
    setEmail('');
    setSenha('');
  }

  async function envioDoFormulario(event) {

    // Evita que a página seja recarregada automaticamente pelo navegador.
    event.preventDefault();

    // Garante que nenhum elemento pai interfira na ação do formulário
    event.stopPropagation();
    setEstaEnviando(true)

    const dadosDoFormulario = { nome, email, senha };

    try {
      // Tenta cadastrar o usuário na API.
      const resposta = await api.post('/usuarios', dadosDoFormulario)

      // Se der Certo.
      toast.success(resposta.data.mensagem || 'Usuário cadastrado com sucesso!')
      limparCamposDoFormulario()
    } catch (erro) {
      // Se der errado.
      const mensagemDoServidor = erro.response?.data?.mensagem
      toast.error(mensagemDoServidor || 'Ocorreu um erro ao cadastrar o usuário.')

    } finally {

      // Executa dando certo ou errado.
      setEstaEnviando(false)
    }
  }
  return (
    <div className="cadastro-page">
      <form onSubmit={envioDoFormulario}>
        <div className="form-group">
          <label htmlFor="Campo-nome">Nome:</label>
          <input
            id="Campo-nome"
            type="text"
            placeholder='Ex.: Jose Da Silva'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required // DICA extra: evita enviar campos vazios
          />
        </div>
        <div className="form-group">
          <label htmlFor="Campo-email">Email:</label>
          <input
            id="Campo-email"
            type="email"
            placeholder='Ex.: Jose@silva.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required // DICA extra: evita enviar campos vazios
          />
        </div>
        <div className="form-group">
          <label htmlFor="Campo-senha">Senha:</label>
          <input
            id="Campo-senha"
            type="password"
            placeholder='Ex.: 123456'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required // DICA extra: evita enviar campos vazios
          />
        </div>

        <button type="submit" disabled={estaEnviando}>
          {estaEnviando ? 'Cadastrando...' : 'Cadastrar'}
        </button>

      </form>
    </div>
  );
}
