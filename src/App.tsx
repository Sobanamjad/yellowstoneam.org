import './App.css'
import Header from './components/Header'
import HeroSlideshow from './components/HeroSlideshow'
import NewsSection from './components/NewsSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSlideshow />
        <NewsSection />
      </main>
      <Footer />
    </>
  )
}

export default App
