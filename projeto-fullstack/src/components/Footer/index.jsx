import './style.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p> &copy; {new Date().getFullYear()} - Projeto Full Stack
                Todos os direitos reservados.
                <br />
                SENAI DENDEZEIROS - SALVADOR BA
            </p>
    </footer>
  )
}