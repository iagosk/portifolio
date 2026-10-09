export default function Main() {
  return (
    <main>
      <section id="home">
        <div className="text-box flex-row space1">
          <img className="profile" src="../public/profile.jpg" alt="Foto" />
          <br />  
          <div className="content">
            <h2>Olá, eu me chamo Matheus Iago.</h2>
            <p className="text">
              Desenvolvo aplicações web e o meu intuito é entregar interfaces limpas e agradáveis.
            </p>
          </div>
        </div>
        <div className="text-box flex-row" id="space4">
          <img className="logo" src="../public/github.png" alt="Foto" />
          <br />  
          <div className="content-space4">
            <h2>Repositórios</h2>
            <p className="text">
              Meus projetos estão armazenados em repositórios remotos na plataforma do Github.
            </p>
            <br />
            <button className="button-projects">Meus Projetos</button>
          </div>
        </div>
      </section>
      <section id="about"></section>
      <section id="tech"></section>
      <section id="projects"></section>
      <section id="contacts"></section>
    </main>
  )
}