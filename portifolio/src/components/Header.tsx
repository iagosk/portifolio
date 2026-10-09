export default function Header() {
  return (
    <header className="flex-row flex-row-sb">
      <div className="title">
        <h1>MI - Developer</h1>
      </div>
      <nav className="flex-row flex-row-center flex-gp-20">
        <a className="nav-link" href="#home">
          <h3>Início</h3>
          <img className="icon-link" src="../public/icons/house-chimney.svg" alt="Icone Início" />
        </a>
        <a className="nav-link" href="#about"><h3>Quem sou</h3></a>
        <a className="nav-link" href="#tech"><h3>Tecnologias</h3></a>
        <a className="nav-link" href="#projects"><h3>Meus Projetos</h3></a>
        <a className="nav-link" href="#contacts"><h3>Meus contatos</h3></a>
      </nav>
    </header>
  )
}