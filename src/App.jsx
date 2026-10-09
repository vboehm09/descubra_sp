import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiArrowUp, FiPhone, FiMail } from 'react-icons/fi'
import './App.css'

function App() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [mostrarTopo, setMostrarTopo] = useState(false);

  const rolarPara = (id) => {
    const elemento = document.getElementById(id);
    if (elemento) {
      window.scrollTo({
        top: elemento.offsetTop - 80,
        behavior: 'smooth'
      });
      setMenuAberto(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setMostrarTopo(true);
      } else {
        setMostrarTopo(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const voltarAoTopo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pontosTuristicos = [
    { id: 1, titulo: 'Avenida Paulista', img: '../public/paulista.jpg', desc: 'O coração financeiro e cultural da cidade, repleto de museus e teatros.' },
    { id: 2, titulo: 'Parque Ibirapuera', img: '../public/ibirapuera.jpg', desc: 'O pulmão verde de São Paulo. Perfeito para caminhadas e piqueniques.' },
    { id: 3, titulo: 'Museu do Ipiranga', img: '../public/ipiranga.jpg', desc: 'Conta a história da independência do Brasil em um prédio monumental.' },
    { id: 4, titulo: 'Bairro da Liberdade', img: '../public/liberdade.jpg', desc: 'O maior bairro japonês fora do Japão, com gastronomia oriental autêntica.' }
  ];

  return (
    <>
      <header className="header">
        <div className="container header-container">
          <h1 className="logo">Descubra <span>SP</span></h1>
          
          <button className="menu-toggle" onClick={() => setMenuAberto(!menuAberto)}>
            {menuAberto ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
          
          <nav className={`nav-menu ${menuAberto ? 'active' : ''}`}>
            <ul>
              <li><a onClick={() => rolarPara('inicio')}>Início</a></li>
              <li><a onClick={() => rolarPara('pontos')}>Pontos Turísticos</a></li>
              <li><a onClick={() => rolarPara('experiencias')}>Experiências</a></li>
              <li><a onClick={() => rolarPara('contato')}>Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="container hero-container">
            <div className="hero-text">
              <h2>Explore a maior metrópole da América do Sul</h2>
              <p>Descubra a cultura, a gastronomia e a energia única de São Paulo. Prepare-se para uma viagem inesquecível.</p>
              <button className="btn-destaque" onClick={() => rolarPara('pontos')}>Ver Pontos Turísticos</button>
            </div>
            <div className="hero-image">
              <img src="../public/vista-aerea.jpg" alt="Vista aérea de São Paulo" />
            </div>
          </div>
        </section>

        <section id="pontos" className="cards-section">
          <div className="container">
            <h2 className="section-title">Principais Pontos Turísticos</h2>
            <p className="section-subtitle">Conheça os lugares que você não pode deixar de visitar.</p>
            
            <div className="cards-container">
              {pontosTuristicos.map((ponto) => (
                <article key={ponto.id} className="card">
                  <div className="card-image">
                    <img src={ponto.img} alt={ponto.titulo} />
                  </div>
                  <div className="card-content">
                    <h3>{ponto.titulo}</h3>
                    <p>{ponto.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencias" className="info-section">
          <div className="container">
            <h2>Experiências Únicas</h2>
            <p>De tours gastronômicos no Mercado Municipal a passeios de helicóptero, temos o pacote ideal.</p>
          </div>
        </section>
      </main>

      <footer id="contato" className="footer">
        <div className="container footer-container">
          <div className="footer-info">
            <h3>Descubra SP</h3>
            <p>Sua agência de viagens especializada em São Paulo.</p>
            <p className="contato-item">
              <FiPhone size={16} /> (11) 99999-9999
            </p>
            <p className="contato-item">
              <FiMail size={16} /> contato@descubrasp.com
            </p>
          </div>
          <div className="footer-copy">
            <p>&copy; 2026 Descubra SP. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <button 
        className={`btn-topo ${mostrarTopo ? 'mostrar' : ''}`} 
        onClick={voltarAoTopo}
        title="Voltar ao topo"
      >
        <FiArrowUp size={24} />
      </button>
    </>
  )
}

export default App