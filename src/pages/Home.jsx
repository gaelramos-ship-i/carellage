import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import '../styles/home.scss'
import Carousel from '../components/carousel.jsx'

function Home(){
  return(
    <>
    <header>
      <div className='section-header'>
        <a href="/">
          <img src="images\logo.png" alt="logo" width={'80px'}/>
          <p>Artisan <span>Carreleur</span></p>
        </a>
        <Navbar />
      </div>
    </header>

    <main>

      <Carousel />
 
    </main>

    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default Home