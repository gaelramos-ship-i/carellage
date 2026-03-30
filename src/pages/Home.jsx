import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import '../styles/home.scss'

function Home(){
  return(
    <>
    <header>
      <div className='section-header'>
        <a href="/">
          <img src="images\logo.png" alt="logo" width={'100px'}/>
        </a>
        <Navbar />
      </div>
    </header>

    <main>
 
    </main>

    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default Home