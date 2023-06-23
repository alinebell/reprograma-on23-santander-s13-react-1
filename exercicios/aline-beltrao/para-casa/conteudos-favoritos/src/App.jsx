import './App.css'
import Bio from './components/Bio'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

import skin from './assets/skin-care.webp'
import mental from './assets/saude-mental.jpg'
import bolo from './assets/bolo-de-milho.jpg'

function App() {

  return (
    <>
      <Header />
      <Bio />

      <Card
      title="Skin Care gostosinha" 
      description="Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis." 
      image={skin} 
      imageAlt="mulher fazendo skin care" 
      />

<Card
      title="Cuidar da cabeça" 
      description="Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis." 
      image={mental} 
      imageAlt="campanha de saude mental" 
      />

      <Card
      title="Comer comida boa" 
      description="Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis." 
      image={bolo} 
      imageAlt="foto de um bolo de milho"
      />

      <Footer name="Aline"/>
    </>
  )
}

export default App
